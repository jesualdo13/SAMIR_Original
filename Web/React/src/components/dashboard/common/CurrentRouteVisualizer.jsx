import React from "react";
import { Link, useLocation } from "react-router-dom";

import { IconHome } from "../../../base/Icons";

const CurrentRouteVisualizer = () => {
  const { pathname } = useLocation();
  let routes = pathname.split("/").slice(1);

  return (
    <div id="current-route-visualizer">
      {routes &&
        routes.map((route, index) => {
          return (
            <Link
              to={`/${routes.slice(0, index + 1).join("/")}`}
              className={index === 0 ? "root" : "route"}
              key={route}
            >
              {index === 0 && <IconHome />}
              <span>{route.split("-").join(" ")}</span>
            </Link>
          );
        })}
    </div>
  );
};

export default CurrentRouteVisualizer;
