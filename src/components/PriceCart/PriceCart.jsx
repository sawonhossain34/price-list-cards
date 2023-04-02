import React from 'react';

const PriceCart = ({price}) => {
    return (
        <div>
            <h2>
                <span className='text-5xl font-extrabold text-purple-600'>{price.price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold'>{price.name}</h5>
        </div>
    );
};

export default PriceCart;