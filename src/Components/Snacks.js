import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
// Set state for filter and search functions
  const [snacks, setSnacks] = useState([]);
  const [allSnacks , setAllSnacks] = useState([])
  const [searchSnack, setSearchSnack] = useState("")

// useEffect creates an inital state of all snacks objects within an array
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => {
        setAllSnacks(res.data)
        setSnacks(res.data);
      })
      .catch((c) => console.warn("catch, c"));
  }, []);

// Function filter snacks based on healthy/unhealthy and resets search bar onChange
  const handleSelect = (e) => {
    if (e.target.value === 'true' || e.target.value === 'false'){
      const filter = allSnacks.filter((snack) => {
        return snack.is_healthy.toString() === e.target.value
      })
      setSnacks(filter)
    } else {
      setSnacks(allSnacks)
    }
    setSearchSnack("")
  }
  
  // Filter function for handleTextChange below
    function filterSnacks(search){
      return(
        snacks.filter((snack) => snack.name.toLowerCase().match(search.toLowerCase()))
      ) 
    }

// Function that searchs through the snacks array for a match to the search
  const handleTextChange = (e) => {
    const search = e.target.value
    const result = search ? filterSnacks(search) : snacks
    setSnacks(result)
    setSearchSnack(search)
  }

// For loop to determine if snack is healthy or unhealthy
  for (let object of snacks) {
    if ((Number(object.fiber) < 5 && Number(object.protein) < 5) || object.added_sugar > 5 ){
      object.is_healthy = false
    } else {
      object.is_healthy = true
    }
  }

  return (
    <article>
      <div className="is_healthy">
      <label htmlFor="searchSnack">
       Select Category:
      <select onChange={handleSelect}>
        <option value="">Select</option>
         <option value="true">Healthy</option>
          <option value="false">Unhealthy</option> 
      </select>
      </label>
      </div>
      <div>
       <label htmlFor="searchSnack">
       Search Snack:
            <input
              type="text"
               value={searchSnack}
              id="searchSnack"
              onChange={handleTextChange}
            />
        </label>
      </div>
      { snacks.map((snack) => {
        return <Snack key={snack.id} snack={snack} />;
      })  }
    </article>
  );
}
