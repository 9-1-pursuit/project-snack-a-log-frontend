import React from 'react';
import { useState, useEffect } from "react";
import Snack from "./Snack";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

const Snacks = () => {
    const [snacks, setSnacks] = useState([]);

    useEffect(() => {
        axios
        .get(`${API}/snacks`)
        .then((res)=>{
            console.log(res.data)
            setSnacks(res.data);
        })
        .catch((c) => console.warn("catch", c))``
    }, [])

    return (
        <div>
            {snacks.map((snack) => {
                return <Snack key={snack.id} snack={snack} />
            })}
            
        </div>
    );
};

export default Snacks;