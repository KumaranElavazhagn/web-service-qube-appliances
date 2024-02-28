import { client } from "../api/Client";

export const GetAppliances = async (deviceStatus: string, downloadStatus: string) => {
  const response = await client(
    `/api/v1/appliances?deviceStatus=${deviceStatus}&downloadStatus=${downloadStatus}`, {
    method: "GET",
  });
  return response;
};

export const GetApplianceDetail = async (applianceId: string) => {
  const response = await client(
    `/api/v1/appliance/${applianceId}/info`, {
    method: "GET",
  });
  return response;
};
