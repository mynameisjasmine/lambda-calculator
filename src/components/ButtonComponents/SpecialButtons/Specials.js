import React, {useState} from "react";
import SpecialButton from "./Specials.js"
import { specials } from "../../../data.js";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialState.map(specials => (<SpecialButton specials ={specials} />))}
    </div>
  );
};
export default Specials;