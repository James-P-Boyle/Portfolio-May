/* import logo from "./logo.svg"; */
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
/* COMPONENTS */
import Projects from "./components/Projects";
import NavComponent from "./components/NavComponent";
import Home from "./components/Home";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import ToggleDarkIcon from "./components/ToggleDarkIcon";
//CONTEXT
import { ToggleContext } from "./components/ToggleContext";

function App() {
  const [toggleDark, setToggleDark] = useState(false);
  console.log(toggleDark);
  return (
    <>
      <ToggleContext.Provider value={{ toggleDark, setToggleDark }}>
        <div className={toggleDark ? "dark" : ""}>
          <ToggleDarkIcon />

          <div class="flex md:flex-row-reverse flex-wrap dark:bg-gray-900 h-screen ">
            <NavComponent />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/techstack" element={<TechStack />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </ToggleContext.Provider>
    </>
  );
}

export default App;
