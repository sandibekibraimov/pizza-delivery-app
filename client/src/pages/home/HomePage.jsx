import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css';

import pizzas from '../../data';
import Pizza from '../../components/pizza/Pizza';

import { getAllPizzas } from '../../redux/actions/pizza.actions';

const HomePage = () => {
  const dispatch = useDispatch();

  const loadPizzas = () => {
    dispatch(getAllPizzas());
  };

  useEffect(() => {
    loadPizzas();
  }, []);

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
