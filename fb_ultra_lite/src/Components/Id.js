import React, {Component} from 'react';

export default class Id extends React.Component {
	constructor(props) {
		super(props);
		this.state =
		{	name: this.props.name,
			fullname: this.props.fullname,
			birthdate: this.props.birthdate,
			image: this.props.image,
		}
	}

	render() {
		return (
			<div>

				<img src={this.state.image}/>
				<p>{this.state.name} {this.state.fullname}</p>
				<p>{this.state.birthdate}</p>

			</div>
		);
	}
}

