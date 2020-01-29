import React from "react";
import { connect } from "react-redux";

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
      <div>
        <h1>Profile page for {this.props.user.username}</h1>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(Profile);
