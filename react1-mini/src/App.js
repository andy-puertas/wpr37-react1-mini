import React, { Component } from 'react';
//import Header from './header.js'


class App extends Component {
  constructor(){
    super();
    this.state = {
      sports: ['Baseball', 'Soccer', 'Football', 'Basketball'],
      myName: 'Joe'
    }
  }

  inputChange(val) {
    this.setState({
      myName: val
    })
  }

  handleClick(sport){
    alert(sport)
  }

  render() {
    let sportsJSX = this.state.sports.map( (sport,i) => {
      return (
        <div key={i}>
          <h3>{sport}</h3>
          <button onClick={() => this.handleClick(sport) }>Click to learn more about {sport}</button>  
        </div>  
      )
    })
    return (
      <div>
        {/* <Header /> */}
          <h1>{this.state.myName}</h1> 
          <input value={this.state.myName} onChange={(e) => this.inputChange(e.target.value) }/>    
          {sportsJSX}
      </div>
    );
  }
}

export default App;
