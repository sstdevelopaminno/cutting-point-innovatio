import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/app/downloads/page.tsx", import.meta.url), "utf8");

// Verify the actual pattern used by the dynamic download page, not a
// duplicate pattern in this test. A double-escaped \d silently forced the
// fallback release even when a newer signed stable version was available.
const found = source.match(/!\/(\^[^\r\n]+?\$)\/\.test\(version\)/);
assert.ok(found, "Native Mobile version validation must be present");
const versionPattern = new RegExp(found[1]);
for (const version of ["2.1.0", "2.1.1", "2.2.0", "3.0.0", "10.12.31"]) {
  assert.equal(versionPattern.test(version), true, "valid stable version rejected: " + version);
}
for (const version of ["2.1.0-rc1", "2.1", "2.1.0.apk", "../2.2.0", "v2.1.0", "2.1.0\n"]) {
  assert.equal(versionPattern.test(version), false, "unverified version accepted: " + version);
}
for (const essential of [
  "getVerifiedAndroidMobileRelease()",
  "NATIVE_MOBILE_UPDATE_POLICY",
  "release.signingCertSha256?.toLowerCase() !== NATIVE_MOBILE_EXPECTED_CERT",
  "release.packageName !== \"com.cpipos.pos.next\"",
  "release.apkUrl !== expectedUrl",
  "release.apkSha256",
  "ANDROID_MOBILE_FALLBACK",
  "const androidMobileRelease = await getVerifiedAndroidMobileRelease();"
]) {
  assert.ok(source.includes(essential), "Native stable download verification missing: " + essential);
}
console.log("Verified Native Mobile stable release matcher accepts future versions and rejects unverified filenames.");
