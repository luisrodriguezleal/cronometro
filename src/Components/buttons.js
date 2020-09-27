import React, { Component } from 'react';

export default class Buttons extends Component {
	render () {
		return (
			<div className="btn-group pt-4">
				<button className="btn btn-outline-dark btn-lg" id="start-pause-btn">start</button>
				<button className="btn btn-outline-dark btn-lg" id="reset-btn">reset</button>
			</div>
		);
	}
}