// Verifies the CDN files actually staged on disk during the production build.
import { createHash } from "node:crypto";
import { createReadStream } from "node:fs";
import { stat, readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import assert from "node:assert/strict";

const root = fileURLToPath(new URL("../", import.meta.url));
const { assets } = JSON.parse(await readFile(new URL("./android-apk-assets.json", import.meta.url), "utf8"));
for (const asset of assets) {
  const path = join(root, "public", "downloads", "apk", asset.fileName);
  const file = await stat(path);
  assert.equal(file.size, asset.size, "APK size mismatch: " + asset.fileName);
  const hash = createHash("sha256");
  for await (const chunk of createReadStream(path)) hash.update(chunk);
  assert.equal(hash.digest("hex"), asset.sha256, "APK hash mismatch: " + asset.fileName);
  console.log("[APK CDN] Verified deployed asset: " + asset.fileName);
}
