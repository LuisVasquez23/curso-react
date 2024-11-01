import { PropTypes } from "prop-types";

const CounterApp = ({ counter }) => {
  return (
    <>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
    </>
  );
};

// PropTypes
CounterApp.propTypes = {
  counter: PropTypes.number,
};

export default CounterApp;
