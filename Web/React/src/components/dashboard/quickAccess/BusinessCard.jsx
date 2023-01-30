import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { ContextUser } from "../../../contexts/ContextUser";
import { customFetch } from "../../../helpers/customFetch";

import {
  IconLocation,
  IconCreateOutline,
  IconLoginOutline,
  IconDuplicateOutline,
} from "../../../base/Icons";

const endpoint = "https://samirapp.royaltics.com/v1/enterprises/clone/";

const BusinessCard = ({
  id,
  short_name,
  image,
  name,
  ruc,
  location,
  establishment,
  accountant,
  cloneModeIsActive,
  setRefresh,
}) => {
  const { user } = useContext(ContextUser);

  const [fetchState, setFetchState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    message: null,
  });

  const doSomething = () => {
    toast.info("Notificación!");
  };

  // Ejecutar la petición de clonación
  const clone = () => {
    console.log(id);

    const options = {
      method: "POST",
      headers: { private_key: user.private_key },
    };

    customFetch({ fetchState, setFetchState }, endpoint + id, options);

    doSomething();
  };

  // Actualizar lista de empresas tras clonar
  useEffect(() => {
    if (!fetchState.hasError && fetchState.data) {
      setRefresh(Date.now());
    }

    //eslint-disable-next-line
  }, [fetchState]);

  return (
    <div className="business-card">
      <div className="short-name">
        <p>{short_name}</p>
      </div>

      <div className="info">
        <div className="avatar">
          <img src={image} alt="" />
        </div>

        <div className="text">
          <strong>{name}</strong>
          <p>RUC: {ruc}</p>
        </div>
      </div>

      <div className="extra">
        <p className="location">
          <IconLocation />
          {location}
        </p>

        <div className="container">
          <p className="data">
            Establecimiento:
            <span>{establishment}</span>
          </p>
          <p className="data">
            Obligado/Contable: <span>{accountant ? "SÍ" : "NO"}</span>
          </p>
        </div>
      </div>

      <div className="actions">
        <div className="grid">
          <Link to={`/dashboard/business/${id}`}>
            Editar
            <IconCreateOutline />
          </Link>

          {!cloneModeIsActive ? (
            <Link to={"/workspace"} className="highlighted">
              Ingresar
              <IconLoginOutline />
            </Link>
          ) : (
            <button
              to={"/workspace"}
              className="highlighted clone"
              onClick={clone}
            >
              Clonar
              <IconDuplicateOutline />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
