import { useState } from "react";
import "./styles.css";

function App() {
  const [text, setText] = useState("Click to reveal your name");
  function openHandler() {
    if (text === "Alex Kipkorir") {
      setText("Is the best programmer i know");
    } else {
      setText("Alex Kipkorir");
    }
  }
  return (
    <div className="App">
      <h1>{text}</h1>
      <button type="button" onClick={openHandler}>
        Click me!
      </button>
    </div>
  );
}

export default App;
