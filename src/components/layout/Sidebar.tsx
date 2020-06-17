import React, { FunctionComponent } from "react";
import { Calendar, PieChart, Settings, Trello } from "react-feather";
import { Link } from "react-router-dom";
import styles from "./Sidebar.module.scss";

export const Sidebar: FunctionComponent = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <div>
        <Link to="/dashboard">
          <PieChart color="white"></PieChart>
        </Link>
      </div>
      <div>
        <Link to="/month">
          <Calendar color="white"></Calendar>
        </Link>
      </div>
      <div>
        <Link to="/week">
          <Trello color="white"></Trello>
        </Link>
      </div>
      <div>
        <Link to="/settings">
          <Settings color="white"></Settings>
        </Link>
      </div>
    </div>
  );
};
