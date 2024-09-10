import Icon from "./icon";

/** @type import('@strapi/strapi/admin').PluginDefintion */
const plugin = {
  register(app) {
    app.registerPlugin({
      id: "basic-sdk-plugin",
      name: "basic-sdk-plugin",
    });

    app.addMenuLink({
      intlLabel: {
        id: "basic-sdk-plugin.plugin.title",
        defaultMessage: "Basic SDK Plugin",
      },
      to: "basic-sdk-plugin",
      icon: Icon,
      async Component() {
        return {
          default: () => "Hello from basic SDK plugin!",
        };
      },
      permissions: [],
    });
  },
};

export default plugin;
