import React from 'react';
import './cart.css'

const Cart = ({ cart, handleDeleteCart }) => {
    let message;
    if(cart.length === 0){
        message = 'Please add some products'
    }
    return (
        <div>
            <h2 className={`bold ${cart.length>2? 'purple': 'blue' }`}>Order Summary: {cart.length}</h2>
            {message}
            {
                cart.map(ts => <p
                    key={ts._id}
                > {ts.name} <button
                    onClick={() => handleDeleteCart(ts._id)} >X</button></p>)
            }

        </div>
    );
};

export default Cart;