declare function getSmartcardManager(): any;
declare const Gio: any;
declare const Signals: any;
declare const ObjectManager: any;
declare const SmartcardTokenIface: "\n<node>\n<interface name=\"org.gnome.SettingsDaemon.Smartcard.Token\">\n  <property name=\"Name\" type=\"s\" access=\"read\"/>\n  <property name=\"Driver\" type=\"o\" access=\"read\"/>\n  <property name=\"IsInserted\" type=\"b\" access=\"read\"/>\n  <property name=\"UsedToLogin\" type=\"b\" access=\"read\"/>\n</interface>\n</node>";
declare let _smartcardManager: any;
declare var SmartcardManager: {
    new (): {
        _objectManager: any;
        _insertedTokens: {};
        _loginToken: any;
        _onLoaded(): void;
        _updateToken(token: any): void;
        _addToken(token: any): void;
        _removeToken(token: any): void;
        hasInsertedTokens(): boolean;
        hasInsertedLoginToken(): boolean;
    };
};
//# sourceMappingURL=smartcardManager.d.ts.map