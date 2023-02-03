import { Link } from "react-router-dom";
import welcome from "../assets/Welcome.png";

export default function Home() {
  return (
    <div id="home">
      {/* <h1>Welcome to Snax!</h1> */}
      <img src={welcome} alt="welcome" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Augue eget arcu
        dictum varius duis at consectetur lorem donec.{" "}
        <Link id="hint" to="/snacks/new">
          d3v$f4v$
        </Link>{" "}
        Velit laoreet id donec ultrices tincidunt. Elementum facilisis leo vel
        fringilla est ullamcorper eget. At in tellus integer feugiat scelerisque
        varius morbi enim. Volutpat commodo sed egestas egestas fringilla.
      </p>
      {/* <img src="https://media0.giphy.com/media/WQZJkXIPyxsFW4wuaC/giphy.gif?cid=790b76115edec05a6fac57a8cd9d14772b2b9a7ee9004857&rid=giphy.gif&ct=s" alt="snack all day" height="340px" /> */}
    </div>
  );
}
