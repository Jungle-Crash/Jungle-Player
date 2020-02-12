import React, { Component } from 'react';
import { Button } from 'antd';

export default class Wait extends Component {
  constructor(props) {
    super(props)

    this.state = {
        waiting: false
    }
  }

  render() {
    return (
      <div className="wait-screen">
        <h1>Waiting on other players</h1>
      </div>
    );
  }
}
