'use client'

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { Fragment, useState } from 'react';
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog, Transition } from '@headlessui/react';
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateTodo } from "@/lib/todo";

export default function UpdateTodoModal({ id, title, description }) {
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)

    const openModal = () => setIsOpen(true)

    const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: (data) => updateTodo(data),
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']), reset()
        },
        retry: 3,
    })

    return (
        <>
            <button
                type="button"
                onClick={openModal}
                className={`flex items-center h-full justify-center rounded-md text-sm`}
            >
                <EditInactiveIcon
                    className="mr-2 h-6 w-6"
                    aria-hidden="true"
                />
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
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white px-0 pb-0 pt-6 mt-5 md:p-6 md:m-0 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-center text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Update Todo
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <form onSubmit={handleSubmit(mutate)} className="mb-0 rounded bg-white shadow-md px-6 pb-4 pt-4 md:px-8 md:pb-4 md:pt-6 md:mb-4">
                                            <div className="mb-4">
                                                <label
                                                    className="mb-2 block text-sm font-bold text-black"
                                                    htmlFor="title"
                                                >
                                                    Title
                                                </label>
                                                <input
                                                    {...register("title")}
                                                    defaultValue={title}
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
                                                    {...register("description")}
                                                    defaultValue={description}
                                                    className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-black shadow focus:outline-none"
                                                    id="description"
                                                    rows={8}
                                                    placeholder="Description"
                                                />
                                            </div>

                                            <div className="flex justify-between">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
                                                >
                                                    <XMarkIcon className="h-4 w-4" />
                                                    Discard
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                                    onClick={closeModal}
                                                >
                                                    <CheckIcon className="h-4 w-4" />
                                                    Save
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
    )
}

function EditActiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditInactiveIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}