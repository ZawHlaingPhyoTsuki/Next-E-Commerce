import { Request, Response } from "express";
import { createUserService, getUsersService } from "../services/user.service";

export const getUsers = async (req: Request, res: Response) => {
  const users = await getUsersService();
  res.json(users);
};

export const createUser = async (req: Request, res: Response) => {
  const { name, email } = req.body;
  const user = await createUserService({ name, email });
  res.status(201).json(user);
};
