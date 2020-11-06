import React from "react";
import DummyStore from "../../DummyStore/DummyStore";
import { Link } from "react-router-dom";

export default class PendingTodos extends React.Component {
  render() {
    const todos = DummyStore.todos;

    return (
      <div className="pending-todos">
        <h2>Pending Todos</h2>
        <div className="completed-view">
          <button>View Completed Todos</button>
        </div>
        <ul>
          {todos.map((todo, i) =>
            todo.checked === false ? (
              <li key={i}>
                <Link to={`/bucket-list-todos/${todo.id}`}>
                  <h3>{todo.name}</h3>
                  <p>category: {todo.category}</p>
                </Link>
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
