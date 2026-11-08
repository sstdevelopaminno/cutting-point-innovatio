import { readFileSync } from "node:fs";
import { strict as assert } from "node:assert";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const base = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const api = readFileSync(resolve(base, "src/app/api/public/emergency-broadcast/route.ts"), "utf8");
const client = readFileSync(resolve(base, "src/components/EmergencyBroadcastBar.tsx"), "utf8");

assert.match(api, /public, max-age=0, s-maxage=10, stale-while-revalidate=10/);
assert.match(api, /response\.headers\.set\("cache-control", "no-store"\)/);
assert.match(api, /const active = Boolean\(/);
assert.match(client, /if \(inFlightRef\.current\) return/);
assert.match(client, /now - lastRequestedAtRef\.current < 8_000/);
assert.match(client, /inFlightRef\.current = false/);
assert.match(client, /cache: "default"/);
assert.match(client, /credentials: "omit"/);
assert.doesNotMatch(client, /cache: "no-store"/);
console.log("PASS: 10s public-only CDN cache, no-store errors, browser poll singleflight.");
