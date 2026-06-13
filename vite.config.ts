import { defineConfig } from "vite";
import { resolve } from "node:path";

// Multi-page Valaki Exports site: Home / Products / About / Contact
export default defineConfig({
  appType: "mpa",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        products: resolve(__dirname, "products.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
      },
    },
  },
});
