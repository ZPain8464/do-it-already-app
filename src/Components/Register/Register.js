import React from "react";

export default class Register extends React.Component {
  render() {
    return (
      <div className="register-user">
        <form className="register-form">
          <label>Name</label>
          <input type="text" />
          <label>Username</label>
          <input type="text" />
          <label>Password</label>
          <input type="text" />
          <label>Re-enter Password</label>
          <input type="text" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
