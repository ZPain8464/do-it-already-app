import React from "react";

const Context = React.createContext({
  todos: [],
  categories: [],
  toggleComplete: () => {},
  createTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
});

export default Context;
