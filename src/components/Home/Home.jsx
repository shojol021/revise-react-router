import React, { useEffect, useState } from 'react';
import Tshirt from '../../Tshirt/Tshirt';
import './home.css';
import Cart from '../Cart/Cart';

const Home = () => {
    const [tshirts, setTshirts] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/t-shirt-data/main/tshirt.json')
            .then(res => res.json())
            .then(data => setTshirts(data))
    }, [])

    const [cart, setCart] = useState([]);

    const handleCart = (ts) => {
        const exists = cart.find(p => p._id === ts._id)
        if (exists) {
            alert('already added');
            return;
        }
        else {
            const newCart = [...cart, ts];
            setCart(newCart);
        }
    }

    const handleDeleteCart = (id) => {
        const remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining)

    }

    return (
        <div className='home'>
            <div className='tshirts'>
                {
                    tshirts.map(ts => <Tshirt
                        key={ts._id}
                        ts={ts}
                        handleCart={handleCart}></Tshirt>)
                }
            </div>
            <div>
                <Cart cart={cart}
                    handleDeleteCart={handleDeleteCart}></Cart>
            </div>
        </div>
    );
};

export default Home;