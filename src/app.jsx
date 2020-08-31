import React, { Component, Fragment } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'
import styles from './styles/main.scss';
import FancyButton from "./fancy-button/fancy-button";
import Home from "./components/Home/Home";
import Dashboard from "./components/Dashboard/Dashboard";

const content = 'Hello world!';

const App = () => (
  <Fragment>
    {/* <div className="container">
      <div className="row">
        <div className="col-6">bbb</div>
        <div className="col-6">abc</div>
      </div>
    </div>
    <div className={styles["resizeable-both"]}>{content}</div>
    <Button label="Regular Button"/>
    <FancyButton label="Fancy Button"/> */}
    <HashRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact component={Dashboard} />
      </Switch>
    </HashRouter>
  </Fragment>
);

export default App;
