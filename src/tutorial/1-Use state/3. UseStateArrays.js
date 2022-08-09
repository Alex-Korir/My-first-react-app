import React, { useState } from "react";
import { data } from "../../data";

const UseStateArrays = () => {
  const [people, setPeople] = useState(data);
  function handlerr() {
    setPeople([]);
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
          </div>
        );
      })}
      <button type="button" onClick={handlerr}>
        Click Me
      </button>
    </>
  );
};

export default UseStateArrays;
