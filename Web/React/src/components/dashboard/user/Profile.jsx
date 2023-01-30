import React, { useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { toast } from "react-toastify";

import { ContextModal } from "../../../contexts/ContextModal";
import { ContextUser } from "../../../contexts/ContextUser";
import Input from "../../reusable/Input";

import { IconFolder, IconTrashBin } from "../../../base/Icons";
import Avatar from "../../../images/profile-picture.jpg";
import useFetch from "../../../hooks/useFetch";

const endpoint = "";

const Profile = () => {
  const sideMenuIsOpen = useOutletContext();

  const { setModal } = useContext(ContextModal);
  const { user } = useContext(ContextUser);

  const [inputs, setInputs] = useState({
    names: "Luis",
    email: "djasc.devs@gmail.com",
    rol_name: "Admin",
    password: "",
    password_verification: "",
  });

  const profileFetch = useFetch(endpoint, {
    method: "GET",
    headers: { private_key: user.private_key },
  });

  useEffect(() => {
    if (!profileFetch.hasError && profileFetch.data) {
      setInputs(profileFetch.data);
    }

    //eslint-disable-next-line
  }, [profileFetch]);

  const openModal = () => {
    setModal({ isOpen: true, screen: "tfa", callback: () => {} });
  };

  // ------------------------------------------

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

  const doSomething = () => {
    toast.info("Notificación!");
  };

  return (
    <div id="profile" className={`screen`}>
      <h1>Perfil de usuario</h1>

      <div className={`container ${sideMenuIsOpen ? "shortened" : ""}`}>
        <div className="left">
          <div className="avatar">
            <img src={preview ? preview : Avatar} alt="" />
          </div>
          <div className="buttons">
            <input
              type="file"
              id="profile-file"
              onChange={(e) => {
                onSelectFile(e);
              }}
            />
            <label htmlFor="profile-file" className="button-xl">
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

            <Input
              id={"names"}
              name={"Nombres y Apellidos"}
              placeholder={"Luis"}
              state={{ inputs, setInputs }}
            />
            <div className="shared">
              <Input
                id={"email"}
                name={"Correo"}
                type={"email"}
                placeholder={"example@email.com"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"rol_name"}
                name={"Rol Actual"}
                placeholder={"Admin"}
                state={{ inputs, setInputs }}
                disabled={true}
              />
            </div>
          </div>

          <div className="section">
            <h2>2FA</h2>
            <div className="description">
              <p>
                Actualmente, no tienes activada la verificación en dos pasos.
              </p>
            </div>
            <button className="button-xl button-2fa" onClick={openModal}>
              Activar 2FA
            </button>
          </div>

          <div className="section">
            <h2>Contraseña</h2>

            <div className="description">
              <p>
                Si deseas cambiar tu contraseña, ingresa la nueva contraseña a
                continuación y haz clic en actualizar perfil.
              </p>
            </div>

            <div className="shared">
              <Input
                id={"password"}
                name={"Nueva contraseña"}
                type={"password"}
                placeholder={"****"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"password_verification"}
                name={"Confirma la nueva contraseña"}
                type={"password"}
                placeholder={"****"}
                state={{ inputs, setInputs }}
              />
            </div>
          </div>

          <button className="button-xl" onClick={doSomething}>
            Actualizar perfil
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
