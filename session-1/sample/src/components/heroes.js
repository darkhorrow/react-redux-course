import React, { Component } from 'react'

export default class Heroes extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             heroes: ['Batman', 'Superman', 'Spiderman'],
             inputValue: ''
        }
    }

    addHero(hero){
        this.setState({heroes: [...this.state.heroes, this.state.inputValue]});
    }
    
    render() {
        const listHeroes = this.state.heroes.map(
            (hero, i) => <li key={i} className="list-group-item">{hero}</li>
        )
        return (
            <div className="container">
                <div class="form-group">
                    <label for="name">Hero name</label>
                    <input type="text" class="form-control" name="name" id="name" aria-describedby="name" placeholder="Hero name" onKeyDown={(event)=>this.setState({inputValue: event.target.value})}/>
                    <button onClick={()=>{this.addHero()}} type="button" name="addhero" id="addhero" className="btn btn-success">Add hero</button>
                </div>
                <ul className="list-group">
                    {listHeroes}
                </ul>
            </div>
        )
    }
}
