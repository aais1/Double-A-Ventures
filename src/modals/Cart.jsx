import React from 'react';
import { useSelector } from 'react-redux';
import { useCart } from '../context/CartContext';

const CartModal = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
    const {showCart,setShowCart} = useCart();

    return (
        <div className={`fixed z-50 bottom-0 transition-all duration-200 right-0 ${showCart ? ' translate-x-[100vw]' : 'translate-x-[300px]'} transform translate-x-full translate-y-full`}>
            <div className="fixed bottom-[16vh] right-0 w-64 h-[65vh] bg-white border border-gray-300  rounded-tl-xl rounded-bl-xl p-4 overflow-y-auto">
                <h2 className="text-xl font-bold mb-4">Cart</h2>
                {cartItems?.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cartItems?.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CartModal;