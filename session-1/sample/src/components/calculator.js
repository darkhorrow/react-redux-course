import React, { Component } from 'react'
import Display from './display';
import Keyboard from './keyboard';

const INIT_STATE = 0;
const FIRST_FIGURE_STATE = 1;
const SECOND_FIGURE_STATE = 2;
const RESULT_STATE = 3;

const OPERATORS = ['X', '/', '+', '-'];

export default class Calculator extends Component {
    
    calculatorState = INIT_STATE;
    firstFigure = 0;
    secondFigure = 0;
    result = 0;
    operator = '';
    
    constructor(props) {
        super(props)
    
        this.state = {
            display: ""
        }
    }

    handleFigure(number) {
        switch(this.calculatorState) {
            case INIT_STATE:
                this.firstFigure = number;
                this.calculatorState = FIRST_FIGURE_STATE;
                this.setState({display: this.state.display + number.toString()});
                break;
            case FIRST_FIGURE_STATE:
                this.firstFigure = this.firstFigure * 10 +  number;
                this.setState({display: this.state.display + number.toString()});
                break;
            case SECOND_FIGURE_STATE:
                this.secondFigure = this.secondFigure * 10 + number;
                this.setState({display: this.state.display + number.toString()});
                break;
            case RESULT_STATE:
                this.result = 0;
                this.secondFigure = 0;
                this.operator = '';
                this.firstFigure = number;
                this.calculatorState = FIRST_FIGURE_STATE;
                this.setState({display: number.toString()});
                break;
            default:
                break;
        }
    }

    handleSymbol(symbol) {
        switch(this.calculatorState) {
            case INIT_STATE:
                break;
            case FIRST_FIGURE_STATE:
                if(OPERATORS.includes(symbol)) {
                    this.operator = symbol;
                    this.calculatorState = SECOND_FIGURE_STATE;
                    this.setState({display: this.state.display + symbol});
                }
                break;
            case SECOND_FIGURE_STATE:
                if(symbol === '=') {
                    this.result = this.resolve();
                    this.calculatorState = RESULT_STATE;
                    this.setState({display: this.state.display + symbol + this.result.toString()})
                }
                break;
            case RESULT_STATE:
                if(OPERATORS.includes(symbol)) {
                    this.firstFigure = this.result;
                    this.operator = symbol;
                    this.secondFigure = 0;
                    this.result = 0;
                    this.setState({display: this.firstFigure.toString() + this.operator});
                    this.calculatorState = SECOND_FIGURE_STATE;
                }
                break;
            default:
                break;
        }
    }

    resolve() {
        switch(this.operator) {
            case '+':
                return this.firstFigure + this.secondFigure;
            case '-':
                return this.firstFigure - this.secondFigure;
            case 'X':
                return this.firstFigure * this.secondFigure;
            case '/':
                return this.firstFigure / this.secondFigure;
            default:
                break;
        }
    }

    handleClick(value) {
        if(typeof value === 'number') {
            this.handleFigure(value);
        } else if (typeof value === 'string') {
            this.handleSymbol(value);
        }
    }
    
    render() {
        return (
            <div className="container mt-2">
                <table border={1}>
                    <thead>
                        <tr>
                            <Display input={this.state.display}/>
                            <th><button className="btn btn-outline-dark" onClick={()=>{this.handleClick('C')}}>C</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        <Keyboard output={(value)=>{this.handleClick(value)}}/>
                    </tbody>
                </table>
            </div>
        )
    }
}
