const { loadTodos, saveTodos } = require("./todoStorage");

export const deleteTodo = (req, res) => {
  const todos = loadTodos();
  const id = parseInt(req.params.id ?? "");
  const filtered = todos.filter((t) => t.id !== id);
  saveTodos(filtered);
  res.json({ message: "Deleted" });
};