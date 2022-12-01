declare function _setButtonsForChoices(dialog: any, oldChoices: any, choices: any): void;
declare function _setLabelsForMessage(content: any, message: any): void;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Pango: any;
declare const Shell: any;
declare const St: any;
declare const Animation: any;
declare const CheckBox: any;
declare const Dialog: any;
declare const Main: any;
declare const MessageTray: any;
declare const ModalDialog: any;
declare const Params: any;
declare const ShellEntry: any;
declare const loadInterfaceXML: any;
declare const Util: any;
declare var LIST_ITEM_ICON_SIZE: number;
declare var WORK_SPINNER_ICON_SIZE: number;
declare const REMEMBER_MOUNT_PASSWORD_KEY: "remember-mount-password";
declare var ShellMountOperation: {
    new (source: any, params: any): {
        _dialog: any;
        _existingDialog: any;
        _processesDialog: any;
        mountOp: any;
        _closeExistingDialog(): void;
        _onAskQuestion(op: any, message: any, choices: any): void;
        _onAskPassword(op: any, message: any, defaultUser: any, defaultDomain: any, flags: any): void;
        close(_op: any): void;
        _notifier: any;
        _onShowProcesses2(op: any): void;
        _onShowUnmountProgress(op: any, message: any, timeLeft: any, bytesLeft: any): void;
        borrowDialog(): any;
    };
};
declare var ShellUnmountNotifier: any;
declare var ShellMountQuestionDialog: any;
declare var ShellMountPasswordDialog: any;
declare var ShellProcessesDialog: any;
declare const GnomeShellMountOpIface: any;
declare namespace ShellMountOperationType {
    const NONE: number;
    const ASK_PASSWORD: number;
    const ASK_QUESTION: number;
    const SHOW_PROCESSES: number;
}
declare var GnomeShellMountOpHandler: {
    new (): {
        _dbusImpl: any;
        _dialog: any;
        _ensureEmptyRequest(): void;
        _currentId: string;
        _currentInvocation: any;
        _currentType: any;
        _clearCurrentRequest(response: any, details: any): void;
        _setCurrentRequest(invocation: any, id: any, type: any): boolean;
        _closeDialog(): void;
        /**
         * AskPassword:
         * @param {Array} params
         *   {string} id: an opaque ID identifying the object for which
         *       the operation is requested
         *   {string} message: the message to display
         *   {string} icon_name: the name of an icon to display
         *   {string} default_user: the default username for display
         *   {string} default_domain: the default domain for display
         *   {Gio.AskPasswordFlags} flags: a set of GAskPasswordFlags
         *   {Gio.MountOperationResults} response: a GMountOperationResult
         *   {Object} response_details: a dictionary containing response details as
         *       entered by the user. The dictionary MAY contain the following
         *       properties:
         *   - "password" -> (s): a password to be used to complete the mount operation
         *   - "password_save" -> (u): a GPasswordSave
         * @param {Gio.DBusMethodInvocation} invocation
         *      The ID must be unique in the context of the calling process.
         *
         * The dialog will stay visible until clients call the Close() method, or
         * another dialog becomes visible.
         * Calling AskPassword again for the same id will have the effect to clear
         * the existing dialog and update it with a message indicating the previous
         * attempt went wrong.
         */
        AskPasswordAsync(params: any[], invocation: Gio.DBusMethodInvocation): void;
        /**
         * AskQuestion:
         * @param {Array} params - params
         *   {string} id: an opaque ID identifying the object for which
         *       the operation is requested
         *      The ID must be unique in the context of the calling process.
         *   {string} message: the message to display
         *   {string} icon_name: the name of an icon to display
         *   {string[]} choices: an array of choice strings
         * @param {Gio.DBusMethodInvocation} invocation - invocation
         *
         * The dialog will stay visible until clients call the Close() method, or
         * another dialog becomes visible.
         * Calling AskQuestion again for the same id will have the effect to clear
         * update the dialog with the new question.
         */
        AskQuestionAsync(params: any[], invocation: Gio.DBusMethodInvocation): void;
        /**
         * ShowProcesses:
         * @param {Array} params - params
         *   {string} id: an opaque ID identifying the object for which
         *       the operation is requested
         *      The ID must be unique in the context of the calling process.
         *   {string} message: the message to display
         *   {string} icon_name: the name of an icon to display
         *   {number[]} application_pids: the PIDs of the applications to display
         *   {string[]} choices: an array of choice strings
         * @param {Gio.DBusMethodInvocation} invocation - invocation
         *
         * The dialog will stay visible until clients call the Close() method, or
         * another dialog becomes visible.
         * Calling ShowProcesses again for the same id will have the effect to clear
         * the existing dialog and update it with the new message and the new list
         * of processes.
         */
        ShowProcessesAsync(params: any[], invocation: Gio.DBusMethodInvocation): void;
        /**
         * Close:
         * @param {Array} _params - params
         * @param {Gio.DBusMethodInvocation} _invocation - invocation
         *
         * Closes a dialog previously opened by AskPassword, AskQuestion or ShowProcesses.
         * If no dialog is open, does nothing.
         */
        Close(_params: any[], _invocation: Gio.DBusMethodInvocation): void;
    };
};
//# sourceMappingURL=shellMountOperation.d.ts.map