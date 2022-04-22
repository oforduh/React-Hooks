import React, { useRef, useState } from "react";
import styles from "./useRef.module.scss";

const UseRef = () => {
  const [name, setname] = useState("Harrison");
  const inputRef = useRef(null);
  const onClick = function () {
    console.log(inputRef.current.value);
    setname(inputRef.current.value);
    inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <div className={styles.appContainer}>
      UseRef Tutorial
      <div className={styles.useRefContainer}>
        <h1>{name}</h1>
        <input type="text" ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
      </div>
    </div>
  );
};

export default UseRef;
