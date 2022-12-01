/**
 * Lfb 0.0
 *
 * Generated from 0.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Gio from './gio';
import * as GObject from './gobject';
import * as GLib from './glib';

export function gdbus_feedback_interface_info(): Gio.DBusInterfaceInfo;

export function gdbus_feedback_override_properties(klass: GObject.Object, property_id_begin: number): number;

export function get_app_id(): string;

export function get_feedback_profile(): string;

export function get_proxy(): GdbusFeedback;

export function init(app_id: string): boolean;

export function is_initted(): boolean;

export function set_app_id(app_id: string): void;

export function set_feedback_profile(profile: string): void;

export function uninit(): void;

export namespace EventEndReason {
    export const $gtype: GObject.GType<EventEndReason>;
}

export enum EventEndReason {
    NOT_FOUND = -1,
    NATURAL = 0,
    EXPIRED = 1,
    EXPLICIT = 2,
}

export namespace EventState {
    export const $gtype: GObject.GType<EventState>;
}

export enum EventState {
    ERRORED = -1,
    NONE = 0,
    RUNNING = 1,
    ENDED = 2,
}

export namespace Event {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        end_reason: EventEndReason;
        endReason: EventEndReason;
        event: string;
        feedback_profile: string;
        feedbackProfile: string;
        state: EventState;
        timeout: number;
    }
}

export class Event extends GObject.Object {
    static $gtype: GObject.GType<Event>;

    constructor(properties?: Partial<Event.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Event.ConstructorProperties>, ...args: any[]): void;

    // Properties
    end_reason: EventEndReason;
    endReason: EventEndReason;
    event: string;
    feedback_profile: string;
    feedbackProfile: string;
    state: EventState;
    timeout: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'feedback-ended', callback: (_source: this) => void): number;

    connect_after(signal: 'feedback-ended', callback: (_source: this) => void): number;

    emit(signal: 'feedback-ended'): void;

    // Constructors

    static ['new'](event: string): Event;

    // Members

    end_feedback(): boolean;

    end_feedback_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    end_feedback_finish(res: Gio.AsyncResult): boolean;

    get_end_reason(): EventEndReason;

    get_event(): string;

    get_feedback_profile(): string;

    get_state(): EventState;

    get_timeout(): number;

    set_feedback_profile(profile: string): void;

    set_timeout(timeout: number): void;

    trigger_feedback(): boolean;

    trigger_feedback_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    trigger_feedback_finish(res: Gio.AsyncResult): boolean;
}

export namespace GdbusFeedbackProxy {
    export interface ConstructorProperties extends Gio.DBusProxy.ConstructorProperties {
        [key: string]: any;
    }
}

export class GdbusFeedbackProxy
    extends Gio.DBusProxy
    implements Gio.AsyncInitable<GdbusFeedbackProxy>, Gio.DBusInterface, Gio.Initable, GdbusFeedback {
    static $gtype: GObject.GType<GdbusFeedbackProxy>;

    constructor(properties?: Partial<GdbusFeedbackProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GdbusFeedbackProxy.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    profile: string;

    // Constructors

    static new_finish(res: Gio.AsyncResult): GdbusFeedbackProxy;
    static new_finish(...args: never[]): never;

    static new_for_bus_finish(res: Gio.AsyncResult): GdbusFeedbackProxy;

    static new_for_bus_sync(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusFeedbackProxy;

    static new_for_bus_sync(...args: never[]): never;

    static new_sync(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null
    ): GdbusFeedbackProxy;

    static new_sync(...args: never[]): never;

    // Members

    static new(
        connection: Gio.DBusConnection,
        flags: Gio.DBusProxyFlags,
        name: string | null,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusFeedbackProxy> | null
    ): void;

    static new(...args: never[]): never;

    static new_for_bus(
        bus_type: Gio.BusType,
        flags: Gio.DBusProxyFlags,
        name: string,
        object_path: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<GdbusFeedbackProxy> | null
    ): void;

    static new_for_bus(...args: never[]): never;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): GdbusFeedbackProxy;
    new_finish(...args: never[]): never;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;

    call_end_feedback(
        arg_id: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_end_feedback_finish(res: Gio.AsyncResult): boolean;

    call_end_feedback_sync(arg_id: number, cancellable?: Gio.Cancellable | null): boolean;

    call_trigger_feedback(
        arg_app_id: string,
        arg_event: string,
        arg_hints: GLib.Variant,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_trigger_feedback_finish(res: Gio.AsyncResult): [boolean, number | null];

    call_trigger_feedback_sync(
        arg_app_id: string,
        arg_event: string,
        arg_hints: GLib.Variant,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number | null];

    complete_end_feedback(invocation: Gio.DBusMethodInvocation): void;

    complete_trigger_feedback(invocation: Gio.DBusMethodInvocation, id: number): void;

    emit_feedback_ended(arg_id: number, arg_reason: number): void;

    vfunc_feedback_ended(arg_id: number, arg_reason: number): void;

    vfunc_handle_end_feedback(invocation: Gio.DBusMethodInvocation, arg_id: number): boolean;

    vfunc_handle_trigger_feedback(
        invocation: Gio.DBusMethodInvocation,
        arg_app_id: string,
        arg_event: string,
        arg_hints: GLib.Variant,
        arg_timeout: number
    ): boolean;
}

export namespace GdbusFeedbackSkeleton {
    export interface ConstructorProperties extends Gio.DBusInterfaceSkeleton.ConstructorProperties {
        [key: string]: any;
    }
}

export class GdbusFeedbackSkeleton extends Gio.DBusInterfaceSkeleton implements Gio.DBusInterface, GdbusFeedback {
    static $gtype: GObject.GType<GdbusFeedbackSkeleton>;

    constructor(properties?: Partial<GdbusFeedbackSkeleton.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GdbusFeedbackSkeleton.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    profile: string;

    // Constructors

    static ['new'](): GdbusFeedbackSkeleton;

    // Implemented Members

    get_object(): Gio.DBusObject;

    get_info(): Gio.DBusInterfaceInfo;

    set_object(object?: Gio.DBusObject | null): void;

    vfunc_dup_object(): Gio.DBusObject;

    vfunc_get_info(): Gio.DBusInterfaceInfo;

    vfunc_set_object(object?: Gio.DBusObject | null): void;

    call_end_feedback(
        arg_id: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_end_feedback_finish(res: Gio.AsyncResult): boolean;

    call_end_feedback_sync(arg_id: number, cancellable?: Gio.Cancellable | null): boolean;

    call_trigger_feedback(
        arg_app_id: string,
        arg_event: string,
        arg_hints: GLib.Variant,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_trigger_feedback_finish(res: Gio.AsyncResult): [boolean, number | null];

    call_trigger_feedback_sync(
        arg_app_id: string,
        arg_event: string,
        arg_hints: GLib.Variant,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number | null];

    complete_end_feedback(invocation: Gio.DBusMethodInvocation): void;

    complete_trigger_feedback(invocation: Gio.DBusMethodInvocation, id: number): void;

    emit_feedback_ended(arg_id: number, arg_reason: number): void;

    vfunc_feedback_ended(arg_id: number, arg_reason: number): void;

    vfunc_handle_end_feedback(invocation: Gio.DBusMethodInvocation, arg_id: number): boolean;

    vfunc_handle_trigger_feedback(
        invocation: Gio.DBusMethodInvocation,
        arg_app_id: string,
        arg_event: string,
        arg_hints: GLib.Variant,
        arg_timeout: number
    ): boolean;
}

export class GdbusFeedbackProxyPrivate {
    static $gtype: GObject.GType<GdbusFeedbackProxyPrivate>;

    constructor(copy: GdbusFeedbackProxyPrivate);
}

export class GdbusFeedbackSkeletonPrivate {
    static $gtype: GObject.GType<GdbusFeedbackSkeletonPrivate>;

    constructor(copy: GdbusFeedbackSkeletonPrivate);
}

export interface GdbusFeedbackNamespace {
    $gtype: GObject.GType<GdbusFeedback>;
    prototype: GdbusFeedbackPrototype;

    interface_info(): Gio.DBusInterfaceInfo;

    override_properties(klass: GObject.Object, property_id_begin: number): number;
}

export type GdbusFeedback = GdbusFeedbackPrototype;

export interface GdbusFeedbackPrototype extends GObject.Object {
    // Properties
    profile: string;

    // Members

    call_end_feedback(
        arg_id: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_end_feedback_finish(res: Gio.AsyncResult): boolean;

    call_end_feedback_sync(arg_id: number, cancellable?: Gio.Cancellable | null): boolean;

    call_trigger_feedback(
        arg_app_id: string,
        arg_event: string,
        arg_hints: GLib.Variant,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    call_trigger_feedback_finish(res: Gio.AsyncResult): [boolean, number | null];

    call_trigger_feedback_sync(
        arg_app_id: string,
        arg_event: string,
        arg_hints: GLib.Variant,
        arg_timeout: number,
        cancellable?: Gio.Cancellable | null
    ): [boolean, number | null];

    complete_end_feedback(invocation: Gio.DBusMethodInvocation): void;

    complete_trigger_feedback(invocation: Gio.DBusMethodInvocation, id: number): void;

    emit_feedback_ended(arg_id: number, arg_reason: number): void;

    vfunc_feedback_ended(arg_id: number, arg_reason: number): void;

    vfunc_handle_end_feedback(invocation: Gio.DBusMethodInvocation, arg_id: number): boolean;

    vfunc_handle_trigger_feedback(
        invocation: Gio.DBusMethodInvocation,
        arg_app_id: string,
        arg_event: string,
        arg_hints: GLib.Variant,
        arg_timeout: number
    ): boolean;
}

export const GdbusFeedback: GdbusFeedbackNamespace;
