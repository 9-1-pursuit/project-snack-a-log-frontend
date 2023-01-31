import "./SnackCard.css"

export default function SnackCard({snack}) {
    const {id, name, fiber, protein, added_sugar, is_healthy, image, description, carbs} = snack

    return(
       <>
        <div class="container">
            <img src={image} alt={name} />
            <div class="middle">
                <div class="text">{name}</div>
            </div>
        </div>
        
        <section className="snack-details">
            <p>{name}</p>
            <p>{description}</p>
            <p>{is_healthy ? "✅" : "❌" }</p>
        </section>
       </>
    )
}