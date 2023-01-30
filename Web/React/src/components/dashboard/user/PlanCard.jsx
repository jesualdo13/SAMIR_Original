import React from "react";
import { toast } from "react-toastify";

import { IconCheckmark } from "../../../base/Icons";

const PlanCard = ({
  id,
  names,
  price_month,
  price_annual,
  electronic_documents,
  users,
  business,
  active_plan,
  features,
}) => {
  const doSomething = () => {
    toast.info("Notificación!");
  };

  return (
    <div className={`plan ${active_plan ? "active" : ""}`}>
      <div className="header">
        <div className="top">
          <strong>{names}</strong>
          <span>$ {price_month} al mes</span>
        </div>
        <div className="bottom">
          <p>
            $ {price_annual} al año{" "}
            <span>
              (
              {Math.abs(
                100 - (price_annual / (price_month * 12)) * 100
              ).toFixed(2)}
              % de descuento)
            </span>
          </p>
        </div>
      </div>
      <div className="body">
        <div className="section">
          <div className="limits">
            <div className="item">
              <p>Documentos electrónicos</p>
              <span>{electronic_documents}</span>
            </div>
            <div className="item">
              <p>Usuarios</p>
              <span>{users}</span>
            </div>
            <div className="item">
              <p>Empresas/Sucursales</p>
              <span>{business}</span>
            </div>
          </div>
        </div>

        <div className="section">
          <span>Características:</span>
          <ul>
            {features.map((feature, index) => {
              return (
                <li key={index}>
                  <IconCheckmark />
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="action">
          {active_plan ? (
            <>
              <p>Actualmente este es tu plan activo</p>
              <IconCheckmark />{" "}
            </>
          ) : (
            <button onClick={doSomething}>Activar este plan</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
