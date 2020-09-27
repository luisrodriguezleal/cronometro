import React, { Component } from 'react';
import Code from './Components/code';
import Buttons from './Components/buttons';
import './App.css';

export default class App extends Component {
    render () {
        return (
        	<div>
	        	<Code />
	        	<Buttons />
        	</div>
        );
    }
}
