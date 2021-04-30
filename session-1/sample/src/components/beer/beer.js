import React, { useState, useEffect } from 'react'
import BeerDisplay from './beerdisplay';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import BeerSlider from './beerslider';

function Beers() {
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);
    const [beers, setBeers] = useState([]);
    const [value, setValue] = React.useState([0, 100]);

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

    useEffect(fetchBeers);

    const handleChange = (newValue) => {
        setValue(newValue);
        setBeers(data.filter((beer) => {return (beer.abv >= newValue[0]) && (beer.abv <= newValue[1])}));
    };

    return (
        <div>
            <div className="container mt-5">
                <BeerSlider newAlcoholValue={(value) => handleChange(value)} />
                <BeerDisplay beers={beers}/>
            </div>
        </div>
    )
}

export default Beers
