import React, { useImperativeHandle, forwardRef, useState } from 'react';
import { PadTableValue } from './VaxTableByteSignals'
import './VaxRowByteSignals.css'
const VaxRowByteSignals = forwardRef(({ index, item }, ref) => {

    const [bit0, setBit0] = useState(false);
    const [bit1, setBit1] = useState(false);
    const [bit2, setBit2] = useState(false);
    const [bit3, setBit3] = useState(false);
    const [bit4, setBit4] = useState(false);
    const [bit5, setBit5] = useState(false);
    const [bit6, setBit6] = useState(false);
    const [bit7, setBit7] = useState(false);

    // const [value, setValue] = useState(null);

    useImperativeHandle(ref, () => ({
        updateValue: (newVal) => {

            let value = parseInt(newVal, 10)

            setBit0((value & 1) !== 0)
            setBit1((value & 2) !== 0)
            setBit2((value & 4) !== 0)
            setBit3((value & 8) !== 0)
            setBit4((value & 16) !== 0)
            setBit5((value & 32) !== 0)
            setBit6((value & 64) !== 0)
            setBit7((value & 128) !== 0)
        }
    }));

    function getSignalDescriptor(bitIndex) {
        let desc = ''
        if (item.Signals.SignalDescriptors[bitIndex])
            desc = item.Signals.SignalDescriptors[bitIndex].DisplayName
        return PadTableValue(desc);
    }

    return (
        <>
            <div className='ledContainer'>
                <div className='led ledHeader'><span dangerouslySetInnerHTML={{ __html: PadTableValue(`${index + 1}`) }}></span></div>
                <div className={`led ${bit7 ? 'ledOn' : 'ledOff'}`}><span dangerouslySetInnerHTML={{ __html: getSignalDescriptor(7) }}></span></div>
                <div className={`led ${bit6 ? 'ledOn' : 'ledOff'}`}><span dangerouslySetInnerHTML={{ __html: getSignalDescriptor(6) }}></span></div>
                <div className={`led ${bit5 ? 'ledOn' : 'ledOff'}`}><span dangerouslySetInnerHTML={{ __html: getSignalDescriptor(5) }}></span></div>
                <div className={`led ${bit4 ? 'ledOn' : 'ledOff'}`}><span dangerouslySetInnerHTML={{ __html: getSignalDescriptor(4) }}></span></div>
                <div className={`led ${bit3 ? 'ledOn' : 'ledOff'}`}><span dangerouslySetInnerHTML={{ __html: getSignalDescriptor(3) }}></span></div>
                <div className={`led ${bit2 ? 'ledOn' : 'ledOff'}`}><span dangerouslySetInnerHTML={{ __html: getSignalDescriptor(2) }}></span></div>
                <div className={`led ${bit1 ? 'ledOn' : 'ledOff'}`}><span dangerouslySetInnerHTML={{ __html: getSignalDescriptor(1) }}></span></div>
                <div className={`led ${bit0 ? 'ledOn' : 'ledOff'}`}><span dangerouslySetInnerHTML={{ __html: getSignalDescriptor(0) }}></span></div>
            </div>
        </>

    )
});

export default VaxRowByteSignals