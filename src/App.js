import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Budget from "./components/Budget";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </Router>
  );
}
export default App;
