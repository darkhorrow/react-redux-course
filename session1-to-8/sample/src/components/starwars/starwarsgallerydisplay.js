import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import ListGroup from 'react-bootstrap/ListGroup'

function StarWarsGalleryDisplay(props) {
    const list = props.characters.map((character) => {
        return(             
            <Card style={{width: '18rem'}}>
                <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{character.height} cm</ListGroup.Item>
                    <ListGroup.Item>{character.mass} Kg</ListGroup.Item>
                </ListGroup>
            </Card>
            
        );
    });

    return (
        <div className="container mt-5">
            <CardColumns>
                {list}
            </CardColumns>
        </div>
    )
}

export default StarWarsGalleryDisplay
