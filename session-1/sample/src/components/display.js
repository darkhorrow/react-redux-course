import React, { Component } from 'react'

export default class Display extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <th colSpan="3">{this.props.input}</th>
        )
    }
}
