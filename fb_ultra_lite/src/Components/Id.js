import React, {Component} from 'react';
import './Id.css';

export default class Id extends React.Component {

	constructor(props)
	{
		super(props);
		this.state = {
			id: this.props.id,
			count: 0,
			backgchange: true,
		}
	}

	changeColor(e)
	{
		this.setState({
    	backgchange:!e,
  	});
	}
render()
 {
		let color
		if(this.state.backgchange)
		{
			color="yellow"
		}
		else 
		{
			color="magenta"
		}
			return (
				<div className="prof" style={{backgroundColor:color}}>

					<div className="photo"><img src={this.props.image}/></div>
					<h1 style={{display:'inline'}}>{this.props.name}</h1> <h2 style={{display:'inline'}}>{this.props.fullname}</h2>
					<p><small>{this.props.birthdate}</small></p>
					<button style={{float:'right'}} onClick={() => this.changeColor(this.state.backgchange)}>Changeons de couleur !</button>

				</div>
				)
			;
		
	}
}

