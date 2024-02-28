export interface ApplianceDetailResponse {
  serialNo: string;
  theatreName: string;
  location: Location;
  ispPaymentResponsibility: string;
  bandwidth: string;
  avgBandwidth: string;
  planStartDate: string;
  billingCycle: string;
  deviceStatus: string;
  downloadStatus: string;
  osVersion: string;
  storage: string;
}

interface Location {
  city: string;
  state: string;
  country: string;
}