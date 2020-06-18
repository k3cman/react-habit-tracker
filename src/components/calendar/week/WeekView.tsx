import moment from "moment";
import React from "react";
import { TypeOfEvent } from "src/models/enums/TypeOfEvent.enum";
import { WeekDays } from "src/models/WeekDays.model";
import styles from "./WeekView.module.scss";

export const WeekView = () => {
  const startOfTheWeek = moment().startOf("isoWeek");
  const weekDays: WeekDays[] = [
    {
      label: "Monday",
      date: startOfTheWeek.toDate(),
      events: [
        {
          type: TypeOfEvent.CHORE,
          label: "Work",
          done: false,
          timeLeft: 0,
          designatedTime: 6,
        },
        {
          type: TypeOfEvent.CHORE,
          label: "Run",
          done: false,
          timeLeft: 0,
          designatedTime: 1,
        },
        {
          type: TypeOfEvent.CHORE,
          label: "JAVA",
          done: false,
          timeLeft: 0,
          designatedTime: 1,
        },
        {
          type: TypeOfEvent.CHORE,
          label: "Personal projects",
          done: false,
          timeLeft: 0,
          designatedTime: 2,
        },
        {
          type: TypeOfEvent.TODO,
          label: "CLean the dishes",
          done: false,
        },
      ],
    },
    {
      label: "Tuesday",
      date: startOfTheWeek.add(1, "days").toDate(),
      events: [],
    },
    {
      label: "Wednesday",
      date: startOfTheWeek.add(2, "days").toDate(),
      events: [],
    },
    {
      label: "Thursday",
      date: startOfTheWeek.add(3, "days").toDate(),
      events: [],
    },
    {
      label: "Friday",
      date: startOfTheWeek.add(4, "days").toDate(),
      events: [],
    },
    {
      label: "Saturday",
      date: startOfTheWeek.add(5, "days").toDate(),
      events: [],
    },
    {
      label: "Sunday",
      date: startOfTheWeek.add(6, "days").toDate(),
      events: [],
    },
  ];

  return (
    <div className={styles.week}>
      {weekDays.map((day, index) => {
        return (
          <div className={styles.day} key={index}>
            <div className={styles.dayHeader}>
              <span className={styles.dayName}>{day.label}</span>
              <span>{moment(day.date).format("DD")}</span>
            </div>
            <hr />
            {day.events.map((event, index) => {
              if (event.type === TypeOfEvent.CHORE) {
                return (
                  <div className={styles.choreEvent} key={index}>
                    CHORE :{event.label}
                  </div>
                );
              }

              if (event.type === TypeOfEvent.TODO) {
                return (
                  <div className={styles.todoEvent} key={index}>
                    TODO: {event.label}
                  </div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};
