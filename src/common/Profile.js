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
                  Profile Photo
                </label>

                <img
                  width="100"
                  height="100"
                  src={this.props.user.profile}
                  alt="profile"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <label className="form-label input">
                  {this.props.user.username}
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="phone number" className="form-label">
                  Phone number
                </label>
                <label className="form-label input">
                  {this.props.user.phoneNumber}
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <label className="form-label input">
                  {this.props.user.address}
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="date of birth" className="form-label">
                  Date of birth
                </label>
                <label className="form-label input">
                  {this.props.user.dateOfBirth}
                </label>
              </div>
              <div className="form-group">
                <label htmlFor="security questions" className="form-label">
                  Security questions
                </label>
                <br />
                <label htmlFor="security questions" className="form-label">
                  What is your childhood nickname?
                </label>
                <label className="form-label input">
                  {this.props.user.nickname}
                </label>
                <br />
                <label htmlFor="security questions" className="form-label">
                  What is your favourite book?
                </label>
                <label className="form-label input">
                  {this.props.user.book}
                </label>
                <br />
                <label htmlFor="security questions" className="form-label">
                  Where did you meet your spouse?
                </label>
                <label className="form-label input">
                  {this.props.user.spouse}
                </label>
              </div>
              <div className="errorMessage">{this.state.error}</div>

              <Link to="/profile/edit" style={{ textDecoration: "none" }}>
                <button type="submit" className="form-button">
                  Edit
                </button>
              </Link>
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
