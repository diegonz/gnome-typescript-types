/**
 * EDataCal 2.0
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Camel from './camel';
import * as EBackend from './ebackend';
import * as ECal from './ecal';
import * as EDataServer from './edataserver';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as ICalGLib from './icalglib';
import * as Soup from './soup';
import * as libxml2 from './libxml2';
import * as GLib from './glib';

export const EDS_CALENDAR_MODULES: string;
export const EDS_SUBPROCESS_CAL_PATH: string;
export const INTERVALTREE_DEBUG: number;
export const LIBICAL_GLIB_UNSTABLE_API: number;

export function cal_cache_offline_change_free(change?: any | null): void;

export function cal_cache_search_data_free(ptr?: any | null): void;

export function cal_meta_backend_info_free(ptr?: any | null): void;

export type CalBackendCustomOpFunc = (cal_backend: CalBackend, cancellable?: Gio.Cancellable | null) => void;
export type CalBackendForeachViewFunc = (backend: CalBackend, view: DataCalView) => boolean;
export type CalCacheSearchFunc = (
    cal_cache: CalCache,
    uid: string,
    rid: string | null,
    revision: string,
    object: string,
    extra: string,
    custom_flags: number,
    offline_state: EBackend.OfflineState
) => boolean;
export namespace CalBackend {
    export interface ConstructorProperties extends EBackend.Backend.ConstructorProperties {
        [key: string]: any;

        cache_dir: string;
        cacheDir: string;
        kind: number;
        proxy_resolver: Gio.ProxyResolver;
        proxyResolver: Gio.ProxyResolver;
        registry: EDataServer.SourceRegistry;
        writable: boolean;
    }
}

export class CalBackend extends EBackend.Backend implements ECal.TimezoneCache {
    static $gtype: GObject.GType<CalBackend>;

    constructor(properties?: Partial<CalBackend.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalBackend.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cache_dir: string;
    cacheDir: string;
    kind: number;
    proxy_resolver: Gio.ProxyResolver;
    proxyResolver: Gio.ProxyResolver;
    registry: EDataServer.SourceRegistry;
    writable: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'closed', callback: (_source: this, sender: string) => void): number;

    connect_after(signal: 'closed', callback: (_source: this, sender: string) => void): number;

    emit(signal: 'closed', sender: string): void;

    connect(signal: 'shutdown', callback: (_source: this) => void): number;

    connect_after(signal: 'shutdown', callback: (_source: this) => void): number;

    emit(signal: 'shutdown'): void;

    // Members

    add_timezone(
        tzobject: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    add_timezone(...args: never[]): never;

    add_timezone_finish(result: Gio.AsyncResult): boolean;

    add_timezone_sync(tzobject: string, cancellable?: Gio.Cancellable | null): boolean;

    add_view(view: DataCalView): void;

    create_cache_filename(uid: string, filename: string, fileindex: number): string;

    create_objects(
        calobjs: string,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    create_objects_finish(result: Gio.AsyncResult, out_uids: GLib.Queue): boolean;

    create_objects_sync(
        calobjs: string,
        opflags: number,
        out_uids: GLib.Queue,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    discard_alarm(
        uid: string,
        rid: string,
        alarm_uid: string,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    discard_alarm_finish(result: Gio.AsyncResult): boolean;

    discard_alarm_sync(
        uid: string,
        rid: string,
        alarm_uid: string,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    dup_cache_dir(): string;

    foreach_view(): boolean;

    foreach_view_notify_progress(only_completed_views: boolean, percent: number, message?: string | null): void;

    get_attachment_uris(
        uid: string,
        rid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_attachment_uris_finish(result: Gio.AsyncResult, out_attachment_uris: GLib.Queue): boolean;

    get_attachment_uris_sync(
        uid: string,
        rid: string,
        out_attachment_uris: GLib.Queue,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    get_backend_property(prop_name: string): string;

    get_cache_dir(): string;

    get_free_busy(
        start: number,
        end: number,
        users: string[],
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_free_busy_finish(result: Gio.AsyncResult, out_freebusy: string[]): boolean;

    get_free_busy_sync(
        start: number,
        end: number,
        users: string[],
        out_freebusy: string[],
        cancellable?: Gio.Cancellable | null
    ): boolean;

    get_kind(): ICalGLib.ComponentKind;

    get_object(
        uid: string,
        rid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_object_finish(result: Gio.AsyncResult): string;

    get_object_list(
        query: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_object_list_finish(result: Gio.AsyncResult, out_objects: GLib.Queue): boolean;

    get_object_list_sync(query: string, out_objects: GLib.Queue, cancellable?: Gio.Cancellable | null): boolean;

    get_object_sync(uid: string, rid: string, cancellable?: Gio.Cancellable | null): string;

    get_registry(): EDataServer.SourceRegistry;

    get_timezone(
        tzid: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_timezone(...args: never[]): never;

    get_timezone_finish(result: Gio.AsyncResult): string;

    get_timezone_sync(tzid: string, cancellable?: Gio.Cancellable | null): string;

    get_writable(): boolean;

    is_opened(): boolean;

    is_readonly(): boolean;

    list_views(): DataCalView[];

    modify_objects(
        calobjs: string,
        mod: ECal.ObjModType,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    modify_objects_finish(result: Gio.AsyncResult): boolean;

    modify_objects_sync(
        calobjs: string,
        mod: ECal.ObjModType,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    notify_component_created(component: ECal.Component): void;

    notify_component_modified(old_component: ECal.Component, new_component: ECal.Component): void;

    notify_component_removed(id: ECal.ComponentId, old_component: ECal.Component, new_component: ECal.Component): void;

    notify_error(message: string): void;

    notify_property_changed(prop_name: string, prop_value?: string | null): void;

    open(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    open_finish(result: Gio.AsyncResult): boolean;

    open_sync(cancellable?: Gio.Cancellable | null): boolean;

    prepare_for_completion(opid: number, result_queue: GLib.Queue): Gio.SimpleAsyncResult;

    receive_objects(
        calobj: string,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    receive_objects_finish(result: Gio.AsyncResult): boolean;

    receive_objects_sync(calobj: string, opflags: number, cancellable?: Gio.Cancellable | null): boolean;

    ref_data_cal(): DataCal;

    ref_proxy_resolver(): Gio.ProxyResolver | null;

    refresh(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    refresh_finish(result: Gio.AsyncResult): boolean;

    refresh_sync(cancellable?: Gio.Cancellable | null): boolean;

    remove_objects(
        component_ids: ECal.ComponentId[],
        mod: ECal.ObjModType,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_objects_finish(result: Gio.AsyncResult): boolean;

    remove_objects_sync(
        component_ids: ECal.ComponentId[],
        mod: ECal.ObjModType,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    remove_view(view: DataCalView): void;

    schedule_custom_operation(
        use_cancellable: Gio.Cancellable | null,
        func: CalBackendCustomOpFunc,
        user_data_free?: GLib.DestroyNotify | null
    ): void;

    send_objects(
        calobj: string,
        opflags: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    send_objects_finish(result: Gio.AsyncResult, out_users: GLib.Queue): string;

    send_objects_sync(
        calobj: string,
        opflags: number,
        out_users: GLib.Queue,
        cancellable?: Gio.Cancellable | null
    ): string;

    set_cache_dir(cache_dir: string): void;

    set_data_cal(data_cal: DataCal): void;

    set_writable(writable: boolean): void;

    start_view(view: DataCalView): void;

    stop_view(view: DataCalView): void;

    vfunc_closed(sender: string): void;

    vfunc_impl_add_timezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzobject: string): void;

    vfunc_impl_discard_alarm(
        cal: DataCal,
        opid: number,
        cancellable: Gio.Cancellable | null,
        uid: string,
        rid: string,
        auid: string,
        opflags: number
    ): void;

    vfunc_impl_get_attachment_uris(
        cal: DataCal,
        opid: number,
        cancellable: Gio.Cancellable | null,
        uid: string,
        rid: string
    ): void;

    vfunc_impl_get_backend_property(prop_name: string): string;

    vfunc_impl_get_object(
        cal: DataCal,
        opid: number,
        cancellable: Gio.Cancellable | null,
        uid: string,
        rid: string
    ): void;

    vfunc_impl_get_object_list(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, sexp: string): void;

    vfunc_impl_get_timezone(cal: DataCal, opid: number, cancellable: Gio.Cancellable | null, tzid: string): void;

    vfunc_impl_open(cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null): void;

    vfunc_impl_receive_objects(
        cal: DataCal,
        opid: number,
        cancellable: Gio.Cancellable | null,
        calobj: string,
        opflags: number
    ): void;

    vfunc_impl_refresh(cal: DataCal, opid: number, cancellable?: Gio.Cancellable | null): void;

    vfunc_impl_send_objects(
        cal: DataCal,
        opid: number,
        cancellable: Gio.Cancellable | null,
        calobj: string,
        opflags: number
    ): void;

    vfunc_impl_start_view(view: DataCalView): void;

    vfunc_impl_stop_view(view: DataCalView): void;

    vfunc_shutdown(): void;

    static mail_account_get_default(registry: EDataServer.SourceRegistry, address: string, name: string): boolean;

    static mail_account_is_valid(registry: EDataServer.SourceRegistry, user: string, name: string): boolean;

    static user_declined(registry: EDataServer.SourceRegistry, icalcomp: ICalGLib.Component): boolean;

    // Implemented Members

    list_timezones(): ICalGLib.Timezone[];

    vfunc_timezone_added(zone: ICalGLib.Timezone): void;

    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;
}

export namespace CalBackendFactory {
    export interface ConstructorProperties extends EBackend.BackendFactory.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class CalBackendFactory extends EBackend.BackendFactory {
    static $gtype: GObject.GType<CalBackendFactory>;

    constructor(properties?: Partial<CalBackendFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalBackendFactory.ConstructorProperties>, ...args: any[]): void;
}

export namespace CalBackendSExp {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class CalBackendSExp extends GObject.Object {
    static $gtype: GObject.GType<CalBackendSExp>;

    constructor(properties?: Partial<CalBackendSExp.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalBackendSExp.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](text: string): CalBackendSExp;

    // Members

    evaluate_occur_times(start: number, end: number): boolean;

    lock(): void;

    match_comp(comp: ECal.Component, cache: ECal.TimezoneCache): boolean;

    match_object(object: string, cache: ECal.TimezoneCache): boolean;

    text(): string;

    unlock(): void;
}

export namespace CalBackendSync {
    export interface ConstructorProperties extends CalBackend.ConstructorProperties {
        [key: string]: any;
    }
}

export class CalBackendSync extends CalBackend implements ECal.TimezoneCache {
    static $gtype: GObject.GType<CalBackendSync>;

    constructor(properties?: Partial<CalBackendSync.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalBackendSync.ConstructorProperties>, ...args: any[]): void;

    // Members

    add_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void;
    add_timezone(...args: never[]): never;

    create_objects(
        cal: DataCal,
        cancellable: Gio.Cancellable | null,
        calobjs: string[],
        opflags: number
    ): [string[], ECal.Component[]];

    create_objects(...args: never[]): never;

    discard_alarm(
        cal: DataCal,
        cancellable: Gio.Cancellable | null,
        uid: string,
        rid: string,
        auid: string,
        opflags: number
    ): void;

    discard_alarm(...args: never[]): never;

    get_attachment_uris(
        cal: DataCal,
        cancellable: Gio.Cancellable | null,
        uid: string,
        rid: string,
        attachments: string[]
    ): void;

    get_attachment_uris(...args: never[]): never;

    get_free_busy(
        cal: DataCal,
        cancellable: Gio.Cancellable | null,
        users: string[],
        start: number,
        end: number
    ): string[];

    get_free_busy(...args: never[]): never;

    get_object(cal: DataCal, cancellable: Gio.Cancellable | null, uid: string, rid: string): string;
    get_object(...args: never[]): never;

    get_object_list(cal: DataCal, cancellable: Gio.Cancellable | null, sexp: string): string[];
    get_object_list(...args: never[]): never;

    get_timezone(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string): void;
    get_timezone(...args: never[]): never;

    modify_objects(
        cal: DataCal,
        cancellable: Gio.Cancellable | null,
        calobjs: string[],
        mod: ECal.ObjModType,
        opflags: number
    ): [ECal.Component[], ECal.Component[]];

    modify_objects(...args: never[]): never;

    open(cal: DataCal, cancellable?: Gio.Cancellable | null): void;
    open(...args: never[]): never;

    receive_objects(cal: DataCal, cancellable: Gio.Cancellable | null, calobj: string, opflags: number): void;
    receive_objects(...args: never[]): never;

    refresh(cal: DataCal, cancellable?: Gio.Cancellable | null): void;
    refresh(...args: never[]): never;

    remove_objects(
        cal: DataCal,
        cancellable: Gio.Cancellable | null,
        ids: ECal.ComponentId[],
        mod: ECal.ObjModType,
        opflags: number
    ): [ECal.Component[], ECal.Component[]];

    remove_objects(...args: never[]): never;

    send_objects(
        cal: DataCal,
        cancellable: Gio.Cancellable | null,
        calobj: string,
        opflags: number,
        users: string[]
    ): string;

    send_objects(...args: never[]): never;

    vfunc_add_timezone_sync(cal: DataCal, cancellable: Gio.Cancellable | null, tzobject: string): void;

    vfunc_discard_alarm_sync(
        cal: DataCal,
        cancellable: Gio.Cancellable | null,
        uid: string,
        rid: string,
        auid: string,
        opflags: number
    ): void;

    vfunc_get_object_sync(
        cal: DataCal,
        cancellable: Gio.Cancellable | null,
        uid: string,
        rid: string,
        calobj: string
    ): void;

    vfunc_get_timezone_sync(cal: DataCal, cancellable: Gio.Cancellable | null, tzid: string, tzobject: string): void;

    vfunc_open_sync(cal: DataCal, cancellable?: Gio.Cancellable | null): void;

    vfunc_receive_objects_sync(
        cal: DataCal,
        cancellable: Gio.Cancellable | null,
        calobj: string,
        opflags: number
    ): void;

    vfunc_refresh_sync(cal: DataCal, cancellable?: Gio.Cancellable | null): void;

    // Implemented Members

    list_timezones(): ICalGLib.Timezone[];

    vfunc_timezone_added(zone: ICalGLib.Timezone): void;

    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;
}

export namespace CalCache {
    export interface ConstructorProperties extends EBackend.Cache.ConstructorProperties {
        [key: string]: any;
    }
}

export class CalCache extends EBackend.Cache implements ECal.TimezoneCache, EDataServer.Extensible {
    static $gtype: GObject.GType<CalCache>;

    constructor(properties?: Partial<CalCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalCache.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'dup-component-revision', callback: (_source: this, object: ICalGLib.Component) => string): number;

    connect_after(
        signal: 'dup-component-revision',
        callback: (_source: this, object: ICalGLib.Component) => string
    ): number;

    emit(signal: 'dup-component-revision', object: ICalGLib.Component): void;

    connect(signal: 'get-timezone', callback: (_source: this, tzid: string) => ICalGLib.Timezone): number;

    connect_after(signal: 'get-timezone', callback: (_source: this, tzid: string) => ICalGLib.Timezone): number;

    emit(signal: 'get-timezone', tzid: string): void;

    // Constructors

    static ['new'](filename: string, cancellable?: Gio.Cancellable | null): CalCache;

    // Members

    contains(uid: string, rid: string | null, deleted_flag: EBackend.CacheDeletedFlag): boolean;
    contains(...args: never[]): never;

    delete_attachments(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean;

    dup_component_revision(icomp: ICalGLib.Component): string;

    dup_timezone_as_string(tzid: string, cancellable?: Gio.Cancellable | null): [boolean, string];

    get_component(uid: string, rid: string | null, cancellable?: Gio.Cancellable | null): [boolean, ECal.Component];

    get_component_as_string(uid: string, rid: string | null, cancellable?: Gio.Cancellable | null): [boolean, string];

    get_component_custom_flags(
        uid: string,
        rid: string | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number];

    get_component_extra(uid: string, rid: string | null, cancellable?: Gio.Cancellable | null): [boolean, string];

    get_components_by_uid(uid: string, cancellable?: Gio.Cancellable | null): [boolean, ECal.Component[]];

    get_components_by_uid_as_string(uid: string, cancellable?: Gio.Cancellable | null): [boolean, string[]];

    get_components_in_range(
        range_start: number,
        range_end: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, ECal.Component[]];

    get_components_in_range_as_strings(
        range_start: number,
        range_end: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string[]];

    get_ids_with_extra(extra: string, cancellable?: Gio.Cancellable | null): [boolean, ECal.ComponentId[]];

    get_offline_changes(cancellable?: Gio.Cancellable | null): CalCacheOfflineChange[];
    get_offline_changes(...args: never[]): never;

    get_offline_state(uid: string, rid?: string | null, cancellable?: Gio.Cancellable | null): EBackend.OfflineState;
    get_offline_state(...args: never[]): never;

    get_timezone(tzid: string, cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Timezone];
    get_timezone(...args: never[]): never;

    list_timezones(cancellable?: Gio.Cancellable | null): [boolean, ICalGLib.Timezone[]];
    list_timezones(...args: never[]): never;

    put_component(
        component: ECal.Component,
        extra: string | null,
        custom_flags: number,
        offline_flag: EBackend.CacheOfflineFlag,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    put_components(
        components: ECal.Component[],
        extras: string[] | null,
        custom_flags: number[] | null,
        offline_flag: EBackend.CacheOfflineFlag,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    put_timezone(zone: ICalGLib.Timezone, inc_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean;

    remove_component(
        uid: string,
        rid: string | null,
        custom_flags: number,
        offline_flag: EBackend.CacheOfflineFlag,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    remove_components(
        ids: ECal.ComponentId[],
        custom_flags: number[] | null,
        offline_flag: EBackend.CacheOfflineFlag,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    remove_timezone(tzid: string, dec_ref_counts: number, cancellable?: Gio.Cancellable | null): boolean;

    remove_timezones(cancellable?: Gio.Cancellable | null): boolean;

    search(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, CalCacheSearchData[]];

    search_components(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, ECal.Component[]];

    search_ids(sexp: string | null, cancellable?: Gio.Cancellable | null): [boolean, ECal.ComponentId[]];

    search_with_callback(sexp?: string | null, cancellable?: Gio.Cancellable | null): boolean;

    set_component_custom_flags(
        uid: string,
        rid: string | null,
        custom_flags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_component_extra(
        uid: string,
        rid?: string | null,
        extra?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_dup_component_revision(icomp: ICalGLib.Component): string;

    static resolve_timezone_cb(
        tzid: string,
        cal_cache?: any | null,
        cancellable?: Gio.Cancellable | null
    ): ICalGLib.Timezone | null;

    // Implemented Members

    add_timezone(zone: ICalGLib.Timezone): void;

    vfunc_timezone_added(zone: ICalGLib.Timezone): void;

    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;
}

export namespace CalMetaBackend {
    export interface ConstructorProperties extends CalBackendSync.ConstructorProperties {
        [key: string]: any;

        cache: CalCache;
    }
}

export abstract class CalMetaBackend extends CalBackendSync implements ECal.TimezoneCache {
    static $gtype: GObject.GType<CalMetaBackend>;

    constructor(properties?: Partial<CalMetaBackend.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalMetaBackend.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cache: CalCache;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'refresh-completed', callback: (_source: this) => void): number;

    connect_after(signal: 'refresh-completed', callback: (_source: this) => void): number;

    emit(signal: 'refresh-completed'): void;

    connect(signal: 'source-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'source-changed', callback: (_source: this) => void): number;

    emit(signal: 'source-changed'): void;

    // Members

    connect_sync(
        credentials: EDataServer.NamedParameters | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, EDataServer.SourceAuthenticationResult, string, Gio.TlsCertificateFlags];

    disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;

    dup_sync_tag(): string | null;

    empty_cache_sync(cancellable?: Gio.Cancellable | null): boolean;

    ensure_connected_sync(cancellable?: Gio.Cancellable | null): boolean;

    gather_timezones_sync(
        vcalendar: ICalGLib.Component,
        remove_existing: boolean,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    get_capabilities(): string;

    get_changes_sync(
        last_sync_tag: string | null,
        is_repeat: boolean,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string, boolean, CalMetaBackendInfo[], CalMetaBackendInfo[], CalMetaBackendInfo[]];

    get_connected_writable(): boolean;

    get_ever_connected(): boolean;

    get_ssl_error_details(): [boolean, string, Gio.TlsCertificateFlags];

    inline_local_attachments_sync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean;

    list_existing_sync(cancellable?: Gio.Cancellable | null): [boolean, string, CalMetaBackendInfo[]];

    load_component_sync(
        uid: string,
        extra: string | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, ICalGLib.Component, string];

    merge_instances(instances: ECal.Component[], replace_tzid_with_location: boolean): ICalGLib.Component;

    process_changes_sync(
        created_objects?: CalMetaBackendInfo[] | null,
        modified_objects?: CalMetaBackendInfo[] | null,
        removed_objects?: CalMetaBackendInfo[] | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    ref_cache(): CalCache;

    refresh_sync(cancellable?: Gio.Cancellable | null): boolean;

    remove_component_sync(
        conflict_resolution: EDataServer.ConflictResolution,
        uid: string,
        extra: string | null,
        object: string | null,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    requires_reconnect(): boolean;

    save_component_sync(
        overwrite_existing: boolean,
        conflict_resolution: EDataServer.ConflictResolution,
        instances: ECal.Component[],
        extra: string | null,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string, string];

    schedule_refresh(): void;

    search_components_sync(expr: string | null, cancellable?: Gio.Cancellable | null): [boolean, ECal.Component[]];

    search_sync(expr: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];

    set_cache(cache: CalCache): void;

    set_connected_writable(value: boolean): void;

    set_ever_connected(value: boolean): void;

    split_changes_sync(
        objects: CalMetaBackendInfo[],
        cancellable?: Gio.Cancellable | null
    ): [boolean, CalMetaBackendInfo[], CalMetaBackendInfo[], CalMetaBackendInfo[], CalMetaBackendInfo[] | null];

    store_inline_attachments_sync(component: ICalGLib.Component, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_connect_sync(
        credentials: EDataServer.NamedParameters | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, EDataServer.SourceAuthenticationResult, string, Gio.TlsCertificateFlags];

    vfunc_disconnect_sync(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_get_changes_sync(
        last_sync_tag: string | null,
        is_repeat: boolean,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string, boolean, CalMetaBackendInfo[], CalMetaBackendInfo[], CalMetaBackendInfo[]];

    vfunc_get_ssl_error_details(): [boolean, string, Gio.TlsCertificateFlags];

    vfunc_list_existing_sync(cancellable?: Gio.Cancellable | null): [boolean, string, CalMetaBackendInfo[]];

    vfunc_load_component_sync(
        uid: string,
        extra: string | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, ICalGLib.Component, string];

    vfunc_remove_component_sync(
        conflict_resolution: EDataServer.ConflictResolution,
        uid: string,
        extra: string | null,
        object: string | null,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    vfunc_requires_reconnect(): boolean;

    vfunc_save_component_sync(
        overwrite_existing: boolean,
        conflict_resolution: EDataServer.ConflictResolution,
        instances: ECal.Component[],
        extra: string | null,
        opflags: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, string, string];

    vfunc_search_components_sync(
        expr: string | null,
        cancellable?: Gio.Cancellable | null
    ): [boolean, ECal.Component[]];

    vfunc_search_sync(expr: string | null, cancellable?: Gio.Cancellable | null): [boolean, string[]];

    vfunc_source_changed(): void;

    // Implemented Members

    add_timezone(zone: ICalGLib.Timezone): void;
    add_timezone(...args: never[]): never;

    get_timezone(tzid: string): ICalGLib.Timezone | null;
    get_timezone(...args: never[]): never;

    list_timezones(): ICalGLib.Timezone[];

    vfunc_timezone_added(zone: ICalGLib.Timezone): void;

    vfunc_tzcache_add_timezone(zone: ICalGLib.Timezone): void;
}

export namespace DataCal {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        backend: CalBackend;
        connection: Gio.DBusConnection;
        object_path: string;
        objectPath: string;
    }
}

export class DataCal extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<DataCal>;

    constructor(properties?: Partial<DataCal.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataCal.ConstructorProperties>, ...args: any[]): void;

    // Properties
    backend: CalBackend;
    connection: Gio.DBusConnection;
    object_path: string;
    objectPath: string;

    // Fields
    priv: DataCalPrivate;

    // Constructors

    static ['new'](backend: CalBackend, connection: Gio.DBusConnection, object_path: string): DataCal;

    // Members

    get_connection(): Gio.DBusConnection;

    get_object_path(): string;

    ref_backend(): CalBackend | null;

    report_backend_property_changed(prop_name: string, prop_value: string): void;

    report_error(message: string): void;

    report_free_busy_data(freebusy: string[]): void;

    respond_add_timezone(opid: number, error: GLib.Error): void;

    respond_create_objects(opid: number, error: GLib.Error, uids: string[], new_components: ECal.Component[]): void;

    respond_discard_alarm(opid: number, error: GLib.Error): void;

    respond_get_attachment_uris(opid: number, error: GLib.Error, attachment_uris: string[]): void;

    respond_get_free_busy(opid: number, error: GLib.Error, freebusy: string[]): void;

    respond_get_object(opid: number, error: GLib.Error, object: string): void;

    respond_get_object_list(opid: number, error: GLib.Error, objects: string[]): void;

    respond_get_timezone(opid: number, error: GLib.Error, tzobject: string): void;

    respond_modify_objects(
        opid: number,
        error: GLib.Error,
        old_components: ECal.Component[],
        new_components: ECal.Component[]
    ): void;

    respond_open(opid: number, error: GLib.Error): void;

    respond_receive_objects(opid: number, error: GLib.Error): void;

    respond_refresh(opid: number, error: GLib.Error): void;

    respond_remove_objects(
        opid: number,
        error: GLib.Error,
        ids: ECal.ComponentId[],
        old_components: ECal.Component[],
        new_components: ECal.Component[]
    ): void;

    respond_send_objects(opid: number, error: GLib.Error, users: string[], calobj: string): void;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace DataCalFactory {
    export interface ConstructorProperties extends EBackend.DataFactory.ConstructorProperties {
        [key: string]: any;
    }
}

export class DataCalFactory extends EBackend.DataFactory implements EDataServer.Extensible, Gio.Initable {
    static $gtype: GObject.GType<DataCalFactory>;

    constructor(properties?: Partial<DataCalFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataCalFactory.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DataCalFactoryPrivate;

    // Constructors

    static ['new'](backend_per_process: number, cancellable?: Gio.Cancellable | null): DataCalFactory;

    // Implemented Members

    list_extensions(extension_type: GObject.GType): EDataServer.Extension[];

    load_extensions(): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace DataCalView {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        backend: CalBackend;
        connection: Gio.DBusConnection;
        object_path: string;
        objectPath: string;
        sexp: CalBackendSExp;
    }
}

export class DataCalView extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<DataCalView>;

    constructor(properties?: Partial<DataCalView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataCalView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    backend: CalBackend;
    connection: Gio.DBusConnection;
    object_path: string;
    objectPath: string;
    sexp: CalBackendSExp;

    // Fields
    priv: DataCalViewPrivate;

    // Constructors

    static ['new'](
        backend: any | null,
        sexp: any | null,
        connection: Gio.DBusConnection,
        object_path: string
    ): DataCalView;

    // Members

    component_matches(component: ECal.Component): boolean;

    get_component_string(component: ECal.Component): string;

    get_connection(): Gio.DBusConnection;

    get_fields_of_interest(): GLib.HashTable<any, any>;

    get_flags(): ECal.ClientViewFlags;

    get_object_path(): string;

    get_sexp(): any | null;

    is_completed(): boolean;

    is_started(): boolean;

    is_stopped(): boolean;

    notify_complete(error: GLib.Error): void;

    notify_components_added(ecalcomponents: ECal.Component[]): void;

    notify_components_added_1(component: ECal.Component): void;

    notify_components_modified(ecalcomponents: ECal.Component[]): void;

    notify_components_modified_1(component: ECal.Component): void;

    notify_objects_removed(ids: ECal.ComponentId[]): void;

    notify_objects_removed_1(id: ECal.ComponentId): void;

    notify_progress(percent: number, message: string): void;

    object_matches(object: string): boolean;

    ref_backend(): CalBackend | null;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export namespace IntervalTree {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class IntervalTree extends GObject.Object {
    static $gtype: GObject.GType<IntervalTree>;

    constructor(properties?: Partial<IntervalTree.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<IntervalTree.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): IntervalTree;

    // Members

    destroy(): void;

    dump(): void;

    insert(start: number, end: number, comp: ECal.Component): boolean;

    remove(uid: string, rid: string): boolean;

    search(start: number, end: number): ECal.Component[] | null;
}

export namespace SubprocessCalFactory {
    export interface ConstructorProperties extends EBackend.SubprocessFactory.ConstructorProperties {
        [key: string]: any;
    }
}

export class SubprocessCalFactory extends EBackend.SubprocessFactory implements Gio.Initable {
    static $gtype: GObject.GType<SubprocessCalFactory>;

    constructor(properties?: Partial<SubprocessCalFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SubprocessCalFactory.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: SubprocessCalFactoryPrivate;

    // Constructors

    static ['new'](cancellable?: Gio.Cancellable | null): SubprocessCalFactory;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}

export class CalBackendFactoryPrivate {
    static $gtype: GObject.GType<CalBackendFactoryPrivate>;

    constructor(copy: CalBackendFactoryPrivate);
}

export class CalBackendPrivate {
    static $gtype: GObject.GType<CalBackendPrivate>;

    constructor(copy: CalBackendPrivate);
}

export class CalBackendSExpPrivate {
    static $gtype: GObject.GType<CalBackendSExpPrivate>;

    constructor(copy: CalBackendSExpPrivate);
}

export class CalBackendSyncPrivate {
    static $gtype: GObject.GType<CalBackendSyncPrivate>;

    constructor(copy: CalBackendSyncPrivate);
}

export class CalCacheOfflineChange {
    static $gtype: GObject.GType<CalCacheOfflineChange>;

    constructor(
        uid: string,
        rid: string | null,
        revision: string | null,
        object: string | null,
        state: EBackend.OfflineState
    );

    constructor(copy: CalCacheOfflineChange);

    // Fields
    uid: string;
    rid: string;
    revision: string;
    object: string;
    state: EBackend.OfflineState;

    // Constructors
    static ['new'](
        uid: string,
        rid: string | null,
        revision: string | null,
        object: string | null,
        state: EBackend.OfflineState
    ): CalCacheOfflineChange;

    // Members
    copy(): CalCacheOfflineChange;

    static free(change?: any | null): void;
}

export class CalCachePrivate {
    static $gtype: GObject.GType<CalCachePrivate>;

    constructor(copy: CalCachePrivate);
}

export class CalCacheSearchData {
    static $gtype: GObject.GType<CalCacheSearchData>;

    constructor(uid: string, rid: string | null, object: string, extra?: string | null);
    constructor(
        properties?: Partial<{
            uid?: string;
            rid?: string;
            object?: string;
            extra?: string;
        }>
    );

    constructor(copy: CalCacheSearchData);

    // Fields
    uid: string;
    rid: string;
    object: string;
    extra: string;

    // Constructors
    static ['new'](uid: string, rid: string | null, object: string, extra?: string | null): CalCacheSearchData;

    // Members
    copy(): CalCacheSearchData;

    static free(ptr?: any | null): void;
}

export class CalMetaBackendInfo {
    static $gtype: GObject.GType<CalMetaBackendInfo>;

    constructor(uid: string, revision?: string | null, object?: string | null, extra?: string | null);
    constructor(
        properties?: Partial<{
            uid?: string;
            revision?: string;
            object?: string;
            extra?: string;
        }>
    );

    constructor(copy: CalMetaBackendInfo);

    // Fields
    uid: string;
    revision: string;
    object: string;
    extra: string;

    // Constructors
    static ['new'](
        uid: string,
        revision?: string | null,
        object?: string | null,
        extra?: string | null
    ): CalMetaBackendInfo;

    // Members
    copy(): CalMetaBackendInfo;

    static free(ptr?: any | null): void;
}

export class CalMetaBackendPrivate {
    static $gtype: GObject.GType<CalMetaBackendPrivate>;

    constructor(copy: CalMetaBackendPrivate);
}

export class DataCalFactoryPrivate {
    static $gtype: GObject.GType<DataCalFactoryPrivate>;

    constructor(copy: DataCalFactoryPrivate);
}

export class DataCalPrivate {
    static $gtype: GObject.GType<DataCalPrivate>;

    constructor(copy: DataCalPrivate);
}

export class DataCalViewPrivate {
    static $gtype: GObject.GType<DataCalViewPrivate>;

    constructor(copy: DataCalViewPrivate);
}

export class IntervalTreePrivate {
    static $gtype: GObject.GType<IntervalTreePrivate>;

    constructor(copy: IntervalTreePrivate);
}

export class SubprocessCalFactoryPrivate {
    static $gtype: GObject.GType<SubprocessCalFactoryPrivate>;

    constructor(copy: SubprocessCalFactoryPrivate);
}
