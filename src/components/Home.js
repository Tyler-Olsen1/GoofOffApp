import React, { Component } from 'react';

import { Link } from "react-router-dom";


class Home extends Component {
  render() {
    return (
      <div>
          <Link to = '/page1'>Page 1</Link>
          <Link to = '/page2'>Page 2</Link>
        <p>Hi from home</p>
      </div>
    );
  }
}

export default Home;
