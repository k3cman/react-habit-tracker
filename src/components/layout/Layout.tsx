import React, { FunctionComponent } from "react";
import { Header } from "./Header";
import styles from "./Layout.module.scss";
import { Main } from "./Main";
import { Sidebar } from "./Sidebar";

export const Layout: FunctionComponent = () => {
  return (
    <div className={styles["app-wrapper"]}>
      <div className={styles.side}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.main}>
          <Main />
        </div>
      </div>
    </div>
  );
};
