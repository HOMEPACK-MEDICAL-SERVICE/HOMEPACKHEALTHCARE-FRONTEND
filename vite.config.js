import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // Allow network access
    allowedHosts: [
      "fb76-102-222-203-66.ngrok-free.app", // ✅ Your ngrok domain
    ],
  },
});
