import { useContext } from "react";
import { ToggleContext } from "./ToggleContext";

export default function ToggleDarkIcon() {
  const { toggleDark, setToggleDark } = useContext(ToggleContext);
  return (
    <div
      onClick={() => setToggleDark(!toggleDark)}
      className="absolute text-pink-500 border-pink-500 top-1 right-1 border-2 rounded-full px-2 flex hover:text-pink-400 hover:border-pink-400 cursor-pointer"
    >
      <i
        class="fa fa-lightbulb-o fa-2x sm:fa hover:animate-pulse"
        aria-hidden="true"
      ></i>
    </div>
  );
}