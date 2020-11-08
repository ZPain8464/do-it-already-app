import React from "react";
import DummyStore from "../DummyStore/DummyStore";

const Context = React.createContext({
  todos: DummyStore.todos,
});

export default Context;
