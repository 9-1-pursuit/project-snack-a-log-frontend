import { useState, useEffect } from "react";
import Snack from "./Snack";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function Snacks() {
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => setSnacks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div classname="Snacks">
      <ul>
        {snacks.map((snack) => {
          return (
            <li>
              <Snack snack={snack} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Snacks;
