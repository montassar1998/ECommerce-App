import { Route, Routes } from "react-router-dom";
import "./App.css";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import SignUp from "./pages/SignUp";
=======
import Navbar from 'react-bootstrap/Navbar';
>>>>>>> 657df4c03c4575c60508dca7cea1169c00c8a8f8

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
