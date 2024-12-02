import { AlertCircle, AlertTriangle } from "lucide-react";
import React from "react";

interface AlertMessageProps {
  message: string;
  type: "error" | "warning";
}

export const AlertMessage: React.FC<AlertMessageProps> = ({
  message,
  type,
}) => {
  const isError = type === "error";

  return (
    <div
      className={`${
        isError
          ? "bg-destructive/15 border-red-400 text-red-400"
          : "bg-warning/15 border-orange-400 text-orange-400"
      } border px-4 py-3 rounded-2xl relative`}
      role="alert">
      <div className="flex items-center">
        {isError ? (
          <AlertCircle
            data-testid="icon"
            className="w-5 h-5 mr-2 text-red-400"
          />
        ) : (
          <AlertTriangle
            data-testid="icon"
            className="w-5 h-5 mr-2 text-orange-400"
          />
        )}
        <strong className="font-bold">{isError ? "Error:" : "Warning:"}</strong>
        <span
          className={`block sm:inline ml-2 text-${
            isError ? "red-400" : "orange-400"
          }`}>
          {message ||
            (isError ? "An error occurred." : "A warning was issued.")}
        </span>
      </div>
      {isError && (
        <p className={`mt-2 text-${isError ? "red-400" : "orange-400"}`}>
          Please try again later.
        </p>
      )}
    </div>
  );
};
