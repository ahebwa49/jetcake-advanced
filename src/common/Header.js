import React from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { addUser } from "../actions/addUser";

const mapStateToProps = state => {
  console.log(state.user);
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => ({
  addNewUser: user => {
    dispatch(addUser(user));
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    fetch("http://localhost:4000/profile", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(async data => {
        await this.props.addNewUser(data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleLogoClick = () => {
    window.location.assign("/");
  };

  handleLogout() {
    fetch("http://localhost:4000/logout", {
      method: "GET",
      credentials: "include"
    })
      .then(response => {
        return response.json();
      })
      .then(async data => {
        console.log(data);
        await this.props.addNewUser(data);
        this.props.history.push("/signin");
      });
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
                  <Link to="/profile">profile</Link>
                </span>{" "}
                {this.props.user.username}{" "}
                <span
                  style={{ color: "red", textDecoration: "underline" }}
                  onClick={this.handleLogout}
                >
                  logout
                </span>
              </p>
            </>
          ) : (
            <Link to="/signin">Sign In</Link>
          )}
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
