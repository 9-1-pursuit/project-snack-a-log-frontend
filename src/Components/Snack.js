import React from "react";
import { Link } from "react-router-dom";

export default function Snack({
  snack: { id, name, img, protein, sugar, fiber },
}) {
  return (
    // <div className="snack_container">
    <Link to={`/snacks/${id}`}>
      <div className="single_snack">
        <h3>{name}</h3>
        <img src={img} alt={img} />
      </div>
    </Link>
    // </div>
  );
}
