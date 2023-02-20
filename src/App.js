import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./pages/registrationForm";
import Admin from "./pages/admin";
import NavBar from "./pages/navBar";
import EntryBook from "./pages/entryBook";
import Home from "./pages/home";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/registrationForm" element={<RegistrationForm />} />
          <Route path="/admin" element={<Admin />}/>
          <Route exact path="/entrybook" element={<EntryBook />} />
         
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
