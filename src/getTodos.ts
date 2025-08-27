import type { Request, Response } from "express";
import { loadTodos, saveTodos } from "./todoStorage";
export const getTodos = (_req: Request, res: Response) => {
  res.json(loadTodos());
};