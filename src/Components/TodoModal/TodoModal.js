import React from "react";
import DummyStore from "../../DummyStore/DummyStore";

function TodoModal(props) {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  const viewTodo = DummyStore.todos;
  const id = parseInt(props.match.params.id) - 1;
  const todoId = viewTodo[id];

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {props.match.params.id ? (
          <>
            <h2>Todo: {todoId.name}</h2>

            <p>Category: {todoId.category}</p>
            <label>Check completed:</label>
            <input type="checkbox" />
            <p>Description: {todoId.description}</p>
            <p>
              Created on: {new Date(todoId.start_date).toLocaleDateString()}
            </p>
          </>
        ) : (
          ""
        )}
        <button onClick={props.handleClose}>Close</button>
      </section>
    </div>
  );
}

export default TodoModal;