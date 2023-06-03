import { createSlice } from '@reduxjs/toolkit';
import RootState from '../types';

const initialState: RootState['counter'] = {
  counter: 0,
};
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.counter += 1;
    },
  },
});
export default counterSlice.reducer;
export const counterActions = counterSlice.actions;
