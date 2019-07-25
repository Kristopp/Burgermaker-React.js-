import React, { Component } from "react";
import Aux from "../../../hoc/Aux";

import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  //
  componentDidUpdate() { 
    console.log('[OrderSumary] WillUpdate');
  }
  render() {
    const ingridentSummary = Object.keys(this.props.ingredients).map(e => {
      return (
        <li key={e}>
          <span style={{ textTransform: "capitalize" }}>{e}</span>:
          {this.props.ingredients[e]}
        </li>
      );
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A Fat bruger boooy?</p>
        <ul>{ingridentSummary}</ul>
        <p>
          <strong>Price: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanceld}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
