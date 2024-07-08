import { useSelector, useDispatch } from "react-redux";
import { useCart } from "../context/CartContext";
import axios from "axios";
import {
  increaseQuantity,
  decreaseQuantity,
} from "../redux/cartSlice/cartSlice";
import Watch from "../assets/watch.png";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

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
  const {user}=useSelector(state=>state.user);
  const navigate=useNavigate();
  const [address,setAddress]=useState('');
  const addressRef=useRef();

  const handleClose = () => {
    setShowCart(false);
  };

  const handleCheckout=async()=>{
    if(user==null){
      //if there is no user and tries to checkout
      //showCart will be true
      //so that it will pop up the cart when the user logins
      sessionStorage.removeItem('showCart');
      sessionStorage.setItem('showCart',true);
      navigate('/login')
    }

    if(address.trim()===''){
      toast.error('Address is required');
      addressRef.current.focus();
      return;
    }
    //confiriming if user wants to proceed
    if(window.confirm("Do you really want to checkout?")){ 
      try {
        const {data}=await axios.post(import.meta.env.VITE_SERVER_URL+'/orders',{
          userId:user.id,
          cartItems,
          address,
          totalAmount
        });

        toast.success("Order Placed Successfully,Please wait for order placement confirmation");
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
    }

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
          <div className="mt-2">
            <input type="text"
            placeholder="Enter your Address"
            value={address}
            ref={addressRef}
            className="border border-black w-[100%] py-2 px-3"
            onChange={(e)=>setAddress(e.target.value)} />
          </div>
          <div className="text-right mb-2">
            <p className="text-gray-500 font-semibold mt-2">Total</p>
            <p className="font-bold">{totalAmount.toFixed(2)}$</p>
          </div>
          <button className={`w-full text-black border border-black hover:bg-black hover:text-white text-md md:text-lg  font-bold py-2 px-4 rounded active:scale-[0.95] duration-100`}
          onClick={handleCheckout}
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
