import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import ContactUs from "./pages/ContactUs";

import Login from "./pages/Login";
import Register from "./pages/Register";
import OrderNow from "./pages/OrderNow";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <BrowserRouter>
      <div
        style={{
          backgroundColor: dark ? "black" : "white",
          color: dark ? "white" : "black",
          minHeight: "100vh",
        }}
      >
        <Header dark={dark} setDark={setDark} />
        <main className="container py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Contact-Us" element={<ContactUs />} />
            <Route path="/Product" element={<Product />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/OrderNow" element={<OrderNow />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
