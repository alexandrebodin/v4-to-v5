'use strict';

var index = {
  controllers: {
    basicController: {
      async index(ctx) {
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

module.exports = index;
