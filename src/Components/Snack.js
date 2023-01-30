import { useEffect, useState  } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;



function Snacks(){

const [snacks , setSnacks] = useState([])

useEffect(() => {
    axios.get(`${API}/snacks`)
    .then((res) => {
      setSnacks(res.data)
    })
    .catch((error) => {
      console.log("catch", error)
    })  
}, []);

console.log(snacks)

    return (
        null
    )
}


export default Snacks