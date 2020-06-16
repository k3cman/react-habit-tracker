import React from "react";
import { Route, Switch } from "react-router-dom";
import { MonthView } from "../calendar/month/MonthView";
import { WeekView } from "../calendar/week/WeekView";
import { Dashboard } from "../pages/Dashboard";

export const Main = () => {
  return (
    <Switch>
      <Route path="/week">
        <WeekView />
      </Route>
      <Route path="/month">
        <MonthView />
      </Route>
      // DEFAULT
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
};
