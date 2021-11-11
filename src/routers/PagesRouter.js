import React from "react";
import { Route, Switch } from "wouter";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import DocsPage from "../components/pages/DocsPage";
import IndexPage from "../components/pages/IndexPage";
import NotFoundPage from "../components/pages/NotFoundpage";
import TutorialPage from "../components/pages/TutorialPage";

const PagesRouter = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/docs" component={DocsPage} />
        <Route path="/tutorials" component={TutorialPage} />
        <Route path="/" component={IndexPage} />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default PagesRouter;
