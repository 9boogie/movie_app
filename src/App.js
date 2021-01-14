import { render } from "@testing-library/react";
import React from "react";

class App extends React.Component{
  constructor(props){
    super(props)
    console.log("Hello")
  }
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
    this.setState(current => ({ count: current.count + 1 }))
  };
  minus = () => {
    console.log("minus");
    this.setState(current => ({ count: current.count - 1 }))
  };
  componentDidMount(){
    console.log("component rendered")
  };
  componentDidUpdate(){
    console.log("I am updated!")
  };
  componentWillUnmount(){
    console.log("Good Bye")
  }
  render() {
    console.log("I am rendering")
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    ) 
  }
}

export default App;
