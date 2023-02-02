import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useContextProvider } from "../Provider/Provider"
import { IconCheckbox } from "react-icon-checkbox"
import { IconContext } from "react-icons";
import { FaThumbsUp, FaThumbsDown, FaStar } from "react-icons/fa"
import { IoNutritionSharp, IoTrashOutline } from "react-icons/io5"
import { TbCandy } from "react-icons/tb"
import { TbStarOff } from "react-icons/tb"
import "./SnackCard.css"

export default function SnackCard({snack, setSearchResult, setSearch, favorite, setFavorite}) {
    const {id, name, fiber, protein, added_sugar, is_healthy, image, description, carbs} = snack
    const { API, axios, snacks, setSnacks } = useContextProvider()
    const[checked, setChecked] = useState(false)

    function handleDelete(){
        axios.delete(`${API}/snacks/${id}`)
        .then((respJson) => {
            const idValue= respJson.data.id
            const newSnacks = snacks.filter(({id}) => idValue !== id)
            setSnacks(newSnacks)
            setSearch("")
            setSearchResult(newSnacks)
        })
        .catch(err => console.log(err))
    }

    function handleCheckbox() {
        setChecked(!checked)
        const exist = favorite.find(obj => +id === obj.id)
        if(!exist){
         const favObj = snacks.find(obj=> +id === obj.id)
            setFavorite([...favorite, favObj ])
        }
        if(exist){
            const removeFav = favorite.filter(obj => obj.id !== +id)
            setFavorite(removeFav)
        }
    }
    useEffect(() => {
        axios.get(`${API}/favorites`)
        .then(({data}) => {
           
            const isFav = data.find(obj => +obj.id === id)
           if(Object.keys(isFav).length >0 ){
            setChecked(true)
           }
        })
    },[id])

    return(
       <>
        <Link to={`/snacks/${id}`}>
            <div className="container">
                <img src={image} alt={name} />
                <div className="middle">
                    <div className="text">{name}</div>
                </div>
            </div>
        </Link>
       
        <section className="snack-details">
        <Link to={`/snacks/${id}`}>
            <p>{name}</p>
        </Link>
            <p>{description}</p>
            <p>{is_healthy ? <IoNutritionSharp color={"green"} size={"35px"}/> : <TbCandy color={"red"} size={"35px"}/> }</p>
        </section>

        {/* favorite / delete */}
        <section className="index-fav-delete">
            <span>

            <IconCheckbox 
                type = "checkbox"
                checked = {checked}
                checkedIcon={
                    <IconContext.Provider value={{color: "gold", size: "40px"}}>
                        <FaStar />
                    </IconContext.Provider>}
                uncheckedIcon={
                    <IconContext.Provider value={{color: "white", size: "40px"}}>
                        <TbStarOff />
                    </IconContext.Provider>}
                onClick={() => handleCheckbox()}
                />

                {/* <input 
                type="checkbox"
                checked={checked}
                value ={id}
                onChange={(event)=> handleCheckbox(event) }/> */}
            </span>

            <span onClick={(event) => handleDelete(event)}><IoTrashOutline color={"#2283e6"} size={"40px"}/>
            </span>
        </section>
       </>
    )
}