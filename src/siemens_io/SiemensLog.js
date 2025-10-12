const LOG_LEVELS = {
    INFO: 0,
    WARN: 1,
    ERROR: 2,
    NONE: Infinity, // Disabilita tutti i log
};

const getLogLevel = () => {
    const localOverride = localStorage.getItem('REACT_APP_LOG_SIEMENS_IO_LEVEL');
    const envLevel = process.env.REACT_APP_LOG_SIEMENS_IO_LEVEL;
    const level = localOverride || envLevel;
    return LOG_LEVELS[level?.toUpperCase()] ?? Infinity;
};

export const SiemensLogInfo = (message) => {
    if (getLogLevel() <= LOG_LEVELS.INFO)
        console.log(`[INFO] ${message}`);
};

export const SiemensLogWarn = (message) => {
    if (getLogLevel() <= LOG_LEVELS.WARN)
        console.warn(`[WARN] ${message}`);
};

export const SiemensLogError = (message) => {
    if (getLogLevel() <= LOG_LEVELS.ERROR)
        console.error(`[ERROR] ${message}`);
};
