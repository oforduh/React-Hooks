import React, { useState, useReducer } from "react";
import styles from "./useReducer.module.scss";

const UseReducer = () => {
  // USE STATE
  // const [counter, setcounter] = useState(0);
  // const [showText, setshowText] = useState(true);

  // 2nd step
  // always place the reducer function ahead of the useReducer snippet
  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return {
          counter: state.counter + 1,
          showText: state.showText,
        };
      case "DECREMENT":
        return {
          counter: state.counter - 1,
          showText: state.showText,
        };

      case "TOGGLE_TEXT":
        return {
          counter: state.counter,
          showText: !state.showText,
        };
      default:
        return state;
    }
  };
  // USE REDUCER
  // 1st step
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    showText: true,
  });

  // reducer is use to handle multiple state
  return (
    <div className={styles.appContainer}>
    UseReducer Tutorial
      <div className={styles.useStateContainer}>
        {/*<h1>{counter}</h1>*/}
        <h1>{state.counter}</h1>
        <button
          onClick={() => {
            // setcounter(counter + 1);
            // setshowText(!showText);
            dispatch({ type: "INCREMENT" });
            dispatch({ type: "TOGGLE_TEXT" });
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
            dispatch({ type: "TOGGLE_TEXT" });
          }}
        >
          Decrement
        </button>
        {state.showText && <p>This is a text</p>}
      </div>
    </div>
  );
};

export default UseReducer;
