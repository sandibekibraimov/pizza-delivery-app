import { combineReducers } from 'redux';

import { pizzaReducer } from './pizza.reducer';

const reducers = combineReducers({
  pizzas: pizzaReducer,
});

export default reducers;
