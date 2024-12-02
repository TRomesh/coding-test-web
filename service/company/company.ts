import axios from "axios";
import { Company } from "../../pages/api/types";

const baseURL = process.env.NEXT_BASE_URL ?? "http://localhost:3000";

export const getCompany = async (
  id: number
): Promise<{ company?: Company; error?: string }> => {
  try {
    const { data } = await axios.get<{ company: Company }>(
      `${baseURL}/api/company`,
      {
        params: { id },
      }
    );

    return { company: data.company };
  } catch (error) {
    return {
      error: `Failed to fetch company`,
    };
  }
};

export const getCompanies = async (): Promise<{
  companies?: Company[];
  error?: string;
}> => {
  try {
    const { data } = await axios.get<{ data: Company[] }>(
      `${baseURL}/api/companies`
    );
    return { companies: data.data };
  } catch (error) {
    return {
      error: `Failed to fetch companies`,
    };
  }
};
