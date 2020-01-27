import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleLogoClick = () => {
    window.location.assign("/");
  };

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

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password
    };
    fetch("http://localhost:4000/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(data => console.log("We got something back"))
      .catch(error => {
        console.log("An error has occurred");
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
              <h1>Sign up</h1>
              <form className="form" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="example@gmail.com"
                    className="form-input"
                    value={this.state.username}
                    onChange={this.handleUsernameChange}
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
                    placeholder="Enter password"
                    className="form-input"
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                </div>

                <button type="submit" className="form-button">
                  Sign up
                </button>
                <div className="form-account">
                  Already have an account? <Link to="/signin">Sign In</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default SignUp;
