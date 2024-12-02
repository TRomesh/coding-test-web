import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CompanyCard } from "../components/companies/CompanyCard";

describe("CompanyCard", () => {
  const companyProps = {
    companyId: 1,
    companyName: "Tech Innovate",
    companyCountry: "USA",
    companyTicker: "TINNV",
    displayName: "Tech Innovate Inc.",
    infoUrl: "https://www.techinnovate.com",
    liveUrl: "https://investors.techinnovate.com",
    logoLightUrl: "/logo-light.png",
    logoDarkUrl: "/logo-dark.png",
    iconUrl: "/icon-url.png",
    description: "Leading tech innovator in AI solutions.",
    reportingCurrency: "USD",
    colorSettings: {
      brandColor: "#0055ff",
    },
    events: [
      {
        audioUrl: "https://www.techinnovate.com/audios/conference-audio",
        reportUrl: "https://www.techinnovate.com/reports/annual-conference",
        pdfUrl: "https://www.techinnovate.com/reports/annual-conference.pdf",
        eventId: 101,
        eventTitle: "Annual Tech Conference",
        eventDate: "2023-09-15T09:00:00Z",
        fiscalPeriod: "Q3",
        fiscalYear: "2023",
      },
    ],
    isins: ["US0000000001"],
  };

  it("renders company information correctly", () => {
    render(<CompanyCard {...companyProps} />);
    expect(screen.getByText(companyProps.companyName)).toBeInTheDocument();
    expect(screen.getByText(companyProps.companyTicker)).toBeInTheDocument();
    expect(screen.getByText(companyProps.description)).toBeInTheDocument();
    expect(
      screen.getByText(companyProps.reportingCurrency)
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Company Website" })
    ).toHaveAttribute("href", companyProps.infoUrl);
    expect(
      screen.getByRole("link", { name: "Investor Relations" })
    ).toHaveAttribute("href", companyProps.liveUrl);
  });

  it("renders event information if events are available", () => {
    render(<CompanyCard {...companyProps} />);
    const event = companyProps.events[0];
    expect(screen.getByText(event.eventTitle)).toBeInTheDocument();
    expect(
      screen.getByText(new Date(event.eventDate).toLocaleDateString())
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Report" })).toHaveAttribute(
      "href",
      event.reportUrl
    );
  });

  it("does not render event section when events are empty", () => {
    const newProps = { ...companyProps, events: [] };
    render(<CompanyCard {...newProps} />);
    expect(screen.queryByText("Latest Event")).not.toBeInTheDocument();
  });

  it("renders the logo with correct alt text and dimensions", () => {
    render(<CompanyCard {...companyProps} />);
    const logo = screen.getByAltText(`${companyProps.companyName} logo`);
    expect(logo).toHaveAttribute(
      "src",
      "/_next/image?url=%2Flogo-light.png&w=256&q=75"
    );
    expect(logo).toHaveAttribute("width", "100");
    expect(logo).toHaveAttribute("height", "100");
  });
});
