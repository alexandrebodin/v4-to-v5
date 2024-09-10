import Icon from "./icon";

/** @type import('@strapi/strapi/admin').PluginDefintion */
const plugin = {
  register(app) {
    app.registerPlugin({
      id: "basic-rollup",
      name: "basic-rollup",
    });

    app.addMenuLink({
      intlLabel: {
        id: "basic-rollup.plugin.title",
        defaultMessage: "Basic Rolllup Plugin",
      },
      to: "basic-rollup",
      icon: Icon,
      async Component() {
        return {
          default: () => "Hello from basic Rolllup plugin!",
        };
      },
      permissions: [],
    });
  },
};

export default plugin;
