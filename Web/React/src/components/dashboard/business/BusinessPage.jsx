import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { ContextUser } from "../../../contexts/ContextUser";
import { customFetch } from "../../../helpers/customFetch";
import Input from "../../reusable/Input";
import Dropdown from "../../reusable/Dropdown";

import Avatar from "../../../images/company-logo.jpeg";
import { IconFolder, IconTrashBin } from "../../../base/Icons";

const endpoint = "https://samirapp.royaltics.com/v1/enterprises";

const BusinessPage = () => {
  const sideMenuIsOpen = useOutletContext();
  const navigate = useNavigate();

  let { id } = useParams();

  // Valores de los inputs
  const [inputs, setInputs] = useState({
    cardid: "",
    business_names: "",
    short_names: "",
    manager_names: "",
    description: "",
    direction: "",
    email_sales: "",
    email_accounting: "",
    web: "",
    phones: "",
    mobiles: "",
    fax: "",
    authorization_number: "",
    resolution: "",
    cod_estab: "",
    pto_emision: "",
    distributor: false,
    enterprise_type_id: 0,
    location_id: 0,
  });

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

  // Peticiones
  const createNewEnterprise = () => {
    console.log(id);

    const options = {
      method: "POST",
      headers: { private_key: user.private_key },
      body: JSON.stringify(inputs),
    };

    customFetch({ fetchState, setFetchState }, endpoint, options);

    doSomething();
  };

  const updateEnterprise = () => {
    console.log(id);

    const options = {
      method: "PATCH",
      headers: { private_key: user.private_key },
      body: JSON.stringify(inputs),
    };

    customFetch({ fetchState, setFetchState }, endpoint + "/" + id, options);

    doSomething();
  };

  useEffect(() => {
    if (!fetchState.hasError && fetchState.data) {
      navigate("/dashboard");
    }

    //eslint-disable-next-line
  }, [fetchState]);

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  // Crear una vista previa como efecto, siempre que se cambie el archivo seleccionado
  useEffect(() => {
    if (!selectedFile) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // Liberar memoria
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }

    setSelectedFile(e.target.files[0]);
  };

  const deletePreview = () => {
    setSelectedFile(null);

    doSomething();
  };

  return (
    <div id="business-page" className={`${sideMenuIsOpen ? "shortened" : ""}`}>
      <h1>{id === "new" ? "Agregar nueva empresa" : "Edición de empresa"}</h1>

      <div className="container">
        <div className="left">
          <div className="avatar">
            <img src={preview ? preview : Avatar} alt="" />
          </div>
          <div className="buttons">
            <input
              type="file"
              id="business-avatar-file"
              onChange={(e) => {
                onSelectFile(e);
              }}
            />
            <label htmlFor="business-avatar-file" className="button-xl">
              <IconFolder />
              Cambiar avatar
            </label>
            <button className="button-xl red" onClick={deletePreview}>
              <IconTrashBin />
              Eliminar avatar
            </button>
          </div>
        </div>
        <div className="right">
          <div className="section">
            <h2>Datos básicos</h2>

            <div className="shared third">
              <Input
                id={"cardid"}
                name={"R.U.C."}
                placeholder={"R.U.C."}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"business_names"}
                name={"Razón Social"}
                placeholder={"Razón Social"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"short_names"}
                name={"Nombre Corto"}
                placeholder={"EMPRESA"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="shared">
              <Input
                id={"manager_names"}
                name={"Representante Legal"}
                placeholder={"Luis"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"description"}
                name={"Actividad Comercial"}
                placeholder={"Ventas"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="shared">
              <Dropdown
                id={"enterprise_type_id"}
                name={"Tipo de empresa"}
                state={{ inputs, setInputs }}
              />
              <Dropdown
                id={"location_id"}
                name={"Localidad"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="shared third">
              <Input
                id={"direction"}
                name={"Dirección"}
                placeholder={"Machala"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"email_sales"}
                name={"Correo para ventas"}
                type={"email"}
                placeholder={"email@example.com"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"email_accounting"}
                name={"Correo para retenciones"}
                type={"email"}
                placeholder={"email@example.com"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="shared third">
              <Input
                id={"web"}
                name={"Página web"}
                type={"url"}
                placeholder={"https://www.website.com"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"phones"}
                name={"Teléfono Fijo"}
                type={"tel"}
                placeholder={"+12345678"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"mobiles"}
                name={"Celular"}
                type={"tel"}
                placeholder={"+12345678"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="shared third">
              <Input
                id={"fax"}
                name={"Fax"}
                type={"tel"}
                placeholder={"+12345678"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"authorization_number"}
                name={"Autorización SRI"}
                placeholder={"1234"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"resolution"}
                name={"Resolución SRI"}
                placeholder={"Resolución SRI"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="shared third">
              <Input
                id={"cod_estab"}
                name={"Código de Establecimiento"}
                placeholder={"001"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"pto_emision"}
                name={"Punto de Emisión Principal"}
                placeholder={"001"}
                state={{ inputs, setInputs }}
              />
            </div>

            <button
              className="button-xl"
              onClick={id === "new" ? createNewEnterprise : updateEnterprise}
            >
              Guardar datos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPage;
