import React, { Component } from 'react'

export default class Calculator extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            message: ""
        }
    }

    handleClick(value) {
        this.setState({message: value ? this.state.message + value : ''});
    }
    
    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <table border={1}>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><button onClick={()=>{this.handleClick('')}}>C</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={()=>{this.handleClick(7)}}>7</button></td>
                        <td><button onClick={()=>{this.handleClick(8)}}>8</button></td>
                        <td><button onClick={()=>{this.handleClick(9)}}>9</button></td>
                        <td><button onClick={()=>{this.handleClick('X')}}>X</button></td>
                    </tr>
                    
                    <tr>
                        <td><button onClick={()=>{this.handleClick(4)}}>4</button></td>
                        <td><button onClick={()=>{this.handleClick(5)}}>5</button></td>
                        <td><button onClick={()=>{this.handleClick(6)}}>6</button></td>
                        <td><button onClick={()=>{this.handleClick('-')}}>-</button></td>
                    </tr>
                    
                    <tr>
                        <td><button onClick={()=>{this.handleClick(1)}}>1</button></td>
                        <td><button onClick={()=>{this.handleClick(2)}}>2</button></td>
                        <td><button onClick={()=>{this.handleClick(3)}}>3</button></td>
                        <td><button onClick={()=>{this.handleClick('+')}}>+</button></td>
                    </tr>

                    <tr>
                        <td><button onClick={()=>{this.handleClick('/')}}>/</button></td>
                        <td><button onClick={()=>{this.handleClick(0)}}>0</button></td>
                        <td><button onClick={()=>{this.handleClick(',')}}>,</button></td>
                        <td><button onClick={()=>{this.handleClick('=')}}>=</button></td>
                    </tr>
                </table>
            </div>
        )
    }
}
