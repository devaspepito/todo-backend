import { saveTodos, loadTodos } from "./todoStorage";
import { Request, Response } from "express";
import { Todo } from "./types"; // Adjust the path if your Todo type is elsewhere

export const updateTodo = (req, res) => {
  const todos = loadTodos();
  const id = Number(req.params.id);
  const { title, completed, description } = req.body;
  const todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).send("Not found");

  if (title !== undefined) todo.title = title;
  if (completed !== undefined) todo.completed = completed;
  if (description !== undefined) todo.description = description;
  saveTodos(todos);
  return res.json(todo);
}