import React, { Component } from 'react';

class Calc extends Component {

	add(input1,input2) {
		return(input1 + input2);
	}

	render() {
		return(
			<div>
			{this.add(this.props.input1, this.props.input2)}
			</div>
		);
	}

}

export default Calc;