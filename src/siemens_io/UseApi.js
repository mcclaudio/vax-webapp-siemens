import { useEffect, useRef } from 'react';
import { useSiemensAuth } from '../siemens_io/SiemensAuthContext';
import { SiemensLogInfo } from './SiemensLog';
export const useApi = () => {
  const { token } = useSiemensAuth();

  const apiToken = useRef({});

  useEffect(() => {

    apiToken.current = token;
    SiemensLogInfo(`UseApi: Token Changed. Token: ${apiToken.current}`)

  }, [token]);

  const request = async (method, endpoint, body = null) => {

    if (!apiToken.current)
      throw new Error('Token non disponibile');
    const uri = `${process.env.REACT_APP_AUTH_ENDPOINT}${endpoint}`

    SiemensLogInfo(`Siemens HTTP Request . Token: \\"${apiToken.current}\\". Date: ${Date.now()}`);

    const res = await fetch(uri, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': apiToken.current
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Errore API: ${res.status} - ${error}`);
    }

    return await res.json();
  };

  return {
    read: async (body) => {
      let bodyRequest = [];

      body.forEach((e) => {
        bodyRequest.push(
          {
            jsonrpc: "2.0",
            id: e[0],
            method: "PlcProgram.Read",
            params: {
              var: e[1]
            }
          }
        );
      });

      var jsonResponse = await request('POST', '/api/jsonrpc', bodyRequest);
      let now = Date.now();
      let response = {};

      jsonResponse.forEach((e) => {
        response[e.id] = e.result;
      });

      response.timestamp = now
      return response;
    },
    // post: (endpoint, body) => request('POST', endpoint, body),
    // put: (endpoint, body) => request('PUT', endpoint, body),
    // delete: (endpoint) => request('DELETE', endpoint),
  };
};
