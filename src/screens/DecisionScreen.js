import { Button as Button } from "../core-components/Button.js";
import React from "react";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";

export function DecisionScreen(props) {
  return (
    <div className="screen">
      <Link to="/support">
        <Button text="Fertig für jetzt"></Button>
      </Link>
      <Link to="/goodbye">
        <Button text="Fertig für heute"></Button>
      </Link>
    </div>
  );
}

export default DecisionScreen;
