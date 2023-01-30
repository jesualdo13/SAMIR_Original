import React from "react";

const Plugin = ({
  id,
  name,
  description,
  image,
  price_monthly,
  price_annual,
}) => {
  const handleClick = () => {
    console.log(id);
  };

  return (
    <div className="plugin">
      <strong>{name}</strong>

      <div className="content">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <p>{description}</p>
      </div>

      <div className="action">
        <div className="prices">
          <span>Al mes: $ {price_monthly} </span>
          <span>Al año: $ {price_annual}</span>
        </div>

        <button className="button-xl" onClick={handleClick}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Plugin;
