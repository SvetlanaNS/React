import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCounter } from "./redux/counter/Count";
import './style.css';



export default function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <button className="button"
        aria-label="Increment value"
        onClick={() => dispatch(setCounter(counter.value + 1))}
      >
        Increment
      </button>
      <span>{counter.value}</span>
      <button className="button"
        aria-label="Decrement value"
        onClick={() => dispatch(setCounter(counter.value - 1))}
      >
        Decrement
      </button>
    </div>
  );
}

