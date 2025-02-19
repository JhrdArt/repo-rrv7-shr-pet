import type { Config } from "@react-router/dev/config";
import { writeFile } from "fs/promises";
export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  async buildEnd({ buildManifest }) {
    const manifest: any = buildManifest;
    if (!manifest.publicPath) {
      manifest.publicPath = "/";
    }
    if (!manifest.assetsBuildDirectory) {
      manifest.assetsBuildDirectory = "build/client";
    }
    await writeFile("build/manifest.json", JSON.stringify(manifest, null, 2), "utf-8");
  },

} satisfies Config;
