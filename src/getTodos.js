import { Request, Response } from "express";
import { loadTodos, saveTodos } from "./todoStorage";
export const getTodos = (_req, res) => {
  res.json(loadTodos());
};