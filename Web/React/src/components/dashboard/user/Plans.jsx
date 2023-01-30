import React from "react";
import { useOutletContext } from "react-router-dom";

import useFetch from "../../../hooks/useFetch";
import PlanCard from "./PlanCard";

import { plans } from "../../register/plans";

const endpoint = "https://samirapp.royaltics.com/v1/global/plans";

const Plans = () => {
  const sideMenuIsOpen = useOutletContext();

  const plansFetch = useFetch(endpoint, {
    method: "GET",
  });

  return (
    <div id="plan" className="screen">
      <h1>Plan de Subscripción</h1>

      <div className={`container ${sideMenuIsOpen ? "shortened" : ""}`}>
        <div className="description">
          <p>
            Para poder actualizar su plan{" "}
            <span>NO debe contener deudas pendientes.</span>
          </p>
          <p>
            Después de seleccionar un nuevo Plan de Subscripción en "Samir
            Online",{" "}
            <span>
              recibirá un correo de confirmación con la próxima fecha de cambio.
            </span>
          </p>
        </div>
        <div className="plans">
          <strong>Planes disponibles</strong>

          <div className="inner">
            {plans.map((plan) => {
              return <PlanCard key={plan.id} {...plan} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
