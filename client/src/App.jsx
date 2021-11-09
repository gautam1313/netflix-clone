import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
// return <Login />;
// return <Register />;
// return <Watch />;
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movies" element={<Home type="movies" />} />
        <Route path="/series" element={<Home type="series" />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
