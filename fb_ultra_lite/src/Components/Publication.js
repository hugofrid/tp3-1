import React, {Component} from 'react';
import './Publication.css';


export default class Publication extends React.Component {
	constructor(props) {
		super(props);
		
	}


	render() {
		return (
			<div className="publi">
				<p>{this.props.last}</p>
				<div style={{float:'right'}}><p  style={{display:'inline'}}>{this.props.count}</p><button   style={{display:'inline'}} onClick={this.props.onClick}>C'est super !</button></div>
			</div>
		);
	}
}

