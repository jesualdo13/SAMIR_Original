import React from "react";

const Input = ({
  id = 0,
  name,
  type = "text",
  placeholder = "Placeholder",
  state,
  disabled = false,
  icon = null,
}) => {
  const { inputs: value, setInputs: setValue } = state;

  return (
    <div className={`input ${icon ? "icon" : ""} `}>
      <label htmlFor={id}>{name}</label>
      <div className="inner">
        <input
          id={id}
          type={type}
          value={value[id]}
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => {
            setValue({ ...value, [id]: e.target.value });
          }}
        />
        {icon}
      </div>
    </div>
  );
};

export default Input;
