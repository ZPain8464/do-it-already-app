import React from "react";
import { Link } from "react-router-dom";
import DummyStore from "../../DummyStore/DummyStore";

export default class CompletedTodos extends React.Component {
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
    const completedTodos = DummyStore.todos;
    return (
      <div className="completed-todos">
        <h2>Completed Todos</h2>
        <ul>
          {completedTodos.map((ct, i) =>
            ct.checked === true ? (
              <li key={i}>
                <Link to={`/completed-todos/${ct.id}`}>
                  <h3>{ct.name}</h3>
                  <p>category: {ct.category}</p>
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
