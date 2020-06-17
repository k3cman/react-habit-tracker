import moment from "moment";
import React from "react";
import { WeekDays } from "src/models/WeekDays.model";
import styles from "./WeekView.module.scss";

export const WeekView = () => {
  const startOfTheWeek = moment().startOf("isoWeek");
  const weekDays: WeekDays[] = [
    {
      label: "Monday",
      date: startOfTheWeek.toDate(),
    },
    {
      label: "Tuesday",
      date: startOfTheWeek.add(1, "days").toDate(),
    },
    {
      label: "Wednesday",
      date: startOfTheWeek.add(2, "days").toDate(),
    },
    {
      label: "Thursday",
      date: startOfTheWeek.add(3, "days").toDate(),
    },
    {
      label: "Friday",
      date: startOfTheWeek.add(4, "days").toDate(),
    },
    {
      label: "Saturday",
      date: startOfTheWeek.add(5, "days").toDate(),
    },
    {
      label: "Sunday",
      date: startOfTheWeek.add(6, "days").toDate(),
    },
  ];

  return (
    <div className={styles.week}>
      {weekDays.map((day) => {
        return (
          <div className={styles.day}>
            <div className={styles.dayHeader}>
              <span className={styles.dayName}>{day.label}</span>
              <span>{moment(day.date).format("DD")}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
