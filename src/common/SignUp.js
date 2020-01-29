import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { addUser } from "../actions/addUser";

const mapDispatchToProps = dispatch => ({
  addNewUser: user => {
    dispatch(addUser(user));
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
      dateOfBirth: "",
      nickname: "",
      book: "",
      spouse: "",
      error: ""
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleDateOfBirthChange = this.handleDateOfBirthChange.bind(this);
    this.handleNicknameChange = this.handleNicknameChange.bind(this);
    this.handleBookChange = this.handleBookChange.bind(this);
    this.handleSpouseChange = this.handleSpouseChange.bind(this);
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

  handlePhoneNumberChange(e) {
    this.setState({
      phoneNumber: e.target.value
    });
  }

  handleAddressChange(e) {
    this.setState({
      address: e.target.value
    });
  }

  handleNicknameChange(e) {
    this.setState({
      nickname: e.target.value
    });
  }

  handleBookChange(e) {
    this.setState({
      book: e.target.value
    });
  }

  handleSpouseChange(e) {
    this.setState({
      spouse: e.target.value
    });
  }

  handleDateOfBirthChange(e) {
    this.setState({
      dateOfBirth: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
      dateOfBirth: this.state.dateOfBirth,
      nickname: this.state.nickname,
      book: this.state.book,
      spouse: this.state.spouse
    };

    console.log(data.dateOfBirth);
    document.querySelector(".form-wrapper").classList.add("requesting");

    fetch("http://localhost:4000/signup", {
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
                <div className="errorMessage">{this.state.error}</div>
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
  null,
  mapDispatchToProps
)(SignUp);
