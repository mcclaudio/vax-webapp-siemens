
function fillSignalDescriptors(baseAdress) {

    let signals = [];

    for (let i = 0; i < 8; i++) {
        signals.push({ DisplayName: `${baseAdress + i}` });
    }
    return signals;
}
export const ITEM_21 = {
    VAX_IN:
    {
        Signals:
            [
                { DisplayName: "AUTOMATICI", SignalDescriptors: [{ DisplayName: "3" }] },
                { DisplayName: "PLC E BANCHI", SignalDescriptors: [] },
                { DisplayName: "AUTOMATICI", SignalDescriptors: [{ DisplayName: "A3" }, { DisplayName: "B3" }, { DisplayName: "C3" }, { DisplayName: "D3" }, { DisplayName: "E3" }, { DisplayName: "F3" }, { DisplayName: "G3" }, { DisplayName: "H3" }] },
                { DisplayName: "LINEE", SignalDescriptors: [{ DisplayName: "I3" }] },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(57) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(65) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(73) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(81) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(89) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(97) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(105) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(113) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(121) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(129) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(137) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(145) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(153) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(161) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(169) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(177) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(185) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(193) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(201) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(209) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: [{ DisplayName: "217" }, { DisplayName: "218" }, { DisplayName: "221" }, { DisplayName: "222" }, { DisplayName: "223" }, { DisplayName: "224" }, { DisplayName: "225" }, { DisplayName: "226" }] },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(227) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(235) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(243) },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: [{ DisplayName: "251" }, { DisplayName: "252" }, { DisplayName: "253" }, { DisplayName: "256" }, { DisplayName: "257" }, { DisplayName: "258" }, { DisplayName: "259" }, { DisplayName: "260" }] },
                { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: [{ DisplayName: "261" }, { DisplayName: "262" }, { DisplayName: "263" }, { DisplayName: "264" }, { DisplayName: "265" }, { DisplayName: "219" }, { DisplayName: "220" }, { DisplayName: "254" }] },
            ]
    }
}