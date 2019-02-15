import React, { Component } from 'react';

import Routing from "./Routing"
import Header from "./components/Header"


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Routing/>

      </div>
    );
  }
}

export default App;
