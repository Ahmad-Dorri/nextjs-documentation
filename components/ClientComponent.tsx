'use client';
import { counterActions } from '@/store/slices/counter-slice';
import RootState from '@/store/types';
import { useDispatch, useSelector } from 'react-redux';

const ClientComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.counter);
  return (
    <>
      <button
        onClick={() => {
          dispatch(counterActions.increment());
        }}>
        Click me
      </button>

      <p>{counter}</p>
    </>
  );
};

export default ClientComponent;
