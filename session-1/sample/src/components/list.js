import React, { Component } from 'react'

export default class List extends Component {
    constructor(props) {
        super(props)
    
        this.state = {

        }
    }
    
    render() {
        const listHeroes = this.props.elements.map(
            (hero, i) => 
                <li key={i} className="list-group-item">
                    <div className="row">
                        <div className="col-10">
                            <b>{hero.name}</b>
                            <br></br>
                            {hero.description}
                        </div>
                        <div className="col-2">
                            <button onClick={()=>{this.props.onDelete(hero)}} type="button" name="removehero" id="removehero" className="btn btn-danger">Remove hero</button>
                        </div>
                    </div>
                </li>
            )
        return (
            <ul className="list-group mt-2">
                {listHeroes}
            </ul>
        )
    }
}
