import { Link } from "react-router-dom"
import { useContextProvider } from "../Provider/Provider"
import "./SnackCard.css"

export default function SnackCard({snack, setSearchResult, setSearch}) {
    const {id, name, fiber, protein, added_sugar, is_healthy, image, description, carbs} = snack
    const { API, axios, snacks, setSnacks } = useContextProvider()

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
            <p>{is_healthy ? "✅" : "❌" }</p>
        </section>

        {/* favorite / delete */}
        <section className="index-fav-delete">
            <span>check</span>
            <span onClick={(event) => handleDelete(event)}>🗑️
            </span>
        </section>
       </>
    )
}