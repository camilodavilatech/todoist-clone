// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), auth()],

  redirects: {
    "/app": "/app/today",
    "/app/": "/app/today",
  },

  output: "server",
  adapter: vercel(),
});