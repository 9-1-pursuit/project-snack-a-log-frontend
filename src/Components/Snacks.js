import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => {
        console.log(res.data);
        setSnacks(res.data);
      })
      .catch((c) => console.warn("catch, c"));
  }, []);
  
  
  // for (let object of snacks) {
  //   if((Number(object.fiber) > 5 || Number(object.protein) > 5) && (object.added_sugar) < 5){
  //     object.is_healthy = true
  //   }
  //   else{
  //     object.is_healthy = false
  //   }
  // }
  
  // console.log(snacks);


  return (
    <article>
      {snacks.map((snack) => {
        return <Snack key={snack.id} snack={snack} />;
      })}
    </article>
  );
}
