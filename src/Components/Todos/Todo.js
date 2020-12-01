import React from "react";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";
import Config from "../../Config/Config";
import TokenService from "../../Services/TokenService";

export default class Todo extends React.Component {
  static contextType = Context;

  deleteTodo = (todoid, cb) => {
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
                  onClick={() => this.context.toggleComplete(todo.id)}
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
                onClick={(e) =>
                  this.deleteTodo(
                    Number(this.props.match.params.id),
                    this.context.deleteTodo
                  )
                }
              >
                Delete
              </button>
            </div>
            <div className="close-todo">
              <button
                className="close-button"
                onClick={() => this.props.history.push("/bucket-list-todos")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
