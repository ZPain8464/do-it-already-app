import React from "react";
import DummyStore from "../../DummyStore/DummyStore";

export default class ViewTodo extends React.Component {
  render() {
    const viewTodo = DummyStore.todos;
    return (
      <div className="view-todo">
        <h2>View Todo</h2>
        <div className="view-todo-task">
          {viewTodo.map((vt, i) =>
            vt.id === this.props.match.params.id ? (
              <>
                <h3 key={i}>{vt.name}</h3>
                <div>
                  <h4>category: {vt.category}</h4>
                  <label>Check completed:</label>
                  <input type="checkbox" />
                  <p key={i}>Description: {vt.description}</p>
                </div>
                <div>
                  <p key={i}>
                    Created on
                    {new Date(vt.start_date).toLocaleDateString()}
                  </p>
                </div>
              </>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    );
  }
}
