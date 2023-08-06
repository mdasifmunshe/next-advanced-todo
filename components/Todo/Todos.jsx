'use client';

import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';
import {
  TrashIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/solid';
import { getAllTodos, deleteTodo } from '@/lib/todo';
import Option from './Option';
import Error from '../Error';
import Loading from '../Loading';
import UpdateTodoModal from '../Popover/UpdateTodoModal';

export default function Todos(props) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['todos'],
    queryFn: getAllTodos,
    initialData: props.todos,
  });

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (id) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  if (isError) return <Error />;
  if (isLoading || !data) return <Loading />;

  return data?.map((todo) => (
    <div
      key={todo.id}
      className="col-span-full flex flex-col rounded-lg border border-slate-200 bg-white shadow-lg sm:col-span-6 xl:col-span-4"
    >
      <div className="px-4 pb-4 pt-1">
        <header className="mb-2 flex items-start justify-end">
          {/* Menu button */}
          {/* <Option id={todo.id} /> */}
          <UpdateTodoModal
            id={todo.id}
            title={todo.title}
            description={todo.description}
          />
          <TrashIcon
            className="h-6 w-6 hover:cursor-pointer"
            disabled={isLoading}
            onClick={() => mutate(todo.id)}
          />
        </header>
        <div className="mb-2 text-2xl font-semibold text-slate-800">
          {todo.title}
        </div>
        {/* Todo Status */}
        <div className="mb-1 text-xs font-semibold uppercase text-slate-400">
          Status
        </div>
        <div className="flex items-start">
          <div className="mr-2 text-justify text-lg font-normal text-slate-800">
            {todo.description}
          </div>
        </div>
      </div>
    </div>
  ));
}
