import React, { useEffect, useState, useCallback } from 'react';
import { useSiemensPolling } from '../../siemens_io/utils/SiemensPollingContext';
const pullerName = "device-monitor-2";

const DeviceMonitor2 = () => {
    const { registerPolling, unregisterPolling } = useSiemensPolling();

    const [anno3, setAnno3] = useState(null);
    const [anno4, setAnno4] = useState(null);

    const evtDataChange = useCallback((newData) => {
        setAnno3(newData[VAR_ANNO_3]);
        setAnno4(newData[VAR_ANNO_4]);
    }, []);

    const VAR_ANNO_3 = "anno3";
    const VAR_ANNO_4 = "anno4";

    const dataRequest =
        [
            [VAR_ANNO_3, "\"DB_VAX_IT23\"._Byte[60]"],
            [VAR_ANNO_4, "\"DB_VAX_IT23\"._Byte[61]"],
        ]

    useEffect(() => {
        registerPolling({
            id: pullerName,
            body: dataRequest,
            interval: 100,
            callback: evtDataChange
        });

        return () => {
            unregisterPolling(pullerName);
        }

    }, []);

    return (
        <div style={{margin:"0 50"}}>
            <h3>Monitor 2</h3>
            {anno3 !== null ? <pre>DB23: {`${anno3}`}</pre> : 'Caricamento...'}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {anno4 !== null ? <pre>DB23 4: {`${anno4}`}</pre> : 'Caricamento...'}
        </div>
    );
};

export default DeviceMonitor2;
