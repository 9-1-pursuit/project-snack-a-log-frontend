import React from "react";
// import { Button } from 'react-bootstrap'
import "./DevCard.css";

const DevCard = ({ dev }) => {
  const { imageURL, name, githubURL, indeedURL, email, description } = dev;

  return (
    <article>
      {/* salina edit */}
      <img className="photo" src={imageURL}></img>
      {/* <img className="photo" src="https://media.licdn.com/dms/image/D4E03AQFkEebiIKvXxg/profile-displayphoto-shrink_400_400/0/1675282522860?e=1680739200&v=beta&t=wedvJGDTOD_REGGs8ylev-C3J0eVsBi-UEPbSs4em2w"></img> */}

      <div className="dev-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="dev-buttons">
        <a href={githubURL}>
          <button variant="primary">Github</button>
        </a>
        <a href={indeedURL}>
          <button href={indeedURL} variant="primary">
            LinkedIn
          </button>
        </a>
        <a href={email}>
          <button href={email} variant="primary">
            Email
          </button>
        </a>
      </div>
    </article>
  );
};

export default DevCard;
