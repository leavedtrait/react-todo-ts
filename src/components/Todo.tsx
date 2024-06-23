import { Todo } from "../types/todos";

type todoProps = {
    todo: Todo
}

export default function TodoItem({ todo }: todoProps) {
    return (
        
            <div className="flex items-center justify-center" >
                
                <p key={todo.id} className="text-lg  ">
                    {todo.title}
                </p>
            </div>
    )
}


