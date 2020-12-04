import React, { useContext, useState } from "react";

import "./Styles/style.css";

import { ReactComponent as Plus } from "../../../../assets/plus-button.svg";
import { ReactComponent as Minus } from "../../../../assets/minus-button.svg";
import { CounterContext } from "../../../../CounterContext";

const Counter = () => {
  const [counter, setCounter] = useContext(CounterContext);

  return (
    <div className="Counter">
      <Minus
        onClick={() => setCounter(counter === 1 ? counter : counter - 1)}
      />
      <input type="text" value={counter} />
      <Plus onClick={() => setCounter(counter + 1)} />
    </div>
  );
};

export default Counter;
