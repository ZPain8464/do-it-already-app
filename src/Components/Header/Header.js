import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <div>
          <h2>
            Knock out your Bucket List
            <span>one task at a time</span>
          </h2>
          <section className="get-started">
            <button id="get-started">
              <Link to="/bucket-list-categories">Get Started</Link>
            </button>
          </section>
        </div>
      </header>
    );
  }
}
