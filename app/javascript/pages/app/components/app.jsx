import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Profile from "./profile/profile";
import PaymentHistory from "./payment_history/payment_history";
import Statistics from "./statistics/statistics";
import Hub from "./hub/hub";
import NoMatch from "./no_match";
import Navbar from "./navbar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({ loading: true });

  const fetchUserData = () => {
    axios.get("/api/v1/users/current").then(response => {
      const data = response.data.data;
      console.log("hello");
      
      setUser({
        identity: data.identity,
        email: data.email,
        status: data.status,
        profile_image: data.profile_image,
        loading: false
      });
    });
  };

  useEffect(fetchUserData, []);

  return (
    !user.loading && (
      <>
        <div>
          <Route
            render={({ location }) => {
              return (
                <TransitionGroup>
                  <CSSTransition
                    key={location.key}
                    classNames="tab"
                    timeout={{ enter: 600, exit: 300 }}
                  >
                    <Switch location={location}>
                      <Route exact path="/app" component={Hub} />
                      <Route
                        exact
                        path="/app/payment_history"
                        component={PaymentHistory}
                      />
                      <Route
                        exact
                        path="/app/statistics"
                        component={Statistics}
                      />
                      <Route
                        exact
                        path="/app/profile"
                        render={() => <Profile user={user} />}
                      />
                      <Route component={NoMatch} />
                    </Switch>
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
        </div>
        <Navbar />
      </>
    )
  );
};

export default App;