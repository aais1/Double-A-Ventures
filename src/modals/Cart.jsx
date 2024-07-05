import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useCart } from "../context/CartContext";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice/cartSlice";
import Watch from "../assets/watch.png";

//card item component
const CartItem = ({ id, name, price, quantity }) => {
  const dispatch = useDispatch();
  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };
  return (
    <li
      key={id}
      className="flex py-2 border-t border-b items-center justify-between"
    >
      <div className="flex gap-x-2 items-center">
        <img src={Watch} width={65} height={65} alt="" />
        <div className="flex flex-col">
          <span className="text-gray-800 font-bold">{name}</span>
          <p className="font-semibold">{price}$</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="border flex items-center justify-center px-3 cursor-pointer active:bg-black active:text-white duration-100 font-bold text-xl"
          onClick={() => handleIncrease(id)}
        >
          +
        </button>
        <span className="text-black mx-2 font-bold">{quantity}</span>
        <button
          className="border flex items-center justify-center px-3 cursor-pointer active:bg-black active:text-white duration-100 font-bold text-xl"
          onClick={() => handleDecrease(id)}
        >
          -
        </button>
        =
        <span className="text-sm font-semibold">
          {(price * quantity).toFixed(2)}$
        </span>
      </div>
    </li>
  );
};

const CartModal = () => {

  const {cartItems,totalAmount} = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const { showCart, setShowCart } = useCart();

  const handleClose = () => {
    setShowCart(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${
        showCart
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      onClick={handleClose}
    >
      <div
        className="relative bg-white max-h-[80vh] w-[90vw] md:w-[50vw] overflow-y-auto p-8 rounded-lg shadow-lg  mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute text-4xl hover:text-black top-2 right-2 text-gray-600 "
          onClick={handleClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-700">Your cart is empty</p>
        ) : (
          <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </ul>
          <div className="text-right mb-2">
            <p className="text-gray-500 font-semibold mt-2">Total</p>
            <p className="font-bold">{totalAmount.toFixed(2)}$</p>
          </div>
          <button className={`w-full text-black border border-black hover:bg-black hover:text-white text-md md:text-lg  font-bold py-2 px-4 rounded active:scale-[0.95] duration-100`}
        >
          Checkout
        </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
