module.exports = {
  controllers: {
    basicController: {
      index: async (ctx) => {
        ctx.body = "Hello from basic controller!";
      },
    },
  },
  routes: {
    "content-api": {
      routes: [
        {
          method: "GET",
          path: "/basic",
          handler: "basicController.index",
          config: {
            policies: [],
          },
        },
      ],
    },
  },
};
