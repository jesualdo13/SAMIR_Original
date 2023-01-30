import React, { useState } from "react";

import { customFetch } from "../../helpers/customFetch";

import Input from "../reusable/Input";

import { IconLayer, IconMailOutline, IconSync } from "../../base/Icons";
import { useOutletContext } from "react-router-dom";

const endpoint = "https://samirapp.royaltics.com/v1/auth/recovery";

const Recovery = () => {
  const currentSubdomain = useOutletContext();

  // Valores de los inputs
  const [inputs, setInputs] = useState({
    // subdomain: currentSubdomain ? currentSubdomain : "mqgvv219yadtu5pgwwi",
    subdomain: "mqgvv219yadtu5pgwwi",
    email: "xasa@gamil.com",
  });

  //-------------------------------------------------------------

  // Detalles de la petición
  const [fetchState, setFetchState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    message: null,
  });

  // Ejecutar la petición
  const submitRequest = async (e) => {
    e.preventDefault();

    // Petición real
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };

    customFetch({ fetchState, setFetchState }, endpoint, options);
  };

  return (
    <div id="recovery">
      <h1>Recuperar contraseña</h1>
      <p className="main-description">
        Ingrese su correo de registro y le será enviado un email de recuperación
      </p>

      {(fetchState.data || fetchState.hasError) && (
        <div className={`notifications ${fetchState.hasError ? "error" : ""}`}>
          <p>
            {fetchState.data ? fetchState.data.message : fetchState.message}
          </p>
        </div>
      )}

      <form>
        <Input
          id={"subdomain"}
          name={"Subdominio"}
          type={"text"}
          placeholder={"demo"}
          icon={<IconLayer />}
          state={{ inputs, setInputs }}
        />
        <Input
          id={"email"}
          name={"Correo"}
          type={"email"}
          placeholder={"email@example.com"}
          icon={<IconMailOutline />}
          state={{ inputs, setInputs }}
        />

        <button className="button-xl" onClick={submitRequest}>
          Recuperar contraseña
          {fetchState.isLoading && <IconSync />}
        </button>
      </form>
    </div>
  );
};

export default Recovery;
