import React from "react";

export default ({ input, label, type }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} />
    </div>
  );
};
