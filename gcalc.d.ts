/**
 * GCalc 2
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gee from './gee';
import * as Gio from './gio';
import * as GLib from './glib';

export class AssigError extends GLib.Error {
    static $gtype: GObject.GType<AssigError>;

    constructor(options: { message: string; code: number });
    constructor(copy: AssigError);

    // Properties
    static INVALID_STRUCTURE_ERROR: number;
}

export class FunctionError extends GLib.Error {
    static $gtype: GObject.GType<FunctionError>;

    constructor(options: { message: string; code: number });
    constructor(copy: FunctionError);

    // Properties
    static INVALID_PARAMETERS_ERROR: number;
    static INVOCATION_ERROR: number;
}

export class GroupError extends GLib.Error {
    static $gtype: GObject.GType<GroupError>;

    constructor(options: { message: string; code: number });
    constructor(copy: GroupError);

    // Properties
    static INVALID_POLYNOMIAL: number;
    static INVALID_INTERNAL_TERM: number;
}

export class TermError extends GLib.Error {
    static $gtype: GObject.GType<TermError>;

    constructor(options: { message: string; code: number });
    constructor(copy: TermError);

    // Properties
    static INVALID_OPERATOR: number;
    static EVALUATION_FAIL: number;
}

export class VariableError extends GLib.Error {
    static $gtype: GObject.GType<VariableError>;

    constructor(options: { message: string; code: number });
    constructor(copy: VariableError);

    // Properties
    static INVALID_PARENT: number;
    static INVALID_EXPRESSION_DEFINITION: number;
    static EVALUATION_FAIL: number;
}

export class ParserError extends GLib.Error {
    static $gtype: GObject.GType<ParserError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ParserError);

    // Properties
    static INVALID_TOKEN_ERROR: number;
    static INVALID_EXPRESSION_ERROR: number;
}

export class SolverError extends GLib.Error {
    static $gtype: GObject.GType<SolverError>;

    constructor(options: { message: string; code: number });
    constructor(copy: SolverError);

    // Properties
    static EXPRESSION_ERROR: number;
}

export namespace ParserTokenType {
    export const $gtype: GObject.GType<ParserTokenType>;
}

export enum ParserTokenType {
    NONE = 0,
    EOF = 1,
    IDENTIFIER = 2,
    INTEGER_LITERAL = 3,
    REAL_LITERAL = 4,
    STAR = 5,
    PLUS = 6,
    DIV = 7,
    MINUS = 8,
    ASSIGN = 9,
    OPEN_PARENS = 10,
    CLOSE_PARENS = 11,
    CARRET = 12,
    CLOSE_BRACE = 13,
    CLOSE_BRACKET = 14,
    OPEN_BRACE = 15,
    OPEN_BRACKET = 16,
    STRING_LITERAL = 17,
    OP_AND = 18,
    OP_COALESCING = 19,
    OP_DEC = 20,
    OP_EQ = 21,
    OP_GE = 22,
    OP_GT = 23,
    OP_INC = 24,
    OP_LE = 25,
    OP_LT = 26,
    OP_NE = 27,
    OP_NEG = 28,
    OP_OR = 29,
    OP_PTR = 30,
    OP_SHIFT_LEFT = 31,
    SEMICOLON = 32,
    TILDE = 33,
    COLON = 34,
    COMMA = 35,
    DOUBLE_COLON = 36,
    DOT = 37,
    ELLIPSIS = 38,
    INTERR = 39,
    HASH = 40,
    CURRENCY_SYMBOL = 41,
}

export namespace MathGroupLevel {
    export const $gtype: GObject.GType<MathGroupLevel>;
}

export enum MathGroupLevel {
    ONE = 0,
    TWO = 1,
    THREE = 2,
}

export namespace Assign {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Assign extends Expression implements MathOperator, MathBinaryOperator, MathAssign {
    static $gtype: GObject.GType<Assign>;

    constructor(properties?: Partial<Assign.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Assign.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Assign;

    // Implemented Members

    evaluate(): MathExpression;
}

export namespace Constant {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Constant extends Expression implements MathConstant, MathConstantNumber, MathConstantComplex {
    static $gtype: GObject.GType<Constant>;

    constructor(properties?: Partial<Constant.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Constant.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static integer(val: number): Constant;

    static unsigned_integer(val: number): Constant;

    static double(val: number): Constant;

    static complex(real: number, imag: number): Constant;

    static ['new'](): Constant;

    // Implemented Members

    add(c: MathConstant): MathConstant;

    subtract(c: MathConstant): MathConstant;

    multiply(c: MathConstant): MathConstant;

    divide(c: MathConstant): MathConstant;

    neg(): MathConstant;

    pow(c: MathConstant): MathConstant;

    vfunc_add(c: MathConstant): MathConstant;

    vfunc_subtract(c: MathConstant): MathConstant;

    vfunc_multiply(c: MathConstant): MathConstant;

    vfunc_divide(c: MathConstant): MathConstant;

    vfunc_neg(): MathConstant;

    vfunc_pow(c: MathConstant): MathConstant;

    value(): number;

    vfunc_value(): number;

    real(): number;

    imag(): number;

    zero(): void;

    vfunc_real(): number;

    vfunc_imag(): number;

    vfunc_zero(): void;
}

export namespace Division {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Division extends Expression implements MathOperator, MathBinaryOperator, MathDivision {
    static $gtype: GObject.GType<Division>;

    constructor(properties?: Partial<Division.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Division.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Division;
}

export namespace Equation {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Equation extends Expression implements MathEquation {
    static $gtype: GObject.GType<Equation>;

    constructor(properties?: Partial<Equation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Equation.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    variables: ExpressionHashMap;

    // Constructors

    static ['new'](): Equation;

    // Implemented Members

    get_variables(): ExpressionHashMap;

    vfunc_get_variables(): ExpressionHashMap;
}

export namespace EquationManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class EquationManager extends GObject.Object implements MathEquationManager {
    static $gtype: GObject.GType<EquationManager>;

    constructor(properties?: Partial<EquationManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EquationManager.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    equations: ExpressionContainer;
    functions: ExpressionContainer;

    // Constructors

    static ['new'](): EquationManager;

    // Implemented Members

    find_variable(name: string): MathVariable;

    get_equations(): ExpressionContainer;

    get_functions(): ExpressionContainer;

    vfunc_find_variable(name: string): MathVariable;

    vfunc_get_equations(): ExpressionContainer;

    vfunc_get_functions(): ExpressionContainer;
}

export namespace ErrorResult {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ErrorResult extends GObject.Object implements MathResult, MathErrorResult {
    static $gtype: GObject.GType<ErrorResult>;

    constructor(properties?: Partial<ErrorResult.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ErrorResult.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    expression: MathExpression;
    message: string;

    // Constructors

    static ['new'](msg: string): ErrorResult;

    // Implemented Members

    to_string(): string;

    get_expression(): MathExpression;

    vfunc_to_string(): string;

    vfunc_get_expression(): MathExpression;

    get_message(): string;

    vfunc_get_message(): string;
}

export namespace Expression {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Expression extends GObject.Object implements MathExpression {
    static $gtype: GObject.GType<Expression>;

    constructor(properties?: Partial<Expression.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Expression.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    expressions: ExpressionContainer;

    // Constructors

    static ['new'](): Expression;

    // Members

    to_string(): string;

    solve(): MathResult;

    vfunc_to_string(): string;

    vfunc_solve(): MathResult;

    // Implemented Members

    get_parent(): MathExpression;

    set_parent(value: MathExpression): void;

    get_expressions(): ExpressionContainer;

    vfunc_get_parent(): MathExpression;

    vfunc_set_parent(value: MathExpression): void;

    vfunc_get_expressions(): ExpressionContainer;
}

export namespace ErrorExpression {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class ErrorExpression extends Expression {
    static $gtype: GObject.GType<ErrorExpression>;

    constructor(properties?: Partial<ErrorExpression.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ErrorExpression.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ErrorExpression;
}

export namespace ExpressionContainer {
    export interface ConstructorProperties<A extends GObject.Object = GObject.Object>
        extends Gee.ArrayList.ConstructorProperties {
        [key: string]: any;
    }
}

export class ExpressionContainer<A extends GObject.Object = GObject.Object>
    extends Gee.ArrayList
    implements Gio.ListModel<A> {
    static $gtype: GObject.GType<ExpressionContainer>;

    constructor(properties?: Partial<ExpressionContainer.ConstructorProperties<A>>, ...args: any[]);

    _init(properties?: Partial<ExpressionContainer.ConstructorProperties<A>>, ...args: any[]): void;

    // Constructors

    static ['new'](): ExpressionContainer;
    static ['new'](...args: never[]): never;

    // Members

    get_object<T = GObject.Object>(position: number): T;

    find(exp: MathExpression): MathExpression | null;

    find_named(name: string): MathExpression | null;

    get_parent(): MathExpression;

    set_parent(value: MathExpression): void;

    // Implemented Members

    get_item_type(): GObject.GType;

    get_n_items(): number;

    get_item(position: number): A | null;

    items_changed(position: number, removed: number, added: number): void;

    vfunc_get_item(position: number): A | null;

    vfunc_get_item_type(): GObject.GType;

    vfunc_get_n_items(): number;
}

export namespace ExpressionHashMap {
    export interface ConstructorProperties extends Gee.HashMap.ConstructorProperties {
        [key: string]: any;
    }
}

export class ExpressionHashMap extends Gee.HashMap {
    static $gtype: GObject.GType<ExpressionHashMap>;

    constructor(properties?: Partial<ExpressionHashMap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ExpressionHashMap.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): ExpressionHashMap;
    static ['new'](...args: never[]): never;

    // Members

    add(exp: MathExpression): void;

    remove(exp: MathExpression): void;
    remove(...args: never[]): never;

    find_named(name: string): MathExpression | null;

    get_parent(): MathExpression;

    set_parent(value: MathExpression): void;
}

export namespace Function {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Function extends Expression implements MathFunction, Hashable {
    static $gtype: GObject.GType<Function>;

    constructor(properties?: Partial<Function.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Function.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    param_types: ExpressionContainer;
    paramTypes: ExpressionContainer;
    name: string;
    n_params: number;
    nParams: number;
    closed: boolean;

    // Constructors

    static with_name(name: string, nparams: number): Function;

    static ['new'](): Function;

    // Members

    evaluate(): MathExpression;

    vfunc_evaluate(): MathExpression;

    // Implemented Members

    verify_params(): boolean;

    get_param_types(): ExpressionContainer;

    get_name(): string;

    set_name(value: string): void;

    get_n_params(): number;

    set_n_params(value: number): void;

    get_closed(): boolean;

    set_closed(value: boolean): void;

    vfunc_verify_params(): boolean;

    vfunc_get_param_types(): ExpressionContainer;

    vfunc_get_name(): string;

    vfunc_set_name(value: string): void;

    vfunc_get_n_params(): number;

    vfunc_set_n_params(value: number): void;

    vfunc_get_closed(): boolean;

    vfunc_set_closed(value: boolean): void;

    hash(): number;

    vfunc_hash(): number;
}

export namespace FunctionAcos {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionAcos extends Function {
    static $gtype: GObject.GType<FunctionAcos>;

    constructor(properties?: Partial<FunctionAcos.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionAcos.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionAcos;
}

export namespace FunctionAcosh {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionAcosh extends Function {
    static $gtype: GObject.GType<FunctionAcosh>;

    constructor(properties?: Partial<FunctionAcosh.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionAcosh.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionAcosh;
}

export namespace FunctionAsin {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionAsin extends Function {
    static $gtype: GObject.GType<FunctionAsin>;

    constructor(properties?: Partial<FunctionAsin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionAsin.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionAsin;
}

export namespace FunctionAsinh {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionAsinh extends Function {
    static $gtype: GObject.GType<FunctionAsinh>;

    constructor(properties?: Partial<FunctionAsinh.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionAsinh.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionAsinh;
}

export namespace FunctionAtan {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionAtan extends Function {
    static $gtype: GObject.GType<FunctionAtan>;

    constructor(properties?: Partial<FunctionAtan.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionAtan.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionAtan;
}

export namespace FunctionAtanh {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionAtanh extends Function {
    static $gtype: GObject.GType<FunctionAtanh>;

    constructor(properties?: Partial<FunctionAtanh.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionAtanh.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionAtanh;
}

export namespace FunctionCos {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionCos extends Function {
    static $gtype: GObject.GType<FunctionCos>;

    constructor(properties?: Partial<FunctionCos.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionCos.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionCos;
}

export namespace FunctionCosh {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionCosh extends Function {
    static $gtype: GObject.GType<FunctionCosh>;

    constructor(properties?: Partial<FunctionCosh.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionCosh.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionCosh;
}

export namespace FunctionExp {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionExp extends Function {
    static $gtype: GObject.GType<FunctionExp>;

    constructor(properties?: Partial<FunctionExp.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionExp.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionExp;
}

export namespace FunctionLog {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionLog extends Function {
    static $gtype: GObject.GType<FunctionLog>;

    constructor(properties?: Partial<FunctionLog.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionLog.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionLog;
}

export namespace FunctionSin {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionSin extends Function {
    static $gtype: GObject.GType<FunctionSin>;

    constructor(properties?: Partial<FunctionSin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionSin.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionSin;
}

export namespace FunctionSinh {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionSinh extends Function {
    static $gtype: GObject.GType<FunctionSinh>;

    constructor(properties?: Partial<FunctionSinh.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionSinh.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionSinh;
}

export namespace FunctionSqrt {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionSqrt extends Function {
    static $gtype: GObject.GType<FunctionSqrt>;

    constructor(properties?: Partial<FunctionSqrt.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionSqrt.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionSqrt;
}

export namespace FunctionTan {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionTan extends Function {
    static $gtype: GObject.GType<FunctionTan>;

    constructor(properties?: Partial<FunctionTan.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionTan.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionTan;
}

export namespace FunctionTanh {
    export interface ConstructorProperties extends Function.ConstructorProperties {
        [key: string]: any;
    }
}

export class FunctionTanh extends Function {
    static $gtype: GObject.GType<FunctionTanh>;

    constructor(properties?: Partial<FunctionTanh.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FunctionTanh.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): FunctionTanh;
}

export namespace Group {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Group extends Expression implements MathGroup {
    static $gtype: GObject.GType<Group>;

    constructor(properties?: Partial<Group.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Group.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    level: MathGroupLevel;
    closed: boolean;

    // Constructors

    static ['new'](): Group;

    // Implemented Members

    evaluate(): MathExpression;

    get_level(): MathGroupLevel;

    set_level(value: MathGroupLevel): void;

    get_closed(): boolean;

    set_closed(value: boolean): void;

    vfunc_evaluate(): MathExpression;

    vfunc_get_level(): MathGroupLevel;

    vfunc_set_level(value: MathGroupLevel): void;

    vfunc_get_closed(): boolean;

    vfunc_set_closed(value: boolean): void;
}

export namespace Minus {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Minus extends Expression implements MathOperator, MathBinaryOperator, MathMinus {
    static $gtype: GObject.GType<Minus>;

    constructor(properties?: Partial<Minus.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Minus.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Minus;
}

export namespace Multiply {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Multiply extends Expression implements MathOperator, MathBinaryOperator, MathMultiply {
    static $gtype: GObject.GType<Multiply>;

    constructor(properties?: Partial<Multiply.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Multiply.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Multiply;
}

export namespace Parameter {
    export interface ConstructorProperties extends Variable.ConstructorProperties {
        [key: string]: any;
    }
}

export class Parameter extends Variable implements MathParameter {
    static $gtype: GObject.GType<Parameter>;

    constructor(properties?: Partial<Parameter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Parameter.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](name: string): Parameter;
    static ['new'](...args: never[]): never;

    // Implemented Members

    set_value(val?: GObject.Value | null): void;
    set_value(...args: never[]): never;

    get_value(): GObject.Value | null;
    get_value(...args: never[]): never;

    vfunc_set_value(val?: GObject.Value | null): void;
    vfunc_set_value(...args: never[]): never;

    vfunc_get_value(): GObject.Value | null;
    vfunc_get_value(...args: never[]): never;
}

export namespace Parser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Parser extends GObject.Object {
    static $gtype: GObject.GType<Parser>;

    constructor(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Parser;

    // Members

    parse(str: string, eqman: MathEquationManager): void;

    read_token(): ParserTokenType;

    token_to_string(): string;
}

export namespace Plus {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Plus extends Expression implements MathOperator, MathBinaryOperator, MathPlus {
    static $gtype: GObject.GType<Plus>;

    constructor(properties?: Partial<Plus.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Plus.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Plus;
}

export namespace Polynomial {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Polynomial extends Expression implements MathPolynomial {
    static $gtype: GObject.GType<Polynomial>;

    constructor(properties?: Partial<Polynomial.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Polynomial.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Polynomial;

    // Implemented Members

    evaluate(): MathExpression;

    vfunc_evaluate(): MathExpression;
}

export namespace Pow {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Pow extends Expression implements MathOperator, MathPow {
    static $gtype: GObject.GType<Pow>;

    constructor(properties?: Partial<Pow.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Pow.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Pow;
}

export namespace Result {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Result extends GObject.Object implements MathResult {
    static $gtype: GObject.GType<Result>;

    constructor(properties?: Partial<Result.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Result.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    expression: MathExpression;

    // Constructors

    static ['new'](exp: MathExpression): Result;

    // Implemented Members

    to_string(): string;

    get_expression(): MathExpression;

    vfunc_to_string(): string;

    vfunc_get_expression(): MathExpression;
}

export namespace Solver {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        equation_manager: MathEquationManager;
        equationManager: MathEquationManager;
    }
}

export class Solver extends GObject.Object {
    static $gtype: GObject.GType<Solver>;

    constructor(properties?: Partial<Solver.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Solver.ConstructorProperties>, ...args: any[]): void;

    // Properties
    equation_manager: MathEquationManager;
    equationManager: MathEquationManager;

    // Constructors

    static ['new'](): Solver;

    // Members

    add_expression(exp: string): void;

    solve(str: string): MathResult;

    get_equation_manager(): MathEquationManager;

    set_equation_manager(value: MathEquationManager): void;
}

export namespace Term {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Term extends Expression implements MathTerm {
    static $gtype: GObject.GType<Term>;

    constructor(properties?: Partial<Term.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Term.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Term;

    // Implemented Members

    add(t: MathTerm): MathExpression;

    evaluate(): MathExpression;

    vfunc_add(t: MathTerm): MathExpression;

    vfunc_evaluate(): MathExpression;
}

export namespace Variable {
    export interface ConstructorProperties extends Expression.ConstructorProperties {
        [key: string]: any;
    }
}

export class Variable extends Expression implements MathVariable, Hashable {
    static $gtype: GObject.GType<Variable>;

    constructor(properties?: Partial<Variable.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Variable.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    name: string;
    value: MathConstant;
    bind: MathVariable;

    // Implemented Members

    evaluate(): MathExpression;

    get_name(): string;

    set_name(value: string): void;

    get_value(): MathConstant;

    set_value(value: MathConstant): void;

    get_bind(): MathVariable;

    set_bind(value: MathVariable): void;

    get_binded(): boolean;

    vfunc_evaluate(): MathExpression;

    vfunc_get_name(): string;

    vfunc_set_name(value: string): void;

    vfunc_get_value(): MathConstant;

    vfunc_set_value(value: MathConstant): void;

    vfunc_get_bind(): MathVariable;

    vfunc_set_bind(value: MathVariable): void;

    vfunc_get_binded(): boolean;

    hash(): number;

    vfunc_hash(): number;
}

export class AssignPrivate {
    static $gtype: GObject.GType<AssignPrivate>;

    constructor(copy: AssignPrivate);
}

export class ConstantPrivate {
    static $gtype: GObject.GType<ConstantPrivate>;

    constructor(copy: ConstantPrivate);
}

export class DivisionPrivate {
    static $gtype: GObject.GType<DivisionPrivate>;

    constructor(copy: DivisionPrivate);
}

export class EquationPrivate {
    static $gtype: GObject.GType<EquationPrivate>;

    constructor(copy: EquationPrivate);
}

export class EquationManagerPrivate {
    static $gtype: GObject.GType<EquationManagerPrivate>;

    constructor(copy: EquationManagerPrivate);
}

export class ErrorResultPrivate {
    static $gtype: GObject.GType<ErrorResultPrivate>;

    constructor(copy: ErrorResultPrivate);
}

export class ExpressionPrivate {
    static $gtype: GObject.GType<ExpressionPrivate>;

    constructor(copy: ExpressionPrivate);
}

export class ErrorExpressionPrivate {
    static $gtype: GObject.GType<ErrorExpressionPrivate>;

    constructor(copy: ErrorExpressionPrivate);
}

export class ExpressionContainerPrivate {
    static $gtype: GObject.GType<ExpressionContainerPrivate>;

    constructor(copy: ExpressionContainerPrivate);
}

export class ExpressionHashMapPrivate {
    static $gtype: GObject.GType<ExpressionHashMapPrivate>;

    constructor(copy: ExpressionHashMapPrivate);
}

export class FunctionPrivate {
    static $gtype: GObject.GType<FunctionPrivate>;

    constructor(copy: FunctionPrivate);
}

export class FunctionAcosPrivate {
    static $gtype: GObject.GType<FunctionAcosPrivate>;

    constructor(copy: FunctionAcosPrivate);
}

export class FunctionAcoshPrivate {
    static $gtype: GObject.GType<FunctionAcoshPrivate>;

    constructor(copy: FunctionAcoshPrivate);
}

export class FunctionAsinPrivate {
    static $gtype: GObject.GType<FunctionAsinPrivate>;

    constructor(copy: FunctionAsinPrivate);
}

export class FunctionAsinhPrivate {
    static $gtype: GObject.GType<FunctionAsinhPrivate>;

    constructor(copy: FunctionAsinhPrivate);
}

export class FunctionAtanPrivate {
    static $gtype: GObject.GType<FunctionAtanPrivate>;

    constructor(copy: FunctionAtanPrivate);
}

export class FunctionAtanhPrivate {
    static $gtype: GObject.GType<FunctionAtanhPrivate>;

    constructor(copy: FunctionAtanhPrivate);
}

export class FunctionCosPrivate {
    static $gtype: GObject.GType<FunctionCosPrivate>;

    constructor(copy: FunctionCosPrivate);
}

export class FunctionCoshPrivate {
    static $gtype: GObject.GType<FunctionCoshPrivate>;

    constructor(copy: FunctionCoshPrivate);
}

export class FunctionExpPrivate {
    static $gtype: GObject.GType<FunctionExpPrivate>;

    constructor(copy: FunctionExpPrivate);
}

export class FunctionLogPrivate {
    static $gtype: GObject.GType<FunctionLogPrivate>;

    constructor(copy: FunctionLogPrivate);
}

export class FunctionSinPrivate {
    static $gtype: GObject.GType<FunctionSinPrivate>;

    constructor(copy: FunctionSinPrivate);
}

export class FunctionSinhPrivate {
    static $gtype: GObject.GType<FunctionSinhPrivate>;

    constructor(copy: FunctionSinhPrivate);
}

export class FunctionSqrtPrivate {
    static $gtype: GObject.GType<FunctionSqrtPrivate>;

    constructor(copy: FunctionSqrtPrivate);
}

export class FunctionTanPrivate {
    static $gtype: GObject.GType<FunctionTanPrivate>;

    constructor(copy: FunctionTanPrivate);
}

export class FunctionTanhPrivate {
    static $gtype: GObject.GType<FunctionTanhPrivate>;

    constructor(copy: FunctionTanhPrivate);
}

export class GroupPrivate {
    static $gtype: GObject.GType<GroupPrivate>;

    constructor(copy: GroupPrivate);
}

export class MinusPrivate {
    static $gtype: GObject.GType<MinusPrivate>;

    constructor(copy: MinusPrivate);
}

export class MultiplyPrivate {
    static $gtype: GObject.GType<MultiplyPrivate>;

    constructor(copy: MultiplyPrivate);
}

export class ParameterPrivate {
    static $gtype: GObject.GType<ParameterPrivate>;

    constructor(copy: ParameterPrivate);
}

export class ParserPrivate {
    static $gtype: GObject.GType<ParserPrivate>;

    constructor(copy: ParserPrivate);
}

export class PlusPrivate {
    static $gtype: GObject.GType<PlusPrivate>;

    constructor(copy: PlusPrivate);
}

export class PolynomialPrivate {
    static $gtype: GObject.GType<PolynomialPrivate>;

    constructor(copy: PolynomialPrivate);
}

export class PowPrivate {
    static $gtype: GObject.GType<PowPrivate>;

    constructor(copy: PowPrivate);
}

export class ResultPrivate {
    static $gtype: GObject.GType<ResultPrivate>;

    constructor(copy: ResultPrivate);
}

export class SolverPrivate {
    static $gtype: GObject.GType<SolverPrivate>;

    constructor(copy: SolverPrivate);
}

export class TermPrivate {
    static $gtype: GObject.GType<TermPrivate>;

    constructor(copy: TermPrivate);
}

export class VariablePrivate {
    static $gtype: GObject.GType<VariablePrivate>;

    constructor(copy: VariablePrivate);
}

export interface HashableNamespace {
    $gtype: GObject.GType<Hashable>;
    prototype: HashablePrototype;
}

export type Hashable = HashablePrototype;

export interface HashablePrototype extends GObject.Object {
    // Members

    hash(): number;

    vfunc_hash(): number;
}

export const Hashable: HashableNamespace;

export interface MathAssignNamespace {
    $gtype: GObject.GType<MathAssign>;
    prototype: MathAssignPrototype;
}

export type MathAssign = MathAssignPrototype;

export interface MathAssignPrototype extends GObject.Object {
    // Members

    evaluate(): MathExpression;
}

export const MathAssign: MathAssignNamespace;

export interface MathBinaryOperatorNamespace {
    $gtype: GObject.GType<MathBinaryOperator>;
    prototype: MathBinaryOperatorPrototype;
}

export type MathBinaryOperator = MathBinaryOperatorPrototype;
export type MathBinaryOperatorPrototype = GObject.Object

export const MathBinaryOperator: MathBinaryOperatorNamespace;

export interface MathConstantNamespace {
    $gtype: GObject.GType<MathConstant>;
    prototype: MathConstantPrototype;
}

export type MathConstant = MathConstantPrototype;

export interface MathConstantPrototype extends GObject.Object {
    // Members

    add(c: MathConstant): MathConstant;

    subtract(c: MathConstant): MathConstant;

    multiply(c: MathConstant): MathConstant;

    divide(c: MathConstant): MathConstant;

    neg(): MathConstant;

    pow(c: MathConstant): MathConstant;

    vfunc_add(c: MathConstant): MathConstant;

    vfunc_subtract(c: MathConstant): MathConstant;

    vfunc_multiply(c: MathConstant): MathConstant;

    vfunc_divide(c: MathConstant): MathConstant;

    vfunc_neg(): MathConstant;

    vfunc_pow(c: MathConstant): MathConstant;
}

export const MathConstant: MathConstantNamespace;

export interface MathConstantComplexNamespace {
    $gtype: GObject.GType<MathConstantComplex>;
    prototype: MathConstantComplexPrototype;
}

export type MathConstantComplex = MathConstantComplexPrototype;

export interface MathConstantComplexPrototype extends GObject.Object {
    // Members

    real(): number;

    imag(): number;

    zero(): void;

    vfunc_real(): number;

    vfunc_imag(): number;

    vfunc_zero(): void;
}

export const MathConstantComplex: MathConstantComplexNamespace;

export interface MathConstantNumberNamespace {
    $gtype: GObject.GType<MathConstantNumber>;
    prototype: MathConstantNumberPrototype;
}

export type MathConstantNumber = MathConstantNumberPrototype;

export interface MathConstantNumberPrototype extends GObject.Object {
    // Members

    value(): number;

    vfunc_value(): number;
}

export const MathConstantNumber: MathConstantNumberNamespace;

export interface MathDivisionNamespace {
    $gtype: GObject.GType<MathDivision>;
    prototype: MathDivisionPrototype;
}

export type MathDivision = MathDivisionPrototype;
export type MathDivisionPrototype = GObject.Object

export const MathDivision: MathDivisionNamespace;

export interface MathEquationNamespace {
    $gtype: GObject.GType<MathEquation>;
    prototype: MathEquationPrototype;
}

export type MathEquation = MathEquationPrototype;

export interface MathEquationPrototype extends GObject.Object {
    // Properties
    variables: ExpressionHashMap;

    // Members

    get_variables(): ExpressionHashMap;

    vfunc_get_variables(): ExpressionHashMap;
}

export const MathEquation: MathEquationNamespace;

export interface MathEquationManagerNamespace {
    $gtype: GObject.GType<MathEquationManager>;
    prototype: MathEquationManagerPrototype;
}

export type MathEquationManager = MathEquationManagerPrototype;

export interface MathEquationManagerPrototype extends GObject.Object {
    // Properties
    equations: ExpressionContainer;
    functions: ExpressionContainer;

    // Members

    find_variable(name: string): MathVariable;

    get_equations(): ExpressionContainer;

    get_functions(): ExpressionContainer;

    vfunc_find_variable(name: string): MathVariable;

    vfunc_get_equations(): ExpressionContainer;

    vfunc_get_functions(): ExpressionContainer;
}

export const MathEquationManager: MathEquationManagerNamespace;

export interface MathErrorResultNamespace {
    $gtype: GObject.GType<MathErrorResult>;
    prototype: MathErrorResultPrototype;
}

export type MathErrorResult = MathErrorResultPrototype;

export interface MathErrorResultPrototype extends GObject.Object {
    // Properties
    message: string;

    // Members

    get_message(): string;

    vfunc_get_message(): string;
}

export const MathErrorResult: MathErrorResultNamespace;

export interface MathExpressionNamespace {
    $gtype: GObject.GType<MathExpression>;
    prototype: MathExpressionPrototype;
}

export type MathExpression = MathExpressionPrototype;

export interface MathExpressionPrototype extends GObject.Object {
    // Properties
    expressions: ExpressionContainer;

    // Members

    to_string(): string;

    solve(): MathResult;

    get_parent(): MathExpression;

    set_parent(value: MathExpression): void;

    get_expressions(): ExpressionContainer;

    vfunc_to_string(): string;

    vfunc_solve(): MathResult;

    vfunc_get_parent(): MathExpression;

    vfunc_set_parent(value: MathExpression): void;

    vfunc_get_expressions(): ExpressionContainer;
}

export const MathExpression: MathExpressionNamespace;

export interface MathFunctionNamespace {
    $gtype: GObject.GType<MathFunction>;
    prototype: MathFunctionPrototype;
}

export type MathFunction = MathFunctionPrototype;

export interface MathFunctionPrototype extends GObject.Object {
    // Properties
    param_types: ExpressionContainer;
    paramTypes: ExpressionContainer;
    name: string;
    n_params: number;
    nParams: number;
    closed: boolean;

    // Members

    evaluate(): MathExpression;

    verify_params(): boolean;

    get_param_types(): ExpressionContainer;

    get_name(): string;

    set_name(value: string): void;

    get_n_params(): number;

    set_n_params(value: number): void;

    get_closed(): boolean;

    set_closed(value: boolean): void;

    vfunc_evaluate(): MathExpression;

    vfunc_verify_params(): boolean;

    vfunc_get_param_types(): ExpressionContainer;

    vfunc_get_name(): string;

    vfunc_set_name(value: string): void;

    vfunc_get_n_params(): number;

    vfunc_set_n_params(value: number): void;

    vfunc_get_closed(): boolean;

    vfunc_set_closed(value: boolean): void;
}

export const MathFunction: MathFunctionNamespace;

export interface MathGroupNamespace {
    $gtype: GObject.GType<MathGroup>;
    prototype: MathGroupPrototype;
}

export type MathGroup = MathGroupPrototype;

export interface MathGroupPrototype extends GObject.Object {
    // Properties
    level: MathGroupLevel;
    closed: boolean;

    // Members

    evaluate(): MathExpression;

    get_level(): MathGroupLevel;

    set_level(value: MathGroupLevel): void;

    get_closed(): boolean;

    set_closed(value: boolean): void;

    vfunc_evaluate(): MathExpression;

    vfunc_get_level(): MathGroupLevel;

    vfunc_set_level(value: MathGroupLevel): void;

    vfunc_get_closed(): boolean;

    vfunc_set_closed(value: boolean): void;
}

export const MathGroup: MathGroupNamespace;

export interface MathMinusNamespace {
    $gtype: GObject.GType<MathMinus>;
    prototype: MathMinusPrototype;
}

export type MathMinus = MathMinusPrototype;
export type MathMinusPrototype = GObject.Object

export const MathMinus: MathMinusNamespace;

export interface MathMultiplyNamespace {
    $gtype: GObject.GType<MathMultiply>;
    prototype: MathMultiplyPrototype;
}

export type MathMultiply = MathMultiplyPrototype;
export type MathMultiplyPrototype = GObject.Object

export const MathMultiply: MathMultiplyNamespace;

export interface MathOperatorNamespace {
    $gtype: GObject.GType<MathOperator>;
    prototype: MathOperatorPrototype;
}

export type MathOperator = MathOperatorPrototype;
export type MathOperatorPrototype = GObject.Object

export const MathOperator: MathOperatorNamespace;

export interface MathParameterNamespace {
    $gtype: GObject.GType<MathParameter>;
    prototype: MathParameterPrototype;
}

export type MathParameter = MathParameterPrototype;

export interface MathParameterPrototype extends GObject.Object {
    // Members

    set_value(val?: GObject.Value | null): void;

    get_value(): GObject.Value | null;

    vfunc_set_value(val?: GObject.Value | null): void;

    vfunc_get_value(): GObject.Value | null;
}

export const MathParameter: MathParameterNamespace;

export interface MathPlusNamespace {
    $gtype: GObject.GType<MathPlus>;
    prototype: MathPlusPrototype;
}

export type MathPlus = MathPlusPrototype;
export type MathPlusPrototype = GObject.Object

export const MathPlus: MathPlusNamespace;

export interface MathPolynomialNamespace {
    $gtype: GObject.GType<MathPolynomial>;
    prototype: MathPolynomialPrototype;
}

export type MathPolynomial = MathPolynomialPrototype;

export interface MathPolynomialPrototype extends GObject.Object {
    // Members

    evaluate(): MathExpression;

    vfunc_evaluate(): MathExpression;
}

export const MathPolynomial: MathPolynomialNamespace;

export interface MathPowNamespace {
    $gtype: GObject.GType<MathPow>;
    prototype: MathPowPrototype;
}

export type MathPow = MathPowPrototype;
export type MathPowPrototype = GObject.Object

export const MathPow: MathPowNamespace;

export interface MathResultNamespace {
    $gtype: GObject.GType<MathResult>;
    prototype: MathResultPrototype;
}

export type MathResult = MathResultPrototype;

export interface MathResultPrototype extends GObject.Object {
    // Properties
    expression: MathExpression;

    // Members

    to_string(): string;

    get_expression(): MathExpression;

    vfunc_to_string(): string;

    vfunc_get_expression(): MathExpression;
}

export const MathResult: MathResultNamespace;

export interface MathTermNamespace {
    $gtype: GObject.GType<MathTerm>;
    prototype: MathTermPrototype;

    evaluate_constants(c1: MathConstant, c2: MathConstant, op: MathOperator): MathExpression;
}

export type MathTerm = MathTermPrototype;

export interface MathTermPrototype extends GObject.Object {
    // Members

    add(t: MathTerm): MathExpression;

    evaluate(): MathExpression;

    vfunc_add(t: MathTerm): MathExpression;

    vfunc_evaluate(): MathExpression;
}

export const MathTerm: MathTermNamespace;

export interface MathVariableNamespace {
    $gtype: GObject.GType<MathVariable>;
    prototype: MathVariablePrototype;
}

export type MathVariable = MathVariablePrototype;

export interface MathVariablePrototype extends GObject.Object {
    // Properties
    name: string;
    value: MathConstant;
    bind: MathVariable;

    // Members

    evaluate(): MathExpression;

    get_name(): string;

    set_name(value: string): void;

    get_value(): MathConstant;

    set_value(value: MathConstant): void;

    get_bind(): MathVariable;

    set_bind(value: MathVariable): void;

    get_binded(): boolean;

    vfunc_evaluate(): MathExpression;

    vfunc_get_name(): string;

    vfunc_set_name(value: string): void;

    vfunc_get_value(): MathConstant;

    vfunc_set_value(value: MathConstant): void;

    vfunc_get_bind(): MathVariable;

    vfunc_set_bind(value: MathVariable): void;

    vfunc_get_binded(): boolean;
}

export const MathVariable: MathVariableNamespace;
