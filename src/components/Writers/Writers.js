import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Writer from '../Writer/Writer';
import './Writers.css';

const Writers = () => {

    const [writers, setWriters] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('/writersData.JSON')
        .then(res => res.json())
        .then(data => setWriters(data))
    }, []);
    
    const handleAddtoCart = (writer) => {
        const newCart = [...cart, writer];
        setCart(newCart);
    };

    return (
        <div className="writers-info">
            <div className="writer-container">
                {
                    writers.map(writer => <Writer 
                        key={writer.id} 
                        writer={writer}
                        handleAddtoCart={handleAddtoCart}
                        ></Writer>)
                }
            </div>
            <div className="cart-container">
                <Cart key={cart.id} cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Writers;