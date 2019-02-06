import React, {Component} from 'react';

export default class Profil extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
		
			name: this.props.name
		}
		
	}

	render(){
		return(
			<button key={this.state.name} onClick={this.props.onClick}>{this.props.name}</button>
			)
	}
}