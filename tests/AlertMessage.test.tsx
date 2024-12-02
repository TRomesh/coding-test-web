import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AlertMessage } from "../components/base/AlertMessage";

describe("AlertMessage", () => {
  it("renders error message correctly", () => {
    const errorMessage = "An unexpected error has occurred.";
    render(
      <AlertMessage
        message={errorMessage}
        type="error"
      />
    );

    expect(screen.getByRole("alert")).toHaveClass(
      "bg-destructive/15 border-red-400 text-red-400"
    );
    expect(screen.getByText("Error:")).toBeInTheDocument();
    expect(screen.getByText(errorMessage)).toHaveClass("text-red-400");
    expect(screen.getByTestId("icon")).toHaveClass("text-red-400");
  });

  it("renders warning message correctly", () => {
    const warningMessage = "Please check your input.";
    render(
      <AlertMessage
        message={warningMessage}
        type="warning"
      />
    );

    expect(screen.getByRole("alert")).toHaveClass(
      "bg-warning/15 border-orange-400 text-orange-400"
    );
    expect(screen.getByText("Warning:")).toBeInTheDocument();
    expect(screen.getByText(warningMessage)).toHaveClass("text-orange-400");
    expect(screen.getByTestId("icon")).toHaveClass("text-orange-400");
  });
});
