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
			<button>{this.state.name}</button>
			)
	}
}