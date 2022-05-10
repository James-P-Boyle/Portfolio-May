import axios from "axios";
import { useState } from "react";

export default function ComposeProject() {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tech, setTech] = useState("");

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className=" block p-6 rounded-lg shadow-lg bg-white max-w-lg">
        <h1 className="text-2xl mb-3">Compose a new project</h1>
        <form action="http://localhost:4000/projects" method="POST">
          <div className="form-group mb-6">
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="title"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="form-group mb-6">
            <input
              onChange={(e) => setImgUrl(e.target.value)}
              type="text"
              className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="imageUrl"
              name="imageUrl"
              placeholder="ImageUrl"
            />
          </div>

          <div className="form-group mb-6">
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              className="form-control block w-full px-3 py-1.5 text-base
              font-normal text-gray-700 bg-white bg-clip-padding border
              border-solid border-gray-300 rounded transition ease-in-out m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600
              focus:outline-none"
              id="description"
              name="description"
              rows="3"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="form-group mb-6">
            <textarea
              onChange={(e) => setTech(e.target.value)}
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="tech"
              name="tech"
              rows="3"
              placeholder="Tech Stack"
            ></textarea>
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              axios //onchange on inputs + add state
                .post("http://localhost:4000/projects", {
                  title,
                  imgUrl,
                  tech,
                  description,
                })
                .then((res) => console.log(res)) // usenavigate
                .catch((err) => console.log(err));
            }}
            type="submit"
            className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
