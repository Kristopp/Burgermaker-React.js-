import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div>{props.label}</div>
      <button 
      className={classes.more} 
      onClick={props.added}>
       more
      </button>
      <button
        className={classes.less}
        onClick={props.remove}
        disabled={props.disabled}
      >
        less
      </button>
    </div>
  );
};

export default BuildControl;
