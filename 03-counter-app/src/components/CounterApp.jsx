import { PropTypes } from "prop-types";
import { useState } from "react";

const CounterApp = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c) => c + 1);
  };

  const handleSubstract = () => {
    setCounter((c) => {
      if (c <= 0) {
        return c;
      }

      return c - 1;
    });
    // setCounter((c) => c - 1);
  };

  const handleReset = () => {
    setCounter(value);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

// PropTypes
CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
