/**
 * GnomeKeyring 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as GLib from './glib';

export const ITEM_APPLICATION_SECRET: number;
export const ITEM_INFO_ALL: number;
export const ITEM_TYPE_MASK: number;
export const SESSION: string;

export function acl_copy(list: AccessControl[]): AccessControl[];

export function acl_free(acl: AccessControl[]): void;

export function attribute_list_append_string(attributes: AttributeList, name: string, value: string): void;

export function attribute_list_append_uint32(attributes: AttributeList, name: string, value: number): void;

export function attribute_list_copy(attributes: AttributeList): AttributeList;

export function attribute_list_free(attributes: AttributeList): void;

export function attribute_list_get_type(): GObject.GType;

export function attribute_list_new(): AttributeList;

export function attribute_list_to_glist(attributes: AttributeList): Attribute[];

export function cancel_request(request?: any | null): void;

export function change_password_sync(keyring: string, original?: string | null, password?: string | null): Result;

export function create_sync(keyring_name: string, password?: string | null): Result;

export function daemon_prepare_environment_sync(): Result;

export function daemon_set_display_sync(display: string): Result;

export function delete_sync(keyring: string): Result;

export function find_items_sync(type: ItemType, attributes: AttributeList): [Result, Found[]];

export function find_network_password_sync(
    user: string | null,
    domain: string | null,
    server: string | null,
    object: string | null,
    protocol: string | null,
    authtype: string | null,
    port: number
): [Result, NetworkPasswordData[]];

export function found_list_free(found_list: Found[]): void;

export function free_password(password: string): void;

export function get_default_keyring_sync(): [Result, string];

export function get_info_sync(keyring: string | null): [Result, Info];

export function is_available(): boolean;

export function item_ac_get_access_type(ac: AccessControl): AccessType;

export function item_ac_get_display_name(ac: AccessControl): string;

export function item_ac_get_path_name(ac: AccessControl): string;

export function item_ac_set_access_type(ac: AccessControl, value: AccessType): void;

export function item_ac_set_display_name(ac: AccessControl, value: string): void;

export function item_ac_set_path_name(ac: AccessControl, value: string): void;

export function item_create_sync(
    keyring: string | null,
    type: ItemType,
    display_name: string,
    attributes: AttributeList,
    secret: string,
    update_if_exists: boolean
): [Result, number];

export function item_delete_sync(keyring: string | null, id: number): Result;

export function item_get_acl_sync(keyring: string | null, id: number): [Result, AccessControl[]];

export function item_get_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result;

export function item_get_info_full_sync(keyring: string | null, id: number, flags: number): [Result, ItemInfo];

export function item_get_info_sync(keyring: string | null, id: number): [Result, ItemInfo];

export function item_grant_access_rights_sync(
    keyring: string | null,
    display_name: string,
    full_path: string,
    id: number,
    rights: AccessType
): Result;

export function item_set_acl_sync(keyring: string | null, id: number, acl: AccessControl[]): Result;

export function item_set_attributes_sync(keyring: string | null, id: number, attributes: AttributeList): Result;

export function item_set_info_sync(keyring: string | null, id: number, info: ItemInfo): Result;

export function list_item_ids_sync(keyring: string | null): [Result, number[]];

export function list_keyring_names_sync(): [Result, string[]];

export function lock_all_sync(): Result;

export function lock_sync(keyring?: string | null): Result;

export function network_password_free(data?: NetworkPasswordData | null): void;

export function network_password_list_free(list: NetworkPasswordData[]): void;

export function result_to_message(res: Result): string;

export function set_default_keyring_sync(keyring: string): Result;

export function set_info_sync(keyring: string | null, info: Info): Result;

export function set_network_password_sync(
    keyring: string | null,
    user: string | null,
    domain: string | null,
    server: string | null,
    object: string | null,
    protocol: string | null,
    authtype: string | null,
    port: number,
    password: string
): [Result, number];

export function string_list_free(strings: string[]): void;

export function unlock_sync(keyring?: string | null, password?: string | null): Result;

export type OperationDoneCallback = (result: Result) => void;
export type OperationGetAttributesCallback = (result: Result, attributes: AttributeList) => void;
export type OperationGetIntCallback = (result: Result, val: number) => void;
export type OperationGetItemInfoCallback = (result: Result, info: ItemInfo) => void;
export type OperationGetKeyringInfoCallback = (result: Result, info: Info) => void;
export type OperationGetStringCallback = (result: Result, string?: string | null) => void;

export namespace AccessRestriction {
    export const $gtype: GObject.GType<AccessRestriction>;
}

export enum AccessRestriction {
    ASK = 0,
    DENY = 1,
    ALLOW = 2,
}

export namespace AttributeType {
    export const $gtype: GObject.GType<AttributeType>;
}

export enum AttributeType {
    STRING = 0,
    UINT32 = 1,
}

export namespace ItemType {
    export const $gtype: GObject.GType<ItemType>;
}

export enum ItemType {
    GENERIC_SECRET = 0,
    NETWORK_PASSWORD = 1,
    NOTE = 2,
    CHAINED_KEYRING_PASSWORD = 3,
    ENCRYPTION_KEY_PASSWORD = 4,
    PK_STORAGE = 256,
    LAST_TYPE = 257,
}

export namespace Result {
    export const $gtype: GObject.GType<Result>;
}

export enum Result {
    OK = 0,
    DENIED = 1,
    NO_KEYRING_DAEMON = 2,
    ALREADY_UNLOCKED = 3,
    NO_SUCH_KEYRING = 4,
    BAD_ARGUMENTS = 5,
    IO_ERROR = 6,
    CANCELLED = 7,
    KEYRING_ALREADY_EXISTS = 8,
    NO_MATCH = 9,
}

export namespace AccessType {
    export const $gtype: GObject.GType<AccessType>;
}

export enum AccessType {
    READ = 1,
    WRITE = 2,
    REMOVE = 4,
}

export namespace ItemInfoFlags {
    export const $gtype: GObject.GType<ItemInfoFlags>;
}

export enum ItemInfoFlags {
    BASICS = 0,
    SECRET = 1,
}

export class AccessControl {
    static $gtype: GObject.GType<AccessControl>;

    constructor(application: ApplicationRef, types_allowed: AccessType);
    constructor(copy: AccessControl);

    // Constructors
    static ['new'](application: ApplicationRef, types_allowed: AccessType): AccessControl;

    // Members
    copy(): AccessControl;

    free(): void;
}

export class ApplicationRef {
    static $gtype: GObject.GType<ApplicationRef>;

    constructor();
    constructor(copy: ApplicationRef);

    // Constructors
    static ['new'](): ApplicationRef;

    // Members
    copy(): ApplicationRef;

    free(): void;
}

export class Attribute {
    static $gtype: GObject.GType<Attribute>;

    constructor(copy: Attribute);

    // Fields
    name: string;
    type: AttributeType;

    // Members
    get_string(): string;

    get_uint32(): number;

    static list_append_string(attributes: AttributeList, name: string, value: string): void;

    static list_append_uint32(attributes: AttributeList, name: string, value: number): void;

    static list_copy(attributes: AttributeList): AttributeList;

    static list_free(attributes: AttributeList): void;

    static list_new(): AttributeList;

    static list_to_glist(attributes: AttributeList): Attribute[];
}

export class Found {
    static $gtype: GObject.GType<Found>;

    constructor(copy: Found);

    // Fields
    keyring: string;
    item_id: number;
    attributes: AttributeList;
    secret: string;

    // Members
    copy(): Found;

    free(): void;

    static list_free(found_list: Found[]): void;
}

export class Info {
    static $gtype: GObject.GType<Info>;

    constructor(copy: Info);

    // Members
    copy(): Info;

    free(): void;

    get_ctime(): number;

    get_is_locked(): boolean;

    get_lock_on_idle(): boolean;

    get_lock_timeout(): number;

    get_mtime(): number;

    set_lock_on_idle(value: boolean): void;

    set_lock_timeout(value: number): void;
}

export class ItemInfo {
    static $gtype: GObject.GType<ItemInfo>;

    constructor();
    constructor(copy: ItemInfo);

    // Constructors
    static ['new'](): ItemInfo;

    // Members
    copy(): ItemInfo;

    free(): void;

    get_ctime(): number;

    get_display_name(): string;

    get_mtime(): number;

    get_secret(): string;

    get_type(): ItemType;

    set_display_name(value: string): void;

    set_secret(value: string): void;

    set_type(type: ItemType): void;
}

export class NetworkPasswordData {
    static $gtype: GObject.GType<NetworkPasswordData>;

    constructor(
        properties?: Partial<{
            keyring?: string;
            item_id?: number;
            protocol?: string;
            server?: string;
            object?: string;
            authtype?: string;
            port?: number;
            user?: string;
            domain?: string;
            password?: string;
        }>
    );

    constructor(copy: NetworkPasswordData);

    // Fields
    keyring: string;
    item_id: number;
    protocol: string;
    server: string;
    object: string;
    authtype: string;
    port: number;
    user: string;
    domain: string;
    password: string;
}

export class PasswordSchema {
    static $gtype: GObject.GType<PasswordSchema>;

    constructor(copy: PasswordSchema);

    // Fields
    item_type: ItemType;
    attributes: PasswordSchemaAttribute[];
    reserved1: any;
    reserved2: any;
    reserved3: any;
}

export class PasswordSchemaAttribute {
    static $gtype: GObject.GType<PasswordSchemaAttribute>;

    constructor(copy: PasswordSchemaAttribute);

    // Fields
    name: string;
    type: AttributeType;
}

export type AttributeList = GLib.Array;
