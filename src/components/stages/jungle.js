import React, { Component } from 'react';

import { Icon, Modal } from 'antd';

import Rain from '../jungle_levels/rain';
import Freezing from '../jungle_levels/freezing';
import Illness from '../jungle_levels/illness';
import Mosquitos from '../jungle_levels/mosquitos';
import Plane from '../jungle_levels/plane';
import StolenFood from '../jungle_levels/stolen_food';

export default class Jungle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openModal: false,
      level: "Item Select",
      last_level: "",
      items: [],
    }
  }
  
  handleSubmitItems = (e, items) => {
    console.log(items)
    this.setState({items})
  }

  renderLevel = () => {
    switch (this.state.level) {
      case "rain":
        return  <Rain />
      
      case "freezing":
        return  <Freezing />
      
      case "plane":
        return  <Plane />
        
      case "mosquitos":
        return  <Mosquitos />

      case "illness":
        return  <Illness />

      case "stolen food":
        return  <StolenFood />

      default:
        return  <h1>Error</h1>
    }
  }

  render() {
    return (
      <div className="jungle-screen">
        <Modal
          title="Items"
          visible={this.state.openModal}
          onCancel={() => this.setState({ openModal: false })}
        >
        {this.state.items}

        </Modal>
        <Icon type="delete" onClick={() => this.setState({ openModal: true })} />
        {this.renderLevel()}
      </div>
    );
  }
}