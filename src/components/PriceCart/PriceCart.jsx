import { list } from 'postcss';
import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 mr-4 p-4 rounded-md flex flex-col '>
            <h2 className='text-white'>
                <span className='text-5xl font-extrabold text-purple-600'>{price.price}</span>
                <span className='text-2xl font-bold text-white'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold my-6'>{price.name}</h5>
            <p className='underline text-white font-bold '>Features :</p>
            {
                price.features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='w-full bg-green-600 py-2 rounded-md text-white font-bold mt-auto hover:bg-green-700'>Click Now</button>
        </div>
    );
};

export default PriceCart;