import { authOptions } from '../api/auth/[...nextauth]/authOptions';
import { getServerSession } from 'next-auth/next';
import Todos from '@/components/Todo/Todos';
import AddTodoModal from '@/components/Popover/AddTodoModal';
import { todoByParam } from '@/lib/todo';
import { userByParam } from '@/lib/user';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/api/auth/signin?callbackUrl=/dashboard');
  }
  const param = session?.user.email;
  const user = await userByParam(param);

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
        {/* <Todos todos={initialData} /> */}
        <Todos user={user} />
      </div>
    </>
  );
}
