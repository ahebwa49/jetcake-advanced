import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { userLoginFetch } from "../actions/actions";
import "./common.css";

const mapStateToProps = state => {
  console.log(state.error);
  return {
    error: state.error,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  userLoginFetch: data => {
    dispatch(userLoginFetch(data));
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
  }

  handleUsernameChange = e => {
    this.setState({
      username: e.target.value
    });
  };

  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    });
  };

  handleLogoClick = () => {
    window.location.assign("/");
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    };

    console.log(data);

    document.querySelector(".form-wrapper").classList.add("requesting");
    document.querySelector(".form-wrapper").classList.add("inactive");

    this.props.userLoginFetch(data);
  };

  render() {
    if (this.props.user.username) return <Redirect to="/" />;
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
                <div className="errorMessage">{this.props.error}</div>
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
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
