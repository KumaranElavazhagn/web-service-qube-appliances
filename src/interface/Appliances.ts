export interface ApplianceResponse {
  appliances: Appliance[];
}

export  interface Appliance {
  serialNo: string;
  theatreName: string;
  location: Location;
  bandwidth: string;
  avgBandwidth: string;
  deviceStatus: string;
  downloadStatus: string;
  osVersion: string;
}

export interface Location {
  city: string;
  state: string;
  country: string;
}

export interface ApplianceStatusResponse {
  [key: string]: number;
}