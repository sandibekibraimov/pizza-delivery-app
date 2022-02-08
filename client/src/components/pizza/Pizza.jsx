import React, { useState } from 'react';
import './Pizza.css';

const Pizza = ({ pizza }) => {
  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState('small');

  return (
    <div className='pizza'>
      <h2 className='pizza-title'>{pizza.name}</h2>
      <img src={pizza.image} alt={pizza.name} className='pizza-image' />

      <div className='pizza-details'>
        <div className='pizza-variant'>
          <p>Variant:</p>
          <select value={varient} onChange={(e) => setVarient(e.target.value)}>
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className='pizza-quantity'>
          <p>Quantity:</p>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((obj, index) => {
              return <option value={index + 1}>{index + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className='pizza-actions'>
        <div className='pizza-price'>
          <p>Price: {pizza.prices[0][varient] * quantity} </p>
        </div>
        <div className='pizza-btn'>
          <button>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
