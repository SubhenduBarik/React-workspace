import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from './actions';
function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(actions.increment(5))}>+</button>
      <button onClick={() => dispatch(actions.decrement())}>-</button>
      {isLogged ? <h3> Valuable Information, I shouldn't see: </h3> : ''}

    </div>
  );
}

export default App;