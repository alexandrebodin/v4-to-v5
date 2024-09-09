/** @type import('@strapi/strapi/admin').PluginDefinition */
const plugin = {
  register(app) {
    app.registerPlugin({
      id: "basic",
      name: "basic",
    });

    app.addMenuLink({
      id: "basic",
      title: {
        id: "basic.plugin.title",
        defaultMessage: "Basic Plugin",
      },
      intlLabel: {
        id: "basic.plugin.title",
        defaultMessage: "Basic Plugin",
      },
      to: "/basic",
      icon: () => "Basic",
      async Component() {
        return {
          default: () => "Hello from basic plugin!",
        };
      },
    });
  },
};

export default plugin;
