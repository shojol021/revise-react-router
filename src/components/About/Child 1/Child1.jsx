import React, { useContext } from 'react';
import { Taka } from '../About';

const Child1 = () => {
    const money = useContext(Taka)
    return (
        <div className='border'>
            Child 1
            <h3>{money}</h3>
        </div>
    );
};

export default Child1;