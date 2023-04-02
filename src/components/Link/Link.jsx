import React from 'react';

const Link = ({route}) => {
    console.log(route);
    return (
        <li className='mr-12 hover:bg-green-400'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;