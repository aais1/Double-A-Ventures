import React from 'react';
import { useSelector } from 'react-redux';
import { useCart } from '../context/CartContext';

const CartModal = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const { showCart, setShowCart } = useCart();

    const handleClose = () => {
        setShowCart(false);
    };

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
                showCart ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`}
            onClick={handleClose}
        >
            <div
                className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                    onClick={handleClose}
                >
                    &times;
                </button>
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p className="text-gray-700">Your cart is empty</p>
                ) : (
                    <ul className="space-y-4">
                        {cartItems.map((item, index) => (
                            <li key={index} className="flex justify-between">
                                <span className="text-gray-800">{item.name}</span>
                                <span className="text-gray-600">x {item.quantity}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CartModal;
