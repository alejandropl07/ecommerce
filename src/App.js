import "./App.css";
import CheckoutPage from "./components/CheckoutPage";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Products />} />
          <Route exact path="/checkout-page" element={<CheckoutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
