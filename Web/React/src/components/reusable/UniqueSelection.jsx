const UniqueSelection = ({ forID, state, type, data, plans }) => {
  const { inputs: value, setInputs: setValue } = state;

  return (
    <div
      className={`unique-selection ${
        data.id === value[forID] ? "selected" : ""
      } type-${type}`}
      onClick={() => {
        setValue({ ...value, [forID]: data.id });
      }}
    >
      <strong>{data.names}</strong>

      <div className={`details `}>
        {type === "plan" ? (
          <>
            <p className="price">
              $ {data.price_month}
              <span>/ mes</span>
            </p>

            <p className="price-anual">
              $ {data.price_annual} <span>/ año</span>
              <span className="saving">
                ( Ahorra un{" "}
                {Math.abs(
                  100 - (data.price_annual / (data.price_month * 12)) * 100
                ).toFixed(2)}
                % )
              </span>
            </p>
          </>
        ) : type === "period" ? (
          <>
            {value.plan_id !== 0 && (
              <p className="price">
                ${" "}
                {
                  plans.filter((plan) => plan.id === value.plan_id)[0][
                    data.price_ref
                  ]
                }
              </p>
            )}
          </>
        ) : (
          <>{data.svg}</>
        )}
      </div>
    </div>
  );
};

export default UniqueSelection;
