import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const writer of cart){
        total = total + writer.totalBooks;
    }
    return (
        <div className="cart">           
            <h3><i className="fas fa-user-edit"></i>Writers added: {cart.length}</h3>
            <p><i className="fas fa-book-open"></i>Total Books: {total}</p>
            {
                cart.map(writer => <div className="cart-w-info">
                    <img src={writer.img} alt="" />
                    <h4>{writer.name}</h4>
                </div>    
                )
            }
            </div>
    );
};

export default Cart;