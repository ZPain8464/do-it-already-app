import React from "react";
import AuthAPIService from "../../Services/AuthAPIService";

export default class Register extends React.Component {
  state = {
    error: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, username, password, confirmPassword } = e.target;
    this.setState({ error: null });
    AuthAPIService.postUser({
      name: name.value,
      username: username.value,
      password: password.value,
    })
      .then((user) => {
        this.props.history.push("/login");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="register-user">
        <form
          className="register-form"
          aria-label="register-form"
          onSubmit={(e) => this.handleSubmit(e)}
        >
          {this.state.error && <p className="error">{this.state.error}</p>}
          <label className="register-name" htmlFor="register-name">
            Name
          </label>
          <input type="text" name="name" />
          <label className="register-username" name="username">
            Username
          </label>
          <input type="text" name="username" />
          <label className="register-password">Password</label>
          <input type="text" name="password" />
          <label>Confirm Password</label>
          <input type="text" name="confirmPassword" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
