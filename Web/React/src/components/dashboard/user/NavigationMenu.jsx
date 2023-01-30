import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  IconPerson,
  IconNotifications,
  IconPrism,
  IconDocumentText,
  IconCard,
  IconBusiness,
  IconPersonRemove,
  IconChevron,
} from "../../../base/Icons";

const NavigationMenu = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div id="navigation-menu">
      <strong
        onClick={() => {
          setMenuIsOpen(!menuIsOpen);
        }}
        className={menuIsOpen ? "open" : ""}
      >
        Navegación
        <IconChevron className={menuIsOpen ? "open" : ""} />
      </strong>

      <div className={`links ${menuIsOpen ? "open" : ""}`}>
        <Link to={"/dashboard/user"} className="nav-button">
          <IconPerson />
          <p>Perfil</p>
        </Link>
        <Link to={"/dashboard/user/account"} className="nav-button">
          <IconBusiness />
          <p>Cuenta Principal</p>
        </Link>
        <Link to={"/dashboard/user/notifications"} className="nav-button">
          <IconNotifications />
          <p>Notificaciones</p>
        </Link>
        <Link to={"/dashboard/user/plan"} className="nav-button">
          <IconPrism />
          <p>Plan</p>
        </Link>
        <Link to={"/dashboard/user/bills"} className="nav-button">
          <IconDocumentText />
          <p>Facturas</p>
        </Link>
        <Link to={"/dashboard/user/payments"} className="nav-button">
          <IconCard />
          <p>Pagos</p>
        </Link>
        <Link to={"/dashboard/user/account-suspension"} className="nav-button">
          <IconPersonRemove />
          <p>Darse de Baja</p>
        </Link>
      </div>
    </div>
  );
};

export default NavigationMenu;
