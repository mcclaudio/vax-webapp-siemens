import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { useApi } from './UseApi';
import { useSiemensAuth } from './SiemensAuthContext';
import { SiemensLogInfo, SiemensLogError } from './SiemensLog';
const SiemensPollingContext = createContext();

export const SiemensPollingProvider = ({ children }) => {
    const api = useApi();
    const { token } = useSiemensAuth(); // ⬅️ Importante
    const [pollingConfigs, setPollingConfigs] = useState([]);
    const timersRef = useRef({});
    const pullerFetchRunRef = useRef({});

    useEffect(() => {
        if (!token)
            return;

        pollingConfigs.forEach(({ id, body, interval, callback }) => {
            if (timersRef.current[id]) return; // già attivo

            const fetchData = async () => {

                if (pullerFetchRunRef.current[id] !== null) {
                    SiemensLogInfo(`FatchData ${id} Skipped. Date: ${Date.now()}`);
                    return;
                }

                try {
                    pullerFetchRunRef.current[id] = true;
                    const data = await api.read(body);

                    if (callback)
                        callback(data);

                } catch (err) {
                    SiemensLogError(`Polling error for ${id}:`, err);
                }
                finally {
                    pullerFetchRunRef.current[id] = null;
                }
            };
            pullerFetchRunRef.current[id] = null;
            fetchData(); // iniziale
            SiemensLogInfo(`Set Polling for ${id}`);
            timersRef.current[id] = setInterval(fetchData, interval);

        });

    }, [api, pollingConfigs, token]);

    const registerPolling = ({ id, endpoint, body, interval, callback }) => {
        setPollingConfigs(prev => {
            const exists = prev.find(cfg => cfg.id === id);
            return exists ? prev : [...prev, { id, endpoint, body, interval, callback }];
        });
    };

    const unregisterPolling = (id) => {
        setPollingConfigs(prev => prev.filter(cfg => cfg.id !== id));

        if (timersRef.current[id]) {
            clearInterval(timersRef.current[id]);
            delete timersRef.current[id];
            delete pullerFetchRunRef.current[id]
            
            SiemensLogInfo(`Polling interrotto per ${id} - ${Date.now()}`);
        }
    };


    return (
        <SiemensPollingContext.Provider value={{ registerPolling, unregisterPolling }}>
            {children}
        </SiemensPollingContext.Provider>
    );
};

export const useSiemensPolling = () => useContext(SiemensPollingContext);
