import React, { useEffect, useState } from "react";

import DropdownMenu from "./DropdownMenu";
import SearchBar from "./SearchBar";

import { IconBusiness } from "../../../base/Icons";
import Avatar from "../../../images/profile-picture.jpg";

import { data } from "./data";

const NavigationBar = ({ openNewWindow }) => {
  const [avatarMenuIsOpen, setAvatarMenuIsOpen] = useState(false);
  const [currentOpenMenu, setCurrentOpenMenu] = useState(0);

  const [mobile, setMobile] = useState(false);
  const [signal, setSignal] = useState(0);

  // Detectar cambios de resolución
  useEffect(() => {
    const res = () => {
      if (window.screen.availWidth <= 640) {
        setMobile(true);
      } else {
        setMobile(false);
      }

      // Disparador de actualización
      setSignal(Date.now());
    };

    // Ejecución inicial
    res();

    const listener = window.addEventListener("resize", res);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  return (
    <div id="workspace-navigation-bar">
      <div className="menu-container">
        {data.map((menu, index) => {
          return (
            // Menu recursivo
            <DropdownMenu
              data={menu}
              root={true}
              key={menu.text}
              openNewWindow={openNewWindow}
              index={index}
              current={{ currentOpenMenu, setCurrentOpenMenu }}
              mobile={mobile}
              signal={signal}
            />
          );
        })}
      </div>

      <SearchBar data={data} openNewWindow={openNewWindow} />

      <div className="avatar-menu">
        <button
          className="avatar"
          onClick={() => {
            setAvatarMenuIsOpen(!avatarMenuIsOpen);
          }}
        >
          <img src={Avatar} alt="" />
        </button>

        {avatarMenuIsOpen && (
          <div className="container">
            <div className="portion">
              <p>PRUEBA DE USUARIO 2</p>
              <span>email@example.com</span>
            </div>
            <div className="portion">
              <p>
                <IconBusiness />
                EXCELLENTSOFT
              </p>
            </div>
            <div className="portion">
              <span>
                <span>2022-07-15</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
