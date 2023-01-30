import React, { useContext } from "react";
import { toast } from "react-toastify";

import { ContextModal } from "../../../contexts/ContextModal";

import { IconSearch, IconTrashBin } from "../../../base/Icons";

const BasicButtons = ({
  version = 1,
  options = { title: "", endpoint: "" },
  clearInputs,
}) => {
  const { setModal } = useContext(ContextModal);

  const openSearchComponent = () => {
    setModal({
      isOpen: true,
      screen: "search",
      callback: () => {},
      options: { ...options },
    });
  };

  const doSomething = () => {
    toast.info("Notificación!");
  };
  const deleteSomething = () => {
    toast.error("Notificación!");
  };

  return (
    <>
      {version === 1 ? (
        <div className={`basic-buttons version-${version}`}>
          <button className="search" onClick={openSearchComponent}>
            <IconSearch />
          </button>
          <button className="save" onClick={doSomething}>
            Guardar
          </button>
          <button className="delete" onClick={deleteSomething}>
            <IconTrashBin />
          </button>
        </div>
      ) : version === 2 ? (
        <div className={`basic-buttons version-${version}`}>
          <button className="search" onClick={openSearchComponent}>
            <IconSearch />
          </button>
          <button className="save" onClick={doSomething}>
            Guardar
          </button>
          <button className="delete" onClick={deleteSomething}>
            <IconTrashBin />
          </button>
          <button className="clean" onClick={clearInputs}>
            Limpiar todo
          </button>
        </div>
      ) : version === 3 ? (
        <div className={`basic-buttons version-${version}`}>
          <button className="save" onClick={doSomething}>
            Guardar
          </button>
          <button className="clean" onClick={clearInputs}>
            Cancelar
          </button>
        </div>
      ) : version === 4 ? (
        <div className={`basic-buttons version-${version}`}>
          <button className="save" onClick={doSomething}>
            Guardar
          </button>
        </div>
      ) : (
        <div className={`basic-buttons version-${version}`}>
          <button className="clean">Cargar por Cable de Acceso</button>
          <button className="save" onClick={doSomething}>
            Guardar
          </button>
          <button className="clean" onClick={clearInputs}>
            Limpiar todo
          </button>
        </div>
      )}
    </>
  );
};

export default BasicButtons;
