import React from "react";
import { connect } from "react-redux";
import Hero from "./common/Hero";
import Cards from "./common/Cards";
import { userProfileFetch } from "./actions/actions";

const mapDispatchToProps = dispatch => ({
  userProfileFetch: () => {
    dispatch(userProfileFetch());
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    if (localStorage.token) {
      this.props.userProfileFetch();
    }
  }
  render() {
    return (
      <div>
        <Hero />
        <Cards />
      </div>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
