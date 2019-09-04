import React from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./profile/profile";
import PaymentHistory from "./payment_history/payment_history";
import Statistics from "./statistics/statistics";
import Hub from "./hub/hub";

const App = () => {
  return (
    <>
      <h1>App component</h1>
      <div>
        <Switch>
          <Route exact path="/app" component={Hub} />
          <Route exact path="/app/payment_history" component={PaymentHistory} />
          <Route exact path="/app/statistics" component={Statistics} />
          <Route exact path="/app/profile" component={Profile} />
        </Switch>
      </div>
    </>
  );
};

export default App;
