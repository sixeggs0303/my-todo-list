import api from "./api";

export const getTodoList = () => {
  return api.get("/todos");
};

export const addTodo = (text) => {
  return api.post("/todos", { text: text, done: false });
};

export const deleteTodo = (todoId) => {
  return api.delete("/todos/" + todoId);
};

export const updateTodo = (todo) => {
  return api.put("/todos/" + todo.id, { done: !todo.done });
};
