import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profil from './Components/Profil';
import Id from './Components/Id'

class App extends Component {
  constructor(props)
  {
    super(props);
   this.state = {
       members: [
           { id: 1, name: 'Paul', fullname: 'LePoulpe',birthdate:"", image:require('./Source/paul.jpg')},
            { id: 2, name: 'Tom', fullname: 'DeGouda',birthdate:"", image:require('./Source/gouda.jpg') },
              { id: 3, name: 'Patricia',fullname: 'McAvoy',birthdate:"", image:require('./Source/patricia.jpg')},
              ]
   }
  }
  renderProfil(members){  
    return(
        <div>
          
          {this.state.members.map((member) => (
            <Profil
             name={member.name} 
             onClick={() => this.get.onClick(i)} />
      ))}
        </div>  
      );
  }

  renderId()

  render(){
    return (
      <div>
       <div>
          {this.renderProfil(this.state.members)}
        </div>
        {
          this.state.members.map((id)) => (
            <Id name={} fullname="billy" birthdate="01/02/03" image={this.state.phototest} />
            )
        }
        
      </div>
    );
  }
}

export default App;



