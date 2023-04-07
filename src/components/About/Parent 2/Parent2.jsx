import React from 'react';
import Child1 from '../Child 1/Child1';
import Child2 from '../Child 2/Child2';
import Child3 from '../Child 3/Child3';

const Parent2 = () => {
    return (
        <div className='border'>
            <h2>Parent 2</h2>
            <div className='border flex'>
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </div>
        </div>
    );
};

export default Parent2;