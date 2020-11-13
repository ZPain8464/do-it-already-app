import React from "react";

export default class ViewTodo extends React.Component {
  render() {
    const viewTodo = this.props.todos;
    return (
      <div className="view-todo">
        <h2>View Todo</h2>
        <div className="view-todo-task">
          {viewTodo.map((vt, i) =>
            vt.id === Number(this.props.match.params.id) ? (
              <>
                <h3 key={i}>{vt.title}</h3>
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
