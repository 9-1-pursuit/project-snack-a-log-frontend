import React from "react";
import { Link } from "react-router-dom";

export default function Snack({
  snack: { id, name, image, protein, sugar, fiber },
}) {
  return (
    // <div className="snack_container">
    <Link to={`/snacks/${id}`}>
      <div className="single_snack">
        <img className="snack-img" src={image} alt={image} />
        <h5>{name}</h5>
      </div>
    </Link>
    // </div>
  );
}