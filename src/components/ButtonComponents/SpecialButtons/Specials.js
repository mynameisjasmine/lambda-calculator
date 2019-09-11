import React, {useState} from "react";
import SpecialButton from "./SpecialButton"
import { specials } from "../../../data.js";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialState, setSpecialState] = useState(specials);
  console.log("specialState",specialState);
  return (
    <div className="spec-div">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {/* {specialState.map(sp => (<SpecialButton sp ={sp} />))} */}
       {specialState.map((sp, index) => (<SpecialButton sp ={sp} key={index} />))}

    </div>
  
  );
  };
export default Specials;