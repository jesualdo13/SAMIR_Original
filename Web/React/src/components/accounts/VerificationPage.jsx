import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ContextUser } from "../../contexts/ContextUser";
import useFetch from "../../hooks/useFetch";

const endpoint = "https://samirapp.royaltics.com/v1/accounts/verify/";

const VerificationPage = () => {
  const { user } = useContext(ContextUser);
  const navigate = useNavigate();

  //Obtener token de la url
  let { token_uuid } = useParams();

  console.log(token_uuid);

  // Ejecutar petición automáticamente
  const verification = useFetch(endpoint + token_uuid, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + user.default_token,
    },
  });

  // Redirigir tras respuesta exitosa
  useEffect(() => {
    if (verification.data) {
      setTimeout(() => {
        navigate("/auth");
      }, 3000);
    }

    //eslint-disable-next-line
  }, [verification]);

  return (
    <div id="verification-page">
      <h1>Verificación de cuenta</h1>

      <p>
        {verification.isLoading
          ? "Comprobando..."
          : verification.hasError
          ? `Error: ${verification.message}`
          : ""}
      </p>

      {verification.data && <p>Registro completado!</p>}
    </div>
  );
};

export default VerificationPage;
