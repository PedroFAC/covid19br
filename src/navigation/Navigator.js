import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { TopBar } from "../components";
import { Dashboard, Estado, Pais } from "../screens";

const Navigator = () => {
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Switch>
          <Route path={"/"} exact component={Dashboard} />
          <Route path={"/dashboard"} exact component={Dashboard} />
          <Route path={"/brazil"} exact component={Pais} />
          <Route path={"/estados/:id"} exact component={Estado} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Navigator;
