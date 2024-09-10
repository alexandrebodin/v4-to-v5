import Icon from "./icon";

/** @type import('@strapi/strapi/admin').PluginDefinition */
const plugin = {
  register(app) {
    app.registerPlugin({
      id: "basic-exports",
      name: "basic-exports",
    });

    app.addMenuLink({
      intlLabel: {
        id: "basic-exports.plugin.title",
        defaultMessage: "Basic export Plugin",
      },
      to: "basic-exports",
      icon: Icon,
      async Component() {
        return {
          default: () => "Hello from basic exports plugin!",
        };
      },
      permissions: [],
    });
  },
};

export default plugin;
