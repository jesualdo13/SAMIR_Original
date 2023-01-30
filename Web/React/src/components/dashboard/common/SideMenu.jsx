import React from "react";
import { Link } from "react-router-dom";

import {
  IconAlert,
  IconApps,
  IconDocumentText,
  IconHelpBuoy,
  IconPeople,
  IconPlugin,
  IconServer,
} from "../../../base/Icons";

const SideMenu = ({ sideMenuIsOpen }) => {
  return (
    <div id="side-menu" className={`${sideMenuIsOpen ? "open" : ""}`}>
      <Link to={"/dashboard"} className="btn">
        <IconApps />
        <span>Inicio</span>
      </Link>
      <Link to={"/dashboard/users"} className="btn">
        <IconPeople />
        <span>Usuarios</span>
      </Link>
      <Link to={"/dashboard/storage"} className="btn">
        <IconServer />
        <span>{!sideMenuIsOpen ? "Espacio" : "Almacenamiento"}</span>
      </Link>
      <Link to={"/dashboard/plugins"} className="btn">
        <IconPlugin />
        <span>Plugins</span>
      </Link>

      <a
        href="https://www.google.com"
        target={"_blank"}
        rel="noreferrer"
        className="btn"
      >
        <IconHelpBuoy />
        <span>Soporte</span>
      </a>
      <a
        href="https://www.google.com"
        target={"_blank"}
        rel="noreferrer"
        className="btn"
      >
        <IconAlert />
        <span>Acerca</span>
      </a>
      <Link to={"/dashboard/pdf"} className="btn">
        <IconDocumentText />
        <span>PDF</span>
      </Link>
    </div>
  );
};

export default SideMenu;
