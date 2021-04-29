import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './apod.css';
import Alert from '../alert';
import Video from '../video';

export default class Apod extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            apod: {},
            dateSelected: new Date(),
            error: {
                isActive: false,
                message: ''
            }
        }
    }

    componentDidMount() {
        fetch('https://api.nasa.gov/planetary/apod?api_key=Qfnl5fKDlUG07SudvfLFhmSvCP5km1muKkDXPmou')
            .then(response => response.json())
            .then(data => {this.setState({apod: data})});
    }

    handleDateChange(date) {
        const url = 'https://api.nasa.gov/planetary/apod?api_key=Qfnl5fKDlUG07SudvfLFhmSvCP5km1muKkDXPmou&date=' + 
            date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();

        this.setState({dateSelected: date});

        fetch(url).then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                this.setState({error: {isActive: true, message: 'Date must be between Jun 16, 1995 and Apr 29, 2021'}});
                throw new Error('Date must be between Jun 16, 1995 and Apr 29, 2021');
            }
        })
        .then(data => {this.setState({apod: data})})
        .catch((error) => {
            console.log(error)
        });
    }

    onAlertClose() {
        this.setState({error: {isActive: false, message: ''}});
    }
    
    render() {
        return (
            <div className="container mt-5">
                <div className="form-group">
                    <label>Choose a date</label>
                    <div>
                    <DatePicker
                        className={'form-control'}
                        selected={this.state.dateSelected}
                        onChange={(date) => this.handleDateChange(date)}
                    />
                    </div>
                </div>
                <hr></hr>
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
                <Alert show={this.state.error.isActive} message={this.state.error.message} onClose={() => {this.onAlertClose()}}/>
            </div>
        )
    }
}
