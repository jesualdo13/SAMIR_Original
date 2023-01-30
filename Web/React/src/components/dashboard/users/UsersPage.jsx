import React, { useContext } from "react";
import { Link, useOutletContext } from "react-router-dom";

import { IconAdd } from "../../../base/Icons";

import UserList from "./UserList";

const endpoint = "https://samirapp.royaltics.com/v1/users";

const UsersPage = () => {
  const sideMenuIsOpen = useOutletContext();


  return (
    <div id="users-page" className={`${sideMenuIsOpen ? "shortened" : ""}`}>
      <div className="options">
        <h1>Usuarios</h1>
        <Link to={"/dashboard/users/create"} className="button-xl">
          Agregar nuevo usuario
          <IconAdd />
        </Link>
      </div>

      <div className="container">
        <UserList />
      </div>
    </div>
  );
};

export default UsersPage;
