import React, { useState } from "react";
import styles from "./login.module.scss";
import { toast } from "react-toastify";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { handleUpdateUserProfile } from "./handleUserLogin";
import { UserObject } from "../../Context/UserContext";

const Login = () => {
  const { setusername } = UserObject();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const [passwordType, setPasswordType] = useState({
    password1: "password",
  });
  const togglePassword = (id) => {
    const newObj = { ...passwordType };
    console.log(id, newObj, newObj[id]);
    newObj[id] = passwordType[id] === "password" ? "text" : "password";
    setPasswordType(newObj);
  };
  return (
    <div className={styles.container}>
      <h2>Learn UseContext</h2>
      <div className={styles.formContainer}>
        <form
          onSubmit={(e) => {
            handleUpdateUserProfile({
              e,
              state: { email, password },
              email,
              setusername,
            });
          }}
        >
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="text"
              onChange={(event) => {
                setemail(event.target.value);
              }}
              value={email}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <div className={styles.eyeContainer}>
              <input
                onChange={(event) => {
                  setpassword(event.target.value);
                }}
                type={passwordType.password1}
                value={password}
              />
              <div
                className={styles.eyeIcon}
                onClick={() => togglePassword("password1")}
              >
                {passwordType.password1 === "password" ? (
                  <AiOutlineEyeInvisible />
                ) : (
                  <AiOutlineEye />
                )}
              </div>
            </div>
          </div>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
