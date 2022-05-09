import { useContext } from "react";
import { ToggleContext } from "./ToggleContext";

export default function ToggleDarkIcon() {
  const { toggleDark, setToggleDark } = useContext(ToggleContext);
  return (
    <div
      onClick={() => setToggleDark(!toggleDark)}
      className="absolute dark:text-white dark:border-0 top-1 right-1 border-2 rounded-full px-2 flex  hover:border-pink-400 cursor-pointer transition-all duration-200"
    >
      <i
        class="fa fa-lightbulb-o fa-2x sm:fa hover:animate-pulse"
        aria-hidden="true"
      ></i>
    </div>
  );
}
