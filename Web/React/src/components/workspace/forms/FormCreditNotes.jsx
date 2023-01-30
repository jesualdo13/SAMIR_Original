import React, { useContext, useState } from "react";

import useInputVerification from "../../../hooks/useInputVerification";
import { ContextModal } from "../../../contexts/ContextModal";
import Dropdown from "../../reusable/Dropdown";
import ActionButton from "./ActionButton";
import BasicButtons from "./BasicButtons";
import Input from "../../reusable/Input";

import { IconSearch } from "../../../base/Icons";

const FormCreditNotes = ({ id }) => {
  // Valores iniciales de los inputs
  const initialValues = {
    id: "",
    number: "",
    datedoc: "",
    document_id: "",
    document_number: "",
    document_datedoc: "",
    sri: "",
    document_bussines_names: "",
    sri_support: 0,
    typepayment: 0,
    total_invoice: "",
    balance: "",
    reason: "",
    subtotal: "",
    ice: "",
    subtotal_iva: "",
    irbp: "",
    iva_percent: "",
    total_discount: "",
    total: "",

    // Table
    bill_id: "",
    code: "",
    emp: "",
    product: "",
    iva: "",
    factor: "",
    quantity: "",
    return: "",
    unit_price: "",
    cellar: "",
    bond: "",
    discount: "",
    bill_total: "",
  };

  // Valores de los inputs
  const [inputs, setInputs] = useState(initialValues);

  //eslint-disable-next-line
  const hook = useInputVerification(id, inputs);

  const { openSearchComponent } = useContext(ContextModal);

  const [invoiceIsSelected, setInvoiceIsSelected] = useState(false);

  return (
    <div className="form form-credit-notes">
      <h1>Nota de Crédito Ventas</h1>

      <div className="main">
        <div className="row">
          <div className="grid six">
            <Input
              id={"id"}
              name={"Codigo"}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"number"}
              name={"Numero N.C."}
              placeholder={"0"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"datedoc"}
              name={"Fecha"}
              type={"date"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"document_id"}
              name={"ID Fact"}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"document_number"}
              name={"Numero Fact."}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"document_datedoc"}
              name={"Fecha Fact"}
              type={"date"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
          </div>
        </div>
        <div className="row">
          <div className="grid three">
            <Input
              id={"sri"}
              name={"Autorización SRI N.C."}
              placeholder={"0"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"document_bussines_names"}
              name={"Razón Social"}
              placeholder={"Razón"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <ActionButton
              name={"Sel. Factura"}
              svg={<IconSearch />}
              onClick={() => {
                openSearchComponent("Factura", "", () => {
                  setInvoiceIsSelected(true);
                });
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="grid two">
            <Dropdown
              id={"sri_support"}
              name={"Sustento Tributario"}
              state={{ inputs, setInputs }}
            />
            <Dropdown
              id={"typepayment"}
              name={"Formas de Pago"}
              state={{ inputs, setInputs }}
            />
          </div>
        </div>

        <div className="table-container">
          <div className="table c13">
            <div className="cell header">
              <p>ID</p>
            </div>
            <div className="cell header">
              <p>Codigo</p>
            </div>
            <div className="cell header">
              <p>EMP</p>
            </div>
            <div className="cell header">
              <p>Producto</p>
            </div>
            <div className="cell header">
              <p>IVA</p>
            </div>
            <div className="cell header">
              <p>Factor</p>
            </div>
            <div className="cell header">
              <p>Cantidad</p>
            </div>
            <div className="cell header">
              <p>Devolución</p>
            </div>
            <div className="cell header">
              <p>P. Unitario</p>
            </div>
            <div className="cell header">
              <p>Bodega</p>
            </div>
            <div className="cell header">
              <p>Bono</p>
            </div>
            <div className="cell header">
              <p>Desc. %</p>
            </div>
            <div className="cell header">
              <p>Total + IVA</p>
            </div>

            {invoiceIsSelected && (
              <>
                <div className="cell">
                  <Input
                    id={"bill_id"}
                    placeholder="0"
                    state={{ inputs, setInputs }}
                    disabled={true}
                  />
                </div>
                <div className="cell">
                  <Input
                    id={"code"}
                    placeholder="0"
                    state={{ inputs, setInputs }}
                    disabled={true}
                  />
                </div>
                <div className="cell">
                  <Input
                    id={"emp"}
                    placeholder="EMP"
                    state={{ inputs, setInputs }}
                    disabled={true}
                  />
                </div>
                <div className="cell">
                  <Input
                    id={"product"}
                    placeholder="Descripción"
                    state={{ inputs, setInputs }}
                    disabled={true}
                  />
                </div>
                <div className="cell">
                  <Input
                    id={"iva"}
                    placeholder="0"
                    state={{ inputs, setInputs }}
                    disabled={true}
                  />
                </div>
                <div className="cell">
                  <Input
                    id={"factor"}
                    placeholder="0"
                    state={{ inputs, setInputs }}
                    disabled={true}
                  />
                </div>
                <div className="cell">
                  <Input
                    id={"quantity"}
                    placeholder="0"
                    state={{ inputs, setInputs }}
                    disabled={true}
                  />
                </div>
                <div className="cell">
                  <Input
                    id={"return"}
                    placeholder="0"
                    state={{ inputs, setInputs }}
                  />
                </div>
                <div className="cell">
                  <Input
                    id={"unit_price"}
                    placeholder="0"
                    state={{ inputs, setInputs }}
                    disabled={true}
                  />
                </div>
                <div className="cell">
                  <Input
                    id={"cellar"}
                    placeholder="Bodega"
                    state={{ inputs, setInputs }}
                    disabled={true}
                  />
                </div>
                <div className="cell">
                  <Input
                    id={"bond"}
                    placeholder="0"
                    state={{ inputs, setInputs }}
                    disabled={true}
                  />
                </div>
                <div className="cell">
                  <Input
                    id={"discount"}
                    placeholder="0"
                    state={{ inputs, setInputs }}
                  />
                </div>
                <div className="cell">
                  <Input
                    id={"bill_total"}
                    placeholder="0"
                    state={{ inputs, setInputs }}
                    disabled={true}
                  />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="row">
          <div className="grid two">
            <div className="grid">
              <div className="grid three">
                <ActionButton name={"Devolución Total"} />

                <Input
                  id={"total_invoice"}
                  name={"Total Factura"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"balance"}
                  name={"Diferencia"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
              </div>
              <Input
                id={"reason"}
                name={"Motivo"}
                placeholder={"Motivo"}
                state={{ inputs, setInputs }}
              />
              <BasicButtons
                version={3}
                clearInputs={() => {
                  setInputs(initialValues);
                }}
              />
            </div>

            <div className="grid">
              <div className="grid two">
                <Input
                  id={"subtotal"}
                  name={"Subtotal 0%"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"ice"}
                  name={"I.C.E.S"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"subtotal_iva"}
                  name={"Subtotal 12%"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"irbp"}
                  name={"I.R.B.P.S"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"iva_percent"}
                  name={"IVA 12% $"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"total_discount"}
                  name={"Descuento $"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"total"}
                  name={"Total $"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCreditNotes;
