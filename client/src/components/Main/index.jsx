import React from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../actions/actionCreator";

const Main = () => {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Dashboard</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <h1 className={styles.button_value}>{value}</h1>
      <div className={styles.button_container}>
        <button
          className={styles.button_plus}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <button
          className={styles.button_plus}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Main;
