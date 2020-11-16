import React from "react";
import TodoModal from "../TodoModal/TodoModal";
import { Link } from "react-router-dom";
import Config from "../../Config/Config";

export default class PendingTodos extends React.Component {
  state = {
    show: false,
    checked: false,
    id: "",
  };

  handleCheck = (e, todoid) => {
    this.setState({
      checked: e.target.checked,
      id: todoid,
    });
  };

  handleSubmit = (e) => {
    // e.preventDefault();
    const { id, checked } = this.state;
    const completedTodo = { id, checked };
    this.props.completeTodo(completedTodo);
    fetch(`${Config.API_BASE_URL}/api/todos/${completedTodo.id}`, {
      method: "PUT",
      body: JSON.stringify(completedTodo),
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
        this.props.completeTodo(completedTodo);
        this.props.history.push("/bucket-list-todos");
      });
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
    const todos = this.props.todos;

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
                  <h3>{todo.title}</h3>
                  <p>category: {todo.category}</p>
                </Link>

                <form
                  className={
                    todo.id === Number(this.props.match.params.id)
                      ? "active-form"
                      : "inactive-form"
                  }
                  onSubmit={(e) => this.handleSubmit(e)}
                >
                  <div>
                    <label>Completed:</label>
                    <input
                      onChange={(e) => this.handleCheck(e, todo.id)}
                      type="checkbox"
                      name="checked"
                    />
                  </div>
                  <button type="submit">Submit</button>
                </form>
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
