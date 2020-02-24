import React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import { userRegisterFetch } from "../actions/actions";

const mapStateToProps = state => {
  console.log(state.error);
  return {
    error: state.error,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  userRegisterFetch: formData => {
    dispatch(userRegisterFetch(formData));
  }
});

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      phoneNumber: "",
      address: "",
      profile: null,
      dateOfBirth: "",
      nickname: "",
      book: "",
      spouse: "",
      error: ""
    };
  }
  handleLogoClick = () => {
    window.location.assign("/");
  };

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

  handlePhoneNumberChange = e => {
    this.setState({
      phoneNumber: e.target.value
    });
  };

  handleAddressChange = e => {
    this.setState({
      address: e.target.value
    });
  };

  handleNicknameChange = e => {
    this.setState({
      nickname: e.target.value
    });
  };

  handleBookChange = e => {
    this.setState({
      book: e.target.value
    });
  };

  handleSpouseChange = e => {
    this.setState({
      spouse: e.target.value
    });
  };

  handleDateOfBirthChange = e => {
    this.setState({
      dateOfBirth: e.target.value
    });
  };

  handleProfileChange = e => {
    this.setState({ profile: e.target.files[0] });
  };

  handleSubmit = async e => {
    e.preventDefault();

    document.querySelector(".form-wrapper").classList.add("requesting");
    document.querySelector(".form-wrapper").classList.add("inactive");

    let formData = new FormData();

    formData.append("avatar", this.state.profile);
    formData.append("username", this.state.username);
    formData.append("password", this.state.password);
    formData.append("phoneNumber", this.state.phoneNumber);
    formData.append("address", this.state.address);
    formData.append("dateOfBirth", this.state.dateOfBirth);
    formData.append("nickname", this.state.nickname);
    formData.append("book", this.state.book);
    formData.append("spouse", this.state.spouse);

    this.props.userRegisterFetch(formData);
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
              <h1>Sign up</h1>
              <form
                className="form"
                onSubmit={this.handleSubmit}
                encType="multipart/form-data"
              >
                <div className="form-group">
                  <label htmlFor="password" className="form-label">
                    Profile picture
                  </label>
                  <br />
                  <input
                    type="file"
                    id="profile"
                    name="profile"
                    onChange={this.handleProfileChange}
                    // value={this.state.profile}
                    required
                  />
                </div>
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
                    required
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
                    required
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone number" className="form-label">
                    Phone number
                  </label>
                  <input
                    type="text"
                    id="phone number"
                    name="phone number"
                    placeholder="Enter phone number"
                    className="form-input"
                    required
                    value={this.state.phoneNumber}
                    onChange={this.handlePhoneNumberChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Enter your address"
                    className="form-input"
                    required
                    value={this.state.address}
                    onChange={this.handleAddressChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="date of birth" className="form-label">
                    Date of birth
                  </label>
                  <input
                    type="date"
                    id="dateofbirth"
                    name="dateofbirth"
                    className="form-input"
                    required
                    value={this.state.dateOfBirth}
                    onChange={this.handleDateOfBirthChange}
                  />
                </div>

                <br />
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
                    id="nickname"
                    name="nickname"
                    className="form-input"
                    placeholder="Enter nickname"
                    required
                    value={this.state.nickname}
                    onChange={this.handleNicknameChange}
                  />
                  <br />
                  <label htmlFor="security questions" className="form-label">
                    What is your favourite book?
                  </label>
                  <input
                    type="text"
                    id="book"
                    name="book"
                    className="form-input"
                    placeholder="Enter book"
                    required
                    value={this.state.book}
                    onChange={this.handleBookChange}
                  />
                  <br />
                  <label htmlFor="security questions" className="form-label">
                    Where did you meet your spouse?
                  </label>
                  <input
                    type="text"
                    id="spouse"
                    name="spouse"
                    className="form-input"
                    placeholder="Enter place"
                    required
                    value={this.state.spouse}
                    onChange={this.handleSpouseChange}
                  />
                </div>
                <div className="errorMessage">{this.props.error}</div>
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
