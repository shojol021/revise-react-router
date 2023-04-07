import React from 'react';
import './tshirt.css'

const Tshirt = ({ts, handleCart}) => {
    const {name, _id, picture, price} = ts
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <h4>Price: {price}</h4>
            <button onClick={() => handleCart(ts)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;