'use client'

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addTodo } from "@/lib/todo";

export default function AddTodoForm() {
    const router = useRouter()

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
    })

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit(mutation.mutate)} className="flex flex-col gap-2 justify-center items-center">
                <h2>Add Todo Form</h2>
                <br />

                <input {...register("title")} placeholder="title" type="text" required />
                <br />

                <input
                    {...register("description")}
                    placeholder="description"
                    type="text"
                    required
                />
                <br />

                <button type="submit" className="bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded">Add Todo</button>
            </form>
        </div>
    )
}
