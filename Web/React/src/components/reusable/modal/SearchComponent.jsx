import React, { useState } from "react";
import Input from "../Input";

const SearchComponent = ({ options }) => {
  const { title } = options;

  const [inputs, setInputs] = useState({
    value: "",
  });

  return (
    <div className="search-component">
      <strong>Buscar {title}</strong>

      <div className="search-bar">
        <Input
          id={"value"}
          placeholder="Nombre, codigo o numero..."
          state={{ inputs, setInputs }}
        />

        <button className="button-xl">Buscar</button>
      </div>

      <div className="table-container">
        <div className="table c6">
          <div className="cell header">
            <p>ID</p>
          </div>
          <div className="cell header">
            <p>Numero</p>
          </div>
          <div className="cell header">
            <p>Detalle</p>
          </div>
          <div className="cell header">
            <p>Descripción</p>
          </div>
          <div className="cell header">
            <p>Precio</p>
          </div>
          <div className="cell header">
            <p>Ubicación</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
