import React, { useContext, useRef, useState } from "react";

import useInputVerification from "../../../hooks/useInputVerification";
import { ContextModal } from "../../../contexts/ContextModal";
import ActionButton from "./ActionButton";
import BasicButtons from "./BasicButtons";
import Input from "../../reusable/Input";

import { IconAdd, IconSearch, IconTrashBin } from "../../../base/Icons";

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
    <Input id={"amount"} placeholder="0" state={{ inputs, setInputs }} />,
    <Input
      id={"additional"}
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

const FormReferenceGuides = ({ id }) => {
  // Valores iniciales de los inputs
  const initialValues = {
    id: "",
    number: "",
    datedoc: "",
    date_start: "",
    date_end: "",
    carrier_id: "",
    carrier_names: "",
    address_id: "",
    person_id: "",
    document_id: "",
    document_number: "",
    document_sri_auth: "",
    route: "",
    cod_aduana: "",
    cod_estab: "",
    plate: "",
    destiny: "",
    reason: "",
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
          und: "",
          description: "",
          amount: "",
          additional: "",
        },
      },
    ]);
  };

  return (
    <div className="form form-reference-guides">
      <h1>Guias de Remisión</h1>

      <div className="main">
        <div className="row">
          <div className="grid five">
            <Input
              id={"id"}
              name={"ID"}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"number"}
              name={"Numero Guia"}
              placeholder={"001"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"datedoc"}
              name={"Fecha Emi."}
              type={"date"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"date_start"}
              name={"Fecha Salida"}
              type={"date"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"date_end"}
              name={"Fecha Llegada"}
              type={"date"}
              state={{ inputs, setInputs }}
            />
          </div>
        </div>
        <div className="row">
          <div className="grid six">
            <Input
              id={"carrier_id"}
              name={"ID Trans."}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"carrier_names"}
              name={"Nombre Trasportista"}
              placeholder={"Nombres"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <ActionButton
              svg={<IconSearch />}
              name={"Buscar Trans."}
              onClick={() => {
                openSearchComponent("Transportista");
              }}
            />
            <Input
              id={"address_id"}
              name={"ID Dest."}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"person_id"}
              name={"Nombre Destinatario"}
              placeholder={"Nombres"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <ActionButton
              svg={<IconSearch />}
              name={"Buscar Dest."}
              onClick={() => {
                openSearchComponent("Destinatario");
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="grid four">
            <Input
              id={"document_id"}
              name={"ID Fact."}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"document_number"}
              name={"Numero de Factura"}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"document_sri_auth"}
              name={"Autorización SRI Fact."}
              placeholder={"Autorización"}
              state={{ inputs, setInputs }}
              disabled={true}
            />

            <ActionButton
              svg={<IconSearch />}
              name={"Sel. Factura"}
              onClick={() => {
                openSearchComponent("Factura");
              }}
            />
          </div>
        </div>

        <div className="table-container">
          <div className="table c6">
            <div className="cell header">
              <p>ID</p>
            </div>
            <div className="cell header">
              <p>UND</p>
            </div>
            <div className="cell header">
              <p>Descripción</p>
            </div>
            <div className="cell header">
              <p>Cantidad</p>
            </div>
            <div className="cell header">
              <p>Adicional</p>
            </div>
            <div className="cell header">
              <p>DEL</p>
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
          <div className="grid five">
            <ActionButton
              svg={<IconAdd />}
              name={"Agregar Producto"}
              onClick={() => {
                openSearchComponent("Producto", "", addRow);
              }}
            />

            <Input
              id={"route"}
              name={"Ruta"}
              placeholder={"Ruta"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"cod_aduana"}
              name={"Cod. Aduanero"}
              placeholder={"0"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"cod_estab"}
              name={"Cod. Estab. Dest."}
              placeholder={"0"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"plate"}
              name={"Placa Trans."}
              placeholder={"0"}
              state={{ inputs, setInputs }}
            />
          </div>
        </div>
        <div className="row">
          <Input
            id={"destiny"}
            name={"Dirección de Destino"}
            placeholder={"Dirección"}
            state={{ inputs, setInputs }}
          />
        </div>
        <div className="row">
          <Input
            id={"reason"}
            name={"Motivo de Translado"}
            placeholder={"Motivo"}
            state={{ inputs, setInputs }}
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
    </div>
  );
};

export default FormReferenceGuides;
