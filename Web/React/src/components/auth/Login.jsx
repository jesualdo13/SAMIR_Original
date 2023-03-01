import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

import { customFetch } from "../../helpers/customFetch";
import { ContextUser } from "../../contexts/ContextUser";

import Input from "../reusable/Input";

import {
  IconKey,
  IconLayer,
  IconMailOutline,
  IconCheckmark,
  IconSync,
} from "../../base/Icons";

const endpoint = "https://samirapp.royaltics.com/v1/auth/login";

const Login = () => {
  const currentSubdomain = useOutletContext();
  const navigate = useNavigate();

  const { user, setUser } = useContext(ContextUser);

  // Valores de los inputs
  const [inputs, setInputs] = useState({
    // subdomain: currentSubdomain ? currentSubdomain : "mqgvv219yadtu5pgwwi",
    subdomain: "mqgvv219yadtu5pgwwi",
    email: "xasa@gamil.com",
    password: "123",
    token_2fa: "",
  });

  const [required2FA, setRequired2FA] = useState(false);

  //-------------------------------------------------------------

  // Detalles de la petición
  const [fetchState, setFetchState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    message: null,
  });

  // Ejecutar la petición
  const submitRequest = (e) => {
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

  // Comprobar los datos devueltos
  useEffect(() => {
    if (!fetchState.hasError && fetchState.data) {
      // Activate the 2FA step
      if (fetchState.data.require_2fa) {
        setRequired2FA(true);
      } else {
        setUser({
          ...user,
          isLogged: true,
          private_key: fetchState.data.token,
        });

        console.log("Successful login");

        // Ir al dashboard tras logearse
        setTimeout(() => {
          navigate("/dashboard");
        }, 100);
      }
    }

    //eslint-disable-next-line
  }, [fetchState]);

  return (
    <div id="login">
      <h1>Iniciar Sesión</h1>
      <p className="main-description">
        {!required2FA
          ? "¡Bienvenido de Nuevo!"
          : "Ingresa tu token de verificación"}
      </p>

      {fetchState.hasError && (
        <div className="notifications error">
          <p>{fetchState.message}</p>
        </div>
      )}

      <form>
        {!required2FA ? (
          <>
            <Input
              id={"subdomain"}
              name={"Subdominio"}
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
            <Input
              id={"password"}
              name={"Contraseña"}
              type={"password"}
              placeholder={"********"}
              icon={<IconKey />}
              state={{ inputs, setInputs }}
            />
          </>
        ) : (
          <Input
            id={"token_2fa"}
            name={"2FA Token"}
            placeholder={"********"}
            icon={<IconKey />}
            state={{ inputs, setInputs }}
          />
        )}

        {!required2FA && (
          <div className="utilities">
            <div className="remember">
              <input type="checkbox" name="" id="remember" />
              <div className="custom-checkbox">
                <IconCheckmark />
              </div>
              <label htmlFor="remember">Recordar Sesión</label>
            </div>
            <Link to={"recovery"} className="recovery">
              Olvide mi contraseña
            </Link>
          </div>
        )}

        <button className="button-xl" onClick={submitRequest}>
          {!required2FA ? "Iniciar sesión" : "Iniciar sesión con 2FA"}
          {fetchState.isLoading && <IconSync />}
        </button>
      </form>
    </div>
  );
};

export default Login;
