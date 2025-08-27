import { Request, Response } from "express";
import { saveTodos, loadTodos } from "./todoStorage";

export const addTodo = (req, res) => {
  const todos = loadTodos();
  const { title, description } = req.body;
  if (!title) return res.status(400).send("Missing title");

  const newTodo = {
    id: Date.now(),
    title,
    completed: false,
    description: description || "",
  };
  todos.push(newTodo);
  saveTodos(todos);
  return res.json(newTodo);
}