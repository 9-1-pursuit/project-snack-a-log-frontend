import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
  const [snacks, setSnacks] = useState([]);

  console.log(API);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => {
        console.log(res.data);
        setSnacks(res.data);
      })
      .catch((c) => console.warn("catch, c"));
  }, []);
  console.log(snacks);
  return (
    <article>
      {snacks.map((snack) => {
        return <Snack key={snack.id} snack={snack} />;
      })}
    </article>
  );
}
