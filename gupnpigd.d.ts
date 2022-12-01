/**
 * GUPnPIgd 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as GLib from './glib';

export namespace SimpleIgdError {
    export const $gtype: GObject.GType<SimpleIgdError>;
}

export enum SimpleIgdError {
    SIMPLE_IGD_ERROR_EXTERNAL_ADDRESS = 0,
}

export namespace SimpleIgd {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        main_context: any;
        mainContext: any;
    }
}

export class SimpleIgd extends GObject.Object {
    static $gtype: GObject.GType<SimpleIgd>;

    constructor(properties?: Partial<SimpleIgd.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SimpleIgd.ConstructorProperties>, ...args: any[]): void;

    // Properties
    main_context: any;
    mainContext: any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'context-available', callback: (_source: this, context: GObject.Object) => boolean): number;

    connect_after(signal: 'context-available', callback: (_source: this, context: GObject.Object) => boolean): number;

    emit(signal: 'context-available', context: GObject.Object): void;

    connect(
        signal: 'error-mapping-port',
        callback: (
            _source: this,
            error: GLib.Error,
            proto: string,
            external_port: number,
            local_ip: string,
            local_port: number,
            description: string
        ) => void
    ): number;

    connect_after(
        signal: 'error-mapping-port',
        callback: (
            _source: this,
            error: GLib.Error,
            proto: string,
            external_port: number,
            local_ip: string,
            local_port: number,
            description: string
        ) => void
    ): number;

    emit(
        signal: 'error-mapping-port',
        error: GLib.Error,
        proto: string,
        external_port: number,
        local_ip: string,
        local_port: number,
        description: string
    ): void;

    connect(
        signal: 'mapped-external-port',
        callback: (
            _source: this,
            proto: string,
            external_ip: string,
            replaces_external_ip: string,
            external_port: number,
            local_ip: string,
            local_port: number,
            description: string
        ) => void
    ): number;

    connect_after(
        signal: 'mapped-external-port',
        callback: (
            _source: this,
            proto: string,
            external_ip: string,
            replaces_external_ip: string,
            external_port: number,
            local_ip: string,
            local_port: number,
            description: string
        ) => void
    ): number;

    emit(
        signal: 'mapped-external-port',
        proto: string,
        external_ip: string,
        replaces_external_ip: string,
        external_port: number,
        local_ip: string,
        local_port: number,
        description: string
    ): void;

    // Constructors

    static ['new'](): SimpleIgd;

    // Members

    add_port(
        protocol: string,
        external_port: number,
        local_ip: string,
        local_port: number,
        lease_duration: number,
        description: string
    ): void;

    delete_all_mappings(): boolean;

    remove_port(protocol: string, external_port: number): void;

    remove_port_local(protocol: string, local_ip: string, local_port: number): void;

    static error_quark(): GLib.Quark;
}

export namespace SimpleIgdThread {
    export interface ConstructorProperties extends SimpleIgd.ConstructorProperties {
        [key: string]: any;
    }
}

export class SimpleIgdThread extends SimpleIgd {
    static $gtype: GObject.GType<SimpleIgdThread>;

    constructor(properties?: Partial<SimpleIgdThread.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SimpleIgdThread.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): SimpleIgdThread;
}

export class SimpleIgdPrivate {
    static $gtype: GObject.GType<SimpleIgdPrivate>;

    constructor(copy: SimpleIgdPrivate);
}

export class SimpleIgdThreadPrivate {
    static $gtype: GObject.GType<SimpleIgdThreadPrivate>;

    constructor(copy: SimpleIgdThreadPrivate);
}
