import React, { useContext, useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

import { ContextUser } from "../../../contexts/ContextUser";
import useFetch from "../../../hooks/useFetch";

import SummaryCard from "./SummaryCard";
import BusinessCard from "./BusinessCard";

import {
  IconAdd,
  IconBusiness,
  IconClose,
  IconDocumentText,
  IconDuplicateOutline,
  IconPeople,
} from "../../../base/Icons";

// Local
import { enterprises } from "./enterprises";

const endpoint_enterprises = "https://samirapp.royaltics.com/v1/enterprises";

const QuickAccessPage = () => {
  const sideMenuIsOpen = useOutletContext();
  const { user } = useContext(ContextUser);

  const [cloneModeIsActive, setCloneModeIsActive] = useState(false);

  // Disparador de actualización cuando se clona una empresa
  const [refresh, setRefresh] = useState(null);

  // Estado intermediario para usar el refresh
  const [enterprisesData, setEnterprisesData] = useState(enterprises);

  // Petición automatica
  const enterprisesFetch = useFetch(
    endpoint_enterprises,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + user.private_key,
      },
    },
    refresh
  );

  useEffect(() => {
    if (!enterprisesFetch.hasError && enterprisesFetch.data) {
      setEnterprisesData(enterprisesFetch.data);
    }
  }, [enterprisesFetch]);

  return (
    <div
      id="quick-access-page"
      className={`${sideMenuIsOpen ? "shortened" : ""}`}
    >
      <div className="summary">
        <SummaryCard
          icon={<IconDocumentText />}
          title={"Documentos Electrónicos"}
          color={"blue"}
        />
        <SummaryCard icon={<IconPeople />} title={"Usuarios"} color={"white"} />
        <SummaryCard
          icon={<IconBusiness />}
          title={"Empresas"}
          color={"purple"}
        />
      </div>

      <div className="options">
        <strong>Empresas</strong>

        <div className="buttons">
          <Link to={"/dashboard/business/new"} className="button-xl">
            Agregar nueva empresa
            <IconAdd />
          </Link>
          <button
            className="button-xl"
            onClick={() => {
              setCloneModeIsActive(!cloneModeIsActive);
            }}
          >
            {cloneModeIsActive ? (
              <>
                Cancelar clonación <IconClose />
              </>
            ) : (
              <>
                Clonar empresa existente <IconDuplicateOutline />
              </>
            )}
          </button>
        </div>
      </div>

      <div className={`business-profiles`}>
        {enterprisesData &&
          enterprisesData.map((business) => {
            return (
              <BusinessCard
                key={business.id}
                {...business}
                cloneModeIsActive={cloneModeIsActive}
                setRefresh={setRefresh}
              />
            );
          })}
      </div>
    </div>
  );
};

export default QuickAccessPage;
