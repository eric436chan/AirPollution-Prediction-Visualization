import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/navbar.component.jsx";
import HomePage from "./pages/homepage/homepage.page.jsx";
import "bootstrap/dist/js/bootstrap.js";
import Spinner from "./components/spinner/spinner.component";
import DashboardPage from "./pages/dashboard/dashboard.page";

class App extends React.Component {
  render() {
    const { didLoad } = this.props;
    return (
      <div className="App">
        {/* {didLoad ? "" : <Spinner />} */}
        <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={DashboardPage} />
          </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  didLoad: state.spinner.apiCalls.airQuality,
});

export default connect(mapStateToProps)(App);
