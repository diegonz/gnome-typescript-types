/**
 * Template 1.0
 *
 * Generated from 3.34.0
 */

import * as Gio from './gio';
import * as GObject from './gobject';
import * as GLib from './glib';

export const ENABLE_TRACE: number;
export const LOG_LEVEL_TRACE: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_S: string;

export function error_quark(): GLib.Quark;

export function expr_from_string(str: string): Expr;

export type ScopeResolver = (scope: Scope, name: string, symbol: symbol) => boolean;

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static INVALID_STATE: number;
    static TEMPLATE_NOT_FOUND: number;
    static CIRCULAR_INCLUDE: number;
    static SYNTAX_ERROR: number;
    static LEXER_FAILURE: number;
    static TYPE_MISMATCH: number;
    static INVALID_OP_CODE: number;
    static DIVIDE_BY_ZERO: number;
    static MISSING_SYMBOL: number;
    static SYMBOL_REDEFINED: number;
    static NOT_AN_OBJECT: number;
    static NULL_POINTER: number;
    static NO_SUCH_PROPERTY: number;
    static GI_FAILURE: number;
    static RUNTIME_ERROR: number;
    static NOT_IMPLEMENTED: number;
    static NOT_A_VALUE: number;
    static NOT_A_FUNCTION: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace ExprBuiltin {
    export const $gtype: GObject.GType<ExprBuiltin>;
}

export enum ExprBuiltin {
    ABS = 0,
    CEIL = 1,
    FLOOR = 2,
    HEX = 3,
    LOG = 4,
    PRINT = 5,
    REPR = 6,
    SQRT = 7,
    TYPEOF = 8,
}

export namespace ExprType {
    export const $gtype: GObject.GType<ExprType>;
}

export enum ExprType {
    ADD = 1,
    SUB = 2,
    MUL = 3,
    DIV = 4,
    BOOLEAN = 5,
    NUMBER = 6,
    STRING = 7,
    GT = 8,
    LT = 9,
    NE = 10,
    EQ = 11,
    GTE = 12,
    LTE = 13,
    UNARY_MINUS = 14,
    STMT_LIST = 15,
    IF = 16,
    WHILE = 17,
    SYMBOL_REF = 18,
    SYMBOL_ASSIGN = 19,
    FN_CALL = 20,
    USER_FN_CALL = 21,
    GETATTR = 22,
    SETATTR = 23,
    GI_CALL = 24,
    REQUIRE = 25,
    AND = 26,
    OR = 27,
    INVERT_BOOLEAN = 28,
}

export namespace SymbolType {
    export const $gtype: GObject.GType<SymbolType>;
}

export enum SymbolType {
    EXPR = 0,
    VALUE = 1,
}

export namespace Template {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        locator: TemplateLocator;
    }
}

export class Template extends GObject.Object {
    static $gtype: GObject.GType<Template>;

    constructor(properties?: Partial<Template.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Template.ConstructorProperties>, ...args: any[]): void;

    // Properties
    locator: TemplateLocator;

    // Constructors

    static ['new'](locator?: TemplateLocator | null): Template;

    // Members

    expand(stream: Gio.OutputStream, scope?: Scope | null, cancellable?: Gio.Cancellable | null): boolean;

    expand_string(scope?: Scope | null): string;

    get_locator(): TemplateLocator;

    parse(stream: Gio.InputStream, cancellable?: Gio.Cancellable | null): boolean;

    parse_file(file: Gio.File, cancellable?: Gio.Cancellable | null): boolean;

    parse_path(path: string, cancellable?: Gio.Cancellable | null): boolean;

    parse_resource(path: string, cancellable?: Gio.Cancellable | null): boolean;

    parse_string(input: string): boolean;

    set_locator(locator: TemplateLocator): void;
}

export namespace TemplateLocator {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class TemplateLocator extends GObject.Object {
    static $gtype: GObject.GType<TemplateLocator>;

    constructor(properties?: Partial<TemplateLocator.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TemplateLocator.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): TemplateLocator;

    // Members

    append_search_path(path: string): void;

    get_search_path(): string[];

    locate(path: string): Gio.InputStream;

    prepend_search_path(path: string): void;

    vfunc_locate(path: string): Gio.InputStream;
}

export class Scope {
    static $gtype: GObject.GType<Scope>;

    constructor();
    constructor(copy: Scope);

    // Constructors
    static ['new'](): Scope;

    // Members
    get(name: string): symbol;

    new_with_parent(): Scope;

    peek(name: string): symbol | null;

    ref(): Scope;

    set(name: string, symbol?: symbol | null): void;

    set_boolean(name: string, value: boolean): void;

    set_double(name: string, value: number): void;

    set_object(name: string, value?: GObject.Object | null): void;

    set_resolver(resolver: ScopeResolver): void;

    set_string(name: string, value?: string | null): void;

    set_strv(name: string, value?: string[] | null): void;

    set_value(name: string, value?: GObject.Value | null): void;

    set_variant(name: string, value?: GLib.Variant | null): void;

    take(name: string, symbol?: symbol | null): void;

    unref(): void;
}

export class Symbol {
    static $gtype: GObject.GType<symbol>;

    constructor();
    constructor(copy: symbol);

    // Constructors
    static ['new'](): symbol;

    // Members
    assign_boolean(v_bool: boolean): void;

    assign_double(v_double: number): void;

    assign_object(v_object?: GObject.Object | null): void;

    assign_string(v_string: string): void;

    assign_strv(strv?: string[] | null): void;

    assign_value(value: any): void;

    assign_variant(v_variant?: GLib.Variant | null): void;

    get_expr(): [Expr, string[] | null];

    get_symbol_type(): SymbolType;

    get_value(value: any): void;

    ref(): symbol;

    unref(): void;
}

export class Expr {
    static $gtype: GObject.GType<Expr>;

    constructor(value: boolean);
    constructor(copy: Expr);

    // Constructors
    static new_boolean(value: boolean): Expr;

    static new_flow(type: ExprType, condition: Expr, primary: Expr, secondary: Expr): Expr;

    static new_fn_call(builtin: ExprBuiltin, param: Expr): Expr;

    static new_number(value: number): Expr;

    static new_require(typelib: string, version: string): Expr;

    static new_simple(type: ExprType, left: Expr, right: Expr): Expr;

    static new_string(value: string, length: number): Expr;

    static new_symbol_assign(symbol: string, right: Expr): Expr;

    static new_symbol_ref(symbol: string): Expr;

    static new_user_fn_call(name: string, param: Expr): Expr;

    // Members
    ['eval'](scope: Scope, return_value: any): boolean;

    new_getattr(attr: string): Expr;

    new_gi_call(name: string, params: Expr): Expr;

    new_invert_boolean(): Expr;

    new_setattr(attr: string, right: Expr): Expr;

    ref(): Expr;

    unref(): void;

    static from_string(str: string): Expr;
}
