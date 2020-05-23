import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavbarCard from "./components/Navbar/NavbarCard";
import HeaderCard from "./components/Header/HeaderCard";
import FormCard from "./components/Form/FormCard";
import DashTable from "./components/Dashboard/DashTable";
import StoriesCard from "./components/Stories/StoriesCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavbarCard />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <HeaderCard />
                <FormCard />
              </Fragment>
            )}
          />
          <Route
          exact path="/stories"
          component={StoriesCard}
          />
          <Route
          exact path="/dashboard"
          component={DashTable}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
