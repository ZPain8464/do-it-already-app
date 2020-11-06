import React from "react";
import TodoModal from "../TodoModal/TodoModal";
import DummyStore from "../../DummyStore/DummyStore";
import { Link } from "react-router-dom";

export default class PendingTodos extends React.Component {
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
    const todos = DummyStore.todos;
    const id = this.props.match.params.id;
    const todoId = todos[id];

    return (
      <div className="pending-todos">
        <h2>Pending Todos</h2>

        {/* <div className="completed-view">
          <button onClick={this.showComModal}>View Completed Todos</button>
        </div> */}

        <ul>
          {todos.map((todo, i) =>
            todo.checked === false ? (
              <li key={i}>
                <Link to={`/bucket-list-todos/${todo.id}`}>
                  <h3>{todo.name}</h3>
                  <p>category: {todo.category}</p>
                </Link>
                <div>
                  <TodoModal
                    {...this.props}
                    show={this.state.show}
                    handleClose={this.hideModal}
                  />
                  <button
                    onClick={this.showModal}
                    className="view-todo-modal-button"
                  >
                    <Link to={`/bucket-list-todos/${todo.id}`}>View</Link>
                  </button>
                </div>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    );
  }
}
