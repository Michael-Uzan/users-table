"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersController = void 0;
const users_service_1 = require("./users.service");
exports.usersController = {
    getUsers,
    getUserById,
    addUser,
    removeUser,
    updateUser,
};
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const criteria = req.query;
            const users = yield users_service_1.usersService.query(criteria);
            res.json(users);
        }
        catch (err) {
            console.error("Failed to get users", err);
            res.status(500).send({ err: "Failed to get users" });
        }
    });
}
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.params.id;
            const user = yield users_service_1.usersService.getById(+userId);
            res.json(user);
        }
        catch (err) {
            console.error("Failed to get user", err);
            res.status(500).send({ err: "Failed to get user" });
        }
    });
}
function addUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = req.body;
            const addedUser = yield users_service_1.usersService.add(user);
            res.send(addedUser);
        }
        catch (err) {
            console.error("Failed to add user", err);
            res.status(500).send({ err: "Failed to add user" });
        }
    });
}
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = req.body;
            const savedUser = yield users_service_1.usersService.update(user);
            res.send(savedUser);
        }
        catch (err) {
            console.error("Failed to update user", err);
            res.status(500).send({ err: "Failed to update user" });
        }
    });
}
function removeUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userId = req.params.id;
            const removedId = yield users_service_1.usersService.remove(+userId);
            res.send(removedId);
        }
        catch (err) {
            console.error("Failed to remove user", err);
            res.status(500).send({ err: "Failed to remove user" });
        }
    });
}
//# sourceMappingURL=users.controller.js.map