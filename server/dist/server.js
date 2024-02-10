"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_routes_1 = __importDefault(require("./api/users.routes"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
let port;
let host;
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json({ limit: "50mb" }));
app.use(express_1.default.static("public"));
if (process.env.NODE_ENV === "production") {
    port = "port on production";
    host = "host production";
    // Express serve static files on production environment
    app.use(express_1.default.static(path_1.default.resolve(__dirname, "src")));
}
else {
    port = process.env.BACK_PORT;
    host = process.env.BACK_HOST;
    const corsOptions = {
        // Make sure origin contains the url your frontend is running on
        origin: ["http://127.0.0.1:3000", "http://localhost:3000"],
    };
    app.use((0, cors_1.default)(corsOptions));
}
app.use("/api/users", users_routes_1.default);
app.listen(port, () => {
    console.log(`server running : http://${host}:${port}`);
});
//# sourceMappingURL=server.js.map