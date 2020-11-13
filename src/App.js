import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Config from "./Config/Config";
import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";
import WhyUseDIA from "./Components/WhyUseDIA/WhyUseDIA";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Nav from "./Components/Nav/Nav";
import CategoriesPage from "./Components/CategoriesPage/CategoriesPage";
import BucketListTodos from "./Components/BucketListTodos/BucketListTodos";
import AddTodoForm from "./Components/AddTodoForm/AddTodoForm";

export default class App extends Component {
  state = {
    newTodo: "",
    todos: [],
    categories: [],
  };

  createTodo = (todo) => {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  };

  deleteTodo = (todoid) => {
    const newTodos = this.state.todos.filter((tid) => tid.id !== todoid);
    this.setState({
      todos: newTodos,
    });
  };

  componentDidMount() {
    fetch(`${Config.API_BASE_URL}/api/todos`)
      .then((res) => res.json())
      .then((todos) => this.setState({ todos }));
    fetch(`${Config.API_BASE_URL}/api/categories`)
      .then((res) => res.json())
      .then((categories) => this.setState({ categories }));
  }

  render() {
    return (
      <div className="App">
        <Route path="/" component={Nav} />
        <Route exact path="/about" component={About} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Header} />

        <Route
          exact
          path="/bucket-list-categories"
          component={CategoriesPage}
        />

        <Route
          exact
          path={["/add-todo", "/add-todo/:category"]}
          render={(props) => (
            <AddTodoForm
              {...props}
              createTodo={this.createTodo}
              {...this.state}
            />
          )}
        />

        <main>
          <Route
            exact
            path={[
              "/bucket-list-todos",
              "/bucket-list-todos/:id",
              "/completed-todos",
              "/completed-todos/:id",
            ]}
            render={(props) => (
              <BucketListTodos
                deleteTodo={this.deleteTodo}
                {...props}
                {...this.state}
              />
            )}
          />
          <Route exact path="/" component={Features} />
          <Route exact path="/" component={WhyUseDIA} />
          <Route path="/" component={Footer} />
        </main>
      </div>
    );
  }
}
