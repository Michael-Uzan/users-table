"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_routes_1 = __importDefault(require("./api/users.routes"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json({ limit: "50mb" }));
app.use("/api/users", users_routes_1.default);
// LIST
// app.get("/api/users", (req, res) => {
// const filterBy = {
//     txt: req.query.txt,
//     minSpeed: +req.query.minSpeed,
//     pageIdx: +req.query.page || 0
// }
//   usersService.query().then((users: any) => {
//     res.send(users);
//   });
// });
app.listen(process.env.BACK_PORT, () => {
    console.log(`server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}`);
});
//# sourceMappingURL=server.js.map