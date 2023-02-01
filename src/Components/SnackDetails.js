import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom"
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";
const API = process.env.REACT_APP_API_URL

function SnackDetails () {
    const [snack, setSnack] = useState({})
    const { id } = useParams()
    let navigate = useNavigate()

    const deleteSnack = () => {
        axios
        .delete
        .then(
            () => {
                navigate(`/snacks`)
            },
            (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c))
    }

    useEffect(() => {
        axios
        .get(`${API}/snacks/${id}`)
        .then((response) => {
            console.log(response.data)
            setSnack(response.data)
        })
        .catch((c) => {
            console.warn("catch", c)
        })
    }, [id])
    
    return (
        <article>
        <tr>
            <td>
                {snack.name}
                <br />
                <img src={snack.image} alt='snacks' />
                <br />
                {snack.is_healthy ? (
                    <span> <img src={heartSolid} alt="healthy" /> </span>
                ) : (<span> <img src={heartOutline} alt="not healthy" /></span>)}
                <br />
                Protein: {snack.protein}
                <br />
                Fiber: {snack.fiber}
                <br />
                Added Sugar: {snack.added_sugar}
            </td>
            <div className="navigation">
                <div>
                    <Link to={`/snacks`}>
                        <button>Back</button>
                    </Link>
                </div>
                <div>
                    <Link to={`/snacks/id/edit`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div>
                    <button onClick={deleteSnack}>
                        Delete
                    </button>
                </div>
            </div>
        </tr>
    </article>
    )
}

export default SnackDetails;
