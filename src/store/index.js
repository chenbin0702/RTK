import {configureStore} from '@reduxjs/toolkit';
import homeReducer from './modules/home'
import counterReducer from './modules/counter';
// const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose;
const store=configureStore(
  {
    reducer:{
      counter:counterReducer,
      home:homeReducer
    }
  }
)
export default store