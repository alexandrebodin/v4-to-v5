export default {
  controllers: {
    basicController: {
      async index(ctx: any) {
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
