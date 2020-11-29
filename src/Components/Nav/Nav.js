import React from "react";
import { Link } from "react-router-dom";
import TokenService from "../../Services/TokenService";
import Context from "../../Context/Context";

export default class Nav extends React.Component {
  static contextType = Context;

  logout = () => {
    this.context.handleLogout();
    this.props.history.push("/");
  };

  render() {
    return (
      <nav>
        {TokenService.hasAuthToken() ? (
          <h1>
            <Link to="/bucket-list-categories">Do It Already</Link>
          </h1>
        ) : (
          <h1>
            <Link to="/">Do It Already</Link>
          </h1>
        )}

        <div className="nav-links">
          {TokenService.hasAuthToken() ? (
            <Link to="/bucket-list-categories">Home</Link>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
            </>
          )}

          {TokenService.hasAuthToken() ? (
            <button
              type="submit"
              className="logout-button"
              onClick={() => this.logout()}
            >
              Log out
            </button>
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
