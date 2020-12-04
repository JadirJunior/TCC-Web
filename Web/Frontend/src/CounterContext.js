import React, { useState, createContext, useEffect } from "react";

export const CounterContext = createContext();

export const CounterProvider = (props) => {
  const [counter, setCounter] = useState(1);

  return (
    <CounterContext.Provider value={[counter, setCounter]}>
      {props.children}
    </CounterContext.Provider>
  );
};
