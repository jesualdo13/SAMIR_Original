import React, { useEffect, useState } from "react";

import { IconCaret } from "../../base/Icons";

const Dropdown = ({
  id,
  name = null,
  state,
  options = [
    "Opción 1",
    "Opción 2 - Lorem ipsum dolor sit amet",
    "Opción 3",
    "Opción 4",
    "Opción 5",
    "Opción 6",
  ],
}) => {
  const { inputs: value, setInputs: setValue } = state;

  const [option, setOption] = useState(value[id]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const changeOption = (index) => {
    setOption(index);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    setOption(value[id]);

    //eslint-disable-next-line
  }, [value]);

  useEffect(() => {
    setValue({ ...value, [id]: option });

    //eslint-disable-next-line
  }, [option]);

  const toggleOptionsMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="dropdown">
      {name !== null && <span>{name}</span>}

      <div className="inner">
        <button
          className={`dropdown-button ${isMenuOpen ? "active" : ""}`}
          onClick={toggleOptionsMenu}
        >
          <span>{options[option]}</span>

          <IconCaret />
        </button>

        {isMenuOpen && (
          <div className="options">
            <div className="container">
              {options.map((option, index) => {
                return (
                  <button
                    key={option + index}
                    onClick={() => {
                      changeOption(index);
                    }}
                  >
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
