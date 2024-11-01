import { func } from "prop-types";
import { PropTypes } from "prop-types";

const CounterApp = ({ counter }) => {
  const handleAdd = () => {};

  const handleSubstract = () => {};

  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleSubstract}>-1</button>
    </>
  );
};

// PropTypes
CounterApp.propTypes = {
  counter: PropTypes.number,
};

export default CounterApp;
