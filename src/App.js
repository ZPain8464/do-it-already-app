import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Config from "./Config/Config";
import Context from "./Context/Context";

import Header from "./Components/Header/Header";
import Features from "./Components/Features/Features";
import WhyUseDIA from "./Components/WhyUseDIA/WhyUseDIA";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Nav from "./Components/Nav/Nav";
import CategoriesPage from "./Components/CategoriesPage/CategoriesPage";
import AddTodoForm from "./Components/AddTodoForm/AddTodoForm";
import Todo from "./Components/Todos/Todo";
import TodoList from "./Components/TodoList/TodoList";
import EditTodo from "./Components/EditTodos/EditTodo";
import ErrorPage from "./Components/ErrorBoundary/ErrorPage";
import TokenService from "./Services/TokenService";

export default class App extends Component {
  state = {
    user: {
      username: "",
      user_id: "",
    },
    todos: [],
    categories: [],
    toggleComplete: (id) => {
      this.setState({
        todos: this.state.todos.map((todo) => {
          if (todo.id === id) {
            todo.checked = !todo.checked;
            const checked = todo.checked;
            const todoCheck = { id, checked };
            fetch(`${Config.REACT_APP_API_BASE_URL}/api/todos/${id}`, {
              method: "PUT",
              body: JSON.stringify(todoCheck),
              headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${TokenService.getAuthToken()}`,
              },
            }).then((res) => {
              if (!res.ok) {
                return res.json().then((error) => Promise.reject(error));
              }
              return res;
            });
          }
          return todo;
        }),
      });
    },
  };

  handleLogout = () => {
    TokenService.clearAuthToken();
    this.setState({
      todos: [],
      categories: [],
    });
  };

  setLoggedInUserTodos = (todos) => {
    this.setState({
      todos: todos,
    });
  };

  setUser = (user) => {
    this.setState({
      user: {
        username: user.username,
        user_id: user.id,
      },
    });
  };

  setCategories = (categories) => {
    this.setState({ categories });
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

  updateTodo = (editedTodo) => {
    this.setState({
      todos: this.state.todos.map((t) =>
        t.id !== editedTodo.id ? t : editedTodo
      ),
    });
  };

  render() {
    const contextValue = {
      todos: this.state.todos,
      categories: this.state.categories,
      user: this.state.user,
      setLoggedInUserTodos: this.setLoggedInUserTodos,
      setUser: this.setUser,
      setCategories: this.setCategories,
      handleLogout: this.handleLogout,
      createTodo: this.createTodo,
      deleteTodo: this.deleteTodo,
      updateTodo: this.updateTodo,
      toggleComplete: this.state.toggleComplete,
    };
    return (
      <Context.Provider value={contextValue}>
        <ErrorPage>
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
              component={AddTodoForm}
            />

            <main>
              <div className="main-todos">
                <Route
                  exact
                  path={[
                    "/bucket-list-todos",
                    "/bucket-list-todos/:id",
                    "/completed-todos",
                    "/completed-todos/:id",
                  ]}
                  render={(props) => <TodoList {...props} checked={false} />}
                />
                <Route
                  exact
                  path={[
                    "/bucket-list-todos",
                    "/bucket-list-todos/:id",
                    "/completed-todos",
                    "/completed-todos/:id",
                  ]}
                  render={(props) => <TodoList {...props} checked={true} />}
                />
                <div className="view-todo">
                  <Route
                    exact
                    path={["/bucket-list-todos/:id", "/completed-todos/:id"]}
                    render={(props) => (
                      <Todo {...props} selected={this.state.selected} />
                    )}
                  />
                </div>
              </div>
              <Route
                exact
                path="/edit-todo/:id"
                render={(props) => (
                  <EditTodo {...props} updateTodo={this.updateTodo} />
                )}
              />
              <Route exact path="/" component={Features} />
              <Route exact path="/" component={WhyUseDIA} />
              <Route path="/" component={Footer} />
            </main>
          </div>
        </ErrorPage>
      </Context.Provider>
    );
  }
}
