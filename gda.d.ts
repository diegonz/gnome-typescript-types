/**
 * Gda 5.0
 *
 * Generated from 5.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as libxml2 from './libxml2';
import * as GLib from './glib';

export const ATTRIBUTE_AUTO_INCREMENT: string;
export const ATTRIBUTE_DESCRIPTION: string;
export const ATTRIBUTE_IS_DEFAULT: string;
export const ATTRIBUTE_NAME: string;
export const ATTRIBUTE_NUMERIC_PRECISION: string;
export const ATTRIBUTE_NUMERIC_SCALE: string;
export const ATTRIBUTE_TREE_NODE_UNKNOWN_CHILDREN: string;
export const EXTRA_AUTO_INCREMENT: string;
export const SQLSTATE_GENERAL_ERROR: string;
export const SQLSTATE_NO_ERROR: string;
export const TIMEZONE_INVALID: number;

export function alphanum_to_text(text: string): string;

export function binary_copy(boxed?: any | null): any | null;

export function binary_free(boxed?: any | null): void;

export function blob_copy(boxed?: any | null): any | null;

export function blob_free(boxed?: any | null): void;

export function completion_list_get(cnc: Connection, sql: string, start: number, end: number): string[] | null;

export function compute_dml_statements(
    cnc: Connection,
    select_stmt: Statement,
    require_pk: boolean,
    insert_stmt?: Statement | null,
    update_stmt?: Statement | null,
    delete_stmt?: Statement | null
): boolean;

export function data_handler_get_default(for_type: GObject.GType): DataHandler;

export function data_model_error_quark(): GLib.Quark;

export function default_escape_string(string: string): string;

export function default_unescape_string(string: string): string;

export function dsn_split(string: string, out_dsn: string, out_username: string, out_password: string): void;

export function g_type_from_string(str: string): GObject.GType;

export function g_type_to_string(type: GObject.GType): string;

export function geometricpoint_copy(boxed?: any | null): any | null;

export function geometricpoint_free(boxed?: any | null): void;

export function get_application_exec_path(app_name: string): string;

export function identifier_equal(id1: string, id2: string): boolean;

export function identifier_hash(id: string): number;

export function init(): void;

export function locale_changed(): void;

export function log_disable(): void;

export function log_enable(): void;

export function log_is_enabled(): boolean;

export function mutex_free(mutex: Mutex): void;

export function mutex_lock(mutex: Mutex): void;

export function mutex_trylock(mutex: Mutex): boolean;

export function mutex_unlock(mutex: Mutex): void;

export function parse_formatted_date(
    gdate: GLib.Date,
    value: string,
    first: GLib.DateDMY,
    second: GLib.DateDMY,
    third: GLib.DateDMY,
    sep: number
): boolean;

export function parse_formatted_time(timegda: Time, value: string, sep: number): boolean;

export function parse_formatted_timestamp(
    timestamp: Timestamp,
    value: string,
    first: GLib.DateDMY,
    second: GLib.DateDMY,
    third: GLib.DateDMY,
    sep: number
): boolean;

export function parse_iso8601_date(gdate: GLib.Date, value: string): boolean;

export function parse_iso8601_time(timegda: Time, value: string): boolean;

export function parse_iso8601_timestamp(timestamp: Timestamp, value: string): boolean;

export function rewrite_statement_for_null_parameters(
    stmt: Statement,
    params: Set,
    out_stmt?: Statement | null
): boolean;

export function rfc1738_decode(string: string): boolean;

export function rfc1738_encode(string: string): string;

export function select_alter_select_for_empty(stmt: Statement): Statement;

export function sql_error_quark(): GLib.Quark;

export function sql_identifier_quote(
    id: string,
    cnc: Connection | null,
    prov: ServerProvider | null,
    meta_store_convention: boolean,
    force_quotes: boolean
): string;

export function sql_identifier_split(id: string): string[] | null;

export function sql_operation_operator_from_string(op: string): SqlOperatorType;

export function sql_operation_operator_to_string(op: SqlOperatorType): string;

export function sql_select_join_type_to_string(type: SqlSelectJoinType): string;

export function string_to_binary(str?: string | null): Binary;

export function string_to_blob(str: string): Blob;

export function text_to_alphanum(text: string): string;

export function time_copy(boxed?: any | null): any | null;

export function time_free(boxed?: any | null): void;

export function timestamp_copy(boxed?: any | null): any | null;

export function timestamp_free(boxed?: any | null): void;

export function utility_check_data_model(model: DataModel, types: GObject.GType[]): boolean;

export function utility_data_model_dump_data_to_xml(
    model: DataModel,
    parent: libxml2.NodePtr,
    cols: number[] | null,
    rows: number[] | null,
    use_col_ids: boolean
): boolean;

export function utility_data_model_find_column_description(model: DataSelect, field_name: string): string;

export function utility_holder_load_attributes(holder: Holder, node: libxml2.NodePtr, sources: DataModel[]): boolean;

export function value_compare(value1: any, value2: any): number;

export function value_differ(value1: any, value2: any): number;

export function value_stringify(value: any): string;

export type AttributesManagerFunc = (att_name: string, value: any, data?: any | null) => void;
export type AttributesManagerSignal<A = GObject.Object> = (
    obj: A,
    att_name: string,
    value: any,
    data?: any | null
) => void;
export type ServerProviderAsyncCallback = (
    provider: ServerProvider,
    cnc: Connection,
    task_id: number,
    result_status: boolean,
    error: GLib.Error,
    data?: any | null
) => void;
export type ServerProviderExecCallback<A = GObject.Object> = (
    provider: ServerProvider,
    cnc: Connection,
    task_id: number,
    result_obj: A,
    error: GLib.Error,
    data?: any | null
) => void;
export type SqlRenderingValue = (value: any, context: SqlRenderingContext) => string;
export type SqlReservedKeywordsFunc = (word: string) => boolean;
export type ThreadWrapperCallback = (
    wrapper: ThreadWrapper,
    instance: any | null,
    signame: string,
    n_param_values: number,
    param_values: any,
    gda_reserved?: any | null,
    data?: any | null
) => void;
export type ThreadWrapperFunc = (arg?: any | null) => any | null;
export type ThreadWrapperVoidFunc = (arg?: any | null) => void;
export type Default = object | null;
export type Null = object | null;

export namespace BatchError {
    export const $gtype: GObject.GType<BatchError>;
}

export enum BatchError {
    BATCH_CONFLICTING_PARAMETER_ERROR = 0,
}

export namespace ConfigError {
    export const $gtype: GObject.GType<ConfigError>;
}

export enum ConfigError {
    DSN_NOT_FOUND_ERROR = 0,
    PERMISSION_ERROR = 1,
    PROVIDER_NOT_FOUND_ERROR = 2,
    PROVIDER_CREATION_ERROR = 3,
}

export namespace ConnectionError {
    export const $gtype: GObject.GType<ConnectionError>;
}

export enum ConnectionError {
    DSN_NOT_FOUND_ERROR = 0,
    PROVIDER_NOT_FOUND_ERROR = 1,
    PROVIDER_ERROR = 2,
    NO_CNC_SPEC_ERROR = 3,
    NO_PROVIDER_SPEC_ERROR = 4,
    OPEN_ERROR = 5,
    STATEMENT_TYPE_ERROR = 6,
    CANT_LOCK_ERROR = 7,
    TASK_NOT_FOUND_ERROR = 8,
    UNSUPPORTED_THREADS_ERROR = 9,
    CLOSED_ERROR = 10,
    META_DATA_CONTEXT_ERROR = 11,
    UNSUPPORTED_ASYNC_EXEC_ERROR = 12,
}

export namespace ConnectionEventCode {
    export const $gtype: GObject.GType<ConnectionEventCode>;
}

export enum ConnectionEventCode {
    CONSTRAINT_VIOLATION = 0,
    RESTRICT_VIOLATION = 1,
    NOT_NULL_VIOLATION = 2,
    FOREIGN_KEY_VIOLATION = 3,
    UNIQUE_VIOLATION = 4,
    CHECK_VIOLATION = 5,
    INSUFFICIENT_PRIVILEGES = 6,
    UNDEFINED_COLUMN = 7,
    UNDEFINED_FUNCTION = 8,
    UNDEFINED_TABLE = 9,
    DUPLICATE_COLUMN = 10,
    DUPLICATE_DATABASE = 11,
    DUPLICATE_FUNCTION = 12,
    DUPLICATE_SCHEMA = 13,
    DUPLICATE_TABLE = 14,
    DUPLICATE_ALIAS = 15,
    DUPLICATE_OBJECT = 16,
    SYNTAX_ERROR = 17,
    UNKNOWN = 18,
}

export namespace ConnectionEventType {
    export const $gtype: GObject.GType<ConnectionEventType>;
}

export enum ConnectionEventType {
    NOTICE = 0,
    WARNING = 1,
    ERROR = 2,
    COMMAND = 3,
}

export namespace ConnectionFeature {
    export const $gtype: GObject.GType<ConnectionFeature>;
}

export enum ConnectionFeature {
    AGGREGATES = 0,
    BLOBS = 1,
    INDEXES = 2,
    INHERITANCE = 3,
    NAMESPACES = 4,
    PROCEDURES = 5,
    SEQUENCES = 6,
    SQL = 7,
    TRANSACTIONS = 8,
    SAVEPOINTS = 9,
    SAVEPOINTS_REMOVE = 10,
    TRIGGERS = 11,
    UPDATABLE_CURSOR = 12,
    USERS = 13,
    VIEWS = 14,
    XA_TRANSACTIONS = 15,
    MULTI_THREADING = 16,
    ASYNC_EXEC = 17,
    LAST = 18,
}

export namespace ConnectionMetaType {
    export const $gtype: GObject.GType<ConnectionMetaType>;
}

export enum ConnectionMetaType {
    NAMESPACES = 0,
    TYPES = 1,
    TABLES = 2,
    VIEWS = 3,
    FIELDS = 4,
    INDEXES = 5,
}

export namespace DataComparatorError {
    export const $gtype: GObject.GType<DataComparatorError>;
}

export enum DataComparatorError {
    MISSING_DATA_MODEL_ERROR = 0,
    COLUMN_TYPES_MISMATCH_ERROR = 1,
    MODEL_ACCESS_ERROR = 2,
    USER_CANCELLED_ERROR = 3,
}

export class DataModelError extends GLib.Error {
    static $gtype: GObject.GType<DataModelError>;

    constructor(options: { message: string; code: number });
    constructor(copy: DataModelError);

    // Properties
    static ROW_OUT_OF_RANGE_ERROR: number;
    static COLUMN_OUT_OF_RANGE_ERROR: number;
    static VALUES_LIST_ERROR: number;
    static VALUE_TYPE_ERROR: number;
    static ROW_NOT_FOUND_ERROR: number;
    static ACCESS_ERROR: number;
    static FEATURE_NON_SUPPORTED_ERROR: number;
    static FILE_EXIST_ERROR: number;
    static XML_FORMAT_ERROR: number;
    static TRUNCATED_ERROR: number;
    static OTHER_ERROR: number;
}

export namespace DataModelHint {
    export const $gtype: GObject.GType<DataModelHint>;
}

export enum DataModelHint {
    START_BATCH_UPDATE = 0,
    END_BATCH_UPDATE = 1,
    REFRESH = 2,
}

export namespace DataModelIOFormat {
    export const $gtype: GObject.GType<DataModelIOFormat>;
}

export enum DataModelIOFormat {
    DATA_ARRAY_XML = 0,
    TEXT_SEPARATED = 1,
    TEXT_TABLE = 2,
}

export namespace DataModelIterError {
    export const $gtype: GObject.GType<DataModelIterError>;
}

export enum DataModelIterError {
    DATA_MODEL_ITER_COLUMN_OUT_OF_RANGE_ERROR = 0,
}

export namespace DataPivotAggregate {
    export const $gtype: GObject.GType<DataPivotAggregate>;
}

export enum DataPivotAggregate {
    AVG = 0,
    COUNT = 1,
    MAX = 2,
    MIN = 3,
    SUM = 4,
}

export namespace DataPivotError {
    export const $gtype: GObject.GType<DataPivotError>;
}

export enum DataPivotError {
    INTERNAL_ERROR = 0,
    SOURCE_MODEL_ERROR = 1,
    FIELD_FORMAT_ERROR = 2,
    USAGE_ERROR = 3,
    OVERFLOW_ERROR = 4,
}

export namespace DataPivotFieldType {
    export const $gtype: GObject.GType<DataPivotFieldType>;
}

export enum DataPivotFieldType {
    ROW = 0,
    COLUMN = 1,
}

export namespace DataProxyError {
    export const $gtype: GObject.GType<DataProxyError>;
}

export enum DataProxyError {
    COMMIT_ERROR = 0,
    COMMIT_CANCELLED = 1,
    READ_ONLY_VALUE = 2,
    READ_ONLY_ROW = 3,
    FILTER_ERROR = 4,
}

export namespace DataSelectConditionType {
    export const $gtype: GObject.GType<DataSelectConditionType>;
}

export enum DataSelectConditionType {
    PK = 0,
    ALL_COLUMNS = 1,
}

export namespace DataSelectError {
    export const $gtype: GObject.GType<DataSelectError>;
}

export enum DataSelectError {
    MODIFICATION_STATEMENT_ERROR = 0,
    MISSING_MODIFICATION_STATEMENT_ERROR = 1,
    CONNECTION_ERROR = 2,
    ACCESS_ERROR = 3,
    SQL_ERROR = 4,
    SAFETY_LOCKED_ERROR = 5,
}

export namespace DiffType {
    export const $gtype: GObject.GType<DiffType>;
}

export enum DiffType {
    ADD_ROW = 0,
    REMOVE_ROW = 1,
    MODIFY_ROW = 2,
}

export namespace HolderError {
    export const $gtype: GObject.GType<HolderError>;
}

export enum HolderError {
    STRING_CONVERSION_ERROR = 0,
    VALUE_TYPE_ERROR = 1,
    VALUE_NULL_ERROR = 2,
}

export namespace LdapSearchScope {
    export const $gtype: GObject.GType<LdapSearchScope>;
}

export enum LdapSearchScope {
    BASE = 1,
    ONELEVEL = 2,
    SUBTREE = 3,
}

export namespace MetaDbObjectType {
    export const $gtype: GObject.GType<MetaDbObjectType>;
}

export enum MetaDbObjectType {
    UNKNOWN = 0,
    TABLE = 1,
    VIEW = 2,
}

export namespace MetaForeignKeyPolicy {
    export const $gtype: GObject.GType<MetaForeignKeyPolicy>;
}

export enum MetaForeignKeyPolicy {
    UNKNOWN = 0,
    NONE = 1,
    NO_ACTION = 2,
    RESTRICT = 3,
    CASCADE = 4,
    SET_NULL = 5,
    SET_DEFAULT = 6,
}

export namespace MetaSortType {
    export const $gtype: GObject.GType<MetaSortType>;
}

export enum MetaSortType {
    ALHAPETICAL = 0,
    DEPENDENCIES = 1,
}

export namespace MetaStoreChangeType {
    export const $gtype: GObject.GType<MetaStoreChangeType>;
}

export enum MetaStoreChangeType {
    ADD = 0,
    REMOVE = 1,
    MODIFY = 2,
}

export namespace MetaStoreError {
    export const $gtype: GObject.GType<MetaStoreError>;
}

export enum MetaStoreError {
    INCORRECT_SCHEMA_ERROR = 0,
    UNSUPPORTED_PROVIDER_ERROR = 1,
    INTERNAL_ERROR = 2,
    META_CONTEXT_ERROR = 3,
    MODIFY_CONTENTS_ERROR = 4,
    EXTRACT_SQL_ERROR = 5,
    ATTRIBUTE_NOT_FOUND_ERROR = 6,
    ATTRIBUTE_ERROR = 7,
    SCHEMA_OBJECT_NOT_FOUND_ERROR = 8,
    SCHEMA_OBJECT_CONFLICT_ERROR = 9,
    SCHEMA_OBJECT_DESCR_ERROR = 10,
    TRANSACTION_ALREADY_STARTED_ERROR = 11,
}

export namespace MetaStructError {
    export const $gtype: GObject.GType<MetaStructError>;
}

export enum MetaStructError {
    UNKNOWN_OBJECT_ERROR = 0,
    DUPLICATE_OBJECT_ERROR = 1,
    INCOHERENCE_ERROR = 2,
    XML_ERROR = 3,
}

export namespace ServerOperationError {
    export const $gtype: GObject.GType<ServerOperationError>;
}

export enum ServerOperationError {
    OBJECT_NAME_ERROR = 0,
    INCORRECT_VALUE_ERROR = 1,
    XML_ERROR = 2,
}

export namespace ServerOperationNodeStatus {
    export const $gtype: GObject.GType<ServerOperationNodeStatus>;
}

export enum ServerOperationNodeStatus {
    OPTIONAL = 0,
    REQUIRED = 1,
    UNKNOWN = 2,
}

export namespace ServerOperationNodeType {
    export const $gtype: GObject.GType<ServerOperationNodeType>;
}

export enum ServerOperationNodeType {
    PARAMLIST = 0,
    DATA_MODEL = 1,
    PARAM = 2,
    SEQUENCE = 3,
    SEQUENCE_ITEM = 4,
    DATA_MODEL_COLUMN = 5,
    UNKNOWN = 6,
}

export namespace ServerOperationType {
    export const $gtype: GObject.GType<ServerOperationType>;
}

export enum ServerOperationType {
    CREATE_DB = 0,
    DROP_DB = 1,
    CREATE_TABLE = 2,
    DROP_TABLE = 3,
    RENAME_TABLE = 4,
    ADD_COLUMN = 5,
    DROP_COLUMN = 6,
    CREATE_INDEX = 7,
    DROP_INDEX = 8,
    CREATE_VIEW = 9,
    DROP_VIEW = 10,
    COMMENT_TABLE = 11,
    COMMENT_COLUMN = 12,
    CREATE_USER = 13,
    ALTER_USER = 14,
    DROP_USER = 15,
    LAST = 16,
}

export namespace ServerProviderError {
    export const $gtype: GObject.GType<ServerProviderError>;
}

export enum ServerProviderError {
    METHOD_NON_IMPLEMENTED_ERROR = 0,
    PREPARE_STMT_ERROR = 1,
    EMPTY_STMT_ERROR = 2,
    MISSING_PARAM_ERROR = 3,
    STATEMENT_EXEC_ERROR = 4,
    OPERATION_ERROR = 5,
    INTERNAL_ERROR = 6,
    BUSY_ERROR = 7,
    NON_SUPPORTED_ERROR = 8,
    SERVER_VERSION_ERROR = 9,
    DATA_ERROR = 10,
    DEFAULT_VALUE_HANDLING_ERROR = 11,
    MISUSE_ERROR = 12,
    FILE_NOT_FOUND_ERROR = 13,
}

export namespace SetError {
    export const $gtype: GObject.GType<SetError>;
}

export enum SetError {
    XML_SPEC_ERROR = 0,
    HOLDER_NOT_FOUND_ERROR = 1,
    INVALID_ERROR = 2,
    READ_ONLY_ERROR = 3,
    IMPLEMENTATION_ERROR = 4,
}

export namespace SqlAnyPartType {
    export const $gtype: GObject.GType<SqlAnyPartType>;
}

export enum SqlAnyPartType {
    STMT_SELECT = 0,
    STMT_INSERT = 1,
    STMT_UPDATE = 2,
    STMT_DELETE = 3,
    STMT_COMPOUND = 4,
    STMT_BEGIN = 5,
    STMT_ROLLBACK = 6,
    STMT_COMMIT = 7,
    STMT_SAVEPOINT = 8,
    STMT_ROLLBACK_SAVEPOINT = 9,
    STMT_DELETE_SAVEPOINT = 10,
    STMT_UNKNOWN = 11,
    EXPR = 500,
    SQL_FIELD = 501,
    SQL_TABLE = 502,
    SQL_FUNCTION = 503,
    SQL_OPERATION = 504,
    SQL_CASE = 505,
    SQL_SELECT_FIELD = 506,
    SQL_SELECT_TARGET = 507,
    SQL_SELECT_JOIN = 508,
    SQL_SELECT_FROM = 509,
    SQL_SELECT_ORDER = 510,
}

export namespace SqlBuilderError {
    export const $gtype: GObject.GType<SqlBuilderError>;
}

export enum SqlBuilderError {
    WRONG_TYPE_ERROR = 0,
    MISUSE_ERROR = 1,
}

export class SqlError extends GLib.Error {
    static $gtype: GObject.GType<SqlError>;

    constructor(options: { message: string; code: number });
    constructor(copy: SqlError);

    // Properties
    static STRUCTURE_CONTENTS_ERROR: number;
    static MALFORMED_IDENTIFIER_ERROR: number;
    static MISSING_IDENTIFIER_ERROR: number;
    static VALIDATION_ERROR: number;
}

export namespace SqlOperatorType {
    export const $gtype: GObject.GType<SqlOperatorType>;
}

export enum SqlOperatorType {
    AND = 0,
    OR = 1,
    EQ = 2,
    IS = 3,
    LIKE = 4,
    BETWEEN = 5,
    GT = 6,
    LT = 7,
    GEQ = 8,
    LEQ = 9,
    DIFF = 10,
    REGEXP = 11,
    REGEXP_CI = 12,
    NOT_REGEXP = 13,
    NOT_REGEXP_CI = 14,
    SIMILAR = 15,
    ISNULL = 16,
    ISNOTNULL = 17,
    NOT = 18,
    IN = 19,
    NOTIN = 20,
    CONCAT = 21,
    PLUS = 22,
    MINUS = 23,
    STAR = 24,
    DIV = 25,
    REM = 26,
    BITAND = 27,
    BITOR = 28,
    BITNOT = 29,
    ILIKE = 30,
    NOTLIKE = 31,
    NOTILIKE = 32,
    GLOB = 33,
}

export namespace SqlParserError {
    export const $gtype: GObject.GType<SqlParserError>;
}

export enum SqlParserError {
    SYNTAX_ERROR = 0,
    OVERFLOW_ERROR = 1,
    EMPTY_SQL_ERROR = 2,
}

export namespace SqlParserFlavour {
    export const $gtype: GObject.GType<SqlParserFlavour>;
}

export enum SqlParserFlavour {
    STANDARD = 0,
    SQLITE = 1,
    MYSQL = 2,
    ORACLE = 3,
    POSTGRESQL = 4,
}

export namespace SqlParserMode {
    export const $gtype: GObject.GType<SqlParserMode>;
}

export enum SqlParserMode {
    PARSE = 0,
    DELIMIT = 1,
}

export namespace SqlSelectJoinType {
    export const $gtype: GObject.GType<SqlSelectJoinType>;
}

export enum SqlSelectJoinType {
    CROSS = 0,
    NATURAL = 1,
    INNER = 2,
    LEFT = 3,
    RIGHT = 4,
    FULL = 5,
}

export namespace SqlStatementCompoundType {
    export const $gtype: GObject.GType<SqlStatementCompoundType>;
}

export enum SqlStatementCompoundType {
    UNION = 0,
    UNION_ALL = 1,
    INTERSECT = 2,
    INTERSECT_ALL = 3,
    EXCEPT = 4,
    EXCEPT_ALL = 5,
}

export namespace SqlStatementType {
    export const $gtype: GObject.GType<SqlStatementType>;
}

export enum SqlStatementType {
    SELECT = 0,
    INSERT = 1,
    UPDATE = 2,
    DELETE = 3,
    COMPOUND = 4,
    BEGIN = 5,
    ROLLBACK = 6,
    COMMIT = 7,
    SAVEPOINT = 8,
    ROLLBACK_SAVEPOINT = 9,
    DELETE_SAVEPOINT = 10,
    UNKNOWN = 11,
    NONE = 12,
}

export namespace StatementError {
    export const $gtype: GObject.GType<StatementError>;
}

export enum StatementError {
    PARSE_ERROR = 0,
    SYNTAX_ERROR = 1,
    NO_CNC_ERROR = 2,
    CNC_CLOSED_ERROR = 3,
    EXEC_ERROR = 4,
    PARAM_TYPE_ERROR = 5,
    PARAM_ERROR = 6,
}

export namespace ThreadNotificationType {
    export const $gtype: GObject.GType<ThreadNotificationType>;
}

export enum ThreadNotificationType {
    JOB = 1,
    SIGNAL = 2,
}

export namespace ThreadWrapperError {
    export const $gtype: GObject.GType<ThreadWrapperError>;
}

export enum ThreadWrapperError {
    THREAD_WRAPPER_UNKNOWN_ERROR = 0,
}

export namespace TransactionIsolation {
    export const $gtype: GObject.GType<TransactionIsolation>;
}

export enum TransactionIsolation {
    UNKNOWN = 0,
    READ_COMMITTED = 1,
    READ_UNCOMMITTED = 2,
    REPEATABLE_READ = 3,
    SERIALIZABLE = 4,
}

export namespace TransactionStatusEventType {
    export const $gtype: GObject.GType<TransactionStatusEventType>;
}

export enum TransactionStatusEventType {
    SAVEPOINT = 0,
    SQL = 1,
    SUB_TRANSACTION = 2,
}

export namespace TransactionStatusState {
    export const $gtype: GObject.GType<TransactionStatusState>;
}

export enum TransactionStatusState {
    OK = 0,
    FAILED = 1,
}

export namespace TreeError {
    export const $gtype: GObject.GType<TreeError>;
}

export enum TreeError {
    TREE_UNKNOWN_ERROR = 0,
}

export namespace TreeManagerError {
    export const $gtype: GObject.GType<TreeManagerError>;
}

export enum TreeManagerError {
    TREE_MANAGER_UNKNOWN_ERROR = 0,
}

export namespace TreeNodeError {
    export const $gtype: GObject.GType<TreeNodeError>;
}

export enum TreeNodeError {
    TREE_NODE_UNKNOWN_ERROR = 0,
}

export namespace XaTransactionError {
    export const $gtype: GObject.GType<XaTransactionError>;
}

export enum XaTransactionError {
    ALREADY_REGISTERED_ERROR = 0,
    DTP_NOT_SUPPORTED_ERROR = 1,
    CONNECTION_BRANCH_LENGTH_ERROR = 2,
}

export namespace ConnectionOptions {
    export const $gtype: GObject.GType<ConnectionOptions>;
}

export enum ConnectionOptions {
    NONE = 0,
    READ_ONLY = 1,
    SQL_IDENTIFIERS_CASE_SENSITIVE = 2,
    THREAD_SAFE = 4,
    THREAD_ISOLATED = 8,
    AUTO_META_DATA = 16,
}

export namespace DataModelAccessFlags {
    export const $gtype: GObject.GType<DataModelAccessFlags>;
}

export enum DataModelAccessFlags {
    RANDOM = 1,
    CURSOR_FORWARD = 2,
    CURSOR_BACKWARD = 4,
    CURSOR = 6,
    INSERT = 8,
    UPDATE = 16,
    DELETE = 32,
    WRITE = 56,
}

export namespace MetaGraphInfo {
    export const $gtype: GObject.GType<MetaGraphInfo>;
}

export enum MetaGraphInfo {
    META_GRAPH_COLUMNS = 1,
}

export namespace MetaStructFeature {
    export const $gtype: GObject.GType<MetaStructFeature>;
}

export enum MetaStructFeature {
    NONE = 0,
    FOREIGN_KEYS = 1,
    VIEW_DEPENDENCIES = 2,
    ALL = 3,
}

export namespace ServerOperationCreateTableFlag {
    export const $gtype: GObject.GType<ServerOperationCreateTableFlag>;
}

export enum ServerOperationCreateTableFlag {
    NOTHING_FLAG = 1,
    PKEY_FLAG = 2,
    NOT_NULL_FLAG = 4,
    UNIQUE_FLAG = 8,
    AUTOINC_FLAG = 16,
    FKEY_FLAG = 32,
    PKEY_AUTOINC_FLAG = 18,
}

export namespace SqlIdentifierStyle {
    export const $gtype: GObject.GType<SqlIdentifierStyle>;
}

export enum SqlIdentifierStyle {
    LOWER_CASE = 1,
    UPPER_CASE = 2,
}

export namespace StatementModelUsage {
    export const $gtype: GObject.GType<StatementModelUsage>;
}

export enum StatementModelUsage {
    RANDOM_ACCESS = 1,
    CURSOR_FORWARD = 2,
    CURSOR_BACKWARD = 4,
    CURSOR = 6,
    ALLOW_NOPARAM = 8,
    OFFLINE = 16,
}

export namespace StatementSqlFlag {
    export const $gtype: GObject.GType<StatementSqlFlag>;
}

export enum StatementSqlFlag {
    PARAMS_AS_VALUES = 0,
    PRETTY = 1,
    PARAMS_LONG = 2,
    PARAMS_SHORT = 4,
    PARAMS_AS_COLON = 8,
    PARAMS_AS_DOLLAR = 16,
    PARAMS_AS_QMARK = 32,
    PARAMS_AS_UQMARK = 64,
    TIMEZONE_TO_GMT = 128,
}

export namespace ValueAttribute {
    export const $gtype: GObject.GType<ValueAttribute>;
}

export enum ValueAttribute {
    NONE = 0,
    IS_NULL = 1,
    CAN_BE_NULL = 2,
    IS_DEFAULT = 4,
    CAN_BE_DEFAULT = 8,
    IS_UNCHANGED = 16,
    ACTIONS_SHOWN = 32,
    DATA_NON_VALID = 64,
    HAS_VALUE_ORIG = 128,
    NO_MODIF = 256,
    UNUSED = 512,
}

export namespace Batch {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Batch extends GObject.Object {
    static $gtype: GObject.GType<Batch>;

    constructor(properties?: Partial<Batch.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Batch.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: BatchPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'changed', callback: (_source: this, changed_stmt: GObject.Object) => void): number;

    connect_after(signal: 'changed', callback: (_source: this, changed_stmt: GObject.Object) => void): number;

    emit(signal: 'changed', changed_stmt: GObject.Object): void;

    // Constructors

    static ['new'](): Batch;

    // Members

    add_statement(stmt: Statement): void;

    copy(): Batch;

    get_parameters(): [boolean, Set | null];

    get_statements(): Statement[];

    remove_statement(stmt: Statement): void;

    serialize(): string;

    vfunc_changed(changed_stmt: Statement): void;

    static error_quark(): GLib.Quark;
}

export namespace BlobOp {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class BlobOp extends GObject.Object {
    static $gtype: GObject.GType<BlobOp>;

    constructor(properties?: Partial<BlobOp.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BlobOp.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;

    // Members

    get_length(): number;

    read(blob: Blob, offset: number, size: number): number;

    read_all(blob: Blob): boolean;

    write(blob: Blob, offset: number): number;

    write_all(blob: Blob): boolean;

    vfunc_get_length(): number;

    vfunc_read(blob: Blob, offset: number, size: number): number;

    vfunc_write(blob: Blob, offset: number): number;

    vfunc_write_all(blob: Blob): boolean;
}

export namespace Column {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        id: string;
    }
}

export class Column extends GObject.Object {
    static $gtype: GObject.GType<Column>;

    constructor(properties?: Partial<Column.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Column.ConstructorProperties>, ...args: any[]): void;

    // Properties
    id: string;

    // Fields
    object: GObject.Object;
    priv: ColumnPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'g-type-changed',
        callback: (_source: this, old_type: GObject.GType, new_type: GObject.GType) => void
    ): number;

    connect_after(
        signal: 'g-type-changed',
        callback: (_source: this, old_type: GObject.GType, new_type: GObject.GType) => void
    ): number;

    emit(signal: 'g-type-changed', old_type: GObject.GType, new_type: GObject.GType): void;

    connect(signal: 'name-changed', callback: (_source: this, old_name: string) => void): number;

    connect_after(signal: 'name-changed', callback: (_source: this, old_name: string) => void): number;

    emit(signal: 'name-changed', old_name: string): void;

    // Constructors

    static ['new'](): Column;

    // Members

    copy(): Column;

    get_allow_null(): boolean;

    get_attribute(attribute: string): unknown;

    get_auto_increment(): boolean;

    get_dbms_type(): string;

    get_default_value(): GObject.Value | null;

    get_description(): string;

    get_g_type(): GObject.GType;

    get_name(): string;

    get_position(): number;

    set_allow_null(allow: boolean): void;

    set_attribute(attribute: string, value?: GObject.Value | null, destroy?: GLib.DestroyNotify | null): void;

    set_auto_increment(is_auto: boolean): void;

    set_dbms_type(dbms_type: string): void;

    set_default_value(default_value?: GObject.Value | null): void;

    set_description(title: string): void;

    set_g_type(type: GObject.GType): void;

    set_name(name: string): void;

    set_position(position: number): void;

    vfunc_g_type_changed(old_type: GObject.GType, new_type: GObject.GType): void;

    vfunc_name_changed(old_name: string): void;
}

export namespace Config {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        system_filename: string;
        systemFilename: string;
        user_filename: string;
        userFilename: string;
    }
}

export class Config extends GObject.Object {
    static $gtype: GObject.GType<Config>;

    constructor(properties?: Partial<Config.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Config.ConstructorProperties>, ...args: any[]): void;

    // Properties
    system_filename: string;
    systemFilename: string;
    user_filename: string;
    userFilename: string;

    // Fields
    object: GObject.Object;
    priv: ConfigPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'dsn-added', callback: (_source: this, new_dsn: any | null) => void): number;

    connect_after(signal: 'dsn-added', callback: (_source: this, new_dsn: any | null) => void): number;

    emit(signal: 'dsn-added', new_dsn: any | null): void;

    connect(signal: 'dsn-changed', callback: (_source: this, dsn: any | null) => void): number;

    connect_after(signal: 'dsn-changed', callback: (_source: this, dsn: any | null) => void): number;

    emit(signal: 'dsn-changed', dsn: any | null): void;

    connect(signal: 'dsn-removed', callback: (_source: this, old_dsn: any | null) => void): number;

    connect_after(signal: 'dsn-removed', callback: (_source: this, old_dsn: any | null) => void): number;

    emit(signal: 'dsn-removed', old_dsn: any | null): void;

    connect(signal: 'dsn-to-be-removed', callback: (_source: this, old_dsn: any | null) => void): number;

    connect_after(signal: 'dsn-to-be-removed', callback: (_source: this, old_dsn: any | null) => void): number;

    emit(signal: 'dsn-to-be-removed', old_dsn: any | null): void;

    // Members

    vfunc_dsn_added(new_dsn: DsnInfo): void;

    vfunc_dsn_changed(dsn: DsnInfo): void;

    vfunc_dsn_removed(old_dsn: DsnInfo): void;

    vfunc_dsn_to_be_removed(old_dsn: DsnInfo): void;

    static can_modify_system_config(): boolean;

    static define_dsn(info: DsnInfo): boolean;

    static dsn_needs_authentication(dsn_name: string): boolean;

    static error_quark(): GLib.Quark;

    static get(): Config;

    static get_dsn_info(dsn_name: string): DsnInfo;

    static get_dsn_info_at_index(index: number): DsnInfo;

    static get_dsn_info_index(dsn_name: string): number;

    static get_nb_dsn(): number;

    static get_provider(provider_name: string): ServerProvider;

    static get_provider_info(provider_name: string): ProviderInfo;

    static list_dsn(): DataModel;

    static list_providers(): DataModel;

    static remove_dsn(dsn_name: string): boolean;
}

export namespace Connection {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        auth_string: string;
        authString: string;
        cnc_string: string;
        cncString: string;
        dsn: string;
        events_history_size: number;
        eventsHistorySize: number;
        execution_slowdown: number;
        executionSlowdown: number;
        execution_timer: boolean;
        executionTimer: boolean;
        is_wrapper: boolean;
        isWrapper: boolean;
        meta_store: MetaStore;
        metaStore: MetaStore;
        monitor_wrapped_in_mainloop: boolean;
        monitorWrappedInMainloop: boolean;
        provider: ServerProvider;
        thread_owner: any;
        threadOwner: any;
    }
}

export class Connection extends GObject.Object implements Lockable {
    static $gtype: GObject.GType<Connection>;

    constructor(properties?: Partial<Connection.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Connection.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auth_string: string;
    authString: string;
    cnc_string: string;
    cncString: string;
    dsn: string;
    events_history_size: number;
    eventsHistorySize: number;
    execution_slowdown: number;
    executionSlowdown: number;
    execution_timer: boolean;
    executionTimer: boolean;
    is_wrapper: boolean;
    isWrapper: boolean;
    meta_store: MetaStore;
    metaStore: MetaStore;
    monitor_wrapped_in_mainloop: boolean;
    monitorWrappedInMainloop: boolean;
    provider: ServerProvider;
    thread_owner: any;
    threadOwner: any;

    // Fields
    object: GObject.Object;
    priv: ConnectionPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'conn-closed', callback: (_source: this) => void): number;

    connect_after(signal: 'conn-closed', callback: (_source: this) => void): number;

    emit(signal: 'conn-closed'): void;

    connect(signal: 'conn-opened', callback: (_source: this) => void): number;

    connect_after(signal: 'conn-opened', callback: (_source: this) => void): number;

    emit(signal: 'conn-opened'): void;

    connect(signal: 'conn-to-close', callback: (_source: this) => void): number;

    connect_after(signal: 'conn-to-close', callback: (_source: this) => void): number;

    emit(signal: 'conn-to-close'): void;

    connect(signal: 'dsn-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'dsn-changed', callback: (_source: this) => void): number;

    emit(signal: 'dsn-changed'): void;

    connect(signal: 'error', callback: (_source: this, event: ConnectionEvent) => void): number;

    connect_after(signal: 'error', callback: (_source: this, event: ConnectionEvent) => void): number;

    emit(signal: 'error', event: ConnectionEvent): void;

    connect(signal: 'transaction-status-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'transaction-status-changed', callback: (_source: this) => void): number;

    emit(signal: 'transaction-status-changed'): void;

    // Constructors

    static new_from_dsn(dsn: string, auth_string: string | null, options: ConnectionOptions): Connection;

    static new_from_string(
        provider_name: string | null,
        cnc_string: string,
        auth_string: string | null,
        options: ConnectionOptions
    ): Connection;

    // Members

    add_event(event: ConnectionEvent): void;

    add_prepared_statement(gda_stmt: Statement, prepared_stmt: PStmt): void;

    add_savepoint(name?: string | null): boolean;

    async_cancel(task_id: number): boolean;

    async_fetch_result<T = GObject.Object>(task_id: number): [T, Set | null];

    async_statement_execute(
        stmt: Statement,
        params: Set | null,
        model_usage: StatementModelUsage,
        col_types: GObject.GType[] | null,
        need_last_insert_row: boolean
    ): number;

    batch_execute(batch: Batch, params: Set | null, model_usage: StatementModelUsage): GObject.Object[];

    begin_transaction(name: string | null, level: TransactionIsolation): boolean;

    clear_events_list(): void;

    close(): void;

    close_no_warning(): void;

    commit_transaction(name?: string | null): boolean;

    create_operation(type: ServerOperationType, options?: Set | null): ServerOperation;

    create_parser(): SqlParser;

    del_prepared_statement(gda_stmt: Statement): void;

    delete_row_from_table(table: string, condition_column_name: string, condition_value: any): boolean;

    delete_savepoint(name?: string | null): boolean;

    execute_non_select_command(sql: string): number;

    execute_select_command(sql: string): DataModel;

    get_authentication(): string;

    get_cnc_string(): string;

    get_date_format(): [boolean, GLib.DateDMY | null, GLib.DateDMY | null, GLib.DateDMY | null, string | null];

    get_dsn(): string;

    get_events(): ConnectionEvent[];

    get_meta_store(): MetaStore;

    get_meta_store_data_v(meta_type: ConnectionMetaType, filters: Holder[]): DataModel;

    get_options(): ConnectionOptions;

    get_prepared_statement(gda_stmt: Statement): PStmt;

    get_provider(): ServerProvider;

    get_provider_name(): string;

    get_transaction_status(): TransactionStatus;

    insert_row_into_table_v(table: string, col_names: string[], values: GObject.Value[]): boolean;

    is_opened(): boolean;

    open(): boolean;

    parse_sql_string(sql: string): [Statement, Set | null];

    perform_operation(op: ServerOperation): boolean;

    point_available_event(type: ConnectionEventType): ConnectionEvent;

    quote_sql_identifier(id: string): string;

    repetitive_statement_execute(
        rstmt: RepetitiveStatement,
        model_usage: StatementModelUsage,
        col_types: GObject.GType[] | null,
        stop_on_error: boolean
    ): GObject.Object[];

    rollback_savepoint(name?: string | null): boolean;

    rollback_transaction(name?: string | null): boolean;

    statement_execute<T = GObject.Object>(
        stmt: Statement,
        params: Set | null,
        model_usage: StatementModelUsage
    ): [T, Set | null];

    statement_execute_non_select(stmt: Statement, params?: Set | null): [number, Set | null];

    statement_execute_select(stmt: Statement, params?: Set | null): DataModel;

    statement_execute_select_full(
        stmt: Statement,
        params: Set | null,
        model_usage: StatementModelUsage,
        col_types?: GObject.GType[] | null
    ): DataModel;

    statement_prepare(stmt: Statement): boolean;

    statement_to_sql(stmt: Statement, params: Set | null, flags: StatementSqlFlag): [string, Holder[] | null];

    supports_feature(feature: ConnectionFeature): boolean;

    update_meta_store(context?: MetaContext | null): boolean;

    update_row_in_table_v(
        table: string,
        condition_column_name: string,
        condition_value: any,
        col_names: string[],
        values: GObject.Value[]
    ): boolean;

    value_to_sql_string(from: any): string;

    vfunc_conn_closed(): void;

    vfunc_conn_opened(): void;

    vfunc_conn_to_close(): void;

    vfunc_dsn_changed(): void;

    vfunc_error(error: ConnectionEvent): void;

    vfunc_transaction_status_changed(): void;

    static error_quark(): GLib.Quark;

    static open_from_dsn(dsn: string, auth_string: string | null, options: ConnectionOptions): Connection;

    static open_from_string(
        provider_name: string | null,
        cnc_string: string,
        auth_string: string | null,
        options: ConnectionOptions
    ): Connection;

    static open_sqlite(directory: string | null, filename: string, auto_unlink: boolean): Connection;

    static string_split(
        string: string,
        out_cnc_params: string,
        out_provider: string,
        out_username: string,
        out_password?: string | null
    ): void;

    // Implemented Members

    lock(): void;

    trylock(): boolean;

    unlock(): void;

    vfunc_i_lock(): void;

    vfunc_i_trylock(): boolean;

    vfunc_i_unlock(): void;
}

export namespace ConnectionEvent {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        type: number;
    }
}

export class ConnectionEvent extends GObject.Object {
    static $gtype: GObject.GType<ConnectionEvent>;

    constructor(properties?: Partial<ConnectionEvent.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ConnectionEvent.ConstructorProperties>, ...args: any[]): void;

    // Properties
    type: number;

    // Fields
    object: GObject.Object;
    priv: ConnectionEventPrivate;

    // Members

    get_code(): number;

    get_description(): string;

    get_event_type(): ConnectionEventType;

    get_gda_code(): ConnectionEventCode;

    get_source(): string;

    get_sqlstate(): string;

    set_code(code: number): void;

    set_description(description?: string | null): void;

    set_event_type(type: ConnectionEventType): void;

    set_gda_code(code: ConnectionEventCode): void;

    set_source(source: string): void;

    set_sqlstate(sqlstate: string): void;
}

export namespace DataAccessWrapper {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        model: DataModel;
    }
}

export class DataAccessWrapper extends GObject.Object implements DataModel {
    static $gtype: GObject.GType<DataAccessWrapper>;

    constructor(properties?: Partial<DataAccessWrapper.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataAccessWrapper.ConstructorProperties>, ...args: any[]): void;

    // Properties
    model: DataModel;

    // Fields
    object: GObject.Object;
    priv: DataAccessWrapperPrivate;

    // Members

    set_mapping(mapping?: number[] | null): boolean;

    static new(model: DataModel): DataModel;

    // Implemented Members

    add_data_from_xml_node(node: libxml2.NodePtr): boolean;

    append_row(): number;

    append_values(values?: GObject.Value[] | null): number;

    array_copy_model(): DataModelArray | null;

    array_copy_model_ext(cols: number[]): DataModelArray | null;

    create_iter(): DataModelIter;

    describe_column(col: number): Column | null;

    dump(to_stream?: any | null): void;

    dump_as_string(): string;

    export_to_file(
        format: DataModelIOFormat,
        file: string,
        cols: number[] | null,
        rows: number[] | null,
        options: Set
    ): boolean;

    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string;

    freeze(): void;

    get_access_flags(): DataModelAccessFlags;

    get_attributes_at(col: number, row: number): ValueAttribute;

    get_column_index(name: string): number;

    get_column_name(col: number): string;

    get_column_title(col: number): string;

    get_exceptions(): GLib.Error[];

    get_n_columns(): number;

    get_n_rows(): number;

    get_notify(): boolean;

    get_row_from_values(values: GObject.Value[], cols_index: number[]): number;

    get_typed_value_at(col: number, row: number, expected_type: GObject.GType, nullok: boolean): GObject.Value | null;

    get_value_at(col: number, row: number): GObject.Value | null;

    import_from_file(file: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable<number, number> | null): boolean;

    import_from_string(string: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    iter_at_row(iter: DataModelIter, row: number): boolean;

    iter_next(iter: DataModelIter): boolean;

    iter_prev(iter: DataModelIter): boolean;

    iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    remove_row(row: number): boolean;

    reset(): void;

    row_inserted(row: number): void;

    row_removed(row: number): void;

    row_updated(row: number): void;

    send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    set_column_name(col: number, name: string): void;

    set_column_title(col: number, title: string): void;

    set_notify(do_notify_changes: boolean): void;

    set_value_at(col: number, row: number, value: any): boolean;

    set_values(row: number, values?: GObject.Value[] | null): boolean;

    thaw(): void;

    vfunc_access_changed(): void;

    vfunc_changed(): void;

    vfunc_i_append_row(): number;

    vfunc_i_append_values(values?: GObject.Value[] | null): number;

    vfunc_i_create_iter(): DataModelIter;

    vfunc_i_describe_column(col: number): Column | null;

    vfunc_i_find_row(values: GObject.Value[], cols_index: number[]): number;

    vfunc_i_get_access_flags(): DataModelAccessFlags;

    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute;

    vfunc_i_get_exceptions(): GLib.Error[];

    vfunc_i_get_n_columns(): number;

    vfunc_i_get_n_rows(): number;

    vfunc_i_get_notify(): boolean;

    vfunc_i_get_value_at(col: number, row: number): GObject.Value | null;

    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean;

    vfunc_i_iter_next(iter: DataModelIter): boolean;

    vfunc_i_iter_prev(iter: DataModelIter): boolean;

    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    vfunc_i_remove_row(row: number): boolean;

    vfunc_i_send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    vfunc_i_set_notify(do_notify_changes: boolean): void;

    vfunc_i_set_value_at(col: number, row: number, value: any): boolean;

    vfunc_i_set_values(row: number, values?: GObject.Value[] | null): boolean;

    vfunc_reset(): void;

    vfunc_row_inserted(row: number): void;

    vfunc_row_removed(row: number): void;

    vfunc_row_updated(row: number): void;
}

export namespace DataComparator {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        new_model: DataModel;
        newModel: DataModel;
        old_model: DataModel;
        oldModel: DataModel;
    }
}

export class DataComparator extends GObject.Object {
    static $gtype: GObject.GType<DataComparator>;

    constructor(properties?: Partial<DataComparator.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataComparator.ConstructorProperties>, ...args: any[]): void;

    // Properties
    new_model: DataModel;
    newModel: DataModel;
    old_model: DataModel;
    oldModel: DataModel;

    // Fields
    object: GObject.Object;
    priv: DataComparatorPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'diff-computed', callback: (_source: this, object: any | null) => boolean): number;

    connect_after(signal: 'diff-computed', callback: (_source: this, object: any | null) => boolean): number;

    emit(signal: 'diff-computed', object: any | null): void;

    // Constructors

    static ['new'](old_model: DataModel, new_model: DataModel): DataComparator;

    // Members

    compute_diff(): boolean;

    get_diff(pos: number): Diff;

    get_n_diffs(): number;

    set_key_columns(col_numbers: number[]): void;

    vfunc_diff_computed(diff: Diff): boolean;

    static error_quark(): GLib.Quark;
}

export namespace DataModelArray {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        n_columns: number;
        nColumns: number;
        read_only: boolean;
        readOnly: boolean;
    }
}

export class DataModelArray extends GObject.Object implements DataModel {
    static $gtype: GObject.GType<DataModelArray>;

    constructor(properties?: Partial<DataModelArray.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataModelArray.ConstructorProperties>, ...args: any[]): void;

    // Properties
    n_columns: number;
    nColumns: number;
    read_only: boolean;
    readOnly: boolean;

    // Fields
    object: GObject.Object;
    priv: DataModelArrayPrivate;

    // Members

    clear(): void;

    get_row(row: number): Row;

    set_n_columns(cols: number): void;

    static new(cols: number): DataModel;

    static new_with_g_types_v(cols: number, types: GObject.GType[]): DataModel;

    // Implemented Members

    add_data_from_xml_node(node: libxml2.NodePtr): boolean;

    append_row(): number;

    append_values(values?: GObject.Value[] | null): number;

    array_copy_model(): DataModelArray | null;

    array_copy_model_ext(cols: number[]): DataModelArray | null;

    create_iter(): DataModelIter;

    describe_column(col: number): Column | null;

    dump(to_stream?: any | null): void;

    dump_as_string(): string;

    export_to_file(
        format: DataModelIOFormat,
        file: string,
        cols: number[] | null,
        rows: number[] | null,
        options: Set
    ): boolean;

    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string;

    freeze(): void;

    get_access_flags(): DataModelAccessFlags;

    get_attributes_at(col: number, row: number): ValueAttribute;

    get_column_index(name: string): number;

    get_column_name(col: number): string;

    get_column_title(col: number): string;

    get_exceptions(): GLib.Error[];

    get_n_columns(): number;

    get_n_rows(): number;

    get_notify(): boolean;

    get_row_from_values(values: GObject.Value[], cols_index: number[]): number;

    get_typed_value_at(col: number, row: number, expected_type: GObject.GType, nullok: boolean): GObject.Value | null;

    get_value_at(col: number, row: number): GObject.Value | null;

    import_from_file(file: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable<number, number> | null): boolean;

    import_from_string(string: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    iter_at_row(iter: DataModelIter, row: number): boolean;

    iter_next(iter: DataModelIter): boolean;

    iter_prev(iter: DataModelIter): boolean;

    iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    remove_row(row: number): boolean;

    reset(): void;

    row_inserted(row: number): void;

    row_removed(row: number): void;

    row_updated(row: number): void;

    send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    set_column_name(col: number, name: string): void;

    set_column_title(col: number, title: string): void;

    set_notify(do_notify_changes: boolean): void;

    set_value_at(col: number, row: number, value: any): boolean;

    set_values(row: number, values?: GObject.Value[] | null): boolean;

    thaw(): void;

    vfunc_access_changed(): void;

    vfunc_changed(): void;

    vfunc_i_append_row(): number;

    vfunc_i_append_values(values?: GObject.Value[] | null): number;

    vfunc_i_create_iter(): DataModelIter;

    vfunc_i_describe_column(col: number): Column | null;

    vfunc_i_find_row(values: GObject.Value[], cols_index: number[]): number;

    vfunc_i_get_access_flags(): DataModelAccessFlags;

    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute;

    vfunc_i_get_exceptions(): GLib.Error[];

    vfunc_i_get_n_columns(): number;

    vfunc_i_get_n_rows(): number;

    vfunc_i_get_notify(): boolean;

    vfunc_i_get_value_at(col: number, row: number): GObject.Value | null;

    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean;

    vfunc_i_iter_next(iter: DataModelIter): boolean;

    vfunc_i_iter_prev(iter: DataModelIter): boolean;

    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    vfunc_i_remove_row(row: number): boolean;

    vfunc_i_send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    vfunc_i_set_notify(do_notify_changes: boolean): void;

    vfunc_i_set_value_at(col: number, row: number, value: any): boolean;

    vfunc_i_set_values(row: number, values?: GObject.Value[] | null): boolean;

    vfunc_reset(): void;

    vfunc_row_inserted(row: number): void;

    vfunc_row_removed(row: number): void;

    vfunc_row_updated(row: number): void;
}

export namespace DataModelBdb {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        db_name: string;
        dbName: string;
        filename: string;
    }
}

export class DataModelBdb extends GObject.Object implements DataModel {
    static $gtype: GObject.GType<DataModelBdb>;

    constructor(properties?: Partial<DataModelBdb.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataModelBdb.ConstructorProperties>, ...args: any[]): void;

    // Properties
    db_name: string;
    dbName: string;
    filename: string;

    // Fields
    object: GObject.Object;
    priv: DataModelBdbPrivate;

    // Members

    clean_errors(): void;

    get_errors(): GLib.Error[];

    vfunc_get_data_part(data: any | null, length: number, part: number): unknown;

    vfunc_get_key_part(data: any | null, length: number, part: number): unknown;

    vfunc_update_data_part(data: any | null, length: number, part: number, value: any): boolean;

    vfunc_update_key_part(data: any | null, length: number, part: number, value: any): boolean;

    static new(filename: string, db_name?: string | null): DataModel;

    // Implemented Members

    add_data_from_xml_node(node: libxml2.NodePtr): boolean;

    append_row(): number;

    append_values(values?: GObject.Value[] | null): number;

    array_copy_model(): DataModelArray | null;

    array_copy_model_ext(cols: number[]): DataModelArray | null;

    create_iter(): DataModelIter;

    describe_column(col: number): Column | null;

    dump(to_stream?: any | null): void;

    dump_as_string(): string;

    export_to_file(
        format: DataModelIOFormat,
        file: string,
        cols: number[] | null,
        rows: number[] | null,
        options: Set
    ): boolean;

    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string;

    freeze(): void;

    get_access_flags(): DataModelAccessFlags;

    get_attributes_at(col: number, row: number): ValueAttribute;

    get_column_index(name: string): number;

    get_column_name(col: number): string;

    get_column_title(col: number): string;

    get_exceptions(): GLib.Error[];

    get_n_columns(): number;

    get_n_rows(): number;

    get_notify(): boolean;

    get_row_from_values(values: GObject.Value[], cols_index: number[]): number;

    get_typed_value_at(col: number, row: number, expected_type: GObject.GType, nullok: boolean): GObject.Value | null;

    get_value_at(col: number, row: number): GObject.Value | null;

    import_from_file(file: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable<number, number> | null): boolean;

    import_from_string(string: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    iter_at_row(iter: DataModelIter, row: number): boolean;

    iter_next(iter: DataModelIter): boolean;

    iter_prev(iter: DataModelIter): boolean;

    iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    remove_row(row: number): boolean;

    reset(): void;

    row_inserted(row: number): void;

    row_removed(row: number): void;

    row_updated(row: number): void;

    send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    set_column_name(col: number, name: string): void;

    set_column_title(col: number, title: string): void;

    set_notify(do_notify_changes: boolean): void;

    set_value_at(col: number, row: number, value: any): boolean;

    set_values(row: number, values?: GObject.Value[] | null): boolean;

    thaw(): void;

    vfunc_access_changed(): void;

    vfunc_changed(): void;

    vfunc_i_append_row(): number;

    vfunc_i_append_values(values?: GObject.Value[] | null): number;

    vfunc_i_create_iter(): DataModelIter;

    vfunc_i_describe_column(col: number): Column | null;

    vfunc_i_find_row(values: GObject.Value[], cols_index: number[]): number;

    vfunc_i_get_access_flags(): DataModelAccessFlags;

    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute;

    vfunc_i_get_exceptions(): GLib.Error[];

    vfunc_i_get_n_columns(): number;

    vfunc_i_get_n_rows(): number;

    vfunc_i_get_notify(): boolean;

    vfunc_i_get_value_at(col: number, row: number): GObject.Value | null;

    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean;

    vfunc_i_iter_next(iter: DataModelIter): boolean;

    vfunc_i_iter_prev(iter: DataModelIter): boolean;

    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    vfunc_i_remove_row(row: number): boolean;

    vfunc_i_send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    vfunc_i_set_notify(do_notify_changes: boolean): void;

    vfunc_i_set_value_at(col: number, row: number, value: any): boolean;

    vfunc_i_set_values(row: number, values?: GObject.Value[] | null): boolean;

    vfunc_reset(): void;

    vfunc_row_inserted(row: number): void;

    vfunc_row_removed(row: number): void;

    vfunc_row_updated(row: number): void;
}

export namespace DataModelDir {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        basedir: string;
    }
}

export class DataModelDir extends GObject.Object implements DataModel {
    static $gtype: GObject.GType<DataModelDir>;

    constructor(properties?: Partial<DataModelDir.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataModelDir.ConstructorProperties>, ...args: any[]): void;

    // Properties
    basedir: string;

    // Fields
    object: GObject.Object;
    priv: DataModelDirPrivate;

    // Members

    clean_errors(): void;

    get_errors(): GLib.Error[];

    static new(basedir: string): DataModel;

    // Implemented Members

    add_data_from_xml_node(node: libxml2.NodePtr): boolean;

    append_row(): number;

    append_values(values?: GObject.Value[] | null): number;

    array_copy_model(): DataModelArray | null;

    array_copy_model_ext(cols: number[]): DataModelArray | null;

    create_iter(): DataModelIter;

    describe_column(col: number): Column | null;

    dump(to_stream?: any | null): void;

    dump_as_string(): string;

    export_to_file(
        format: DataModelIOFormat,
        file: string,
        cols: number[] | null,
        rows: number[] | null,
        options: Set
    ): boolean;

    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string;

    freeze(): void;

    get_access_flags(): DataModelAccessFlags;

    get_attributes_at(col: number, row: number): ValueAttribute;

    get_column_index(name: string): number;

    get_column_name(col: number): string;

    get_column_title(col: number): string;

    get_exceptions(): GLib.Error[];

    get_n_columns(): number;

    get_n_rows(): number;

    get_notify(): boolean;

    get_row_from_values(values: GObject.Value[], cols_index: number[]): number;

    get_typed_value_at(col: number, row: number, expected_type: GObject.GType, nullok: boolean): GObject.Value | null;

    get_value_at(col: number, row: number): GObject.Value | null;

    import_from_file(file: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable<number, number> | null): boolean;

    import_from_string(string: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    iter_at_row(iter: DataModelIter, row: number): boolean;

    iter_next(iter: DataModelIter): boolean;

    iter_prev(iter: DataModelIter): boolean;

    iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    remove_row(row: number): boolean;

    reset(): void;

    row_inserted(row: number): void;

    row_removed(row: number): void;

    row_updated(row: number): void;

    send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    set_column_name(col: number, name: string): void;

    set_column_title(col: number, title: string): void;

    set_notify(do_notify_changes: boolean): void;

    set_value_at(col: number, row: number, value: any): boolean;

    set_values(row: number, values?: GObject.Value[] | null): boolean;

    thaw(): void;

    vfunc_access_changed(): void;

    vfunc_changed(): void;

    vfunc_i_append_row(): number;

    vfunc_i_append_values(values?: GObject.Value[] | null): number;

    vfunc_i_create_iter(): DataModelIter;

    vfunc_i_describe_column(col: number): Column | null;

    vfunc_i_find_row(values: GObject.Value[], cols_index: number[]): number;

    vfunc_i_get_access_flags(): DataModelAccessFlags;

    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute;

    vfunc_i_get_exceptions(): GLib.Error[];

    vfunc_i_get_n_columns(): number;

    vfunc_i_get_n_rows(): number;

    vfunc_i_get_notify(): boolean;

    vfunc_i_get_value_at(col: number, row: number): GObject.Value | null;

    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean;

    vfunc_i_iter_next(iter: DataModelIter): boolean;

    vfunc_i_iter_prev(iter: DataModelIter): boolean;

    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    vfunc_i_remove_row(row: number): boolean;

    vfunc_i_send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    vfunc_i_set_notify(do_notify_changes: boolean): void;

    vfunc_i_set_value_at(col: number, row: number, value: any): boolean;

    vfunc_i_set_values(row: number, values?: GObject.Value[] | null): boolean;

    vfunc_reset(): void;

    vfunc_row_inserted(row: number): void;

    vfunc_row_removed(row: number): void;

    vfunc_row_updated(row: number): void;
}

export namespace DataModelImport {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        data_string: string;
        dataString: string;
        filename: string;
        options: Set;
        random_access: boolean;
        randomAccess: boolean;
        strict: boolean;
        xml_node: any;
        xmlNode: any;
    }
}

export class DataModelImport extends GObject.Object implements DataModel {
    static $gtype: GObject.GType<DataModelImport>;

    constructor(properties?: Partial<DataModelImport.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataModelImport.ConstructorProperties>, ...args: any[]): void;

    // Properties
    data_string: string;
    dataString: string;
    filename: string;
    options: Set;
    random_access: boolean;
    randomAccess: boolean;
    strict: boolean;
    xml_node: any;
    xmlNode: any;

    // Fields
    object: GObject.Object;
    priv: DataModelImportPrivate;

    // Members

    clean_errors(): void;

    get_errors(): GLib.Error[];

    static new_file(filename: string, random_access: boolean, options?: Set | null): DataModel;

    static new_mem(data: string, random_access: boolean, options?: Set | null): DataModel;

    static new_xml_node(node: libxml2.NodePtr): DataModel;

    // Implemented Members

    add_data_from_xml_node(node: libxml2.NodePtr): boolean;

    append_row(): number;

    append_values(values?: GObject.Value[] | null): number;

    array_copy_model(): DataModelArray | null;

    array_copy_model_ext(cols: number[]): DataModelArray | null;

    create_iter(): DataModelIter;

    describe_column(col: number): Column | null;

    dump(to_stream?: any | null): void;

    dump_as_string(): string;

    export_to_file(
        format: DataModelIOFormat,
        file: string,
        cols: number[] | null,
        rows: number[] | null,
        options: Set
    ): boolean;

    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string;

    freeze(): void;

    get_access_flags(): DataModelAccessFlags;

    get_attributes_at(col: number, row: number): ValueAttribute;

    get_column_index(name: string): number;

    get_column_name(col: number): string;

    get_column_title(col: number): string;

    get_exceptions(): GLib.Error[];

    get_n_columns(): number;

    get_n_rows(): number;

    get_notify(): boolean;

    get_row_from_values(values: GObject.Value[], cols_index: number[]): number;

    get_typed_value_at(col: number, row: number, expected_type: GObject.GType, nullok: boolean): GObject.Value | null;

    get_value_at(col: number, row: number): GObject.Value | null;

    import_from_file(file: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable<number, number> | null): boolean;

    import_from_string(string: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    iter_at_row(iter: DataModelIter, row: number): boolean;

    iter_next(iter: DataModelIter): boolean;

    iter_prev(iter: DataModelIter): boolean;

    iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    remove_row(row: number): boolean;

    reset(): void;

    row_inserted(row: number): void;

    row_removed(row: number): void;

    row_updated(row: number): void;

    send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    set_column_name(col: number, name: string): void;

    set_column_title(col: number, title: string): void;

    set_notify(do_notify_changes: boolean): void;

    set_value_at(col: number, row: number, value: any): boolean;

    set_values(row: number, values?: GObject.Value[] | null): boolean;

    thaw(): void;

    vfunc_access_changed(): void;

    vfunc_changed(): void;

    vfunc_i_append_row(): number;

    vfunc_i_append_values(values?: GObject.Value[] | null): number;

    vfunc_i_create_iter(): DataModelIter;

    vfunc_i_describe_column(col: number): Column | null;

    vfunc_i_find_row(values: GObject.Value[], cols_index: number[]): number;

    vfunc_i_get_access_flags(): DataModelAccessFlags;

    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute;

    vfunc_i_get_exceptions(): GLib.Error[];

    vfunc_i_get_n_columns(): number;

    vfunc_i_get_n_rows(): number;

    vfunc_i_get_notify(): boolean;

    vfunc_i_get_value_at(col: number, row: number): GObject.Value | null;

    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean;

    vfunc_i_iter_next(iter: DataModelIter): boolean;

    vfunc_i_iter_prev(iter: DataModelIter): boolean;

    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    vfunc_i_remove_row(row: number): boolean;

    vfunc_i_send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    vfunc_i_set_notify(do_notify_changes: boolean): void;

    vfunc_i_set_value_at(col: number, row: number, value: any): boolean;

    vfunc_i_set_values(row: number, values?: GObject.Value[] | null): boolean;

    vfunc_reset(): void;

    vfunc_row_inserted(row: number): void;

    vfunc_row_removed(row: number): void;

    vfunc_row_updated(row: number): void;
}

export namespace DataModelIter {
    export interface ConstructorProperties extends Set.ConstructorProperties {
        [key: string]: any;

        current_row: number;
        currentRow: number;
        data_model: DataModel;
        dataModel: DataModel;
        forced_model: DataModel;
        forcedModel: DataModel;
        update_model: boolean;
        updateModel: boolean;
    }
}

export class DataModelIter extends Set {
    static $gtype: GObject.GType<DataModelIter>;

    constructor(properties?: Partial<DataModelIter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataModelIter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    current_row: number;
    currentRow: number;
    data_model: DataModel;
    dataModel: DataModel;
    forced_model: DataModel;
    forcedModel: DataModel;
    update_model: boolean;
    updateModel: boolean;

    // Fields
    object: Set | any;
    priv: DataModelIterPrivate | any;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'end-of-data', callback: (_source: this) => void): number;

    connect_after(signal: 'end-of-data', callback: (_source: this) => void): number;

    emit(signal: 'end-of-data'): void;

    connect(signal: 'row-changed', callback: (_source: this, row: number) => void): number;

    connect_after(signal: 'row-changed', callback: (_source: this, row: number) => void): number;

    emit(signal: 'row-changed', row: number): void;

    // Members

    get_column_for_param(param: Holder): number;

    get_holder_for_field(col: number): Holder;

    get_row(): number;

    get_value_at(col: number): GObject.Value | null;

    get_value_at_e(col: number): GObject.Value | null;

    get_value_for_field(field_name: string): GObject.Value | null;

    invalidate_contents(): void;

    is_valid(): boolean;

    move_next(): boolean;

    move_prev(): boolean;

    move_to_row(row: number): boolean;

    set_value_at(col: number, value: any): boolean;

    vfunc_end_of_data(): void;

    vfunc_row_changed(row: number): void;

    static error_quark(): GLib.Quark;
}

export namespace DataModelLdap {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        attributes: string;
        base: string;
        cnc: Connection;
        filter: string;
        scope: number;
    }
}

export class DataModelLdap extends GObject.Object implements DataModel {
    static $gtype: GObject.GType<DataModelLdap>;

    constructor(properties?: Partial<DataModelLdap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataModelLdap.ConstructorProperties>, ...args: any[]): void;

    // Properties
    attributes: string;
    base: string;
    cnc: Connection;
    filter: string;
    scope: number;

    // Fields
    object: GObject.Object;
    priv: DataModelLdapPrivate;

    // Constructors

    static new_with_config(
        cnc: Connection,
        base_dn: string | null,
        filter: string | null,
        attributes: string | null,
        scope: LdapSearchScope
    ): DataModelLdap;

    // Members

    static compute_columns(cnc: Connection, attributes?: string | null): Column[];

    static new(
        cnc: Connection,
        base_dn: string | null,
        filter: string | null,
        attributes: string | null,
        scope: LdapSearchScope
    ): DataModel;

    // Implemented Members

    add_data_from_xml_node(node: libxml2.NodePtr): boolean;

    append_row(): number;

    append_values(values?: GObject.Value[] | null): number;

    array_copy_model(): DataModelArray | null;

    array_copy_model_ext(cols: number[]): DataModelArray | null;

    create_iter(): DataModelIter;

    describe_column(col: number): Column | null;

    dump(to_stream?: any | null): void;

    dump_as_string(): string;

    export_to_file(
        format: DataModelIOFormat,
        file: string,
        cols: number[] | null,
        rows: number[] | null,
        options: Set
    ): boolean;

    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string;

    freeze(): void;

    get_access_flags(): DataModelAccessFlags;

    get_attributes_at(col: number, row: number): ValueAttribute;

    get_column_index(name: string): number;

    get_column_name(col: number): string;

    get_column_title(col: number): string;

    get_exceptions(): GLib.Error[];

    get_n_columns(): number;

    get_n_rows(): number;

    get_notify(): boolean;

    get_row_from_values(values: GObject.Value[], cols_index: number[]): number;

    get_typed_value_at(col: number, row: number, expected_type: GObject.GType, nullok: boolean): GObject.Value | null;

    get_value_at(col: number, row: number): GObject.Value | null;

    import_from_file(file: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable<number, number> | null): boolean;

    import_from_string(string: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    iter_at_row(iter: DataModelIter, row: number): boolean;

    iter_next(iter: DataModelIter): boolean;

    iter_prev(iter: DataModelIter): boolean;

    iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    remove_row(row: number): boolean;

    reset(): void;

    row_inserted(row: number): void;

    row_removed(row: number): void;

    row_updated(row: number): void;

    send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    set_column_name(col: number, name: string): void;

    set_column_title(col: number, title: string): void;

    set_notify(do_notify_changes: boolean): void;

    set_value_at(col: number, row: number, value: any): boolean;

    set_values(row: number, values?: GObject.Value[] | null): boolean;

    thaw(): void;

    vfunc_access_changed(): void;

    vfunc_changed(): void;

    vfunc_i_append_row(): number;

    vfunc_i_append_values(values?: GObject.Value[] | null): number;

    vfunc_i_create_iter(): DataModelIter;

    vfunc_i_describe_column(col: number): Column | null;

    vfunc_i_find_row(values: GObject.Value[], cols_index: number[]): number;

    vfunc_i_get_access_flags(): DataModelAccessFlags;

    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute;

    vfunc_i_get_exceptions(): GLib.Error[];

    vfunc_i_get_n_columns(): number;

    vfunc_i_get_n_rows(): number;

    vfunc_i_get_notify(): boolean;

    vfunc_i_get_value_at(col: number, row: number): GObject.Value | null;

    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean;

    vfunc_i_iter_next(iter: DataModelIter): boolean;

    vfunc_i_iter_prev(iter: DataModelIter): boolean;

    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    vfunc_i_remove_row(row: number): boolean;

    vfunc_i_send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    vfunc_i_set_notify(do_notify_changes: boolean): void;

    vfunc_i_set_value_at(col: number, row: number, value: any): boolean;

    vfunc_i_set_values(row: number, values?: GObject.Value[] | null): boolean;

    vfunc_reset(): void;

    vfunc_row_inserted(row: number): void;

    vfunc_row_removed(row: number): void;

    vfunc_row_updated(row: number): void;
}

export namespace DataPivot {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        model: DataModel;
    }
}

export class DataPivot extends GObject.Object implements DataModel {
    static $gtype: GObject.GType<DataPivot>;

    constructor(properties?: Partial<DataPivot.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataPivot.ConstructorProperties>, ...args: any[]): void;

    // Properties
    model: DataModel;

    // Fields
    object: GObject.Object;
    priv: DataPivotPrivate;

    // Members

    add_data(aggregate_type: DataPivotAggregate, field: string, alias?: string | null): boolean;

    add_field(field_type: DataPivotFieldType, field: string, alias?: string | null): boolean;

    populate(): boolean;

    static error_quark(): GLib.Quark;

    static new(model?: DataModel | null): DataModel;

    // Implemented Members

    add_data_from_xml_node(node: libxml2.NodePtr): boolean;

    append_row(): number;

    append_values(values?: GObject.Value[] | null): number;

    array_copy_model(): DataModelArray | null;

    array_copy_model_ext(cols: number[]): DataModelArray | null;

    create_iter(): DataModelIter;

    describe_column(col: number): Column | null;

    dump(to_stream?: any | null): void;

    dump_as_string(): string;

    export_to_file(
        format: DataModelIOFormat,
        file: string,
        cols: number[] | null,
        rows: number[] | null,
        options: Set
    ): boolean;

    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string;

    freeze(): void;

    get_access_flags(): DataModelAccessFlags;

    get_attributes_at(col: number, row: number): ValueAttribute;

    get_column_index(name: string): number;

    get_column_name(col: number): string;

    get_column_title(col: number): string;

    get_exceptions(): GLib.Error[];

    get_n_columns(): number;

    get_n_rows(): number;

    get_notify(): boolean;

    get_row_from_values(values: GObject.Value[], cols_index: number[]): number;

    get_typed_value_at(col: number, row: number, expected_type: GObject.GType, nullok: boolean): GObject.Value | null;

    get_value_at(col: number, row: number): GObject.Value | null;

    import_from_file(file: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable<number, number> | null): boolean;

    import_from_string(string: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    iter_at_row(iter: DataModelIter, row: number): boolean;

    iter_next(iter: DataModelIter): boolean;

    iter_prev(iter: DataModelIter): boolean;

    iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    remove_row(row: number): boolean;

    reset(): void;

    row_inserted(row: number): void;

    row_removed(row: number): void;

    row_updated(row: number): void;

    send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    set_column_name(col: number, name: string): void;

    set_column_title(col: number, title: string): void;

    set_notify(do_notify_changes: boolean): void;

    set_value_at(col: number, row: number, value: any): boolean;

    set_values(row: number, values?: GObject.Value[] | null): boolean;

    thaw(): void;

    vfunc_access_changed(): void;

    vfunc_changed(): void;

    vfunc_i_append_row(): number;

    vfunc_i_append_values(values?: GObject.Value[] | null): number;

    vfunc_i_create_iter(): DataModelIter;

    vfunc_i_describe_column(col: number): Column | null;

    vfunc_i_find_row(values: GObject.Value[], cols_index: number[]): number;

    vfunc_i_get_access_flags(): DataModelAccessFlags;

    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute;

    vfunc_i_get_exceptions(): GLib.Error[];

    vfunc_i_get_n_columns(): number;

    vfunc_i_get_n_rows(): number;

    vfunc_i_get_notify(): boolean;

    vfunc_i_get_value_at(col: number, row: number): GObject.Value | null;

    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean;

    vfunc_i_iter_next(iter: DataModelIter): boolean;

    vfunc_i_iter_prev(iter: DataModelIter): boolean;

    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    vfunc_i_remove_row(row: number): boolean;

    vfunc_i_send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    vfunc_i_set_notify(do_notify_changes: boolean): void;

    vfunc_i_set_value_at(col: number, row: number, value: any): boolean;

    vfunc_i_set_values(row: number, values?: GObject.Value[] | null): boolean;

    vfunc_reset(): void;

    vfunc_row_inserted(row: number): void;

    vfunc_row_removed(row: number): void;

    vfunc_row_updated(row: number): void;
}

export namespace DataProxy {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        cache_changes: boolean;
        cacheChanges: boolean;
        defer_sync: boolean;
        deferSync: boolean;
        model: DataModel;
        prepend_null_entry: boolean;
        prependNullEntry: boolean;
        sample_size: number;
        sampleSize: number;
    }
}

export class DataProxy extends GObject.Object implements DataModel {
    static $gtype: GObject.GType<DataProxy>;

    constructor(properties?: Partial<DataProxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataProxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    cache_changes: boolean;
    cacheChanges: boolean;
    defer_sync: boolean;
    deferSync: boolean;
    model: DataModel;
    prepend_null_entry: boolean;
    prependNullEntry: boolean;
    sample_size: number;
    sampleSize: number;

    // Fields
    object: GObject.Object;
    priv: DataProxyPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'filter-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'filter-changed', callback: (_source: this) => void): number;

    emit(signal: 'filter-changed'): void;

    connect(signal: 'row-changes-applied', callback: (_source: this, row: number, proxied_row: number) => void): number;

    connect_after(
        signal: 'row-changes-applied',
        callback: (_source: this, row: number, proxied_row: number) => void
    ): number;

    emit(signal: 'row-changes-applied', row: number, proxied_row: number): void;

    connect(
        signal: 'row-delete-changed',
        callback: (_source: this, row: number, to_be_deleted: boolean) => void
    ): number;

    connect_after(
        signal: 'row-delete-changed',
        callback: (_source: this, row: number, to_be_deleted: boolean) => void
    ): number;

    emit(signal: 'row-delete-changed', row: number, to_be_deleted: boolean): void;

    connect(
        signal: 'sample-changed',
        callback: (_source: this, sample_start: number, sample_end: number) => void
    ): number;

    connect_after(
        signal: 'sample-changed',
        callback: (_source: this, sample_start: number, sample_end: number) => void
    ): number;

    emit(signal: 'sample-changed', sample_start: number, sample_end: number): void;

    connect(signal: 'sample-size-changed', callback: (_source: this, sample_size: number) => void): number;

    connect_after(signal: 'sample-size-changed', callback: (_source: this, sample_size: number) => void): number;

    emit(signal: 'sample-size-changed', sample_size: number): void;

    connect(
        signal: 'validate-row-changes',
        callback: (_source: this, row: number, proxied_row: number) => GLib.Error
    ): number;

    connect_after(
        signal: 'validate-row-changes',
        callback: (_source: this, row: number, proxied_row: number) => GLib.Error
    ): number;

    emit(signal: 'validate-row-changes', row: number, proxied_row: number): void;

    // Constructors

    static ['new'](model: DataModel): DataProxy;

    static new_with_data_model(model: DataModel): DataProxy;

    // Members

    alter_value_attributes(proxy_row: number, col: number, alter_flags: ValueAttribute): void;

    apply_all_changes(): boolean;

    apply_row_changes(proxy_row: number): boolean;

    cancel_all_changes(): boolean;

    cancel_row_changes(proxy_row: number, col: number): void;

    ['delete'](proxy_row: number): void;

    get_filter_expr(): string;

    get_filtered_n_rows(): number;

    get_n_modified_rows(): number;

    get_n_new_rows(): number;

    get_proxied_model(): DataModel;

    get_proxied_model_n_cols(): number;

    get_proxied_model_n_rows(): number;

    get_proxied_model_row(proxy_row: number): number;

    get_sample_end(): number;

    get_sample_size(): number;

    get_sample_start(): number;

    get_value_attributes(proxy_row: number, col: number): ValueAttribute;

    get_values(proxy_row: number, cols_index: number[]): GObject.Value[];

    has_changed(): boolean;

    is_read_only(): boolean;

    row_has_changed(proxy_row: number): boolean;

    row_is_deleted(proxy_row: number): boolean;

    row_is_inserted(proxy_row: number): boolean;

    set_filter_expr(filter_expr?: string | null): boolean;

    set_ordering_column(col: number): boolean;

    set_sample_size(sample_size: number): void;

    set_sample_start(sample_start: number): void;

    undelete(proxy_row: number): void;

    vfunc_filter_changed(): void;

    vfunc_row_changes_applied(row: number, proxied_row: number): void;

    vfunc_row_delete_changed(row: number, to_be_deleted: boolean): void;

    vfunc_sample_changed(sample_start: number, sample_end: number): void;

    vfunc_sample_size_changed(sample_size: number): void;

    vfunc_validate_row_changes(row: number, proxied_row: number): GLib.Error;

    static error_quark(): GLib.Quark;

    // Implemented Members

    add_data_from_xml_node(node: libxml2.NodePtr): boolean;

    append_row(): number;

    append_values(values?: GObject.Value[] | null): number;

    array_copy_model(): DataModelArray | null;

    array_copy_model_ext(cols: number[]): DataModelArray | null;

    create_iter(): DataModelIter;

    describe_column(col: number): Column | null;

    dump(to_stream?: any | null): void;

    dump_as_string(): string;

    export_to_file(
        format: DataModelIOFormat,
        file: string,
        cols: number[] | null,
        rows: number[] | null,
        options: Set
    ): boolean;

    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string;

    freeze(): void;

    get_access_flags(): DataModelAccessFlags;

    get_attributes_at(col: number, row: number): ValueAttribute;

    get_column_index(name: string): number;

    get_column_name(col: number): string;

    get_column_title(col: number): string;

    get_exceptions(): GLib.Error[];

    get_n_columns(): number;

    get_n_rows(): number;

    get_notify(): boolean;

    get_row_from_values(values: GObject.Value[], cols_index: number[]): number;

    get_typed_value_at(col: number, row: number, expected_type: GObject.GType, nullok: boolean): GObject.Value | null;

    get_value_at(col: number, row: number): GObject.Value | null;

    import_from_file(file: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable<number, number> | null): boolean;

    import_from_string(string: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    iter_at_row(iter: DataModelIter, row: number): boolean;

    iter_next(iter: DataModelIter): boolean;

    iter_prev(iter: DataModelIter): boolean;

    iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    remove_row(row: number): boolean;

    reset(): void;

    row_inserted(row: number): void;

    row_removed(row: number): void;

    row_updated(row: number): void;

    send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    set_column_name(col: number, name: string): void;

    set_column_title(col: number, title: string): void;

    set_notify(do_notify_changes: boolean): void;

    set_value_at(col: number, row: number, value: any): boolean;

    set_values(row: number, values?: GObject.Value[] | null): boolean;

    thaw(): void;

    vfunc_access_changed(): void;

    vfunc_changed(): void;

    vfunc_i_append_row(): number;

    vfunc_i_append_values(values?: GObject.Value[] | null): number;

    vfunc_i_create_iter(): DataModelIter;

    vfunc_i_describe_column(col: number): Column | null;

    vfunc_i_find_row(values: GObject.Value[], cols_index: number[]): number;

    vfunc_i_get_access_flags(): DataModelAccessFlags;

    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute;

    vfunc_i_get_exceptions(): GLib.Error[];

    vfunc_i_get_n_columns(): number;

    vfunc_i_get_n_rows(): number;

    vfunc_i_get_notify(): boolean;

    vfunc_i_get_value_at(col: number, row: number): GObject.Value | null;

    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean;

    vfunc_i_iter_next(iter: DataModelIter): boolean;

    vfunc_i_iter_prev(iter: DataModelIter): boolean;

    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    vfunc_i_remove_row(row: number): boolean;

    vfunc_i_send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    vfunc_i_set_notify(do_notify_changes: boolean): void;

    vfunc_i_set_value_at(col: number, row: number, value: any): boolean;

    vfunc_i_set_values(row: number, values?: GObject.Value[] | null): boolean;

    vfunc_reset(): void;

    vfunc_row_inserted(row: number): void;

    vfunc_row_removed(row: number): void;

    vfunc_row_updated(row: number): void;
}

export namespace DataSelect {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        auto_reset: boolean;
        autoReset: boolean;
        connection: Connection;
        delete_stmt: Statement;
        deleteStmt: Statement;
        exec_params: Set;
        execParams: Set;
        execution_delay: number;
        executionDelay: number;
        insert_stmt: Statement;
        insertStmt: Statement;
        model_usage: number;
        modelUsage: number;
        prepared_stmt: PStmt;
        preparedStmt: PStmt;
        select_stmt: Statement;
        selectStmt: Statement;
        store_all_rows: boolean;
        storeAllRows: boolean;
        update_stmt: Statement;
        updateStmt: Statement;
    }
}

export abstract class DataSelect extends GObject.Object implements DataModel {
    static $gtype: GObject.GType<DataSelect>;

    constructor(properties?: Partial<DataSelect.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DataSelect.ConstructorProperties>, ...args: any[]): void;

    // Properties
    auto_reset: boolean;
    autoReset: boolean;
    connection: Connection;
    delete_stmt: Statement;
    deleteStmt: Statement;
    exec_params: Set;
    execParams: Set;
    execution_delay: number;
    executionDelay: number;
    insert_stmt: Statement;
    insertStmt: Statement;
    model_usage: number;
    modelUsage: number;
    prepared_stmt: PStmt;
    preparedStmt: PStmt;
    select_stmt: Statement;
    selectStmt: Statement;
    store_all_rows: boolean;
    storeAllRows: boolean;
    update_stmt: Statement;
    updateStmt: Statement;

    // Fields
    object: GObject.Object;
    priv: DataSelectPrivate;
    prep_stmt: PStmt;
    nb_stored_rows: number;
    advertized_nrows: number;

    // Members

    compute_columns_attributes(): boolean;

    compute_modification_statements(): boolean;

    compute_modification_statements_ext(cond_type: DataSelectConditionType): boolean;

    compute_row_selection_condition(): boolean;

    get_connection(): Connection;

    prepare_for_offline(): boolean;

    rerun(): boolean;

    set_modification_statement(mod_stmt: Statement): boolean;

    set_modification_statement_sql(sql: string): boolean;

    set_row_selection_condition_sql(sql_where: string): boolean;

    vfunc_fetch_at(prow: Row, rownum: number): boolean;

    vfunc_fetch_nb_rows(): number;

    vfunc_fetch_next(prow: Row, rownum: number): boolean;

    vfunc_fetch_prev(prow: Row, rownum: number): boolean;

    vfunc_fetch_random(prow: Row, rownum: number): boolean;

    vfunc_store_all(): boolean;

    static error_quark(): GLib.Quark;

    // Implemented Members

    add_data_from_xml_node(node: libxml2.NodePtr): boolean;

    append_row(): number;

    append_values(values?: GObject.Value[] | null): number;

    array_copy_model(): DataModelArray | null;

    array_copy_model_ext(cols: number[]): DataModelArray | null;

    create_iter(): DataModelIter;

    describe_column(col: number): Column | null;

    dump(to_stream?: any | null): void;

    dump_as_string(): string;

    export_to_file(
        format: DataModelIOFormat,
        file: string,
        cols: number[] | null,
        rows: number[] | null,
        options: Set
    ): boolean;

    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string;

    freeze(): void;

    get_access_flags(): DataModelAccessFlags;

    get_attributes_at(col: number, row: number): ValueAttribute;

    get_column_index(name: string): number;

    get_column_name(col: number): string;

    get_column_title(col: number): string;

    get_exceptions(): GLib.Error[];

    get_n_columns(): number;

    get_n_rows(): number;

    get_notify(): boolean;

    get_row_from_values(values: GObject.Value[], cols_index: number[]): number;

    get_typed_value_at(col: number, row: number, expected_type: GObject.GType, nullok: boolean): GObject.Value | null;

    get_value_at(col: number, row: number): GObject.Value | null;

    import_from_file(file: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable<number, number> | null): boolean;

    import_from_string(string: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    iter_at_row(iter: DataModelIter, row: number): boolean;

    iter_next(iter: DataModelIter): boolean;

    iter_prev(iter: DataModelIter): boolean;

    iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    remove_row(row: number): boolean;

    reset(): void;

    row_inserted(row: number): void;

    row_removed(row: number): void;

    row_updated(row: number): void;

    send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    set_column_name(col: number, name: string): void;

    set_column_title(col: number, title: string): void;

    set_notify(do_notify_changes: boolean): void;

    set_value_at(col: number, row: number, value: any): boolean;

    set_values(row: number, values?: GObject.Value[] | null): boolean;

    thaw(): void;

    vfunc_access_changed(): void;

    vfunc_changed(): void;

    vfunc_i_append_row(): number;

    vfunc_i_append_values(values?: GObject.Value[] | null): number;

    vfunc_i_create_iter(): DataModelIter;

    vfunc_i_describe_column(col: number): Column | null;

    vfunc_i_find_row(values: GObject.Value[], cols_index: number[]): number;

    vfunc_i_get_access_flags(): DataModelAccessFlags;

    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute;

    vfunc_i_get_exceptions(): GLib.Error[];

    vfunc_i_get_n_columns(): number;

    vfunc_i_get_n_rows(): number;

    vfunc_i_get_notify(): boolean;

    vfunc_i_get_value_at(col: number, row: number): GObject.Value | null;

    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean;

    vfunc_i_iter_next(iter: DataModelIter): boolean;

    vfunc_i_iter_prev(iter: DataModelIter): boolean;

    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    vfunc_i_remove_row(row: number): boolean;

    vfunc_i_send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    vfunc_i_set_notify(do_notify_changes: boolean): void;

    vfunc_i_set_value_at(col: number, row: number, value: any): boolean;

    vfunc_i_set_values(row: number, values?: GObject.Value[] | null): boolean;

    vfunc_reset(): void;

    vfunc_row_inserted(row: number): void;

    vfunc_row_removed(row: number): void;

    vfunc_row_updated(row: number): void;
}

export namespace HandlerBin {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class HandlerBin extends GObject.Object implements DataHandler {
    static $gtype: GObject.GType<HandlerBin>;

    constructor(properties?: Partial<HandlerBin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HandlerBin.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: HandlerBinPriv;

    // Members

    static new(): DataHandler;

    // Implemented Members

    accepts_g_type(type: GObject.GType): boolean;

    get_descr(): string;

    get_sane_init_value(type: GObject.GType): GObject.Value | null;

    get_sql_from_value(value?: GObject.Value | null): string;

    get_str_from_value(value?: GObject.Value | null): string;

    get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    get_value_from_str(str: string | null, type: GObject.GType): unknown;

    vfunc_accepts_g_type(type: GObject.GType): boolean;

    vfunc_get_descr(): string;

    vfunc_get_sane_init_value(type: GObject.GType): GObject.Value | null;

    vfunc_get_sql_from_value(value?: GObject.Value | null): string;

    vfunc_get_str_from_value(value?: GObject.Value | null): string;

    vfunc_get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    vfunc_get_value_from_str(str: string | null, type: GObject.GType): unknown;
}

export namespace HandlerBoolean {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class HandlerBoolean extends GObject.Object implements DataHandler {
    static $gtype: GObject.GType<HandlerBoolean>;

    constructor(properties?: Partial<HandlerBoolean.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HandlerBoolean.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: HandlerBooleanPriv;

    // Members

    static new(): DataHandler;

    // Implemented Members

    accepts_g_type(type: GObject.GType): boolean;

    get_descr(): string;

    get_sane_init_value(type: GObject.GType): GObject.Value | null;

    get_sql_from_value(value?: GObject.Value | null): string;

    get_str_from_value(value?: GObject.Value | null): string;

    get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    get_value_from_str(str: string | null, type: GObject.GType): unknown;

    vfunc_accepts_g_type(type: GObject.GType): boolean;

    vfunc_get_descr(): string;

    vfunc_get_sane_init_value(type: GObject.GType): GObject.Value | null;

    vfunc_get_sql_from_value(value?: GObject.Value | null): string;

    vfunc_get_str_from_value(value?: GObject.Value | null): string;

    vfunc_get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    vfunc_get_value_from_str(str: string | null, type: GObject.GType): unknown;
}

export namespace HandlerNumerical {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class HandlerNumerical extends GObject.Object implements DataHandler {
    static $gtype: GObject.GType<HandlerNumerical>;

    constructor(properties?: Partial<HandlerNumerical.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HandlerNumerical.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: HandlerNumericalPriv;

    // Members

    static new(): DataHandler;

    // Implemented Members

    accepts_g_type(type: GObject.GType): boolean;

    get_descr(): string;

    get_sane_init_value(type: GObject.GType): GObject.Value | null;

    get_sql_from_value(value?: GObject.Value | null): string;

    get_str_from_value(value?: GObject.Value | null): string;

    get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    get_value_from_str(str: string | null, type: GObject.GType): unknown;

    vfunc_accepts_g_type(type: GObject.GType): boolean;

    vfunc_get_descr(): string;

    vfunc_get_sane_init_value(type: GObject.GType): GObject.Value | null;

    vfunc_get_sql_from_value(value?: GObject.Value | null): string;

    vfunc_get_str_from_value(value?: GObject.Value | null): string;

    vfunc_get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    vfunc_get_value_from_str(str: string | null, type: GObject.GType): unknown;
}

export namespace HandlerString {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class HandlerString extends GObject.Object implements DataHandler {
    static $gtype: GObject.GType<HandlerString>;

    constructor(properties?: Partial<HandlerString.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HandlerString.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: HandlerStringPriv;

    // Members

    static new(): DataHandler;

    static new_with_provider(prov: ServerProvider, cnc?: Connection | null): DataHandler;

    // Implemented Members

    accepts_g_type(type: GObject.GType): boolean;

    get_descr(): string;

    get_sane_init_value(type: GObject.GType): GObject.Value | null;

    get_sql_from_value(value?: GObject.Value | null): string;

    get_str_from_value(value?: GObject.Value | null): string;

    get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    get_value_from_str(str: string | null, type: GObject.GType): unknown;

    vfunc_accepts_g_type(type: GObject.GType): boolean;

    vfunc_get_descr(): string;

    vfunc_get_sane_init_value(type: GObject.GType): GObject.Value | null;

    vfunc_get_sql_from_value(value?: GObject.Value | null): string;

    vfunc_get_str_from_value(value?: GObject.Value | null): string;

    vfunc_get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    vfunc_get_value_from_str(str: string | null, type: GObject.GType): unknown;
}

export namespace HandlerTime {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class HandlerTime extends GObject.Object implements DataHandler {
    static $gtype: GObject.GType<HandlerTime>;

    constructor(properties?: Partial<HandlerTime.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HandlerTime.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: HandlerTimePriv;

    // Members

    get_format(type: GObject.GType): string;

    get_no_locale_str_from_value(value: any): string;

    set_sql_spec(
        first: GLib.DateDMY,
        sec: GLib.DateDMY,
        third: GLib.DateDMY,
        separator: number,
        twodigits_years: boolean
    ): void;

    set_str_spec(
        first: GLib.DateDMY,
        sec: GLib.DateDMY,
        third: GLib.DateDMY,
        separator: number,
        twodigits_years: boolean
    ): void;

    static new(): DataHandler;

    static new_no_locale(): DataHandler;

    // Implemented Members

    accepts_g_type(type: GObject.GType): boolean;

    get_descr(): string;

    get_sane_init_value(type: GObject.GType): GObject.Value | null;

    get_sql_from_value(value?: GObject.Value | null): string;

    get_str_from_value(value?: GObject.Value | null): string;

    get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    get_value_from_str(str: string | null, type: GObject.GType): unknown;

    vfunc_accepts_g_type(type: GObject.GType): boolean;

    vfunc_get_descr(): string;

    vfunc_get_sane_init_value(type: GObject.GType): GObject.Value | null;

    vfunc_get_sql_from_value(value?: GObject.Value | null): string;

    vfunc_get_str_from_value(value?: GObject.Value | null): string;

    vfunc_get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    vfunc_get_value_from_str(str: string | null, type: GObject.GType): unknown;
}

export namespace HandlerType {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class HandlerType extends GObject.Object implements DataHandler {
    static $gtype: GObject.GType<HandlerType>;

    constructor(properties?: Partial<HandlerType.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<HandlerType.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: HandlerTypePriv;

    // Members

    static new(): DataHandler;

    // Implemented Members

    accepts_g_type(type: GObject.GType): boolean;

    get_descr(): string;

    get_sane_init_value(type: GObject.GType): GObject.Value | null;

    get_sql_from_value(value?: GObject.Value | null): string;

    get_str_from_value(value?: GObject.Value | null): string;

    get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    get_value_from_str(str: string | null, type: GObject.GType): unknown;

    vfunc_accepts_g_type(type: GObject.GType): boolean;

    vfunc_get_descr(): string;

    vfunc_get_sane_init_value(type: GObject.GType): GObject.Value | null;

    vfunc_get_sql_from_value(value?: GObject.Value | null): string;

    vfunc_get_str_from_value(value?: GObject.Value | null): string;

    vfunc_get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    vfunc_get_value_from_str(str: string | null, type: GObject.GType): unknown;
}

export namespace Holder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        description: string;
        full_bind: Holder;
        fullBind: Holder;
        g_type: GObject.GType;
        gType: GObject.GType;
        id: string;
        name: string;
        not_null: boolean;
        notNull: boolean;
        simple_bind: Holder;
        simpleBind: Holder;
        source_column: number;
        sourceColumn: number;
        source_model: DataModel;
        sourceModel: DataModel;
        validate_changes: boolean;
        validateChanges: boolean;
    }
}

export class Holder extends GObject.Object implements Lockable {
    static $gtype: GObject.GType<Holder>;

    constructor(properties?: Partial<Holder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Holder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    description: string;
    full_bind: Holder;
    fullBind: Holder;
    g_type: GObject.GType;
    gType: GObject.GType;
    id: string;
    name: string;
    not_null: boolean;
    notNull: boolean;
    simple_bind: Holder;
    simpleBind: Holder;
    source_column: number;
    sourceColumn: number;
    source_model: DataModel;
    sourceModel: DataModel;
    validate_changes: boolean;
    validateChanges: boolean;

    // Fields
    object: GObject.Object;
    priv: HolderPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'attribute-changed',
        callback: (_source: this, att_name: string, att_value: GObject.Value) => void
    ): number;

    connect_after(
        signal: 'attribute-changed',
        callback: (_source: this, att_name: string, att_value: GObject.Value) => void
    ): number;

    emit(signal: 'attribute-changed', att_name: string, att_value: any): void;

    connect(signal: 'changed', callback: (_source: this) => void): number;

    connect_after(signal: 'changed', callback: (_source: this) => void): number;

    emit(signal: 'changed'): void;

    connect(signal: 'source-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'source-changed', callback: (_source: this) => void): number;

    emit(signal: 'source-changed'): void;

    connect(signal: 'validate-change', callback: (_source: this, new_value: GObject.Value) => GLib.Error): number;

    connect_after(signal: 'validate-change', callback: (_source: this, new_value: GObject.Value) => GLib.Error): number;

    emit(signal: 'validate-change', new_value: any): void;

    // Constructors

    static ['new'](type: GObject.GType): Holder;

    // Members

    copy(): Holder;

    force_invalid(): void;

    force_invalid_e(error?: GLib.Error | null): void;

    get_alphanum_id(): string;

    get_attribute(attribute: string): unknown;

    get_bind(): Holder;

    get_default_value(): unknown;

    get_g_type(): GObject.GType;

    get_id(): string;

    get_not_null(): boolean;

    get_source_model(col: number): DataModel;

    get_value(): GObject.Value | null;

    get_value_str(dh?: DataHandler | null): string;

    is_valid(): boolean;

    is_valid_e(): boolean;

    set_attribute(attribute: string, value: any): void;

    set_bind(bind_to: Holder): boolean;

    set_default_value(value: any): void;

    set_not_null(not_null: boolean): void;

    set_source_model(model: DataModel, col: number): boolean;

    set_value(value?: GObject.Value | null): boolean;

    set_value_str(dh: DataHandler, value: string): boolean;

    set_value_to_default(): boolean;

    take_static_value(value: any, value_changed: boolean): unknown;

    take_value(value: any): boolean;

    value_is_default(): boolean;

    vfunc_att_changed(att_name: string, att_value: any): void;

    vfunc_changed(): void;

    vfunc_source_changed(): void;

    vfunc_validate_change(new_value: any): GLib.Error;

    static error_quark(): GLib.Quark;

    // Implemented Members

    lock(): void;

    trylock(): boolean;

    unlock(): void;

    vfunc_i_lock(): void;

    vfunc_i_trylock(): boolean;

    vfunc_i_unlock(): void;
}

export namespace MetaStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        catalog: string;
        cnc: Connection;
        cnc_string: string;
        cncString: string;
        schema: string;
    }
}

export class MetaStore extends GObject.Object {
    static $gtype: GObject.GType<MetaStore>;

    constructor(properties?: Partial<MetaStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MetaStore.ConstructorProperties>, ...args: any[]): void;

    // Properties
    catalog: string;
    cnc: Connection;
    cnc_string: string;
    cncString: string;
    schema: string;

    // Fields
    object: GObject.Object;
    priv: MetaStorePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'meta-changed', callback: (_source: this, changes: MetaStoreChange[]) => void): number;

    connect_after(signal: 'meta-changed', callback: (_source: this, changes: MetaStoreChange[]) => void): number;

    emit(signal: 'meta-changed', changes: MetaStoreChange[]): void;

    connect(signal: 'meta-reset', callback: (_source: this) => void): number;

    connect_after(signal: 'meta-reset', callback: (_source: this) => void): number;

    emit(signal: 'meta-reset'): void;

    connect(signal: 'suggest-update', callback: (_source: this, suggest: MetaContext) => GLib.Error): number;

    connect_after(signal: 'suggest-update', callback: (_source: this, suggest: MetaContext) => GLib.Error): number;

    emit(signal: 'suggest-update', suggest: MetaContext): void;

    // Constructors

    static ['new'](cnc_string?: string | null): MetaStore;

    static new_with_file(file_name: string): MetaStore;

    // Members

    create_modify_data_model(table_name: string): DataModel;

    declare_foreign_key(
        mstruct: MetaStruct | null,
        fk_name: string,
        catalog: string | null,
        schema: string | null,
        table: string,
        ref_catalog: string | null,
        ref_schema: string | null,
        ref_table: string,
        colnames: string[],
        ref_colnames: string[]
    ): boolean;

    extract(select_sql: string, vars?: GLib.HashTable<string, GObject.Value> | null): DataModel;

    get_attribute_value(att_name: string): [boolean, string];

    get_internal_connection(): Connection;

    get_version(): number;

    modify(
        table_name: string,
        new_data: DataModel | null,
        condition: string | null,
        value_names: string[],
        values: GObject.Value[]
    ): boolean;

    modify_with_context(context: MetaContext, new_data?: DataModel | null): boolean;

    schema_add_custom_object(xml_description: string): boolean;

    schema_get_all_tables(): string[];

    schema_get_depend_tables(table_name: string): string[];

    schema_get_structure(): MetaStruct;

    schema_remove_custom_object(obj_name: string): boolean;

    set_attribute_value(att_name: string, att_value?: string | null): boolean;

    set_identifiers_style(style: SqlIdentifierStyle): void;

    set_reserved_keywords_func(func?: SqlReservedKeywordsFunc | null): void;

    undeclare_foreign_key(
        mstruct: MetaStruct | null,
        fk_name: string,
        catalog: string | null,
        schema: string | null,
        table: string,
        ref_catalog: string | null,
        ref_schema: string | null,
        ref_table: string
    ): boolean;

    vfunc_meta_reset(): void;

    vfunc_suggest_update(suggest: MetaContext): GLib.Error;

    static error_quark(): GLib.Quark;

    static sql_identifier_quote(id: string, cnc: Connection): string;
}

export namespace MetaStruct {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        features: number;
        meta_store: MetaStore;
        metaStore: MetaStore;
    }
}

export class MetaStruct extends GObject.Object {
    static $gtype: GObject.GType<MetaStruct>;

    constructor(properties?: Partial<MetaStruct.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MetaStruct.ConstructorProperties>, ...args: any[]): void;

    // Properties
    features: number;
    meta_store: MetaStore;
    metaStore: MetaStore;

    // Fields
    object: GObject.Object;
    priv: MetaStructPrivate;

    // Constructors

    static ['new'](store: MetaStore, features: MetaStructFeature): MetaStruct;

    // Members

    complement(
        type: MetaDbObjectType,
        catalog: GObject.Value | null,
        schema: GObject.Value | null,
        name: any
    ): MetaDbObject;

    complement_all(): boolean;

    complement_default(): boolean;

    complement_depend(dbo: MetaDbObject): boolean;

    complement_schema(catalog?: GObject.Value | null, schema?: GObject.Value | null): boolean;

    dump_as_graph(info: MetaGraphInfo): string;

    get_all_db_objects(): MetaDbObject[];

    get_db_object(catalog: GObject.Value | null, schema: GObject.Value | null, name: any): MetaDbObject;

    load_from_xml_file(catalog: string | null, schema: string | null, xml_spec_file: string): boolean;

    sort_db_objects(sort_type: MetaSortType): boolean;

    static error_quark(): GLib.Quark;
}

export namespace PStmt {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class PStmt extends GObject.Object {
    static $gtype: GObject.GType<PStmt>;

    constructor(properties?: Partial<PStmt.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PStmt.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: PStmtPrivate;
    sql: string;
    param_ids: string[];
    ncols: number;
    types: GObject.GType;
    tmpl_columns: Column[];

    // Members

    copy_contents(dest: PStmt): void;

    get_gda_statement(): Statement;

    set_gda_statement(stmt?: Statement | null): void;
}

export namespace RepetitiveStatement {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        statement: Statement;
    }
}

export class RepetitiveStatement extends GObject.Object {
    static $gtype: GObject.GType<RepetitiveStatement>;

    constructor(properties?: Partial<RepetitiveStatement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RepetitiveStatement.ConstructorProperties>, ...args: any[]): void;

    // Properties
    statement: Statement;

    // Constructors

    static ['new'](stmt: Statement): RepetitiveStatement;

    // Members

    append_set(values: Set, make_copy: boolean): boolean;

    get_all_sets(): Set[];

    get_template_set(set: Set): boolean;
}

export namespace Row {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        nb_values: number;
        nbValues: number;
    }
}

export class Row extends GObject.Object {
    static $gtype: GObject.GType<Row>;

    constructor(properties?: Partial<Row.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Row.ConstructorProperties>, ...args: any[]): void;

    // Properties
    nb_values: number;
    nbValues: number;

    // Fields
    object: GObject.Object;
    priv: RowPrivate;

    // Constructors

    static ['new'](count: number): Row;

    // Members

    get_length(): number;

    get_value(num: number): GObject.Value | null;

    invalidate_value(value: any): void;

    invalidate_value_e(value: any, error?: GLib.Error | null): void;

    value_is_valid(value: any): boolean;

    value_is_valid_e(value: any): boolean;
}

export namespace ServerOperation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        connection: Connection;
        op_type: number;
        opType: number;
        provider: ServerProvider;
        spec_filename: string;
        specFilename: string;
    }
}

export class ServerOperation extends GObject.Object {
    static $gtype: GObject.GType<ServerOperation>;

    constructor(properties?: Partial<ServerOperation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServerOperation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection: Connection;
    op_type: number;
    opType: number;
    provider: ServerProvider;
    spec_filename: string;
    specFilename: string;

    // Fields
    object: GObject.Object;
    priv: ServerOperationPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'sequence-item-added',
        callback: (_source: this, seq_path: string, item_index: number) => void
    ): number;

    connect_after(
        signal: 'sequence-item-added',
        callback: (_source: this, seq_path: string, item_index: number) => void
    ): number;

    emit(signal: 'sequence-item-added', seq_path: string, item_index: number): void;

    connect(
        signal: 'sequence-item-remove',
        callback: (_source: this, seq_path: string, item_index: number) => void
    ): number;

    connect_after(
        signal: 'sequence-item-remove',
        callback: (_source: this, seq_path: string, item_index: number) => void
    ): number;

    emit(signal: 'sequence-item-remove', seq_path: string, item_index: number): void;

    // Constructors

    static ['new'](op_type: ServerOperationType, xml_file: string): ServerOperation;

    // Members

    add_item_to_sequence(seq_path: string): number;

    del_item_from_sequence(item_path: string): boolean;

    get_node_parent(path: string): string;

    get_node_path_portion(path: string): string;

    get_node_type(path: string, status?: ServerOperationNodeStatus | null): ServerOperationNodeType;

    get_op_type(): ServerOperationType;

    get_root_nodes(): string[];

    get_sequence_item_names(path: string): string[];

    get_sequence_max_size(path: string): number;

    get_sequence_min_size(path: string): number;

    get_sequence_name(path: string): string;

    get_sequence_size(path: string): number;

    get_sql_identifier_at(cnc: Connection | null, prov: ServerProvider | null, path: string): string;

    get_value_at(path: string): GObject.Value | null;

    is_valid(xml_file?: string | null): boolean;

    load_data_from_xml(node: libxml2.NodePtr): boolean;

    perform_create_database(provider?: string | null): boolean;

    perform_create_table(): boolean;

    perform_drop_database(provider?: string | null): boolean;

    perform_drop_table(): boolean;

    set_value_at(value: string | null, path: string): boolean;

    vfunc_seq_item_added(seq_path: string, item_index: number): void;

    vfunc_seq_item_remove(seq_path: string, item_index: number): void;

    static error_quark(): GLib.Quark;

    static op_type_to_string(type: ServerOperationType): string;

    static prepare_create_database(provider: string, db_name?: string | null): ServerOperation | null;

    static prepare_drop_database(provider: string, db_name?: string | null): ServerOperation | null;

    static prepare_drop_table(cnc: Connection, table_name: string): ServerOperation | null;

    static string_to_op_type(str: string): ServerOperationType;
}

export namespace ServerProvider {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class ServerProvider extends GObject.Object {
    static $gtype: GObject.GType<ServerProvider>;

    constructor(properties?: Partial<ServerProvider.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ServerProvider.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: ServerProviderPrivate;

    // Members

    create_operation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): ServerOperation | null;

    create_parser(cnc?: Connection | null): SqlParser;

    escape_string(cnc: Connection | null, str: string): string;

    find_file(inst_dir: string, filename: string): string;

    get_data_handler_dbms(cnc: Connection | null, for_type: string): DataHandler;

    get_data_handler_default(cnc: Connection | null, type: GObject.GType, dbms_type: string): DataHandler;

    get_data_handler_g_type(cnc: Connection | null, for_type: GObject.GType): DataHandler;

    get_default_dbms_type(cnc: Connection | null, type: GObject.GType): string | null;

    get_name(): string;

    get_server_version(cnc: Connection): string;

    get_version(): string;

    handler_declare(dh: DataHandler, cnc: Connection, g_type: GObject.GType, dbms_type: string): void;

    handler_find(cnc: Connection | null, g_type: GObject.GType, dbms_type?: string | null): DataHandler;

    internal_get_parser(): SqlParser;

    perform_operation(cnc: Connection | null, op: ServerOperation): boolean;

    perform_operation_default(cnc: Connection | null, op: ServerOperation): boolean;

    render_operation(cnc: Connection | null, op: ServerOperation): string | null;

    string_to_value(
        cnc: Connection | null,
        string: string,
        preferred_type: GObject.GType,
        dbms_type?: string | null
    ): unknown;

    supports_feature(cnc: Connection | null, feature: ConnectionFeature): boolean;

    supports_operation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): boolean;

    unescape_string(cnc: Connection | null, str: string): string;

    value_to_sql_string(cnc: Connection | null, from: any): string;

    vfunc_add_savepoint(cnc: Connection, name: string): boolean;

    vfunc_begin_transaction(cnc: Connection, name: string, level: TransactionIsolation): boolean;

    vfunc_cancel(cnc: Connection, task_id: number): boolean;

    vfunc_close_connection(cnc: Connection): boolean;

    vfunc_commit_transaction(cnc: Connection, name: string): boolean;

    vfunc_create_operation(
        cnc: Connection | null,
        type: ServerOperationType,
        options?: Set | null
    ): ServerOperation | null;

    vfunc_create_parser(cnc?: Connection | null): SqlParser;

    vfunc_delete_savepoint(cnc: Connection, name: string): boolean;

    vfunc_escape_string(cnc: Connection | null, str: string): string;

    vfunc_get_database(cnc: Connection): string;

    vfunc_get_def_dbms_type(cnc: Connection, g_type: GObject.GType): string;

    vfunc_get_name(): string;

    vfunc_get_server_version(cnc: Connection): string;

    vfunc_get_version(): string;

    vfunc_handle_async(cnc: Connection): boolean;

    vfunc_identifier_quote(cnc: Connection, id: string, for_meta_store: boolean, force_quotes: boolean): string;

    vfunc_is_busy(cnc: Connection): boolean;

    vfunc_render_operation(cnc: Connection | null, op: ServerOperation): string | null;

    vfunc_rollback_savepoint(cnc: Connection, name: string): boolean;

    vfunc_rollback_transaction(cnc: Connection, name: string): boolean;

    vfunc_statement_prepare(cnc: Connection, stmt: Statement): boolean;

    vfunc_supports_feature(cnc: Connection | null, feature: ConnectionFeature): boolean;

    vfunc_supports_operation(cnc: Connection | null, type: ServerOperationType, options?: Set | null): boolean;

    vfunc_unescape_string(cnc: Connection | null, str: string): string;

    static error_quark(): GLib.Quark;

    static load_file_contents(inst_dir: string, data_dir: string, filename: string): string;
}

export namespace Set {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        description: string;
        holders: any;
        id: string;
        name: string;
        validate_changes: boolean;
        validateChanges: boolean;
    }
}

export class Set extends GObject.Object {
    static $gtype: GObject.GType<Set>;

    constructor(properties?: Partial<Set.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Set.ConstructorProperties>, ...args: any[]): void;

    // Properties
    description: string;
    holders: any;
    id: string;
    name: string;
    validate_changes: boolean;
    validateChanges: boolean;

    // Fields
    object: GObject.Object;
    priv: SetPrivate;
    nodes_list: SetNode[];
    sources_list: SetSource[];
    groups_list: SetGroup[];

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'holder-attr-changed',
        callback: (_source: this, holder: Holder, attr_name: string, attr_value: GObject.Value) => void
    ): number;

    connect_after(
        signal: 'holder-attr-changed',
        callback: (_source: this, holder: Holder, attr_name: string, attr_value: GObject.Value) => void
    ): number;

    emit(signal: 'holder-attr-changed', holder: Holder, attr_name: string, attr_value: any): void;

    connect(signal: 'holder-changed', callback: (_source: this, object: Holder) => void): number;

    connect_after(signal: 'holder-changed', callback: (_source: this, object: Holder) => void): number;

    emit(signal: 'holder-changed', object: Holder): void;

    connect(signal: 'holder-type-set', callback: (_source: this, holder: Holder) => void): number;

    connect_after(signal: 'holder-type-set', callback: (_source: this, holder: Holder) => void): number;

    emit(signal: 'holder-type-set', holder: Holder): void;

    connect(signal: 'public-data-changed', callback: (_source: this) => void): number;

    connect_after(signal: 'public-data-changed', callback: (_source: this) => void): number;

    emit(signal: 'public-data-changed'): void;

    connect(signal: 'source-model-changed', callback: (_source: this, source: any | null) => void): number;

    connect_after(signal: 'source-model-changed', callback: (_source: this, source: any | null) => void): number;

    emit(signal: 'source-model-changed', source: any | null): void;

    connect(
        signal: 'validate-holder-change',
        callback: (_source: this, holder: Holder, new_value: GObject.Value) => GLib.Error
    ): number;

    connect_after(
        signal: 'validate-holder-change',
        callback: (_source: this, holder: Holder, new_value: GObject.Value) => GLib.Error
    ): number;

    emit(signal: 'validate-holder-change', holder: Holder, new_value: any): void;

    connect(signal: 'validate-set', callback: (_source: this) => GLib.Error): number;

    connect_after(signal: 'validate-set', callback: (_source: this) => GLib.Error): number;

    emit(signal: 'validate-set'): void;

    // Constructors

    static ['new'](holders: Holder[]): Set;

    static new_from_spec_node(xml_spec: libxml2.NodePtr): Set;

    static new_from_spec_string(xml_spec: string): Set;

    static new_read_only(holders: Holder[]): Set;

    // Members

    add_holder(holder: Holder): boolean;

    copy(): Set;

    get_group(holder: Holder): SetGroup;

    get_holder(holder_id: string): Holder;

    get_holder_value(holder_id: string): GObject.Value | null;

    get_node(holder: Holder): SetNode;

    get_nth_holder(pos: number): Holder;

    get_source(holder: Holder): SetSource;

    get_source_for_model(model: DataModel): SetSource;

    is_valid(): boolean;

    merge_with_set(set_to_merge: Set): void;

    remove_holder(holder: Holder): void;

    replace_source_model(source: SetSource, model: DataModel): void;

    vfunc_holder_attr_changed(holder: Holder, attr_name: string, attr_value: any): void;

    vfunc_holder_changed(holder: Holder): void;

    vfunc_holder_type_set(holder: Holder): void;

    vfunc_public_data_changed(): void;

    vfunc_source_model_changed(source: SetSource): void;

    vfunc_validate_holder_change(holder: Holder, new_value: any): GLib.Error;

    vfunc_validate_set(): GLib.Error;

    static error_quark(): GLib.Quark;
}

export namespace Short {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class Short {
    static $gtype: GObject.GType<Short>;

    constructor(properties?: Partial<Short.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Short.ConstructorProperties>, ...args: any[]): void;
}

export namespace SqlBuilder {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class SqlBuilder extends GObject.Object {
    static $gtype: GObject.GType<SqlBuilder>;

    constructor(properties?: Partial<SqlBuilder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SqlBuilder.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: SqlBuilderPrivate;

    // Constructors

    static ['new'](stmt_type: SqlStatementType): SqlBuilder;

    // Members

    add_case(
        test_expr: SqlBuilderId,
        else_expr: SqlBuilderId,
        when_array: SqlBuilderId[],
        then_array: SqlBuilderId[]
    ): SqlBuilderId;

    add_cond(op: SqlOperatorType, op1: SqlBuilderId, op2: SqlBuilderId, op3: SqlBuilderId): SqlBuilderId;

    add_cond_v(op: SqlOperatorType, op_ids: SqlBuilderId[]): SqlBuilderId;

    add_expr_value(dh?: DataHandler | null, value?: GObject.Value | null): SqlBuilderId;

    add_field_id(field_name: string, table_name?: string | null): SqlBuilderId;

    add_field_value_as_gvalue(field_name: string, value?: GObject.Value | null): void;

    add_field_value_id(field_id: SqlBuilderId, value_id: SqlBuilderId): void;

    add_function(func_name: string, args: SqlBuilderId[]): SqlBuilderId;

    add_id(str: string): SqlBuilderId;

    add_param(param_name: string, type: GObject.GType, nullok: boolean): SqlBuilderId;

    compound_add_sub_select_from_builder(subselect: SqlBuilder): void;

    compound_set_type(compound_type: SqlStatementCompoundType): void;

    get_statement(): Statement;

    import_expression_from_builder(query: SqlBuilder, expr_id: SqlBuilderId): SqlBuilderId;

    join_add_field(join_id: SqlBuilderId, field_name: string): void;

    select_add_field(field_name: string, table_name?: string | null, alias?: string | null): SqlBuilderId;

    select_add_target(table_name: string, alias?: string | null): SqlBuilderId;

    select_add_target_id(table_id: SqlBuilderId, alias?: string | null): SqlBuilderId;

    select_group_by(expr_id: SqlBuilderId): void;

    select_order_by(expr_id: SqlBuilderId, asc: boolean, collation_name?: string | null): void;

    select_set_distinct(distinct: boolean, expr_id: SqlBuilderId): void;

    select_set_having(cond_id: SqlBuilderId): void;

    select_set_limit(limit_count_expr_id: SqlBuilderId, limit_offset_expr_id: SqlBuilderId): void;

    set_table(table_name: string): void;

    set_where(cond_id: SqlBuilderId): void;

    static error_quark(): GLib.Quark;
}

export namespace SqlParser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        column_error: number;
        columnError: number;
        line_error: number;
        lineError: number;
        mode: number;
        tokenizer_flavour: number;
        tokenizerFlavour: number;
    }
}

export class SqlParser extends GObject.Object implements Lockable {
    static $gtype: GObject.GType<SqlParser>;

    constructor(properties?: Partial<SqlParser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SqlParser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    column_error: number;
    columnError: number;
    line_error: number;
    lineError: number;
    mode: number;
    tokenizer_flavour: number;
    tokenizerFlavour: number;

    // Fields
    object: GObject.Object;
    priv: SqlParserPrivate;

    // Constructors

    static ['new'](): SqlParser;

    // Members

    parse_file_as_batch(filename: string): Batch | null;

    parse_string(sql: string): [Statement | null, string | null];

    parse_string_as_batch(sql: string): [Batch | null, string | null];

    set_overflow_error(): void;

    set_syntax_error(): void;

    static error_quark(): GLib.Quark;

    // Implemented Members

    lock(): void;

    trylock(): boolean;

    unlock(): void;

    vfunc_i_lock(): void;

    vfunc_i_trylock(): boolean;

    vfunc_i_unlock(): void;
}

export namespace Statement {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        structure: any;
    }
}

export class Statement extends GObject.Object {
    static $gtype: GObject.GType<Statement>;

    constructor(properties?: Partial<Statement.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Statement.ConstructorProperties>, ...args: any[]): void;

    // Properties
    structure: any;

    // Fields
    object: GObject.Object;
    priv: StatementPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'checked', callback: (_source: this, object: Connection, p0: boolean) => void): number;

    connect_after(signal: 'checked', callback: (_source: this, object: Connection, p0: boolean) => void): number;

    emit(signal: 'checked', object: Connection, p0: boolean): void;

    connect(signal: 'reset', callback: (_source: this) => void): number;

    connect_after(signal: 'reset', callback: (_source: this) => void): number;

    emit(signal: 'reset'): void;

    // Constructors

    static ['new'](): Statement;

    // Members

    check_structure(): boolean;

    check_validity(cnc?: Connection | null): boolean;

    copy(): Statement;

    get_parameters(): [boolean, Set | null];

    get_statement_type(): SqlStatementType;

    is_useless(): boolean;

    normalize(cnc: Connection): boolean;

    serialize(): string;

    to_sql_extended(cnc: Connection | null, params: Set | null, flags: StatementSqlFlag): [string, Holder[] | null];

    to_sql_real(context: SqlRenderingContext): string;

    vfunc_checked(cnc: Connection, checked: boolean): void;

    vfunc_reset(): void;

    static error_quark(): GLib.Quark;
}

export namespace ThreadWrapper {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ThreadWrapper extends GObject.Object {
    static $gtype: GObject.GType<ThreadWrapper>;

    constructor(properties?: Partial<ThreadWrapper.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ThreadWrapper.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    priv: ThreadWrapperPrivate;

    // Constructors

    static ['new'](): ThreadWrapper;

    // Members

    cancel(id: number): boolean;

    connect_raw(
        instance: any | null,
        sig_name: string,
        private_thread: boolean,
        private_job: boolean,
        callback: ThreadWrapperCallback
    ): number;

    disconnect(id: number): void;

    execute(func: ThreadWrapperFunc, arg?: any | null, arg_destroy_func?: GLib.DestroyNotify | null): number;

    execute_void(func: ThreadWrapperVoidFunc, arg?: any | null, arg_destroy_func?: GLib.DestroyNotify | null): number;

    fetch_result(may_lock: boolean, exp_id: number): any | null;

    get_io_channel(): GLib.IOChannel;

    get_waiting_size(): number;

    iterate(may_block: boolean): void;

    steal_signal(id: number): void;

    unset_io_channel(): void;

    static error_quark(): GLib.Quark;
}

export namespace TransactionStatus {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class TransactionStatus extends GObject.Object {
    static $gtype: GObject.GType<TransactionStatus>;

    constructor(properties?: Partial<TransactionStatus.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TransactionStatus.ConstructorProperties>, ...args: any[]): void;

    // Fields
    object: GObject.Object;
    name: string;
    isolation_level: TransactionIsolation;
    state: TransactionStatusState;
    events: TransactionStatusEvent[];

    // Constructors

    static ['new'](name: string): TransactionStatus;

    // Members

    find(str: string, destev: TransactionStatusEvent): TransactionStatus | null;

    find_current(destev: TransactionStatusEvent, unnamed_only: boolean): TransactionStatus | null;

    free_events(event: TransactionStatusEvent, free_after: boolean): void;
}

export namespace Tree {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        is_list: boolean;
        isList: boolean;
    }
}

export class Tree extends GObject.Object {
    static $gtype: GObject.GType<Tree>;

    constructor(properties?: Partial<Tree.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Tree.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_list: boolean;
    isList: boolean;

    // Fields
    object: GObject.Object;
    priv: TreePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'node-changed', callback: (_source: this, node: TreeNode) => void): number;

    connect_after(signal: 'node-changed', callback: (_source: this, node: TreeNode) => void): number;

    emit(signal: 'node-changed', node: TreeNode): void;

    connect(signal: 'node-deleted', callback: (_source: this, node_path: string) => void): number;

    connect_after(signal: 'node-deleted', callback: (_source: this, node_path: string) => void): number;

    emit(signal: 'node-deleted', node_path: string): void;

    connect(signal: 'node-has-child-toggled', callback: (_source: this, node: TreeNode) => void): number;

    connect_after(signal: 'node-has-child-toggled', callback: (_source: this, node: TreeNode) => void): number;

    emit(signal: 'node-has-child-toggled', node: TreeNode): void;

    connect(signal: 'node-inserted', callback: (_source: this, node: TreeNode) => void): number;

    connect_after(signal: 'node-inserted', callback: (_source: this, node: TreeNode) => void): number;

    emit(signal: 'node-inserted', node: TreeNode): void;

    // Constructors

    static ['new'](): Tree;

    // Members

    add_manager(manager: TreeManager): void;

    clean(): void;

    dump(node?: TreeNode | null, stream?: any | null): void;

    get_node(tree_path: string, use_names: boolean): TreeNode | null;

    get_node_manager(node: TreeNode): TreeManager;

    get_node_path(node: TreeNode): string;

    get_nodes_in_path(tree_path: string | null, use_names: boolean): TreeNode[];

    set_attribute(attribute: string, value: any): void;

    update_all(): boolean;

    update_children(node?: TreeNode | null): boolean;

    update_part(node: TreeNode): boolean;

    vfunc_node_changed(node: TreeNode): void;

    vfunc_node_deleted(node_path: string): void;

    vfunc_node_has_child_toggled(node: TreeNode): void;

    vfunc_node_inserted(node: TreeNode): void;

    static error_quark(): GLib.Quark;
}

export namespace TreeManager {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        func: any;
        recursive: boolean;
    }
}

export class TreeManager extends GObject.Object {
    static $gtype: GObject.GType<TreeManager>;

    constructor(properties?: Partial<TreeManager.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeManager.ConstructorProperties>, ...args: any[]): void;

    // Properties
    func: any;
    recursive: boolean;

    // Fields
    object: GObject.Object;
    priv: TreeManagerPrivate;

    // Members

    add_manager(sub: TreeManager): void;

    add_new_node_attribute(attribute: string, value?: GObject.Value | null): void;

    create_node(parent?: TreeNode | null, name?: string | null): TreeNode;

    get_managers(): TreeManager[];

    static error_quark(): GLib.Quark;
}

export namespace TreeMgrColumns {
    export interface ConstructorProperties extends TreeManager.ConstructorProperties {
        [key: string]: any;

        connection: Connection;
        meta_store: MetaStore;
        metaStore: MetaStore;
        schema: string;
        table_name: string;
        tableName: string;
    }
}

export class TreeMgrColumns extends TreeManager {
    static $gtype: GObject.GType<TreeMgrColumns>;

    constructor(properties?: Partial<TreeMgrColumns.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeMgrColumns.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection: Connection;
    meta_store: MetaStore;
    metaStore: MetaStore;
    schema: string;
    table_name: string;
    tableName: string;

    // Fields
    object: TreeManager | any;
    priv: TreeMgrColumnsPriv | any;

    // Constructors

    static ['new'](cnc: Connection, schema: string, table_name: string): TreeMgrColumns;
}

export namespace TreeMgrLabel {
    export interface ConstructorProperties extends TreeManager.ConstructorProperties {
        [key: string]: any;

        label: string;
    }
}

export class TreeMgrLabel extends TreeManager {
    static $gtype: GObject.GType<TreeMgrLabel>;

    constructor(properties?: Partial<TreeMgrLabel.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeMgrLabel.ConstructorProperties>, ...args: any[]): void;

    // Properties
    label: string;

    // Fields
    object: TreeManager | any;
    priv: TreeMgrLabelPriv | any;

    // Constructors

    static ['new'](label: string): TreeMgrLabel;
}

export namespace TreeMgrLdap {
    export interface ConstructorProperties extends TreeManager.ConstructorProperties {
        [key: string]: any;

        dn: string;
    }
}

export class TreeMgrLdap extends TreeManager {
    static $gtype: GObject.GType<TreeMgrLdap>;

    constructor(properties?: Partial<TreeMgrLdap.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeMgrLdap.ConstructorProperties>, ...args: any[]): void;

    // Properties
    dn: string;

    // Fields
    object: TreeManager | any;
    priv: TreeMgrLdapPriv | any;

    // Constructors

    static ['new'](cnc: Connection, dn?: string | null): TreeMgrLdap;
}

export namespace TreeMgrSchemas {
    export interface ConstructorProperties extends TreeManager.ConstructorProperties {
        [key: string]: any;

        connection: Connection;
        meta_store: MetaStore;
        metaStore: MetaStore;
    }
}

export class TreeMgrSchemas extends TreeManager {
    static $gtype: GObject.GType<TreeMgrSchemas>;

    constructor(properties?: Partial<TreeMgrSchemas.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeMgrSchemas.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection: Connection;
    meta_store: MetaStore;
    metaStore: MetaStore;

    // Fields
    object: TreeManager | any;
    priv: TreeMgrSchemasPriv | any;

    // Constructors

    static ['new'](cnc: Connection): TreeMgrSchemas;
}

export namespace TreeMgrSelect {
    export interface ConstructorProperties extends TreeManager.ConstructorProperties {
        [key: string]: any;

        connection: Connection;
        params: Set;
        statement: Statement;
    }
}

export class TreeMgrSelect extends TreeManager {
    static $gtype: GObject.GType<TreeMgrSelect>;

    constructor(properties?: Partial<TreeMgrSelect.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeMgrSelect.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection: Connection;
    params: Set;
    statement: Statement;

    // Fields
    object: TreeManager | any;
    priv: TreeMgrSelectPriv | any;

    // Constructors

    static ['new'](cnc: Connection, stmt: Statement, params: Set): TreeMgrSelect;
}

export namespace TreeMgrTables {
    export interface ConstructorProperties extends TreeManager.ConstructorProperties {
        [key: string]: any;

        connection: Connection;
        meta_store: MetaStore;
        metaStore: MetaStore;
        schema: string;
    }
}

export class TreeMgrTables extends TreeManager {
    static $gtype: GObject.GType<TreeMgrTables>;

    constructor(properties?: Partial<TreeMgrTables.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeMgrTables.ConstructorProperties>, ...args: any[]): void;

    // Properties
    connection: Connection;
    meta_store: MetaStore;
    metaStore: MetaStore;
    schema: string;

    // Fields
    object: TreeManager | any;
    priv: TreeMgrTablesPriv | any;

    // Constructors

    static ['new'](cnc: Connection, schema?: string | null): TreeMgrTables;
}

export namespace TreeNode {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        name: string;
    }
}

export class TreeNode extends GObject.Object {
    static $gtype: GObject.GType<TreeNode>;

    constructor(properties?: Partial<TreeNode.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TreeNode.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;

    // Fields
    object: GObject.Object;
    priv: TreeNodePrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'node-changed', callback: (_source: this, node: TreeNode) => void): number;

    connect_after(signal: 'node-changed', callback: (_source: this, node: TreeNode) => void): number;

    emit(signal: 'node-changed', node: TreeNode): void;

    connect(signal: 'node-deleted', callback: (_source: this, relative_path: string) => void): number;

    connect_after(signal: 'node-deleted', callback: (_source: this, relative_path: string) => void): number;

    emit(signal: 'node-deleted', relative_path: string): void;

    connect(signal: 'node-has-child-toggled', callback: (_source: this, node: TreeNode) => void): number;

    connect_after(signal: 'node-has-child-toggled', callback: (_source: this, node: TreeNode) => void): number;

    emit(signal: 'node-has-child-toggled', node: TreeNode): void;

    connect(signal: 'node-inserted', callback: (_source: this, node: TreeNode) => void): number;

    connect_after(signal: 'node-inserted', callback: (_source: this, node: TreeNode) => void): number;

    emit(signal: 'node-inserted', node: TreeNode): void;

    // Constructors

    static ['new'](name?: string | null): TreeNode;

    // Members

    fetch_attribute(attribute: string): unknown;

    get_child_index(index: number): TreeNode;

    get_child_name(name: string): TreeNode;

    get_children(): TreeNode[];

    get_node_attribute(attribute: string): unknown;

    get_parent(): TreeNode;

    set_node_attribute(attribute: string, value?: GObject.Value | null): void;

    vfunc_dump_children(prefix: string, in_string: GLib.String): void;

    vfunc_dump_header(): string;

    vfunc_node_changed(node: TreeNode): void;

    vfunc_node_deleted(relative_path: string): void;

    vfunc_node_has_child_toggled(node: TreeNode): void;

    vfunc_node_inserted(node: TreeNode): void;

    static error_quark(): GLib.Quark;
}

export namespace UShort {
    export interface ConstructorProperties {
        [key: string]: any;
    }
}

export class UShort {
    static $gtype: GObject.GType<UShort>;

    constructor(properties?: Partial<UShort.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UShort.ConstructorProperties>, ...args: any[]): void;
}

export namespace XaTransaction {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        format_id: number;
        formatId: number;
        transaction_id: string;
        transactionId: string;
    }
}

export class XaTransaction extends GObject.Object {
    static $gtype: GObject.GType<XaTransaction>;

    constructor(properties?: Partial<XaTransaction.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<XaTransaction.ConstructorProperties>, ...args: any[]): void;

    // Properties
    format_id: number;
    formatId: number;
    transaction_id: string;
    transactionId: string;

    // Fields
    object: GObject.Object;
    priv: XaTransactionPrivate;

    // Constructors

    static ['new'](format: number, global_transaction_id: string): XaTransaction;

    // Members

    begin(): boolean;

    commit(): [boolean, Connection[] | null];

    commit_recovered(): [boolean, Connection[] | null];

    register_connection(cnc: Connection, branch: string): boolean;

    rollback(): boolean;

    unregister_connection(cnc: Connection): void;

    static error_quark(): GLib.Quark;
}

export class BatchPrivate {
    static $gtype: GObject.GType<BatchPrivate>;

    constructor(copy: BatchPrivate);
}

export class Binary {
    static $gtype: GObject.GType<Binary>;

    constructor(copy: Binary);

    // Fields
    data: Uint8Array;
    binary_length: number;

    // Members
    to_string(maxlen: number): string;

    static copy(boxed?: any | null): any | null;

    static free(boxed?: any | null): void;
}

export class Blob {
    static $gtype: GObject.GType<Blob>;

    constructor(copy: Blob);

    // Fields
    data: Binary;
    op: BlobOp;

    // Members
    set_op(op?: BlobOp | null): void;

    to_string(maxlen: number): string;

    static copy(boxed?: any | null): any | null;

    static free(boxed?: any | null): void;
}

export class ColumnPrivate {
    static $gtype: GObject.GType<ColumnPrivate>;

    constructor(copy: ColumnPrivate);
}

export class ConfigPrivate {
    static $gtype: GObject.GType<ConfigPrivate>;

    constructor(copy: ConfigPrivate);
}

export class ConnectionEventPrivate {
    static $gtype: GObject.GType<ConnectionEventPrivate>;

    constructor(copy: ConnectionEventPrivate);
}

export class ConnectionPrivate {
    static $gtype: GObject.GType<ConnectionPrivate>;

    constructor(copy: ConnectionPrivate);
}

export class DataAccessWrapperPrivate {
    static $gtype: GObject.GType<DataAccessWrapperPrivate>;

    constructor(copy: DataAccessWrapperPrivate);
}

export class DataComparatorPrivate {
    static $gtype: GObject.GType<DataComparatorPrivate>;

    constructor(copy: DataComparatorPrivate);
}

export class DataModelArrayPrivate {
    static $gtype: GObject.GType<DataModelArrayPrivate>;

    constructor(copy: DataModelArrayPrivate);
}

export class DataModelBdbPrivate {
    static $gtype: GObject.GType<DataModelBdbPrivate>;

    constructor(copy: DataModelBdbPrivate);
}

export class DataModelDirPrivate {
    static $gtype: GObject.GType<DataModelDirPrivate>;

    constructor(copy: DataModelDirPrivate);
}

export class DataModelImportPrivate {
    static $gtype: GObject.GType<DataModelImportPrivate>;

    constructor(copy: DataModelImportPrivate);
}

export class DataModelIterPrivate {
    static $gtype: GObject.GType<DataModelIterPrivate>;

    constructor(copy: DataModelIterPrivate);
}

export class DataModelLdapPrivate {
    static $gtype: GObject.GType<DataModelLdapPrivate>;

    constructor(copy: DataModelLdapPrivate);
}

export class DataPivotPrivate {
    static $gtype: GObject.GType<DataPivotPrivate>;

    constructor(copy: DataPivotPrivate);
}

export class DataProxyPrivate {
    static $gtype: GObject.GType<DataProxyPrivate>;

    constructor(copy: DataProxyPrivate);
}

export class DataSelectPrivate {
    static $gtype: GObject.GType<DataSelectPrivate>;

    constructor(copy: DataSelectPrivate);
}

export class Diff {
    static $gtype: GObject.GType<Diff>;

    constructor(copy: Diff);

    // Fields
    type: DiffType;
    old_row: number;
    new_row: number;
    values: GLib.HashTable<any, any>;
}

export class DsnInfo {
    static $gtype: GObject.GType<DsnInfo>;

    constructor();
    constructor(
        properties?: Partial<{
            name?: string;
            provider?: string;
            description?: string;
            cnc_string?: string;
            auth_string?: string;
            is_system?: boolean;
        }>
    );

    constructor(copy: DsnInfo);

    // Fields
    name: string;
    provider: string;
    description: string;
    cnc_string: string;
    auth_string: string;
    is_system: boolean;

    // Constructors
    static ['new'](): DsnInfo;

    // Members
    copy(): DsnInfo;

    free(): void;
}

export class GeometricPoint {
    static $gtype: GObject.GType<GeometricPoint>;

    constructor(
        properties?: Partial<{
            x?: number;
            y?: number;
        }>
    );

    constructor(copy: GeometricPoint);

    // Fields
    x: number;
    y: number;

    // Members
    static copy(boxed?: any | null): any | null;

    static free(boxed?: any | null): void;
}

export class HandlerBinPriv {
    static $gtype: GObject.GType<HandlerBinPriv>;

    constructor(copy: HandlerBinPriv);
}

export class HandlerBooleanPriv {
    static $gtype: GObject.GType<HandlerBooleanPriv>;

    constructor(copy: HandlerBooleanPriv);
}

export class HandlerNumericalPriv {
    static $gtype: GObject.GType<HandlerNumericalPriv>;

    constructor(copy: HandlerNumericalPriv);
}

export class HandlerStringPriv {
    static $gtype: GObject.GType<HandlerStringPriv>;

    constructor(copy: HandlerStringPriv);
}

export class HandlerTimePriv {
    static $gtype: GObject.GType<HandlerTimePriv>;

    constructor(copy: HandlerTimePriv);
}

export class HandlerTypePriv {
    static $gtype: GObject.GType<HandlerTypePriv>;

    constructor(copy: HandlerTypePriv);
}

export class HolderPrivate {
    static $gtype: GObject.GType<HolderPrivate>;

    constructor(copy: HolderPrivate);
}

export class MetaContext {
    static $gtype: GObject.GType<MetaContext>;

    constructor();
    constructor(copy: MetaContext);

    // Fields
    table_name: string;
    size: number;
    column_names: string[];
    column_values: GObject.Value[];
    columns: GLib.HashTable<string, GObject.Value>;

    // Constructors
    static ['new'](): MetaContext;

    // Members
    copy(): MetaContext;

    free(): void;

    get_table(): string;

    set_column(column: string, value: any, cnc?: Connection | null): void;

    set_columns(columns: GLib.HashTable<string, GObject.Value>, cnc?: Connection | null): void;

    set_table(table: string): void;
}

export class MetaDbObject {
    static $gtype: GObject.GType<MetaDbObject>;

    constructor(copy: MetaDbObject);

    // Fields
    obj_type: MetaDbObjectType;
    outdated: boolean;
    obj_catalog: string;
    obj_schema: string;
    obj_name: string;
    obj_short_name: string;
    obj_full_name: string;
    obj_owner: string;
    depend_list: MetaDbObject[];
}

export class MetaStoreChange {
    static $gtype: GObject.GType<MetaStoreChange>;

    constructor(copy: MetaStoreChange);

    // Fields
    c_type: MetaStoreChangeType;
    table_name: string;
    keys: GLib.HashTable<string, GObject.Value>;
}

export class MetaStoreClassPrivate {
    static $gtype: GObject.GType<MetaStoreClassPrivate>;

    constructor(copy: MetaStoreClassPrivate);
}

export class MetaStorePrivate {
    static $gtype: GObject.GType<MetaStorePrivate>;

    constructor(copy: MetaStorePrivate);
}

export class MetaStructPrivate {
    static $gtype: GObject.GType<MetaStructPrivate>;

    constructor(copy: MetaStructPrivate);
}

export class MetaTable {
    static $gtype: GObject.GType<MetaTable>;

    constructor(copy: MetaTable);

    // Fields
    columns: MetaTableColumn[];
    pk_cols_array: number;
    pk_cols_nb: number;
    reverse_fk_list: MetaTableForeignKey[];
    fk_list: MetaTableForeignKey[];
}

export class MetaTableColumn {
    static $gtype: GObject.GType<MetaTableColumn>;

    constructor(copy: MetaTableColumn);

    // Fields
    column_name: string;
    column_type: string;
    gtype: GObject.GType;
    pkey: boolean;
    nullok: boolean;
    default_value: string;

    // Members
    foreach_attribute(func: AttributesManagerFunc): void;

    get_attribute(attribute: string): unknown;

    set_attribute(attribute: string, value?: GObject.Value | null, destroy?: GLib.DestroyNotify | null): void;
}

export class MetaTableForeignKey {
    static $gtype: GObject.GType<MetaTableForeignKey>;

    constructor(copy: MetaTableForeignKey);

    // Fields
    meta_table: MetaDbObject;
    depend_on: MetaDbObject;
    cols_nb: number;
    fk_cols_array: number;
    fk_names_array: string;
    ref_pk_cols_array: number;
    ref_pk_names_array: string;
    on_update_policy: MetaForeignKeyPolicy;
    on_delete_policy: MetaForeignKeyPolicy;
    declared: boolean;
    fk_name: string;
}

export class MetaView {
    static $gtype: GObject.GType<MetaView>;

    constructor(copy: MetaView);

    // Fields
    table: MetaTable;
    view_def: string;
    is_updatable: boolean;
}

export class Numeric {
    static $gtype: GObject.GType<Numeric>;

    constructor();
    constructor(
        properties?: Partial<{
            number?: string;
            precision?: number;
            width?: number;
            reserved?: any;
        }>
    );

    constructor(copy: Numeric);

    // Fields
    number: string;
    precision: number;
    width: number;
    reserved: any;

    // Constructors
    static ['new'](): Numeric;

    // Members
    copy(): Numeric;

    free(): void;

    get_double(): number;

    get_precision(): number;

    get_string(): string | null;

    get_width(): number;

    set_double(number: number): void;

    set_from_string(str: string): void;

    set_precision(precision: number): void;

    set_width(width: number): void;
}

export class PStmtPrivate {
    static $gtype: GObject.GType<PStmtPrivate>;

    constructor(copy: PStmtPrivate);
}

export class ProviderInfo {
    static $gtype: GObject.GType<ProviderInfo>;

    constructor(copy: ProviderInfo);

    // Fields
    id: string;
    location: string;
    description: string;
    dsn_params: Set;
    auth_params: Set;
}

export class QuarkList {
    static $gtype: GObject.GType<QuarkList>;

    constructor();
    constructor(copy: QuarkList);

    // Constructors
    static ['new'](): QuarkList;

    static new_from_string(string: string): QuarkList;

    // Members
    add_from_string(string: string, cleanup: boolean): void;

    clear(): void;

    copy(): QuarkList;

    find(name: string): string;

    foreach(func: GLib.HFunc): void;

    free(): void;

    protect_values(): void;

    remove(name: string): void;
}

export class RowPrivate {
    static $gtype: GObject.GType<RowPrivate>;

    constructor(copy: RowPrivate);
}

export class ServerOperationNode {
    static $gtype: GObject.GType<ServerOperationNode>;

    constructor(copy: ServerOperationNode);

    // Fields
    type: ServerOperationNodeType;
    status: ServerOperationNodeStatus;
    plist: Set;
    model: DataModel;
    column: Column;
    param: Holder;
    priv: any;
}

export class ServerOperationPrivate {
    static $gtype: GObject.GType<ServerOperationPrivate>;

    constructor(copy: ServerOperationPrivate);
}

export class ServerProviderHandlerInfo {
    static $gtype: GObject.GType<ServerProviderHandlerInfo>;

    constructor(copy: ServerProviderHandlerInfo);

    // Fields
    cnc: Connection;
    g_type: GObject.GType;
    dbms_type: string;
}

export class ServerProviderInfo {
    static $gtype: GObject.GType<ServerProviderInfo>;

    constructor(copy: ServerProviderInfo);
}

export class ServerProviderMeta {
    static $gtype: GObject.GType<ServerProviderMeta>;

    constructor(copy: ServerProviderMeta);
}

export class ServerProviderPrivate {
    static $gtype: GObject.GType<ServerProviderPrivate>;

    constructor(copy: ServerProviderPrivate);

    // Fields
    data_handlers: GLib.HashTable<any, any>;
    parser: SqlParser;
}

export class ServerProviderXa {
    static $gtype: GObject.GType<ServerProviderXa>;

    constructor(copy: ServerProviderXa);
}

export class SetGroup {
    static $gtype: GObject.GType<SetGroup>;

    constructor(node: SetNode);
    constructor(copy: SetGroup);

    // Fields
    nodes: SetNode[];
    nodes_source: SetSource;

    // Constructors
    static ['new'](node: SetNode): SetGroup;

    // Members
    add_node(node: SetNode): void;

    copy(): SetGroup;

    free(): void;

    get_n_nodes(): number;

    get_node(): SetNode;

    get_nodes(): SetNode[];

    get_source(): SetSource;

    set_source(source: SetSource): void;
}

export class SetNode {
    static $gtype: GObject.GType<SetNode>;

    constructor(holder: Holder);
    constructor(copy: SetNode);

    // Fields
    holder: Holder;
    source_model: DataModel;
    source_column: number;

    // Constructors
    static ['new'](holder: Holder): SetNode;

    // Members
    copy(): SetNode;

    free(): void;

    get_data_model(): DataModel;

    get_holder(): Holder;

    get_source_column(): number;

    set_data_model(model?: DataModel | null): void;

    set_holder(holder: Holder): void;

    set_source_column(column: number): void;
}

export class SetPrivate {
    static $gtype: GObject.GType<SetPrivate>;

    constructor(copy: SetPrivate);
}

export class SetSource {
    static $gtype: GObject.GType<SetSource>;

    constructor(model: DataModel);
    constructor(copy: SetSource);

    // Fields
    data_model: DataModel;
    nodes: SetNode[];

    // Constructors
    static ['new'](model: DataModel): SetSource;

    // Members
    add_node(node: SetNode): void;

    copy(): SetSource;

    free(): void;

    get_data_model(): DataModel;

    get_n_nodes(): number;

    get_nodes(): SetNode[];

    set_data_model(model: DataModel): void;
}

export class SqlBuilderPrivate {
    static $gtype: GObject.GType<SqlBuilderPrivate>;

    constructor(copy: SqlBuilderPrivate);
}

export class SqlParserIface {
    static $gtype: GObject.GType<SqlParserIface>;

    constructor(copy: SqlParserIface);

    // Fields
    parser: SqlParser;
    parsed_statement: SqlStatement;
}

export class SqlParserPrivate {
    static $gtype: GObject.GType<SqlParserPrivate>;

    constructor(copy: SqlParserPrivate);
}

export class SqlRenderingContext {
    static $gtype: GObject.GType<SqlRenderingContext>;

    constructor(copy: SqlRenderingContext);

    // Fields
    flags: StatementSqlFlag;
    params: Set;
    params_used: Holder[];
    provider: ServerProvider;
    cnc: Connection;
    render_value: SqlRenderingValue;
}

export class SqlStatement {
    static $gtype: GObject.GType<SqlStatement>;

    constructor(copy: SqlStatement);

    // Members
    compound_set_type(type: SqlStatementCompoundType): void;

    compound_take_stmt(s: SqlStatement): void;
}

export class SqlStatementDelete {
    static $gtype: GObject.GType<SqlStatementDelete>;

    constructor(copy: SqlStatementDelete);
}

export class SqlStatementInsert {
    static $gtype: GObject.GType<SqlStatementInsert>;

    constructor(copy: SqlStatementInsert);
}

export class SqlStatementSelect {
    static $gtype: GObject.GType<SqlStatementSelect>;

    constructor(copy: SqlStatementSelect);
}

export class SqlStatementTransaction {
    static $gtype: GObject.GType<SqlStatementTransaction>;

    constructor(copy: SqlStatementTransaction);
}

export class SqlStatementUnknown {
    static $gtype: GObject.GType<SqlStatementUnknown>;

    constructor(copy: SqlStatementUnknown);
}

export class SqlStatementUpdate {
    static $gtype: GObject.GType<SqlStatementUpdate>;

    constructor(copy: SqlStatementUpdate);
}

export class StatementPrivate {
    static $gtype: GObject.GType<StatementPrivate>;

    constructor(copy: StatementPrivate);
}

export class ThreadNotification {
    static $gtype: GObject.GType<ThreadNotification>;

    constructor(copy: ThreadNotification);

    // Fields
    type: ThreadNotificationType;
    job_id: number;
}

export class ThreadWrapperPrivate {
    static $gtype: GObject.GType<ThreadWrapperPrivate>;

    constructor(copy: ThreadWrapperPrivate);
}

export class Time {
    static $gtype: GObject.GType<Time>;

    constructor(
        properties?: Partial<{
            hour?: number;
            minute?: number;
            second?: number;
            fraction?: number;
            timezone?: number;
        }>
    );

    constructor(copy: Time);

    // Fields
    hour: number;
    minute: number;
    second: number;
    fraction: number;
    timezone: number;

    // Members
    change_timezone(ntz: number): void;

    valid(): boolean;

    static copy(boxed?: any | null): any | null;

    static free(boxed?: any | null): void;
}

export class Timestamp {
    static $gtype: GObject.GType<Timestamp>;

    constructor(
        properties?: Partial<{
            year?: number;
            month?: number;
            day?: number;
            hour?: number;
            minute?: number;
            second?: number;
            fraction?: number;
            timezone?: number;
        }>
    );

    constructor(copy: Timestamp);

    // Fields
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
    second: number;
    fraction: number;
    timezone: number;

    // Members
    change_timezone(ntz: number): void;

    valid(): boolean;

    static copy(boxed?: any | null): any | null;

    static free(boxed?: any | null): void;
}

export class TransactionStatusEvent {
    static $gtype: GObject.GType<TransactionStatusEvent>;

    constructor(copy: TransactionStatusEvent);

    // Fields
    trans: TransactionStatus;
    type: TransactionStatusEventType;
    conn_event: ConnectionEvent;
}

export class TreeManagerPrivate {
    static $gtype: GObject.GType<TreeManagerPrivate>;

    constructor(copy: TreeManagerPrivate);
}

export class TreeMgrColumnsPriv {
    static $gtype: GObject.GType<TreeMgrColumnsPriv>;

    constructor(copy: TreeMgrColumnsPriv);
}

export class TreeMgrLabelPriv {
    static $gtype: GObject.GType<TreeMgrLabelPriv>;

    constructor(copy: TreeMgrLabelPriv);
}

export class TreeMgrLdapPriv {
    static $gtype: GObject.GType<TreeMgrLdapPriv>;

    constructor(copy: TreeMgrLdapPriv);
}

export class TreeMgrSchemasPriv {
    static $gtype: GObject.GType<TreeMgrSchemasPriv>;

    constructor(copy: TreeMgrSchemasPriv);
}

export class TreeMgrSelectPriv {
    static $gtype: GObject.GType<TreeMgrSelectPriv>;

    constructor(copy: TreeMgrSelectPriv);
}

export class TreeMgrTablesPriv {
    static $gtype: GObject.GType<TreeMgrTablesPriv>;

    constructor(copy: TreeMgrTablesPriv);
}

export class TreeNodePrivate {
    static $gtype: GObject.GType<TreeNodePrivate>;

    constructor(copy: TreeNodePrivate);
}

export class TreePrivate {
    static $gtype: GObject.GType<TreePrivate>;

    constructor(copy: TreePrivate);
}

export class XaTransactionId {
    static $gtype: GObject.GType<XaTransactionId>;

    constructor(copy: XaTransactionId);

    // Fields
    format: number;
    gtrid_length: number;
    bqual_length: number;
    data: number[];

    // Members
    to_string(): string;
}

export class XaTransactionPrivate {
    static $gtype: GObject.GType<XaTransactionPrivate>;

    constructor(copy: XaTransactionPrivate);
}

export interface DataHandlerNamespace {
    $gtype: GObject.GType<DataHandler>;
    prototype: DataHandlerPrototype;

    get_default(for_type: GObject.GType): DataHandler;
}

export type DataHandler = DataHandlerPrototype;

export interface DataHandlerPrototype extends GObject.Object {
    // Members

    accepts_g_type(type: GObject.GType): boolean;

    get_descr(): string;

    get_sane_init_value(type: GObject.GType): GObject.Value | null;

    get_sql_from_value(value?: GObject.Value | null): string;

    get_str_from_value(value?: GObject.Value | null): string;

    get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    get_value_from_str(str: string | null, type: GObject.GType): unknown;

    vfunc_accepts_g_type(type: GObject.GType): boolean;

    vfunc_get_descr(): string;

    vfunc_get_sane_init_value(type: GObject.GType): GObject.Value | null;

    vfunc_get_sql_from_value(value?: GObject.Value | null): string;

    vfunc_get_str_from_value(value?: GObject.Value | null): string;

    vfunc_get_value_from_sql(sql: string | null, type: GObject.GType): unknown;

    vfunc_get_value_from_str(str: string | null, type: GObject.GType): unknown;
}

export const DataHandler: DataHandlerNamespace;

export interface DataModelNamespace {
    $gtype: GObject.GType<DataModel>;
    prototype: DataModelPrototype;

    error_quark(): GLib.Quark;
}

export type DataModel = DataModelPrototype;

export interface DataModelPrototype extends GObject.Object {
    // Members

    add_data_from_xml_node(node: libxml2.NodePtr): boolean;

    append_row(): number;

    append_values(values?: GObject.Value[] | null): number;

    array_copy_model(): DataModelArray | null;

    array_copy_model_ext(cols: number[]): DataModelArray | null;

    create_iter(): DataModelIter;

    describe_column(col: number): Column | null;

    dump(to_stream?: any | null): void;

    dump_as_string(): string;

    export_to_file(
        format: DataModelIOFormat,
        file: string,
        cols: number[] | null,
        rows: number[] | null,
        options: Set
    ): boolean;

    export_to_string(format: DataModelIOFormat, cols: number[] | null, rows: number[] | null, options: Set): string;

    freeze(): void;

    get_access_flags(): DataModelAccessFlags;

    get_attributes_at(col: number, row: number): ValueAttribute;

    get_column_index(name: string): number;

    get_column_name(col: number): string;

    get_column_title(col: number): string;

    get_exceptions(): GLib.Error[];

    get_n_columns(): number;

    get_n_rows(): number;

    get_notify(): boolean;

    get_row_from_values(values: GObject.Value[], cols_index: number[]): number;

    get_typed_value_at(col: number, row: number, expected_type: GObject.GType, nullok: boolean): GObject.Value | null;

    get_value_at(col: number, row: number): GObject.Value | null;

    import_from_file(file: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    import_from_model(from: DataModel, overwrite: boolean, cols_trans?: GLib.HashTable<number, number> | null): boolean;

    import_from_string(string: string, cols_trans: GLib.HashTable<number, number> | null, options: Set): boolean;

    iter_at_row(iter: DataModelIter, row: number): boolean;

    iter_next(iter: DataModelIter): boolean;

    iter_prev(iter: DataModelIter): boolean;

    iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    remove_row(row: number): boolean;

    reset(): void;

    row_inserted(row: number): void;

    row_removed(row: number): void;

    row_updated(row: number): void;

    send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    set_column_name(col: number, name: string): void;

    set_column_title(col: number, title: string): void;

    set_notify(do_notify_changes: boolean): void;

    set_value_at(col: number, row: number, value: any): boolean;

    set_values(row: number, values?: GObject.Value[] | null): boolean;

    thaw(): void;

    vfunc_access_changed(): void;

    vfunc_changed(): void;

    vfunc_i_append_row(): number;

    vfunc_i_append_values(values?: GObject.Value[] | null): number;

    vfunc_i_create_iter(): DataModelIter;

    vfunc_i_describe_column(col: number): Column | null;

    vfunc_i_find_row(values: GObject.Value[], cols_index: number[]): number;

    vfunc_i_get_access_flags(): DataModelAccessFlags;

    vfunc_i_get_attributes_at(col: number, row: number): ValueAttribute;

    vfunc_i_get_exceptions(): GLib.Error[];

    vfunc_i_get_n_columns(): number;

    vfunc_i_get_n_rows(): number;

    vfunc_i_get_notify(): boolean;

    vfunc_i_get_value_at(col: number, row: number): GObject.Value | null;

    vfunc_i_iter_at_row(iter: DataModelIter, row: number): boolean;

    vfunc_i_iter_next(iter: DataModelIter): boolean;

    vfunc_i_iter_prev(iter: DataModelIter): boolean;

    vfunc_i_iter_set_value(iter: DataModelIter, col: number, value: any): boolean;

    vfunc_i_remove_row(row: number): boolean;

    vfunc_i_send_hint(hint: DataModelHint, hint_value?: GObject.Value | null): void;

    vfunc_i_set_notify(do_notify_changes: boolean): void;

    vfunc_i_set_value_at(col: number, row: number, value: any): boolean;

    vfunc_i_set_values(row: number, values?: GObject.Value[] | null): boolean;

    vfunc_reset(): void;

    vfunc_row_inserted(row: number): void;

    vfunc_row_removed(row: number): void;

    vfunc_row_updated(row: number): void;
}

export const DataModel: DataModelNamespace;

export interface LockableNamespace {
    $gtype: GObject.GType<Lockable>;
    prototype: LockablePrototype;
}

export type Lockable = LockablePrototype;

export interface LockablePrototype extends GObject.Object {
    // Members

    lock(): void;

    trylock(): boolean;

    unlock(): void;

    vfunc_i_lock(): void;

    vfunc_i_trylock(): boolean;

    vfunc_i_unlock(): void;
}

export const Lockable: LockableNamespace;

export type Mutex = GLib.RecMutex;
export type SqlBuilderId = number;
export type SqlErrorType = SqlError;
