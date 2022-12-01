declare function findAppFromInhibitor(inhibitor: any): any;
declare function _roundSecondsToInterval(totalSeconds: any, secondsLeft: any, interval: any): number;
declare function _setCheckBoxLabel(checkBox: any, text: any): void;
declare function init(): void;
declare function init(): void;
declare function init(): void;
declare const AccountsService: any;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Pango: any;
declare const Polkit: any;
declare const Shell: any;
declare const St: any;
declare const UPower: any;
declare const CheckBox: any;
declare const Dialog: any;
declare const GnomeSession: any;
declare const LoginManager: any;
declare const ModalDialog: any;
declare const UserWidget: any;
declare const loadInterfaceXML: any;
declare const _ITEM_ICON_SIZE: 64;
declare const LOW_BATTERY_THRESHOLD: 30;
declare const EndSessionDialogIface: any;
declare namespace logoutDialogContent {
    const subjectWithUser: any;
    const subject: any;
    function descriptionWithUser(user: any, seconds: any): any;
    function description(seconds: any): any;
    const showBatteryWarning: boolean;
    const confirmButtons: {
        signal: string;
        label: any;
    }[];
    const showOtherSessions: boolean;
}
declare namespace shutdownDialogContent {
    const subject_1: any;
    export { subject_1 as subject };
    export const subjectWithUpdates: any;
    export function description(seconds: any): any;
    export const checkBoxText: any;
    const showBatteryWarning_1: boolean;
    export { showBatteryWarning_1 as showBatteryWarning };
    const confirmButtons_1: {
        signal: string;
        label: any;
    }[];
    export { confirmButtons_1 as confirmButtons };
    export const iconName: string;
    const showOtherSessions_1: boolean;
    export { showOtherSessions_1 as showOtherSessions };
}
declare namespace restartDialogContent {
    const subject_2: any;
    export { subject_2 as subject };
    const subjectWithUpdates_1: any;
    export { subjectWithUpdates_1 as subjectWithUpdates };
    export function description(seconds: any): any;
    const checkBoxText_1: any;
    export { checkBoxText_1 as checkBoxText };
    const showBatteryWarning_2: boolean;
    export { showBatteryWarning_2 as showBatteryWarning };
    const confirmButtons_2: {
        signal: string;
        label: any;
    }[];
    export { confirmButtons_2 as confirmButtons };
    const iconName_1: string;
    export { iconName_1 as iconName };
    const showOtherSessions_2: boolean;
    export { showOtherSessions_2 as showOtherSessions };
}
declare namespace restartUpdateDialogContent {
    const subject_3: any;
    export { subject_3 as subject };
    export function description(seconds: any): any;
    const showBatteryWarning_3: boolean;
    export { showBatteryWarning_3 as showBatteryWarning };
    const confirmButtons_3: {
        signal: string;
        label: any;
    }[];
    export { confirmButtons_3 as confirmButtons };
    export const unusedFutureButtonForTranslation: any;
    export const unusedFutureCheckBoxForTranslation: any;
    const iconName_2: string;
    export { iconName_2 as iconName };
    const showOtherSessions_3: boolean;
    export { showOtherSessions_3 as showOtherSessions };
}
declare namespace restartUpgradeDialogContent {
    const subject_4: any;
    export { subject_4 as subject };
    export function upgradeDescription(distroName: any, distroVersion: any): any;
    export const disableTimer: boolean;
    const showBatteryWarning_4: boolean;
    export { showBatteryWarning_4 as showBatteryWarning };
    const confirmButtons_4: {
        signal: string;
        label: any;
    }[];
    export { confirmButtons_4 as confirmButtons };
    const iconName_3: string;
    export { iconName_3 as iconName };
    const showOtherSessions_4: boolean;
    export { showOtherSessions_4 as showOtherSessions };
}
declare namespace DialogType {
    const LOGOUT: number;
    const SHUTDOWN: number;
    const RESTART: number;
    const UPDATE_RESTART: number;
    const UPGRADE_RESTART: number;
}
declare const DialogContent: {
    0: {
        subjectWithUser: any;
        subject: any;
        descriptionWithUser(user: any, seconds: any): any;
        description(seconds: any): any;
        showBatteryWarning: boolean;
        confirmButtons: {
            signal: string;
            label: any;
        }[];
        showOtherSessions: boolean;
    };
    1: {
        subject: any;
        subjectWithUpdates: any;
        description(seconds: any): any;
        checkBoxText: any;
        showBatteryWarning: boolean;
        confirmButtons: {
            signal: string;
            label: any;
        }[];
        iconName: string;
        showOtherSessions: boolean;
    };
    2: {
        subject: any;
        subjectWithUpdates: any;
        description(seconds: any): any;
        checkBoxText: any;
        showBatteryWarning: boolean;
        confirmButtons: {
            signal: string;
            label: any;
        }[];
        iconName: string;
        showOtherSessions: boolean;
    };
    3: {
        subject: any;
        description(seconds: any): any;
        showBatteryWarning: boolean;
        confirmButtons: {
            signal: string;
            label: any;
        }[];
        unusedFutureButtonForTranslation: any;
        unusedFutureCheckBoxForTranslation: any;
        iconName: string;
        showOtherSessions: boolean;
    };
    4: {
        subject: any;
        upgradeDescription(distroName: any, distroVersion: any): any;
        disableTimer: boolean;
        showBatteryWarning: boolean;
        confirmButtons: {
            signal: string;
            label: any;
        }[];
        iconName: string;
        showOtherSessions: boolean;
    };
};
declare var MAX_USERS_IN_SESSION_DIALOG: number;
declare const LogindSessionIface: any;
declare const LogindSession: any;
declare const PkOfflineIface: any;
declare const PkOfflineProxy: any;
declare const UPowerIface: any;
declare const UPowerProxy: any;
declare var EndSessionDialog: any;
//# sourceMappingURL=endSessionDialog.d.ts.map