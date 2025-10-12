import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react';

const SiemensAuthContext = createContext({ token: null });

export const SiemensAuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const tokeRef = useRef(null);
  const myTimersRef = useRef({});
  const refreshRun = useRef(null);

  const { REACT_APP_ENABLE_LOG_SIEMENS_IO } = process.env

  const login = async () => {
    try {

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
        throw new Error(`Siemens Error: Code: ${data.error.code}. Message: ${data.error.message}`)

      SetCurrentToken(data.result.token);

      if (REACT_APP_ENABLE_LOG_SIEMENS_IO === 'true')
        console.log(`Siemens Login . Token: \\"${tokeRef.current}\\". Date: ${Date.now()}`);
    }
    catch (err) {
      SetCurrentToken(null);
      if (REACT_APP_ENABLE_LOG_SIEMENS_IO === 'true')
        console.error('Login failed:', err);
    }
  };

  function SetCurrentToken(cToken) {
    tokeRef.current = cToken;
    setToken(cToken);
  }

  const refreshToken = async () => {

    if (refreshRun.current !== null) {
      if (REACT_APP_ENABLE_LOG_SIEMENS_IO === 'true')
        console.log(`FatchData SiemensAuthProvider Skipped. Date: ${Date.now()}`);
      return;
    }

    try {
      refreshRun.current = true;

      if (!tokeRef.current) {
        await login();
      }
      else {
        const res = await fetch(`${process.env.REACT_APP_AUTH_ENDPOINT}/api/jsonrpc`, {
          method: 'POST',
          headers:
          {
            'Content-Type': 'application/json',
            'X-Auth-Token': tokeRef.current
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

        /* SetCurrentToken(data.result) */

        if (REACT_APP_ENABLE_LOG_SIEMENS_IO === 'true')
          console.log(`Token extednded. Date: ${Date.now()}`);
      }
    }
    catch (err) {
      if (REACT_APP_ENABLE_LOG_SIEMENS_IO === 'true')
        console.error('Token refresh failed:', err);
      SetCurrentToken(null);
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

  }, []);


  return (
    <SiemensAuthContext.Provider value={{ token }}>
      {children}
    </SiemensAuthContext.Provider>
  );
};

export const useSiemensAuth = () => useContext(SiemensAuthContext);
