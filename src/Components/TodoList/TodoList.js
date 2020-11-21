import React from "react";
import Context from "../../Context/Context";
import { Link } from "react-router-dom";

export default class TodoList extends React.Component {
  static contextType = Context;

  render() {
    return (
      <div className={`TodoList ${this.props.checked}`}>
        <h2>{this.props.checked ? "Completed" : "Pending"} Todos</h2>
        <div
          className={this.props.checked ? "completed-todos" : "pending-todos"}
        >
          <ul>
            {this.context.todos
              .filter((t) => t.checked === this.props.checked)
              .map((todo) => (
                <li className={todo.category}>
                  <Link to={`/bucket-list-todos/${todo.id}`}>{todo.title}</Link>
                  {todo.checked === true ? (
                    <span className="checkmark-todos">✓</span>
                  ) : (
                    ""
                  )}
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
