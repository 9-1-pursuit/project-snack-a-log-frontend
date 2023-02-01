import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider.js";
import SnackCard from "./SnackCard.js"
import "./SnacksIndex.css";

export default function SnacksIndex() {
  const { snacks, setSnacks } = useContextProvider();
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([...snacks])
  
  
  // function filterSearch(string, objArr) {

  //   const filteredSnacks = objArr.filter(({name}) => {
  //     const input = string.toLowerCase().split(` `).join(``)
  //     const snackName = name.toLowerCase().split(` `).join(``)
      
  //     if(input === " ") return objArr
  //     else { return snackName.includes(input) }
  //   })
  //   console.log(filteredSnacks)
  //   setSearchResult(filteredSnacks)
  // }

  // function handleSearch (e) {
  //   const value = e.target.value
  //   setSearch(value)

  //   // setSnacks(filterSearch(value, snacks))
  //   filterSearch(value, searchResult)
  // }

  useEffect(() => {
    setSearchResult([...snacks])
  },[])
  
  return (
    <div className="index">
      <section className="index-header">
        <h2>Snacks</h2>

         {/* searchbar */}
         {/* <label htmlFor="searchbar">Search Snacks: {" "}
          <input
          id = "searchbar"
          type= "text"
          placeholder='Search Snacks'
          value={search}
          onChange ={(event) => {handleSearch(event)}}
          />
        </label> */}

      </section>

      {/* aside1 can be dead space for pop up menu */}
      <aside className="index-left">
        <h3>Misc.</h3>
      </aside>
      
      {/* snack details */}
      <section className="index-snack">
        {
          snacks.map(snack => 
          <SnackCard 
          key={snack.id}
          snack={snack} />)
        }
      </section>

      {/* aside 2 for misc data */}
      <aside className="index-right">
        <h3>Misc.</h3>
      </aside>

      {/* add (+) botton/icon/link */}
      <Link to="/snacks/new">
        <img src="https://www.pngkey.com/png/detail/136-1362850_this-free-icons-png-design-of-plus-icon.png" alt="plus-sign" />
      </Link>
    </div>
  );
}
