import React, {Component, Fragment} from 'react';
import Button from "./button/button";
import styles from './styles/main.scss';
import FancyButton from "./fancy-button/fancy-button";

const content = 'Hello world!';

const App = () => (
  <Fragment>
    <div className="container">
      <div className="row">
        <div className="col-6">bbb</div>
        <div className="col-6">abc</div>
      </div>
    </div>
    <div className={styles["resizeable-both"]}>{content}</div>
    <Button label="Regular Button"/>
    <FancyButton label="Fancy Button"/>
  </Fragment>
);

export default App;
