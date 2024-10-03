// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import auth from "auth-astro";
import vercel from "@astrojs/vercel/serverless";

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), auth(), db()],

  redirects: {
    "/app": "/app/today",
    "/app/": "/app/today",
  },

  output: "server",
  adapter: vercel(),
});