import axios from "axios";
import { useEffect, useState } from "react";
import TechCards from "../components/TechCards";

export default function TechStack() {
  const [stack, setStack] = useState([]);
  /* const [loading, setLoading] = useState(false); */

  useEffect(() => {
    /* setLoading(true);  */
    axios
      .get("http://localhost:4000/tech")
      .then((res) => {
        setStack(res.data);
        /*         setLoading(false); */
      })
      .catch(console.error);
  }, []);

  return (
    <div className="w-full md:w-4/5 border border-blue-600 min-h-screen grid items-center">
      <div className="border-green-400 border mx-2">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
          {stack.map((item, index) => (
            <TechCards key={index} svg={item.svg} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
}
