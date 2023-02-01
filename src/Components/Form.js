import { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider.js";
import Solid from "../assets/heart-solid.png";
import Outline from "../assets/heart-regular.png"
import "./Form.css";

export default function Form() {
  const { id } = useParams();
  const { axios, API } = useContextProvider();
  const [is_healthy, setIsHealthy] = useState(false);
  const [snack, setSnack] = useState({
    name: "",
    carbs: "",
    fiber: "",
    protein: "",
    added_sugar: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (id) {
      axios
        .get(`${API}/snacks/${id}`)
        .then((res) => setSnack(res.data))
        .catch((error) => console.log(error));
    }
  }, [id]);

  useEffect(() => {
    if ((snack.fiber < 5 && snack.protein < 5) || snack.added_sugar > 5) {
      setIsHealthy(false);
    } else {
      setIsHealthy(true);
    }
  }, [snack.fiber, snack.protein, snack.added_sugar]);

  const handleChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  return (
    <div className="form">
      <h2>{id ? "Edit" : "New"} Form</h2>

      <form>
        <div id="form-img">
          <img src={snack.image} />
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              onChange={handleChange}
              value={snack.name}
              required
            />
            <label htmlFor="image">Image URL:</label>
            <input
              id="image"
              type="url"
              onChange={handleChange}
              value={snack.image}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              onChange={handleChange}
              value={snack.description}
            />
          </div>
        </div>

        <div id="form-icon">
          <div>
            <label htmlFor="carbs">Carbs:</label>
            <input
              id="carbs"
              type="number"
              min="0"
              onChange={handleChange}
              value={snack.carbs}
            />
            <label htmlFor="fiber">Fiber:</label>
            <input
              id="fiber"
              type="number"
              min="0"
              onChange={handleChange}
              value={snack.fiber}
            />
            <label htmlFor="protein">Protein:</label>
            <input
              id="protein"
              type="number"
              min="0"
              onChange={handleChange}
              value={snack.protein}
            />
            <label htmlFor="added_sugar">Added Sugar:</label>
            <input
              id="added_sugar"
              type="number"
              min="0"
              onChange={handleChange}
              value={snack.added_sugar}
            />
          </div>
          <img src={is_healthy?Solid: Outline} />
        </div>
        <input
          id="submit-button"
          type="submit"
          value={id ? "Save Changes" : "Add Snack"}
        />
      </form>
    </div>
  );
}
