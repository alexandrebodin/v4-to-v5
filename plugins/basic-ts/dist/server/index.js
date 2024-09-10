"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
//# sourceMappingURL=index.js.map