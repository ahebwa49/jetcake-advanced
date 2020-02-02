import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { addUser } from "../actions/addUser";
import MenuButtonClose from "./MenuButtonClose";

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  addNewUser: user => {
    dispatch(addUser(user));
  }
});

class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    fetch("http://localhost:4000/logout", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(async data => {
        await this.props.addNewUser(data);
        this.props.history.push("/signin");
      });
  }
  render() {
    return (
      <div className="mobileMenu">
        <div className="listItems">
          {this.props.user.username || this.props.user.email ? (
            <>
              <div>{this.props.user.username || this.props.user.email}</div>
              <div>
                <Link to="/profile">Profile</Link>
              </div>
              <div onClick={this.handleLogout}>logout</div>
            </>
          ) : (
            <>
              <div>
                <Link to="/signin">Sign in</Link>
              </div>
              <div>
                {" "}
                <Link to="/signup">Register</Link>
              </div>
            </>
          )}
        </div>
        <div className="close">
          <MenuButtonClose handleSidebarHide={this.props.handleSidebarHide} />
        </div>
      </div>
    );
  }
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MobileMenu)
);
