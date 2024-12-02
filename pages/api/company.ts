import type { NextApiRequest, NextApiResponse } from "next";
import { data } from "./data";
import { Company } from "./types";

export const getCompanyData = (companyId: number): Company | null => {
  const company = data.data.find((company) => company.companyId === companyId);
  return company || null;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ company?: Company; error?: string }>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ error: "Method Not Allowed" });
    return;
  }

  const companyId = parseInt(req.query.id as string, 10);
  if (isNaN(companyId)) {
    res
      .status(400)
      .json({ error: "Bad request: ID must be provided and be a number" });
    return;
  }

  const company = getCompanyData(companyId);
  if (!company) {
    res.status(404).json({ error: "Company not found" });
    return;
  }

  res.status(200).json({ company });
}
