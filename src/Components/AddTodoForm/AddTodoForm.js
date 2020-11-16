import React from "react";
import BackButton from "../BackButton/BackButton";
import Config from "../../Config/Config";
import ValidationError from "../Validation/ValidationError";

export default class AddTodoForm extends React.Component {
  state = {
    selCategory: this.props.match.params.category,
    title: {
      value: "",
      touched: false,
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const category = this.state.selCategory;
    const category_id = e.target.category_id.value;
    const checked = false;
    const user_id = 5;
    const start_date = new Date().toISOString();

    fetch(`${Config.API_BASE_URL}/api/todos`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        category: category,
        category_id: category_id,
        checked: checked,
        user_id: user_id,
        start_date: start_date,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((todo) => {
        this.props.createTodo(todo);
        this.props.history.push("/bucket-list-todos");
      })
      .catch((error) => this.setState({ error }));
  };

  validateTitle = () => {
    const todoTitle = this.state.title.value.trim();
    if (todoTitle.name === 0) {
      return "Name your todo!";
    } else if (todoTitle.length < 3) {
      return "Your todo must be at least 3 characters long";
    }
  };

  updateTitle = (name) => {
    this.setState({
      title: {
        value: name,
        touched: true,
      },
    });
  };

  render() {
    const categories = this.props.categories;
    const titleError = this.validateTitle();

    return (
      <div className="add-todo">
        <form onSubmit={(e) => this.handleSubmit(e)} className="add-todo-form">
          <h2>Create a Bucket List Todo</h2>
          <label>Name your bucket list todo:</label>
          <input
            onChange={(e) => this.updateTitle(e.target.value)}
            type="text"
            name="title"
          />
          {this.state.title.touched && <ValidationError message={titleError} />}
          <label>Description:</label>
          <input type="text" className="description" name="description" />
          <select name="category_id" id="category-dropdown">
            {categories.map((c, i) => (
              <option key={i} value={c.id}>
                {c.category}
              </option>
            ))}
          </select>

          <button disabled={this.validateTitle()} type="submit">
            Add Todo
          </button>
        </form>
        <BackButton {...this.props} />
      </div>
    );
  }
}
