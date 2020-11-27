import React from "react";
import BackButton from "../BackButton/BackButton";
import Config from "../../Config/Config";
import Context from "../../Context/Context";
import TokenService from "../../Services/TokenService";
import ValidationError from "../Validation/ValidationError";

export default class AddTodoForm extends React.Component {
  static contextType = Context;

  static defaultProps = {
    match: {
      params: {
        category: "",
      },
    },
  };

  state = {
    selCategory: this.props.match.params.category,
    category_id: "",
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
    const user_id = this.context.user.user_id;

    fetch(`${Config.REACT_APP_API_BASE_URL}/api/todos`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        title: title,
        description: description,
        category: category,
        category_id: category_id,
        checked: checked,
        user_id: user_id,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.status);
        }
        return res.json();
      })
      .then((todo) => {
        this.context.createTodo(todo);
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
    } else if (todoTitle.length > 30) {
      return "Your todo cannot exceed 30 characters";
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

  changeCategory = (e) => {
    const categoryId = Number(e.target.value);
    const category = this.context.categories.find((c) => c.id === categoryId);
    this.setState({
      selCategory: category.category,
      category_id: category.id,
    });
  };

  render() {
    const categories = this.context.categories;
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
          <select
            onChange={(e) => this.changeCategory(e)}
            name="category_id"
            id="category-dropdown"
          >
            {categories.map((c, i) => (
              <option
                key={i}
                value={c.id}
                selected={
                  c.category === this.props.match.params.category
                    ? "selected"
                    : false
                }
              >
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
