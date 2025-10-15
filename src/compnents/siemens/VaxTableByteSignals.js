import React, { useEffect, useCallback, useRef } from 'react';
import { useSiemensPolling } from '../../siemens_io/SiemensPollingContext';
import VaxRowByteSignals from './VaxRowByteSignals';


function VaxTableByteSignals({ pullerName, dbname, dbBaseAddress, signals }) {
  const { registerPolling, unregisterPolling } = useSiemensPolling();
  const byteRefs = useRef([]);

  const vax_in_db = buildDB();
  const siemens_requests = buildSiemensRequest(vax_in_db);

  function buildDB() {
    let db = [];
    let baseAddress = dbBaseAddress;

    for (let i = 0; i < signals.length; i++) {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div>
        <div className='ledContainer'>
          <div className='led ledHeader'>{PadTableValue(' ')}</div>
          <div className="led ledHeader">{PadTableValue('7')}</div>
          <div className="led ledHeader">{PadTableValue('6')}</div>
          <div className="led ledHeader">{PadTableValue('5')}</div>
          <div className="led ledHeader">{PadTableValue('4')}</div>
          <div className="led ledHeader">{PadTableValue('3')}</div>
          <div className="led ledHeader">{PadTableValue('2')}</div>
          <div className="led ledHeader">{PadTableValue('1')}</div>
          <div className="led ledHeader">{PadTableValue('0')}</div>
        </div>
      </div>
      {
        vax_in_db.map((item, k) =>
          <VaxRowByteSignals
            key={k}
            index={k}
            item={item}
            ref={el => byteRefs.current[k] = el} />
        )}
    </>)
}

export function PadTableValue(value,char=' ',size=3)
{
   let val= value.padStart(size,char);
   return val;
}

export default VaxTableByteSignals