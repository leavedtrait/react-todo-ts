import { useState } from "react"

export default function TodoForm(){
    const [input,setInput] = useState("");
    return(
        <div>
            <form action="" className=" space-x-3 flex ">
                <input type="submit" value={input} placeholder="Enter a todo" className=" border border-blue-500 w-40 rounded-md " />
                <button type="submit">
                    Add
                </button>
            </form>
        </div>
    )

}