import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import "./index.css";
import App from "./App";
import Header from "./common/Header";
import SignIn from "./common/SignIn";
import SignUp from "./common/SignUp";
import Profile from "./common/Profile";
import EditProfile from "./common/EditProfile";
import Footer from "./common/Footer";
import MobileMenu from "./common/MobileMenu";
import * as serviceWorker from "./serviceWorker";

class Routing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMobileMenu: false
    };
  }

  handleShowMobileMenu = () => {
    const { showMobileMenu } = this.state;
    this.setState({
      showMobileMenu: !showMobileMenu
    });
  };
  render() {
    const { showMobileMenu } = this.state;
    return (
      <Router>
        <Header handleShowMobileMenu={this.handleShowMobileMenu} />
        {showMobileMenu && <MobileMenu />}

        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/profile/edit" component={EditProfile} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

ReactDOM.render(
  <Provider store={store()}>
    <Routing />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
