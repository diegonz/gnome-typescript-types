/**
 * TrackerControl 2.0
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GLib from './glib';
import * as GObject from './gobject';
import * as Gio from './gio';

export namespace MinerManagerError {
    export const $gtype: GObject.GType<MinerManagerError>;
}

export enum MinerManagerError {
    NOT_AVAILABLE = 0,
    NOENT = 1,
}

export namespace MinerManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        auto_start: boolean;
        autoStart: boolean;
        domain_ontology: string;
        domainOntology: string;
    }
}

export class MinerManager extends GObject.Object implements Gio.Initable {
    static $gtype: GObject.GType<MinerManager>;

    constructor(properties?: Partial<MinerManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MinerManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auto_start: boolean;
    autoStart: boolean;
    domain_ontology: string;
    domainOntology: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'miner-activated', callback: (_source: this, miner: string) => void): number;

    connect_after(signal: 'miner-activated', callback: (_source: this, miner: string) => void): number;

    emit(signal: 'miner-activated', miner: string): void;

    connect(signal: 'miner-deactivated', callback: (_source: this, miner: string) => void): number;

    connect_after(signal: 'miner-deactivated', callback: (_source: this, miner: string) => void): number;

    emit(signal: 'miner-deactivated', miner: string): void;

    connect(signal: 'miner-paused', callback: (_source: this, miner: string) => void): number;

    connect_after(signal: 'miner-paused', callback: (_source: this, miner: string) => void): number;

    emit(signal: 'miner-paused', miner: string): void;

    connect(
        signal: 'miner-progress',
        callback: (_source: this, miner: string, status: string, progress: number, remaining_time: number) => void
    ): number;

    connect_after(
        signal: 'miner-progress',
        callback: (_source: this, miner: string, status: string, progress: number, remaining_time: number) => void
    ): number;

    emit(signal: 'miner-progress', miner: string, status: string, progress: number, remaining_time: number): void;

    connect(signal: 'miner-resumed', callback: (_source: this, miner: string) => void): number;

    connect_after(signal: 'miner-resumed', callback: (_source: this, miner: string) => void): number;

    emit(signal: 'miner-resumed', miner: string): void;

    // Constructors

    static ['new'](): MinerManager;

    static new_full(auto_start: boolean): MinerManager;

    // Members

    get_available(): string[] | null;

    get_description(miner: string): string;

    get_display_name(miner: string): string;

    get_running(): string[] | null;

    get_status(miner: string): [boolean, string | null, number | null, number | null];

    index_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;

    index_file_async(
        file: Gio.File,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    index_file_finish(result: Gio.AsyncResult): boolean;

    index_file_for_process(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;

    index_file_for_process_async(
        file: Gio.File,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    index_file_for_process_finish(result: Gio.AsyncResult): boolean;

    is_active(miner: string): boolean;

    is_paused(miner: string): [boolean, string[] | null, string[] | null];

    pause(miner: string, reason: string): [boolean, number | null];

    pause_for_process(miner: string, reason: string): [boolean, number | null];

    reindex_by_mimetype(mimetypes: string[]): boolean;

    resume(miner: string, cookie: number): boolean;

    vfunc_miner_activated(miner_name: string): void;

    vfunc_miner_deactivated(miner_name: string): void;

    vfunc_miner_paused(miner_name: string): void;

    vfunc_miner_progress(miner_name: string, status: string, progress: number): void;

    vfunc_miner_resumed(miner_name: string): void;

    static error_quark(): GLib.Quark;

    // Implemented Members

    init(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_init(cancellable?: Gio.Cancellable | null): boolean;
}
