import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;

export default function Snacks() {
  const [snacks, setSnacks] = useState([]);
  const [allSnacks , setAllSnacks] = useState([])
  const [filter , setFilter] = useState([])
  const [searchSnack, setSearchSnack] = useState("")

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => {
        setFilter(res.data)
        setAllSnacks(res.data)
        setSnacks(res.data);
      })
      .catch((c) => console.warn("catch, c"));
  }, []);
  
  
  for (let object of snacks) {
    if((Number(object.fiber) > 5 || Number(object.protein) > 5) && (object.added_sugar) < 5){
      object.is_healthy = true
    }
    else{
      object.is_healthy = false
    }
  }
  
  function filterShows(search, snacks){
    return(
      snacks.filter((snack) => snack.name.toLowerCase().match(search.toLowerCase()))
      ) 
    }
    
    const handleTextChange = (event) => {
      const search = event.target.value
      const result = search ? filterShows(search, allSnacks) : allSnacks
      setFilter(result)
      setSearchSnack(search)
    }

    function handleFilter(healthy){
      setFilter(healthy)
    }

    function filterCategory(e){
      const filter = snacks.filter((x) => {
        return(
          x.is_healthy.toString() === e.target.value
        )
      })
      handleFilter(filter)
    }

   
  return (
    <article>
      <div className="is_healthy">
      <label htmlFor="searchSnack">
       Select Category:
      <select onChange={filterCategory}>
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
      { filter.map((snack) => {
        return <Snack key={snack.id} snack={snack} />;
      })  }
    </article>
  );
}
