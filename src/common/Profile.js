import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="page-wrapper">
        <div className="container feature-top pb-0">
          <div className="form-wrapper">
            <div className="loading">loading ...</div>
            <h1>Profile</h1>
            <form className="form" onSubmit={this.handleSubmit} method="post">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={this.props.user.username}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone number" className="form-label">
                  Phone number
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={this.state.password}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={this.state.password}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="date of birth" className="form-label">
                  Date of birth
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={this.state.password}
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="security questions" className="form-label">
                  Security questions
                </label>
                <br />
                <label htmlFor="security questions" className="form-label">
                  What is your childhood nickname?
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={this.state.password}
                  className="form-input"
                />
                <br />
                <label htmlFor="security questions" className="form-label">
                  What is your favourite book?
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={this.state.password}
                  className="form-input"
                />
                <br />
                <label htmlFor="security questions" className="form-label">
                  Where did you meet your spouse?
                </label>
                <input
                  type="text"
                  id="password"
                  name="password"
                  value={this.state.password}
                  className="form-input"
                />
              </div>
              <div className="errorMessage">{this.state.error}</div>
              <button type="submit" className="form-button">
                Edit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Profile);
