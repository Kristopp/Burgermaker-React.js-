import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem";

const NavigationItems = () => (
  // link="/" dummy link

  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" active>
      Burger Maker
    </NavigationItem>
    <NavigationItem link="/">CheckOut</NavigationItem>
  </ul>
);

export default NavigationItems;

