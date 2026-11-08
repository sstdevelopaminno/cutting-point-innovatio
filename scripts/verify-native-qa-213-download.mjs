import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/app/downloads/page.tsx", import.meta.url), "utf8");
const config = readFileSync(new URL("../next.config.ts", import.meta.url), "utf8");
const assets = JSON.parse(readFileSync(new URL("./android-apk-assets.json", import.meta.url), "utf8")).assets;

const name = "CpIPOS-Native-Mobile-2.1.3.apk";
const qa = assets.find((asset) => asset.fileName === name);
assert.ok(qa, "QA 2.1.3 must be staged to the company CDN");
assert.equal(qa.channel, "qa-mobile");
assert.match(qa.sha256, /^[a-f0-9]{64}$/);
assert.ok(Number.isSafeInteger(qa.size) && qa.size > 1_000_000);
assert.ok(Number.isSafeInteger(qa.releaseAssetId) && qa.releaseAssetId > 0);
assert.equal(qa.url,
  "https://github.com/sstdevelopaminno/CpIPOS/releases/download/native-mobile-v2.1.3-qa/" + name);
assert.ok(source.includes('version: "v2.1.3 QA"'));
assert.ok(source.includes('fileName: "' + name + '"'));
assert.ok(source.includes('url: "/downloads/apk/' + name + '"'));
assert.ok(config.includes('"' + name + '"'));
assert.ok(source.includes("getVerifiedAndroidMobileRelease()"), "Keep stable customer update authority");
assert.ok(source.includes("const ANDROID_MOBILE_STABLE_DIRECT"), "Keep stable fallback for customers");
console.log("Verified same-domain Android QA 2.1.3 download, immutable asset metadata, and separate Stable policy.");
