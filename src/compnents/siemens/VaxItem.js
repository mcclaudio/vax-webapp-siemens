import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from 'devextreme-react/button';


import { SiemensPollingProvider } from '../../siemens_io/SiemensPollingContext';
import SiemensViewPanel from '../../siemens_io/SiemensViewPanel';
import VaxTableByteSignals from './VaxTableByteSignals';
import VaxLinkActive from './VaxLinkActive'
import { paths } from '../../AppNavigation';
import './VaxItem.css'


function VaxItem({ itemData }) {
    const navigate = useNavigate();

    const [linkActive, setLinkActive] = useState(false);
    const evtLinkActiveChanged = useCallback((evt) => {
        setLinkActive(evt.linkActive)
    }, []);

    return (
        <SiemensPollingProvider>
            <SiemensViewPanel>

                <div className="three-column-wrapper">
                    <div style={{ display: "flex", width: "100%" , alignItems:"center"}}>
                        <div style={{ flexGrow: 1, marginRight: "15px" }}>
                            <VaxLinkActive
                                itemsName={itemData.DisplayName}
                                pullerName={`${itemData.DbName}_LinksActive`}
                                indexItem={itemData.LinkActiveIndex}
                                evtLinkActiveChanged={evtLinkActiveChanged}
                            />
                        </div>
                        <div>
                            <Button icon='chevronleft' type='default'
                                text='ITEMS'
                                onClick={() => {
                                    navigate(paths.home);
                                }}
                            />
                        </div>
                    </div>


                    <div className={`three-column-container ${!linkActive ? 'opacity' : ''}`}>
                        <div className="column">
                            <h3>VAX - Inputs</h3>
                            <div className="column-content">
                                <VaxTableByteSignals
                                    dbname={itemData.DbName}
                                    pullerName={`${itemData.DbName}_INPUTS`}
                                    dbBaseAddress={62}
                                    signals={itemData.VAX_IN.Signals}
                                />
                            </div>
                        </div>
                        <div className="column">
                            <h3>VAX - Outputs</h3>
                            <div className="column-content">
                                <VaxTableByteSignals
                                    dbname={itemData.DbName}
                                    pullerName={`${itemData.DbName}_OUTPUTS_VAX`}
                                    dbBaseAddress={182}
                                    signals={itemData.VAX_OUT.Signals}
                                />
                            </div>
                        </div>
                        <div className="column">
                            <h3>PMS - Outputs</h3>
                            <div className="column-content">
                                <VaxTableByteSignals
                                    dbname={itemData.DbName}
                                    pullerName={`${itemData.DbName}_OUTPUTS_PMS`}
                                    dbBaseAddress={302}
                                    signals={itemData.VAX_OUT.Signals}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </SiemensViewPanel>
        </SiemensPollingProvider>
    );
}

export default VaxItem