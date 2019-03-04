// sets up reusable component for WizardCard
import React from "react";
import "./WizardCard.css";

// pass the image into each card
const WizardCard = props => (
    <div className="card" onClick={props.imageClick}>
        <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images" + props.image)} />
    </div>
    </div>

);

export default WizardCard;