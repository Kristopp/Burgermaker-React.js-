import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = props => {

  //I have 2 diffrenct css classes from same module
  //BuildControl module aligns all the child elements
  return (
    <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
      <button className={classes.More} onClick={props.added}>
        more
      </button>
      <button className={classes.Less} onClick={props.remove}>
        less
      </button>
    </div>
  );
};

export default BuildControl;
