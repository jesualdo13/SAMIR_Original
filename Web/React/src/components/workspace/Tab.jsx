import React from "react";

import { IconClose, LogoWindows } from "../../base/Icons";

const Tab = ({ tabInfo, active = 0, focusTab, closeTab }) => {
  const { id, text } = tabInfo;

  return (
    <div
      className={`tab ${active === id ? "active" : ""}`}
      onClick={() => {
        focusTab(id);
      }}
      title={text}
    >
      <div className="icon">
        <LogoWindows />
      </div>

      <div className="title">
        <p>{text}</p>
      </div>

      <button
        onClick={() => {
          closeTab(id);
        }}
      >
        <IconClose />
      </button>
    </div>
  );
};

export default Tab;
