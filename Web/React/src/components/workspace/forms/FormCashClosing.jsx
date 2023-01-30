import React, { useState } from "react";

import useInputVerification from "../../../hooks/useInputVerification";
import Dropdown from "../../reusable/Dropdown";
import ActionButton from "./ActionButton";
import BasicButtons from "./BasicButtons";
import Input from "../../reusable/Input";

const cashClosingData = [
  "001",
  "0",
  "2022-11-08",
  "2022-11-08",
  "123",
  "Detalle",
  "Vendedor",
  "0",
  "Estado",
];
const cashInflowsOutflowsData = [
  "001",
  "Caja",
  "Tipo",
  "2022-11-08",
  "2022-11-08",
  "123",
  "Concepto",
  "Usuario",
  "0",
  "Estado",
];

const FormCashClosing = ({ id, type = 0 }) => {
  // Valores de los inputs
  const [inputs, setInputs] = useState({
    start_date: "",
    box: 0,
    filter_employee: 0,
    num_docs: "",
    annual_docs: "",
    cash: "",
    check: "",
    credits: "",
    card: "",
    other: "",
    total: "",
    total_sales: "",
    close: "",
    surplus: "",
    missing: "",
  });

  const hook = useInputVerification(id, inputs);

  const [data, setData] = useState([]);

  const handleClick = () => {
    if (type === 0) {
      setData(cashClosingData);
    } else {
      setData(cashInflowsOutflowsData);
    }
  };

  return (
    <div className="form form-cash-closing">
      <h1>{type === 0 ? "Cierre de Caja" : "Ingresos/Egresos de Caja"}</h1>

      <div className="main">
        <div className="row">
          <div className="grid four">
            <Input
              id={"start_date"}
              name={"Fecha Inicio"}
              type={"date"}
              state={{ inputs, setInputs }}
            />
            <Dropdown id={"box"} name={"Caja"} state={{ inputs, setInputs }} />
            <Dropdown
              id={"filter_employee"}
              name={"Filtra x Empleado"}
              state={{ inputs, setInputs }}
            />
            <ActionButton name={"Listar Documentos"} onClick={handleClick} />
          </div>
        </div>

        <div className="table-container">
          {type === 0 ? (
            <div className="table c9">
              <div className="cell header">
                <p>ID</p>
              </div>
              <div className="cell header">
                <p>T. DOC</p>
              </div>
              <div className="cell header">
                <p>Fecha</p>
              </div>
              <div className="cell header">
                <p>F. Pago</p>
              </div>
              <div className="cell header">
                <p>Numero</p>
              </div>
              <div className="cell header">
                <p>Detalle</p>
              </div>
              <div className="cell header">
                <p>Vendedor</p>
              </div>
              <div className="cell header">
                <p>Total</p>
              </div>
              <div className="cell header">
                <p>Estado</p>
              </div>

              {data.map((cell, index) => {
                return (
                  <div className="cell" key={index}>
                    <p>{cell}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="table c10">
              <div className="cell header">
                <p>ID</p>
              </div>
              <div className="cell header">
                <p>Caja</p>
              </div>
              <div className="cell header">
                <p>Tipo</p>
              </div>
              <div className="cell header">
                <p>Fecha</p>
              </div>
              <div className="cell header">
                <p>F. Pago</p>
              </div>
              <div className="cell header">
                <p>Numero</p>
              </div>
              <div className="cell header">
                <p>Concepto</p>
              </div>
              <div className="cell header">
                <p>Usuario</p>
              </div>
              <div className="cell header">
                <p>Total</p>
              </div>
              <div className="cell header">
                <p>Estado</p>
              </div>

              {data.map((cell, index) => {
                return (
                  <div className="cell" key={index}>
                    <p>{cell}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="row">
          <div className="grid three">
            <div className="grid two">
              <Input
                id={"num_docs"}
                name={"Num Docs"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"annual_docs"}
                name={"Docs Anual"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="grid three">
            <div className="grid two">
              <Input
                id={"cash"}
                name={"Efectivos $"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"check"}
                name={"Cheques $"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="grid two">
              <Input
                id={"credits"}
                name={"Creditos $"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"card"}
                name={"Tarjeta $"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="grid two">
              <Input
                id={"other"}
                name={"Otros $"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"total"}
                name={"Total N.C. $"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="grid three">
            <div className="grid two">
              <Input
                id={"total_sales"}
                name={"Total Ventas $"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"close"}
                name={"Cierre $"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="grid two">
              <Input
                id={"surplus"}
                name={"Sobrante $"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"missing"}
                name={"Faltante $"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
            </div>
          </div>
        </div>

        <BasicButtons version={3} />
      </div>
    </div>
  );
};

export default FormCashClosing;
