import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useSiemensPolling } from '../../siemens_io/SiemensPollingContext';
import ByteSignlas from './ByteSignlas';


function VaxInputs({ pullerName, dbname, signals }) {
  const { registerPolling, unregisterPolling } = useSiemensPolling();
  const byteRefs = useRef([]);

  const vax_in_db = buildDB();
  const siemens_requests = buildSiemensRequest(vax_in_db);

  function buildDB() {
    let db = [];
    let baseAddress = 62;

    for (let i = 0; i < 30; i++) {
      db.push({
        SiemensVarName: `"${dbname}"._Byte[${baseAddress + i}]`,
        Signals: signals[i]
      });
    }
    return db;
  }

  function buildSiemensRequest(db) {
    let requests = [];
    db.forEach((item, k) => requests.push([`INPUT_${k}`, item.SiemensVarName]))
    return requests;
  }

  const evtDataChange = useCallback((newData) => {
    vax_in_db.forEach((item, k) => {
      const signalValue = newData[`INPUT_${k}`];
      byteRefs.current[k]?.updateValue(signalValue);
    });
  }, []);

  useEffect(() => {

    byteRefs.current = byteRefs.current.slice(0, vax_in_db.length);

    registerPolling({
      id: pullerName,
      body: siemens_requests,
      interval: 100,
      callback: evtDataChange
    });

    return () => {
      unregisterPolling(pullerName);
    }

  }, []);



  return (
    <>
      <div>
        <div className='ledContainer'>
          <div className='led ledHeader'>{" "}</div>
          <div className="led ledHeader">7</div>
          <div className="led ledHeader">6</div>
          <div className="led ledHeader">5</div>
          <div className="led ledHeader">4</div>
          <div className="led ledHeader">3</div>
          <div className="led ledHeader">2</div>
          <div className="led ledHeader">1</div>
          <div className="led ledHeader">0</div>
        </div>
      </div>
      {
        vax_in_db.map((item, k) =>
          <ByteSignlas
            key={k}
            index={k}
            item={item}
            ref={el => byteRefs.current[k] = el} />
        )}
    </>)
}

export default VaxInputs