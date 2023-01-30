import { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

function SnackNewForm(){
    const [snack, setSnack] = useState([{
        name: "",
        fiber: "",
        protein: "", 
        added_sugar: "",
        is_healthy: false, 
        image: 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
      }]);


      let navigate = useNavigate();

      const addSnacks = (newSnack) => {
        axios
          .post(`${API}/snacks`, newSnack)
          .then(() => {
              navigate(`/snacks`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn('catch', c));
      };

      const handleTextChange = (i , e , s) => {
        let temp = [...snack]
        temp[i][s] = e.target.value;
        setSnack(temp)
       };

       const newRow = () => {
        setSnack([...snack, {
            name: "",
            fiber: "",
            protein: "", 
            added_sugar: "",
            is_healthy: false, 
            image: 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
        }])
      }

      const handleSubmit = (event) => {
        event.preventDefault();
        for(let i = 0; i < snack.length; i++){
          addSnacks(snack[i])
        }
      };


    //   name: "",
    //   fiber: "",
    //   protein: "", 
    //   added_sugar: "",
    //   is_healthy: false, 
    //   image: ""

console.log(snack)


      return (
        <div className="New">
          <form onSubmit={handleSubmit}>
           {snack.map((x, i) => {
            return(
            <div>
              <label htmlFor='name'>Name: </label>
              <input
              type="text"
              id="name"
              onChange={(e) => handleTextChange(i, e, 'name')}
              value={x?.name}
              />
               <label htmlFor='fiber'>Fiber: </label>
              <input
              type="number"
              id="fiber"
              min="0"
              onChange={(e) => handleTextChange(i, e, 'fiber')}
              value={x?.fiber}
              />
              <label htmlFor='protein'>Protein: </label>
              <input
              type="number"
              id="protein"
              min="0"
              onChange={(e) => handleTextChange(i, e, 'protein')}
              value={x?.protein}
              />
              <label htmlFor='sugar'>Sugar: </label>
              <input
              type="number"
              id="sugar"
              min="0"
              onChange={(e) => handleTextChange(i, e, 'added_sugar')}
              value={x?.added_sugar}
              />
              <label htmlFor='image'>Image: </label>
              <input
              id="image"
              type="text"
              pattern="http[s]*://.+"
              value={x?.image}
              placeholder="http://"
              onChange={(e) => handleTextChange(i, e, 'image')}
              />
            </div>
            )
           })}
           <p onClick={newRow}>Add new row</p>
           <input type="submit" />
          </form>
          <Link to={`/snacks`}>
            <button>Nevermind!</button>
          </Link>
        </div>
      );


}

export default SnackNewForm