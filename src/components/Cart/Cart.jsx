import React from 'react';

const Cart = ({ cart, handleDeleteCart }) => {
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
                {
                    cart.map(ts => <p key={ts._id}
                    > {ts.name} <button 
                    onClick={() => handleDeleteCart(ts._id)} >X</button></p>)
                }
                
        </div>
    );
};

export default Cart;