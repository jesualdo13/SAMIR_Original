import React from "react";
import Tab from "./Tab";

import { IconAdd } from "../../base/Icons";

const TabsZone = ({
  arrayOfOpenWindows,
  activeWindowID,
  focusTab,
  closeTab,
}) => {
  return (
    <div id="tabs-zone">
      <div className="tabs-container">
        {arrayOfOpenWindows.map((el) => {
          return (
            <Tab
              key={el.id}
              tabInfo={el}
              active={activeWindowID}
              focusTab={focusTab}
              closeTab={closeTab}
            />
          );
        })}
      </div>

      <button
        className={`minimize-button ${activeWindowID === 0 ? "active" : ""}`}
        onClick={() => {
          focusTab(0);
        }}
      >
        <IconAdd />
      </button>
    </div>
  );
};

export default TabsZone;
