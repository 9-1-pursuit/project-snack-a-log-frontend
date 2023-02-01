import React from 'react';
import { Link } from 'react-router-dom'
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

const Snack = ({ snack }) => {
    return (
        <section>

            <Link to={`/snacks/${snack.id}`}> 
            <h1>{snack.name}</h1> 
            </Link>

            <img src={snack.image} alt="Snack image"></img>
            {snack.is_healthy ? (
                <span>
                    <img src={heartSolid}></img>
                </span>
                ): (
                    <span>
                        <img src={heartOutline}></img>
                    </span>
                )}
        </section>
    );
};

export default Snack;