import React from 'react';
import { Link } from 'react-router-dom'

const Snack = ({ snack }) => {
    return (
        <section>

            <Link to={`/snacks/${snack.id}`}> 
            <h1>{snack.name}</h1> 
            </Link>

            <img src={snack.image} alt="Snack image"></img>
            {snack.is_healthy ?(
                <span>
                    <img src="./assets/heart-solid.png"></img>
                </span>
                ): (
                    <span>
                        <img src="./assets/heart-regular.png"></img>
                    </span>
                )}
        </section>
    );
};

export default Snack;