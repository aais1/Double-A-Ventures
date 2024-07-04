// ItemCard.js
import React from 'react';
import { Rating } from '@smastrom/react-rating';
import Watch from '../../assets/watch.png'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice/cartSlice';
import toast from 'react-hot-toast';

const ItemCard = ({ id,image, name, price, rating }) => {
  const dispatch=useDispatch();

  const handleAddProductToCart=()=>{
    dispatch(addToCart({id,name,price,rating,quantity:1}))
    toast.success('Product added to cart')
  }

  return (
    <div className="max-w-sm bg-white cursor-pointer hover:shadow-2xl rounded overflow-hidden shadow-lg border border-gray-200">
      <div className="overflow-hidden">
      <img className="w-[85%] mx-auto md:w-[100%] md:h-[100%] hover:scale-[1.10] duration-150 object-cover" src={ Watch } alt={name} /> 
      </div>
      <div className="px-6 md:py-4">
        <div className="font-bold text-lg md:text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet.</p>
        <p className="text-lg md:text-xl font-bold mt-2">{price}$</p>
        <div className="mt-2">
          <Rating style={{maxWidth:'150px'}} value={rating} readOnly={true} />
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className={`w-full text-black border border-black hover:bg-black hover:text-white text-md md:text-lg  font-bold py-2 px-4 rounded active:scale-[0.95] duration-100`}
        onClick={handleAddProductToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
