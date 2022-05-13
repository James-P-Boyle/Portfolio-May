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
import ComposeProject from "./components/ComposeProject";
//CONTEXT
import { ToggleContext } from "./components/ToggleContext";

function App() {
  const [toggleDark, setToggleDark] = useState(true);

  return (
    <>
      <ToggleContext.Provider value={{ toggleDark, setToggleDark }}>
        <div className={toggleDark ? "dark" : ""}>
          <ToggleDarkIcon />

          <div className="flex md:flex-row-reverse flex-wrap bg-gray-100 dark:bg-gray-900 w-full">
            <NavComponent />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/techstack" element={<TechStack />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/compose" element={<ComposeProject />} />
            </Routes>
          </div>
        </div>
      </ToggleContext.Provider>
    </>
  );
}

export default App;
