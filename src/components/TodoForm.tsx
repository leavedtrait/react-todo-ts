import { useState } from "react";
import { dummyData } from "../data/todo";

export default function TodoForm() {
  const [input, setInput] = useState("");
  return (
    <div>
      <form action="" className=" space-x-3 flex ">
        <input
          type="text"
          placeholder="Enter a todo"
          className="border border-blue-500 w-40 rounded-md"
          onChange={(e) => {
            setInput(e.target.value);
            // console.log(e);
          }}
        />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            dummyData.push({
              id: `id_${dummyData.length + 1}`,
              title: input,
              completed: false,
            });
            console.log(dummyData);

            //here is where u would put the post request
          }}
          className="border border-blue-500 px-4 py-2 rounded-md bg-blue-500 text-white"
        >
          Add
        </button>
      </form>
    </div>
  );
}