import React from "react";
import PendingTodos from "../PendingTodos/PendingTodos";
import CompletedTodos from "../CompletedTodos/CompletedTodos";
import ViewTodo from "../ViewTodo/ViewTodo";

export default class BucketListTodos extends React.Component {
  render() {
    return (
      <>
        <div className="main-todos">
          <PendingTodos {...this.props} />
          <CompletedTodos {...this.props} />
          <ViewTodo {...this.props} />
        </div>
      </>
    );
  }
}
