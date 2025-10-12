import React, { useEffect, useState } from 'react';
import { useApi } from '../../siemens_io/utils/UseApi';

const DeviceStatus = () => {
    const api = useApi();
    const [status, setStatus] = useState(null);

    useEffect(() => {
        api.read(
            {
                jsonrpc: "2.0",
                id: 1,
                method: "PlcProgram.Read",
                params: {
                    var: "\"DB_Pippo\".Disney.Anno[1]"
                }
            }
        )
            .then(data => {
                console.log("ciao")
                setStatus(data)
            })
            .catch(err => 
                console.error('Errore nel recupero stato:', err));
    }, []);

    return <div>Stato dispositivo: {status ? status : 'Caricamento...'}</div>;
};

export default DeviceStatus;
