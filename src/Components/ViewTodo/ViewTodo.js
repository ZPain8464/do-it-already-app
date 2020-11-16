import React from "react";
import Config from "../../Config/Config";
import { Link } from "react-router-dom";

export default class ViewTodo extends React.Component {
  handleDelete = (todoid, cb) => {
    this.props.history.goBack("/bucket-list-todos");
    fetch(`${Config.API_BASE_URL}/api/todos/${todoid}`, {
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const viewTodo = this.props.todos;
    return (
      <div className="view-todo">
        <h2>View Todo</h2>
        <div className="view-todo-task">
          {viewTodo.map((vt, i) =>
            vt.id === Number(this.props.match.params.id) ? (
              <React.Fragment key={i}>
                <h3 key={i}>{vt.title}</h3>
                <div>
                  <h4>category: {vt.category}</h4>
                  <p key={i}>Description: {vt.description}</p>
                </div>
                <div>
                  <p key={i}>
                    Created on
                    {new Date(vt.start_date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <Link to={`/edit-todo/${this.props.match.params.id}`}>
                    <button>Edit</button>
                  </Link>
                  <button
                    onClick={(e) =>
                      this.handleDelete(
                        this.props.match.params.id,
                        this.props.deleteTodo
                      )
                    }
                  >
                    Delete
                  </button>
                </div>
              </React.Fragment>
            ) : (
              ""
            )
          )}
        </div>
        <Link to="/bucket-list-categories">
          <button>Create a todo</button>
        </Link>
      </div>
    );
  }
}
