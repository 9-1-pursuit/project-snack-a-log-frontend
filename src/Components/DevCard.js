import React from "react";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
import emailImg from "../assets/email.png"
import "./DevCard.css";


const DevCard = ({ dev }) => {
  const { name, imageurl, githuburl, indeedurl, email, description } = dev;
  console.log (name)
  console.log (dev.name)
  console.log(dev)

  return (
    // <>
    // <p>{name}</p>
    // </>
    <article>
      <img className="photo" src={imageurl}></img>
      <div className="dev-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="dev-buttons">
        <a href={githuburl}>
          <button variant="primary"><img src={github} alt="github" /></button>
        </a>
        <a href={indeedurl}>
          <button href={indeedurl} variant="primary">
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
