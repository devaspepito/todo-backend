import type { Request, Response } from "express";
import { loadTodos, saveTodos } from "./todoStorage";

export const deleteTodo = (req: Request, res: Response) => {
  const todos = loadTodos();
  const id = parseInt(req.params.id ?? "");
  const filtered = todos.filter((t) => t.id !== id);
  saveTodos(filtered);
    res.json({ message: "Deleted" });
  }