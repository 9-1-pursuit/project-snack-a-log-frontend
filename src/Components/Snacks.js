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
    <div className="Snacks">
      <ul className="snacks " style={{ listStyle: "none " }}>
        {snacks.map((snack) => {
          return (
            <li key={snack.id}>
              <Snack snack={snack} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default Snacks;
