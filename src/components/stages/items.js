import React, { Component } from 'react';

import ItemSelect from '../forms/itemSelect'
import Wait from './wait';

export default class Items extends Component {
  constructor(props) {
    super(props)

    this.state = {
      phase: "selecting",
    }
  }

  render() {
    const content = this.state.phase == 'selecting' ? 
      <ItemSelect setWaiting={() =>this.setState({phase: 'waiting'})} submitItems={this.props.sendMsg}/> : 
      <Wait/>

    return (
      <div>
        {content}
      </div>
    );
  }
}