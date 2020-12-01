import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/Context";
import Config from "../../Config/Config";
import TokenService from "../../Services/TokenService";

function TodoModal(props) {
  const context = useContext(Context);

  function deleteTodo(todoid, cb) {
    fetch(`${Config.REACT_APP_API_BASE_URL}/api/todos/${todoid}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => Promise.reject(error));
        }
        return res;
      })
      .then(() => {
        cb(todoid);
        props.history.push("/bucket-list-todos");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";
  const todo =
    context.todos.find((todo) => todo.id === Number(props.match.params.id)) ||
    {};

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <h2>{todo.title}</h2>
        <h3 className="view-todo-category">category: {todo.category}</h3>

        <div className="todo-textbox">
          <p>{todo.description}</p>
        </div>
        <div className="todo-details">
          <div className="todo-created-date">
            <p>
              Created on:
              <span />
              {new Date(todo.start_date).toLocaleDateString()}
            </p>
          </div>
          <div className="todo-checkbox">
            <p>
              <input
                className="checkmark"
                type="checkbox"
                checked={todo.checked ? true : false}
                onClick={() => context.toggleComplete(todo.id)}
              />{" "}
              Completed?
            </p>
          </div>
          <div className="edit-delete-todos">
            <Link to={`/edit-todo/${todo.id}`}>
              <button className="edit-button">Edit</button>
            </Link>
            <button
              className="delete-button"
              onClick={(e) => deleteTodo(Number(todo.id), context.deleteTodo)}
            >
              Delete
            </button>
          </div>
        </div>
        <button className="close-button" onClick={props.handleClose}>
          Close
        </button>
      </section>
    </div>
  );
}

export default TodoModal;
