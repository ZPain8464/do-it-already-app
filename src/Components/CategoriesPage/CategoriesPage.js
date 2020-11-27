import React from "react";
import Context from "../../Context/Context";
import Config from "../../Config/Config";
import TokenService from "../../Services/TokenService";
import { Link } from "react-router-dom";

export default class CategoriesPage extends React.Component {
  static contextType = Context;

  componentDidMount() {
    fetch(`${Config.REACT_APP_API_BASE_URL}/api/todos`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((todos) => this.context.setLoggedInUserTodos(todos));
    fetch(`${Config.REACT_APP_API_BASE_URL}/api/categories`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((categories) => this.context.setCategories(categories));
    fetch(`${Config.REACT_APP_API_BASE_URL}/api/users`, {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then((res) => res.json())
      .then((user) => {
        this.context.setUser(user);
      });
  }

  render() {
    return (
      <div className="categories-body">
        <header className="categories-header">
          <h1>Choose a Bucket List Category:</h1>
        </header>
        <main>
          <div className="bucket-list-categories">
            <div className="bucket-list-category prod">
              <h2>Productivity</h2>
              <button>
                <Link to="/add-todo/productivity">Get productive</Link>
              </button>
            </div>
            <div className="bucket-list-category fit">
              <h2>Fitness</h2>
              <button>
                <Link to="/add-todo/fitness">Get fit</Link>
              </button>
            </div>

            <div className="bucket-list-category fin">
              <h2>Finance</h2>
              <button>
                <Link to="/add-todo/finance">Get saving</Link>
              </button>
            </div>
            <div className="bucket-list-category trav">
              <h2>Travel</h2>
              <button>
                <Link to="/add-todo/travel">Get traveling</Link>
              </button>
            </div>
          </div>
          <button className="view-bucket-list-todos">
            <Link to="/bucket-list-todos">View Your Bucket List</Link>
          </button>
        </main>
      </div>
    );
  }
}
