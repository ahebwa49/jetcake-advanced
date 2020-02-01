import React from "react";
import Hero from "./common/Hero";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Hero />
      </div>
    );
  }
}

export default App;
