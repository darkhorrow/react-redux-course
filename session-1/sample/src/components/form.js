import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            nameInput: '',
            descriptionInput: ''
        }
    }

    render() {
        return (
            <>
                <div className="form-group row-fluid">
                    <label htmlFor="name">Hero name</label>
                    <input type="text" className="form-control" name="name" id="name" aria-describedby="name" placeholder="Hero name" value={this.state.nameInput} onChange={(event)=>this.setState({nameInput: event.target.value})}/>
                </div>
                <div className="form-group row-fluid">
                    <label htmlFor="description">Hero description</label>
                    <input type="text" className="form-control" name="description" id="description" aria-describedby="description" placeholder="Hero description" value={this.state.descriptionInput} onChange={(event)=>this.setState({descriptionInput: event.target.value})}/>     
                </div>
                <button onClick={()=>{this.props.onAdd({name: this.state.nameInput, description: this.state.descriptionInput}); this.setState({nameInput: '', descriptionInput: ''})}} type="button" name="addhero" id="addhero" className="btn btn-success form-control">Add hero</button>
            </>
        )
    }
}
