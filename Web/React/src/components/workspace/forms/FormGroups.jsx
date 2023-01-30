import React, { useContext, useState } from "react";

import useInputVerification from "../../../hooks/useInputVerification";
import { ContextModal } from "../../../contexts/ContextModal";
import Checkbox from "../../reusable/Checkbox";
import ActionButton from "./ActionButton";
import BasicButtons from "./BasicButtons";
import Input from "../../reusable/Input";

import { IconSync } from "../../../base/Icons";

const FormGroups = ({ id }) => {
  // Valores de los inputs
  const [inputs, setInputs] = useState({
    id: "",
    names: "",
    search_canceled: false,
    parent_id: "",
    parent_names: "",
  });

  //eslint-disable-next-line
  const hook = useInputVerification(id, inputs);

  const { openSearchComponent } = useContext(ContextModal);

  return (
    <div className="form form-groups">
      <h1>Registro de Grupos</h1>

      <div className="main">
        <div className="row">
          <div className="grid three id">
            <Input
              id={"id"}
              name="ID"
              state={{ inputs, setInputs }}
              placeholder={"0"}
              disabled={true}
            />
            <Input
              id={"names"}
              name="Nombre"
              state={{ inputs, setInputs }}
              placeholder={"Nombre"}
            />
            <Checkbox
              forID={"search_canceled"}
              state={{ inputs, setInputs }}
              name={"Buscar Anulados"}
            />
          </div>
        </div>

        <div className="row">
          <div className="grid three id">
            <Input
              id={"parent_id"}
              name="Pertenece a"
              state={{ inputs, setInputs }}
              placeholder={"0"}
              disabled={true}
            />
            <Input
              id={"parent_names"}
              name="Grupo Principal (opcional)"
              state={{ inputs, setInputs }}
              placeholder={"Grupo Principal"}
              disabled={true}
            />
            <div className="grid two id icon">
              <ActionButton svg={<IconSync />} />
              <ActionButton
                name={"Seleccionar"}
                onClick={() => {
                  openSearchComponent("Grupo Principal");
                }}
              />
            </div>
          </div>
        </div>

        <BasicButtons version={1} options={{ title: "Grupos" }} />
      </div>
    </div>
  );
};

export default FormGroups;
