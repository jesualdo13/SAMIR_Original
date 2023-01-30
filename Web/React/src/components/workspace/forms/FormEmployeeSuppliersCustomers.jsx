import React, { useContext, useState } from "react";

import useInputVerification from "../../../hooks/useInputVerification";
import { ContextModal } from "../../../contexts/ContextModal";
import Checkbox from "../../reusable/Checkbox";
import Dropdown from "../../reusable/Dropdown";
import ActionButton from "./ActionButton";
import BasicButtons from "./BasicButtons";
import Input from "../../reusable/Input";

import { IconSearch } from "../../../base/Icons";

const FormEmployeeSuppliersCustomers = ({ id, type = 0 }) => {
  let formName = "";

  if (type === 0) {
    formName = "Empleados";
  } else if (type === 1) {
    formName = "Provedores";
  } else {
    formName = "Clientes";
  }

  // Valores de los inputs
  const [inputs, setInputs] = useState({
    id: "",
    document: 0,
    ruc: "",
    reason: "",
    related_party: 0,
    names: "",
    direction: "",
    location: "",
    zone: "",
    group_id: "",
    group_names: "",
    phone: "",
    cellular: "",
    email: "",
    register_type: 0,
    subject_class: 0,
    credit_limit: "",
    apply_retention: false,
    code_ret_source: "",
    code_ret_iva: "",
    position: "",
    salary: "",
    hd: "",
    family_charge: "",
    entry_date: "",
    departure_date: "",
    observations: "",
    company_id: "",
    provision: false,
    reserve_fund: false,
    insured: false,
    commissions: false,
    latitude: "",
    longitude: "",
    reset_access_cfdi: false,
  });

  //eslint-disable-next-line
  const hook = useInputVerification(id, inputs);

  const { openSearchComponent } = useContext(ContextModal);

  const [openTab, setOpenTab] = useState(0);

  return (
    <div className="form form-employee-suppliers-customers">
      <h1>Registro de {formName}</h1>

      <div className="main">
        <div className="row">
          <div className="grid two">
            <div className="grid three">
              <Input
                id={"id"}
                name={"ID"}
                placeholder={"0"}
                state={{ inputs, setInputs }}
              />
              <Dropdown
                id={"document"}
                name={"Documento"}
                state={{ inputs, setInputs }}
              />
              <Input
                id={"ruc"}
                name={"R.U.C."}
                placeholder={"1234"}
                state={{ inputs, setInputs }}
              />
            </div>
            <div className="grid two">
              <Input
                id={"reason"}
                name={"Razón Social"}
                placeholder={"Razón"}
                state={{ inputs, setInputs }}
              />
              <Dropdown
                id={"related_party"}
                name={"Parte Relacionada"}
                state={{ inputs, setInputs }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="grid two">
            <Input
              id={"names"}
              name={"Nombre Comercial o Representante Legal"}
              placeholder={"Nombres"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"direction"}
              name={"Dirección"}
              placeholder={"Dirección"}
              state={{ inputs, setInputs }}
            />
          </div>
        </div>
        <div className="row">
          <div className="grid six">
            <Input
              id={"location"}
              name={"Locación"}
              placeholder={"Locación"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"zone"}
              name={"Zona"}
              placeholder={"Zona"}
              state={{ inputs, setInputs }}
            />

            <ActionButton
              name={"Buscar zona"}
              svg={<IconSearch />}
              onClick={() => {
                openSearchComponent("Zona");
              }}
            />

            <Input
              id={"group_id"}
              name={"ID Grupo"}
              placeholder={"0"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <Input
              id={"group_names"}
              name={"Grupo"}
              placeholder={"Grupo"}
              state={{ inputs, setInputs }}
              disabled={true}
            />
            <ActionButton
              name={"Buscar grupo"}
              svg={<IconSearch />}
              onClick={() => {
                openSearchComponent("Grupo");
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="grid four">
            <Input
              id={"phone"}
              name={"Telefono"}
              placeholder={"+12345678"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"cellular"}
              name={"Celular"}
              placeholder={"+12345678"}
              state={{ inputs, setInputs }}
            />
            <Input
              id={"email"}
              name={"Correo"}
              type={"email"}
              placeholder={"email@example.com"}
              state={{ inputs, setInputs }}
            />
            <Dropdown
              id={"register_type"}
              name={"Tipo de Registro"}
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
              Facturación y Credito
            </button>
            <button
              className={`tab ${openTab === 1 ? "active" : ""}`}
              onClick={() => {
                setOpenTab(1);
              }}
            >
              Datos Retenciones
            </button>
            {type === 0 && (
              <button
                className={`tab ${openTab === 2 ? "active" : ""}`}
                onClick={() => {
                  setOpenTab(2);
                }}
              >
                Datos Empleados
              </button>
            )}
            <button
              className={`tab ${openTab === 3 ? "active" : ""}`}
              onClick={() => {
                setOpenTab(3);
              }}
            >
              Geolocalización
            </button>
          </div>

          <div className="content">
            {openTab === 0 ? (
              <div className="container">
                <div className="aggregator">
                  <Dropdown
                    id={"subject_class"}
                    name={"Clase de Sujeto"}
                    state={{ inputs, setInputs }}
                  />

                  <Input
                    id={"credit_limit"}
                    name={"Cupo de Credito"}
                    placeholder={"Cupo"}
                    state={{ inputs, setInputs }}
                  />
                </div>
              </div>
            ) : openTab === 1 ? (
              <div className="container">
                <div className="row">
                  <div className="grid two">
                    <Checkbox
                      forID={"apply_retention"}
                      name={"Aplicar retención al registrar compra"}
                      state={{ inputs, setInputs }}
                    />

                    <div className="grid">
                      <div className="grid two">
                        <Input
                          id={"code_ret_source"}
                          name={"Cod. Ret/Fuente"}
                          placeholder={"001"}
                          state={{ inputs, setInputs }}
                        />
                        <ActionButton
                          svg={<IconSearch />}
                          name={"Seleccionar Imp"}
                          onClick={() => {
                            openSearchComponent("Impuesto");
                          }}
                        />
                      </div>
                      <div className="grid two">
                        <Input
                          id={"code_ret_iva"}
                          name={"Cod. Ret/Iva"}
                          placeholder={"001"}
                          state={{ inputs, setInputs }}
                        />
                        <ActionButton
                          svg={<IconSearch />}
                          name={"Seleccionar Imp"}
                          onClick={() => {
                            openSearchComponent("Impuesto");
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : openTab === 2 ? (
              <>
                <div className="container">
                  <div className="row">
                    <div className="grid six">
                      <Input
                        id={"position"}
                        name={"Cargo"}
                        placeholder={"Cargo"}
                        state={{ inputs, setInputs }}
                      />
                      <Input
                        id={"salary"}
                        name={"Salario"}
                        placeholder={"Salario"}
                        state={{ inputs, setInputs }}
                      />
                      <Input
                        id={"hd"}
                        name={"H/D Mes"}
                        placeholder={"H/D Mes"}
                        state={{ inputs, setInputs }}
                      />
                      <Input
                        id={"family_charge"}
                        name={"Carga Familiar"}
                        placeholder={"Carga"}
                        state={{ inputs, setInputs }}
                      />
                      <Input
                        id={"entry_date"}
                        name={"F. Entrada"}
                        type={"date"}
                        state={{ inputs, setInputs }}
                      />
                      <Input
                        id={"departure_date"}
                        name={"F. Salida"}
                        type={"date"}
                        state={{ inputs, setInputs }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="grid two">
                      <div className="grid">
                        <Input
                          id={"observations"}
                          name={"Observaciones"}
                          placeholder={"Observaciones"}
                          state={{ inputs, setInputs }}
                        />
                        <Input
                          id={"company_id"}
                          name={"ID Empresa"}
                          placeholder={"0"}
                          state={{ inputs, setInputs }}
                        />
                      </div>
                      <div className="grid">
                        <div className="grid two">
                          <Checkbox
                            forID={"provision"}
                            state={{ inputs, setInputs }}
                            name={"Provisionar decimos"}
                          />
                          <Checkbox
                            forID={"reserve_fund"}
                            state={{ inputs, setInputs }}
                            name={"Provisionar fondo de reserva"}
                          />
                        </div>
                        <div className="grid two">
                          <Checkbox
                            forID={"insured"}
                            state={{ inputs, setInputs }}
                            name={"Asegurado"}
                          />
                          <Checkbox
                            forID={"commissions"}
                            state={{ inputs, setInputs }}
                            name={"Comisiones"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="container">
                  <div className="row">
                    <div className="grid three">
                      <Input
                        id={"latitude"}
                        name={"Latitud"}
                        placeholder={"Latitud"}
                        state={{ inputs, setInputs }}
                      />
                      <Input
                        id={"longitude"}
                        name={"Longitud"}
                        placeholder={"Longitud"}
                        state={{ inputs, setInputs }}
                      />

                      <ActionButton
                        name={"Abrir Google Maps"}
                        onClick={() => {
                          window.open(`https://maps.google.com`, "_blank");
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <Checkbox
                      forID={"reset_access_cfdi"}
                      name={"Restablecer acceso CFDI"}
                      state={{ inputs, setInputs }}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <BasicButtons version={1} options={{ title: formName }} />
      </div>
    </div>
  );
};

export default FormEmployeeSuppliersCustomers;
