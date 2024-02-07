import { usersService } from "./users.service";

import { Request, Response } from "express";

export const usersController = {
  getUsers,
  getUserById,
  addUser,
  removeUser,
  updateUser,
};

async function getUsers(req: Request, res: Response) {
  try {
    const criteria = req.query;
    const users = await usersService.query(criteria);
    res.json(users);
  } catch (err) {
    console.error("Failed to get users", err);
    res.status(500).send({ err: "Failed to get users" });
  }
}

async function getUserById(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    // const filterBy = req.query;
    const user = await usersService.getById(+userId);
    // board = _filterBoard(filterBy, board);
    res.json(user);
  } catch (err) {
    console.error("Failed to get user", err);
    res.status(500).send({ err: "Failed to get user" });
  }
}

async function addUser(req: Request, res: Response) {
  try {
    const user = req.body;
    const addedBoard = await usersService.add(user);
    res.send(addedBoard);
  } catch (err) {
    console.error("Failed to add board", err);
    res.status(500).send({ err: "Failed to add board" });
  }
}

async function updateUser(req: Request, res: Response) {
  try {
    const user = req.body;
    const savedUser = await usersService.update(user);
    res.send(savedUser);
  } catch (err) {
    console.error("Failed to update user", err);
    res.status(500).send({ err: "Failed to update user" });
  }
}

async function removeUser(req: Request, res: Response) {
  try {
    const userId = req.params.id;
    const removedId = await usersService.remove(+userId);
    res.send(removedId);
  } catch (err) {
    console.error("Failed to remove user", err);
    res.status(500).send({ err: "Failed to remove user" });
  }
}
