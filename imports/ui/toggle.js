import React, { Component } from 'react';

class Toggle extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    //this binding is necessary to make 'this' work in callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return(
      <div>
        <button className={this.state.isToggleOn ? 'toggleon' : 'toggleoff'} onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

export default Toggle;