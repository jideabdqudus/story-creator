import React, { Fragment, Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import NavbarCard from "./components/Navbar/NavbarCard";
import HeaderCard from "./components/Header/HeaderCard";
import FormCard from "./components/Form/FormCard";
import DashTable from "./components/Dashboard/DashTable";
import StoriesCard from "./components/Stories/StoriesCard";

class App extends Component {
  state = {
    story: [
      {
        id: 1,
        title: "Massacre in Stamford",
        detail: "JT went down amongst other things",
        type: "Sport Journo",
        words: "2000",
        cost: 30,
      },
      {
        id: 2,
        title: "Moving to Lagos",
        detail: "Change of School",
        type: "Home",
        words: "1000",
        cost: 10,
      },
      {
        id: 3,
        title: "New Job",
        detail: "Fresh out of school",
        type: "Employment",
        words: "3500",
        cost: 70,
      },
    ],
  };

  render() {
    const { story } = this.state;
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
              exact
              path="/stories"
              render={() => (
                <Fragment>
                  <StoriesCard story={story} />
                </Fragment>
              )}
            />
            <Route exact path="/dashboard" component={DashTable} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
