import React, { useState } from "react";

import { ReactComponent as EmptyHeart } from "../../assets/empty-heart.svg";
import { ReactComponent as FullHeart } from "../../assets/fullheart.svg";

const ToggleHeart = ({ className }) => {
  const [toggled, setToggled] = useState(false);

  return toggled === false ? (
    <EmptyHeart className={className} onClick={() => setToggled(!toggled)} />
  ) : (
    <FullHeart className={className} onClick={() => setToggled(!toggled)} />
  );
};

export default ToggleHeart;
