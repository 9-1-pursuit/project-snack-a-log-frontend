import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { link, useParams, useNavigate } from "react-router-dom";
// CSS
import "./SnackDetails.css";

//
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
    // <div className="card">
    //   <div className="card_content">
    //     {/* //! FRONT */}
    //     <div className="card_front">
    //       {" "}
    //       <h3 className="card_title">{snack.name}</h3>
    //       <img className="card_subtitle" src="" alt="Snack_Icon" />
    //     </div>

    //     {/* //! BACK */}
    //     <div className="card_back">
    //       {" "}
    //       {/* //TODO: SMALLER IMAGE FOR SNACK  */}
    //       <div className="card_body">
    //         <img src={placeholder} alt="Snack_Icon" />
    //         <p>Fiber: {snack.fiber}</p>
    //         <p>Protein: {snack.protein}</p>
    //         <p>Sugar: {snack.added_sugar}</p>
    //         <p>HEALTHY?: {snack.is_healthy}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="card">
      <div className="card__content">
        <div className="card__front">
          <h3 className="card__title">{snack.name}</h3>
          <img
            className="card__subtitle"
            src="https://picsum.photos/seed/first/1920/1080"
            alt="snack_icon"
          />
        </div>

        <div className="card__back">
          <div className="card__body">
            <img className="body_image"
              src="https://picsum.photos/seed/first/1920/1080"
              alt="snack_icon"
            />
            <p>Fiber: {snack.fiber}</p>
            <p>Protein: {snack.protein}</p>
            <p>Sugar: {snack.added_sugar}</p>
            <p>HEALTHY?: {snack.is_healthy}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
