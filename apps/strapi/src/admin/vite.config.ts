import { mergeConfig, UserConfig } from "vite";

export default (config: UserConfig) => {
  // Important: always return the modified config
  return mergeConfig(config, {
    optimizeDeps: {
      include: [
        "@v4-to-v5/plugin-basic/strapi-admin",
        "@v4-to-v5/plugin-basic-exports/strapi-admin",
        "@v4-to-v5/plugin-basic-ts/strapi-admin",
      ],
    },
    build: {
      commonjsOptions: {
        include: [/plugins\/(.*)\/strapi-admin/, /node_modules/],
      },
    },
  });
};
