import React from 'react';
import { useSelector } from 'react-redux';

const CartModal = () => {
    const cartItems = useSelector((state) => state.cartSlice.cartItems);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CartModal;