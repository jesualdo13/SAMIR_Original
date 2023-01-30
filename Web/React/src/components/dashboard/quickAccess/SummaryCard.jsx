import React from "react";

const SummaryCard = ({ icon, title, color }) => {
  return (
    <div className={`summary-card ${color}`}>
      <div className="left">{icon}</div>
      <div className="right">
        <strong>{title}</strong>
        <span>999/999</span>
      </div>
    </div>
  );
};

export default SummaryCard;
