import React, { Component } from 'react'

export default class Heroes extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            heroes: [
                 {name: 'Batman', description: 'A rich guy'}, 
                 {name: 'Superman', description: 'A strong alien'}, 
                 {name: 'Spiderman', description: 'A jumpy boy'}
            ],
            inputName: '',
            inputDescription: ''
        }
    }

    addHero(hero){
        this.setState({heroes: [...this.state.heroes, {name: this.state.inputName, description: this.state.inputDescription}], inputName: '', inputDescription: ''});
    }
    
    render() {
        const listHeroes = this.state.heroes.map(
        (hero, i) => <li key={i} className="list-group-item">{hero.name} | {hero.description}</li>
        )
        return (
            <div className="container">
                <div class="form-group row-fluid mt-2">
                    <label for="name">Hero name</label>
                    <input type="text" className="form-control" name="name" id="name" aria-describedby="name" placeholder="Hero name" onChange={(event)=>this.setState({inputName: event.target.value})}/>
                    <input type="text" className="form-control" name="description" id="description" aria-describedby="description" placeholder="Hero description" onChange={(event)=>this.setState({inputDescription: event.target.value})}/>
                    <button onClick={()=>{this.addHero()}} type="button" name="addhero" id="addhero" className="btn btn-success">Add hero</button>
                </div>
                <ul className="list-group">
                    {listHeroes}
                </ul>
            </div>
        )
    }
}
