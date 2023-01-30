import React, { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

import { ContextUser } from "../../../contexts/ContextUser";
import useFetch from "../../../hooks/useFetch";
import Dropdown from "../../reusable/Dropdown";
import Input from "../../reusable/Input";

const endpoint = "https://samirapp.royaltics.com/v1/accounts";

const Account = () => {
  const sideMenuIsOpen = useOutletContext();

  const { user } = useContext(ContextUser);

  const [inputs, setInputs] = useState({
    cardid: "1234",
    business_names: "EMPRESA",
    description: "Empresa de bienes de consumo",
    zone_id: 0,
    activity_id: 0,
    mobile: "+12345678",
    phone: "+12345678",
    created_at: "2022-09-20",
    subdomain: "demo",
    email: "djasc.devs@gmail.com",
  });

  const accountFetch = useFetch(endpoint, {
    method: "GET",
    headers: { private_key: user.private_key },
  });

  useEffect(() => {
    if (!accountFetch.hasError && accountFetch.data) {
      setInputs(accountFetch.data);
    }

    //eslint-disable-next-line
  }, [accountFetch]);

  const doSomething = () => {
    toast.info("Notificación!");
  };

  return (
    <div id="account" className="screen">
      <h1>Cuenta principal</h1>

      <div className={`container ${sideMenuIsOpen ? "shortened" : ""}`}>
        {/* <div className="left">
          <div className="avatar">
            <img src={Avatar} alt="" />
          </div>
          <button className="button-xl">Cambiar avatar</button>
          <button className="button-xl red">Eliminar avatar</button>
        </div> */}
        <div className="right">
          <div className="section">
            <h2>Información de la cuenta</h2>

            <div className="shared third">
              <Input
                id={"cardid"}
                name={"R.U.C."}
                placeholder={"12345678"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"business_names"}
                name={"Nombre de empresa"}
                placeholder={"EMPRESA"}
                state={{ inputs, setInputs }}
              />
            </div>
            <Input
              id={"description"}
              name={"Descripción de empresa"}
              placeholder={"Empresa de bienes de consumo"}
              state={{ inputs, setInputs }}
            />
            <div className="shared">
              <Dropdown
                id={"zone_id"}
                name={"Locación"}
                state={{ inputs, setInputs }}
              />
              <Dropdown
                id={"activity_id"}
                name={"Actividad comercial"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="shared">
              <Input
                id={"mobile"}
                name={"Celular"}
                type={"tel"}
                placeholder={"+12345678"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"phone"}
                name={"Teléfono fijo"}
                type={"tel"}
                placeholder={"+12345678"}
                state={{ inputs, setInputs }}
              />
            </div>

            <div className="shared third">
              <Input
                id={"created_at"}
                name={"Fecha de creación de la cuenta"}
                type={"date"}
                state={{ inputs, setInputs }}
                disabled={true}
              />
            </div>
          </div>

          <div className="section">
            <h2>Subdominio</h2>
            <div className="description">
              <p>
                El subdominio es la URL de acceso directo con la que sus
                usuarios podrán iniciar Sesión en Samir Online.
              </p>
              <p>Ejemplo: contibsa.samirapp.com</p>
              <p>
                (El subdominio solo puede contener de entre 5 a 20 caracteres,
                de los cuales solo se permiten minúsculas y números)
              </p>
            </div>

            <div className="shared">
              <Input
                id={"subdomain"}
                name={"Subdominio"}
                placeholder={"demo"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"email"}
                name={"Correo electrónico"}
                type={"email"}
                placeholder={"email@example.com"}
                state={{ inputs, setInputs }}
              />
            </div>
          </div>

          <button className="button-xl" onClick={doSomething}>
            Actualizar datos de cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
