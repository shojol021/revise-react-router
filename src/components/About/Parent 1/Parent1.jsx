import React from 'react';
import Child1 from '../Child 1/Child1';
import Child2 from '../Child 2/Child2';

const Parent1 = () => {
    return (
        <div className='border'>
            <h2>Parent 1</h2>
            <div className='border flex'>
                <Child1></Child1>
                <Child2></Child2>
            </div>
        </div>
    );
};

export default Parent1;