import React from "react";
// import { Button } from 'react-bootstrap'
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import emailImg from "../assets/email.png"
import "./DevCard.css";
import { useContextProvider } from "../Provider/Provider";

const DevCard = ({ dev }) => {
  const { imageURL, name, githubURL, indeedURL, email, description } = dev;

  return (
    <article>
      <img className="photo" src={imageURL}></img>
      <div className="dev-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="dev-buttons">
        <a href={githubURL}>
          <button variant="primary"><img src={github} alt="github" /></button>
        </a>
        <a href={indeedURL}>
          <button href={indeedURL} variant="primary">
            <img src={linkedin} alt="linkedin" /></button>
        </a>
        <a href={email}>
          <button href={email} variant="primary">
            <img id="email-img"src={emailImg} alt="email" />
          </button>
        </a>
      </div>
    </article>
  );
};

export default DevCard;
