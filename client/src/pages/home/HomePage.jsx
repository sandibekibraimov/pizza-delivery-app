import React from 'react';
import './HomePage.css';

import pizzas from '../../data';
import Pizza from '../../components/pizza/Pizza';

const HomePage = () => {
  return (
    <div className='home'>
      <div className='home-row'>
        {pizzas.map((pizza) => {
          return (
            <div className='home-col'>
              <Pizza pizza={pizza} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
