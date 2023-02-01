import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider.js";
import SnackCard from "./SnackCard.js"
import "./SnacksIndex.css";

export default function SnacksIndex() {
  const { snacks, setSnacks } = useContextProvider();
  const [search, setSearch] = useState("")
  const [searchResult, setSearchResult] = useState([])
  const [radio, setRadio] = useState("")
  const data = searchResult.length > 0 || search ? [...searchResult] : [...snacks]

  function filterSearch(string, objArr) {
    const filteredSnacks = objArr.filter(({name}) => {
      const input = string.toLowerCase().split(` `).join(``)
      const snackName = name.toLowerCase().split(` `).join(``)
      
      if(input === "") return objArr
      else { return snackName.includes(input) }
    })
    setSearchResult(filteredSnacks)
  }

  function handleSearch (e) {
    const value = e.target.value
    setSearchResult([...snacks])
    setSearch(value)
    filterSearch(value, [...snacks])
  }

  function handleRadio(e) {
    const value = e.target.value
    setRadio(value)
    const healthy = value === "healthy" ? true : false
    if(value){
      const healthyfilter = snacks.filter(({is_healthy}) => is_healthy === healthy )
      setSearchResult(healthyfilter)
    }
    else {
      setSearchResult(snacks)
    }
    
  }


  useEffect(() => {

  }, [snacks.length])
  
  return (
    <div className="index">
      <section className="index-header">
        <h2>Snacks</h2>

         {/* searchbar */}
         <label htmlFor="searchbar">Search Snacks: {" "}
          <input
          id = "searchbar"
          type= "text"
          placeholder='Search Snacks'
          value={search}
          onChange ={(event) => {handleSearch(event)}}
          />
        </label>
        {/* radio buttons */}
        <section className="radio">
        <label htmlFor="healthy">
            <input
            type="radio"
            id="healthy"
            name="radio-button"
            checked={radio === "healthy" ? true : false}
            value="healthy"
            onChange={(event) =>handleRadio(event)}
            />
            {" "}Healthy
        </label>

        <label htmlFor="unhealthy">
            <input
            type="radio"
            id="unhealthy"
            name="radio-button"
            checked={radio === "unhealthy" ? true : false}
            value="unhealthy"
            onChange={(event) =>handleRadio(event)}
            />
            {" "}Unhealthy
        </label>

        <label htmlFor="showAll">
            <input
            type="radio"
            id="showAll"
            name="radio-button"
            checked={radio === "" ? true : false}
            value=""
            onChange={(event) =>handleRadio(event)}
            />
            {" "}Show All
        </label>
        </section>


      </section>

      {/* aside1 can be dead space for pop up menu */}
      <aside className="index-left">
        <h3>Misc.</h3>
      </aside>
      
      {/* snack details */}
      <section className="index-snack">
        {
          data.map(snack => 
          <SnackCard 
          key={snack.id}
          snack={snack}
          setSearch={setSearch}
          setSearchResult={setSearchResult} />)
        }
      </section>

      {/* aside 2 for snacks list */}
      <aside className="index-right">
        <h5>Current Snacks</h5>
        {
          snacks.map(({name, id}) => 
          <Link 
          key = {id}
          to={`/snacks/${id}`}>
            <li>{name}</li>
          </Link>)
        }
      </aside>

      {/* add (+) botton/icon/link */}
      <Link to="/snacks/new">
        <img src="https://www.pngkey.com/png/detail/136-1362850_this-free-icons-png-design-of-plus-icon.png" alt="plus-sign"
        className="add-button" />
      </Link>
    </div>
  );
}