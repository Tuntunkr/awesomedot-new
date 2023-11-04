import { Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./components/Card";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./pages/Project";
import Learn from "./pages/Learn";
import Articles from "./pages/Articles";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
      {/* <Button />
      <Article /> */}
    </>
  );
}

export default App;
