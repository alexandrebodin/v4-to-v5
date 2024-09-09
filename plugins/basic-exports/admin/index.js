/** @type import('@strapi/strapi/admin').PluginDefinition */
const plugin = {
  register(app) {
    app.registerPlugin({
      id: "basic-exports",
      name: "basic-exports",
    });

    app.addMenuLink({
      id: "basic-exports",
      title: {
        id: "basic.plugin.title",
        defaultMessage: "Basic Plugin",
      },
      intlLabel: {
        id: "basic.plugin.title",
        defaultMessage: "Basic Plugin",
      },
      to: "/basic-exports",
      icon: () => "Basic exports",
      async Component() {
        return {
          default: () => "Hello from basic exports plugin!",
        };
      },
    });
  },
};

export default plugin;
