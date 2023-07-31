'use client'

import * as yup from "yup";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from "@/lib/todo";

export default function AddTodoForm() {
    const router = useRouter()
    const [textarea, setTextarea] = useState('')

    const handleChange = (event) => {
        setTextarea(event.target.value)
    }

    const schema = yup.object().shape({
        title: yup.string().required(),
        description: yup.string().required(),
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const queryClient = useQueryClient()
    const mutation = useMutation({
        mutationFn: (data) => addTodo(data),
        onSuccess: () => {
            queryClient.invalidateQueries(['todos']), router.push('/dashboard'), reset()
        },
        retry: 3,
    })

    return (
        <div className="w-full max-w-md flex justify-center items-center">
            <form onSubmit={handleSubmit(mutation.mutate)} className="w-full bg-white shadow-md rounded px-4 pb-4 pt-4 md:px-8 md:pb-4 md:pt-6 md:mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        {...register("title")}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-black shadow focus:outline-none"
                        id="title"
                        type="text"
                        placeholder="Title"
                        required
                    />
                    {/* <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" /> */}
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        {...register("description")}
                        value={textarea}
                        className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-black shadow focus:outline-none"
                        id="description"
                        rows={8}
                        placeholder="Description"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-between w-full">
                    <button type="submit" className="bg-transparent w-full hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded">Add Todo</button>
                </div>
            </form>
        </div>

    )
}
