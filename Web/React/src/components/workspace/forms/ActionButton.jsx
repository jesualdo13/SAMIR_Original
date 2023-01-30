import React from "react";

const ActionButton = ({
  name = "",
  svg,
  deleteBtn,
  special,
  color,
  onClick,
}) => {
  return (
    <button
      className={`action-btn ${deleteBtn ? "delete" : ""} ${
        special ? "general-action-btn" : ""
      } ${color === "green" ? "green" : ""}`}
      onClick={onClick}
      title={name}
    >
      {svg}
      {name && <p className={svg ? "padding" : ""}>{name}</p>}
    </button>
  );
};

export default ActionButton;
