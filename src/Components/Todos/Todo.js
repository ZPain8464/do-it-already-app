import React from "react";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";
import Config from "../../Config/Config";

export default class Todo extends React.Component {
  static contextType = Context;

  deleteTodo = (todoid, cb) => {
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
        this.props.history.push("/bucket-list-todos");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const todo =
      this.context.todos.find(
        (todo) => todo.id === Number(this.props.match.params.id)
      ) || {};
    return (
      <React.Fragment>
        <div className="view-todo-task">
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
                  onClick={() => this.context.toggleComplete(todo.id)}
                />{" "}
                Completed?
              </p>
            </div>
            <div>
              <Link to={`/edit-todo/${this.props.match.params.id}`}>
                <button>Edit</button>
              </Link>
              <button
                onClick={(e) =>
                  this.deleteTodo(
                    Number(this.props.match.params.id),
                    this.context.deleteTodo
                  )
                }
              >
                Delete
              </button>
              <div>
                <button
                  onClick={() => this.props.history.push("/bucket-list-todos")}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <Link to="/bucket-list-categories">
          <button>Create a todo</button>
        </Link>
      </React.Fragment>
    );
  }
}
