import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profil from './Components/Profil';
import ProfilPubli from './Containers/ProfilPubli.js'

class App extends Component {
  constructor(props)
  {
    super(props);
   this.state = {
       members: [
           { id: 1, name: 'Paul', fullname: 'LePoulpe',birthdate:"26/01/2008", image:require('./Source/paul.jpg'), last:"j'ai plus d'encre lol",count:0,bg:false},
            { id: 2, name: 'Tom', fullname: 'DeGouda',birthdate:"02/05/2018", image:require('./Source/gouda.jpg'),last:"mon pote l'ementale à des trous de memoire lol",count:0,bg:true },
              { id: 3 , name: 'Patricia',fullname: 'McAvoy',birthdate:"21/04/1979", image:require('./Source/patricia.jpg'), last:"Ecoutez pas kevin ! il dit tous le temps que c'est de ma faute",count:0,bg:true},
              ],
      visible:1,

   }
  }
  renderProfil(members){  

    return(
        <div className="profils">
          
          {this.state.members.map((member) => (
            <Profil
             key={member.id}
             name={member.name}
             onClick={() => this.changeProfil(member.id)}
             
             />
      ))}
        </div>  
      );
  }

  upCount()
  {
      this.state.members.map(el => {
        if(el.id=== this.state.visible)
          {
            let upcount = el.count + 1;
            let index = this.state.visible - 1;
            let nextMemb = this.state.members;
            nextMemb[index].count = upcount
            this.setState({members:nextMemb})        
          } 
      }
      )
  }

  toggleBg()
  {

    this.state.members.map(el => {
        if(el.id=== this.state.visible)
          {
            
            let actbg = el.bg;
            let newbg = !actbg ;
            let index = this.state.visible - 1;
            let nextMemb = this.state.members;
            nextMemb[index].bg = newbg;
            
            this.setState({members:nextMemb})  
          

          } 
      }
      )
  }

  renderId(members)
  {
    let disp;
    {members.map((member) => {
      if(this.state.visible === member.id){
          disp =  <ProfilPubli
              key={member.id}
              id ={member.id}
              name={member.name} 
              fullname={member.fullname}
              birthdate={member.birthdate}
              image={member.image}
              last={member.last}
              count={member.count}
              bg={member.bg}
              onClick={() => this.upCount()}
              toggleBg={() => this.toggleBg()}
              
             />
           }
      })}
    return disp;
  }

changeProfil(i)
{
  this.setState({
    visible:i,
  });

}

render(){
    return (
      <div className="feed">
        <div>
          {this.renderProfil(this.state.members)}
        </div>
          {this.renderId(this.state.members)}  
      </div>
    );
  }
}

export default App;



