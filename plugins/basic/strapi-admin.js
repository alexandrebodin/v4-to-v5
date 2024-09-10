const { Icon } = require("./icon");

/** @type import('@strapi/strapi/admin').PluginDefinition */
const plugin = {
  register(app) {
    app.registerPlugin({
      id: "basic",
      name: "basic",
    });

    app.addMenuLink({
      intlLabel: {
        id: "basic.plugin.title",
        defaultMessage: "Basic Plugin",
      },
      to: "basic",
      icon: Icon,
      async Component() {
        return {
          default: () => "Hello from basic plugin!",
        };
      },
      permissions: [],
    });
  },
};

module.exports = plugin;
