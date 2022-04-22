import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./useEffect.module.scss";

const UseEffect = () => {
  const [data, setdata] = useState("");
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setdata(data[0].email);
    })();
  }, [counter]);

  return (
    <div className={styles.appContainer}>
      UseEffect Tutorial
      <div className={styles.useEffectContainer}>
        <h1>{data}</h1>
        <h1>{counter}</h1>
        <button onClick={() => setcounter(counter + 1)}>Increment</button>
      </div>
    </div>
  );
};

export default UseEffect;
