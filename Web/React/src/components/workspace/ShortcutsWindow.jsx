import React from "react";

import {
  IconBag,
  IconCard,
  IconDocumentText,
  IconFile,
  IconPrint,
  IconSearch,
  IconStore,
} from "../../base/Icons";

import { data } from "./navigationBar/data";

const ShortcutsWindow = ({ activeWindowID, openNewWindow }) => {
  return (
    <div
      id="shortcuts-window"
      className={`${activeWindowID === 0 ? "active" : ""}`}
    >
      <div className="container">
        <h1>Accesos Directos</h1>

        <div className="main">
          <div className="block">
            <IconSearch />
            <p>Buscador</p>
          </div>
          <div className="block sparkly">
            <IconStore />
            <p>Facturar</p>
          </div>
          <div className="block">
            <IconDocumentText />
            <p>Cotizar</p>
          </div>
          <div className="block sparkly">
            <IconCard />
            <p>Cobrar</p>
          </div>
          <div
            className="block"
            onClick={() => {
              openNewWindow(data[1].children[1].children[2]);
            }}
          >
            <IconFile />
            <p>Inventario</p>
          </div>
          <div className="block sparkly">
            <IconBag />
            <p>Compras</p>
          </div>
          <div className="block">
            <IconPrint />
            <p>Reportes</p>
          </div>
        </div>
      </div>

      <div className="copy">
        <p>Copyright © ExcellentSoft™. Todos los derechos Reservados.</p>
      </div>
    </div>
  );
};

export default ShortcutsWindow;
