import React from 'react';

export default function FavoriteProduct(props) {
  return (
    <div className="relative flex flex-col items-center text-center px-2 py-3">
      <div className="absolute z-10 top-3 right-3 bg-white text-primary text-lg py-1 px-3 rounded-lg shadow border-1 border-gray-200 cursor-pointer">+</div>
      <img src={`${props.image}`} alt={`${props.title}`} width="120" height="120" />
      <div className="text-primary"><b className="text-sm">₺</b>{props.price}</div>
      <div>{props.title}</div>
      <div className="text-gray-500 text-sm">{props.quantity}</div>
    </div>
  )
}
