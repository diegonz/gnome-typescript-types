/**
 * loadRemoteSearchProviders:
 *
 * @param {Gio.Settings} searchSettings - search settings
 * @returns {RemoteSearchProvider[]} - the list of remote providers
 */
declare function loadRemoteSearchProviders(searchSettings: Gio.Settings): {
    proxy: any;
    appInfo: any;
    id: any;
    isRemoteProvider: boolean;
    canLaunchSearch: boolean;
    createIcon(size: any, meta: any): any;
    filterResults(results: any, maxNumber: any): any;
    getInitialResultSet(terms: any, cancellable: any): Promise<any>;
    getSubsearchResultSet(previousResults: any, newTerms: any, cancellable: any): Promise<any>;
    getResultMetas(ids: any, cancellable: any): Promise<{
        id: any;
        name: any;
        description: any;
        createIcon: {};
        clipboardText: any;
    }[]>;
    activateResult(id: any): void;
    launchSearch(_terms: any): void;
}[];
declare const GdkPixbuf: any;
declare const Gio: any;
declare const GLib: any;
declare const Shell: any;
declare const St: any;
declare const FileUtils: any;
declare const KEY_FILE_GROUP: "Shell Search Provider";
declare const SearchProviderIface: "\n<node>\n<interface name=\"org.gnome.Shell.SearchProvider\">\n<method name=\"GetInitialResultSet\">\n    <arg type=\"as\" direction=\"in\" />\n    <arg type=\"as\" direction=\"out\" />\n</method>\n<method name=\"GetSubsearchResultSet\">\n    <arg type=\"as\" direction=\"in\" />\n    <arg type=\"as\" direction=\"in\" />\n    <arg type=\"as\" direction=\"out\" />\n</method>\n<method name=\"GetResultMetas\">\n    <arg type=\"as\" direction=\"in\" />\n    <arg type=\"aa{sv}\" direction=\"out\" />\n</method>\n<method name=\"ActivateResult\">\n    <arg type=\"s\" direction=\"in\" />\n</method>\n</interface>\n</node>";
declare const SearchProvider2Iface: "\n<node>\n<interface name=\"org.gnome.Shell.SearchProvider2\">\n<method name=\"GetInitialResultSet\">\n    <arg type=\"as\" direction=\"in\" />\n    <arg type=\"as\" direction=\"out\" />\n</method>\n<method name=\"GetSubsearchResultSet\">\n    <arg type=\"as\" direction=\"in\" />\n    <arg type=\"as\" direction=\"in\" />\n    <arg type=\"as\" direction=\"out\" />\n</method>\n<method name=\"GetResultMetas\">\n    <arg type=\"as\" direction=\"in\" />\n    <arg type=\"aa{sv}\" direction=\"out\" />\n</method>\n<method name=\"ActivateResult\">\n    <arg type=\"s\" direction=\"in\" />\n    <arg type=\"as\" direction=\"in\" />\n    <arg type=\"u\" direction=\"in\" />\n</method>\n<method name=\"LaunchSearch\">\n    <arg type=\"as\" direction=\"in\" />\n    <arg type=\"u\" direction=\"in\" />\n</method>\n</interface>\n</node>";
declare var SearchProviderProxyInfo: any;
declare var SearchProvider2ProxyInfo: any;
declare var RemoteSearchProvider: {
    new (appInfo: any, dbusName: any, dbusPath: any, autoStart: any, proxyInfo: any): {
        proxy: any;
        appInfo: any;
        id: any;
        isRemoteProvider: boolean;
        canLaunchSearch: boolean;
        createIcon(size: any, meta: any): any;
        filterResults(results: any, maxNumber: any): any;
        getInitialResultSet(terms: any, cancellable: any): Promise<any>;
        getSubsearchResultSet(previousResults: any, newTerms: any, cancellable: any): Promise<any>;
        getResultMetas(ids: any, cancellable: any): Promise<{
            id: any;
            name: any;
            description: any;
            createIcon: {};
            clipboardText: any;
        }[]>;
        activateResult(id: any): void;
        launchSearch(_terms: any): void;
    };
};
declare var RemoteSearchProvider2: {
    new (appInfo: any, dbusName: any, dbusPath: any, autoStart: any): {
        canLaunchSearch: boolean;
        activateResult(id: any, terms: any): void;
        launchSearch(terms: any): void;
        proxy: any;
        appInfo: any;
        id: any;
        isRemoteProvider: boolean;
        createIcon(size: any, meta: any): any;
        filterResults(results: any, maxNumber: any): any;
        getInitialResultSet(terms: any, cancellable: any): Promise<any>;
        getSubsearchResultSet(previousResults: any, newTerms: any, cancellable: any): Promise<any>;
        getResultMetas(ids: any, cancellable: any): Promise<{
            id: any;
            name: any;
            description: any;
            createIcon: {};
            clipboardText: any;
        }[]>;
    };
};
//# sourceMappingURL=remoteSearch.d.ts.map