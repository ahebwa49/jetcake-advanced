import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { logoutUser } from "../actions/actions";
import MenuButton from "./MenuButton";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => {
    dispatch(logoutUser());
  }
});

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }

  // componentDidMount() {
  //   fetch("http://localhost:4000/profile", {
  //     method: "GET",
  //     credentials: "include"
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(async data => {
  //       await this.props.addNewUser(data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }

  handleLogoClick = () => {
    this.props.history.push("/");
  };

  handleLogout(e) {
    e.preventDefault();
    // Remove the token from localStorage
    localStorage.removeItem("token");
    // Remove the user object from the Redux store
    this.props.logoutUser();
  }

  render() {
    return (
      <div className="Header">
        <div className="Header-Container">
          <div className="Header-Logo" onClick={this.handleLogoClick}>
            JETCAKE
          </div>
        </div>
        <div
          className="desktopMenu"
          style={{
            marginLeft: "auto",
            alignSelf: "center",
            marginRight: "75px",
            cursor: "pointer"
          }}
        >
          {this.props.user.username ? (
            <>
              <p>
                <span>
                  <Link
                    style={{ textDecoration: "none", color: "#164C60" }}
                    to="/profile"
                  >
                    profile
                  </Link>
                </span>{" "}
                {this.props.user.username}{" "}
                <span
                  style={{ color: "red", textDecoration: "none" }}
                  onClick={this.handleLogout}
                >
                  logout
                </span>
              </p>
            </>
          ) : (
            <Link
              to="/signin"
              style={{ textDecoration: "none", color: "#164C60" }}
            >
              Sign In
            </Link>
          )}
        </div>
        <div
          style={{ display: "none" }}
          className="menuButton"
          onClick={this.props.handleShowMobileMenu}
        >
          <MenuButton />
        </div>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
