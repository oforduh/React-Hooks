import React, { useRef } from "react";
import Button from "./Button";
import styles from "./useImperativeHandle.module.scss";

const UseImperativeHandle = () => {
  const buttonRef = useRef(null);
  return (
    <div className={styles.appContainer}>
      UseImperativeHandle
      <div className={styles.useImperativeHandle}>
        <button
          onClick={() => {
            buttonRef.current.alterToggle();
          }}
        >
          Button From Parent
        </button>
        {/* we can't pass ref to a component as we do to a normal html component without wrapping the component(check the component file) the in a forwardRef function*/}
        <Button ref={buttonRef} />
      </div>
    </div>
  );
};

export default UseImperativeHandle;
