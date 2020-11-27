import React from "react";

const Context = React.createContext({
  todos: [],
  categories: [],
  setLoggedInUserTodos: () => {},
  setUser: () => {},
  setCategories: () => {},
  handleLogout: () => {},
  toggleComplete: () => {},
  createTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
});

export default Context;
