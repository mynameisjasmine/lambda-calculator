import React from "react";

const SpecialButton = ({sp}) => {
  // console.log(sp);
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="spec-btn">{sp}</button>
    </>
  );
};
export default SpecialButton