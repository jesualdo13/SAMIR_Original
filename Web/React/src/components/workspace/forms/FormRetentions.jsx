import React, { useContext, useRef, useState } from "react";

import useInputVerification from "../../../hooks/useInputVerification";
import { ContextModal } from "../../../contexts/ContextModal";
import Checkbox from "../../reusable/Checkbox";
import Dropdown from "../../reusable/Dropdown";
import ActionButton from "./ActionButton";
import BasicButtons from "./BasicButtons";
import Input from "../../reusable/Input";

import { IconAdd, IconSearch, IconTrashBin } from "../../../base/Icons";

const Row = ({ id, values, deleteRow }) => {
  const [inputs, setInputs] = useState(values);

  const rowData = [
    <Input
      id={"code"}
      placeholder="000"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input
      id={"code_imp"}
      placeholder="000"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input
      id={"detail"}
      placeholder="Detalle"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input
      id={"tax_base"}
      placeholder="0"
      state={{ inputs, setInputs }}
      disabled={true}
    />,
    <Input
      id={"retention_percentage"}
      placeholder="0"
      state={{ inputs, setInputs }}
    />,
    <Input
      id={"retained_value"}
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

const FormRetentions = ({ id }) => {
  // Valores iniciales de los inputs
  const initialValues = {
    datedoc: "",
    number: "",
    period: "",
    document_type: 0,
    sri_auth: "",
    person_id: "",
    person_names: "",
    document_id: "",
    document_ref: "",
    observation: "",
    document_datedoc: "",
    document_sri_auth: "",
    physical: false,
    assumed: false,
    type_of_tax: 0,
    ice: "",
    code_details: "",
    base: "",
    percentage: "",
    retained_value: "",
    document_subtotal: "",
    document_iva: "",
    total_renta: "",
    total_iva: "",
    total: "",
    document_balance: "",
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
          code: "",
          code_imp: "",
          detail: "",
          tax_base: "",
          retention_percentage: "",
          retained_value: "",
        },
      },
    ]);
  };

  return (
    <div className="form form-retentions">
      <h1>Retenciones</h1>

      <div className="main">
        <div className="row">
          <div className="grid five">
            <Input
              id={"datedoc"}
              name={"Fecha de Retención"}
              type="date"
              state={{ inputs, setInputs }}
            />
            <Input
              id={"number"}
              name={"Numero de Retención"}
              placeholder={"001"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"period"}
              name={"Periodo Fiscal"}
              type="month"
              placeholder={"2022-09"}
              state={{ inputs, setInputs }}
            />
            <Dropdown
              id={"document_type"}
              name={"Tipo de Documento"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"sri_auth"}
              name={"Autorización Retención"}
              placeholder={"12345678"}
              state={{ inputs, setInputs }}
            />
          </div>
        </div>
        <div className="row">
          <div className="grid six">
            <Input
              id={"person_id"}
              name={"ID Prov."}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"person_names"}
              name={"Nombres Prov."}
              placeholder={"Nombres"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <ActionButton
              svg={<IconSearch />}
              name={"Buscar Proveedor"}
              onClick={() => {
                openSearchComponent("Proveedor");
              }}
            />
            <Input
              id={"document_id"}
              name={"ID Doc."}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"document_ref"}
              name={"Numero de Factura"}
              placeholder={"1234"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <ActionButton
              svg={<IconSearch />}
              name={"Buscar Documento"}
              onClick={() => {
                openSearchComponent("Documento");
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="grid five">
            <Input
              id={"observation"}
              name={"Observación"}
              placeholder={"Observación"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"document_datedoc"}
              name={"Fecha de emisión"}
              type={"date"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"document_sri_auth"}
              name={"Autorización de Fact."}
              placeholder={"Autorización"}
              state={{ inputs, setInputs }}
            />
            <Checkbox
              forID={"physical"}
              name={"Fisica"}
              state={{ inputs, setInputs }}
            />
            <Checkbox
              forID={"assumed"}
              name={"Asumida"}
              state={{ inputs, setInputs }}
            />
          </div>
        </div>

        <div className="table-container">
          <div className="table c7">
            <div className="cell header">
              <p>Codigo Impuesto</p>
            </div>
            <div className="cell header">
              <p>Codigo Retención</p>
            </div>
            <div className="cell header">
              <p>Detalle Impuesto</p>
            </div>
            <div className="cell header">
              <p>Base Imponible</p>
            </div>
            <div className="cell header">
              <p>% Retención</p>
            </div>
            <div className="cell header">
              <p>Valor Retenido</p>
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
          <div className="grid two f">
            <div className="grid">
              <div className="grid two">
                <Dropdown
                  id={"type_of_tax"}
                  name={"Tipo de Impuesto"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"ice"}
                  name={"Codigo de Retención"}
                  placeholder={"001"}
                  state={{ inputs, setInputs }}
                  disabled={true}
                />
                <Input
                  id={"code_details"}
                  name={"Detalle de Codigo"}
                  placeholder={"Detalles"}
                  state={{ inputs, setInputs }}
                  disabled={true}
                />
                <ActionButton
                  svg={<IconSearch />}
                  name={"Buscar Impuesto"}
                  onClick={() => {
                    openSearchComponent("Impuesto");
                  }}
                />
              </div>

              <div className="grid two">
                <Input
                  id={"base"}
                  name={"Base"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                  disabled={true}
                />
                <Input
                  id={"percentage"}
                  name={"% de Retención"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                  disabled={true}
                />
                <Input
                  id={"retained_value"}
                  name={"Valor retenido"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                  disabled={true}
                />
                <ActionButton
                  svg={<IconAdd />}
                  name={"Agregar Impuesto"}
                  onClick={addRow}
                />
              </div>
            </div>
            <div className="grid">
              <div className="grid three">
                <Input
                  id={"document_subtotal"}
                  name={"Base Imp. Factura $"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"document_iva"}
                  name={"IVA Factura $"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"total_renta"}
                  name={"Total R. Renta $"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
              </div>
              <div className="grid three">
                <Input
                  id={"total_iva"}
                  name={"Total R. IVA"}
                  placeholder={"0"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"total"}
                  name={"Total Retenido"}
                  placeholder={"0.00"}
                  state={{ inputs, setInputs }}
                />
                <Input
                  id={"document_balance"}
                  name={"Total a Pagar"}
                  placeholder={"0.00"}
                  state={{ inputs, setInputs }}
                />
              </div>
            </div>
          </div>
        </div>

        <BasicButtons
          version={5}
          clearInputs={() => {
            setInputs(initialValues);
            setArrayOfRows([]);
          }}
        />
      </div>
    </div>
  );
};

export default FormRetentions;
