import "./App.css";
import UseEffect from "./components/useEffect/UseEffect";
import UseReducer from "./components/useReducer/UseReducer";
import UseRef from "./components/useRef/UseRef";
import Usestate from "./components/useState/Usestate";
import styles from "./app.module.scss";
import UseLayoutEffect from "./components/useLayoutEffect/UseLayoutEffect";
import UseImperativeHandle from "./components/useImperativeHandle/UseImperativeHandle";
import Login from "./components/useContextLogin/Login";
import Profile from "./components/showProfile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UseMemo from "./components/useMemo/UseMemo";
import UseCallback from "./components/useCallback/UseCallback";

function App() {
  return (
    <div className={styles.appContainer}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHove
      />
      <Usestate />
      <div className="useReducer">
        <UseReducer />
      </div>
      <div className="useEffect">
        <UseEffect />
      </div>
      <div className="useRef">
        <UseRef />
      </div>
      <div className="useLayoutEffect">
        <UseLayoutEffect />
      </div>
      <div className="useImperativeHandle">
        <UseImperativeHandle />
      </div>
      <div className="useContext">
        <Login />
        <Profile />
      </div>
      <div className="useMemo">
        <UseMemo />
      </div>
      <div className="useCallback">
        <UseCallback />
      </div>
    </div>
  );
}

export default App;
