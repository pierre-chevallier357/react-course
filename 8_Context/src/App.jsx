import Content from "./components/Content/Content";
import ThemeContextProvider from "./context/ThemeContext";

export default function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Content />
      </ThemeContextProvider>
    </div>
  );
}
