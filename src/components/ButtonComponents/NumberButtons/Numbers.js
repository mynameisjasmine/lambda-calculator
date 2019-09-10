import React, {useState} from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data.js";

//import any components needed

//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  console.log('numbers', {numberState})
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your numberState button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      {numberState.map(nm => (<NumberButton nm ={nm} />))}
    </div>
  );
};
export default Numbers;