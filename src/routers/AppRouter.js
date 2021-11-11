import React from "react";
import { Route, Switch } from "wouter";
import DashboardPage from "../components/pages/DashboardPage";
import LoginPage from "../components/pages/LoginPage";
import AdminPage from "../components/pages/AdminPage";
import PagesRouter from "./PagesRouter";

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/Dashboard" component={DashboardPage} />
        <Route component={PagesRouter} />
      </Switch>
    </div>
  );
};

export default AppRouter;
