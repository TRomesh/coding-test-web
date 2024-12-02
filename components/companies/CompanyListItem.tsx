import React from "react";
import Image from "next/image";
import { Company } from "../../pages/api/types";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export const CompanyListItem = ({
  companyId,
  logoLightUrl,
  companyName,
  description,
}: Pick<
  Company,
  "companyId" | "liveUrl" | "logoLightUrl" | "companyName" | "description"
>) => {
  const truncatedDescription = description
    ? description.split(".")[0] + "...."
    : "";
  return (
    <Link
      href={`/company/${companyId}`}
      className="flex items-center justify-between p-4 rounded-lg hover:bg-muted transition-colors border-b border-gray-200 last:border-b-0">
      <div className="flex items-center gap-4">
        <div className="border w-16 h-16 rounded-2xl">
          <div className="w-16 h-16 flex items-center justify-center p-2">
            <Image
              src={logoLightUrl}
              alt={`${companyName} logo`}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div>
          <h3 className="font-semibold">{companyName}</h3>
          <p className="text-sm text-muted-foreground">
            {truncatedDescription}
          </p>
        </div>
      </div>
      <ChevronRight className="w-6 h-6 text-muted-foreground flex-shrink-0" />
    </Link>
  );
};
