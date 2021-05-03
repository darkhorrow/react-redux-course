import React, { Component } from 'react'
import CardShow from './cardshow';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './apod.css';

export default class Apod extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            apod: {},
            dateSelected: new Date()
        }
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
                        onChange={(date) => this.setState({dateSelected: date})}
                    />
                    </div>
                </div>
                <hr></hr>
                <CardShow date={this.state.dateSelected.getFullYear() + '-' + (this.state.dateSelected.getMonth()+1) + '-' + this.state.dateSelected.getDate()} />
            </div>
        )
    }
}
