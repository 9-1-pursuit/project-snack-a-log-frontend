import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./SnackShow.css";

export default function SnackShow() {
  const [snack, setSnack] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then((res) => {
      setSnack(res.data);
    });
  }, [id, navigate]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => {
        navigate(`/snacks`);
      })
      .catch((c) => console.error("catch", c));
  };

  const handleDelete = () => {
    deleteSnack();
  };

  return (
    <>
      <article>
        <h3>{snack.name}</h3>
        <h5>Image: {snack.image}</h5>
        <h5>Description: {snack.description}</h5>
        <h5>Fiber: {snack.fiber}</h5>
        <h5>Protein: {snack.protein}</h5>
        <h5>Carbs: {snack.carbs}</h5>
        <h5>Added Sugar: {snack.added_sugar}</h5>
        <h5>Healthy: {snack.is_healthy}</h5>
        <div>
          <Link to={`/snacks`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/snacks/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </article>
    </>
  );
}
