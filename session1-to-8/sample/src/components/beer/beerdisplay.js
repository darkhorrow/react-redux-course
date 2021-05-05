import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import CardColumns from 'react-bootstrap/CardColumns'
import ListGroup from 'react-bootstrap/ListGroup'

function BeerDisplay(props) {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    const [beers, setBeers] = useState([]);
    const [beersList, setBeersList] = useState('');

    const fetchBeers = () => {
        if(status !== 'idle') return;

        const fetchData = async () => {
            setStatus('fetching');
            const response = await fetch(
                'https://api.punkapi.com/v2/beers'
            );
            const data = await response.json();
            setData(data);
            setBeers(data);
            setStatus('fetched');
        }

        fetchData();
    }

    const rangeFilter = () => {
        setBeers(data.filter((beer) => {return (beer.abv >= props.abv[0]) && (beer.abv <= props.abv[1])}));
    }

    useEffect(fetchBeers);
    useEffect(rangeFilter, [props.abv, data]);

    useEffect(() => {
        setBeersList(beers.map((beer, index) => {
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
        }));
    }, [beers]);

    return (
        <CardColumns>
            {beersList}
        </CardColumns>
    )
}

export default BeerDisplay
