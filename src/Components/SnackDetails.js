import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import heartSolid from "../assets/heart-solid.png";
import heartOutline from "../assets/heart-regular.png";

const API = process.env.REACT_APP_API_URL;

function SnackDetails() {
  const { id } = useParams();
  const [snack, setSnack] = useState({});
  const [viewModal, setViewModal] = useState(false)
  let navigate = useNavigate();

  const deleteSnack = () => {
    axios
    .delete(`${API}/snacks/${id}`)
    .then(() => navigate(`/snacks`))
    .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deleteSnack()
  }

  useEffect(() => {
    axios
      .get(`${API}/snacks/${id}`)
      .then((res) => {
        setSnack(res.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);

  const styles = {
    button: 'py-2 px-4 mx-2 hover:shadow-lg shadow-indigo-500/50'
  }

  return (
    <div className="details">
        <section className="imgs float-left">
            <img src={snack.image} alt={`${snack.name} image`} className="ml-40 mr-20 border-double border-8 border-stone-500" />
        </section>
        <section className="info">
            { snack.is_healthy ? <img src={heartSolid}  className="float-right"/> : <img src={heartOutline}  className="float-right"/> }
            <h1 className="text-6xl underline pb-10">{snack.name}</h1>
            <p className="text-2xl"><span className="font-bold" >Protein:</span> {snack.protein} g</p>
            <p><span className="font-bold">Fiber:</span> {snack.fiber} g</p>
            <p><span className="font-bold">Added Sugar:</span> {snack.added_sugar} g</p>
        </section>
        <div className="buttons">
            <Link to="/snacks">
                <button className={styles.button}>Back</button>
            </Link>
            <button className={styles.button} onClick={() => setViewModal(true)}>Edit</button>
            <button className={styles.button} onClick={handleDelete}>Delete</button>
        </div>
    </div>
  );
}

export default SnackDetails;
