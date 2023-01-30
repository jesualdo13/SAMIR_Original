import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import Plugin from "./Plugin";

import { IconSearch } from "../../../base/Icons";

import { plugins } from "./plugins";

const PluginsPage = () => {
  const sideMenuIsOpen = useOutletContext();

  // Buscador
  const [inputValue, setInputValue] = useState("");

  // Plugins filtrados
  const [sortedData, setSortedData] = useState(plugins);

  // Filtrar plugins con el buscador
  useEffect(() => {
    const array = plugins.filter((plugin) => {
      return plugin.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    setSortedData(array);
  }, [inputValue]);

  return (
    <div id="plugins-page" className={`${sideMenuIsOpen ? "shortened" : ""}`}>
      <div className="title">
        <h1>Samir Plugins Store</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Buscar Complemento"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />

          <IconSearch />
        </div>
      </div>

      <div className="container">
        {sortedData.map((plugin) => {
          return <Plugin key={plugin.id} {...plugin} />;
        })}
      </div>
    </div>
  );
};

export default PluginsPage;
