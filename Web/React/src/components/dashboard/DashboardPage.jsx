import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import CurrentRouteVisualizer from "./common/CurrentRouteVisualizer";
import NavigationBar from "./common/NavigationBar";
import SideMenu from "./common/SideMenu";

const DashboardPage = () => {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState(false);

  return (
    <div id="dashboard">
      <NavigationBar
        sideMenuIsOpen={sideMenuIsOpen}
        setSideMenuIsOpen={setSideMenuIsOpen}
      />

      <div className="container">
        <SideMenu sideMenuIsOpen={sideMenuIsOpen} />

        <div className="main">
          <CurrentRouteVisualizer />

          <Outlet context={sideMenuIsOpen} />

          <p className="copyright">Copyright © ExcellentSoft™ 2022.</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
