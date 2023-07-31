import AddTodoForm from "@/components/AddTodo/AddTodoForm"

export default function AddTodo() {
    return (
        <>
            <div className="mb-4 lg:mb-8 sm:flex sm:items-center sm:justify-center">
                {/* Action Button */}
                <div className="grid grid-flow-col justify-center sm:auto-cols-max">
                    {/* Add todo button */}
                    <div className="text-indigo-600 font-bold text-xl">Add TODO From</div>
                </div>
            </div>
            <div className="mb-4 lg:mb-8 flex items-center justify-center">
                <AddTodoForm />
            </div>
        </>
    )
}
