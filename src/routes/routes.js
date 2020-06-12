import React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Strings } from "../constants";
import { HomeScreen, AboutScreen } from "../screens";

const Routes = () => {
  return (
    <HashRouter>
      <Route
        path={Strings.APPLICATION.ROUTES.HOME}
        exact
        component={HomeScreen}
      />
      <Route path={Strings.APPLICATION.ROUTES.ABOUT} component={AboutScreen} />
    </HashRouter>
  );
};

export default Routes;
