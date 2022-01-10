import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import NotFound from "./components/NotFound/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Services from "./components/Services/Services";
import Development from "./components/Services/Development/Development";
import CyberSecurity from "./components/Services/CyberSecurity/CyberSecurity";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />}>
          <Route path="/services/development" element={<Development />} />
          <Route path="/services/cyber-security" element={<CyberSecurity />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
