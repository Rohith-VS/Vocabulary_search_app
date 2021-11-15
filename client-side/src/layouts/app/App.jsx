import React from "react";
import styles from "./App.module.scss";
import Navbar from "../../components/navbar/navbar";
function App() {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.appCoreWrapper}>
        <div className={styles.appContainer}>
          <Navbar/>
        </div>
      </div>
    </div>
  );
}

export default App;
