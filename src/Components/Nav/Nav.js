import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../Services/TokenService";

export default class Nav extends React.Component {
  logout = () => {
    TokenService.clearAuthToken();
    // this.props.history.push("/");
  };

  render() {
    return (
      <nav>
        <h1>
          <Link to="/">Do It Already</Link>
        </h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>

          {TokenService.hasAuthToken() ? (
            <Link to="/">
              <button
                type="submit"
                className="logout-button"
                onClick={() => this.logout()}
              >
                Log out
              </button>
            </Link>
          ) : (
            <>
              <Link to="/register">
                <button className="register-button" type="submit">
                  Register
                </button>
              </Link>
              <Link to="/login">
                <button type="submit" className="login-button">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>
      </nav>
    );
  }
}
