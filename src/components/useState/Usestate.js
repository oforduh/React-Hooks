import React from "react";
import styles from "./useState.module.scss";
import { useState } from "react";

const Usestate = () => {
  // use statehook
  const [counter, setcounter] = useState(0);
  const increment = function () {
    // setcounter(counter + 1);
    setcounter((prevCounter) => prevCounter + 1);
  };
  return (
    <div className={styles.appContainer}>
      UseState Tutorial
      <br />
      <div className={styles.useStateContainer}>
        <h1>{counter}</h1>
        <button onClick={increment}>increment</button>
      </div>
    </div>
  );
};

export default Usestate;
