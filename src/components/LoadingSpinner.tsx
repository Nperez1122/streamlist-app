import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center" role="status">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 dark:border-blue-400"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}