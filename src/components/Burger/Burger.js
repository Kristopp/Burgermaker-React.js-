import React from "react";
import classes from "./Burger.module.css";
import BurgerStuff from "./BurgerStaff/BurgerStaff";

const Burger = props => {
  //Il extract my state keys into array
  //Then i will use .map on keys elemnts
  let transformedIngredients = Object.keys(props.ingredients)
    .map(e => {
      //If i have 2 cheese in a state i need 2 cheeses renderd in the dom
      //I do it by adding extra element into array and then use array length
      return [...Array(props.ingredients[e])].map((_, i) => {
        return <BurgerStuff key={e + i} types={e} />;
      }); //[,] with 2 elements,_means i dont need element i just want to get index
    }) //Reduce takes function as input function takes 2 arguments prev value & curent val
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients == 0) {
    transformedIngredients = <p>Please Begin</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerStuff types="bread-top" />
      {transformedIngredients}
      <BurgerStuff types="bread-bottom" />
    </div>
  );
};

export default Burger;
