import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addUser } from "../actions/addUser";
import "./common.css";

const mapDispatchToProps = dispatch => ({
  addNewUser: user => {
    dispatch(addUser(user));
  }
});

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: ""
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogoClick = () => {
    window.location.assign("/");
  };

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    };

    document.querySelector(".form-wrapper").classList.add("requesting");

    fetch("http://localhost:4000/signin", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => {
        if (response.ok) {
          document
            .querySelector(".form-wrapper")
            .classList.remove("requesting");
          return response.json();
        } else {
          return response.json().then(body => {
            document
              .querySelector(".form-wrapper")
              .classList.remove("requesting");
            throw new Error(body.error);
          });
        }
      })
      .then(async data => {
        console.log(data);
        await this.props.addNewUser(data);
        this.props.history.push("/");
      })
      .catch(error => {
        document.querySelector(".errorMessage").classList.add("active");
        this.setState({
          error: error.message
        });
      });
  }

  render() {
    return (
      <>
        <div className="Header nb">
          <div className="Header-Container">
            <div className="Header-Logo" onClick={this.handleLogoClick} />
          </div>
        </div>
        <div className="page-wrapper">
          <div className="container feature-top pb-0">
            <div className="form-wrapper">
              <div className="loading">loading ...</div>
              <h1>Sign in</h1>
              <form className="form" onSubmit={this.handleSubmit} method="post">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
                    placeholder="example@gmail.com"
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                    placeholder="Enter password"
                    required
                    className="form-input"
                  />
                </div>
                <div className="errorMessage">{this.state.error}</div>
                <button type="submit" className="form-button">
                  Sign in
                </button>
                <div className="form-forgot-password">
                  Don't have an account?<Link to="/signup">Create one</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default connect(
  null,
  mapDispatchToProps
)(SignIn);
