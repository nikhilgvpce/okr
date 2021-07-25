import React from "react";
import "./Loader.css";

/**
 * 
 * displays loader when fetching the OKR data
 */

const Loader = () => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
