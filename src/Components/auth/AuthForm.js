import React, { Component } from "react";
import { signIn, signUp } from "../../services/AuthAPI";
import { withRouter } from "react-router-dom";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });

  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.isSignUpForm()
      ? signUp({ ...this.state, returnSecureToken: true })
      : signIn({ ...this.state, returnSecureToken: true });
  };

  isSignUpForm = () => {
    return this.props.location.pathname === "/signup";
  };

  render() {
    return (
      <>
        <h2>
          Please,
          {this.isSignUpForm() ? "sign up" : "sign in"}!
        </h2>
        <form onSubmit={this.onHandleSubmit}>
          <label>
            Email:
            <input
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.onHandleChange}
            />
          </label>
          <label>
            Password:
            <input
              type='text'
              name='password'
              value={this.state.password}
              onChange={this.onHandleChange}
            />
          </label>
          <button type='submit'>
            {this.isSignUpForm() ? "sign up" : "sign in"}
          </button>
        </form>
      </>
    );
  }
}

export default withRouter(AuthForm);
