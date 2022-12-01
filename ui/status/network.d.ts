declare function signalToIcon(value: any): "none" | "weak" | "ok" | "good" | "excellent";
declare function ssidToLabel(ssid: any): any;
declare function launchSettingsPanel(panel: any, ...args: any[]): void;
declare const Atk: any;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const NM: any;
declare const Polkit: any;
declare const St: any;
declare const Main: any;
declare const PopupMenu: any;
declare const MessageTray: any;
declare const ModemManager: any;
declare const Util: any;
declare const Spinner: any;
declare const QuickMenuToggle: any;
declare const SystemIndicator: any;
declare const loadInterfaceXML: any;
declare const registerDestroyableType: any;
declare const WIFI_SCAN_FREQUENCY: 15;
declare const MAX_VISIBLE_NETWORKS: 8;
declare const NM80211Mode: any;
declare namespace PortalHelperResult {
    const CANCELLED: number;
    const COMPLETED: number;
    const RECHECK: number;
}
declare const PortalHelperIface: any;
declare const PortalHelperInfo: any;
declare class ItemSorter {
    /**
     * Maintains a list of sorted items. By default, items are
     * assumed to be objects with a name property.
     *
     * Optionally items can have a secondary sort order by
     * recency. If used, items must by objects with a timestamp
     * property that can be used in substraction, and "bigger"
     * must mean "more recent". Number and Date both qualify.
     *
     * @param {object=} options - property object with options
     * @param {Function} options.sortFunc - a custom sort function
     * @param {bool} options.trackMru - whether to track MRU order as well
     **/
    constructor(options?: object | undefined);
    _trackMru: any;
    _sortFunc: any;
    _sortFuncMru: any;
    _itemsOrder: any[];
    _itemsMruOrder: any[];
    items(): Generator<any, void, undefined>;
    itemsByMru(): Generator<any, void, undefined>;
    _sortByName(one: any, two: any): any;
    _sortByMru(one: any, two: any): number;
    _upsert(array: any, item: any, sortFunc: any): any;
    _delete(array: any, item: any): void;
    /**
     * Insert or update item.
     *
     * @param {any} item - the item to upsert
     * @returns {number} - the sorted position of item
     */
    upsert(item: any): number;
    /**
     * @param {any} item - item to remove
     */
    delete(item: any): void;
    [Symbol.iterator]: () => Generator<any, void, undefined>;
}
declare const NMMenuItem: any;
/**
 * Item that contains a section, and can be collapsed
 * into a submenu
 */
declare const NMSectionItem: any;
declare const NMConnectionItem: any;
declare const NMDeviceConnectionItem: any;
declare const NMDeviceItem: any;
declare const NMWiredDeviceItem: any;
declare const NMModemDeviceItem: any;
declare const NMBluetoothDeviceItem: any;
declare const WirelessNetwork: any;
declare const NMWirelessNetworkItem: any;
declare const NMWirelessDeviceItem: any;
declare const NMVpnConnectionItem: any;
declare const NMToggle: any;
declare const NMVpnToggle: any;
declare const NMDeviceToggle: any;
declare const NMWirelessToggle: any;
declare const NMWiredToggle: any;
declare const NMBluetoothToggle: any;
declare const NMModemToggle: any;
declare var Indicator: any;
//# sourceMappingURL=network.d.ts.map