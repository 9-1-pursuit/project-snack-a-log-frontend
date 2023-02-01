import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import SolidHeart from "../assets/heart-solid.png";
import EmptyHeart from "../assets/heart-regular.png";
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
      <article className="snack-info">
        <h1>{snack.name}</h1>
        <div className="snackInfo">
          <img className="snack-img" src={snack.image} alt="snack-image" />
          <div className="snack-text">
            <h5>
              <strong>
                <b>Description: </b>
              </strong>
              {snack.description}
            </h5>
            <h5>
              <strong>
                <b>Fiber: </b>
              </strong>
              {snack.fiber} grams
            </h5>
            <h5>
              <strong>
                <b>Protein: </b>
              </strong>
              {snack.protein} grams
            </h5>
            <h5>
              <strong>
                <b>Carbs: </b>
              </strong>
              {snack.carbs} grams
            </h5>
            <h5>
              <strong>
                <b>Added Sugar: </b>
              </strong>
              {snack.added_sugar} grams
            </h5>
            <h5>
              <strong>
                <b>Healthy: </b>
              </strong>
              {snack.is_healthy ? (
                <img src={SolidHeart} alt="logo" height="25px" />
              ) : (
                <img src={EmptyHeart} alt="logo" height="25px" />
              )}
            </h5>
          </div>
        </div>
        <div className="buttons">
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
        </div>
      </article>
    </>
  );
}
