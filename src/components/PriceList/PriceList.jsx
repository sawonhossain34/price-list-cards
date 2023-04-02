import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect( () => {
        fetch('prices.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    } ,[])
    return (
        <div>
            <h3 className="text-5xl bg-purple-300 font-bold text-center p-4">Awesome affordable Price</h3>
            <div className='grid grid-cols-3'>
                {
                    prices.map(price => <PriceCart  price={price} ></PriceCart>)
                }
            </div>
        </div>
    );
};

export default PriceList;