import React from 'react';

export default function Cards(props) {
  return (
    <div className="rounded-lg bg-white w-1/3 h-88 shadow-light flex flex-col items-center text-center">
      <img src={props.image} alt={props.title} className="mt-16" />
      <p className="text-primary mt-7 text-lg">{props.title}</p>
      <p className="text-gray-500 mt-3 w-9/12">{props.description}</p>
    </div>
  )
}
