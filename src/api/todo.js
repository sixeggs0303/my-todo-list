import api from "./api";

export const getTodoList = () => {
  return api.get("/todos");
};

export const addTodo = (text) => {
  return api.post("/todos", { text });
};

export const deleteTodo = (todoId) => {
  return api.delete("/todos/" + todoId);
};
