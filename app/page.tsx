import React from "react";
import { CompanyListItem } from "../components/companies/CompanyListItem";
import { AlertMessage } from "../components/base/AlertMessage";
import { getCompanies } from "../service/company/company";
import { Suspense } from "react";
import { Loading } from "../components/base/Loading";

export default async function Home() {
  const { companies, error } = await getCompanies();

  if (error) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4">
        <AlertMessage
          type="error"
          message="Failed to fetch companies!"
        />
      </div>
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full max-w-2xl mx-auto p-4">
        <h2 className="text-xl text-muted-foreground mb-4">
          Trending companies
        </h2>
        <div className="space-y-4">
          {companies?.map(
            ({
              companyId,
              liveUrl,
              logoLightUrl,
              companyName,
              description,
            }) => (
              <CompanyListItem
                key={companyId}
                liveUrl={liveUrl}
                companyId={companyId}
                companyName={companyName}
                description={description}
                logoLightUrl={logoLightUrl}
              />
            )
          )}
        </div>
      </div>
    </Suspense>
  );
}
