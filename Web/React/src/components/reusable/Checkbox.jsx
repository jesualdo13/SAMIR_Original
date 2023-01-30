import React from "react";
import { IconCheckmark } from "../../base/Icons";

const Checkbox = ({ forID, state, name }) => {
  const { inputs: value, setInputs: setValue } = state;

  const handleClick = () => {
    setValue({ ...value, [forID]: !value[forID] });
  };

  return (
    <div
      className={`checkbox ${value[forID] ? "checked" : ""}`}
      onClick={handleClick}
    >
      <IconCheckmark />
      <p>{name}</p>
    </div>
  );
};

export default Checkbox;
