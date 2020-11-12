import React from "react";
import AuthAPIService from "../../Services/AuthAPIService";
import TokenService from "../../Services/TokenService";
import Config from "../../Config/Config";

import { Link } from "react-router-dom";

export default class Login extends React.Component {
  state = {
    error: null,
  };

  handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = e.target;
    this.setState({ error: null });
    const user = { username: username.value, password: password.value };
    AuthAPIService.loginUser(user)
      .then((loginResponse) => {
        TokenService.saveAuthToken(loginResponse.authToken);
        this.props.history.push("/bucket-list-categories");
      })
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="login">
        <form
          onSubmit={(e) => this.handleLogin(e)}
          className="login-form"
          aria-label="login-form"
        >
          {this.state.error && <p className="error">{this.state.error}</p>}
          <h1>Log in to Your Account</h1>
          <label>Username</label>
          <input name="username" type="text" />
          <label>Password</label>
          <input type="text" name="password" />
          <button type="submit">Sign in</button>
        </form>
        <div>
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    );
  }
}
