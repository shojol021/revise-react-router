import React, { useContext } from 'react';
import { Money } from '../About';

const Child2 = () => {
    const [money, setMoney] = useContext(Money)
    return (
        <div className='border'>
            <h3>Child 2</h3>
            <button onClick={() => setMoney(money+600)}>Money+++</button>
        </div>
    );
};

export default Child2;