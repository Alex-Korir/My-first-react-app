import React, { useState } from "react";
import { data } from "../../data";

const UseStateArrays = () => {
  const [people, setPeople] = useState(data);
  //Removing individual items
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <button
        type="button"
        onClick={() => {
          setPeople([]);
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default UseStateArrays;
