import React from "react";
import ReactDOM from "react-dom";
import Todo from "../Todos/Todo";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Todo />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
