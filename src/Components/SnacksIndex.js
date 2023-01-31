import { useContextProvider } from "../Provider/Provider.js";
import "./SnacksIndex.css";

export default function SnacksIndex() {
  const { snacks } = useContextProvider();
  
  return (
    <div className="index">
      <h2>Index</h2>
    </div>
  );
}
