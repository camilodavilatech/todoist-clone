import { defineConfig } from "auth-astro";
import GoogleProvider from "@auth/core/providers/google";

export default defineConfig({
  providers: [
    GoogleProvider({
      clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
      clientId: import.meta.env.GOOGLE_CLIENT_ID,
    }),
  ],

  callbacks: {
    async session({ session }) {
      return session;
    },
  },
});
