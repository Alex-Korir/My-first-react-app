import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("Alex Kipkorir");
  const handler = () => {
    setText("Is a genious");
  };
  return (
    <>
      <h1>{text}</h1>
      <button type="button" className="butto" onClick={handler}>
        Change Heading
      </button>
    </>
  );
};

export default UseStateBasics;
