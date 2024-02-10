"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prod_1 = __importDefault(require("./prod"));
const dev_1 = __importDefault(require("./dev"));
let configConnection;
// keys.js - figure out what set of credentials to return
if (process.env.NODE_ENV === "production") {
    // we are in production - return the prod set of keys
    configConnection = prod_1.default;
}
else {
    // we are in development - return the dev keys!!!
    configConnection = dev_1.default;
}
exports.default = configConnection;
//# sourceMappingURL=index.js.map