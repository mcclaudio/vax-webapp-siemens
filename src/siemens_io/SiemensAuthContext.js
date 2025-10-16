import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { SiemensLogInfo, SiemensLogError } from "./SiemensLog"

const SiemensAuthContext = createContext({ token: null, siemensError: undefined });

export const SiemensAuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [siemensError, setSiemensError] = useState(undefined);

  const tokeRef = useRef({ token: "", fromLocal: false });
  const myTimersRef = useRef({});
  const refreshRun = useRef(null);



  const login = async () => {
    try {

      let isLocal = false;
      let cToken = localStorage.getItem('SIEMENS_AUTH_TOKEN');

      if (cToken) {
        cToken = JSON.parse(cToken);
        isLocal = true;
      }

      if (!(cToken && cToken.token !== "null")) {
        const res = await fetch(`${process.env.REACT_APP_AUTH_ENDPOINT}/api/jsonrpc`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(
            {
              jsonrpc: "2.0",
              method: "Api.Login",
              params: {
                user: process.env.REACT_APP_AUTH_USER,
                password: process.env.REACT_APP_AUTH_PASS
              },
              "id": 1
            }
          ),
        });

        const data = await res.json();

        if (data.error)
          throw new Error(`Message: ${data.error.message} [API Siemens Error (Code :${data.error.code})].`)

        cToken = { token: data.result.token, fromLocal: false };
      }

      SetCurrentToken(cToken.token,isLocal);
      SiemensLogInfo(`Siemens Login . Token: \\"${tokeRef.current}\\". Date: ${Date.now()}`);
    }
    catch (err) {
      setSiemensError(err.message);
      SetCurrentToken(null);
      SiemensLogError('Login failed:', err);
    }
  };

  function SetCurrentToken(cToken, isLocal = false) {
    tokeRef.current = { token: cToken, fromLocal: isLocal };
    localStorage.setItem('SIEMENS_AUTH_TOKEN', JSON.stringify({ token: `${cToken}`, fromLocal: true }));
    setToken(cToken);
  }

  const refreshToken = async () => {

    if (refreshRun.current !== null) {
      SiemensLogInfo(`FatchData SiemensAuthProvider Skipped. Date: ${Date.now()}`);
      return;
    }

    try {
      refreshRun.current = true;

      if (!tokeRef.current.token) {
        await login();
      }
      else {
        const res = await fetch(`${process.env.REACT_APP_AUTH_ENDPOINT}/api/jsonrpc`, {
          method: 'POST',
          headers:
          {
            'Content-Type': 'application/json',
            'X-Auth-Token': tokeRef.current.token
          },
          body: JSON.stringify(
            {
              jsonrpc: "2.0",
              method: "Plc.ReadOperatingMode",
              id: 1
            })
        });

        const data = await res.json();

        if (data.error)
          throw new Error(`Siemens Error: Code: ${data.error.code}. Message: ${data.error.message}`)

        setSiemensError(null);
        SiemensLogInfo(`Token extednded. Date: ${Date.now()}`);
      }
    }
    catch (err) {

      if (!tokeRef.current.fromLocal)
        setSiemensError(err.message);

      SetCurrentToken(null);
      SiemensLogError('Token refresh failed:', err);
    }
    finally {
      refreshRun.current = null;
    }
  };



  useEffect(() => {
    async function callLogin() {
      try {
        await login()
      }
      finally {
        if (myTimersRef.current['refreshTokenTimer'] === undefined) {
          myTimersRef.current['refreshTokenTimer'] = setInterval(
            refreshToken,
            Number(process.env.REACT_APP_REFRESH_INTERVAL || 60000)
          );
        }
      }
    };

    callLogin();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <SiemensAuthContext.Provider value={{ token, siemensError }}>
      {children}
    </SiemensAuthContext.Provider>
  );
};

export const useSiemensAuth = () => useContext(SiemensAuthContext);
