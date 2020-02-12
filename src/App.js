import React, { Component } from 'react';

import Jungle from './components/stages/jungle';
import StartUp from './components/stages/startup';
import End from './components/stages/end';
import Items from './components/stages/items';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ws: {},
      stage: "login",
      level: "",
      items: ""
    }
  }

  componentDidMount() {
    const ws = new WebSocket("ws://localhost:3001") //new WebSocket("wss://jungleserver.herokuapp.com/")

    ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data)
      const data = msg.data
      console.log(msg)

      switch(msg.type){
        case 'login confirmed':
          this.setState({
            visible: false,
            username: data.username
          })
          break

        case 'stageChange':
          this.setState({ stage: data.stage })
          break

        case 'levelChange':
          this.setState({ level: data.level })
          break
          
      }
    });

    this.setState({ ws })
  }

  sendWsMsg = (type, data) => {
    this.state.ws.send(JSON.stringify({source: "player", type, data}))
  }

  renderContents = () => {
    switch (this.state.stage) {
      case "login":
        return (
          <StartUp
            sendMsg={this.sendWsMsg}
          />
        )
      
      case "items":
        return (
          <Items
            sendMsg={this.sendWsMsg}
          />
        )
      
      case "jungle":
        return (
          <Jungle
            sendMsg={this.sendWsMsg}
            level={this.state.level}
          />
        )

      case "end":
        return (
          <End />
        )
    }
  }

  render() {
    return (
      <div className="main-screen">
        {this.renderContents()}
        <p style={{ textAlign: "center" }}>Jungle Crash© 2019 Created by DaveOuds.dev</p>
      </div>
    );
  }
}