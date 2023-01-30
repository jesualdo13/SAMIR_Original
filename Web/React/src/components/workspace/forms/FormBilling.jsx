import React, { useContext, useRef, useState } from "react";

import useInputVerification from "../../../hooks/useInputVerification";
import { ContextModal } from "../../../contexts/ContextModal";
import Checkbox from "../../reusable/Checkbox";
import Dropdown from "../../reusable/Dropdown";
import ActionButton from "./ActionButton";
import BasicButtons from "./BasicButtons";
import Input from "../../reusable/Input";

import { IconSearch, IconTrashBin } from "../../../base/Icons";

const Row = ({ id, values, deleteRow }) => {
  const [inputs, setInputs] = useState(values);

  const rowData = [
    <Checkbox id={"dispatched"} state={{ inputs, setInputs }} />,
    <Input
      id={"code"}
      placeholder="000"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input
      id={"pack"}
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
    <Input
      id={"credit"}
      placeholder="0"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input
      id={"iva"}
      placeholder="0"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Dropdown id={"pvp"} state={{ inputs, setInputs }} />,
    <Input
      id={"vault_id"}
      placeholder="0"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input id={"quantity"} placeholder="0" state={{ inputs, setInputs }} />,
    <Input
      id={"factor"}
      placeholder="0"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input id={"bonus"} placeholder="0" state={{ inputs, setInputs }} />,
    <Input id={"discount"} placeholder="0" state={{ inputs, setInputs }} />,
    <Input
      id={"total"}
      placeholder="0"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input
      id={"aditional_info"}
      placeholder="Adicional"
      state={{ inputs, setInputs }}
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

const FormBilling = ({ id }) => {
  // Valores iniciales de los inputs
  const initialValues = {
    id: "",
    ruc: "",
    names: "",
    direction: "",
    guarantor: "",
    quota: "",
    to_pay: "",
    document_number: "",
    document_date: "",
    cash_register: 0,
    pay_method: 0,
    doc_type: 0,
    vendor: "",
    cellar: 0,
    cost_center: 0,
    observation: "",
    copy: "",
    subtotal: "",
    subtotal_iva: "",
    ice: "",
    iva_percent: "",
    irbp: "",
    total_discount: "",
    total: "",
  };

  // Valores de los inputs
  const [inputs, setInputs] = useState(initialValues);

  //eslint-disable-next-line
  const hook = useInputVerification(id, inputs);

  const { openSearchComponent } = useContext(ContextModal);

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
          dispatched: false,
          code: "",
          pack: "",
          description: "",
          credit: "",
          iva: "",
          pvp: 0,
          vault_id: "",
          quantity: "",
          factor: "",
          bonus: "",
          discount: "",
          total: "",
          aditional_info: "",
        },
      },
    ]);
  };

  return (
    <div className="form form-billing">
      <h1>Facturación</h1>

      <div className="main">
        <div className="row">
          <div className="grid two">
            <div className="grid">
              <div className="grid three">
                <Input
                  id={"id"}
                  name={"ID"}
                  placeholder="0"
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"ruc"}
                  name={"C.I. o R.U.C."}
                  placeholder="1234"
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"names"}
                  name={"Nombre"}
                  placeholder="Nombre"
                  state={{ inputs, setInputs }}
                />
              </div>

              <Input
                id={"direction"}
                name={"Dirección"}
                placeholder="Dirección"
                state={{ inputs, setInputs }}
              />

              <div className="grid three">
                <Input
                  id={"guarantor"}
                  name={"Garante"}
                  placeholder="Garante"
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"quota"}
                  name={"Cupo Disponible"}
                  placeholder="Cupo"
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"to_pay"}
                  name={"Saldo a pagar"}
                  placeholder="0"
                  state={{ inputs, setInputs }}
                />
              </div>
            </div>
            <div className="grid">
              <div className="grid three">
                <Input
                  id={"document_number"}
                  name={"Numero de Factura"}
                  placeholder="001"
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"document_date"}
                  name={"Fecha"}
                  type={"date"}
                  state={{ inputs, setInputs }}
                />
                <Dropdown
                  id={"cash_register"}
                  name={"Caja"}
                  state={{ inputs, setInputs }}
                />
              </div>

              <div className="grid four">
                <Dropdown
                  id={"pay_method"}
                  name={"Forma de Pago"}
                  state={{ inputs, setInputs }}
                />
                <Dropdown
                  id={"doc_type"}
                  name={"Tipo de Doc"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"vendor"}
                  name={"Vendedor"}
                  placeholder="Vendedor"
                  state={{ inputs, setInputs }}
                />
                <ActionButton
                  svg={<IconSearch />}
                  onClick={() => {
                    openSearchComponent("Vendedor");
                  }}
                />
              </div>

              <div className="grid three">
                <Dropdown
                  id={"cellar"}
                  name={"Bodega"}
                  state={{ inputs, setInputs }}
                />
                <Dropdown
                  id={"cost_center"}
                  name={"Centro de Costo"}
                  state={{ inputs, setInputs }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="table-container">
          <div className="table c15">
            <div className="cell header">
              <p>DESP</p>
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
              <p>%Cred</p>
            </div>
            <div className="cell header">
              <p>IVA</p>
            </div>
            <div className="cell header">
              <p>P. Unitario</p>
            </div>
            <div className="cell header">
              <p>Bodega</p>
            </div>
            <div className="cell header">
              <p>Cantidad</p>
            </div>
            <div className="cell header">
              <p>Factor</p>
            </div>
            <div className="cell header">
              <p>Bono</p>
            </div>
            <div className="cell header">
              <p>Desc%</p>
            </div>
            <div className="cell header">
              <p>Total + IVA</p>
            </div>
            <div className="cell header">
              <p>Adicional</p>
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
          <div className="grid two f21">
            <div className="grid">
              <div className="grid four">
                <ActionButton
                  svg={<IconSearch />}
                  name={"Agregar Productos"}
                  onClick={() => {
                    openSearchComponent("Productos", "", addRow);
                  }}
                />
                <ActionButton name={"Abrir Cajón"} />
                <ActionButton name={"Recuperar Documento"} />
                <ActionButton svg={<IconTrashBin />} deleteBtn={true} />
              </div>
              <div className="grid two">
                <Input
                  id={"observation"}
                  name={"Observación"}
                  placeholder="Observación"
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"copy"}
                  name={"Copiar Desde"}
                  placeholder="0"
                  state={{ inputs, setInputs }}
                />
              </div>
              <BasicButtons version={4} />
            </div>
            <div className="grid">
              <div className="grid three">
                <Input
                  id={"subtotal"}
                  name={"Subtotal 0%"}
                  placeholder="0"
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"subtotal_iva"}
                  name={"Subtotal 12%"}
                  placeholder="0"
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"ice"}
                  name={"ICE"}
                  placeholder="0"
                  state={{ inputs, setInputs }}
                />
              </div>
              <div className="grid three">
                <Input
                  id={"iva_percent"}
                  name={"IVA 12%"}
                  placeholder="0"
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"irbp"}
                  name={"IRBP"}
                  placeholder="0"
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"total_discount"}
                  name={"Descuento"}
                  placeholder="0"
                  state={{ inputs, setInputs }}
                />
              </div>
              <Input
                id={"total"}
                name={"Total a Pagar"}
                placeholder="0"
                state={{ inputs, setInputs }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormBilling;
