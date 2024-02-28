import axios from 'axios';

export async function client(
  endpoint: String,
  { requestType, body, ...customConfig }: any = {},
) {
  const headers: any = {
    'Content-Type': "application/json"
  };

  const requestConfig: any = {
    method: requestType,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };
  if (body) {
    requestConfig.data = JSON.stringify(body);
  }
  const url = "http://localhost:8080" + `/${endpoint}`;

  const apiResponse = await axios(url, requestConfig).catch((error: any) => {
    if (error?.response?.status != 200) {
      return error.response
    }
  });
  return apiResponse;
}