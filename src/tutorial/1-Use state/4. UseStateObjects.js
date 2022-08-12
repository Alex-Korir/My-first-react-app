import React from "react";
import { useState } from "react";

function UseStateObjects() {
  const [individuals, setIndividuals] = useState({
    name: "Alex Kipkorir",
    age: 22,
    talent: "Coding and Programming",
  });
  const changeIndividual = () => {
    setIndividuals({
      ...individuals,
      name: "Sergio Aguero",
      talent: "Playing soccer and swimming",
    });
  };
  return (
    <React.Fragment>
      <h3>{individuals.name}</h3>
      <h3>{individuals.age}</h3>
      <h3>{individuals.talent}</h3>
      <button className="butto" onClick={changeIndividual}>
        Click Me
      </button>
    </React.Fragment>
  );
}

export default UseStateObjects;
