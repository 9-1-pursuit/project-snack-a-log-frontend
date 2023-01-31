import { Link } from "react-router-dom"
import "./SnackCard.css"

export default function SnackCard({snack}) {
    const {id, name, fiber, protein, added_sugar, is_healthy, image, description, carbs} = snack

    return(
       <>
        <div className="container">
            <img src={image} alt={name} />
            <div className="middle">
                <div className="text">{name}</div>
            </div>
        </div>
       
        
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
            <span>delete</span>
        </section>
       </>
    )
}