import React from "react";
import Logo from "../../Logo/Logo";
import classes from "./ToolBar.module.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = props => {
  //Add to Layout
  //Pass logo height to Logo component as props and there i use it as inline styling
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Logo}>
        <div className={classes.Logo}>
          <Logo onClick={props.open} />
        </div>
      </div>
      <div className={classes.DrawerToggle} onClick={props.open}>
        <div />
        <div />
        <div />
      </div>
      <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
