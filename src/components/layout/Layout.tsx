import React, { FunctionComponent } from "react";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout: FunctionComponent = () => {
  return (
    <div className="app-wrapper">
      <div className="side">
        <Sidebar />
      </div>
      <div className="content">
        <Header />
      </div>
    </div>
  );
};
