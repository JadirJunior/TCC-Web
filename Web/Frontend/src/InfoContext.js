import React, { useState, createContext, useEffect } from "react";

import api from "./api";

export const InfoContext = createContext();

export const InfoProvider = (props) => {
  const [product, setProduct] = useState([]);

  return (
    <InfoContext.Provider value={[product, setProduct]}>
      {props.children}
    </InfoContext.Provider>
  );
};
