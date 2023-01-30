import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { customFetch } from "../../helpers/customFetch";
import { ContextUser } from "../../contexts/ContextUser";
import useFetch from "../../hooks/useFetch";
import UniqueSelection from "../reusable/UniqueSelection";
import Dropdown from "../reusable/Dropdown";
import Checkbox from "../reusable/Checkbox";
import Input from "../reusable/Input";

import {
  IconChevron,
  LogoWindows,
  LogoPaypal,
  IconCard,
  IconSync,
} from "../../base/Icons";

// Local
import { periods } from "./periods";
// import { plans } from "./plans";

const endpoint_plans = "https://samirapp.royaltics.com/v1/global/plans";
const endpoint_register = "https://samirapp.royaltics.com/v1/accounts/register";

const RegisterPage = () => {
  const { user } = useContext(ContextUser);

  // Valores de los inputs
  const [inputs, setInputs] = useState({
    cardid: "",
    business_names: "",
    activity_id: 0,
    zone_id: 0,
    description: "",
    phone: "",
    email: "",
    password: "",
    password_verify: "",
    plan_id: 0,
    period_id: 0,
    payment_method_id: 0,
    auto_renew: true,
  });

  // Traer planes automáticamente
  const plansFetch = useFetch(endpoint_plans, {
    method: "GET",
  });

  //-------------------------------------------------------------

  // Detalles de la petición (registro)
  const [fetchState, setFetchState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    message: null,
  });

  // Ejecutar la petición
  const submitRequest = () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + user.default_token,
      },
      body: JSON.stringify(inputs),
    };

    customFetch({ fetchState, setFetchState }, endpoint_register, options);
  };

  // Navegar entre pantallas
  const [screen, setScreen] = useState(0);

  const nextScreen = () => {
    if (screen === 0) {
      window.scrollTo(0, 0);

      setScreen(screen + 1);
    } else {
      submitRequest();
    }
  };
  const previousScreen = () => {
    window.scrollTo(0, 0);

    if (screen >= 1) {
      setScreen(screen - 1);

      // Borrar mensaje
      setFetchState({ ...fetchState, hasError: false, message: null });
    }
  };

  return (
    <div id="register-page">
      <div className="main">
        <LogoWindows className="picture" />

        <h1>Registrarse</h1>

        {/* Mensajes independientes */}
        {plansFetch.hasError && (
          <div className="notifications error">
            <p>Planes: {plansFetch.message}</p>
          </div>
        )}
        {fetchState.message && (
          <div
            className={`notifications ${fetchState.hasError ? "error" : ""}`}
          >
            <p>Registro: {fetchState.message}</p>
          </div>
        )}

        {screen === 0 ? (
          <>
            <h2>Datos de tu cuenta</h2>

            <div className="section">
              <h3>Datos básicos</h3>

              <div className="row">
                <Input
                  id={"cardid"}
                  name={"R.U.C"}
                  placeholder={"12345678"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"business_names"}
                  name={"Razón Social"}
                  placeholder={"Razón Social"}
                  state={{ inputs, setInputs }}
                />
              </div>
              <div className="row">
                <Dropdown
                  id={"activity_id"}
                  name={"Actividad Comercial"}
                  state={{ inputs, setInputs }}
                />
                <Dropdown
                  id={"zone_id"}
                  name={"Provincia"}
                  state={{ inputs, setInputs }}
                />
              </div>
              <div className="row">
                <Input
                  id={"description"}
                  name={"Dirección"}
                  placeholder={"Dirección"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"phone"}
                  name={"Número de teléfono"}
                  type={"phone"}
                  placeholder={"+12345678"}
                  state={{ inputs, setInputs }}
                />
              </div>
            </div>

            <div className="section">
              <h3>Credenciales</h3>

              <div className="row">
                <Input
                  id={"email"}
                  name={"Correo"}
                  type={"email"}
                  placeholder={"email@example.com"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"password"}
                  name={"Contraseña"}
                  type={"password"}
                  placeholder={"*****"}
                  state={{ inputs, setInputs }}
                />
              </div>
              <div className="row">
                <Input
                  id={"password_verify"}
                  name={"Confirma contraseña"}
                  type={"password"}
                  placeholder={"*****"}
                  state={{ inputs, setInputs }}
                />
              </div>
            </div>

            <button
              className="button-xl"
              onClick={nextScreen}
              disabled={!plansFetch.data}
            >
              Agregar detalles de facturación
              <IconChevron className="rotated-right" />
            </button>
          </>
        ) : (
          <>
            <h2>Detalles de facturación</h2>

            <div className="section">
              <h3>Selecciona un plan</h3>

              <div className="cards">
                {plansFetch.data &&
                  plansFetch.data.map((plan, index) => {
                    return (
                      <UniqueSelection
                        key={index}
                        forID={"plan_id"}
                        state={{ inputs, setInputs }}
                        type={"plan"}
                        data={plan}
                      />
                    );
                  })}
              </div>
            </div>

            <div className="section">
              <h3>Ciclo de facturación</h3>

              {plansFetch.data &&
                periods.map((period, index) => {
                  return (
                    <UniqueSelection
                      key={index}
                      forID={"period_id"}
                      state={{ inputs, setInputs }}
                      type={"period"}
                      data={period}
                      plans={plansFetch.data}
                    />
                  );
                })}
            </div>

            <div className="section">
              <h3>Seleccionar forma de pago</h3>

              <UniqueSelection
                forID={"payment_method_id"}
                state={{ inputs, setInputs }}
                type={"method"}
                data={{ id: 1, names: "PayPal", svg: <LogoPaypal /> }}
              />
              <UniqueSelection
                forID={"payment_method_id"}
                state={{ inputs, setInputs }}
                type={"method"}
                data={{ id: 2, names: "Tarjeta de Crédito", svg: <IconCard /> }}
              />
            </div>

            <div className="section">
              <Checkbox
                forID={"auto_renew"}
                state={{ inputs, setInputs }}
                name={"Autorrenovar Plan"}
              />
            </div>

            <div className="buttons">
              <button className="button-xl white" onClick={previousScreen}>
                <IconChevron className="rotated-left" />
                Volver a editar datos de cuenta
              </button>
              <button
                className="button-xl"
                onClick={nextScreen}
                disabled={!plansFetch.data}
              >
                Registrarse
                {fetchState.isLoading && <IconSync className={"spin"} />}
              </button>
            </div>
          </>
        )}

        <Link to={"/auth"}>¿Ya tienes cuenta? Iniciar Sesión</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
