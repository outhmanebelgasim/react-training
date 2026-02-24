import React, { useState } from "react";

function UpdateObject() {
  const [car, setCar] = useState({ year: 2030, make: "BMW", model: "M4" });

  function handleYear(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleMake(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handleModel(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  return (
    <div>
      <p>
        Your Car Details: {car.year}, {car.make}, {car.model}
      </p>
      <input type="number" value={car.year} onChange={handleYear} />
      <input type="text" value={car.make} onChange={handleMake} />
      <input type="text" value={car.model} onChange={handleModel} />
    </div>
  );
}

export default UpdateObject;
