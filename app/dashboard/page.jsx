import Todos from '@/components/Todo/Todos';
import AddTodoModal from '@/components/Popover/AddTodoModal';
import { getAllTodos } from '@/lib/todo';

export default async function Dashboard() {
  const initialData = await getAllTodos();

  return (
    <>
      <div className="mb-4 sm:flex sm:items-center sm:justify-end lg:mb-8">
        {/* Action Button */}
        <div className="sticky grid grid-flow-col justify-end sm:auto-cols-max">
          {/* Add todo button */}
          <AddTodoModal />
        </div>
      </div>
      {/* Todo Cards */}
      <div className="grid grid-cols-12 gap-4">
        <Todos todos={initialData} />
      </div>
    </>
  );
}
