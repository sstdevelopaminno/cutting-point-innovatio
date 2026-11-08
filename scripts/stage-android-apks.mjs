// Stage immutable signed APKs into Next.js public/ *before* the production build.
// The website/CDN serves these bytes; customer downloads do not visit GitHub.
import { createHash } from "node:crypto";
import { createReadStream, createWriteStream } from "node:fs";
import { mkdir, rename, rm, stat, readFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

const root = fileURLToPath(new URL("../", import.meta.url));
const { assets } = JSON.parse(await readFile(new URL("./android-apk-assets.json", import.meta.url), "utf8"));
const dir = join(root, "public", "downloads", "apk");

function validate(asset) {
  const { fileName, sha256, size, url } = asset;
  if (!/^CpIPOS-[A-Za-z0-9.-]+\.apk$/.test(fileName) ||
      !/^[0-9a-f]{64}$/.test(sha256) ||
      !Number.isSafeInteger(size) || size < 1_000_000 || size > 30_000_000) {
    throw new Error("Invalid pinned APK metadata: " + fileName);
  }
  const from = new URL(url);
  if (from.protocol !== "https:" || from.hostname !== "github.com" ||
      !from.pathname.startsWith("/sstdevelopaminno/CpIPOS/releases/download/") ||
      !from.pathname.endsWith("/" + fileName)) {
    throw new Error("Unapproved release source: " + url);
  }
}

async function integrity(path, asset) {
  try {
    const info = await stat(path);
    if (info.size !== asset.size) return false;
    const hash = createHash("sha256");
    for await (const chunk of createReadStream(path)) hash.update(chunk);
    return hash.digest("hex") === asset.sha256;
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}

async function stage(asset) {
  validate(asset);
  const target = join(dir, asset.fileName);
  if (await integrity(target, asset)) {
    console.log("[APK CDN] Reusing verified " + asset.fileName);
    return;
  }

  let failure;
  for (let attempt = 1; attempt <= 3; attempt++) {
    const temp = target + "." + process.pid + "." + attempt + ".tmp";
    try {
      const response = await fetch(asset.url, {
        redirect: "follow",
        headers: { Accept: "application/octet-stream", "User-Agent": "CpIPOS-Site-Verified-APK-Deployment" },
        signal: AbortSignal.timeout(90000)
      });
      if (!response.ok || !response.body) {
        throw new Error("GitHub release HTTP " + response.status + " for " + asset.fileName);
      }
      const suppliedLength = response.headers.get("content-length");
      if (suppliedLength && Number(suppliedLength) !== asset.size) {
        throw new Error("Unexpected release response length: " + suppliedLength);
      }
      await pipeline(Readable.fromWeb(response.body), createWriteStream(temp, { flags: "wx" }));
      if (!(await integrity(temp, asset))) {
        throw new Error("APK hash or size mismatch (fail closed): " + asset.fileName);
      }
      await rename(temp, target);
      console.log("[APK CDN] Verified and staged " + asset.fileName + " (" + asset.size + " bytes)");
      return;
    } catch (error) {
      failure = error;
      console.error("[APK CDN] Attempt " + attempt + " failed for " + asset.fileName + ": " + error.message);
      if (attempt < 3) await new Promise((resolve) => setTimeout(resolve, attempt * 1500));
    } finally {
      await rm(temp, { force: true });
    }
  }
  throw new Error("Refusing to deploy unverified APK " + asset.fileName + ": " + failure.message);
}

await mkdir(dir, { recursive: true });
for (const asset of assets) await stage(asset);
console.log("[APK CDN] All " + assets.length + " APKs verified; ready for static deployment.");
