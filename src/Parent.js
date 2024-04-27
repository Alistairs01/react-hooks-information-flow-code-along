import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";
/**
 * 
 * 
 * Now, lets add a new feature 
 * When either Child component  is clicked 
 * it should change its own background color to a random color
 * and the other child component should change to the same color 
 * 
 * 
 * Now , we coukd put some state in our child component to keep track of its 
 * color However
 * 
 * sibling components cannot pass data to each other directly
 * data can only flow up and down between parent and child 
 * 
 * 
 * 
 * The solution is to store the color of the Child in the state of the Parent 
 * Then we let the parent component handle the passing of the data to each of 
 * its children 
 * 
 * Well start by creating a variable to keep track of the color of 
 * the child components using state 
 */
function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);// initial value for color state
  const [childrenColor, setChildrenColor] = useState("#FFF")
  /**
   * this parent component has a state variable called color
   * that is initially set to a random color
   * to update state,we'll create a simple handleChangeColor function
   * 
   * feature 2 
   * 
   * Lastly we have to update the handleChangeColor() function in the parent 
   * to change not just the color state , but also the ChildrenColor
   * To practice sending data back to the parent 
   * Lets change our handleChangeColor to take in an argument of the newChildColor
   * and then use that variable to update the state of the Child component 
   */
  function handleChangeColor(newChildColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);// update color state to a new value 
    setChildrenColor(newChildColor);
  }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      {/**since we are going to want to run this handleChangeColor()function
       * when either child component is clicked 
       * we are going to pass this state changing function as a prop
       * to both child components
       * 
       * feature 2 
       * since the data represents the color of the two child components 
       * lives in the Parent ,we should pass that down as props
       *
       */}
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      {/**
       * Now ,Child will have a prop called onChangeColor 
       * that is a function 
       * Specifically it is the same function object as our Parents handleChangeColor function
       * to test this add a console.log inside the Child component
       */}
    </div>
  );
}

export default Parent;
