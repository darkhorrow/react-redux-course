import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Video from '../commons/video'
import { API_KEY } from '../../config';

export default class CardShow extends Component {  
    constructor(props) {
        super(props)
    
        this.state = {
            apod: {}
        }
    }

    componentDidMount() {
        if(this.props.date) {
            const url = 'https://api.nasa.gov/planetary/apod?api_key=' + API_KEY + '&date=' + this.props.date;

            fetch(url).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    const message = 'Date must be between Jun 16, 1995 and Apr 29, 2021';
                    this.props.onError(message);
                    throw new Error(message);
                }
            })
            .then(data => this.setState({apod: data}))
            .catch((error) => {
                console.log(error)
            });
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.date !== prevProps.date) {
            const url = 'https://api.nasa.gov/planetary/apod?api_key=' + API_KEY + '&date=' + this.props.date;

            fetch(url).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    const message = 'Date must be between Jun 16, 1995 and Apr 29, 2021';
                    this.props.onError(message);
                    throw new Error(message);
                }
            })
            .then(data => this.setState({apod: data}))
            .catch((error) => {
                console.log(error)
            });
        }
    }
    
    render() {
        

        return (
            <Card style={{width: '18rem'}}>
                {this.state.apod.media_type === 'image' ? 
                    <Card.Img variant="top" src={this.state.apod.url} /> 
                    : 
                    <Video src={this.state.apod.url}></Video>
                }
                <Card.Body>
                    <Card.Title>{this.state.apod.title}</Card.Title>
                    <Card.Text className="truncate">
                        {this.state.apod.explanation}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{this.state.apod.date}</Card.Footer>
            </Card>
        )
    }
}
