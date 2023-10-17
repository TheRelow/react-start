import React, { useState } from "react";
import classes from "./Counter.module.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button
        className={classes.counter}
        onClick={() => {
          increment();
        }}
      >
        count {count}
      </button>
    </div>
  );
};

export default Counter;
