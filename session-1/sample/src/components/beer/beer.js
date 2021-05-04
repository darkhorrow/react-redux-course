import React, { useState, useEffect } from 'react'
import BeerDisplaySimple from './beerdisplaysimple';
import BeerSlider from './beerslider';

function Beers() {
    const [range, setRange] = useState([0, 100]);
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    const [beers, setBeers] = useState([]);

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
        setBeers(data.filter((beer) => {return (beer.abv >= range[0]) && (beer.abv <= range[1])}));
    }

    useEffect(fetchBeers);
    useEffect(rangeFilter, [range, data]);

    const handleChange = (newValue) => {
        setRange(newValue);
    };

    return (
        <div>
            <div className="container mt-5">
                <BeerSlider newAlcoholValue={(value) => handleChange(value)} />
                <BeerDisplaySimple beers={beers}/>
            </div>
        </div>
    )
}

export default Beers
