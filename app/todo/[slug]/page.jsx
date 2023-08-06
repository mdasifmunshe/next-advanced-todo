import { todoById } from '@/lib/todo';

export default async function Todo({ params: { slug } }) {
  const todoData = todoById(slug);
  const todo = await todoData;

  return (
    <main>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
    </main>
  );
}
