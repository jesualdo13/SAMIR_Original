import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { customFetch } from "../../../helpers/customFetch";

import ProfilePicture from "../../../images/profile-picture.jpg";
import {
  IconMenu,
  IconNotifications,
  IconSearch,
  IconCaret,
  IconLogout,
  IconCard,
  IconDocumentTextOutline,
  IconPrismOutline,
  IconDocumentText,
  IconPersonOutline,
  IconIDCardOutline,
  IconAlertOutline,
  IconLinkOutline,
  IconEllipsisVertical,
  IconHelpCircle,
} from "../../../base/Icons";

import { searchBarResults } from "./searchBarResults";
import { ContextUser } from "../../../contexts/ContextUser";
import { Dialog, DialogBody, DialogFooter } from "./dialog";
import { Steeper } from "./steeper";

const endpoint_logout = "https://samirapp.royaltics.com/v1/auth/logout";

const NavigationBar = ({ sideMenuIsOpen, setSideMenuIsOpen }) => {
  const navigate = useNavigate();
  const { user } = useContext(ContextUser);

  const [openMenu, setOpenMenu] = useState(0);

  const [rightMenuIsOpen, setRightMenuIsOpen] = useState(false);

  const toggleRightMenu = () => {
    setRightMenuIsOpen(!rightMenuIsOpen);
  };

  useEffect(() => {
    const menu = window.addEventListener("click", (e) => {
      let className = e.target.className;

      if (e.target.classList.contains("nav-btn")) {
        setOpenMenu(Number(e.target.dataset.navbtn));

        if (e.target.dataset.navbtn !== "4") {
          setRightMenuIsOpen(false);
        }
      } else if (!e.target.classList.contains("fm-item")) {
        setOpenMenu(0);

        setRightMenuIsOpen(false);
      }

      if (className === "search-bar-input") {
        setIsSearchBarResultsOpen(true);
      } else if (className !== "results") {
        setIsSearchBarResultsOpen(false);
      }
    });

    let keys = [];

    searchBarResults.forEach((result) => {
      if (result.shortcut) {
        keys.push([...result.shortcut.slice(1), result.link]);
      }
    });

    const keyListener = window.addEventListener("keydown", (e) => {
      if (e.shiftKey) {
        if (!e.repeat) {
          e.preventDefault();

          keys.forEach((el, index) => {
            if (el.some((key) => e.key.toUpperCase() === key.toUpperCase())) {
              setIsSearchBarResultsOpen(false);

              navigate(keys[index][1]);
            }
          });
        }
      }
    });

    return () => {
      window.removeEventListener("click", menu);
      window.removeEventListener("keypress", keyListener);
    };

    //eslint-disable-next-line
  }, []);

  const toggleSideMenu = () => {
    setSideMenuIsOpen(!sideMenuIsOpen);
  };

  const [isSearchBarResultsOpen, setIsSearchBarResultsOpen] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");

  useEffect(() => {
    let filteredResults = searchBarResults.filter((result) =>
      result.text.toLowerCase().includes(searchBarValue.toLowerCase())
    );

    if (filteredResults.length === 0) {
      filteredResults.push(null);
    }

    setSearchBarFilteredResults(filteredResults);

    //eslint-disable-next-line
  }, [searchBarValue]);

  const [searchBarFilteredResults, setSearchBarFilteredResults] = useState([]);

  // ------------------------------------------

  // Detalles de la petición (logout)
  const [fetchState, setFetchState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    message: null,
  });

  const logout = (e) => {
    e.preventDefault();

    customFetch({ fetchState, setFetchState }, endpoint_logout, {
      method: "GET",
    });
  };

  useEffect(() => {
    if (!fetchState.hasError && fetchState.data) {
      navigate("/auth");
    }

    //eslint-disable-next-line
  }, [fetchState]);

  return (
    <div id="navigation-bar">
      <div className="left">
        <button className="nav-btn" onClick={toggleSideMenu}>
          <IconMenu />
        </button>
        <span className="name">Samir System Web</span>
      </div>

      <div className="search-bar">
        <IconSearch />
        <IconCaret />

        <input
          type="text"
          className="search-bar-input"
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e.target.value)}
          onFocus={() => {
            setIsSearchBarResultsOpen(true);
          }}
        />

        {isSearchBarResultsOpen && (
          <div className="results">
            <div className="container" tabIndex={-1}>
              {searchBarFilteredResults.map((result, index) => {
                return result ? (
                  !result.blank ? (
                    <Link
                      to={result.link}
                      key={result.link + " " + index}
                      onBlur={
                        index === searchBarFilteredResults.length - 1
                          ? (e) => {
                              console.log(e.target);
                              setIsSearchBarResultsOpen(false);
                            }
                          : () => {}
                      }
                      onClick={
                        result.link === "/auth"
                          ? (e) => {
                              logout(e);
                            }
                          : ""
                      }
                    >
                      {result.shortcut ? (
                        <span>{result.shortcut.join(" + ")}</span>
                      ) : (
                        <IconLinkOutline />
                      )}
                      <p>{result.text}</p>
                    </Link>
                  ) : (
                    <a
                      href={result.link}
                      target={"_blank"}
                      rel="noopener noreferrer"
                      key={result.link + " " + index}
                      onBlur={
                        index === searchBarFilteredResults.length - 1
                          ? (e) => {
                              console.log(e.target);
                              setIsSearchBarResultsOpen(false);
                            }
                          : () => {}
                      }
                    >
                      {result.shortcut ? (
                        <span>{result.shortcut.join(" + ")}</span>
                      ) : (
                        <IconLinkOutline />
                      )}
                      <p>{result.text}</p>
                    </a>
                  )
                ) : (
                  <div className="empty" key={"empty"}>
                    <p>Sin resultados</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <button
        className="nav-btn ellipsis fm-item"
        data-navbtn={4}
        onClick={toggleRightMenu}
      >
        <IconEllipsisVertical />
      </button>

      <div className={`right ${rightMenuIsOpen ? "open" : ""}`}>
        <HelpButton />
        <button className="nav-btn" data-navbtn={1}>
          <IconDocumentText />
          <p>Facturación</p>
        </button>
        <button className="nav-btn" data-navbtn={2}>
          <IconNotifications />
          <p>Notificaciones</p>
        </button>
        <button className="nav-btn" data-navbtn={3}>
          <div className="avatar">
            <img src={ProfilePicture} alt="avatar" />
          </div>
          <IconPersonOutline className="avatar-svg" />
          <p>Usuario</p>
        </button>
      </div>

      {openMenu === 1 && (
        <div className="floating-menu fm-item">
          <div className="banner fm-item">
            <strong className="fm-item">Facturación</strong>
          </div>

          <Link to={"/dashboard/user/plan"}>
            <IconPrismOutline />
            <div className="text">
              <p>Plan Actual</p>
              <span>Vea o modifique su plan actual</span>
            </div>
          </Link>
          <Link to={"/dashboard/user/bills"}>
            <IconDocumentTextOutline />
            <div className="text">
              <p>Facturas</p>
              <span>Revise sus facturas</span>
            </div>
          </Link>
          <Link to={"/dashboard/user/payments"}>
            <IconCard />
            <div className="text">
              <p>Pagos</p>
              <span>Gestione sus métodos de pago</span>
            </div>
          </Link>
        </div>
      )}
      {openMenu === 2 && (
        <div className="floating-menu fm-item">
          <div className="banner fm-item">
            <strong className="fm-item">Notificaciones</strong>
          </div>

          <Link to="/dashboard/user/notifications">
            <IconAlertOutline />
            <div className="text">
              <p>Alerta</p>
              <span>Descripción</span>
            </div>
          </Link>
          <Link to="/dashboard/user/notifications">
            <IconAlertOutline />
            <div className="text">
              <p>Modificación</p>
              <span>La última modificación del perfil fue el 07/10/22</span>
            </div>
          </Link>
          <Link to="/dashboard/user/notifications">
            <IconAlertOutline />
            <div className="text">
              <p>Opción 3</p>
              <span>Descripción</span>
            </div>
          </Link>
        </div>
      )}
      {openMenu === 3 && (
        <div className="floating-menu fm-item">
          <div className="banner fm-item">
            <div className="left fm-item">
              <img src={ProfilePicture} className="fm-item" alt="" />
            </div>
            <div className="right fm-item">
              <p className="fm-item">PRUEBA DE USUARIO 2</p>
              <span className="fm-item">email@example.com</span>
            </div>
          </div>

          <Link to={"/dashboard/user"}>
            <IconPersonOutline />
            <div className="text">
              <p>Perfil</p>
              <span>Gestione los datos de su perfil</span>
            </div>
          </Link>
          <Link to={"/dashboard/users"}>
            <IconIDCardOutline />
            <div className="text">
              <p>Permisos</p>
              <span>Revise los permisos de su usuario actual</span>
            </div>
          </Link>
          <Link
            to={"/auth"}
            onClick={(e) => {
              logout(e);
            }}
          >
            <IconLogout />
            <div className="text">
              <p>Cerrar Sesión</p>
              <span>Volver al inicio de sesión</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

const steps = [
  {
    title: 'Paso 1',
    heading: <h1>1</h1>,
    content: <div>
      <iframe 
        width="100%" 
        height="400px" 
        src="https://www.youtube.com/embed/2pWXK1eeiVI" 
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen />
    </div>
  },
  {
    title: 'Paso 2',
    heading: <h1>2</h1>,
    content: <div>
      <iframe 
        width="100%" 
        height="400px" 
        src="https://www.youtube.com/embed/gBeYkZiaSB8" 
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen />
    </div>
  },
  {
    title: 'Paso 3',
    heading: <h1>3</h1>,
    content: <div>
      <iframe 
        width="100%" 
        height="400px" 
        src="https://www.youtube.com/embed/Y_Qr50S0-B8" 
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen />
    </div>
  },
  {
    title: 'Paso 4',
    heading: <h1>4</h1>,
    content: <div>
      <iframe 
        width="100%" 
        height="400px" 
        src="https://www.youtube.com/embed/dhsy6epaJGs" 
        title="YouTube video player" 
        frameborder="0" 
        allowfullscreen />
    </div>
  }
]

const HelpButton = () => {
  const [isOpen, setIsOpen] = useState();
  
  return (
    <>
      <button className="nav-btn" data-navbtn={1} onClick={() => setIsOpen(true)}>
        <IconHelpCircle />
        <p>Facturación</p>
      </button>

      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)} mWidth={'800px'}>
        <DialogBody>
          <Steeper steps={steps} />
        </DialogBody>
      </Dialog>
    </>
  )
}

export default NavigationBar;
