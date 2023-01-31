import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SnackDetails(){
    const { id } = useParams();
    const [snack, setSanck] = useState({});

    useEffect(() => {
        axios
        .get(`${API}/snacks/${id}`)
        .then((res) => {
            setSanck(res.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [id]);

    return (
        <div>
            {snack.is_healthy ? <p>This snack is healthy.</p> : <p>This snack is not healthy.</p>}
            {snack.is_healthy ?  <img src="./assets/heart-solid.png"></img> : <img src="./assets/heart-regular.png"></img>}
           <p>{snack.name}</p>
           <img src="{snack.image}" alt="snack"></img>
           <p>{snack.protein}</p>
           <p>{snack.fiber}</p>
           <p>{snack.added_sugar}</p> 
           <button>Back</button>
           <button>Edit</button>
           <button>Delete</button>
        </div>
    )
}

export default SnackDetails;