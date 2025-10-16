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
          <div className='led ledHeader'><span dangerouslySetInnerHTML={{ __html: PadTableValue(' ')}}></span></div>
          <div className="led ledHeader"><span dangerouslySetInnerHTML={{ __html: PadTableValue('7')}}></span></div>
          <div className="led ledHeader"><span dangerouslySetInnerHTML={{ __html: PadTableValue('6')}}></span></div>
          <div className="led ledHeader"><span dangerouslySetInnerHTML={{ __html: PadTableValue('5')}}></span></div>
          <div className="led ledHeader"><span dangerouslySetInnerHTML={{ __html: PadTableValue('4')}}></span></div>
          <div className="led ledHeader"><span dangerouslySetInnerHTML={{ __html: PadTableValue('3')}}></span></div>
          <div className="led ledHeader"><span dangerouslySetInnerHTML={{ __html: PadTableValue('2')}}></span></div>
          <div className="led ledHeader"><span dangerouslySetInnerHTML={{ __html: PadTableValue('1')}}></span></div>
          <div className="led ledHeader"><span dangerouslySetInnerHTML={{ __html: PadTableValue('0')}}></span></div>
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

export function PadTableValue(value, char = ' ', size = 3) {
  if (!value)
    value = "";

  let val = value.padStart(size, char);
  return val;
}

export default VaxTableByteSignals