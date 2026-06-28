import React from "react";

function ImageCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} />
      <div className="card-body">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default ImageCard;
