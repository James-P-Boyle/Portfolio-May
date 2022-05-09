/* import logo from "./logo.svg"; */

import { Route, Routes } from "react-router-dom";
/* COMPONENTS */
import Projects from "./components/Projects";
import NavComponent from "./components/NavComponent";
import Home from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <NavComponent />
      <div class="flex md:flex-row-reverse flex-wrap">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
