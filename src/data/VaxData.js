
function fillSignalDescriptors(baseAdress) {

    let signals = [];

    for (let i = 0; i < 8; i++) {
        signals.push({ DisplayName: `${baseAdress + i}` });
    }
    return signals;
}

export const VaxData = {
    Item21: {
        DisplayName : "ITEM 21",
        DbName : "DB_PMS_IT21",
        LinkActiveIndex :  20,
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
        },
        VAX_OUT:
        {
            Signals:
                [
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(21) },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(29) },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(37) },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(45) },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(53) },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(61) },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(69) },
                    { DisplayName: "", SignalDescriptors: [{ DisplayName: "77" }, { DisplayName: "78" }, { DisplayName: "79" }, { DisplayName: "80" }, { DisplayName: "81" }, { DisplayName: "83" }, { DisplayName: "84" }, { DisplayName: "85" }] },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(86) },
                    { DisplayName: "", SignalDescriptors: [{ DisplayName: "94" }, { DisplayName: "96" }, { DisplayName: "97" }, { DisplayName: "98" }, { DisplayName: "99" }, { DisplayName: "82" }, { DisplayName: "95" }] },
                    { DisplayName: "", SignalDescriptors: [{ DisplayName: "NHP" }] },
                ]
        }
    },
    Item23: {
        DisplayName : "ITEM 23",
        DbName : "DB_PMS_IT23",
        LinkActiveIndex :  22,
        VAX_IN:
        {
            Signals:
                [
                    { DisplayName: "AUTOMATICI", SignalDescriptors: [{ DisplayName: "5" }, { DisplayName: "124" }, { DisplayName: "129" }, { DisplayName: "134" }] },
                    { DisplayName: "PLC E BANCHI", SignalDescriptors: [] },
                    { DisplayName: "AUTOMATICI", SignalDescriptors: [{ DisplayName: "A5" }, { DisplayName: "B5" }, { DisplayName: "C5" }, { DisplayName: "D5" }, { DisplayName: "E5" }, { DisplayName: "F5" }, { DisplayName: "G5" }, { DisplayName: "H5" }] },
                    { DisplayName: "LINEE", SignalDescriptors: [{ DisplayName: "I5" }, { DisplayName: "J5" }] },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(505) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(513) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(521) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(529) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(537) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(545) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(553) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(561) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(569) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(577) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(585) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(593) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(601) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(609) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(617) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(625) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: fillSignalDescriptors(633) },
                    { DisplayName: "INPUT DI LINEA 3", SignalDescriptors: [{ DisplayName: "641" }, { DisplayName: "642" }] },
                ]
        }
        ,
        VAX_OUT:
        {
            Signals:
                [
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(191) },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(199) },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(207) },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(215) },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(223) },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(231) },
                    { DisplayName: "", SignalDescriptors: fillSignalDescriptors(239) }
                ]
        }
    }
}