import React from "react";

import "./mapform.style.scss";

const MapForm = ({ handleSubmit, handleClick, id, className }) => (
  <form onSubmit={handleSubmit} className={className}>
    <button
      className={"btn btn-warning " + (id == 1 ? "active" : "")}
      name="id"
      value={1}
      onClick={handleClick}
      type="submit"
    >
      Air Quality
    </button>
    <button
      className={"btn btn-warning " + (id == 2 ? "active" : "")}
      name="id"
      value={2}
      onClick={handleClick}
      type="submit"
    >
      Causes of Air Pollution
    </button>
  </form>
);

export default MapForm;
