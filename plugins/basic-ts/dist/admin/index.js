"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Icon_1 = __importDefault(require("./Icon"));
const plugin = {
    register(app) {
        app.registerPlugin({
            id: "basic-ts",
            name: "basic-ts",
        });
        app.addMenuLink({
            intlLabel: {
                id: "basic-ts.plugin.title",
                defaultMessage: "Basic TypeScript Plugin",
            },
            to: "basic-ts",
            icon: Icon_1.default,
            async Component() {
                return {
                    default: () => "Hello from basic typescript plugin!",
                };
            },
            permissions: [],
        });
    },
};
exports.default = plugin;
//# sourceMappingURL=index.js.map