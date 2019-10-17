import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import Calculate from './components/Calculate';
class App extends Component {

  constructor(){
    super();

    this.state = {
        result: ""
    }
}

  onClick = (button) => {
    if(button === "C") {
      this.reset()
    }
    else if(button === "D") {
      this.backspace()
    }
    else if(button === "=" ) {
      this.calculate()

    }
    
    

    else {
        this.setState({result: this.state.result + button})
    }
  }


  reset = () => {
    this.setState({result:""})

  }

  calculate = () => {
    try{
    this.setState({result: (eval(this.state.result)|| "" ) + "" })
    }
    catch(e){
      this.setState({result: "Error !"})
    }
  }

  backspace = () => {
      
      this.setState({ result: this.state.result.slice(0,-1) });
      
  }


 


  render() {
  return (
    <div className="App" style={calcStyle}>
      <Header/>
      <Result result={this.state.result}/>
     <Calculate onClick= {this.onClick}/>
    </div>
  );
}
}






const calcStyle = {
   
  background: '#F6F6F6',
  paddingBottom: '30px',
  paddingTop: '30px',


/* limit the width and center */

  maxWidth: '400px',
  margin: '0 auto',
  border: '2px solid #111',
  borderRadius: '5px',
  transform: 'translate(0, 20%)'

}

export default App;
