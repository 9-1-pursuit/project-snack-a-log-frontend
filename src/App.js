import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Edit from "./pages/Edit";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Index from "./pages/Index";
import NavBar from "./Components/NavBar";
import New from "./pages/New";
import Show from "./pages/Show";

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/snacks" element={<Index />} />
          <Route path="/snacks/new" element={<New />} />
          <Route path="/snacks/:id" element={<Show />} />
          <Route path="/snacks/:id/edit" element={<Edit />} />
          <Route path="/error" elememt={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
