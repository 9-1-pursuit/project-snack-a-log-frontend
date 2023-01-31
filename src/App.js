import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";
import Home from "./pages/Home";
import Show from "./pages/Show";
import NavBar from "./Components/NavBar";
import New from "./pages/New";
import Index from "./pages/Index";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Index/>} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="/error" elememt={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
