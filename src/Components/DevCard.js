import React from 'react';
import { Button } from 'react-bootstrap'
import "./DevCard.css"

const DevCard = ({dev}) => {
    const {
        imageURL,
        name,
        githubURL,
        indeedURL,
        email,
        description
    } = dev

    return (
        <article>
        <img
        src={imageURL}></img>
        <div className='dev-content'>
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
        <div className='dev-buttons'>
            <a href={githubURL}>
                <button variant="primary">Github</button>
            </a>
            <a href={indeedURL}>
                <button href={indeedURL} variant="primary">Indeed</button>
            </a>
            <a href={email}>
                <button href={email} variant="primary">Email</button>
            </a>
        </div>
        </article>
    );
};

export default DevCard;