import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function EditSnackForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    image:
      "" || "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image",
  });

  const updateSnack = (updatedSnack) => {
    axios
      .put(`${API}/snacks/${id}`, updatedSnack)
      .then(
        () => {
          navigate(`/snacks/${id}`);
        },
        (error) => console.log(error)
      )
      .catch((err) => console.warn(err));
  };

  const handleTextChange = (e) => {
    setSnack({ ...snack, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    axios.get(`${API}/snacks/${id}`).then(
      (res) => setSnack(res.data),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSnack(snack, id);
  };

  return (
    <div>
      <div className="edit_form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name:
            <input
              id="name"
              value={snack.name}
              type="text"
              onChange={handleTextChange}
              placeholder="Name of the snack"
              required
            />
          </label>
          <label htmlFor="fiber">
            Fiber:{" "}
            <input
              id="fiber"
              type="number"
              value={snack.fiber}
              onChange={handleTextChange}
            />
          </label>
          <label htmlFor="protein">
            Protein:{" "}
            <input
              id="protein"
              type="number"
              value={snack.protein}
              onChange={handleTextChange}
            />
          </label>
          <label htmlFor="added_sugar">
            Added Sugar:
            <input
              id="added_sugar"
              value={snack.added_sugar}
              type="number"
              onChange={handleTextChange}
            />
          </label>
          <label htmlFor="image">
            Image url:
            <input
              id="image"
              value={snack.image}
              type="string"
              onChange={handleTextChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
