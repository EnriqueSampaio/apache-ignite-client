/** Utility class for logging errors and debug messages. */
export declare class Logger {
    private static _debug;
    static get debug(): boolean;
    static set debug(value: boolean);
    static logDebug(data: any, ...args: any[]): void;
    static logError(data: any, ...args: any[]): void;
}
