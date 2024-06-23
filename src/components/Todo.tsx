import { useState } from "react";
import { Todo } from "../types/todos";

type todoProps = {
    todo: Todo
}

export default function TodoItem({ todo }: todoProps) {
   
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked)
        todo.completed =checked
    };
    return (

        <div className="" >
            <div className="flex items-center space-x-2">
            <input type="checkbox" onChange={handleChange} />

            <p  key={todo.id}  className="text-lg">
                {checked ? (
                    <span className="line-through">{todo.title}</span>
                ) : (
                    <span> {todo.title}</span>
                )}
            </p>
            </div>
        </div>
    )
}


