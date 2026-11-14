/**
 * Read-only Production smoke check. No credentials, cookies, customer data,
 * POST requests, or bill/tenant mutations are used.
 *
 * This checks public reachability and visible server-rendered markers only.
 * It does NOT establish Vercel project ownership, live build SHA, or
 * authenticated POS/IT transaction acceptance.
 */
const checks = [
  {
    name: "Company apex redirects to canonical www",
    url: "https://cuttingpointinnovation.com/",
    host: "www.cuttingpointinnovation.com",
    marker: "CUTTING POINT INNOVATION",
  },
  {
    name: "Company Downloads and Android QA disclosure",
    url: "https://www.cuttingpointinnovation.com/downloads",
    host: "www.cuttingpointinnovation.com",
    marker: "CpIPOS-Native-Mobile-2.1.4.apk",
  },
  {
    name: "Company contact page",
    url: "https://www.cuttingpointinnovation.com/contact",
    host: "www.cuttingpointinnovation.com",
    marker: "CONTACT CENTER",
  },
  {
    name: "POS store-code sign in",
    url: "https://pos.cuttingpointinnovation.com/login/store",
    host: "pos.cuttingpointinnovation.com",
    marker: "Store code",
  },
  {
    name: "Independent IT Admin sign in",
    url: "https://cp-ipos-it-web.vercel.app/it-admin/login",
    host: "cp-ipos-it-web.vercel.app",
    marker: "IT Control Plane sign in",
  },
];

const failures = [];

for (const check of checks) {
  // Use a separate deadline per public GET. A failed request never triggers
  // another request or changes any data.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);
  try {
    const response = await fetch(check.url, {
      method: "GET",
      redirect: "follow",
      signal: controller.signal,
      headers: { "Cache-Control": "no-cache" },
    });
    const finalUrl = new URL(response.url);
    if (!response.ok) throw new Error("HTTP " + response.status);
    if (finalUrl.protocol !== "https:" || finalUrl.hostname !== check.host) {
      throw new Error("Unexpected final origin " + finalUrl.origin);
    }
    if (!(response.headers.get("content-type") || "").includes("text/html")) {
      throw new Error("Expected HTML content-type");
    }
    const html = await response.text();
    if (!html.includes(check.marker)) {
      throw new Error("Required public page marker missing: " + check.marker);
    }
    console.log("[PASS] " + check.name + " (HTTP " + response.status + ")");
  } catch (error) {
    failures.push({ name: check.name, reason: String(error?.message || error) });
    console.error("[FAIL] " + check.name + ": " + String(error?.message || error));
  } finally {
    clearTimeout(timeout);
  }
}

if (failures.length) {
  console.error("Public smoke failed: " + failures.length + "/" + checks.length);
  console.error("Investigate source host routing, deploy/alias and edge before customer impact.");
  process.exitCode = 1;
} else {
  console.log("Public smoke passed: " + checks.length + "/" + checks.length);
  console.log("Authenticated store/IT flows and deployed commit parity remain unverified.");
}
