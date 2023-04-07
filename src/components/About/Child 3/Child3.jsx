import React, { useContext } from 'react';
import { Money, Taka } from '../About';

const Child3 = () => {
    const taka = useContext(Taka)
    const [money] = useContext(Money);
    return (
        <div className='border'>
            <h3>Child 3</h3>
            <h3>Taka: {money? money : taka}</h3>
        </div>
    );
};

export default Child3;