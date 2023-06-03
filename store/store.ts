import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counter-slice';
import RootState from './types';
const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export default store;
