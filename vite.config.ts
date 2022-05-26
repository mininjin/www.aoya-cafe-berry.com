import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import { createHtmlPlugin } from "vite-plugin-html";
import { visualizer } from "rollup-plugin-visualizer";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, "./");
  return {
    plugins: [
      vue(),
      createHtmlPlugin({
        minify: true,
        inject: {
          data: {
            title: env.VITE_APP_TITLE,
            description: env.VITE_DESCRIPTION,
            theme: env.VITE_THEME_COLOR,
            ogSiteUrl: env.VITE_SITE_URL,
            ogThumbnail: env.VITE_THUMBNAIL_URL,
            ogType: env.VITE_TYPE,
            ogSiteName: env.VITE_SITE_NAME,
            ogTwitterCard: env.VITE_TWITTER_CARD,
            loadingAnimationId: env.VITE_LOADING_ANIMATION_ID,
            loadingProgressBarId: env.VITE_LOADING_PROGRESS_BAR_ID,
          },
        },
      }),
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: [
          "favicon.ico",
          "robots.txt",
          "favicon.svg",
          "favicon-16x16.png",
          "favicon-32x32.png",
          "msapplication-icon-144x144.png",
          "mstile-150x150.png",
          "apple-touch-icon-152x152.png",
          "apple-touch-icon.png",
        ],
        manifest: {
          name: env.VITE_APP_TITLE,
          short_name: env.VITE_SITE_NAME,
          description: env.VITE_DESCRIPTION,
          theme_color: env.VITE_THEME_COLOR,
          background_color: "#ffffff",
          icons: [
            {
              src: "android-chrome-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "android-chrome-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],
    build: {
      rollupOptions: {
        plugins: [visualizer()],
      },
    },
    resolve: {
      alias: {
        "@/": `${__dirname}/src/`,
        "@types/": `${__dirname}/@type/`,
        "./runtimeConfig": "./runtimeConfig.browser",
      },
    },
  };
});
