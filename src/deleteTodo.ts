import type { Request, Response } from "express";
import { readTodos, writeTodos } from "./todoStorage";

export const deleteTodo = (req: Request, res: Response) => {
  const todos = readTodos();
  const id = parseInt(req.params.id ?? "");
  const filtered = todos.filter((t) => t.id !== id);
  writeTodos(filtered);
    res.json({ message: "Deleted" });
  }