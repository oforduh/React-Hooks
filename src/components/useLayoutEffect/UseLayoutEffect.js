import React, { useEffect, useLayoutEffect, useRef } from "react";

import styles from "./useLayoutEffect.module.scss";

const UseLayoutEffect = () => {
  const inputRef = useRef();
  //   runs before the useEffect and mostly use for styling
  useLayoutEffect(() => {
    console.log(`use layout effect: ${inputRef.current.value}`);
  });

  useEffect(() => {
    inputRef.current.value = "HARRISON";
  });

  return (
    <div className={styles.appContainer}>
      UseLayoutEffect
      <div className={styles.useLayoutEffect}>
        <input type="text" ref={inputRef} value="OFORDU" />
      </div>
    </div>
  );
};

export default UseLayoutEffect;
