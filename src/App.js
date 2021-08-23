// Imported React and component from React. Also imported stylesheet and the components.
import React, { Component } from 'react';
// Imported stylesheet.
import './App.css';
// Imported components. 
import ResultCalculation from './components/ResultCalculation';
import CalculatorInterface from "./components/CalculatorInterface";

// Created a function that will fetch the data from props and pass this to the parent and calculate the result once the button is clicked on. 
// Included an argument that the calculator should reset if "AC" is clicked on.
class App extends Component {
  constructor() {
    super();

    this.state = {
      result: ""
    }
  }

  onClick = button => {

    if (button === "=") {
      this.calculate()
    }

    else if (button === "AC") {
      this.reset()
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  // Created a function that, once the state is changed, the calculation is performed and the result provided. Also passed an error argument 
  // should there be a problem.  
  calculate = () => {
    let checkResult = ''
    if (this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }

    else {
      checkResult = this.state.result
    }

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })

    }
  };

  // Rendered the components below to be showed in the Index.js.
  render() {
    return (
      <div>
        <h1>- % = ÷ X + ( My Calculator ) + X ÷ = % -</h1>
        <div className="calculator-body">
          <ResultCalculation result={this.state.result} />
          <CalculatorInterface onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

// Exported App to Index.js.
export default App;