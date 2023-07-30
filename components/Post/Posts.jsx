export default async function Posts({ props }) {
  const todos = await props

  return (
    <main>
      {todos.map(todo => (
        <div key={todo.id} className="border-2 border-blue-800">
          <div>{todo.title}</div>
          <div>{todo.description}</div>
        </div>
      ))}
    </main>
  )
}
