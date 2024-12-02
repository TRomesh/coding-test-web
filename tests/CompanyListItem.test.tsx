import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CompanyListItem } from "../components/companies/CompanyListItem";

describe("CompanyListItem", () => {
  const companyProps = {
    companyId: 1,
    logoLightUrl: "/test-logo.png",
    companyName: "Example Corp",
    description:
      "Example Corp is a leading entity in providing exemplary services. More details here.",
    liveUrl: "https://www.examplecorp.com",
  };

  it("renders the component with given properties", () => {
    render(<CompanyListItem {...companyProps} />);

    expect(screen.getByText("Example Corp")).toBeInTheDocument();

    const logo = screen.getByAltText("Example Corp logo");
    expect(logo).toHaveAttribute(
      "src",
      "/_next/image?url=%2Ftest-logo.png&w=256&q=75"
    );
    expect(logo).toHaveAttribute("width", "100");
    expect(logo).toHaveAttribute("height", "100");

    expect(
      screen.getByText(
        "Example Corp is a leading entity in providing exemplary services...."
      )
    ).toBeInTheDocument();
  });

  it("creates a link to the correct company detail page", () => {
    render(<CompanyListItem {...companyProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/company/1");
  });

  it("displays no description when description is empty", () => {
    const newProps = { ...companyProps, description: "" };
    render(<CompanyListItem {...newProps} />);
    expect(screen.queryByText("....")).not.toBeInTheDocument();
  });
});
