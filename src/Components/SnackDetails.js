import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { link, useParams, useNavigate } from "recat-router-dom";

const API = process.env.REACT_APP_API_URL;

export default function SnackDetails() {
  const [snack, setSnack] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        console.log(res.data);
        setSnack(res.data);
      })
      .catch((err) => console.warn(err));
  }, [id]);

  const deleteSnack = () => {
    axios
      .delete(`${API}/snacks/${id}`)
      .then(() => navigate(`/snacks`))
      .catch((error) => console.warn(error));
  };

  return (
    <div className="snack_details">
      <h3>{snack.name}</h3>
    </div>
  );
}
