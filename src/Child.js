import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";
 /**
  * 
  * feature 2 
  * Now lets actually use that props data in the child component 
  * 
  */
function Child({ onChangeColor, color }) {
  /**
   * confirming the function is the same
   */
  // add new function that invokes onChangeColor and passes
  // in a random color as the argument 
  //and update the components onClick callback to be the new function
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  console.log(onChangeColor)
  return <div 
             onClick={handleClick}
              className="child" 
              style={{ backgroundColor: color
              }} />;
}
/**
 * Now ,clicking on either of the white rectangle child components on the app
 * will cause the parent component to change color 
 * 
 * 
 * Let walk through these steps :
 * 
 * When the div in the child component is clicked it will use the 
 * onChangeColor variable to determine what function to run
 * onChangeColor is a prop that is passed down from the Parent component 
 * which references the handleChangeColor function 
 * The handleChangeColor function is the function that will actually run 
 * when the div is clicked , and will update state in the Parent component 
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
 * 
 */
export default Child;
