import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen w-screen dark:bg-gray-950 dark:text-white">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4">
        <h2 className="text-2xl font-bold">Not Found</h2>
        <p>Could not find requested resource</p>
        <p>
          <Link
            href="/dashboard"
            className="rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-900"
          >
            Back To Dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}
