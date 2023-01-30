import React, { useContext } from "react";

import { ContextUser } from "../../../contexts/ContextUser";
import useFetch from "../../../hooks/useFetch";

import { IconCheckmarkCircle, IconChevron } from "../../../base/Icons";

const endpoint =
  "https://samirapp.royaltics.com/v1/global/tenantsorders/tenant/aa860831-c39f-422a-8ce2-907e6f8870af";

const data = [
  ["001", "Emisión", "Caduca", "Número", "Detalle", "Total", "Saldo", "Estado"],
  ["002", "Emisión", "Caduca", "Número", "Detalle", "Total", "Saldo", "Estado"],
  ["003", "Emisión", "Caduca", "Número", "Detalle", "Total", "Saldo", "Estado"],
  ["004", "Emisión", "Caduca", "Número", "Detalle", "Total", "Saldo", "Estado"],
  ["005", "Emisión", "Caduca", "Número", "Detalle", "Total", "Saldo", "Estado"],
  ["006", "Emisión", "Caduca", "Número", "Detalle", "Total", "Saldo", "Estado"],
];

// data[pagina].map

const Bills = () => {
  const { user } = useContext(ContextUser);

  const billsFetch = useFetch(endpoint, {
    method: "GET",
    headers: { private_key: user.private_key },
  });

  console.log(billsFetch);

  return (
    <div id="bills" className="screen">
      <h1>Facturas</h1>

      <div className="container">
        <p>
          En la siguiente tabla Visualize todos sus facturas, generadas y
          consulte sus saldos.
        </p>

        <div className="message">
          <IconCheckmarkCircle />
          <p>Actualmente Usted no mantiene deudas</p>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Emisión</th>
                <th>Caduca</th>
                <th>Número</th>
                <th>Detalle</th>
                <th>Total</th>
                <th>Saldo</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
              {/* billsFetch.data.map */}
              {data.map((el, index) => {
                return (
                  <tr key={el + index}>
                    {el.map((cell, index) => {
                      return <td key={index}>{cell}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="navigation">
          <button>
            <IconChevron />
          </button>
          <button>
            <IconChevron />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bills;
