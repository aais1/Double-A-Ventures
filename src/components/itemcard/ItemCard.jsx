// ItemCard.js
import React from 'react';
import Watch from '../../assets/watch.png'
const ItemCard = ({ image, name, price, rating, bgColor }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg border border-gray-200">
      <img className="w-full h-64 object-cover" src={ Watch } alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet.</p>
        <p className="text-xl font-bold mt-2" style={{ color: bgColor }}>{price}</p>
        <div className="flex items-center mt-2">
          {Array.from({ length: rating }, (_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.4 3.2 1-5.8L1 7.8l5.8-.8L10 2l2.2 5.2 5.8.8-4.2 4.6 1 5.8z" />
            </svg>
          ))}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className={`w-full text-white font-bold py-2 px-4 rounded`} style={{ backgroundColor: bgColor }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
