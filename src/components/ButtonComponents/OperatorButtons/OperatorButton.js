import React from "react";

const OperatorButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    
      <button>{props.index}</button>
    </>
  );
};
export default OperatorButton