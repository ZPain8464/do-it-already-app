import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../BackButton/BackButton";
import DummyStore from "../../DummyStore/DummyStore";

export default class AddTodoForm extends React.Component {
  render() {
    const cat = this.props.match ? this.props.match.params.category : 0;
    const categories = DummyStore.categories;

    return (
      <div className="add-todo">
        <form className="add-todo-form">
          <h2>Create a Bucket List Todo</h2>
          <label>Name your bucket list todo:</label>
          <input type="text" />
          <label>Description:</label>
          <input type="text" />
          <select name="category-dropdown" id="category-dropdown">
            {categories.map((c, i) => (
              <option key={i} defaultValue={cat}>
                {c.category}
              </option>
            ))}
          </select>
          <button>
            <Link to="/bucket-list-todos"> Add Todo</Link>
          </button>
        </form>
        <BackButton {...this.props} />
      </div>
    );
  }
}
