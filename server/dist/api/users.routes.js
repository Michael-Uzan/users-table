"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const router = express_1.default.Router();
router.get("/", users_controller_1.usersController.getUsers);
router.get("/:id", users_controller_1.usersController.getUserById);
router.post("/", users_controller_1.usersController.addUser);
router.put("/:id", users_controller_1.usersController.updateUser);
router.delete("/:id", users_controller_1.usersController.removeUser);
exports.default = router;
//# sourceMappingURL=users.routes.js.map