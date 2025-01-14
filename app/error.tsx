'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center">
      <div className="text-center p-8">
        <h2 className="text-2xl font-serif font-bold mb-4">Something went wrong!</h2>
        <button
          onClick={() => reset()}
          className="bg-black text-white px-6 py-3 font-serif hover:bg-gray-800"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
