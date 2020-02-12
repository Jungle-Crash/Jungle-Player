import React, { Component } from 'react';

export default class Attack extends Component {
  constructor(props) {
    super(props)

    this.state = {
        waiting: false
    }
  }

  render() {
    return (
      <div className="wait-screen">

      </div>
    );
  }
}
