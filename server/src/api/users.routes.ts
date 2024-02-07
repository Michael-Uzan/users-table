import { usersController } from "./users.controller";

import express from "express";

const router = express.Router();

router.get("/", usersController.getUsers);
router.get("/:id", usersController.getUserById);
router.post("/", usersController.addUser);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.removeUser);

export default router;
