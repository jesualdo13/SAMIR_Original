import React, { useContext, useState } from "react";

import useInputVerification from "../../../hooks/useInputVerification";
import { ContextModal } from "../../../contexts/ContextModal";
import Checkbox from "../../reusable/Checkbox";
import Dropdown from "../../reusable/Dropdown";
import ActionButton from "./ActionButton";
import BasicButtons from "./BasicButtons";
import Input from "../../reusable/Input";

import { IconAdd, IconSearch, IconTrashBin } from "../../../base/Icons";

const FormInventory = ({ id }) => {
  // Valores iniciales de los inputs
  const initialValues = {
    id: "",
    class: 0,
    id_cat: "",
    category: "",
    warehouse_stock: "",
    total_stock: "",
    name: "",
    details: "",
    presentation: 0,
    iva: 0,
    ice: 0,
    exp_date: "",
    perch: 0,
    vendor_id: "",
    vendor_name: "",
    last_purchase: "",
    last_price_si: "",
    latest_discount: "",
    last_bonus: "",
    min_stock: "",
    max_stock: "",
    ask_info: 0,

    // Tab 0
    everyone_access: false,
    code: "",
    pack: 0,
    factor: "",
    price: "",
    priceiva: "",
    util_pvp1: "",
    pvp1: "",
    util_pvp2: "",
    pvp2: "",
    pvp2_range: "",
    pvp3: "",
    pvp3_range: "",
    pvp4: "",
    pvp4_range: "",
    pvp5: "",
    pvp5_range: "",

    // Tab 1
    type: 0,
    from: "",
    packing: 0,
    discount: "",
    start_date: "",
    end_date: "",
    days: 0,

    // Tab 2
    batch_code: "",
    quantity_available: "",
    batch_exp_date: "",

    // Tab 3
    attribute: "",
    value_description: "",
  };

  // Valores de los inputs
  const [inputs, setInputs] = useState(initialValues);

  const options = [
    "Opción 1",
    "Opción 2 - Lorem ipsum dolor sit amet",
    "Opción 3",
    "Opción 4",
    "Opción 5",
    "Opción 6",
  ];

  const [openTab, setOpenTab] = useState(0);

  const initialTables = { scalesBonifDesc: [], batches: [], attributes: [] };

  const [tables, setTables] = useState(initialTables);

  const addDataToTable = (key) => {
    let current = tables[key];

    if (key === "scalesBonifDesc") {
      current.push([
        current.length,
        inputs.type,
        inputs.from,
        inputs.packing,
        inputs.discount,
        inputs.start_date,
        inputs.end_date,
        inputs.days,
      ]);

      setTables({ ...tables, [key]: current });
    } else if (key === "batches") {
      current.push([
        current.length,
        inputs.batch_code,
        inputs.quantity_available,
        inputs.batch_exp_date,
      ]);

      setTables({ ...tables, [key]: current });
    } else if (key === "attributes") {
      current.push([
        current.length,
        inputs.attribute,
        inputs.value_description,
      ]);

      setTables({ ...tables, [key]: current });
    }
  };

  const clearFirstTable = () => {
    setInputs({
      ...inputs,
      everyone_access: false,
      code: "",
      pack: 0,
      factor: "",
      price: "",
      priceiva: "",
      util_pvp1: "",
      pvp1: "",
      util_pvp2: "",
      pvp2: "",
      pvp2_range: "",
      pvp3: "",
      pvp3_range: "",
      pvp4: "",
      pvp4_range: "",
      pvp5: "",
      pvp5_range: "",
    });
  };

  //eslint-disable-next-line
  const hook = useInputVerification(id, inputs);

  const { openSearchComponent } = useContext(ContextModal);

  return (
    <div className="form form-inventory">
      <h1>Fichero de Productos</h1>

      <div className="main">
        <div className="row">
          <div className="grid three">
            <div className="grid three">
              <Input
                id={"id"}
                name={"ID"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
                disabled={true}
              />
              <Dropdown
                id={"class"}
                name={"Clase"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"id_cat"}
                name={"ID Categoria"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
                disabled={true}
              />
            </div>
            <div className="grid two">
              <Input
                id={"category"}
                name={"Categoría"}
                placeholder={"Categoría"}
                state={{ inputs, setInputs }}
                disabled={true}
              />
              <ActionButton
                svg={<IconSearch />}
                onClick={() => {
                  openSearchComponent("Categoría");
                }}
              />
            </div>
            <div className="grid two">
              <Input
                id={"warehouse_stock"}
                name={"Stock/Bodega"}
                placeholder={"Stock/Bodega"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"total_stock"}
                name={"Stock Total"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="grid three">
            <Input
              id={"name"}
              name={"Nombre del Producto o Servicio"}
              placeholder={"Producto 0"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"details"}
              name={"Detalles del Producto o Servicio"}
              placeholder={"Detalles"}
              state={{ inputs, setInputs }}
            />
            <Dropdown
              id={"presentation"}
              name={"Presentación"}
              state={{ inputs, setInputs }}
            />
          </div>
        </div>
        <div className="row">
          <div className="grid three">
            <div className="grid two">
              <Dropdown
                id={"iva"}
                name={"Aplica IVA"}
                state={{ inputs, setInputs }}
              />
              <Dropdown
                id={"ice"}
                name={"Aplica I.C.E."}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="grid three">
              <Input
                id={"exp_date"}
                name={"Fecha de Exp."}
                type={"date"}
                state={{ inputs, setInputs }}
              />
              <Dropdown
                id={"perch"}
                name={"Percha"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"vendor_id"}
                name={"ID Prov."}
                placeholder={"0"}
                state={{ inputs, setInputs }}
                disabled={true}
              />
            </div>
            <div className="grid two">
              <Input
                id={"vendor_name"}
                name={"Proveedor"}
                placeholder={"Proveedor 0"}
                state={{ inputs, setInputs }}
                disabled={true}
              />

              <ActionButton
                svg={<IconSearch />}
                onClick={() => {
                  openSearchComponent("Proveedor");
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="grid seven">
            <Input
              id={"last_purchase"}
              name={"Ultima Compra"}
              type={"date"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"last_price_si"}
              name={"Ultimo Precio S.I"}
              type={"date"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"latest_discount"}
              name={"Ultimo Descuento"}
              type={"date"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"last_bonus"}
              name={"Ultima Bonif."}
              type={"date"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"min_stock"}
              name={"Stock Min/Bodega"}
              placeholder={"0"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"max_stock"}
              name={"Stock Max/Bodega"}
              placeholder={"9999"}
              state={{ inputs, setInputs }}
            />
            <Dropdown
              id={"ask_info"}
              name={"Solicitar Info Adic."}
              state={{ inputs, setInputs }}
            />
          </div>
        </div>

        <div className="tabs-menu">
          <div className="tabs">
            <button
              className={`tab ${openTab === 0 ? "active" : ""}`}
              onClick={() => {
                setOpenTab(0);
              }}
            >
              Presentaciones y Precios
            </button>
            <button
              className={`tab ${openTab === 1 ? "active" : ""}`}
              onClick={() => {
                setOpenTab(1);
              }}
            >
              Escalas y Bonif/Desc
            </button>
            <button
              className={`tab ${openTab === 2 ? "active" : ""}`}
              onClick={() => {
                setOpenTab(2);
              }}
            >
              Lotes
            </button>
            <button
              className={`tab ${openTab === 3 ? "active" : ""}`}
              onClick={() => {
                setOpenTab(3);
              }}
            >
              Atributos
            </button>
          </div>

          <div className="content">
            {openTab === 0 ? (
              <div className="table-container">
                <div className="table c18">
                  <div className="cell header">
                    <p>Todos</p>
                  </div>
                  <div className="cell header">
                    <p>Código</p>
                  </div>
                  <div className="cell header">
                    <p>EMP</p>
                  </div>
                  <div className="cell header">
                    <p>Factor</p>
                  </div>
                  <div className="cell header">
                    <p>P. Costo</p>
                  </div>
                  <div className="cell header">
                    <p>P.C + IVA</p>
                  </div>
                  <div className="cell header">
                    <p>Util %</p>
                  </div>
                  <div className="cell header">
                    <p>PVP 1</p>
                  </div>
                  <div className="cell header">
                    <p>Util %</p>
                  </div>
                  <div className="cell header">
                    <p>PVP 2</p>
                  </div>
                  <div className="cell header">
                    <p>Rango</p>
                  </div>
                  <div className="cell header">
                    <p>PVP 3</p>
                  </div>
                  <div className="cell header">
                    <p>Rango</p>
                  </div>
                  <div className="cell header">
                    <p>PVP 4</p>
                  </div>
                  <div className="cell header">
                    <p>Rango</p>
                  </div>
                  <div className="cell header">
                    <p>PVP 5</p>
                  </div>
                  <div className="cell header">
                    <p>Rango</p>
                  </div>
                  <div className="cell header">
                    <p>Borrar</p>
                  </div>

                  <div className="cell">
                    <Checkbox
                      forID={"everyone_access"}
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"code"}
                      placeholder="1234"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Dropdown id={"pack"} state={{ inputs, setInputs }} />
                  </div>
                  <div className="cell">
                    <Input
                      id={"factor"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"price"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"priceiva"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"util_pvp1"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"pvp1"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"util_pvp2"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"pvp2"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"pvp2_range"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"pvp3"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"pvp3_range"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"pvp4"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"pvp4_range"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"pvp5"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>
                  <div className="cell">
                    <Input
                      id={"pvp5_range"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                  </div>

                  <div className="cell">
                    <button className="delete" onClick={clearFirstTable}>
                      <IconTrashBin />
                    </button>
                  </div>
                </div>
              </div>
            ) : openTab === 1 ? (
              <>
                <div className="container">
                  <div className="aggregator eight">
                    <Dropdown
                      id={"type"}
                      name={"Tipo"}
                      state={{ inputs, setInputs }}
                    />
                    <Input
                      id={"from"}
                      name={"A partir de"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                    <Dropdown
                      id={"packing"}
                      name={"Empaque"}
                      state={{ inputs, setInputs }}
                    />
                    <Input
                      id={"discount"}
                      name={"Descuento o Bonificación"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                    <Input
                      id={"start_date"}
                      name={"Fecha Inicio"}
                      type="date"
                      state={{ inputs, setInputs }}
                    />
                    <Input
                      id={"end_date"}
                      name={"Fecha Fin"}
                      type="date"
                      state={{ inputs, setInputs }}
                    />
                    <Dropdown
                      id={"days"}
                      name={"Los dias"}
                      state={{ inputs, setInputs }}
                    />

                    <button
                      className="add"
                      onClick={() => {
                        addDataToTable("scalesBonifDesc");
                      }}
                      disabled={
                        inputs.from === "" ||
                        inputs.discount === "" ||
                        inputs.start_date === "" ||
                        inputs.end_date === ""
                      }
                    >
                      <IconAdd />
                      Agregar
                    </button>
                  </div>
                </div>
                <div className="table-container">
                  <div className="table c7">
                    <div className="cell header">
                      <p>Tipo</p>
                    </div>
                    <div className="cell header">
                      <p>Unidades</p>
                    </div>
                    <div className="cell header">
                      <p>Empaque</p>
                    </div>
                    <div className="cell header">
                      <p>Descuento o Bonificación</p>
                    </div>
                    <div className="cell header">
                      <p>Desde</p>
                    </div>
                    <div className="cell header">
                      <p>Hasta</p>
                    </div>
                    <div className="cell header">
                      <p>Dias</p>
                    </div>

                    {/* Generar */}
                    {tables.scalesBonifDesc.map((row) => {
                      return row.slice(1).map((cell, index) => {
                        return (
                          <div className="cell" key={index}>
                            <p>
                              {index === 0 || index === 2 || index === 6
                                ? options[cell]
                                : cell}
                            </p>
                          </div>
                        );
                      });
                    })}
                  </div>
                </div>
              </>
            ) : openTab === 2 ? (
              <>
                <div className="container">
                  <div className="aggregator">
                    <Input
                      id={"batch_code"}
                      name={"Codigo de Lote"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                    <Input
                      id={"quantity_available"}
                      name={"Cantidad Disponible"}
                      placeholder="0"
                      state={{ inputs, setInputs }}
                    />
                    <Input
                      id={"batch_exp_date"}
                      name={"Fecha de Vencimiento"}
                      type="date"
                      state={{ inputs, setInputs }}
                    />

                    <button
                      className="add"
                      onClick={() => {
                        addDataToTable("batches");
                      }}
                      disabled={
                        inputs.batch_code === "" ||
                        inputs.quantity_available === "" ||
                        inputs.batch_exp_date === ""
                      }
                    >
                      <IconAdd />
                      Agregar
                    </button>
                  </div>
                </div>

                <div className="table-container">
                  <div className="table c3">
                    <div className="cell header">
                      <p>Codigo de Lote</p>
                    </div>
                    <div className="cell header">
                      <p>Cantidad Disponible</p>
                    </div>
                    <div className="cell header">
                      <p>Fecha de Vencimiento</p>
                    </div>

                    {/* Generar */}
                    {tables.batches.map((row) => {
                      return row.slice(1).map((cell, index) => {
                        return (
                          <div className="cell" key={index}>
                            <p>{cell}</p>
                          </div>
                        );
                      });
                    })}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="container">
                  <div className="aggregator">
                    <Input
                      id={"attribute"}
                      name={"Atributo"}
                      placeholder="Atributo"
                      state={{ inputs, setInputs }}
                    />
                    <Input
                      id={"value_description"}
                      name={"Valor o Descripción"}
                      placeholder="Valor o Descripción"
                      state={{ inputs, setInputs }}
                    />

                    <button
                      className="add"
                      onClick={() => {
                        addDataToTable("attributes");
                      }}
                      disabled={
                        inputs.attribute === "" ||
                        inputs.value_description === ""
                      }
                    >
                      <IconAdd />
                      Agregar
                    </button>
                  </div>
                </div>
                <div className="table-container">
                  <div className="table c2">
                    <div className="cell header">
                      <p>Atributo</p>
                    </div>
                    <div className="cell header">
                      <p>Valor o Descripción</p>
                    </div>

                    {/* Generar */}
                    {tables.attributes.map((row) => {
                      return row.slice(1).map((cell, index) => {
                        return (
                          <div className="cell" key={index}>
                            <p>{cell}</p>
                          </div>
                        );
                      });
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <BasicButtons
          version={2}
          options={{ title: "Productos" }}
          clearInputs={() => {
            setInputs(initialValues);
            setTables(initialTables);
          }}
        />
      </div>
    </div>
  );
};

export default FormInventory;
