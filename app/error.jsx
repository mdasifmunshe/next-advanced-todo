'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
      <Link
        href="/dashboard"
        className="rounded border border-gray-400 bg-white px-4 py-2 font-semibold text-gray-800 shadow hover:bg-gray-100 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-900"
      >
        Back To Dashboard
      </Link>
    </div>
  );
}
