import React, { useEffect, useCallback, useState } from 'react';
import { useSiemensPolling } from '../../siemens_io/SiemensPollingContext';
import { PiPlugsConnectedFill } from 'react-icons/pi';
import { TbPlugConnectedX } from 'react-icons/tb';
import { MdUpdate } from 'react-icons/md';

function VaxLinkActive({ pullerName, itemsName, indexItem, evtLinkActiveChanged }) {
  const { registerPolling, unregisterPolling } = useSiemensPolling();

  const evtDataChange = useCallback((newData) => {
    var linksActive = parseInt(newData[`LinksActive`]);

    let oldValue = linkActive;
    let newValue = (linksActive & (2 ** indexItem)) !== 0;
    setLinkActive(newValue)
    setTime(newData.timestamp);
    if (oldValue !== newValue && evtLinkActiveChanged) {
      evtLinkActiveChanged({ linkActive: newValue });

    }

  }, []);

  const [linkActive, setLinkActive] = useState(false);
  const [time, setTime] = useState();

  useEffect(() => {

    registerPolling({
      id: pullerName,
      body: [["LinksActive", `"DB_STATO_ITEMS".LinksActive`]],
      interval: 1000,
      callback: evtDataChange
    });

    return () => {
      unregisterPolling(pullerName);
    }

  }, []);

  return (
    <div style={{ display: "flex" }}>
      {
        linkActive ?
          <>
            <div>
              <PiPlugsConnectedFill size={24} color='green' />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5px", whiteSpace: "nowrap" }}>
              <span><i>{itemsName}</i> - Connesso </span>
            </div>
          </>
          :
          <>
            <div>
              <TbPlugConnectedX size={24} color='red' />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "5px", whiteSpace: "nowrap" }}>
              <span><i>{itemsName}</i> - Disconnesso</span>
            </div>
          </>
      }
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginLeft: "5px", width: "100%" }}>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: "5px" }}>
          <MdUpdate title={"Ultimo Aggiornamento da PLC"} size={24} color='green' />
        </div>
        <div>{`${(new Date(time)).toLocaleString()}`}</div>
      </div>
    </div>
  )
}

export default VaxLinkActive