const isDev = process.env.NODE_ENV !== "production";

const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://www.googletagmanager.com https://www.google-analytics.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.google-analytics.com https://*.supabase.co",
  "font-src 'self' data:",
  `connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.supabase.co${isDev ? " ws: http://localhost:*" : ""}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=()",
  },
];

const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [60, 72, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kyjtswuxuyqzidnxvsax.supabase.co",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
  async redirects() {
    return [
      // Canonical Field Stories gallery (308 permanent redirect).\n      { source: "/pos/field-stories", destination: "/pos-installations", permanent: true },\n      // Common variants / old paths.
      { source: "/template/:path*", destination: "/templates/:path*", permanent: false },
      { source: "/portfolio", destination: "/templates", permanent: false },
      { source: "/downloads/native-mobile-qa", destination: "/downloads#android", permanent: false },
    ];
  },
  async headers() {
    const apkFiles = [
      "CpIPOS-Native-Mobile-2.1.3.apk",
      "CpIPOS-Native-Mobile-2.1.2.apk",
      "CpIPOS-Native-Mobile-2.1.0.apk",
      "CpIPOS-Android-POS-1.0.27.apk",
      "CpIPOS-Android-POS-1.0.25.apk",
    ];
    return [
      ...apkFiles.map((name) => ({
        source: `/downloads/apk/${name}`,
        headers: [
          { key: "Content-Type", value: "application/vnd.android.package-archive" },
          { key: "Content-Disposition", value: `attachment; filename="${name}"` },
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      })),

      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;