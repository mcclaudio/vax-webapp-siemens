import React, { useEffect, useState, useCallback } from 'react';
import { useSiemensPolling } from '../../siemens_io/utils/SiemensPollingContext';
const pullerName = "device-monitor";

const DeviceMonitor = () => {
    const { registerPolling, unregisterPolling } = useSiemensPolling();

    const [anno1, setAnno1] = useState(null);
    const [anno2, setAnno2] = useState(null);

    const evtDataChange = useCallback((newData) => {
        setAnno1(newData[VAR_ANNO_1]);
        setAnno2(newData[VAR_ANNO_2]);
    }, []); 

    const VAR_ANNO_1 = "anno1";
    const VAR_ANNO_2 = "anno2";

    const dataRequest = 
        [
            [ VAR_ANNO_1 , "\"DB_VAX_IT21\"._Byte[60]"],
            [ VAR_ANNO_2 , "\"DB_VAX_IT21\"._Byte[60]"],
        ]
    
    useEffect(() => {
        registerPolling({
            id: pullerName,
            body : dataRequest,
            interval: 100,
            callback : evtDataChange
        });

        return () => {
            unregisterPolling(pullerName);
        }

    }, []);

    return (
        <div>
            <h3>Monitor 1</h3>
            {anno1 !== null ? <pre>DB21 1: {`${anno1}`}</pre> : 'Caricamento...'}
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            {anno2 !== null ? <pre>DB21: {`${anno2}`}</pre> : 'Caricamento...'}
        </div>
    );
};

export default DeviceMonitor;
