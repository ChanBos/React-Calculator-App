// Imported React library and component.
import React, { Component } from 'react';

// Created a function that displays the results from props.
class ResultCalculation extends Component {

    render() {
        let { result } = this.props;
        return (
            <div className="result">
                <p data-placeholder="0.00" editable="true">{result}</p>
            </div>
        );
    }
}

// Exported ResultCalculation to App.js.
export default ResultCalculation;