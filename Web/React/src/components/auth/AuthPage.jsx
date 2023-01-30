import React from "react";
import { Link, Outlet } from "react-router-dom";

import { LogoWindows } from "../../base/Icons";

const AuthPage = () => {
  // Leer el subdominio de la url
  const url = window.location.hostname.split(".");
  const currentSubdomain = url[url.length - 2];

  return (
    <div id="auth-page">
      <div className="main">
        <LogoWindows className="picture" />

        {/* Login or Recovery */}
        <Outlet context={currentSubdomain} />

        <div className="additional">
          <Link to={"/help"}>Ayuda</Link>

          <Link to={"/register"}>Registrarme</Link>
        </div>

        <div className="icons">
          <LogoWindows />
          <LogoWindows />
          <LogoWindows />
          <LogoWindows />
        </div>

        <div className="copyright">
          <p>
            Copyright ©{" "}
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              ExcellentSoft™
            </a>{" "}
            2022
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
