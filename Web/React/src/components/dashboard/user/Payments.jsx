import React, { useContext, useState } from "react";
import { toast } from "react-toastify";

import { ContextUser } from "../../../contexts/ContextUser";
import useFetch from "../../../hooks/useFetch";
import Checkbox from "../../reusable/Checkbox";
import Dropdown from "../../reusable/Dropdown";

import { IconChevron } from "../../../base/Icons";

const endpoint = "";

const data = [
  [
    "001",
    "Emisión",
    "Form. Pago",
    "Número",
    "Detalle",
    "Total",
    "Estado",
    "ADJ",
  ],
  [
    "001",
    "Emisión",
    "Form. Pago",
    "Número",
    "Detalle",
    "Total",
    "Estado",
    "ADJ",
  ],
  [
    "001",
    "Emisión",
    "Form. Pago",
    "Número",
    "Detalle",
    "Total",
    "Estado",
    "ADJ",
  ],
  [
    "001",
    "Emisión",
    "Form. Pago",
    "Número",
    "Detalle",
    "Total",
    "Estado",
    "ADJ",
  ],
  [
    "001",
    "Emisión",
    "Form. Pago",
    "Número",
    "Detalle",
    "Total",
    "Estado",
    "ADJ",
  ],
];

const Payments = () => {
  const { user } = useContext(ContextUser);

  const [inputs, setInputs] = useState({
    paypal_method_id: 0,
    auto_renew: true,
    deposit_account_id: 0,
    transaction_type_id: 0,
    agency_id: 0,
  });

  const [openMenu, setOpenMenu] = useState(0);

  const toggleMenu = (id) => {
    if (openMenu !== id) {
      setOpenMenu(id);
    } else {
      setOpenMenu(0);
    }
  };

  const history = useFetch(endpoint, {
    method: "GET",
    headers: { private_key: user.private_key },
  });

  const doSomething = () => {
    toast.info("Notificación!");
  };

  return (
    <div id="payments" className="screen">
      <h1>Pagos</h1>

      <div className="container">
        <div className="right">
          <div className="section">
            <div className="dropdown">
              <button
                onClick={() => {
                  toggleMenu(1);
                }}
              >
                Pagar con Paypal (SSL)
              </button>
              {openMenu === 1 && (
                <div className="content">
                  <p>
                    Para este methodo de pago únicamente almacenaremos de forma
                    segura el metodo de pago PAYPAL y/o Tipo de subscrición
                  </p>
                  <Dropdown
                    id={"paypal_method_id"}
                    name={"Metodo de Pago con Paypal"}
                    state={{ inputs, setInputs }}
                  />
                  <Checkbox
                    forID={"auto_renew"}
                    state={{ inputs, setInputs }}
                    name={
                      "Activar la Autorrenovación Automática por Subscripción"
                    }
                  />
                  <p>
                    <span>IMPORTANTE:</span> Por su seguridad para este metodo
                    de pago, NO ALMACENAREMOS NI SOLICITAREMOS los datos de su
                    TARJETA, en ningun medio Electronico u otra sección de
                    nuestra web QUE NO SEA "Pagos" para el proceso de pago
                    mediante PAYPAL en (HTTPS)
                  </p>
                  <button className="button-xl" onClick={doSomething}>
                    Registrar metodo de pago
                  </button>
                  <button className="button-xl delete" onClick={doSomething}>
                    Eliminar metodo de pago
                  </button>
                </div>
              )}
            </div>
            <div className="dropdown">
              <button
                onClick={() => {
                  toggleMenu(2);
                }}
              >
                Pagar con Depósito o Transferencia
              </button>
              {openMenu === 2 && (
                <div className="content">
                  <p>
                    Los datos, detallados a continuación son proporcionados
                    unicamente para la autoseleccion de{" "}
                    <span>CUENTA BANCARIA</span> para el mtodo de pago "Deposito
                    y Transferencias". Usted NO PODRÁ compartir, publicar ni
                    comentar estos datos bajo ninguna circunstancia, en
                    cumplimiento con nuestros Términos y Condiciones leídos y
                    aceptados en su registro.
                  </p>
                  <Dropdown
                    id={"deposit_account_id"}
                    name={"Cuenta para Deposito o Transferencia"}
                    state={{ inputs, setInputs }}
                  />
                  <Dropdown
                    id={"transaction_type_id"}
                    name={"Tipo de Transacción"}
                    state={{ inputs, setInputs }}
                  />
                  <Dropdown
                    id={"agency_id"}
                    name={"De que Agencia Depositará o Trans."}
                    state={{ inputs, setInputs }}
                  />
                  <p>
                    <span>IMPORTANTE:</span> Para este metodo de pago, usted
                    deberá adjuntar una FOTO o PDF del comprobante de pago
                    (Recibo o Vale) correspondiente a la transaccion bancaria
                    realizada en la entidad bancaria de su preferencia.
                  </p>
                  <button className="button-xl" onClick={doSomething}>
                    Enviar para verificación
                  </button>
                  <button className="button-xl delete" onClick={doSomething}>
                    Eliminar metodo de pago
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="section">
            <h2>Historial de Pagos</h2>

            <div className="description">
              <p>
                En la siguiente tabla Visualize todos los recibos de sus pagos
                realizados.
              </p>
              <p>
                Si su comprobante mantiene el estado “Procesando”, recuerde que
                nuestros procesos de validación de pagos pueden tardar hasta 24h
                dependiendo del método de pago (Transferencia, Tarjeta u Otros)
              </p>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Emisión</th>
                    <th>Form. Pago</th>
                    <th>Número</th>
                    <th>Detalle</th>
                    <th>Total</th>
                    <th>Estado</th>
                    <th>ADJ</th>
                  </tr>
                </thead>
                <tbody>
                  {/* history.data.map */}
                  {data.map((el, index) => {
                    return (
                      <tr key={index}>
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
      </div>
    </div>
  );
};

export default Payments;
