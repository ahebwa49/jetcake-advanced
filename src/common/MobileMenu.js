import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
// import { addUser } from "../actions/addUser";
import MenuButtonClose from "./MenuButtonClose";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

// const mapDispatchToProps = dispatch => ({
//   addNewUser: user => {
//     dispatch(addUser(user));
//   }
// });

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    // fetch("http://localhost:4000/logout", {
    //   method: "GET",
    //   credentials: "include"
    // })
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(async data => {
    //     await this.props.addNewUser(data);
    //     this.props.history.push("/signin");
    //   });
  }
  render() {
    return (
      <div className="mobileMenu">
        <div className="listItems">
          {this.props.user.username ? (
            <>
              <div className="listItem">{this.props.user.username}</div>
              <div className="listItem">
                <Link
                  to="/profile"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Profile
                </Link>
              </div>
              <div className="listItem" onClick={this.handleLogout}>
                logout
              </div>
            </>
          ) : (
            <>
              <div className="listItem">
                <Link
                  to="/signin"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Sign in
                </Link>
              </div>
              <div className="listItem">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
        <div className="close">
          <MenuButtonClose
            handleShowMobileMenu={this.props.handleShowMobileMenu}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    // mapDispatchToProps
  )(MobileMenu)
);
