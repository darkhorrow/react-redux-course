import React from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import ListGroup from 'react-bootstrap/ListGroup'

function BeerDisplaySimple(props) {
    const beersList = props.beers.map((beer, index) => {
            return(             
                <Card style={{width: '18rem'}}>
                    <Card.Img variant="top" src={beer.image_url} style={{maxHeight: '250px', objectFit: 'contain'}} className="mt-2" /> 
                    <Card.Body>
                        <Card.Title>{beer.name}</Card.Title>
                        <Card.Title className="font-weight-light font-italic">{beer.tagline}</Card.Title>
                        <Card.Text className="truncate">
                            {beer.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item key={index}>Alcohol By Volume: {beer.abv}</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
                
            );
        });

    return (
        <CardColumns>
            {beersList}
        </CardColumns>
    )
}

export default BeerDisplaySimple
