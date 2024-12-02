import React from "react";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <svg
          className="animate-spin -ml-1 mr-3 h-10 w-10 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.232 5.789 3.221 7.778l2.779-2.487z"></path>
        </svg>
        <p className="text-center text-lg font-semibold text-blue-600">
          Loading...
        </p>
      </div>
    </div>
  );
};