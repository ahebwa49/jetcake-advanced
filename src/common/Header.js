import React from "react";
import "./common.css";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleLogoClick = () => {
    window.location.assign("/");
  };

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
          <Link to="/signin">Sign In</Link>
        </div>
      </div>
    );
  }
}

export default Header;
