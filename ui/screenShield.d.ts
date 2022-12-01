declare const AccountsService: any;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const Graphene: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const Signals: any;
declare const GnomeSession: any;
declare const OVirt: any;
declare const LoginManager: any;
declare const Lightbox: any;
declare const Main: any;
declare const Overview: any;
declare const MessageTray: any;
declare const ShellDBus: any;
declare const SmartcardManager: any;
declare const adjustAnimationTime: any;
declare const SCREENSAVER_SCHEMA: "org.gnome.desktop.screensaver";
declare const LOCK_ENABLED_KEY: "lock-enabled";
declare const LOCK_DELAY_KEY: "lock-delay";
declare const LOCKDOWN_SCHEMA: "org.gnome.desktop.lockdown";
declare const DISABLE_LOCK_KEY: "disable-lock-screen";
declare const LOCKED_STATE_STR: "screenShield.locked";
declare var STANDARD_FADE_TIME: number;
declare var MANUAL_FADE_TIME: number;
declare var CURTAIN_SLIDE_TIME: number;
/**
 * If you are setting org.gnome.desktop.session.idle-delay directly in dconf,
 * rather than through System Settings, you also need to set
 * org.gnome.settings-daemon.plugins.power.sleep-display-ac and
 * org.gnome.settings-daemon.plugins.power.sleep-display-battery to the same value.
 * This will ensure that the screen blanks at the right time when it fades out.
 * https://bugzilla.gnome.org/show_bug.cgi?id=668703 explains the dependency.
 */
declare var ScreenShield: {
    new (): {
        actor: any;
        _lockScreenState: any;
        _lockScreenGroup: any;
        _lockDialogGroup: any;
        _presence: any;
        _screenSaverDBus: any;
        _smartcardManager: any;
        _oVirtCredentialsManager: any;
        _loginManager: any;
        _loginSession: any;
        _settings: any;
        _lockSettings: any;
        _isModal: boolean;
        _isGreeter: boolean;
        _isActive: boolean;
        _isLocked: boolean;
        _inUnlockAnimation: boolean;
        _inhibited: boolean;
        _activationTime: number;
        _becameActiveId: number;
        _lockTimeoutId: number;
        _longLightbox: any;
        _shortLightbox: any;
        idleMonitor: any;
        _cursorTracker: any;
        _getLoginSession(): Promise<void>;
        _setActive(active: any): void;
        _setLocked(locked: any): void;
        _activateDialog(): void;
        _maybeCancelDialog(): void;
        _becomeModal(): boolean;
        _grab: any;
        _syncInhibitor(): Promise<void>;
        _inhibitCancellable: any;
        _inhibitor: any;
        _prepareForSleep(loginManager: any, aboutToSuspend: any): void;
        _onStatusChanged(status: any): void;
        _activateFade(lightbox: any, time: any): void;
        _onUserBecameActive(): void;
        _onLongLightbox(lightBox: any): void;
        _onShortLightbox(lightBox: any): void;
        showDialog(): void;
        _hideLockScreenComplete(): void;
        _showPointer(): void;
        _motionId: any;
        _hidePointerUntilMotion(): void;
        _hideLockScreen(animate: any): void;
        _ensureUnlockDialog(allowCancel: any): boolean;
        _dialog: any;
        _wakeUpScreenId: any;
        _onUnlockFailed(): void;
        _resetLockScreen(params: any): void;
        _lockScreenShown(params: any): void;
        _completeLockScreenShown(): void;
        _wakeUpScreen(): void;
        readonly locked: boolean;
        readonly active: boolean;
        readonly activationTime: number;
        deactivate(animate: any): void;
        _continueDeactivate(animate: any): void;
        _completeDeactivate(): void;
        activate(animate: any): void;
        lock(animate: any): void;
        lockIfWasLocked(): void;
    };
};
//# sourceMappingURL=screenShield.d.ts.map