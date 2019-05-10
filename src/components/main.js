import React, { Component, Fragment } from "react";
import NavBar from './NavBar.js';
import Game from "../containers/Game";
import Rules from "./Rules";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Main extends Component {

  render() {
    return (
      <Router>
        <Fragment>
          <NavBar />
          <Route exact path="/" component={Game} />
          <Route path= "/rules" component={Rules} />
        </Fragment>
      </Router>
    );
  }

}

export default Main;
