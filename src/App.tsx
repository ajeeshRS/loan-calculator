import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" index element={<Home />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
