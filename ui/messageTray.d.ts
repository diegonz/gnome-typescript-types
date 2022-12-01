declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const Calendar: any;
declare const GnomeSession: any;
declare const Layout: any;
declare const Main: any;
declare const Params: any;
declare const SignalTracker: any;
declare const SHELL_KEYBINDINGS_SCHEMA: "org.gnome.shell.keybindings";
declare var ANIMATION_TIME: number;
declare var NOTIFICATION_TIMEOUT: number;
declare var HIDE_TIMEOUT: number;
declare var LONGER_HIDE_TIMEOUT: number;
declare var MAX_NOTIFICATIONS_IN_QUEUE: number;
declare var MAX_NOTIFICATIONS_PER_SOURCE: number;
declare var MAX_NOTIFICATION_BUTTONS: number;
declare var MOUSE_LEFT_ACTOR_THRESHOLD: number;
declare var IDLE_TIME: number;
declare namespace State {
    const HIDDEN: number;
    const SHOWING: number;
    const SHOWN: number;
    const HIDING: number;
}
declare namespace NotificationDestroyedReason {
    const EXPIRED: number;
    const DISMISSED: number;
    const SOURCE_CLOSED: number;
    const REPLACED: number;
}
declare namespace Urgency {
    const LOW: number;
    const NORMAL: number;
    const HIGH: number;
    const CRITICAL: number;
}
declare namespace PrivacyScope {
    const USER: number;
    const SYSTEM: number;
}
declare var FocusGrabber: {
    new (actor: any): {
        _actor: any;
        _prevKeyFocusActor: any;
        _focused: boolean;
        grabFocus(): void;
        _focusUngrabbed(): boolean;
        _focusActorChanged(): void;
        ungrabFocus(): void;
    };
};
declare var NotificationPolicy: any;
declare var NotificationGenericPolicy: any;
declare var NotificationApplicationPolicy: any;
declare var Notification: any;
declare var NotificationBanner: any;
declare var SourceActor: any;
declare var Source: any;
declare var MessageTray: any;
declare var SystemNotificationSource: any;
//# sourceMappingURL=messageTray.d.ts.map