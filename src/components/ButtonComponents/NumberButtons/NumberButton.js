import React from "react";

const NumberButton = ({nm}) => {
  return (
    <>
    
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="num-btn">{nm}</button>
    </>
  );
};
export default NumberButton