import React, { createContext, useState } from 'react';
import Parent1 from './Parent 1/Parent1';
import Parent2 from './Parent 2/Parent2';
import './About.css';

export const Taka = createContext(0);
export const Money = createContext(0);

const About = () => {

    const [money, setMoney] = useState(0)
    return (
        <Money.Provider value={[money, setMoney]}>
            <Taka.Provider value={'Taka Nai'}>
                <div>
                    <h2>Grand Parent: {money}</h2>
                    <div className='flex border'>
                        <Parent1></Parent1>
                        <Parent2></Parent2>
                    </div>
                </div>
            </Taka.Provider>
        </Money.Provider>
    );
};

export default About;