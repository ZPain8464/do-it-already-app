import React from "react";
import { Link } from "react-router-dom";

export default class CategoriesPage extends React.Component {
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
