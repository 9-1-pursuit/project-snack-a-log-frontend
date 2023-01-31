import React from "react";
import { Link } from "react-router-dom";
import regular from "../assets/heart-regular.png";
import solid from "../assets/heart-solid.png";

export default function Snack({ snack }) {
  return (
    <section>
      <Link to={`/snacks/${snack.id}`}>
        <img src={snack.image} alt="Snack image"></img>
      </Link>
      <h5>
        <Link to={`/snacks/${snack.id}`}>{snack.name}</Link>
      </h5>
      {snack.is_healthy ? (
        <span>
          <img src={solid}></img>
        </span>
      ) : (
        <span>
          <img src={regular}></img>
        </span>
      )}
    </section>
  );
}
