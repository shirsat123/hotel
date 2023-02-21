import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Admin from "./pages/admin";
import NavBar from "./pages/navBar";
import BookEntry from "./pages/bookEntry";
import Home from "./pages/home";
import ContactUs from "./pages/contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route exact path="/bookEntry" element={<BookEntry />} />
          <Route path="/contact" element={<ContactUs/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
