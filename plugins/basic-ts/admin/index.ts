import type { PluginDefinition } from "@strapi/strapi/admin";
import Icon from "./icon";

const plugin: PluginDefinition = {
  register(app) {
    app.registerPlugin({
      id: "basic-ts",
      name: "basic-ts",
    });

    app.addMenuLink({
      intlLabel: {
        id: "basic-ts.plugin.title",
        defaultMessage: "Basic TypeScript Plugin",
      },
      to: "basic-ts",
      icon: Icon,
      async Component() {
        return {
          default: () => "Hello from basic typescript plugin!",
        };
      },
      permissions: [],
    });
  },
};

export default plugin;
