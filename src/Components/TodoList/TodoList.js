import React from "react";
import Context from "../../Context/Context";
import TodoModal from "../TodoModal/TodoModal";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class TodoList extends React.Component {
  static contextType = Context;

  state = {
    show: false,
  };

  showModal = () => {
    this.setState({
      show: true,
    });
  };

  hideModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <div className={`TodoList ${this.props.checked}`}>
        <h2>{this.props.checked ? "Completed" : "Pending"} Todos</h2>
        <div className="create-todo-mobile">
          <Link to="/bucket-list-categories">
            <button className="create-todo-button">Create Todo</button>
          </Link>
        </div>
        <div
          className={this.props.checked ? "completed-todos" : "pending-todos"}
        >
          <ul>
            {this.context.todos
              .filter((t) => t.checked === this.props.checked)
              .map((todo, i) => (
                <li key={i} className={todo.category}>
                  <div className="view-todo-desktop">
                    <Link to={`/bucket-list-todos/${todo.id}`}>
                      {todo.title}
                    </Link>
                  </div>
                  <div className="view-todo-modal">
                    <TodoModal
                      {...this.props}
                      show={this.state.show}
                      handleClose={this.hideModal}
                    />
                    <button
                      onClick={this.showModal}
                      className="view-todo-modal-button"
                    >
                      <Link to={`/bucket-list-todos/${todo.id}`}>
                        {todo.title}
                      </Link>
                    </button>
                  </div>
                  {todo.checked === true ? (
                    <span className="checkmark-todos">
                      <FaCheckCircle className="completed-check-logo" />
                    </span>
                  ) : (
                    ""
                  )}
                </li>
              ))}
          </ul>
          <div className="create-todo-desktop">
            <button className="create-todo-button">
              <Link to="/bucket-list-categories">Create Todo</Link>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
