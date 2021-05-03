import React, { useState } from 'react'
import BeerDisplay from './beerdisplay';
import BeerSlider from './beerslider';

function Beers() {
    const [range, setRange] = useState([0, 100]);

    const handleChange = (newValue) => {
        setRange(newValue);
    };

    return (
        <div>
            <div className="container mt-5">
                <BeerSlider newAlcoholValue={(value) => handleChange(value)} />
                <BeerDisplay abv={range}/>
            </div>
        </div>
    )
}

export default Beers
