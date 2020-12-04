import React, { useState, createContext, useEffect } from "react";

export const LoginContext = createContext();

export const LoginProvider = (props) => {
  const [login, setLogin] = useState(null);

  return (
    <LoginContext.Provider value={[login, setLogin]}>
      {props.children}
    </LoginContext.Provider>
  );
};
