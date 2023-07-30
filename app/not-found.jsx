import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='dark:bg-gray-950 dark:text-white h-screen w-screen'>
            <div className='flex flex-col justify-center items-center h-full w-full gap-4'>
                <h2 className='text-2xl font-bold'>Not Found</h2>
                <p>Could not find requested resource</p>
                <p>
                    <Link href="/dashboard" className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-900'>Back To Dashboard</Link>
                </p>
            </div>
        </div>
    )
}