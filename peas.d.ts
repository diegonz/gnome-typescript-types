/**
 * Peas 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GIRepository from './girepository';
import * as GModule from './gmodule';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as GLib from './glib';

export function cclosure_marshal_VOID__BOXED_OBJECT(
    closure: GObject.Closure,
    return_value: any,
    n_param_values: number,
    param_values: any,
    invocation_hint?: any | null,
    marshal_data?: any | null
): void;

export function plugin_info_error_quark(): GLib.Quark;

export type ExtensionSetForeachFunc = (
    set: ExtensionSet,
    info: PluginInfo,
    exten: Extension,
    data?: any | null
) => void;
export type FactoryFunc = (parameters: GObject.Parameter[]) => GObject.Object;

export class PluginInfoError extends GLib.Error {
    static $gtype: GObject.GType<PluginInfoError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PluginInfoError);

    // Properties
    static LOADING_FAILED: number;
    static LOADER_NOT_FOUND: number;
    static DEP_NOT_FOUND: number;
    static DEP_LOADING_FAILED: number;
}

export namespace Engine {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        loaded_plugins: string[];
        loadedPlugins: string[];
        nonglobal_loaders: boolean;
        nonglobalLoaders: boolean;
        plugin_list: any;
        pluginList: any;
    }
}

export class Engine extends GObject.Object {
    static $gtype: GObject.GType<Engine>;

    constructor(properties?: Partial<Engine.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Engine.ConstructorProperties>, ...args: any[]): void;

    // Properties
    loaded_plugins: string[];
    loadedPlugins: string[];
    nonglobal_loaders: boolean;
    nonglobalLoaders: boolean;
    plugin_list: any;
    pluginList: any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'load-plugin', callback: (_source: this, info: PluginInfo) => void): number;

    connect_after(signal: 'load-plugin', callback: (_source: this, info: PluginInfo) => void): number;

    emit(signal: 'load-plugin', info: PluginInfo): void;

    connect(signal: 'unload-plugin', callback: (_source: this, info: PluginInfo) => void): number;

    connect_after(signal: 'unload-plugin', callback: (_source: this, info: PluginInfo) => void): number;

    emit(signal: 'unload-plugin', info: PluginInfo): void;

    // Constructors

    static ['new'](): Engine;

    static new_with_nonglobal_loaders(): Engine;

    // Members

    add_search_path(module_dir: string, data_dir?: string | null): void;

    create_extension(
        info: PluginInfo,
        extension_type: GObject.GType,
        prop_names: string[],
        prop_values: GObject.Value[]
    ): Extension;

    enable_loader(loader_name: string): void;

    garbage_collect(): void;

    get_loaded_plugins(): string[];

    get_plugin_info(plugin_name: string): PluginInfo;

    get_plugin_list(): PluginInfo[];

    load_plugin(info: PluginInfo): boolean;

    prepend_search_path(module_dir: string, data_dir?: string | null): void;

    provides_extension(info: PluginInfo, extension_type: GObject.GType): boolean;

    rescan_plugins(): void;

    set_loaded_plugins(plugin_names?: string[] | null): void;

    unload_plugin(info: PluginInfo): boolean;

    vfunc_load_plugin(info: PluginInfo): void;

    vfunc_unload_plugin(info: PluginInfo): void;

    static get_default(): Engine;
}

export namespace ExtensionBase {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        data_dir: string;
        dataDir: string;
        plugin_info: PluginInfo;
        pluginInfo: PluginInfo;
    }
}

export abstract class ExtensionBase extends GObject.Object {
    static $gtype: GObject.GType<ExtensionBase>;

    constructor(properties?: Partial<ExtensionBase.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ExtensionBase.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data_dir: string;
    dataDir: string;
    plugin_info: PluginInfo;
    pluginInfo: PluginInfo;

    // Fields
    priv: ExtensionBasePrivate;

    // Members

    get_data_dir(): string;

    get_plugin_info(): PluginInfo;
}

export namespace ExtensionSet {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        construct_properties: any;
        constructProperties: any;
        engine: Engine;
        extension_type: GObject.GType;
        extensionType: GObject.GType;
    }
}

export class ExtensionSet extends GObject.Object {
    static $gtype: GObject.GType<ExtensionSet>;

    constructor(properties?: Partial<ExtensionSet.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ExtensionSet.ConstructorProperties>, ...args: any[]): void;

    // Properties
    construct_properties: any;
    constructProperties: any;
    engine: Engine;
    extension_type: GObject.GType;
    extensionType: GObject.GType;

    // Fields
    priv: ExtensionSetPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'extension-added',
        callback: (_source: this, info: PluginInfo, exten: GObject.Object) => void
    ): number;

    connect_after(
        signal: 'extension-added',
        callback: (_source: this, info: PluginInfo, exten: GObject.Object) => void
    ): number;

    emit(signal: 'extension-added', info: PluginInfo, exten: GObject.Object): void;

    connect(
        signal: 'extension-removed',
        callback: (_source: this, info: PluginInfo, exten: GObject.Object) => void
    ): number;

    connect_after(
        signal: 'extension-removed',
        callback: (_source: this, info: PluginInfo, exten: GObject.Object) => void
    ): number;

    emit(signal: 'extension-removed', info: PluginInfo, exten: GObject.Object): void;

    // Constructors

    static ['new'](
        engine: Engine | null,
        exten_type: GObject.GType,
        prop_names: string[],
        prop_values: GObject.Value[]
    ): ExtensionSet;

    // Members

    foreach(func: ExtensionSetForeachFunc): void;

    get_extension(info: PluginInfo): Extension;

    vfunc_call(method_name: string, args: GIRepository.Argument): boolean;

    vfunc_extension_added(info: PluginInfo, exten: Extension): void;

    vfunc_extension_removed(info: PluginInfo, exten: Extension): void;
}

export namespace ObjectModule {
    export interface ConstructorProperties extends GObject.TypeModule.ConstructorProperties {
        [key: string]: any;

        local_linkage: boolean;
        localLinkage: boolean;
        module_name: string;
        moduleName: string;
        path: string;
        resident: boolean;
        symbol: string;
    }
}

export class ObjectModule extends GObject.TypeModule implements GObject.TypePlugin {
    static $gtype: GObject.GType<ObjectModule>;

    constructor(properties?: Partial<ObjectModule.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ObjectModule.ConstructorProperties>, ...args: any[]): void;

    // Properties
    local_linkage: boolean;
    localLinkage: boolean;
    module_name: string;
    moduleName: string;
    path: string;
    resident: boolean;
    symbol: string;

    // Fields
    priv: ObjectModulePrivate;

    // Members

    register_extension_factory(exten_type: GObject.GType, factory_func: FactoryFunc): void;

    register_extension_type(exten_type: GObject.GType, impl_type: GObject.GType): void;

    // Implemented Members

    complete_interface_info(
        instance_type: GObject.GType,
        interface_type: GObject.GType,
        info: GObject.InterfaceInfo
    ): void;

    complete_type_info(g_type: GObject.GType, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void;

    unuse(): void;

    use(): void;
    use(...args: never[]): never;
}

export class EnginePrivate {
    static $gtype: GObject.GType<EnginePrivate>;

    constructor(copy: EnginePrivate);
}

export class ExtensionBasePrivate {
    static $gtype: GObject.GType<ExtensionBasePrivate>;

    constructor(copy: ExtensionBasePrivate);
}

export class ExtensionSetPrivate {
    static $gtype: GObject.GType<ExtensionSetPrivate>;

    constructor(copy: ExtensionSetPrivate);
}

export class ObjectModulePrivate {
    static $gtype: GObject.GType<ObjectModulePrivate>;

    constructor(copy: ObjectModulePrivate);
}

export class PluginInfo {
    static $gtype: GObject.GType<PluginInfo>;

    constructor(copy: PluginInfo);

    // Members
    get_authors(): string[];

    get_copyright(): string;

    get_data_dir(): string;

    get_dependencies(): string[];

    get_description(): string;

    get_external_data(key: string): string;

    get_help_uri(): string;

    get_icon_name(): string;

    get_module_dir(): string;

    get_module_name(): string;

    get_name(): string;

    get_settings(schema_id?: string | null): Gio.Settings;

    get_version(): string;

    get_website(): string;

    has_dependency(module_name: string): boolean;

    is_available(): boolean;

    is_builtin(): boolean;

    is_hidden(): boolean;

    is_loaded(): boolean;

    static error_quark(): GLib.Quark;
}

export interface ActivatableNamespace {
    $gtype: GObject.GType<Activatable>;
    prototype: ActivatablePrototype;
}

export type Activatable = ActivatablePrototype;

export interface ActivatablePrototype extends GObject.Object {
    // Properties
    object: GObject.Object;

    // Members

    activate(): void;

    deactivate(): void;

    update_state(): void;

    vfunc_activate(): void;

    vfunc_deactivate(): void;

    vfunc_update_state(): void;
}

export const Activatable: ActivatableNamespace;

export type Extension = GObject.Object;
