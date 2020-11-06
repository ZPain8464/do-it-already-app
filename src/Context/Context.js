import React from "react";
import DummyStore from "../DummyStore/DummyStore";

const Context = React.createContext({
  todos: DummyStore.todos,
  folders: DummyStore.folders,
});

export default Context;
