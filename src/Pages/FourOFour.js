import milk from "../assets/404-milk.png";
import toast from "../assets/404-toast.png";
import "./FourOFour.css";

export default function FourOFour() {
  return (
    <div className="error">
      <div>
        <img id="milk" src={milk} alt="error" />
        <img id="toast" src={toast} alt="error" />
      </div>
    </div>
  );
}