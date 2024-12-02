import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GlobeIcon,
} from "lucide-react";
import { Company } from "../../pages/api/types";

export const CompanyCard = ({
  companyName,
  logoLightUrl,
  companyTicker,
  description,
  reportingCurrency,
  infoUrl,
  liveUrl,
  events,
}: Pick<
  Company,
  | "companyName"
  | "logoLightUrl"
  | "companyTicker"
  | "description"
  | "reportingCurrency"
  | "infoUrl"
  | "liveUrl"
  | "events"
>) => {
  return (
    <div className="max-w-4xl mx-auto p-6 border rounded-2xl">
      <div className="flex items-center gap-6 mb-8">
        <div className="border w-36 h-36 rounded-2xl flex items-center justify-center">
          <Image
            src={logoLightUrl}
            alt={`${companyName} logo`}
            width={100}
            height={100}
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{companyName}</h1>
          <p className="text-lg text-muted-foreground">{companyTicker}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-xl font-semibold mb-2">About</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Details</h2>
          <p>
            <strong>Reporting Currency:</strong> {reportingCurrency}
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href={infoUrl}
              className="flex items-center text-primary hover:underline">
              <GlobeIcon className="w-4 h-4 mr-1" />
              Company Website
            </Link>
            <Link
              href={liveUrl}
              className="flex items-center text-primary hover:underline">
              <ExternalLinkIcon className="w-4 h-4 mr-1" />
              Investor Relations
            </Link>
          </div>
        </div>
      </div>

      {events.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Latest Event</h2>
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-semibold">{events[0].eventTitle}</h3>
            <p className="text-muted-foreground flex items-center mt-2">
              <CalendarIcon className="w-4 h-4 mr-2" />
              {new Date(events[0].eventDate).toLocaleDateString()}
            </p>
            <Link
              href={events[0].reportUrl}
              className="flex items-center text-primary hover:underline mt-2">
              <FileTextIcon className="w-4 h-4 mr-2" />
              View Report
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
