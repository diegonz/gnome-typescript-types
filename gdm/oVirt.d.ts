declare function OVirtCredentials(): any;
declare function getOVirtCredentialsManager(): any;
declare const Gio: any;
declare const Credential: any;
declare var SERVICE_NAME: string;
declare const OVirtCredentialsIface: "\n<node>\n<interface name=\"org.ovirt.vdsm.Credentials\">\n<signal name=\"UserAuthenticated\">\n    <arg type=\"s\" name=\"token\"/>\n</signal>\n</interface>\n</node>";
declare const OVirtCredentialsInfo: any;
declare let _oVirtCredentialsManager: any;
declare var OVirtCredentialsManager: {
    new (): {
        _credentials: any;
        token: any;
    };
};
//# sourceMappingURL=oVirt.d.ts.map