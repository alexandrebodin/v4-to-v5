module.exports = {
  controllers: {
    basicController: {
      index: async (ctx) => {
        ctx.body = "Hello from basic exports controller!";
      },
    },
  },
  routes: {
    "content-api": {
      routes: [
        {
          method: "GET",
          path: "/basic-exports",
          handler: "basicController.index",
          config: {
            policies: [],
          },
        },
      ],
    },
  },
};
