import type { Request, Response } from "express";
import { readTodos } from "./todoStorage";

export const getTodos = (_req: Request, res: Response) => {
  res.json(readTodos());
};