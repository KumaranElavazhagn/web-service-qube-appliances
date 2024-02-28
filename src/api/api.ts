import { client } from "../api/Client";

export const GetAppliances = async (deviceStatus: string, downloadStatus: string) => {
  const response = await client(
    `/api/v1/appliances?deviceStatus=${deviceStatus}&downloadStatus=${downloadStatus}`, {
    method: "GET",
  });
  return response;
};
