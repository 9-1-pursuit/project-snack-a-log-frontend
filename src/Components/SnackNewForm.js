import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SnackNewForm() {
  let navigate = useNavigate();

  const [snack, setSnack] = useState({
    name: "",
    image: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
  });

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks`, newSnack)
      .then(
        () => {
          navigate(`/snacks`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addSnack(snack);
  };

  const handleTextChange = (event) => {
    setSnack({ ...snack, [event.target.id]: event.target.value });
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={snack.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          type="text"
          pattern="http[s]*://.+"
          required
          value={snack.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <label htmlFor="fiber">Fiber:</label>
        <input
          id="fiber"
          type="number"
          name="fiber"
          value={snack.fiber}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="protein">Protein:</label>
        <input
          id="protein"
          type="number"
          name="protein"
          value={snack.protein}
          required
          onChange={handleTextChange}
        />
        <label htmlFor="added_sugar">Added_Sugar:</label>
        <input
          id="added_sugar"
          type="number"
          name="added_sugar"
          value={snack.added_sugar}
          required
          onChange={handleTextChange}
        />

        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default SnackNewForm;