import React, { Component } from 'react'

export default class Video extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }

    render() {
        return (
            <iframe src={this.props.src} title={'Video'} frameBorder={0} allowFullScreen></iframe>
        )
    }
}
