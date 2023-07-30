import Posts from "@/components/Post/Posts"
import { getAllTodos } from "@/lib/todo"

export default async function Dashboard() {
  const todoData = getAllTodos()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Posts props={todoData} />
    </main>
  )
}
