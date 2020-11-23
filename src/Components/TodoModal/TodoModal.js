import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../Context/Context";
import Config from "../../Config/Config";

function TodoModal(props) {
  const context = useContext(Context);

  function deleteTodo(todoid, cb) {
    fetch(`${Config.REACT_APP_API_BASE_URL}/api/todos/${todoid}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
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
        <h3>category: {todo.category}</h3>

        <div className="todo-textbox">
          <p>{todo.description}</p>
        </div>
        <div>
          <div>
            <p>
              Created on
              {new Date(todo.start_date).toLocaleDateString()}
            </p>
          </div>
          <div>
            <p>
              <input
                type="checkbox"
                checked={todo.checked ? true : false}
                onClick={() => context.toggleComplete(todo.id)}
              />{" "}
              Completed?
            </p>
          </div>
          <div>
            <Link to={`/edit-todo/${todo.id}`}>
              <button>Edit</button>
            </Link>
            <button
              onClick={(e) => deleteTodo(Number(todo.id), context.deleteTodo)}
            >
              Delete
            </button>
          </div>
        </div>
        <button onClick={props.handleClose}>Close</button>
      </section>
    </div>
  );
}

export default TodoModal;
