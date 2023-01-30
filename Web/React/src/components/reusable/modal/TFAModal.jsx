import React, { useState } from "react";

import ActionButton from "../../workspace/forms/ActionButton";
import Input from "../Input";

import ImageQR from "../../../images/qr.png";

const TFAModal = () => {
  const [inputs, setInputs] = useState({
    token: "asd65fas7dyhjlq",
    verification: "",
  });

  return (
    <div className="tfa">
      <div className="section">
        <Input
          id={"token"}
          name={"Token de Verificación"}
          type="text"
          placeholder="Token"
          state={{ inputs, setInputs }}
          disabled={true}
        />

        <p>
          Copia esta clave o escanea el código por que no volvera a mostrarse
          otra vez
        </p>

        <img src={ImageQR} alt="" />
      </div>

      <div className="section">
        <ActionButton name={"Habilitar 2FA"} special={true} color={"green"} />

        <p>
          Vamos a verificar el funcionamiento de la autentificación en 2
          factores
        </p>

        <Input
          id={"verification"}
          name={"Token Temporal de Aplicación"}
          type="text"
          placeholder="Ingresa el Token"
          state={{ inputs, setInputs }}
        />

        <ActionButton name={"Verificar 2FA"} special={true} />
      </div>
    </div>
  );
};

export default TFAModal;
