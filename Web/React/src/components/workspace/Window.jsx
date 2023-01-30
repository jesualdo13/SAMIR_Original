import React, { useState } from "react";

import { IconHelpCircle } from "../../base/Icons";

export const ContextWindow = React.createContext(null);

const Window = ({ el, activeWindowID, openNewWindow }) => {
  const [infoIsOpen, setInfoIsOpen] = useState(false);

  return (
    <div
      key={el.id}
      className={`window ${activeWindowID === el.id ? "active" : ""}`}
    >
      <ContextWindow.Provider value={{ openNewWindow }}>
        {el.form}
      </ContextWindow.Provider>

      <div className="extra">
        <button
          onClick={() => {
            setInfoIsOpen(!infoIsOpen);
          }}
        >
          <IconHelpCircle />
        </button>

        {infoIsOpen && <div className="content">{el.info}</div>}
      </div>

      <div className="copy">
        Copyright © ExcellentSoft™. Todos los derechos Reservados.
      </div>
    </div>
  );
};

export default Window;
