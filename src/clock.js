import React, { Component } from 'react';

class Clock extends Component {

	constructor (props) {
        super(props);
        this.state = {time: new Date().toLocaleTimeString()};
        this.tick = this.tick.bind(this);
	}

	tick () {
		this.setState({time: new Date().toLocaleTimeString()});
	}

	componentDidMount() {
		setInterval(this.tick, 1000);
	}

	render () {
		return (
			<div>
				<div>
					<h1>{this.props.message}</h1>
					<h2>It is {this.state.time}.</h2>
				</div>
			</div>
		);
	}
}

export default Clock;