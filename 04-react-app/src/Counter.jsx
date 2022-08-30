import { PropTypes } from "prop-types";
import { useState } from "react";

export default function Counter({ value }) {
  const [counter, setCounter] = useState(10);

  const add = () => {
    setCounter(counter + 1);
  };
  const min = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(value);
  };
  return (
    <>
      <label>Counter</label>
      <p>{counter}</p>
      <button onClick={add}>Aumentar +1</button>
      <button onClick={min}>Disminuir +1</button>
      <button onClick={reset}>Reset +1</button>
    </>
  );
}

Counter.propTypes = {
  valor: PropTypes.number.isRequired,
};
Counter.defaultProps = {
  valor: 0,
};
