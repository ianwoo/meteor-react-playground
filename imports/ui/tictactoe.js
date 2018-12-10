import React, {Component} from 'react';



class Tictactoe extends Component {

	constructor (props) {
		super (props)
		this.state = {'turn': 0, 'playerXsTurn': true};

		this.handleClick = this.handleClick.bind(this);
	}

	componentWillUnmount() {
		//reset board
	}

	turnHandler() {

		//change turn
		this.setState(state => ({
      		playerXsTurn: !state.playerXsTurn,
      		turn: state.turn + 1 
    	}));

		//check for victory
		let topRow = this.state.a1 + this.state.a2 + this.state.a3;
		let midRow = this.state.b1 + this.state.b2 + this.state.b3;
		let botRow = this.state.c1 + this.state.c2 + this.state.c3;
		let leftCol = this.state.a1 + this.state.b1 + this.state.c1;
		let midCol = this.state.a2 + this.state.b2 + this.state.c2;
		let rightCol = this.state.a3 + this.state.b3 + this.state.c3;
		let diagFrontslash = this.state.a1 + this.state.b2 + this.state.c3;
		let diagBackslash = this.state.a3 + this.state.b2 + this.state.c1;

		if (topRow === 'xxx' || midRow === 'xxx' || botRow === 'xxx' ||
			leftCol === 'xxx' || midCol === 'xxx' || rightCol === 'xxx' ||
			diagFrontslash === 'xxx' || diagBackslash === 'xxx') {

			//victory for X
			console.log('x wins');
			//unmount component and reset?

		} else if (topRow === 'yyy' || midRow === 'yyy' || botRow === 'yyy' ||
			leftCol === 'yyy' || midCol === 'yyy' || rightCol === 'yyy' ||
			diagFrontslash === 'yyy' || diagBackslash === 'yyy') {

			//victory for Y
			console.log('y wins');
			//unmount component and reset?

		} else if (this.state.turn == 9) {

			//stalemate
			console.log('stalemate');
			//unmount component and reset?
		}
	}

	markBox(cell, player) {
		switch (cell) {
			case "a1":
				if (this.state.a1 != 'x' && this.state.a1 != 'y') {
					this.setState(state => ({
	      				'a1': player
	    			}));
	    			this.turnHandler();
				}
    			break;
			case "a2":
				if (this.state.a2 != 'x' && this.state.a2 != 'y') {
					this.setState(state => ({
	      				'a2': player
	    			}));
	    			this.turnHandler();
				}
    			break;
			case "a3":
				if (this.state.a3 != 'x' && this.state.a3 != 'y') {
					this.setState(state => ({
		  				'a3': player
					}));
					this.turnHandler();
				}
    			break;
			case "b1":
				if (this.state.b1 != 'x' && this.state.b1 != 'y') {
					this.setState(state => ({
	      				'b1': player
	    			}));
	    			this.turnHandler();
	    		}
    			break;
			case "b2":
				if (this.state.b2 != 'x' && this.state.b2 != 'y') {
					this.setState(state => ({
	      				'b2': player
	    			}));
	    			this.turnHandler();
				}
    			break;
			case "b3":
				if (this.state.b3 != 'x' && this.state.b3 != 'y') {
					this.setState(state => ({
	      				'b3': player
	    			}));
	    			this.turnHandler();
	    		}
    			break;
			case "c1":
				if (this.state.c1 != 'x' && this.state.c1 != 'y') {
					this.setState(state => ({
	      				'c1': player
	    			}));
	    			this.turnHandler();
	    		}
    			break;
			case "c2":
				if (this.state.c2 != 'x' && this.state.c2 != 'y') {
					this.setState(state => ({
	      				'c2': player
	    			}));
	    			this.turnHandler();
	    		}
    			break;
			case "c3":
				if (this.state.c3 != 'x' && this.state.c3 != 'y') {
					this.setState(state => ({
	      				'c3': player
	    			}));
	    			this.turnHandler();
	    		}
    			break;
		}
	}

	handleClick(cell) {

		if (this.state.playerXsTurn) {
			this.markBox(cell, 'x');
		} else {
			this.markBox(cell, 'y');
		}

		console.log(cell);
		console.log(this.state);
	}

	render() {

		const Gamebox = props => {
			let {cell,value} = props;

			return(
				<div className='box' id={this.state.cell} onClick={()=>this.handleClick(cell)}>{value}</div>
			)
		}

		return (
			<div id="outer">
				<div className="threeByThree">
					<div className="row" id="top">
						<Gamebox cell='a1' value={this.state.a1}/>
						<Gamebox cell='a2' value={this.state.a2}/>
						<Gamebox cell='a3' value={this.state.a3}/>
					</div>
					<div className="row" id="mid">
						<Gamebox cell='b1' value={this.state.b1}/>
						<Gamebox cell='b2' value={this.state.b2}/>
						<Gamebox cell='b3' value={this.state.b3}/>
					</div>
					<div className="row" id="bot">
						<Gamebox cell='c1' value={this.state.c1}/>
						<Gamebox cell='c2' value={this.state.c2}/>
						<Gamebox cell='c3' value={this.state.c3}/>
					</div>
				</div>
			</div>
		)
	}
}

export default Tictactoe;