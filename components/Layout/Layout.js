import React, { Component } from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

//this container toggels state for BackDrop

class Layout extends Component {
  state = {
    showSideDrawer: true
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrwerOpenHandler = () => { 
    this.setState({ showSideDrawer: true })

  }
   
  render() {
    return (
      <Aux>
        <Toolbar 
        open={this.sideDrwerOpenHandler} 
        closed={this.sideDrawerClosedHandler}/>
        <SideDrawer 
        open={this.state.showSideDrawer} 
        closed={this.sideDrawerClosedHandler} />
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
