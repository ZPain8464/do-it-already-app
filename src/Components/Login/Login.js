import React from "react";
import AuthAPIService from "../../Services/AuthAPIService";
import TokenService from "../../Services/TokenService";

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
          <h1>Log in to Your Account</h1>
          {this.state.error && (
            <p className="register-error">{this.state.error}</p>
          )}
          <div className="credentials-section">
            <label className="login-username">Username</label>
            <input className="login-form-input" name="username" type="text" />
            <label className="login-password">Password</label>
            <input
              className="login-form-input"
              type="password"
              name="password"
            />
            <button className="login-sign-in" type="submit">
              Sign in
            </button>
          </div>
        </form>
        <div className="create-account">
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    );
  }
}
