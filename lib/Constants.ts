export const STARTING = 'GETH_STARTING';
export const STARTED = 'GETH_STARTED';
export const FAILED = 'GETH_START_FAILED';
export const DOWNLOADING_BINARY = 'GETH_DOWNLOADING_BINARY';
export const BINARY_CORRUPTED = 'GETH_BINARY_CORRUPTED';
export const STOPPING = 'GETH_STOPPING';
export const STOPPED = 'GETH_STOPPED';
export const ERROR = 'GETH_ERROR';
export const TIME_NOT_SYNCED = 'GETH_TIME_NOT_SYNCED';
export const FATAL = 'GETH_CRASHED';

export const START_OPTIONS = {cache: 512, shh: '', fast: '', testnet: ''};
export const ETH_NETWORK_ID = '2'; // MORDEN