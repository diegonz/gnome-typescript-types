declare function VmwareCredentials(): any;
declare function getVmwareCredentialsManager(): any;
declare const Gio: any;
declare const Credential: any;
declare const dbusPath: "/org/vmware/viewagent/Credentials";
declare const dbusInterface: "org.vmware.viewagent.Credentials";
declare var SERVICE_NAME: string;
declare const VmwareCredentialsIface: string;
declare const VmwareCredentialsInfo: any;
declare let _vmwareCredentialsManager: any;
declare var VmwareCredentialsManager: {
    new (): {
        _credentials: any;
        token: any;
    };
};
//# sourceMappingURL=vmware.d.ts.map