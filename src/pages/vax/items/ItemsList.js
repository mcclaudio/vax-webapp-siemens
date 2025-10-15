import React from 'react'
import { SiemensPollingProvider } from '../../../siemens_io/SiemensPollingContext'
import SiemensViewPanel from '../../../siemens_io/SiemensViewPanel'
import VaxLinkActive from '../../../compnents/siemens/VaxLinkActive'
import { VaxData } from '../../../data/VaxData';
import { Button } from 'devextreme-react/button';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../AppNavigation';

function ItemsList() {
    const navigate = useNavigate();

    return (
        <SiemensPollingProvider>
            <SiemensViewPanel>
                <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', width: '100%', padding:'10px 0', borderBottom: '2px solid grey'}}>
                    <div style={{flexGrow: 1, marginRight: 20}}>
                        <VaxLinkActive
                            pullerName={`${VaxData.Item21.DbName}_VaxLinkActive`}
                            indexItem={VaxData.Item21.LinkActiveIndex}
                            itemsName={VaxData.Item21.DisplayName} />
                    </div>
                    <div>
                        <Button
                            icon='chevronnext'
                            type='default'
                            text='Visualizza'
                            onClick={() => {
                                navigate(paths.item21);
                            }}
                        />
                    </div>
                </div>

                <div style={{display: 'flex', justifyContent:'space-between', alignItems: 'center', width: '100%', padding:'10px 0', borderBottom: '2px solid grey'}}>
                    <div style={{flexGrow: 1, marginRight: 20}}>
                        <VaxLinkActive
                            pullerName={`${VaxData.Item23.DbName}_VaxLinkActive`}
                            indexItem={VaxData.Item23.LinkActiveIndex}
                            itemsName={VaxData.Item23.DisplayName} />
                    </div>
                    <div>
                        <Button
                            icon='chevronnext'
                            type='default'
                            text='Visualizza'
                            onClick={() => {
                                navigate(paths.item23);
                            }}
                        />
                    </div>
                </div>
            </SiemensViewPanel>
        </SiemensPollingProvider>
    )
}

export default ItemsList