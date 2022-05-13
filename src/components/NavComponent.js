import { NavLink } from "react-router-dom";

export default function NavComponent() {
  return (
    <div className="w-full md:w-1/5 px-4 text-center bg-white dark:bg-gray-900 fixed bottom-0  md:pt-2 md:top-0 md:left-0 h-17 md:h-screen md:border-gray-600 z-10">
      <div className="md:relative mx-auto lg:px-6">
        <ul className="list-reset flex flex-row md:flex-col text-center md:text-left xl:mt-10">
          <li className="flex-1">
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
              to="/"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
            >
              <i className="fa fa-home pr-0 md:pr-3 text-pink-500 hover:text-pink-400"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Home
              </span>
            </NavLink>
          </li>

          <li className="mr-3 flex-1">
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
              to="/about"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
            >
              <i className="fa fa-question-circle pr-0 md:pr-3 text-pink-500 hover:text-pink-400"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                About
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1">
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
              to="/techstack"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
            >
              <i className="fa fa-laptop pr-0 md:pr-3 text-pink-500 hover:text-pink-400"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">
                Stack
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1">
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
              to="/projects"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
            >
              <i className="fa fa-folder pr-0 md:pr-3 text-pink-500 hover:text-pink-400"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Projects
              </span>
            </NavLink>
          </li>
          <li className="mr-3 flex-1">
            <NavLink
              style={({ isActive }) => ({ color: isActive ? "#ee3d89" : "" })}
              to="/contact"
              className="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
            >
              <i className="fa fa-user-circle pr-0 md:pr-3 text-pink-500 hover:text-pink-400"></i>
              <span className="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Contact
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
