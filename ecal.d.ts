/**
 * ECal 2.0
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Camel from './camel';
import * as EDataServer from './edataserver';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as ICalGLib from './icalglib';
import * as Soup from './soup';
import * as libxml2 from './libxml2';
import * as GLib from './glib';

export const BACKEND_PROPERTY_ALARM_EMAIL_ADDRESS: string;
export const BACKEND_PROPERTY_CAL_EMAIL_ADDRESS: string;
export const BACKEND_PROPERTY_DEFAULT_OBJECT: string;
export const BACKEND_PROPERTY_REVISION: string;
export const EVOLUTION_ALARM_UID_PROPERTY: string;
export const EVOLUTION_ENDDATE_PARAMETER: string;
export const LIBICAL_GLIB_UNSTABLE_API: number;
export const STATIC_CAPABILITY_ALARM_DESCRIPTION: string;
export const STATIC_CAPABILITY_ALL_DAY_EVENT_AS_TIME: string;
export const STATIC_CAPABILITY_BULK_ADDS: string;
export const STATIC_CAPABILITY_BULK_MODIFIES: string;
export const STATIC_CAPABILITY_BULK_REMOVES: string;
export const STATIC_CAPABILITY_COMPONENT_COLOR: string;
export const STATIC_CAPABILITY_CREATE_MESSAGES: string;
export const STATIC_CAPABILITY_DELEGATE_SUPPORTED: string;
export const STATIC_CAPABILITY_DELEGATE_TO_MANY: string;
export const STATIC_CAPABILITY_HAS_UNACCEPTED_MEETING: string;
export const STATIC_CAPABILITY_NO_ALARM_AFTER_START: string;
export const STATIC_CAPABILITY_NO_ALARM_REPEAT: string;
export const STATIC_CAPABILITY_NO_AUDIO_ALARMS: string;
export const STATIC_CAPABILITY_NO_CONV_TO_ASSIGN_TASK: string;
export const STATIC_CAPABILITY_NO_CONV_TO_RECUR: string;
export const STATIC_CAPABILITY_NO_DISPLAY_ALARMS: string;
export const STATIC_CAPABILITY_NO_EMAIL_ALARMS: string;
export const STATIC_CAPABILITY_NO_GEN_OPTIONS: string;
export const STATIC_CAPABILITY_NO_MEMO_START_DATE: string;
export const STATIC_CAPABILITY_NO_ORGANIZER: string;
export const STATIC_CAPABILITY_NO_PROCEDURE_ALARMS: string;
export const STATIC_CAPABILITY_NO_TASK_ASSIGNMENT: string;
export const STATIC_CAPABILITY_NO_THISANDFUTURE: string;
export const STATIC_CAPABILITY_NO_THISANDPRIOR: string;
export const STATIC_CAPABILITY_NO_TRANSPARENCY: string;
export const STATIC_CAPABILITY_ONE_ALARM_ONLY: string;
export const STATIC_CAPABILITY_ORGANIZER_MUST_ACCEPT: string;
export const STATIC_CAPABILITY_ORGANIZER_MUST_ATTEND: string;
export const STATIC_CAPABILITY_ORGANIZER_NOT_EMAIL_ADDRESS: string;
export const STATIC_CAPABILITY_RECURRENCES_NO_MASTER: string;
export const STATIC_CAPABILITY_REFRESH_SUPPORTED: string;
export const STATIC_CAPABILITY_REMOVE_ALARMS: string;
export const STATIC_CAPABILITY_REMOVE_ONLY_THIS: string;
export const STATIC_CAPABILITY_REQ_SEND_OPTIONS: string;
export const STATIC_CAPABILITY_SAVE_SCHEDULES: string;
export const STATIC_CAPABILITY_SIMPLE_MEMO: string;
export const STATIC_CAPABILITY_TASK_CAN_RECUR: string;
export const STATIC_CAPABILITY_TASK_DATE_ONLY: string;
export const STATIC_CAPABILITY_TASK_HANDLE_RECUR: string;
export const STATIC_CAPABILITY_TASK_NO_ALARM: string;

export function isodate_from_time_t(t: number): string;

export function match_tzid(tzid: string): string;

export function recur_describe_recurrence(
    icalcomp: ICalGLib.Component,
    week_start_day: GLib.DateWeekday,
    flags: number
): string | null;

export function recur_describe_recurrence_ex(
    icalcomp: ICalGLib.Component,
    week_start_day: GLib.DateWeekday,
    flags: number,
    datetime_fmt_func?: RecurFormatDateTimeFunc | null
): string | null;

export function recur_ensure_end_dates(
    comp: Component,
    refresh: boolean,
    tz_cb: RecurResolveTimezoneCb,
    cancellable?: Gio.Cancellable | null
): boolean;

export function recur_generate_instances_sync(
    icalcomp: ICalGLib.Component,
    interval_start: ICalGLib.Time,
    interval_end: ICalGLib.Time,
    default_timezone: ICalGLib.Timezone,
    cancellable?: Gio.Cancellable | null
): boolean;

export function recur_get_localized_nth(nth: number): string;

export function recur_obtain_enddate(
    ir: ICalGLib.Recurrence,
    prop: ICalGLib.Property,
    zone: ICalGLib.Timezone,
    convert_end_date: boolean
): number;

export function reminder_data_free(rd?: any | null): void;

export function system_timezone_get_location(): string;

export function time_add_day(time: number, days: number): number;

export function time_add_day_with_zone(time: number, days: number, zone: ICalGLib.Timezone): number;

export function time_add_month_with_zone(time: number, months: number, zone: ICalGLib.Timezone): number;

export function time_add_week(time: number, weeks: number): number;

export function time_add_week_with_zone(time: number, weeks: number, zone: ICalGLib.Timezone): number;

export function time_day_begin(t: number): number;

export function time_day_begin_with_zone(time: number, zone: ICalGLib.Timezone): number;

export function time_day_end(t: number): number;

export function time_day_end_with_zone(time: number, zone: ICalGLib.Timezone): number;

export function time_day_of_week(day: number, month: number, year: number): number;

export function time_day_of_year(day: number, month: number, year: number): number;

export function time_days_in_month(year: number, month: number): number;

export function time_from_isodate(str: string): number;

export function time_is_leap_year(year: number): boolean;

export function time_leap_years_up_to(year: number): number;

export function time_month_begin_with_zone(time: number, zone: ICalGLib.Timezone): number;

export function time_to_gdate_with_zone(date: GLib.Date, time: number, zone?: ICalGLib.Timezone | null): void;

export function time_week_begin_with_zone(time: number, week_start_day: number, zone: ICalGLib.Timezone): number;

export function time_year_begin_with_zone(time: number, zone: ICalGLib.Timezone): number;

export function util_add_timezones_from_component(vcal_comp: ICalGLib.Component, icalcomp: ICalGLib.Component): void;

export function util_component_dup_x_property(icalcomp: ICalGLib.Component, x_name: string): string | null;

export function util_component_find_x_property(icalcomp: ICalGLib.Component, x_name: string): ICalGLib.Property | null;

export function util_component_get_recurid_as_string(icalcomp: ICalGLib.Component): string | null;

export function util_component_has_alarms(icalcomp: ICalGLib.Component): boolean;

export function util_component_has_attendee(icalcomp: ICalGLib.Component): boolean;

export function util_component_has_organizer(icalcomp: ICalGLib.Component): boolean;

export function util_component_has_property(icalcomp: ICalGLib.Component, prop_kind: ICalGLib.PropertyKind): boolean;

export function util_component_has_rdates(icalcomp: ICalGLib.Component): boolean;

export function util_component_has_recurrences(icalcomp: ICalGLib.Component): boolean;

export function util_component_has_rrules(icalcomp: ICalGLib.Component): boolean;

export function util_component_has_x_property(icalcomp: ICalGLib.Component, x_name: string): boolean;

export function util_component_is_instance(icalcomp: ICalGLib.Component): boolean;

export function util_component_remove_property_by_kind(
    icalcomp: ICalGLib.Component,
    kind: ICalGLib.PropertyKind,
    all: boolean
): number;

export function util_component_remove_x_property(icalcomp: ICalGLib.Component, x_name: string): boolean;

export function util_component_set_x_property(
    icalcomp: ICalGLib.Component,
    x_name: string,
    value?: string | null
): void;

export function util_conflict_resolution_to_operation_flags(
    conflict_resolution: EDataServer.ConflictResolution
): number;

export function util_construct_instance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time): ICalGLib.Component | null;

export function util_copy_timezone(zone: ICalGLib.Timezone): ICalGLib.Timezone;

export function util_generate_alarms_for_comp(
    comp: Component,
    start: number,
    end: number,
    omit: ComponentAlarmAction,
    resolve_tzid: RecurResolveTimezoneCb,
    default_timezone: ICalGLib.Timezone
): ComponentAlarms | null;

export function util_generate_alarms_for_list(
    comps: Component[],
    start: number,
    end: number,
    omit: ComponentAlarmAction,
    resolve_tzid: RecurResolveTimezoneCb,
    default_timezone: ICalGLib.Timezone
): [number, ComponentAlarms[]];

export function util_get_component_occur_times(
    comp: Component,
    tz_cb: RecurResolveTimezoneCb,
    default_timezone: ICalGLib.Timezone,
    kind: ICalGLib.ComponentKind
): [number, number];

export function util_get_system_timezone(): ICalGLib.Timezone | null;

export function util_get_system_timezone_location(): string;

export function util_icaltime_to_tm(itt: ICalGLib.Time): any | null;

export function util_icaltime_to_tm_with_zone(
    itt: ICalGLib.Time,
    from_zone: ICalGLib.Timezone,
    to_zone: ICalGLib.Timezone
): any | null;

export function util_init_recur_task_sync(
    vtodo: ICalGLib.Component,
    cal_client: Client,
    cancellable?: Gio.Cancellable | null
): boolean;

export function util_inline_local_attachments_sync(
    component: ICalGLib.Component,
    cancellable?: Gio.Cancellable | null
): boolean;

export function util_is_first_instance(comp: Component, rid: ICalGLib.Time, tz_cb: RecurResolveTimezoneCb): boolean;

export function util_mark_task_complete_sync(
    vtodo: ICalGLib.Component,
    completed_time: number,
    cal_client: Client,
    cancellable?: Gio.Cancellable | null
): boolean;

export function util_new_component(kind: ICalGLib.ComponentKind): ICalGLib.Component;

export function util_new_top_level(): ICalGLib.Component;

export function util_normalize_rrule_until_value(
    icalcomp: ICalGLib.Component,
    ttuntil: ICalGLib.Time,
    tz_cb: RecurResolveTimezoneCb
): void;

export function util_operation_flags_to_conflict_resolution(flags: number): EDataServer.ConflictResolution;

export function util_parse_ics_file(filename: string): ICalGLib.Component | null;

export function util_parse_ics_string(string: string): ICalGLib.Component | null;

export function util_priority_from_string(string: string): number;

export function util_priority_to_string(priority: number): string;

export function util_property_has_parameter(prop: ICalGLib.Property, param_kind: ICalGLib.ParameterKind): boolean;

export function util_remove_instances(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType): void;

export function util_remove_instances_ex(
    icalcomp: ICalGLib.Component,
    rid: ICalGLib.Time,
    mod: ObjModType,
    tz_cb: RecurResolveTimezoneCb
): void;

export function util_seconds_to_string(seconds: number): string;

export function util_split_at_instance(
    icalcomp: ICalGLib.Component,
    rid: ICalGLib.Time,
    master_dtstart?: ICalGLib.Time | null
): ICalGLib.Component | null;

export function util_split_at_instance_ex(
    icalcomp: ICalGLib.Component,
    rid: ICalGLib.Time,
    master_dtstart: ICalGLib.Time | null,
    tz_cb: RecurResolveTimezoneCb
): ICalGLib.Component | null;

export function util_tm_to_icaltime(tm: any | null, is_date: boolean): ICalGLib.Time;

export type ComponentParameterBagFilterFunc = (parameter: ICalGLib.Parameter) => boolean;
export type ComponentPropertyBagFilterFunc = (property: ICalGLib.Property) => boolean;
export type RecurFormatDateTimeFunc = (itt: ICalGLib.Time, buffer: string, buffer_size: number) => void;
export type RecurInstanceCb = (
    icomp: ICalGLib.Component,
    instance_start: ICalGLib.Time,
    instance_end: ICalGLib.Time,
    cancellable?: Gio.Cancellable | null
) => boolean;
export type RecurResolveTimezoneCb = (tzid: string, cancellable?: Gio.Cancellable | null) => ICalGLib.Timezone | null;

export namespace ClientError {
    export const $gtype: GObject.GType<ClientError>;
}

export enum ClientError {
    NO_SUCH_CALENDAR = 0,
    OBJECT_NOT_FOUND = 1,
    INVALID_OBJECT = 2,
    UNKNOWN_USER = 3,
    OBJECT_ID_ALREADY_EXISTS = 4,
    INVALID_RANGE = 5,
}

export namespace ClientSourceType {
    export const $gtype: GObject.GType<ClientSourceType>;
}

export enum ClientSourceType {
    EVENTS = 0,
    TASKS = 1,
    MEMOS = 2,
}

export namespace ComponentAlarmAction {
    export const $gtype: GObject.GType<ComponentAlarmAction>;
}

export enum ComponentAlarmAction {
    NONE = 0,
    AUDIO = 1,
    DISPLAY = 2,
    EMAIL = 3,
    PROCEDURE = 4,
    UNKNOWN = 5,
}

export namespace ComponentAlarmTriggerKind {
    export const $gtype: GObject.GType<ComponentAlarmTriggerKind>;
}

export enum ComponentAlarmTriggerKind {
    NONE = 0,
    RELATIVE_START = 1,
    RELATIVE_END = 2,
    ABSOLUTE = 3,
}

export namespace ComponentClassification {
    export const $gtype: GObject.GType<ComponentClassification>;
}

export enum ComponentClassification {
    NONE = 0,
    PUBLIC = 1,
    PRIVATE = 2,
    CONFIDENTIAL = 3,
    UNKNOWN = 4,
}

export namespace ComponentPeriodKind {
    export const $gtype: GObject.GType<ComponentPeriodKind>;
}

export enum ComponentPeriodKind {
    DATETIME = 0,
    DURATION = 1,
}

export namespace ComponentRangeKind {
    export const $gtype: GObject.GType<ComponentRangeKind>;
}

export enum ComponentRangeKind {
    SINGLE = 0,
    THISPRIOR = 1,
    THISFUTURE = 2,
}

export namespace ComponentTransparency {
    export const $gtype: GObject.GType<ComponentTransparency>;
}

export enum ComponentTransparency {
    NONE = 0,
    TRANSPARENT = 1,
    OPAQUE = 2,
    UNKNOWN = 3,
}

export namespace ComponentVType {
    export const $gtype: GObject.GType<ComponentVType>;
}

export enum ComponentVType {
    NO_TYPE = 0,
    EVENT = 1,
    TODO = 2,
    JOURNAL = 3,
    FREEBUSY = 4,
    TIMEZONE = 5,
}

export namespace ClientViewFlags {
    export const $gtype: GObject.GType<ClientViewFlags>;
}

export enum ClientViewFlags {
    NONE = 0,
    NOTIFY_INITIAL = 1,
}

export namespace ObjModType {
    export const $gtype: GObject.GType<ObjModType>;
}

export enum ObjModType {
    THIS = 1,
    THIS_AND_PRIOR = 2,
    THIS_AND_FUTURE = 4,
    ALL = 7,
    ONLY_THIS = 8,
}

export namespace OperationFlags {
    export const $gtype: GObject.GType<OperationFlags>;
}

export enum OperationFlags {
    NONE = 0,
    CONFLICT_FAIL = 1,
    CONFLICT_USE_NEWER = 2,
    CONFLICT_KEEP_SERVER = 4,
    CONFLICT_KEEP_LOCAL = 0,
    CONFLICT_WRITE_COPY = 8,
    DISABLE_ITIP_MESSAGE = 16,
}

export namespace RecurDescribeRecurrenceFlags {
    export const $gtype: GObject.GType<RecurDescribeRecurrenceFlags>;
}

export enum RecurDescribeRecurrenceFlags {
    NONE = 0,
    PREFIXED = 1,
    FALLBACK = 2,
}

export namespace ReminderWatcherDescribeFlags {
    export const $gtype: GObject.GType<ReminderWatcherDescribeFlags>;
}

export enum ReminderWatcherDescribeFlags {
    NONE = 0,
    MARKUP = 2,
}

export namespace Client {
    export interface ConstructorProperties extends EDataServer.Client.ConstructorProperties {
        [key: string]: any;

        default_timezone: ICalGLib.Timezone;
        defaultTimezone: ICalGLib.Timezone;
        source_type: ClientSourceType;
        sourceType: ClientSourceType;
    }
}

export class Client extends EDataServer.Client implements TimezoneCache, Gio.AsyncInitable<Client>, Gio.Initable {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    default_timezone: ICalGLib.Timezone;
    defaultTimezone: ICalGLib.Timezone;
    source_type: ClientSourceType;
    sourceType: ClientSourceType;

    // Signals

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect_after(signal: 'free-busy-data', callback: (_source: this, object: any | null) => void): number;

    emit(signal: 'free-busy-data', object: any | null): void;

    // Members

    add_timezone(
        zone: ICalGLib.Timezone,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    add_timezone(...args: never[]): never;

    add_timezone_finish(result: Gio.AsyncResult): boolean;

    add_timezone_sync(zone: ICalGLib.Timezone, cancellable?: Gio.Cancellable | null): boolean;

    check_one_alarm_only(): boolean;

    check_organizer_must_accept(): boolean;

    check_organizer_must_attend(): boolean;

    check_recurrences_no_master(): boolean;

    check_save_schedules(): boolean;

    create_object(
        icalcomp: ICalGLib.Component,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    create_object_finish(result: Gio.AsyncResult): [boolean, string | null];

    create_object_sync(
        icalcomp: ICalGLib.Component,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string | null];

    create_objects(
        icalcomps: ICalGLib.Component[],
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    create_objects_finish(result: Gio.AsyncResult): [boolean, string[] | null];

    create_objects_sync(
        icalcomps: ICalGLib.Component[],
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[] | null];

    discard_alarm(
        uid: string,
        rid: string,
        auid: string,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    discard_alarm_finish(result: Gio.AsyncResult): boolean;

    discard_alarm_sync(
        uid: string,
        rid: string,
        auid: string,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    generate_instances(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void;

    generate_instances_for_object(
        icalcomp: ICalGLib.Component,
        start: number,
        end: number,
        cancellable: Gio.Cancellable | null,
        cb: RecurInstanceCb
    ): void;

    generate_instances_for_object_sync(
        icalcomp: ICalGLib.Component,
        start: number,
        end: number,
        cancellable: Gio.Cancellable | null,
        cb: RecurInstanceCb
    ): void;

    generate_instances_sync(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void;

    get_attachment_uris(
        uid: string,
        rid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_attachment_uris_finish(result: Gio.AsyncResult): [boolean, string[]];

    get_attachment_uris_sync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): [boolean, string[]];

    get_component_as_string(icalcomp: ICalGLib.Component): string;

    get_default_object(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_default_object_finish(result: Gio.AsyncResult): [boolean, ICalGLib.Component];

    get_default_object_sync(cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Component];

    get_default_timezone(): ICalGLib.Timezone;

    get_free_busy(
        start: number,
        end: number,
        users: string[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_free_busy_finish(result: Gio.AsyncResult, out_freebusy: Component[]): boolean;

    get_free_busy_sync(
        start: number,
        end: number,
        users: string[],
        out_freebusy: Component[],
        cancellable?: Gio.Cancellable | null
    ): boolean;

    get_local_attachment_store(): string;

    get_object(
        uid: string,
        rid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_object_finish(result: Gio.AsyncResult): [boolean, ICalGLib.Component];

    get_object_list(
        sexp: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_object_list_as_comps(
        sexp: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_object_list_as_comps_finish(result: Gio.AsyncResult): [boolean, Component[]];

    get_object_list_as_comps_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, Component[]];

    get_object_list_finish(result: Gio.AsyncResult): [boolean, ICalGLib.Component[]];

    get_object_list_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Component[]];

    get_object_sync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Component];

    get_objects_for_uid(
        uid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_objects_for_uid_finish(result: Gio.AsyncResult): [boolean, Component[]];

    get_objects_for_uid_sync(uid: string, cancellable?: Gio.Cancellable | null): [boolean, Component[]];

    get_source_type(): ClientSourceType;

    get_timezone(
        tzid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_timezone(...args: never[]): never;

    get_timezone_finish(result: Gio.AsyncResult): [boolean, ICalGLib.Timezone];

    get_timezone_sync(tzid: string, cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Timezone];

    get_view(sexp: string, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_view_finish(result: Gio.AsyncResult): [boolean, ClientView];

    get_view_sync(sexp: string, cancellable?: Gio.Cancellable | null): [boolean, ClientView];

    modify_object(
        icalcomp: ICalGLib.Component,
        mod: ObjModType,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    modify_object_finish(result: Gio.AsyncResult): boolean;

    modify_object_sync(
        icalcomp: ICalGLib.Component,
        mod: ObjModType,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    modify_objects(
        icalcomps: ICalGLib.Component[],
        mod: ObjModType,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    modify_objects_finish(result: Gio.AsyncResult): boolean;

    modify_objects_sync(
        icalcomps: ICalGLib.Component[],
        mod: ObjModType,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    receive_objects(
        icalcomp: ICalGLib.Component,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    receive_objects_finish(result: Gio.AsyncResult): boolean;

    receive_objects_sync(icalcomp: ICalGLib.Component, opflags: number, cancellable?: Gio.Cancellable | null): boolean;

    remove_object(
        uid: string,
        rid: string,
        mod: ObjModType,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_object_finish(result: Gio.AsyncResult): boolean;

    remove_object_sync(
        uid: string,
        rid: string,
        mod: ObjModType,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    remove_objects(
        ids: ComponentId[],
        mod: ObjModType,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_objects_finish(result: Gio.AsyncResult): boolean;

    remove_objects_sync(
        ids: ComponentId[],
        mod: ObjModType,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    send_objects(
        icalcomp: ICalGLib.Component,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    send_objects_finish(result: Gio.AsyncResult): [boolean, string[], ICalGLib.Component];

    send_objects_sync(
        icalcomp: ICalGLib.Component,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[], ICalGLib.Component];

    set_default_timezone(zone: ICalGLib.Timezone): void;

    static check_timezones_sync(
        vcalendar: ICalGLib.Component,
        icalcomps?: ICalGLib.Component[] | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    static connect(
        source: EDataServer.Source,
        source_type: ClientSourceType,
        wait_for_connected_seconds: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Client> | null
    ): void;

    static connect(...args: never[]): never;

    static connect_finish(result: Gio.AsyncResult): EDataServer.Client;

    static connect_sync(
        source: EDataServer.Source,
        source_type: ClientSourceType,
        wait_for_connected_seconds: number,
        cancellable?: Gio.Cancellable | null
    ): EDataServer.Client;

    static error_create(code: ClientError, custom_msg?: string | null): GLib.Error;
    static error_create(...args: never[]): never;

    static error_quark(): GLib.Quark;

    static error_to_string(code: ClientError): string;
    static error_to_string(...args: never[]): never;

    static tzlookup_cb(
        tzid: string,
        ecalclient: Client,
        cancellable?: Gio.Cancellable | null
    ): ICalGLib.Timezone | null;

    static tzlookup_icalcomp_cb(
        tzid: string,
        lookup_data: ClientTzlookupICalCompData,
        cancellable?: Gio.Cancellable | null
    ): ICalGLib.Timezone | null;

    // Implemented Members

    list_timezones(): ICalGLib.Timezone[];

    vfunc_timezone_added(zone: ICalGLib.Timezone): void;

    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): Client;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace ClientView {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        client: Client;
        connection: Gio.DBusConnection;
        object_path: string;
        objectPath: string;
    }
}

export class ClientView extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<ClientView>;

    constructor(properties?: Partial<ClientView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    client: Client;
    connection: Gio.DBusConnection;
    object_path: string;
    objectPath: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'complete', callback: (_source: this, object: GLib.Error) => void): number;

    connect_after(signal: 'complete', callback: (_source: this, object: GLib.Error) => void): number;

    emit(signal: 'complete', object: GLib.Error): void;

    connect(signal: 'objects-added', callback: (_source: this, objects: ICalGLib.Component[]) => void): number;

    connect_after(signal: 'objects-added', callback: (_source: this, objects: ICalGLib.Component[]) => void): number;

    emit(signal: 'objects-added', objects: ICalGLib.Component[]): void;

    connect(signal: 'objects-modified', callback: (_source: this, objects: ICalGLib.Component[]) => void): number;

    connect_after(signal: 'objects-modified', callback: (_source: this, objects: ICalGLib.Component[]) => void): number;

    emit(signal: 'objects-modified', objects: ICalGLib.Component[]): void;

    connect(signal: 'objects-removed', callback: (_source: this, uids: ComponentId[]) => void): number;

    connect_after(signal: 'objects-removed', callback: (_source: this, uids: ComponentId[]) => void): number;

    emit(signal: 'objects-removed', uids: ComponentId[]): void;

    connect(signal: 'progress', callback: (_source: this, object: number, p0: string) => void): number;

    connect_after(signal: 'progress', callback: (_source: this, object: number, p0: string) => void): number;

    emit(signal: 'progress', object: number, p0: string): void;

    // Members

    get_connection(): Gio.DBusConnection;

    get_object_path(): string;

    is_running(): boolean;

    ref_client(): Client;

    set_fields_of_interest(fields_of_interest?: string[] | null): void;

    set_flags(flags: ClientViewFlags): void;

    start(): void;

    stop(): void;

    vfunc_complete(error: GLib.Error): void;

    vfunc_progress(percent: number, message: string): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace Component {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Component extends GObject.Object {
    static $gtype: GObject.GType<Component>;

    constructor(properties?: Partial<Component.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Component.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Component;

    static new_from_icalcomponent(icalcomp: ICalGLib.Component): Component;

    static new_from_string(calobj: string): Component;

    static new_vtype(vtype: ComponentVType): Component;

    // Members

    abort_sequence(): void;

    add_alarm(alarm: ComponentAlarm): void;

    clone(): Component;

    commit_sequence(): void;

    get_alarm(auid: string): ComponentAlarm | null;

    get_alarm_uids(): string[] | null;

    get_all_alarms(): ComponentAlarm[] | null;

    get_as_string(): string;

    get_attachments(): ICalGLib.Attach[] | null;

    get_attendees(): ComponentAttendee[] | null;

    get_categories(): string | null;

    get_categories_list(): string[] | null;

    get_classification(): ComponentClassification;

    get_comments(): ComponentText[] | null;

    get_completed(): ICalGLib.Time;

    get_contacts(): ComponentText[];

    get_created(): ICalGLib.Time;

    get_descriptions(): ComponentText[] | null;

    get_dtend(): ComponentDateTime | null;

    get_dtstamp(): ICalGLib.Time | null;

    get_dtstart(): ComponentDateTime | null;

    get_due(): ComponentDateTime | null;

    get_exdates(): ComponentDateTime[] | null;

    get_exrule_properties(): ICalGLib.Property[] | null;

    get_exrules(): ICalGLib.Recurrence[] | null;

    get_geo(): ICalGLib.Geo | null;

    get_icalcomponent(): ICalGLib.Component | null;

    get_id(): ComponentId;

    get_last_modified(): ICalGLib.Time;

    get_location(): string | null;

    get_organizer(): ComponentOrganizer | null;

    get_percent_complete(): number;

    get_priority(): number;

    get_rdates(): ComponentPeriod[] | null;

    get_recurid(): ComponentRange | null;

    get_recurid_as_string(): string;

    get_rrule_properties(): ICalGLib.Property[] | null;

    get_rrules(): ICalGLib.Recurrence[] | null;

    get_sequence(): number;

    get_status(): ICalGLib.PropertyStatus;

    get_summary(): ComponentText | null;

    get_transparency(): ComponentTransparency;

    get_uid(): string;

    get_url(): string | null;

    get_vtype(): ComponentVType;

    has_alarms(): boolean;

    has_attachments(): boolean;

    has_attendees(): boolean;

    has_exceptions(): boolean;

    has_exdates(): boolean;

    has_exrules(): boolean;

    has_organizer(): boolean;

    has_rdates(): boolean;

    has_recurrences(): boolean;

    has_rrules(): boolean;

    has_simple_recurrence(): boolean;

    is_instance(): boolean;

    remove_alarm(auid: string): void;

    remove_all_alarms(): void;

    set_attachments(attachments?: ICalGLib.Attach[] | null): void;

    set_attendees(attendee_list?: ComponentAttendee[] | null): void;

    set_categories(categories: string): void;

    set_categories_list(categ_list: string[]): void;

    set_classification(classif: ComponentClassification): void;

    set_comments(text_list: ComponentText[]): void;

    set_completed(tt?: ICalGLib.Time | null): void;

    set_contacts(text_list: ComponentText[]): void;

    set_created(tt?: ICalGLib.Time | null): void;

    set_descriptions(text_list: ComponentText[]): void;

    set_dtend(dt?: ComponentDateTime | null): void;

    set_dtstamp(tt: ICalGLib.Time): void;

    set_dtstart(dt?: ComponentDateTime | null): void;

    set_due(dt?: ComponentDateTime | null): void;

    set_exdates(exdate_list?: ComponentDateTime[] | null): void;

    set_exrules(recur_list?: ICalGLib.Recurrence[] | null): void;

    set_geo(geo?: ICalGLib.Geo | null): void;

    set_icalcomponent(icalcomp?: ICalGLib.Component | null): boolean;

    set_last_modified(tt?: ICalGLib.Time | null): void;

    set_location(location?: string | null): void;

    set_new_vtype(type: ComponentVType): void;

    set_organizer(organizer?: ComponentOrganizer | null): void;

    set_percent_complete(percent: number): void;

    set_priority(priority: number): void;

    set_rdates(rdate_list?: ComponentPeriod[] | null): void;

    set_recurid(recur_id?: ComponentRange | null): void;

    set_rrules(recur_list?: ICalGLib.Recurrence[] | null): void;

    set_sequence(sequence: number): void;

    set_status(status: ICalGLib.PropertyStatus): void;

    set_summary(summary: ComponentText): void;

    set_transparency(transp: ComponentTransparency): void;

    set_uid(uid: string): void;

    set_url(url?: string | null): void;

    strip_errors(): void;
}

export namespace ReminderWatcher {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        default_zone: ICalGLib.Timezone;
        defaultZone: ICalGLib.Timezone;
        registry: EDataServer.SourceRegistry;
        timers_enabled: boolean;
        timersEnabled: boolean;
    }
}

export class ReminderWatcher extends GObject.Object {
    static $gtype: GObject.GType<ReminderWatcher>;

    constructor(properties?: Partial<ReminderWatcher.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ReminderWatcher.ConstructorProperties>, ...args: any[]): void;

    // Properties
    default_zone: ICalGLib.Timezone;
    defaultZone: ICalGLib.Timezone;
    registry: EDataServer.SourceRegistry;
    timers_enabled: boolean;
    timersEnabled: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    connect(
        signal: 'format-time',
        callback: (
            _source: this,
            rd: any | null,
            itt: any | null,
            inout_buffer: any | null,
            buffer_size: number
        ) => void
    ): number;

    connect_after(
        signal: 'format-time',
        callback: (
            _source: this,
            rd: any | null,
            itt: any | null,
            inout_buffer: any | null,
            buffer_size: number
        ) => void
    ): number;

    emit(signal: 'format-time', rd: any | null, itt: any | null, inout_buffer: any | null, buffer_size: number): void;

    connect(
        signal: 'triggered',
        callback: (_source: this, reminders: ReminderData[], snoozed: boolean) => void
    ): number;

    connect_after(
        signal: 'triggered',
        callback: (_source: this, reminders: ReminderData[], snoozed: boolean) => void
    ): number;

    emit(signal: 'triggered', reminders: ReminderData[], snoozed: boolean): void;

    // Constructors

    static ['new'](registry: EDataServer.SourceRegistry): ReminderWatcher;

    // Members

    describe_data(rd: ReminderData, flags: number): string;

    dismiss(
        rd: ReminderData,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    dismiss_all(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    dismiss_all_finish(result: Gio.AsyncResult): boolean;

    dismiss_all_sync(cancellable?: Gio.Cancellable | null): boolean;

    dismiss_finish(result: Gio.AsyncResult): boolean;

    dismiss_sync(rd: ReminderData, cancellable?: Gio.Cancellable | null): boolean;

    dup_default_zone(): ICalGLib.Timezone;

    dup_past(): ReminderData[] | null;

    dup_snoozed(): ReminderData[] | null;

    get_registry(): EDataServer.SourceRegistry;

    get_timers_enabled(): boolean;

    ref_opened_client(source_uid: string): Client | null;

    set_default_zone(zone?: ICalGLib.Timezone | null): void;

    set_timers_enabled(enabled: boolean): void;

    snooze(rd: ReminderData, until: number): void;

    timer_elapsed(): void;

    vfunc_cal_client_connect(
        source: EDataServer.Source,
        source_type: ClientSourceType,
        wait_for_connected_seconds: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_changed(): void;

    vfunc_format_time(rd: ReminderData, itt: ICalGLib.Time, inout_buffer: string, buffer_size: number): void;

    vfunc_schedule_timer(at_time: number): void;
}

export class ClientPrivate {
    static $gtype: GObject.GType<ClientPrivate>;

    constructor(copy: ClientPrivate);
}

export class ClientTzlookupICalCompData {
    static $gtype: GObject.GType<ClientTzlookupICalCompData>;

    constructor(icomp: ICalGLib.Component);
    constructor(copy: ClientTzlookupICalCompData);

    // Constructors
    static ['new'](icomp: ICalGLib.Component): ClientTzlookupICalCompData;

    // Members
    copy(): ClientTzlookupICalCompData | null;

    free(): void;

    get_icalcomponent(): ICalGLib.Component;
}

export class ClientViewPrivate {
    static $gtype: GObject.GType<ClientViewPrivate>;

    constructor(copy: ClientViewPrivate);
}

export class ComponentAlarm {
    static $gtype: GObject.GType<ComponentAlarm>;

    constructor();
    constructor(copy: ComponentAlarm);

    // Constructors
    static ['new'](): ComponentAlarm;

    static new_from_component(component: ICalGLib.Component): ComponentAlarm;

    // Members
    copy(): ComponentAlarm;

    fill_component(component: ICalGLib.Component): void;

    get_action(): ComponentAlarmAction;

    get_as_component(): ICalGLib.Component;

    get_attachments(): ICalGLib.Attach[] | null;

    get_attendees(): ComponentAttendee[] | null;

    get_description(): ComponentText | null;

    get_property_bag(): ComponentPropertyBag;

    get_repeat(): ComponentAlarmRepeat | null;

    get_summary(): ComponentText | null;

    get_trigger(): ComponentAlarmTrigger | null;

    get_uid(): string | null;

    has_attachments(): boolean;

    has_attendees(): boolean;

    set_action(action: ComponentAlarmAction): void;

    set_attachments(attachments?: ICalGLib.Attach[] | null): void;

    set_attendees(attendees?: ComponentAttendee[] | null): void;

    set_description(description?: ComponentText | null): void;

    set_from_component(component: ICalGLib.Component): void;

    set_repeat(repeat?: ComponentAlarmRepeat | null): void;

    set_summary(summary?: ComponentText | null): void;

    set_trigger(trigger?: ComponentAlarmTrigger | null): void;

    set_uid(uid?: string | null): void;
}

export class ComponentAlarmInstance {
    static $gtype: GObject.GType<ComponentAlarmInstance>;

    constructor(uid: string, instance_time: number, occur_start: number, occur_end: number);
    constructor(copy: ComponentAlarmInstance);

    // Constructors
    static ['new'](uid: string, instance_time: number, occur_start: number, occur_end: number): ComponentAlarmInstance;

    // Members
    copy(): ComponentAlarmInstance;

    get_occur_end(): number;

    get_occur_start(): number;

    get_time(): number;

    get_uid(): string;

    set_occur_end(occur_end: number): void;

    set_occur_start(occur_start: number): void;

    set_time(instance_time: number): void;

    set_uid(uid: string): void;
}

export class ComponentAlarmRepeat {
    static $gtype: GObject.GType<ComponentAlarmRepeat>;

    constructor(repetitions: number, interval: ICalGLib.Duration);
    constructor(copy: ComponentAlarmRepeat);

    // Constructors
    static ['new'](repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat;

    static new_seconds(repetitions: number, interval_seconds: number): ComponentAlarmRepeat;

    // Members
    copy(): ComponentAlarmRepeat;

    get_interval(): ICalGLib.Duration;

    get_interval_seconds(): number;

    get_repetitions(): number;

    set_interval(interval: ICalGLib.Duration): void;

    set_interval_seconds(interval_seconds: number): void;

    set_repetitions(repetitions: number): void;
}

export class ComponentAlarmTrigger {
    static $gtype: GObject.GType<ComponentAlarmTrigger>;

    constructor(absolute_time: ICalGLib.Time);
    constructor(copy: ComponentAlarmTrigger);

    // Constructors
    static new_absolute(absolute_time: ICalGLib.Time): ComponentAlarmTrigger;

    static new_from_property(property: ICalGLib.Property): ComponentAlarmTrigger;

    static new_relative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): ComponentAlarmTrigger;

    // Members
    copy(): ComponentAlarmTrigger;

    fill_property(property: ICalGLib.Property): ICalGLib.Property;

    get_absolute_time(): ICalGLib.Time | null;

    get_as_property(): ICalGLib.Property;

    get_duration(): ICalGLib.Duration | null;

    get_kind(): ComponentAlarmTriggerKind;

    get_parameter_bag(): ComponentParameterBag;

    set_absolute(absolute_time: ICalGLib.Time): void;

    set_absolute_time(absolute_time: ICalGLib.Time): void;

    set_duration(duration: ICalGLib.Duration): void;

    set_from_property(property: ICalGLib.Property): void;

    set_kind(kind: ComponentAlarmTriggerKind): void;

    set_relative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): void;
}

export class ComponentAlarms {
    static $gtype: GObject.GType<ComponentAlarms>;

    constructor(comp: Component);
    constructor(copy: ComponentAlarms);

    // Constructors
    static ['new'](comp: Component): ComponentAlarms;

    // Members
    add_instance(instance: ComponentAlarmInstance): void;

    copy(): ComponentAlarms;

    get_component(): Component;

    get_instances(): ComponentAlarmInstance[] | null;

    remove_instance(instance: ComponentAlarmInstance): boolean;

    set_instances(instances?: ComponentAlarmInstance[] | null): void;

    take_instance(instance: ComponentAlarmInstance): void;

    take_instances(instances?: ComponentAlarmInstance[] | null): void;
}

export class ComponentAttendee {
    static $gtype: GObject.GType<ComponentAttendee>;

    constructor();
    constructor(copy: ComponentAttendee);

    // Constructors
    static ['new'](): ComponentAttendee;

    static new_from_property(property: ICalGLib.Property): ComponentAttendee;

    static new_full(
        value: string | null,
        member: string | null,
        cutype: ICalGLib.ParameterCutype,
        role: ICalGLib.ParameterRole,
        partstat: ICalGLib.ParameterPartstat,
        rsvp: boolean,
        delegatedfrom?: string | null,
        delegatedto?: string | null,
        sentby?: string | null,
        cn?: string | null,
        language?: string | null
    ): ComponentAttendee;

    // Members
    copy(): ComponentAttendee;

    fill_property(property: ICalGLib.Property): ICalGLib.Property;

    get_as_property(): ICalGLib.Property;

    get_cn(): string | null;

    get_cutype(): ICalGLib.ParameterCutype;

    get_delegatedfrom(): string | null;

    get_delegatedto(): string | null;

    get_language(): string | null;

    get_member(): string | null;

    get_parameter_bag(): ComponentParameterBag;

    get_partstat(): ICalGLib.ParameterPartstat;

    get_role(): ICalGLib.ParameterRole;

    get_rsvp(): boolean;

    get_sentby(): string | null;

    get_value(): string | null;

    set_cn(cn?: string | null): void;

    set_cutype(cutype: ICalGLib.ParameterCutype): void;

    set_delegatedfrom(delegatedfrom?: string | null): void;

    set_delegatedto(delegatedto?: string | null): void;

    set_from_property(property: ICalGLib.Property): void;

    set_language(language?: string | null): void;

    set_member(member?: string | null): void;

    set_partstat(partstat: ICalGLib.ParameterPartstat): void;

    set_role(role: ICalGLib.ParameterRole): void;

    set_rsvp(rsvp: boolean): void;

    set_sentby(sentby?: string | null): void;

    set_value(value?: string | null): void;
}

export class ComponentDateTime {
    static $gtype: GObject.GType<ComponentDateTime>;

    constructor(value: ICalGLib.Time, tzid?: string | null);
    constructor(copy: ComponentDateTime);

    // Constructors
    static ['new'](value: ICalGLib.Time, tzid?: string | null): ComponentDateTime;

    static new_take(value: ICalGLib.Time, tzid?: string | null): ComponentDateTime;

    // Members
    copy(): ComponentDateTime;

    get_tzid(): string | null;

    get_value(): ICalGLib.Time;

    set(value: ICalGLib.Time, tzid?: string | null): void;

    set_tzid(tzid?: string | null): void;

    set_value(value: ICalGLib.Time): void;

    take_tzid(tzid?: string | null): void;

    take_value(value: ICalGLib.Time): void;
}

export class ComponentId {
    static $gtype: GObject.GType<ComponentId>;

    constructor(uid: string, rid?: string | null);
    constructor(copy: ComponentId);

    // Constructors
    static ['new'](uid: string, rid?: string | null): ComponentId;

    static new_take(uid: string, rid?: string | null): ComponentId;

    // Members
    copy(): ComponentId;

    equal(id2: ComponentId): boolean;

    get_rid(): string | null;

    get_uid(): string;

    hash(): number;

    set_rid(rid?: string | null): void;

    set_uid(uid: string): void;
}

export class ComponentOrganizer {
    static $gtype: GObject.GType<ComponentOrganizer>;

    constructor();
    constructor(copy: ComponentOrganizer);

    // Constructors
    static ['new'](): ComponentOrganizer;

    static new_from_property(property: ICalGLib.Property): ComponentOrganizer;

    static new_full(
        value?: string | null,
        sentby?: string | null,
        cn?: string | null,
        language?: string | null
    ): ComponentOrganizer;

    // Members
    copy(): ComponentOrganizer;

    fill_property(property: ICalGLib.Property): ICalGLib.Property;

    get_as_property(): ICalGLib.Property;

    get_cn(): string | null;

    get_language(): string | null;

    get_parameter_bag(): ComponentParameterBag;

    get_sentby(): string | null;

    get_value(): string | null;

    set_cn(cn?: string | null): void;

    set_from_property(property: ICalGLib.Property): void;

    set_language(language?: string | null): void;

    set_sentby(sentby?: string | null): void;

    set_value(value?: string | null): void;
}

export class ComponentParameterBag {
    static $gtype: GObject.GType<ComponentParameterBag>;

    constructor();
    constructor(copy: ComponentParameterBag);

    // Constructors
    static ['new'](): ComponentParameterBag;

    static new_from_property(property: ICalGLib.Property): ComponentParameterBag;

    // Members
    add(param: ICalGLib.Parameter): void;

    assign(src_bag: ComponentParameterBag): void;

    clear(): void;

    copy(): ComponentParameterBag;

    fill_property(property: ICalGLib.Property): void;

    get(index: number): ICalGLib.Parameter | null;

    get_count(): number;

    get_first_by_kind(kind: ICalGLib.ParameterKind): number;

    remove(index: number): void;

    remove_by_kind(kind: ICalGLib.ParameterKind, all: boolean): number;

    set_from_property(property: ICalGLib.Property): void;

    take(param: ICalGLib.Parameter): void;
}

export class ComponentPeriod {
    static $gtype: GObject.GType<ComponentPeriod>;

    constructor(start: ICalGLib.Time, end?: ICalGLib.Time | null);
    constructor(copy: ComponentPeriod);

    // Constructors
    static new_datetime(start: ICalGLib.Time, end?: ICalGLib.Time | null): ComponentPeriod;

    static new_duration(start: ICalGLib.Time, duration: ICalGLib.Duration): ComponentPeriod;

    // Members
    copy(): ComponentPeriod;

    get_duration(): ICalGLib.Duration;

    get_end(): ICalGLib.Time | null;

    get_kind(): ComponentPeriodKind;

    get_start(): ICalGLib.Time;

    set_datetime_full(start: ICalGLib.Time, end?: ICalGLib.Time | null): void;

    set_duration(duration: ICalGLib.Duration): void;

    set_duration_full(start: ICalGLib.Time, duration: ICalGLib.Duration): void;

    set_end(end?: ICalGLib.Time | null): void;

    set_start(start: ICalGLib.Time): void;
}

export class ComponentPrivate {
    static $gtype: GObject.GType<ComponentPrivate>;

    constructor(copy: ComponentPrivate);
}

export class ComponentPropertyBag {
    static $gtype: GObject.GType<ComponentPropertyBag>;

    constructor();
    constructor(copy: ComponentPropertyBag);

    // Constructors
    static ['new'](): ComponentPropertyBag;

    static new_from_component(component: ICalGLib.Component): ComponentPropertyBag;

    // Members
    add(prop: ICalGLib.Property): void;

    assign(src_bag: ComponentPropertyBag): void;

    clear(): void;

    copy(): ComponentPropertyBag;

    fill_component(component: ICalGLib.Component): void;

    get(index: number): ICalGLib.Property | null;

    get_count(): number;

    get_first_by_kind(kind: ICalGLib.PropertyKind): number;

    remove(index: number): void;

    remove_by_kind(kind: ICalGLib.PropertyKind, all: boolean): number;

    set_from_component(component: ICalGLib.Component): void;

    take(prop: ICalGLib.Property): void;
}

export class ComponentRange {
    static $gtype: GObject.GType<ComponentRange>;

    constructor(kind: ComponentRangeKind, datetime: ComponentDateTime);
    constructor(copy: ComponentRange);

    // Constructors
    static ['new'](kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange;

    // Members
    copy(): ComponentRange;

    get_datetime(): ComponentDateTime;

    get_kind(): ComponentRangeKind;

    set_datetime(datetime: ComponentDateTime): void;

    set_kind(kind: ComponentRangeKind): void;
}

export class ComponentText {
    static $gtype: GObject.GType<ComponentText>;

    constructor(value?: string | null, altrep?: string | null);
    constructor(copy: ComponentText);

    // Constructors
    static ['new'](value?: string | null, altrep?: string | null): ComponentText;

    // Members
    copy(): ComponentText;

    get_altrep(): string;

    get_value(): string;

    set_altrep(altrep?: string | null): void;

    set_value(value?: string | null): void;
}

export class ReminderData {
    static $gtype: GObject.GType<ReminderData>;

    constructor(source_uid: string, component: Component, instance: ComponentAlarmInstance);
    constructor(copy: ReminderData);

    // Constructors
    static ['new'](source_uid: string, component: Component, instance: ComponentAlarmInstance): ReminderData;

    // Members
    copy(): ReminderData;

    get_component(): Component;

    get_instance(): ComponentAlarmInstance;

    get_source_uid(): string;

    set_component(component: Component): void;

    set_instance(instance: ComponentAlarmInstance): void;

    set_source_uid(source_uid: string): void;

    static free(rd?: any | null): void;
}

export class ReminderWatcherPrivate {
    static $gtype: GObject.GType<ReminderWatcherPrivate>;

    constructor(copy: ReminderWatcherPrivate);
}

export interface TimezoneCacheNamespace {
    $gtype: GObject.GType<TimezoneCache>;
    prototype: TimezoneCachePrototype;
}

export type TimezoneCache = TimezoneCachePrototype;

export interface TimezoneCachePrototype extends GObject.Object {
    // Members

    add_timezone(zone: ICalGLib.Timezone): void;

    get_timezone(tzid: string): ICalGLib.Timezone | null;

    list_timezones(): ICalGLib.Timezone[];

    vfunc_timezone_added(zone: ICalGLib.Timezone): void;

    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;
}

export const TimezoneCache: TimezoneCacheNamespace;
