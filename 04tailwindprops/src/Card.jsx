// Card.jsx
import React from 'react';

function Card({ title, description, image }) {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 m-4">
      <img src={image} alt="Card Visual" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
      </div>
    </div>
  );
}

export default Card;
