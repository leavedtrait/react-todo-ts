import TodoItem from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { dummyData } from "./data/todo";

export default function App() {
  return (
    <main className="py-10 h-screen w-full space-y-3 flex items-center flex-col text-slate-50 ">
      <h1 className=" font-bold text-3xl ">Your Todos</h1>
      <div className="max-w-xl mx-auto flex flex-col space-y-3  ">
        <div className="flex flex-col items-center">
          <TodoForm />
        </div>
        <div className=" space-y-2  flex-col items-center justify-center " >
          {dummyData.map(
            todo => (
              <TodoItem todo={todo}></TodoItem>
            )
          )}
        </div>
      </div>
    </main>
  )

}