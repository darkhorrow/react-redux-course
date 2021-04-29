import React, { Component } from 'react'
import List from './list';
import Form from './form';
import Alert from './alert';

export default class Heroes extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            heroes: [
                 {name: 'Batman', description: 'A rich guy'}, 
                 {name: 'Superman', description: 'A strong alien'}, 
                 {name: 'Spiderman', description: 'A jumpy boy'}
            ],
            error: {
                isActive: false,
                message: ''
            }
        }
    }

    addHero(element){
        if(!element || !element.name) {
            this.setState({error: {isActive: true, message: 'You must provide at least the hero name.'}});
            return;
        }
        this.setState({heroes: [...this.state.heroes, element]});
    }

    deleteHero(elementIndex) {
        const filteredHeroes = this.state.heroes;
        filteredHeroes.splice(elementIndex, 1);
        this.setState({heroes: filteredHeroes});
    }

    onAlertClose() {
        this.setState({error: {isActive: false, message: ''}});
    }
    
    render() {
        return (
            <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <Form onAdd={(element)=>{this.addHero(element)}}/>
                    </div>
                    <div className="col-8">
                        <List elements={this.state.heroes} onDelete={(element)=>{this.deleteHero(element)}} deleteText="Remove hero" />
                    </div>
                </div>
            </div>
            <Alert show={this.state.error.isActive} message={this.state.error.message} onClose={() => {this.onAlertClose()}}/>
            </>
        )
    }
}
