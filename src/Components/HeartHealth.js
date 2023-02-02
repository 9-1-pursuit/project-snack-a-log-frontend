import { useState, useEffect } from "react";
import heartSolid from "../assets/heartSolid";
import heartOutline from "../assets/heartOutline";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;
function HeartHealth() {
  const [snackHealth, setSnackHealth] = useState({});
  useEffect(() => {
    axios
      .get(`${API}/snacks`)
      .then((res) => setSnackHealth(res.data))
      .catch((err) => console.log(err));
  }, []);

  //heart ouline listing for all snacks WHY? CSS of the heart size running into scaling issues
  return (
    <div>
      <p>
        {snackHealth.is_healthy ? (
          <span>
            <img src={heartSolid} />
          </span>
        ) : (
          <span>
            <img src={heartOutline} height="25px" width="25px" />
          </span>
        )}
      </p>
    </div>
  );
}
export default HeartHealth;
