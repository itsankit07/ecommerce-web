import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";

function App() {
  window.scroll(0, 0);
  return (
    <Router>
      <Body />
    </Router>
  );
}

export default App;
