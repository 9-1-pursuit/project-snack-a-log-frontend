import { useState, useEffect } from 'react';
import { useNavigate , Link, useParams} from 'react-router-dom';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

function SnackEditForm(){
    let {id} = useParams()

    let navigate = useNavigate();

    const [snack, setSnack] = useState([{
        name: "",
        fiber: "",
        protein: "", 
        added_sugar: "",
        is_healthy: false, 
        image: 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image'
      }]);


      const updateSnacks = (updatedSnack) => {
        axios
          .put(`${API}/snacks/${id}`, updatedSnack)
          .then(
            () => {
              navigate(`/snacks/${id}`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn('catch', c));
      };

      const handleTextChange = (event) => {
        
        setSnack({...snack, [event.target.id]: event.target.value})
       };
    

    useEffect(() => {
        axios.get(`${API}/snacks/${id}`)
        .then(
          (response) => setSnack(response.data),
          (error) => navigate(`/not-found`)
        );
      }, [id, navigate]);


    const handleSubmit = (event) => {
        event.preventDefault();
        updateSnacks(snack,id)
        console.log(snack)  
      };



      return (
        <div className="Edit">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='name'>Name: </label>
              <input
              type="text"
              id="name"
              onChange={ handleTextChange}
              value={snack.name}
              />
               <label htmlFor='fiber'>Fiber: </label>
              <input
              type="number"
              id="fiber"
              min="0"
              onChange={handleTextChange}
              value={snack.fiber}
              />
              <label htmlFor='protein'>Protein: </label>
              <input
              type="number"
              id="protein"
              min="0"
              onChange={ handleTextChange}
              value={snack.protein}
              />
              <label htmlFor='added_sugar'>Sugar: </label>
              <input
              type="number"
              id="added_sugar"
              min="0"
              onChange={handleTextChange}
              value={snack.added_sugar}
              />
              <label htmlFor='image'>Image: </label>
              <input
              id="image"
              type="text"
              pattern="http[s]*://.+"
              value={snack.image}
              placeholder="http://"
              onChange={handleTextChange}
              />
            </div>
            
           <input type="submit" />
          </form>
          <Link to={`/snacks/${id}`}>
            <button>Nevermind!</button>
          </Link>
        </div>
      );
      
      
    }
    
    export default SnackEditForm
    {/* <p onClick={newRow}>Add new row</p> */}