import { Link } from "react-router-dom";

export default function NavComponent() {
  return (
    <div class="w-full md:w-1/5 px-4 text-center bg-white dark:bg-gray-900 fixed bottom-0 md:pt-2 md:top-0 md:left-0 h-17 md:h-screen md:border-gray-600 z-10">
      <div class="md:relative mx-auto lg:px-6">
        <ul class="list-reset flex flex-row md:flex-col text-center md:text-left">
          <li class="flex-1">
            <Link
              to="/"
              class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
            >
              <i class="fa fa-home pr-0 md:pr-3 text-pink-500 hover:text-pink-400"></i>
              <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Home
              </span>
            </Link>
          </li>

          <li class="mr-3 flex-1">
            <Link
              to="/about"
              class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
            >
              <i class="fa fa-question-circle pr-0 md:pr-3 text-pink-500 hover:text-pink-400"></i>
              <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                About
              </span>
            </Link>
          </li>
          <li class="mr-3 flex-1">
            <Link
              to="/techstack"
              class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-pink-600"
            >
              <i class="fa fa-laptop pr-0 md:pr-3 text-pink-500 hover:text-pink-400"></i>
              <span class="pb-1 md:pb-0 text-xs md:text-base text-white md:font-bold block md:inline-block">
                Stack
              </span>
            </Link>
          </li>
          <li class="mr-3 flex-1">
            <Link
              to="/projects"
              class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
            >
              <i class="fa fa-folder pr-0 md:pr-3 text-pink-500 hover:text-pink-400"></i>
              <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Projects
              </span>
            </Link>
          </li>
          <li class="mr-3 flex-1">
            <Link
              to="/contact"
              class="block py-1 md:py-3 pl-1 align-middle text-gray-800 no-underline hover:text-pink-500 border-b-2 border-gray-800 md:border-gray-900 hover:border-pink-500"
            >
              <i class="fa fa-user-circle pr-0 md:pr-3 text-pink-500 hover:text-pink-400"></i>
              <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-600 md:text-gray-400 block md:inline-block">
                Contact
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
