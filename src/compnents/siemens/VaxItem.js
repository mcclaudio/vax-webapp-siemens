import React, { useCallback,useState } from 'react'
import VaxTableByteSignals from './VaxTableByteSignals';
import { SiemensPollingProvider } from '../../siemens_io/SiemensPollingContext';
import VaxLinkActive from './VaxLinkActive'
import './VaxItem.css'

function VaxItem({ itemData }) {

    const [linkActive, setLinkActive] = useState(false);
    const evtLinkActiveChanged = useCallback((evt) => {
        setLinkActive(evt.linkActive)
    }, []);

    return (
        <SiemensPollingProvider>
            <div className="three-column-wrapper">

                <VaxLinkActive
                    itemsName={itemData.DisplayName}
                    pullerName={`${itemData.DbName}_LinksActive`}
                    indexItem={itemData.LinkActiveIndex}
                    evtLinkActiveChanged={evtLinkActiveChanged} />

                <div  className={`three-column-container ${!linkActive ? 'opacity' : ''}`}>
                    <div className="column">
                        <h3>VAX - Inputs</h3>
                        <div className="column-content">
                            <VaxTableByteSignals
                                dbname={itemData.DbName}
                                pullerName={`${itemData.DbName}_INPUTS`}
                                dbBaseAddress={62}
                                signals={itemData.VAX_IN.Signals} />
                        </div>
                    </div>
                    <div className="column">
                        <h3>VAX - Outputs</h3>
                        <div className="column-content">
                            <VaxTableByteSignals
                                dbname={itemData.DbName}
                                pullerName={`${itemData.DbName}_OUTPUTS_VAX`}
                                dbBaseAddress={182}
                                signals={itemData.VAX_OUT.Signals} />
                        </div>
                    </div>
                    <div className="column">
                        <h3>PMS - Outputs</h3>
                        <div className="column-content">
                            <VaxTableByteSignals
                                dbname={itemData.DbName}
                                pullerName={`${itemData.DbName}_OUTPUTS_PMS`}
                                dbBaseAddress={302}
                                signals={itemData.VAX_OUT.Signals} />
                        </div>
                    </div>
                </div>
            </div>
        </SiemensPollingProvider>
    );
}

export default VaxItem