import Navbar from "./components/Navbar/Navbar";
import Home from "./containers/Home/Home";
import { Route, Routes } from "react-router-dom";
import AddArticle from "./containers/AddArticle/AddArticle";
import Contact from "./containers/Contact/Contact";
import Article from "./containers/Article/Article";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/write" element={<AddArticle />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/article/:slug" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
