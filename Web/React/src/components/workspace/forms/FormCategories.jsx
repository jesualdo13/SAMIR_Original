import React, { useContext, useState } from "react";

import useInputVerification from "../../../hooks/useInputVerification";
import { ContextModal } from "../../../contexts/ContextModal";
import ActionButton from "./ActionButton";
import BasicButtons from "./BasicButtons";
import Input from "../../reusable/Input";

import { IconSearch } from "../../../base/Icons";

const FormCategories = ({ id }) => {
  // Valores de los inputs
  const [inputs, setInputs] = useState({
    id: "",
    names: "",
    description: "",
    parent_id: "",
    parent_names: "",
  });

  //eslint-disable-next-line
  const hook = useInputVerification(id, inputs);

  const { openSearchComponent } = useContext(ContextModal);

  return (
    <div className="form form-categories">
      <h1>Fichero de Categorías/Inventario</h1>

      <div className="main">
        <div className="row">
          <div className="grid two id">
            <Input
              id={"id"}
              name={"ID"}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"names"}
              name="Nombre"
              placeholder="Nombre"
              state={{ inputs, setInputs }}
            />
          </div>
        </div>
        <div className="row">
          <Input
            id={"description"}
            name="Descripción"
            placeholder="Descripción"
            state={{ inputs, setInputs }}
          />
        </div>
        <div className="row">
          <div className="grid three id">
            <Input
              id={"parent_id"}
              name="Pertenece a"
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"parent_names"}
              name="Grupo Principal (opcional)"
              placeholder="Grupo Principal"
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <ActionButton
              name={"Buscar Grupo Principal"}
              svg={<IconSearch />}
              onClick={() => {
                openSearchComponent("Grupo Principal");
              }}
            />
          </div>
        </div>

        <BasicButtons version={1} options={{ title: "Categorías" }} />
      </div>
    </div>
  );
};

export default FormCategories;
