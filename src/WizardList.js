import React from "react";
import Wizard from "./Wizard";

const WizardList = props => {
  //display all yer wizards, or filter by house
  return <div className="WizardList">
  { props.wizards.map( (wizard, index) => {return <Wizard key={index} wizard={wizard} />}) }
  </div>;
};

export default WizardList;
