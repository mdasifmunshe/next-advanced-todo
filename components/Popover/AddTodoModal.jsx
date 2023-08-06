'use client';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { Fragment, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from '@/lib/todo';

export default function AddTodoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [textarea, setTextarea] = useState('');

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const handleChange = (event) => {
    setTextarea(event.target.value);
  };

  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: (data) => addTodo(data),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']), reset();
    },
    retry: 3,
  });

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="btn bg-indigo-500 text-white hover:bg-indigo-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-opacity-75"
      >
        <svg
          className="h-4 w-4 shrink-0 fill-current opacity-50"
          viewBox="0 0 16 16"
        >
          <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
        </svg>
        <span className="ml-2 block">Add Todo</span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-2 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="mt-5 w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-0 pb-0 pt-6 text-left align-middle shadow-xl transition-all md:m-0 md:p-6">
                  <Dialog.Title
                    as="h3"
                    className="text-center text-lg font-medium leading-6 text-gray-900"
                  >
                    Add Todo
                  </Dialog.Title>
                  <div className="mt-2">
                    <form
                      onSubmit={handleSubmit(mutate)}
                      className="mb-0 rounded bg-white px-6 pb-4 pt-4 shadow-md md:mb-4 md:px-8 md:pb-4 md:pt-6"
                    >
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-black"
                          htmlFor="title"
                        >
                          Title
                        </label>
                        <input
                          {...register('title')}
                          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-black shadow focus:outline-none"
                          id="title"
                          type="text"
                          placeholder="Title"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          className="mb-2 block text-sm font-bold text-black"
                          htmlFor="description"
                        >
                          Description
                        </label>
                        <textarea
                          {...register('description')}
                          value={textarea}
                          className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-black shadow focus:outline-none"
                          id="description"
                          rows={8}
                          placeholder="Description"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="flex justify-between">
                        <button
                          type="button"
                          className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          <XMarkIcon className="h-4 w-4" />
                          Close
                        </button>
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          <CheckIcon className="h-4 w-4" />
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
