import React, { useEffect, useState } from "react";

import { IconSearch } from "../../../base/Icons";

import { data } from "../navigationBar/data";

let nonRootChildren = [];

// Excluir los elementos root de las operaciones
data.forEach((el) => {
  nonRootChildren.push(el.children);
});

const SearchBar = ({ openNewWindow }) => {
  const [isSearchBarResultsOpen, setIsSearchBarResultsOpen] = useState(false);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [searchBarFilteredResults, setSearchBarFilteredResults] = useState([]);

  let results = [];

  // Colocar todos los formularios que tienen "id" en la lista de resultados
  nonRootChildren.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      // console.log(el[i]);
      if (el[i].children) {
        for (let j = 0; j < el[i].children.length; j++) {
          // console.log(el[i].children[j]);
          if (el[i].children[j].id) {
            results.push(el[i].children[j]);
          }
        }
      } else if (el[i].id) {
        results.push(el);
      }
    }
  });

  // Filtrar lista de resultados en base a lo introducido por el usuario
  useEffect(() => {
    let filteredResults = results.filter((result) =>
      result.text.toLowerCase().includes(searchBarValue.toLowerCase())
    );
    if (filteredResults.length === 0) {
      filteredResults.push(null);
    }
    setSearchBarFilteredResults(filteredResults);
    //eslint-disable-next-line
  }, [searchBarValue]);

  return (
    <div id="workspace-nav-search-bar">
      <IconSearch />

      <input
        type="text"
        value={searchBarValue}
        onChange={(e) => {
          setSearchBarValue(e.target.value);
        }}
        onFocus={() => {
          setIsSearchBarResultsOpen(true);
        }}
        onBlur={() => {
          setTimeout(() => {
            setIsSearchBarResultsOpen(false);
          }, 200);
        }}
      />

      {isSearchBarResultsOpen && (
        <div className="results">
          <div className="container" tabIndex={-1}>
            {searchBarFilteredResults.map((result, index) => {
              return result ? (
                <button
                  key={result.text}
                  onClick={() => {
                    openNewWindow(result);
                  }}
                >
                  <p>{result.text}</p>
                </button>
              ) : (
                <div className="empty" key={0}>
                  <p>No results</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
