import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './apod.css';

export default class Apod extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            apod: {}
        }
    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=Qfnl5fKDlUG07SudvfLFhmSvCP5km1muKkDXPmou')
            .then(response => response.json())
            .then(data => {this.setState({apod: data})});
    }
    
    
    render() {
        return (
            <div className="container mt-5">
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={this.state.apod.url} />
                    <Card.Body>
                        <Card.Title>{this.state.apod.title}</Card.Title>
                        <Card.Text className="truncate">
                            {this.state.apod.explanation}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">{this.state.apod.date}</Card.Footer>
                </Card>
            </div>
        )
    }
}
