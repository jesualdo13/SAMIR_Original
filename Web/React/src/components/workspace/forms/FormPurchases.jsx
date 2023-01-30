import React, { useContext, useRef, useState } from "react";

import useInputVerification from "../../../hooks/useInputVerification";
import { ContextModal } from "../../../contexts/ContextModal";
import { ContextWindow } from "../Window";
import Checkbox from "../../reusable/Checkbox";
import Dropdown from "../../reusable/Dropdown";
import ActionButton from "./ActionButton";
import BasicButtons from "./BasicButtons";
import Input from "../../reusable/Input";

import { IconAdd, IconSearch, IconTrashBin } from "../../../base/Icons";

import { data } from "../navigationBar/data";

const Row = ({ id, values, deleteRow }) => {
  const [inputs, setInputs] = useState(values);

  const rowData = [
    <Input
      id={"id"}
      placeholder="000"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input
      id={"code"}
      placeholder="000"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input
      id={"und"}
      placeholder="UND"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input
      id={"description"}
      placeholder="Descripción"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input id={"unit_price"} placeholder="0" state={{ inputs, setInputs }} />,
    <Input
      id={"factor"}
      placeholder="0"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input id={"amount"} placeholder="0" state={{ inputs, setInputs }} />,
    <Input id={"bonus"} placeholder="0" state={{ inputs, setInputs }} />,
    <Input id={"discount"} placeholder="0" state={{ inputs, setInputs }} />,
    <Input id={"ice"} placeholder="0" state={{ inputs, setInputs }} />,
    <Input
      id={"total"}
      placeholder="0"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <button
      className="delete"
      onClick={() => {
        deleteRow(id);
      }}
    >
      <IconTrashBin />
    </button>,
  ];

  return rowData.map((cell, index) => {
    return (
      <div className="cell" key={cell + index}>
        {cell}
      </div>
    );
  });
};

const FormPurchases = ({ id }) => {
  // Valores iniciales de los inputs
  const initialValues = {
    id: "",
    number: "",
    document_datedoc: "",
    expiration_date: "",
    payment_type_id: 0,
    division: 0,
    person_id: "",
    reason: "",
    bill_number: "",
    sri: "",
    sri_support: 0,
    typepayment: 0,
    copy_invoice: "",
    total_bonuses: "",
    update_prices: "",
    update_batches: "",
    subtotal: "",
    ice: "",
    subtotal_iva: "",
    irbp: "",
    iva_percent: "",
    total_discount: "",
    total: "",
  };

  // Valores de los inputs
  const [inputs, setInputs] = useState(initialValues);

  //eslint-disable-next-line
  const hook = useInputVerification(id, inputs);

  const { openSearchComponent } = useContext(ContextModal);
  const { openNewWindow } = useContext(ContextWindow);

  const [arrayOfRows, setArrayOfRows] = useState([]);
  const stateRef = useRef();
  stateRef.current = arrayOfRows;

  const deleteRow = (id) => {
    const array = stateRef.current.filter((object) => object.id !== id);

    setArrayOfRows(array);
  };

  const addRow = () => {
    let newID = Date.now().toString().slice(8);

    setArrayOfRows([
      ...stateRef.current,
      {
        id: newID,
        values: {
          id: newID,
          code: "",
          und: "",
          description: "",
          unit_price: "",
          factor: "",
          amount: "",
          bonus: "",
          discount: "",
          ice: "",
          total: "",
        },
      },
    ]);
  };

  return (
    <div className="form form-purchases">
      <h1>Compras de Inventario</h1>

      <div className="main">
        <div className="row">
          <div className="grid eight">
            <Input
              id={"id"}
              name={"Codigo"}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"number"}
              name={"RUC / C.I."}
              placeholder={"1234"}
              state={{ inputs, setInputs }}
            />

            <ActionButton
              svg={<IconAdd />}
              onClick={() => {
                openNewWindow(data[1].children[6].children[0]);
              }}
            />
            <ActionButton
              svg={<IconSearch />}
              name={"Proveedor"}
              onClick={() => {
                openSearchComponent("Proveedor", "", () => {});
              }}
            />

            <Input
              id={"document_datedoc"}
              name={"Fecha"}
              type={"date"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"expiration_date"}
              name={"Fecha Vence"}
              type={"date"}
              state={{ inputs, setInputs }}
            />

            <Dropdown
              id={"payment_type_id"}
              name={"Forma Pago"}
              state={{ inputs, setInputs }}
            />
            <Dropdown
              id={"division"}
              name={"División"}
              state={{ inputs, setInputs }}
            />
          </div>
        </div>
        <div className="row">
          <div className="grid four">
            <Input
              id={"person_id"}
              name={"ID Persona"}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"reason"}
              name={"Razón Social"}
              placeholder={"Razón"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"bill_number"}
              name={"Numero Factura"}
              placeholder={"001"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"sri"}
              name={"Autorización SRI"}
              placeholder={"Autorización"}
              state={{ inputs, setInputs }}
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
              name={"Tipo de Comprobante"}
              state={{ inputs, setInputs }}
            />
          </div>
        </div>

        <div className="table-container">
          <div className="table c12">
            <div className="cell header">
              <p>ID</p>
            </div>
            <div className="cell header">
              <p>Codigo</p>
            </div>
            <div className="cell header">
              <p>UND</p>
            </div>
            <div className="cell header">
              <p>Descripción</p>
            </div>
            <div className="cell header">
              <p>P. Unitario</p>
            </div>
            <div className="cell header">
              <p>F</p>
            </div>
            <div className="cell header">
              <p>Cantidad</p>
            </div>
            <div className="cell header">
              <p>Bonif.</p>
            </div>
            <div className="cell header">
              <p>Desc. $</p>
            </div>
            <div className="cell header">
              <p>ICE $</p>
            </div>
            <div className="cell header">
              <p>Total</p>
            </div>
            <div className="cell header">
              <p>Borrar</p>
            </div>

            {arrayOfRows.map((row) => {
              return (
                <Row
                  key={row.id}
                  id={row.id}
                  values={row.values}
                  deleteRow={deleteRow}
                />
              );
            })}
          </div>
        </div>

        <div className="row">
          <div className="grid two">
            <div className="grid">
              <div className="grid three">
                <ActionButton
                  svg={<IconAdd />}
                  name={"Agregar Productos"}
                  onClick={() => {
                    openSearchComponent("Productos", "", addRow);
                  }}
                />
                <ActionButton name={"Auto Homologar"} />

                <Input
                  id={"copy_invoice"}
                  name={"Copia Facturar"}
                  placeholder={"Copia"}
                  state={{ inputs, setInputs }}
                />
              </div>
              <div className="grid two">
                <ActionButton name={"Cargar clave de Acceso"} />
                <ActionButton name={"Auto Retención"} />
              </div>
              <div className="grid three">
                <Input
                  id={"total_bonuses"}
                  name={"Total en Bonificaciones"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
                <Checkbox
                  forID={"update_prices"}
                  state={{ inputs, setInputs }}
                  name={"Actualizar Precios"}
                />
                <Checkbox
                  forID={"update_batches"}
                  state={{ inputs, setInputs }}
                  name={"Actualizar Lotes"}
                />
              </div>
              <BasicButtons
                version={3}
                clearInputs={() => {
                  setInputs(initialValues);
                  setArrayOfRows([]);
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
                  placeholder={"0.00"}
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
                  placeholder={"0.00"}
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

export default FormPurchases;
