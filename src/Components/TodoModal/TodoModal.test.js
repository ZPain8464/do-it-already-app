import React from "react";
import ReactDOM from "react-dom";
import TodoModal from "../TodoModal/TodoModal";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <TodoModal />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
