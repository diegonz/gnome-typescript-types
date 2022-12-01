/**
 * AvahiCore 0.6
 *
 * Generated from 0.6
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';

export function server_get_host_name(): string;

export namespace Protocol {
    export const $gtype: GObject.GType<Protocol>;
}

export enum Protocol {
    INET = 0,
    INET6 = 1,
    UNSPEC = -1,
}

export namespace PublishFlags {
    export const $gtype: GObject.GType<PublishFlags>;
}

export enum PublishFlags {
    UNIQUE = 1,
    NO_PROBE = 2,
    NO_ANNOUNCE = 4,
    ALLOW_MULTIPLE = 8,
    NO_REVERSE = 16,
    NO_COOKIE = 32,
    UPDATE = 64,
    USE_WIDE_AREA = 128,
    USE_MULTICAST = 256,
}

export class StringList {
    static $gtype: GObject.GType<StringList>;

    constructor(copy: StringList);
}

export class Address {
    static $gtype: GObject.GType<Address>;

    constructor(copy: Address);
}

export class Client {
    static $gtype: GObject.GType<Client>;

    constructor(copy: Client);
}

export type IfIndex = number;
