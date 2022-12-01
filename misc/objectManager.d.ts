declare const Gio: any;
declare const GLib: any;
declare const Params: any;
declare const Signals: any;
declare const ObjectManagerIface: "\n<node>\n<interface name=\"org.freedesktop.DBus.ObjectManager\">\n  <method name=\"GetManagedObjects\">\n    <arg name=\"objects\" type=\"a{oa{sa{sv}}}\" direction=\"out\"/>\n  </method>\n  <signal name=\"InterfacesAdded\">\n    <arg name=\"objectPath\" type=\"o\"/>\n    <arg name=\"interfaces\" type=\"a{sa{sv}}\" />\n  </signal>\n  <signal name=\"InterfacesRemoved\">\n    <arg name=\"objectPath\" type=\"o\"/>\n    <arg name=\"interfaces\" type=\"as\" />\n  </signal>\n</interface>\n</node>";
declare const ObjectManagerInfo: any;
declare var ObjectManager: {
    new (params: any): {
        _connection: any;
        _serviceName: any;
        _managerPath: any;
        _cancellable: any;
        _managerProxy: any;
        _interfaceInfos: {};
        _objects: {};
        _interfaces: {};
        _onLoaded: any;
        _completeLoad(): void;
        _addInterface(objectPath: any, interfaceName: any): Promise<void>;
        _removeInterface(objectPath: any, interfaceName: any): void;
        _initManagerProxy(): Promise<void>;
        _onNameAppeared(): Promise<void>;
        _onNameVanished(): void;
        _registerInterfaces(interfaces: any): void;
        getProxy(objectPath: any, interfaceName: any): any;
        getProxiesForInterface(interfaceName: any): any;
        getAllProxies(): any[];
    };
};
//# sourceMappingURL=objectManager.d.ts.map