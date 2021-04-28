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

    addHero(){
        this.setState({heroes: [...this.state.heroes, {name: this.state.inputName, description: this.state.inputDescription}], inputName: '', inputDescription: ''});
    }

    deleteHero(heroToDelete) {
        const filteredHeroes = this.state.heroes.filter((hero) => { return hero.name !== heroToDelete.name; });
        this.setState({heroes: filteredHeroes});
    }
    
    render() {
        const listHeroes = this.state.heroes.map(
        (hero, i) => 
            <li key={i} className="list-group-item">
                <b>{hero.name}</b><br></br>{hero.description}
                <button onClick={()=>{this.deleteHero(hero)}} type="button" name="removehero" id="removehero" className="btn btn-danger">Remove hero</button>
            </li>
        )
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <div className="form-group row-fluid">
                            <label htmlFor="name">Hero name</label>
                            <input type="text" className="form-control" name="name" id="name" aria-describedby="name" placeholder="Hero name" value={this.state.inputName} onChange={(event)=>this.setState({inputName: event.target.value})}/>
                        </div>
                        <div className="form-group row-fluid">
                            <label htmlFor="description">Hero description</label>
                            <input type="text" className="form-control" name="description" id="description" aria-describedby="description" placeholder="Hero description" value={this.state.inputDescription} onChange={(event)=>this.setState({inputDescription: event.target.value})}/>     
                        </div>
                        <button onClick={()=>{this.addHero()}} type="button" name="addhero" id="addhero" className="btn btn-success form-control">Add hero</button>
                    </div>
                    <div className="col-8">
                        <ul className="list-group mt-2">
                            {listHeroes}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
