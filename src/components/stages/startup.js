import React, { Component } from 'react';

import Wait from './wait';
import Register from '../forms/register';


export default class StartUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
        waiting: false
    }
  }

  render() {
    return (
      <div className="login-screen" style={{textAlign:"center"}}>
        
        {
            this.state.waiting ? 
            <Wait 
              startGame={this.props.startGame}/> :
            <Register
                submitName={(username) => {
                  this.setState({waiting: true})
                  console.log(username)
                  this.props.sendMsg('login', {'username': username} )
                }}
            />
        }
      </div>
    );
  }
}
