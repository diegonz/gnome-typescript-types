/**
 * @private
 */
declare function _ensureIfaceResource(): void;
/**
 * @param {string} iface the interface name
 * @returns {string | null} the XML string or null if it is not found
 */
declare function loadInterfaceXML(iface: string): string | null;
/**
 * @param {string} iface the interface name
 * @param {string} ifaceFile the interface filename
 * @returns {string | null} the XML string or null if it is not found
 */
declare function loadSubInterfaceXML(iface: string, ifaceFile: string): string | null;
declare const Config: any;
declare const Gio: any;
declare const GLib: any;
declare let _ifaceResource: any;
//# sourceMappingURL=dbusUtils.d.ts.map