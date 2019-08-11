import React from "react";
import styles from "./App.scss";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className={styles.App}>
      <Main>
        <Sidebar />
      </Main>
    </div>
  );
}

export default App;
