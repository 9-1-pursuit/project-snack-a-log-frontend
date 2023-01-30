import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit"
import Error from "./pages/Error"
import Home from "./pages/Home"
import Show from "./pages/Show"
import NavBar from "./components/NavBar"
import New from "./pages/New"
import SnackDetails from "./pages/SnackDetails"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Routes>
          <Route to="/" element={<Home/>} />
          <Route to="/snacks" element={<Show />} />
          <Route to="/snacks/new" element={<New />}/>
          <Route to="/snaks/:id" element={<SnackDetails/>} />
          <Route to="/snacks/:id/edit" element={<Edit />} />
          <Route to="/error" elememt={<Error />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
