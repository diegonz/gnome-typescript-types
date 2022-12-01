declare function sameYear(dateA: any, dateB: any): boolean;
declare function sameMonth(dateA: any, dateB: any): boolean;
declare function sameDay(dateA: any, dateB: any): boolean;
declare function _isWorkDay(date: any): boolean;
declare function _getBeginningOfDay(date: any): Date;
declare function _getEndOfDay(date: any): Date;
declare function _getCalendarDayAbbreviation(dayNumber: any): any;
declare function CalendarServer(): any;
declare function _datesEqual(a: any, b: any): boolean;
/**
 * Checks whether an event overlaps a given interval
 *
 * @param {Date} e0 Beginning of the event
 * @param {Date} e1 End of the event
 * @param {Date} i0 Beginning of the interval
 * @param {Date} i1 End of the interval
 * @returns {boolean} Whether there was an overlap
 */
declare function _eventOverlapsInterval(e0: Date, e1: Date, i0: Date, i1: Date): boolean;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Shell: any;
declare const St: any;
declare const Main: any;
declare const MessageList: any;
declare const MessageTray: any;
declare const Mpris: any;
declare const PopupMenu: any;
declare const Util: any;
declare const loadInterfaceXML: any;
declare var SHOW_WEEKDATE_KEY: string;
declare var MESSAGE_ICON_SIZE: number;
declare function NC_(context: any, str: any): string;
declare var CalendarEvent: {
    new (id: any, date: any, end: any, summary: any): {
        id: any;
        date: any;
        end: any;
        summary: any;
    };
};
declare var EventSourceBase: any;
declare var EmptyEventSource: any;
declare const CalendarServerIface: any;
declare const CalendarServerInfo: any;
declare var DBusEventSource: any;
declare var Calendar: any;
declare var NotificationMessage: any;
declare var TimeLabel: any;
declare var NotificationSection: any;
declare var Placeholder: any;
declare const DoNotDisturbSwitch: any;
declare var CalendarMessageList: any;
//# sourceMappingURL=calendar.d.ts.map