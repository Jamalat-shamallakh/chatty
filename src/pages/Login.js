import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signin , signInWithGoogle } from "../helpers/auth";

export default class Login extends Component {
 state = {
      error: null,
      email: "",
      password: ""
    };

  handleChange = e=> {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

   handleSubmit = async( e )=> {
    e.preventDefault();
    this.setState({ error: "" });
    try {
      await signin(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
  
   googleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }
  render() {
    return (
      <div>
        <form
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <h1>
            Login to
            <Link to="/">
              Chatty
            </Link>
          </h1>
          <p>
            Fill in the form below to login to your account.
          </p>
          <div>
            <input
              placeholder="Email"
              name="email"
              type="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div>
            <input
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div>
            {this.state.error ? (
              <p>{this.state.error}</p>
            ) : null}
            <button type="submit">Login</button>
          </div>
          <hr />
          <p>
            Don't have an account? <Link to="/signup">Sign up</Link>
            <p>Or</p>
            <button onClick={this.googleSignIn} type="button">
            Sign up with Google
            </button>
          </p>
        </form>
      </div>
    );
  }
}