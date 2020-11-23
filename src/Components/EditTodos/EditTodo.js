import React from "react";
import Config from "../../Config/Config";
import Context from "../../Context/Context";

export default class EditTodo extends React.Component {
  static contextType = Context;
  state = {
    id: "",
    title: "",
    description: "",
    category: "",
    category_id: "",
    checked: "",
    user_id: "",
    start_date: "",
  };

  componentDidMount() {
    const todoId =
      this.props.match && this.props.match.params.id
        ? Number(this.props.match.params.id)
        : 0;
    fetch(`${Config.REACT_APP_API_BASE_URL}/api/todos/${todoId}`, {
      method: "GET",
    })
      .then((res) => {
        if (!res.ok) return res.json().then((error) => Promise.reject(error));
        return res.json();
      })
      .then((data) => {
        this.setState({
          id: data.id,
          title: data.title,
          description: data.description,
          category: data.category,
          category_id: data.category_id,
          checked: data.checked,
          user_id: data.user_id,
          start_date: data.start_date,
        });
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      id,
      title,
      description,
      category,
      category_id,
      checked,
      user_id,
      start_date,
    } = this.state;
    const newTodo = {
      id,
      title,
      description,
      category,
      category_id,
      checked,
      user_id,
      start_date,
    };

    fetch(`${Config.REACT_APP_API_BASE_URL}/api/todos/${newTodo.id}`, {
      method: "PATCH",
      body: JSON.stringify(newTodo),
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
        this.resetFields();
        this.context.updateTodo(newTodo);
        this.props.history.push(
          `/bucket-list-todos/${this.props.match.params.id}`
        );
      })
      .catch((error) => this.setState({ error }));
  };

  resetFields = () => {
    this.setState({
      id: "",
      title: "",
      description: "",
    });
  };

  handleUpdateTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleUpdateDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  handleClickCancel = () => {
    this.props.history.push(`/bucket-list-todos/${this.props.match.params.id}`);
  };

  render() {
    const { id, title, description } = this.state;
    return (
      <div className="edit-todos">
        <form onSubmit={(e) => this.handleSubmit(e)} className="edit-form">
          <h2>Edit Todo</h2>
          <label>Name:</label>
          <input
            onChange={(e) => this.handleUpdateTitle(e)}
            name="title"
            type="text"
            value={title}
          />
          <label>Description:</label>
          <input
            onChange={(e) => this.handleUpdateDescription(e)}
            type="text"
            name="description"
            value={description}
          />
          <button type="button" onClick={this.handleClickCancel}>
            {" "}
            Cancel
          </button>
          <button type="submit">Save changes</button>
        </form>
      </div>
    );
  }
}
