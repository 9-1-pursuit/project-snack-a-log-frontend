import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
  const { id } = useParams();
  const [snack, setSnack] = useState({});
  const [viewModal, setViewModal] = useState(false)
  let navigate = useNavigate();

  const deleteSnack = () => {
    axios
    .delete(`${API}/snacks/${id}`)
    .then(() => navigate(`/snacks`))
    .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deleteSnack()
  }

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);

  return (
    <div className="details">
        <section className="imgs">
            <img src={snack.image} alt={`${snack.name} image`}/>
            { snack.is_healthy ? <img src={heartSolid}/> : <img src={heartOutline}/> }
        </section>
        <section className="info">
            <h1>{snack.name}</h1>
            <p><span>Protein:</span> {snack.protein} g</p>
            <p><span>Fiber:</span> {snack.fiber} g</p>
            <p><span>Added Sugar:</span> {snack.added_sugar} g</p>
        </section>
        <div className="buttons">
            <Link to="/snacks">
                <button>Back</button>
            </Link>
            <button onClick={() => setViewModal(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    </div>
  );
}

export default SnackDetails;
