import React, { Component } from 'react';

import { Link } from "react-router-dom";


class Page2 extends Component {
  render() {
    return (
      <div>
        <p>Hi from Page2</p>
        <Link to = 'Home'>Home</Link>
        <Link to = '/page1'>Page 1</Link>
      </div>
    );
  }
}

export default Page2;
