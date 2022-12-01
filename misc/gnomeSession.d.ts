declare function Presence(initCallback: any, cancellable: any): any;
declare function Inhibitor(objectPath: any, initCallback: any, cancellable: any): any;
declare function SessionManager(initCallback: any, cancellable: any): any;
declare const Gio: any;
declare const loadInterfaceXML: any;
declare const PresenceIface: any;
declare namespace PresenceStatus {
    const AVAILABLE: number;
    const INVISIBLE: number;
    const BUSY: number;
    const IDLE: number;
}
declare var PresenceProxy: any;
declare const InhibitorIface: any;
declare var InhibitorProxy: any;
declare const SessionManagerIface: any;
declare var SessionManagerProxy: any;
declare namespace InhibitFlags {
    export const LOGOUT: number;
    export const SWITCH: number;
    export const SUSPEND: number;
    const IDLE_1: number;
    export { IDLE_1 as IDLE };
    export const AUTOMOUNT: number;
}
//# sourceMappingURL=gnomeSession.d.ts.map