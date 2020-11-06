import React from "react";
import { Link } from "react-router-dom";

export default class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <form className="login-form">
          <h1>Sign In to Your Account</h1>
          <label>Username</label>
          <input type="text" />
          <label>Password</label>
          <input type="text" />
          <button>Sign in</button>
        </form>
        <section className="create-an-account">
          <Link to="/register">Create an account</Link>
        </section>
      </div>
    );
  }
}
