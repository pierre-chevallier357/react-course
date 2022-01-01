import Modal from "./components/Modal/Modal";
import Accordion from "./components/Accordion/Accordion";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Modal />
      <Accordion />
    </div>
  );
}
