import React, { useEffect, useState } from 'react';
import { useSiemensAuth } from './SiemensAuthContext';
import { LoadPanel } from 'devextreme-react/load-panel';
import ErrorPanel from './ErrorPanel';

function SiemensViewPanel({ children }) {
    const { siemensError } = useSiemensAuth();
    const [errorMessage, setErrorMessage] = useState(undefined);

    useEffect(() => {
        setErrorMessage(siemensError);
    }, [siemensError]);

    switch (errorMessage) {
        case undefined:
            return (
                <LoadPanel
                    shadingColor="rgba(0,0,0,0.4)"
                    position="center"
                    visible={true}
                    shading={true}
                />
            );
        case null:
            return <>{children}</>;
        default:
            return <ErrorPanel message={errorMessage} />;
    }
}

export default SiemensViewPanel;
