import React, {Component} from 'react';

import Publication from "../Components/Publication.js"
import Id from "../Components/Id.js"



export default class ProfilPubli extends React.Component {


	constructor(props) {
		super(props);
    
	}

	render() {
		return (
			<div className="content">
				<Id
             
              id ={this.props.id}
              name={this.props.name} 
              fullname={this.props.fullname}
              birthdate={this.props.birthdate}
              image={this.props.image}
              bg={this.props.bg}
              toggleBg={this.props.toggleBg}

             />
             <br />
             <Publication 
             last={this.props.last}
             count={this.props.count}
             onClick={this.props.onClick}
             />

			</div>
		);
	}
}


