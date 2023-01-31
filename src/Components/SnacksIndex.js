import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider.js";
import SnackCard from "./SnackCard.js"
import "./SnacksIndex.css";

export default function SnacksIndex() {
  const { snacks } = useContextProvider();
  
  return (
    <div className="index">
      
      {/* snack icon */}
      <section className="index-snack">
        {
          snacks.map(snack => <SnackCard snack={snack} />)
        }
      </section>

      {/* add (+) botton/icon/link */}
      <Link to="/snacks/new">
        <img src="https://www.pngkey.com/png/detail/136-1362850_this-free-icons-png-design-of-plus-icon.png" alt="plus-sign" />
      </Link>
    </div>
  );
}
