/**
 * Xkl 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as xlib from './xlib';

export const MAX_CI_DESC_LENGTH: number;
export const MAX_CI_NAME_LENGTH: number;
export const MAX_CI_SHORT_DESC_LENGTH: number;

export function get_country_name(code: string): string;

export function get_language_name(code: string): string;

export function get_last_error(): string;

export function restore_names_prop(engine: Engine): boolean;

export function set_debug_level(level: number): void;

export type ConfigItemProcessFunc = (config: ConfigRegistry, item: ConfigItem, data?: any | null) => void;
export type TwoConfigItemsProcessFunc = (
    config: ConfigRegistry,
    item: ConfigItem,
    subitem: ConfigItem,
    data?: any | null
) => void;

export namespace EngineListenModes {
    export const $gtype: GObject.GType<EngineListenModes>;
}

export enum EngineListenModes {
    MANAGE_WINDOW_STATES = 1,
    TRACK_KEYBOARD_STATE = 2,
    MANAGE_LAYOUTS = 4,
}

export namespace EngineStateChange {
    export const $gtype: GObject.GType<EngineStateChange>;
}

export enum EngineStateChange {
    GROUP_CHANGED = 0,
    INDICATORS_CHANGED = 1,
}

export namespace EngineFeatures {
    export const $gtype: GObject.GType<EngineFeatures>;
}

export enum EngineFeatures {
    CAN_TOGGLE_INDICATORS = 1,
    CAN_OUTPUT_CONFIG_AS_ASCII = 2,
    CAN_OUTPUT_CONFIG_AS_BINARY = 4,
    MULTIPLE_LAYOUTS_SUPPORTED = 8,
    REQUIRES_MANUAL_LAYOUT_MANAGEMENT = 16,
    DEVICE_DISCOVERY = 32,
}

export namespace ConfigItem {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ConfigItem extends GObject.Object {
    static $gtype: GObject.GType<ConfigItem>;

    constructor(properties?: Partial<ConfigItem.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ConfigItem.ConstructorProperties>, ...args: any[]): void;

    // Fields
    name: number[];
    short_description: number[];
    description: number[];

    // Constructors

    static ['new'](): ConfigItem;

    // Members

    get_description(): string;

    get_name(): string;

    get_short_description(): string;

    set_description(description?: string | null): void;

    set_name(name?: string | null): void;

    set_short_description(short_description?: string | null): void;
}

export namespace ConfigRec {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ConfigRec extends GObject.Object {
    static $gtype: GObject.GType<ConfigRec>;

    constructor(properties?: Partial<ConfigRec.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ConfigRec.ConstructorProperties>, ...args: any[]): void;

    // Fields
    model: string;
    layouts: string[];
    variants: string[];
    options: string[];

    // Constructors

    static ['new'](): ConfigRec;

    // Members

    activate(engine: Engine): boolean;

    equals(data2: ConfigRec): boolean;

    get_from_backup(engine: Engine): boolean;

    get_from_root_window_property(rules_atom_name: xlib.Atom, rules_file_out: string, engine: Engine): boolean;

    get_from_server(engine: Engine): boolean;

    reset(): void;

    set_layouts(new_layouts: string[]): void;

    set_model(new_model: string): void;

    set_options(new_options: string[]): void;

    set_to_root_window_property(rules_atom_name: xlib.Atom, rules_file: string, engine: Engine): boolean;

    set_variants(new_variants: string[]): void;

    static write_to_file(engine: Engine, file_name: string, data: ConfigRec, binary: boolean): boolean;
}

export namespace ConfigRegistry {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        engine: Engine;
    }
}

export class ConfigRegistry extends GObject.Object {
    static $gtype: GObject.GType<ConfigRegistry>;

    constructor(properties?: Partial<ConfigRegistry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ConfigRegistry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    engine: Engine;

    // Members

    find_layout(item: ConfigItem): boolean;

    find_model(item: ConfigItem): boolean;

    find_option(option_group_name: string, item: ConfigItem): boolean;

    find_option_group(item: ConfigItem): boolean;

    find_variant(layout_name: string, item: ConfigItem): boolean;

    foreach_country(func: ConfigItemProcessFunc): void;

    foreach_country_variant(country_code: string, func: TwoConfigItemsProcessFunc): void;

    foreach_language(func: ConfigItemProcessFunc): void;

    foreach_language_variant(language_code: string, func: TwoConfigItemsProcessFunc): void;

    foreach_layout(func: ConfigItemProcessFunc): void;

    foreach_layout_variant(layout_name: string, func: ConfigItemProcessFunc): void;

    foreach_model(func: ConfigItemProcessFunc): void;

    foreach_option(option_group_name: string, func: ConfigItemProcessFunc): void;

    foreach_option_group(func: ConfigItemProcessFunc): void;

    load(if_extras_needed: boolean): boolean;

    search_by_pattern(pattern: string, func: TwoConfigItemsProcessFunc): void;

    static get_instance(engine: Engine): ConfigRegistry;
}

export namespace Engine {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        backendName: string;
        default_group: number;
        defaultGroup: number;
        display: any;
        features: EngineFeatures;
        indicators_handling: boolean;
        indicatorsHandling: boolean;
        max_num_groups: number;
        maxNumGroups: number;
        num_groups: number;
        numGroups: number;
        secondary_groups_mask: number;
        secondaryGroupsMask: number;
    }
}

export class Engine extends GObject.Object {
    static $gtype: GObject.GType<Engine>;

    constructor(properties?: Partial<Engine.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Engine.ConstructorProperties>, ...args: any[]): void;

    // Properties
    backendName: string;
    default_group: number;
    defaultGroup: number;
    display: any;
    features: EngineFeatures;
    indicators_handling: boolean;
    indicatorsHandling: boolean;
    max_num_groups: number;
    maxNumGroups: number;
    num_groups: number;
    numGroups: number;
    secondary_groups_mask: number;
    secondaryGroupsMask: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'X-config-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'X-config-changed', callback: (_source: this) => void): number;

    emit(signal: 'X-config-changed'): void;

    connect(signal: 'X-new-device', callback: (_source: this) => void): number;

    connect_after(signal: 'X-new-device', callback: (_source: this) => void): number;

    emit(signal: 'X-new-device'): void;

    connect(
        signal: 'X-state-changed',
        callback: (_source: this, object: EngineStateChange, p0: number, p1: boolean) => void
    ): number;

    connect_after(
        signal: 'X-state-changed',
        callback: (_source: this, object: EngineStateChange, p0: number, p1: boolean) => void
    ): number;

    emit(signal: 'X-state-changed', object: EngineStateChange, p0: number, p1: boolean): void;

    connect(signal: 'new-toplevel-window', callback: (_source: this, object: number, p0: number) => number): number;

    connect_after(
        signal: 'new-toplevel-window',
        callback: (_source: this, object: number, p0: number) => number
    ): number;

    emit(signal: 'new-toplevel-window', object: number, p0: number): void;

    // Members

    allow_one_switch_to_secondary_group(): void;

    backup_names_prop(): boolean;

    delete_state(win: xlib.Window): void;

    filter_events(evt: xlib.XEvent): number;

    get_backend_name(): string;

    get_current_state(): State;

    get_current_window(): xlib.Window;

    get_current_window_group(): number;

    get_default_group(): number;

    get_features(): number;

    get_groups_names(): string[];

    get_indicators_handling(): boolean;

    get_indicators_names(): string[];

    get_max_num_groups(): number;

    get_next_group(): number;

    get_num_groups(): number;

    get_prev_group(): number;

    get_secondary_groups_mask(): number;

    get_state(win: xlib.Window, state_out: State): boolean;

    get_window_title(win: xlib.Window): string;

    grab_key(keycode: number, modifiers: number): boolean;

    is_group_per_toplevel_window(): boolean;

    is_window_from_same_toplevel_window(win1: xlib.Window, win2: xlib.Window): boolean;

    is_window_transparent(win: xlib.Window): boolean;

    lock_group(group: number): void;

    pause_listen(): number;

    resume_listen(): number;

    save_state(win: xlib.Window, state: State): void;

    set_default_group(group: number): void;

    set_group_per_toplevel_window(is_global: boolean): void;

    set_indicators_handling(whether_handle: boolean): void;

    set_secondary_groups_mask(mask: number): void;

    set_window_transparent(win: xlib.Window, transparent: boolean): void;

    start_listen(flags: number): number;

    stop_listen(flags: number): number;

    ungrab_key(keycode: number, modifiers: number): boolean;

    vfunc_config_notify(): void;

    vfunc_new_device_notify(): void;

    vfunc_new_window_notify(win: xlib.Window, parent: xlib.Window): number;

    vfunc_state_notify(change_type: EngineStateChange, group: number, restore: boolean): void;

    static INT__LONG_LONG(
        closure: GObject.Closure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;

    static VOID__ENUM_INT_BOOLEAN(
        closure: GObject.Closure,
        return_value: any,
        n_param_values: number,
        param_values: any,
        invocation_hint?: any | null,
        marshal_data?: any | null
    ): void;

    static get_instance(display: xlib.Display): Engine;
}

export class ConfigRegistryPrivate {
    static $gtype: GObject.GType<ConfigRegistryPrivate>;

    constructor(copy: ConfigRegistryPrivate);
}

export class EnginePrivate {
    static $gtype: GObject.GType<EnginePrivate>;

    constructor(copy: EnginePrivate);
}

export class State {
    static $gtype: GObject.GType<State>;

    constructor(
        properties?: Partial<{
            group?: number;
            indicators?: number;
        }>
    );

    constructor(copy: State);

    // Fields
    group: number;
    indicators: number;
}
