'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
        <p className="text-gray-500 mb-6">An unexpected error occurred.</p>
        <button
          onClick={reset}
          className="px-6 py-2.5 text-sm font-semibold rounded-full text-white bg-gray-900 hover:bg-gray-700 transition-all"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
