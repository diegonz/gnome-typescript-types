/**
 * LangTag 0.6
 *
 * Generated from 0.6
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GLib from './glib';
import * as GObject from './gobject';

export const DIR_SEPARATOR: number;
export const DIR_SEPARATOR_S: string;
export const EXT_MODULE_VERSION: number;
export const PATH_MAX: number;
export const SEARCHPATH_SEPARATOR: number;
export const SEARCHPATH_SEPARATOR_S: string;

export function db_finalize(): void;

export function db_get_datadir(): string;

export function db_get_extlang(): ExtlangDb;

export function db_get_grandfathered(): GrandfatheredDb;

export function db_get_lang(): LangDb;

export function db_get_redundant(): RedundantDb;

export function db_get_region(): RegionDb;

export function db_get_relation(): RelationDb;

export function db_get_script(): ScriptDb;

export function db_get_variant(): VariantDb;

export function db_initialize(): void;

export function db_set_datadir(path: string): void;

export function db_set_val(val: DbVal): void;

export function ext_modules_load(): void;

export function ext_modules_unload(): void;

export function iter_init(tmpl: IterTmpl): Iter;

export function list_free(data: Pointer): void;

export function tag_convert_from_locale(error?: Error | null): Tag;

export function tag_convert_from_locale_string(locale: string, error?: Error | null): Tag;

export type CompareFunc = (v1: Pointer, v2: Pointer) => number;
export type CopyFunc = (data: Pointer) => Pointer;
export type DestroyFunc = (data: Pointer) => void;
export type ExtModuleDataNewFunc = () => ExtModuleData;
export type ExtModuleGetFuncsFunc = () => ExtModuleFuncs;
export type ExtModuleGetTagFunc = (data: ExtModuleData) => string;
export type ExtModuleParseFunc = (data: ExtModuleData, subtag: string, error?: Error | null) => Bool;
export type ExtModulePrecheckFunc = (data: ExtModuleData, tag: Tag, error?: Error | null) => Bool;
export type ExtModuleSingletonFunc = () => number;
export type ExtModuleValidateFunc = (data: ExtModuleData) => Bool;
export type ExtModuleVersionFunc = () => number;

export namespace ErrorType {
    export const $gtype: GObject.GType<ErrorType>;
}

export enum ErrorType {}

export namespace TagFilter {
    export const $gtype: GObject.GType<TagFilter>;
}

export enum TagFilter {}

export class DbVal {
    static $gtype: GObject.GType<DbVal>;

    constructor(copy: DbVal);

    // Fields
    lang: LangDb;
    extlang: ExtlangDb;
    script: ScriptDb;
    region: RegionDb;
    variant: VariantDb;
    grandfathered: GrandfatheredDb;
    redundant: RedundantDb;
    relation: RelationDb;
}

export class Error {
    static $gtype: GObject.GType<Error>;

    constructor();
    constructor(copy: Error);

    // Constructors
    static ['new'](): Error;

    // Members
    clear(): void;

    is_set(type: ErrorType): Bool;

    print(type: ErrorType): void;

    ref(): Error;

    unref(): void;
}

export class ExtModule {
    static $gtype: GObject.GType<ExtModule>;

    constructor(copy: ExtModule);

    // Members
    ref(): ExtModule;

    unref(): void;
}

export class ExtModuleData {
    static $gtype: GObject.GType<ExtModuleData>;

    constructor(size: number, finalizer: DestroyFunc);
    constructor(copy: ExtModuleData);

    // Fields
    dummy: Pointer[];

    // Constructors
    static ['new'](size: number, finalizer: DestroyFunc): ExtModuleData;

    // Members
    ref(): ExtModuleData;

    unref(): void;
}

export class ExtModuleFuncs {
    static $gtype: GObject.GType<ExtModuleFuncs>;

    constructor(copy: ExtModuleFuncs);

    // Fields
    get_singleton: ExtModuleSingletonFunc;
    create_data: ExtModuleDataNewFunc;
    precheck_tag: ExtModulePrecheckFunc;
    parse_tag: ExtModuleParseFunc;
    get_tag: ExtModuleGetTagFunc;
    validate_tag: ExtModuleValidateFunc;
}

export class Extension {
    static $gtype: GObject.GType<Extension>;

    constructor(copy: Extension);

    // Members
    compare(v2: Extension): Bool;

    dump(): void;

    get_canonicalized_tag(): string;

    get_tag(): string;

    ref(): Extension;

    truncate(): Bool;

    unref(): void;
}

export class Extlang {
    static $gtype: GObject.GType<Extlang>;

    constructor(copy: Extlang);

    // Members
    compare(v2: Extlang): Bool;

    dump(): void;

    get_macro_language(): string;

    get_name(): string;

    get_preferred_tag(): string;

    get_prefix(): string;

    get_tag(): string;

    ref(): Extlang;

    unref(): void;
}

export class ExtlangDb {
    static $gtype: GObject.GType<ExtlangDb>;

    constructor();
    constructor(copy: ExtlangDb);

    // Constructors
    static ['new'](): ExtlangDb;

    // Members
    lookup(subtag: string): Extlang;

    ref(): ExtlangDb;

    unref(): void;
}

export class Grandfathered {
    static $gtype: GObject.GType<Grandfathered>;

    constructor(copy: Grandfathered);

    // Members
    compare(v2: Grandfathered): Bool;

    dump(): void;

    get_better_tag(): string;

    get_name(): string;

    get_preferred_tag(): string;

    get_tag(): string;

    ref(): Grandfathered;

    unref(): void;
}

export class GrandfatheredDb {
    static $gtype: GObject.GType<GrandfatheredDb>;

    constructor();
    constructor(copy: GrandfatheredDb);

    // Constructors
    static ['new'](): GrandfatheredDb;

    // Members
    lookup(tag: string): Grandfathered;

    ref(): GrandfatheredDb;

    unref(): void;
}

export class Iter {
    static $gtype: GObject.GType<Iter>;

    constructor(copy: Iter);

    // Members
    finish(): void;

    next(key?: Pointer | null, val?: Pointer | null): Bool;

    ref(): Iter;

    unref(): void;

    static init(tmpl: IterTmpl): Iter;
}

export class IterTmpl {
    static $gtype: GObject.GType<IterTmpl>;

    constructor(copy: IterTmpl);
}

export class Lang {
    static $gtype: GObject.GType<Lang>;

    constructor(copy: Lang);

    // Members
    compare(v2: Lang): Bool;

    dump(): void;

    get_better_tag(): string;

    get_macro_language(): string;

    get_name(): string;

    get_preferred_tag(): string;

    get_scope(): string;

    get_suppress_script(): string;

    get_tag(): string;

    ref(): Lang;

    unref(): void;
}

export class LangDb {
    static $gtype: GObject.GType<LangDb>;

    constructor();
    constructor(copy: LangDb);

    // Constructors
    static ['new'](): LangDb;

    // Members
    lookup(subtag: string): Lang;

    ref(): LangDb;

    unref(): void;
}

export class List {
    static $gtype: GObject.GType<List>;

    constructor();
    constructor(copy: List);

    // Constructors
    static ['new'](): List;

    // Members
    append(data: Pointer, func: DestroyFunc): List;

    ['delete'](data: Pointer): List;

    delete_link(link_: List): List;

    find(data: Pointer): List;

    find_custom(data: Pointer, func: CompareFunc): List;

    first(): List;

    last(): List;

    length(): number;

    next(): List;

    pop(data: Pointer): List;

    prepend(data: Pointer, func: DestroyFunc): List;

    previous(): List;

    ref(): List;

    remove(data: Pointer): List;

    sort(func: CompareFunc): List;

    unref(): void;

    value(): Pointer;

    static free(data: Pointer): void;
}

export class Redundant {
    static $gtype: GObject.GType<Redundant>;

    constructor(copy: Redundant);

    // Members
    compare(v2: Redundant): Bool;

    dump(): void;

    get_better_tag(): string;

    get_name(): string;

    get_preferred_tag(): string;

    get_tag(): string;

    ref(): Redundant;

    unref(): void;
}

export class RedundantDb {
    static $gtype: GObject.GType<RedundantDb>;

    constructor();
    constructor(copy: RedundantDb);

    // Constructors
    static ['new'](): RedundantDb;

    // Members
    lookup(tag: string): Redundant;

    ref(): RedundantDb;

    unref(): void;
}

export class Region {
    static $gtype: GObject.GType<Region>;

    constructor(copy: Region);

    // Members
    compare(v2: Region): Bool;

    dump(): void;

    get_better_tag(): string;

    get_name(): string;

    get_preferred_tag(): string;

    get_tag(): string;

    ref(): Region;

    unref(): void;
}

export class RegionDb {
    static $gtype: GObject.GType<RegionDb>;

    constructor();
    constructor(copy: RegionDb);

    // Constructors
    static ['new'](): RegionDb;

    // Members
    lookup(language_or_code: string): Region;

    ref(): RegionDb;

    unref(): void;
}

export class RelationDb {
    static $gtype: GObject.GType<RelationDb>;

    constructor();
    constructor(copy: RelationDb);

    // Constructors
    static ['new'](): RelationDb;

    // Members
    lookup_lang_from_script(script: Script): List;

    lookup_script_from_lang(lang: Lang): List;

    ref(): RelationDb;

    unref(): void;
}

export class Script {
    static $gtype: GObject.GType<Script>;

    constructor(copy: Script);

    // Members
    compare(v2: Script): Bool;

    convert_to_modifier(): string;

    dump(): void;

    get_name(): string;

    get_tag(): string;

    ref(): Script;

    unref(): void;
}

export class ScriptDb {
    static $gtype: GObject.GType<ScriptDb>;

    constructor();
    constructor(copy: ScriptDb);

    // Constructors
    static ['new'](): ScriptDb;

    // Members
    lookup(subtag: string): Script;

    ref(): ScriptDb;

    unref(): void;
}

export class String {
    static $gtype: GObject.GType<string>;

    constructor(string: string);
    constructor(copy: string);

    // Constructors
    static ['new'](string: string): string;

    // Members
    append(str: string): string;

    append_c(c: number): string;

    at(pos: number): number;

    clear(): void;

    free(free_segment: Bool): string;

    length(): number;

    ref(): string;

    replace_c(pos: number, c: number): string;

    truncate(len: number): string;

    unref(): void;

    value(): string;
}

export class Tag {
    static $gtype: GObject.GType<Tag>;

    constructor();
    constructor(copy: Tag);

    // Constructors
    static ['new'](): Tag;

    // Members
    canonicalize(error?: Error | null): string;

    canonicalize_in_extlang_form(error?: Error | null): string;

    clear(): void;

    compare(v2: Tag): Bool;

    convert_to_locale(error?: Error | null): string;

    copy(): Tag;

    dump(): void;

    get_extension(): Extension;

    get_extlang(): Extlang;

    get_grandfathered(): Grandfathered;

    get_language(): Lang;

    get_privateuse(): string;

    get_region(): Region;

    get_script(): Script;

    get_string(): string;

    get_string_with_filter(filter: number): string;

    get_variants(): List;

    lookup(pattern: string, error?: Error | null): string;

    match(v2: string, error?: Error | null): Bool;

    parse(tag_string: string, error?: Error | null): Bool;

    parse_with_extra_token(tag_string: string, error?: Error | null): Bool;

    ref(): Tag;

    transform(error: Error): string;

    truncate(error: Error): Bool;

    unref(): void;

    static convert_from_locale(error?: Error | null): Tag;

    static convert_from_locale_string(locale: string, error?: Error | null): Tag;
}

export class Variant {
    static $gtype: GObject.GType<Variant>;

    constructor(copy: Variant);

    // Members
    compare(v2: Variant): Bool;

    dump(): void;

    get_better_tag(): string;

    get_name(): string;

    get_preferred_tag(): string;

    get_prefix(): List;

    get_tag(): string;

    ref(): Variant;

    unref(): void;
}

export class VariantDb {
    static $gtype: GObject.GType<VariantDb>;

    constructor();
    constructor(copy: VariantDb);

    // Constructors
    static ['new'](): VariantDb;

    // Members
    lookup(subtag: string): Variant;

    ref(): VariantDb;

    unref(): void;
}

export type Bool = number;
export type Pointer = any;
