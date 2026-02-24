import React, { useState } from "react";

function ArrayObject() {
  const [cars, setCar] = useState([]);
  const [carYear, setYear] = useState(new Date().getFullYear());
  const [carMake, setMake] = useState("");
  const [carModel, setModel] = useState("");

  const handleYear = (event) => setYear(event.target.value);
  const handleMake = (event) => setMake(event.target.value);
  const handleModel = (event) => setModel(event.target.value);

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };

    setCar((prev) => [...prev, newCar]);

    setYear(new Date().getFullYear());
    setMake("");
    setModel("");
  }

  function handleDeleteCar(index) {
    setCar((prev) => prev.filter((_, idx) => idx !== index));
  }

  return (
    <div>
      <h1>List Of Cars:</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleDeleteCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>

      <input
        type="number"
        value={carYear}
        onChange={handleYear}
        placeholder="Enter year"
      />
      <input
        type="text"
        value={carMake}
        onChange={handleMake}
        placeholder="Enter Make"
      />
      <input
        type="text"
        value={carModel}
        onChange={handleModel}
        placeholder="Enter Model"
      />
      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default ArrayObject;
