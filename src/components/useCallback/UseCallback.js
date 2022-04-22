import React, { useCallback, useReducer, useState } from "react";
import Child from "./Child";
import styles from "./useCallback.module.scss";

const UseCallback = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "Toggle":
        return {
          toggle: !state.toggle,
        };

      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, {
    toggle: false,
  });
  const [data, setdata] = useState("Yo, pls sub to the channel");

  //   use for function and does not allow the function to rerender when called in the child component
  const returnComment = useCallback((name) => data + name, [data]);

  return (
    <div className={styles.appContainer}>
      UseCallback
      <div className={styles.useCallBack}>
        <Child returnComment={returnComment} />
        <button
          onClick={() => {
            dispatch({ type: "Toggle" });
          }}
        >
          Toggle
        </button>
        {state.toggle && <h1>Toggle</h1>}
      </div>
    </div>
  );
};

export default UseCallback;
