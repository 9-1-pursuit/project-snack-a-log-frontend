import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
  const { id } = useParams();
  const [snack, setSnack] = useState({});
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        console.log(res.data);
        setSnack(res.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);
  console.log(snack);

  return (
    <div className="details">
      {/* <img src={song.image} alt={`${snack.name} image`/> */}
      <h1>{snack.name}</h1>
    </div>
  );
}

export default SnackDetails;
