import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

import { ContextUser } from "../../../contexts/ContextUser";
import { customFetch } from "../../../helpers/customFetch";
import Dropdown from "../../reusable/Dropdown";

import { IconWarning } from "../../../base/Icons";

const endpoint = "";

const AccountSuspension = () => {
  const { user } = useContext(ContextUser);

  const [inputs, setInputs] = useState({
    reason_id: 0,
  });

  const [fetchState, setFetchState] = useState({
    data: null,
    isLoading: false,
    hasError: false,
    message: null,
  });

  const doSomething = () => {
    toast.info("Notificación!");
  };

  const handleClick = () => {
    const options = {
      method: "GET",
      headers: { private_key: user.private_key },
    };

    customFetch({ fetchState, setFetchState }, endpoint, options);

    doSomething();

    //eslint-disable-next-line
  };

  useEffect(() => {
    if (!fetchState.hasError && fetchState.data) {
      // doSomething();
    }

    //eslint-disable-next-line
  }, [fetchState]);

  return (
    <div id="accountSuspension" className="screen">
      <h1>Suspensión de cuenta</h1>

      <div className="container">
        <p>
          ¿Estas Seguro que deseas dejar de Trabajar en nuestra Plataforma
          'SamirOnline'?
        </p>

        <Dropdown
          id={"reason_id"}
          name={"Cuentenos por que deja nuestra plataforma?"}
          state={{ inputs, setInputs }}
        />

        <p>
          <span>ANTES DE CONTINUAR:</span> Por favor selección su motivo.
        </p>

        <p>
          <span>IMPORTANTE:</span> Recuerde que la "SUSPENCIÓN TEMPORAL",
          también congelará la facturación y/o subscripción automática de su
          plan. Si y Solo si, usted no vuelve a iniciar Sesión. La Cuenta y
          automatización de pagos serán activados automáticamente en su
          "Siguiente Inicio de Sesión"
        </p>

        <button className="button-xl warning" onClick={handleClick}>
          <IconWarning /> Acepto suspender temporalmente mi cuenta
        </button>
      </div>
    </div>
  );
};

export default AccountSuspension;
