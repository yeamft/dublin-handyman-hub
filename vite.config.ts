import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: { preset: "vercel" },
  vite: {
    server: {
      port: 5173,
      host: true,
      strictPort: false,
    },
    preview: {
      port: 4173,
      host: true,
    },
  },
});
