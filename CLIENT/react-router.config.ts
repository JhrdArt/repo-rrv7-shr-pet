import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // Define el directorio donde se encuentran los assets del cliente
  buildDirectory: "build/client",
} satisfies Config;
