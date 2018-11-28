import React, { Component } from 'react';

class Counterbutton extends Component {

  constructor(props) {
    super(props);
    this.state = {presses: 0};

    //this binding is necessary to make 'this' work in callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state,props) => ({
      presses: state.presses + props.increment
    }));
  }

  render() {
    return(
      <div>
        <h1>You have pressed the button...</h1>
        <button className="counterbutton" onClick={this.handleClick}>
          {this.state.presses} times
        </button>
      </div>
    );
  }

}

export default Counterbutton;