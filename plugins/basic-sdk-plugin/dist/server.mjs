const index = {
  controllers: {
    basicController: {
      async index(ctx) {
        ctx.body = "Hello from basic controller!";
      }
    }
  },
  routes: {
    "content-api": {
      routes: [
        {
          method: "GET",
          path: "/basic",
          handler: "basicController.index",
          config: {
            policies: []
          }
        }
      ]
    }
  }
};
export {
  index as default
};
//# sourceMappingURL=server.mjs.map
