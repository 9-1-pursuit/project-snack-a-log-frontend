import { useParams } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const { id } = useParams(); 
  return (
    <div className="form">
      <h2>{id? "Edit": "New"} Form</h2>
      <form>
        <input type="text" />
        <input type="submit" value={id?"Save Changes" :"Add Snack"} />
      </form>
    </div>
  );
}
