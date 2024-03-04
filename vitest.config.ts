import { getViteConfig } from "astro/config";

export default getViteConfig({
  test: {
    // Vitest configuration options
    include: ["./**/*.test.ts", "./**/*.test.tsx"],
    globals: true,
  },
});
