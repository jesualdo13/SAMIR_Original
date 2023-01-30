import React from "react";

import { LogoWindows } from "../../base/Icons";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="logo">
        <LogoWindows />
      </div>

      <div className="loader">
        <p>Cargando ...</p>
        <div className="progress"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
