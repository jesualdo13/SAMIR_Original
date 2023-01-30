import React, { useEffect, useRef, useState } from "react";

import { IconCaret } from "../../../base/Icons";

const DropdownMenu = ({
  data,
  root,
  openNewWindow,
  index,
  current,
  mobile = false,
  signal = 0,
}) => {
  const { currentOpenMenu, setCurrentOpenMenu } = current;

  const menu = useRef(null);

  const [offset, setOffset] = useState(0);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  // Abrir formulario si el elemento tiene id
  const handleClick = () => {
    if (data.id !== undefined) {
      openNewWindow(data);
    }
  };

  // Actualizar posición del menu automáticamente
  useEffect(() => {
    if (menu.current !== null) {
      setOffset(menu.current.offsetLeft);
    }
  }, [menu, signal]);

  // Abrir menus
  const toggleMenu = () => {
    if (data.children) {
      setMenuIsOpen(!menuIsOpen);

      if (root) {
        setCurrentOpenMenu(index);
      }
    } else {
      setCurrentOpenMenu(0);
    }
  };

  // Cerrar otros menus al activarse el actual
  useEffect(() => {
    if (root) {
      if (index !== currentOpenMenu) {
        setMenuIsOpen(false);
      }
    }

    //eslint-disable-next-line
  }, [currentOpenMenu]);

  return (
    <div
      className={`dropdown-menu ${root ? "root" : "non-root"} ${
        menuIsOpen ? "menu-open" : ""
      }`}
      ref={menu}
    >
      <div
        className={`title ${root ? "root" : "non-root"}`}
        onClick={() => {
          handleClick();
          toggleMenu();
        }}
      >
        {data.icon !== undefined && data.icon}

        <p>{data.text}</p>

        {!root && data.children !== undefined && data.children.length > 0 && (
          <IconCaret className="caret" />
        )}
      </div>

      {data.children !== undefined && data.children.length > 0 && (
        <div
          className={`submenu ${root ? "root" : ""}`}
          style={{ left: mobile ? -offset : 0 }}
        >
          {data.children.map((submenu) => {
            return (
              <DropdownMenu
                data={submenu}
                key={submenu.text}
                openNewWindow={openNewWindow}
                current={current}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
