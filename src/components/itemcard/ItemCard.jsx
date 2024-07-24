// ItemCard.js
import React from 'react';
import { Rating } from '@smastrom/react-rating';
import Watch from '../../assets/watch.png'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice/cartSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom'

const ItemCard = ({ id,image, name, price, rating }) => {
  const dispatch=useDispatch();

  const handleAddProductToCart=()=>{
    dispatch(addToCart({id,name,price,rating,quantity:1}))
    toast.success('Product added to cart')
  }

  return (
    <div className="max-w-sm bg-white mx-auto cursor-pointer hover:shadow-2xl rounded overflow-hidden shadow-lg border border-gray-200">
      <Link to={`/product/${id}`}>
      <div className="overflow-hidden h-[160px] w-[100%] md:h-[250px]">
      <img className="w-[100%] md:w-[100%] h-[100%]  hover:scale-[1.10] duration-150 object-cover" src={ image || Watch } alt={name} /> 
      </div>
      <div className="px-6 md:py-4 mt-2 md:mt-4">
        <div className="font-bold text-sm md:text-md mb-2">{name}</div>
        {/* <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet.</p> */}
        <p className="text-lg md:text-xl font-bold mt-2">{price}$</p>
        <div className="my-2">
          <Rating style={{maxWidth:'120px'}} value={rating} readOnly={true} />
        </div>
      </div>
      </Link>
      <div className="px-6  pb-2">
        <button className={`w-full text-black border border-black hover:bg-black hover:text-white text-md md:text-lg  font-bold py-2 px-4 rounded active:scale-[0.95] duration-100`}
        onClick={handleAddProductToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
