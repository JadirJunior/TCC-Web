import React, { useState } from "react";

import "./Styles/style.css";

import { useHistory } from "react-router-dom";

import { ReactComponent as SearchIcon } from "../../../assets/search-icon.svg";

const Searchbar = () => {
  const History = useHistory();
  const [value, setValue] = useState("");

  return (
    <div className="searchbar">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchIcon
        className="icon"
        onClick={() => History.push(`/products/search/?q=${value}`)}
      />
    </div>
  );
};

export default Searchbar;
