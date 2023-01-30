import React from 'react'
import { Link } from 'react-router-dom'
import regular from "../assets/heart-regular.png"
import solid from "../assets/heart-solid.png"
export default function Snack({ snack}) {

  return (
    <section>
      <img src={snack.image} alt="Snack image"></img>
      <h5>{snack.name}</h5>
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
