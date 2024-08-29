import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Contacts = () => {
  const counterVal = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const add = () => {
      dispatch({ type: 'add' });     };

  const sub = () => {
      dispatch({ type: 'sub' }); 
  };

  return (
      <div>
            
          <h1>{counterVal}</h1><br />
          <input type="button" value="Add" onClick={add} /> 
          <input type="button" value="Sub" onClick={sub} /> 
      </div>
  );
}

export default Contacts