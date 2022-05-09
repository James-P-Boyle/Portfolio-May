import { useContext } from "react";
import { ToggleContext } from "./ToggleContext";

export default function ToggleDarkIcon() {
  const { toggleDark, setToggleDark } = useContext(ToggleContext);
  return (
    <div
      onClick={() => setToggleDark(!toggleDark)}
      className="absolute text-pink-500 border-pink-500 top-5 right-5 border-2 rounded-full px-2 flex hover:text-pink-400 hover:border-pink-400 cursor-pointer"
    >
      <i
        class="fa fa-lightbulb-o fa-2x hover:animate-pulse"
        aria-hidden="true"
      ></i>
    </div>
  );
}
