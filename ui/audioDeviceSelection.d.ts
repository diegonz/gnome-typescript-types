declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const Dialog: any;
declare const Main: any;
declare const ModalDialog: any;
declare const loadInterfaceXML: any;
declare namespace AudioDevice {
    const HEADPHONES: number;
    const HEADSET: number;
    const MICROPHONE: number;
}
declare const AudioDeviceSelectionIface: any;
declare var AudioDeviceSelectionDialog: any;
declare var AudioDeviceSelectionDBus: {
    new (): {
        _audioSelectionDialog: any;
        _dbusImpl: any;
        _onDialogClosed(): void;
        _onDeviceSelected(dialog: any, device: any): void;
        OpenAsync(params: any, invocation: any): void;
        CloseAsync(params: any, invocation: any): void;
    };
};
//# sourceMappingURL=audioDeviceSelection.d.ts.map