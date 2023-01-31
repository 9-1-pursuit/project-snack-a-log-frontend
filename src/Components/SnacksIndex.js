import { Link } from "react-router-dom";
import { useContextProvider } from "../Provider/Provider.js";
import SnackCard from "./SnackCard.js"
import "./SnacksIndex.css";

export default function SnacksIndex() {
  const { snacks } = useContextProvider();
  
  return (
    <div className="index">
      <h2>Snacks</h2>

      {/* aside1 can be dead space for pop up menu */}
      <aside className="index-left">
        <h3>Misc.</h3>
      </aside>
      
      {/* snack icon */}
      <section className="index-snack">
        {
          snacks.map(snack => 
          <SnackCard 
          key={snack.id}
          snack={snack} />)
        }
      </section>

      {/* aside 2 for misc data */}
      <aside className="index-right">
        <h3>Misc.</h3>
      </aside>

      {/* add (+) botton/icon/link */}
      <Link to="/snacks/new">
        <img src="https://www.pngkey.com/png/detail/136-1362850_this-free-icons-png-design-of-plus-icon.png" alt="plus-sign" />
      </Link>
    </div>
  );
}
