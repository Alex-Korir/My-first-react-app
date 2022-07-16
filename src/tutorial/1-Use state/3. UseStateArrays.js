import React from "react";
import { data } from "../../../../../data";

const UseStateArrays = () => {
  const [people, setPeople] = React.useState([data]);
  return (
    <>
      {people.map((person) => {
        console.log(person);
        return hello;
      })}
      ;
    </>
  );
};
