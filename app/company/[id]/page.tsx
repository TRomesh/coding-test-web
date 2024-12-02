import React from "react";
import { notFound } from "next/navigation";
import { CompanyCard } from "../../../components/companies/CompanyCard";
import { AlertMessage } from "../../../components/base/AlertMessage";
import { getCompany } from "../../../service/company/company";
import { Suspense } from "react";
import { Loading } from "../../../components/base/Loading";

export default async function CompanyPage({
  params,
}: {
  params: { id: string };
}) {
  const companyId = parseInt(params.id);

  if (!companyId) {
    notFound();
  }

  const { company, error } = await getCompany(companyId);

  if (error) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4">
        <AlertMessage
          type="error"
          message="Failed to fetch company!"
        />
      </div>
    );
  }

  if (!company) {
    return (
      <div className="w-full max-w-2xl mx-auto p-4">
        <AlertMessage
          type="warning"
          message="No Company found!"
        />
      </div>
    );
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="w-full  p-4">
        <CompanyCard
          companyName={company.companyName}
          logoLightUrl={company.logoLightUrl}
          companyTicker={company.companyTicker}
          description={company.description}
          reportingCurrency={company.reportingCurrency}
          infoUrl={company.infoUrl}
          liveUrl={company.liveUrl}
          events={company.events}
        />
      </div>
    </Suspense>
  );
}
