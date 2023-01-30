import React from "react";
import { Outlet, useOutletContext } from "react-router-dom";

import NavigationMenu from "./NavigationMenu";

const UserPage = () => {
  const sideMenuIsOpen = useOutletContext();

  return (
    <div id="user-page">
      <NavigationMenu />

      <Outlet context={sideMenuIsOpen} />
    </div>
  );
};

export default UserPage;
