import React from "react";
import Hero from "./common/Hero";
import Cards from "./common/Cards";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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

export default App;
