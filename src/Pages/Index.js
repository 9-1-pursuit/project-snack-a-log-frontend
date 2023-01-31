import React from "react";
import Snacks from "../Components/Snacks";
import "./indexpg.css"

export default function Index() {
  return (
    <div className="snacks_index">
      <h1>My Snackies</h1>
      <Snacks />
    </div>
  );
}
