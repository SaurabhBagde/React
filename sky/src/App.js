import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinjas from './AddNinjas'

class App extends Component {
  state={
    ninjas:[
    { name: "Saurabh", age: 26, belt: "black", id: 1},
    { name: "Mrunali", age: 25, belt: "yellow", id: 2},
    { name: "Sahil", age: 16, belt: "green", id: 3},
    { name: "Balu", age: 22, belt: "pink", id: 4}
  ]
}
addNinjas= ninja=>{
  ninja.id = Math.random();
  let ninjas= [...this.state.ninjas, ninja];
  this.setState(
    { 
      ninjas: ninjas
    }
  )
}
deleteNinjas = (id) => {
  let ninjas = this.state.ninjas.filter(ninja=> ninja.id !== id);
  this.setState({
    ninjas: ninjas
  })
}
  render(){
  return (
    <div className="App">
     <h1>my first react app</h1>
     <p>welcome</p>
     <Ninjas  ninjas={this.state.ninjas} deleteNinjas={this.deleteNinjas} />
     <AddNinjas addNinjas={this.addNinjas}/>
    </div>
  );
  }
}
  
export default App;
