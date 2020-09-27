import React, { Component } from 'react';

export default class Code extends Component {
	render () {
		return (
			<div className="wrapper">
				<div className="hour-wrapper">
					<h1 className="display-1">
						<span>00</span>
					</h1>
				</div>
				<div className="minutes-wrapper px-1">
					<h1 className="display-4">
						<span>00</span>
						<small>:</small>
						<span>00</span>
					</h1>
				</div>
			</div>
		)
	}
}