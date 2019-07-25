import React from "react";

import classes from "./NavigationItem.module.css";

const NavigationItem = props => (

  <li className={classes.NavigationItem}>
    <a href={props.link} className={props.active ? classes.active : null}>
      {props.children}
    </a>
  </li>

);

export default NavigationItem; 

 {/**If props.active on true then className will be classes.active 
        and then uses that css property*/}
