// Imported React library and component.
import React, { Component } from 'react';

// Created a function to render and send the values and the results to the parent once the onClick event takes place on the button elements.
class CalculatorInterface extends Component {
    render() {
        return (
            <div>
                <button className="symbolbutton" name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <button className="symbolbutton" name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <button className="symbolbutton" name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
                <button className="symbolbutton" name="AC" onClick={e => this.props.onClick(e.target.name)}>AC</button><br />


                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
                <button className="symbolbutton" name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br />


                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
                <button className="symbolbutton" name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br />

                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
                <button className="symbolbutton" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br />


                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
                <button id="equalbutton" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
                <button className="symbolbutton" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br />
            </div>
        );
    }
}

// Exported CalculatorInterface to App.js.
export default CalculatorInterface;