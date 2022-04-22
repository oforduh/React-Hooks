import React, { useEffect, useMemo, useReducer, useState } from "react";
import axios from "axios";
import styles from "./useMemo.module.scss";

const UseMemo = () => {
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

  const [data, setdata] = useState(null);
  useEffect(() => {
    console.log("This is An API CALL");

    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        const { data } = response;
        setdata(data);
      });
  }, []);

  //   A function that returns the longest name
  const findLongestName = (comments) => {
    if (!comments) return;
    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }
    console.log("THIS WAS COMPUTED");
    return longestName;
  };
  //   Use Memo does not RERENDER when the page RENDER and saves the data in memo. stores ony the value not the function
  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div className={styles.appContainer}>
      UseMemo
      <div className={styles.useMemoContainer}>{getLongestName}</div>
      <button
        onClick={() => {
          dispatch({ type: "Toggle" });
        }}
      >
        Toggle
      </button>
      {state.toggle && <h1>Toggle</h1>}
    </div>
  );
};

export default UseMemo;
