/**
 * FolksTelepathy 0.6
 *
 * Generated from 0.6
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Folks from './folks';
import * as TelepathyGLib from './telepathyglib';
import * as Gee from './gee';
import * as GLib from './glib';
import * as GObject from './gobject';
import * as Gio from './gio';

export namespace PersonaStore {
    export interface ConstructorProperties extends Folks.PersonaStore.ConstructorProperties {
        [key: string]: any;

        account: TelepathyGLib.Account;
    }
}

export class PersonaStore extends Folks.PersonaStore {
    static $gtype: GObject.GType<PersonaStore>;

    constructor(properties?: Partial<PersonaStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PersonaStore.ConstructorProperties>, ...args: any[]): void;

    // Properties
    account: TelepathyGLib.Account;

    // Constructors

    static ['new'](account: TelepathyGLib.Account): PersonaStore;

    // Members

    get_account(): TelepathyGLib.Account;

    static list_persona_stores(): Gee.Map;

    static dup_for_account(account: TelepathyGLib.Account): PersonaStore;
}

export namespace Persona {
    export interface ConstructorProperties extends Folks.Persona.ConstructorProperties {
        [key: string]: any;

        is_in_contact_list: boolean;
        isInContactList: boolean;
        contact: TelepathyGLib.Contact;
    }
}

export class Persona
    extends Folks.Persona
    implements Folks.AliasDetails,
        Folks.AvatarDetails,
        Folks.BirthdayDetails,
        Folks.EmailDetails,
        Folks.FavouriteDetails,
        Folks.GroupDetails,
        Folks.InteractionDetails,
        Folks.ImDetails,
        Folks.NameDetails,
        Folks.PhoneDetails,
        Folks.PresenceDetails,
        Folks.UrlDetails {
    static $gtype: GObject.GType<Persona>;

    constructor(properties?: Partial<Persona.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Persona.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_in_contact_list: boolean;
    isInContactList: boolean;
    contact: TelepathyGLib.Contact;

    // Implemented Properties

    alias: string;
    avatar: Gio.LoadableIcon;
    birthday: GLib.DateTime;
    calendar_event_id: string;
    calendarEventId: string;
    email_addresses: Gee.Set;
    emailAddresses: Gee.Set;
    is_favourite: boolean;
    isFavourite: boolean;
    groups: Gee.Set;
    im_interaction_count: number;
    imInteractionCount: number;
    last_im_interaction_datetime: GLib.DateTime;
    lastImInteractionDatetime: GLib.DateTime;
    call_interaction_count: number;
    callInteractionCount: number;
    last_call_interaction_datetime: GLib.DateTime;
    lastCallInteractionDatetime: GLib.DateTime;
    im_addresses: Gee.MultiMap;
    imAddresses: Gee.MultiMap;
    structured_name: Folks.StructuredName;
    structuredName: Folks.StructuredName;
    full_name: string;
    fullName: string;
    nickname: string;
    phone_numbers: Gee.Set;
    phoneNumbers: Gee.Set;
    presence_type: Folks.PresenceType;
    presenceType: Folks.PresenceType;
    presence_message: string;
    presenceMessage: string;
    client_types: string[];
    clientTypes: string[];
    presence_status: string;
    presenceStatus: string;
    urls: Gee.Set;

    // Constructors

    static ['new'](contact: TelepathyGLib.Contact, store: PersonaStore): Persona;

    // Members

    get_is_in_contact_list(): boolean;

    set_is_in_contact_list(value: boolean): void;

    get_contact(): TelepathyGLib.Contact | null;

    static dup_for_contact(contact: TelepathyGLib.Contact): Persona | null;

    // Implemented Members

    change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_alias_finish(_res_: Gio.AsyncResult): void;

    get_alias(): string;

    set_alias(value: string): void;

    vfunc_change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_alias_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_alias(): string;

    vfunc_set_alias(value: string): void;

    change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_avatar_finish(_res_: Gio.AsyncResult): void;

    get_avatar(): Gio.LoadableIcon | null;

    set_avatar(value?: Gio.LoadableIcon | null): void;

    vfunc_change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_avatar(): Gio.LoadableIcon | null;

    vfunc_set_avatar(value?: Gio.LoadableIcon | null): void;

    change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_birthday_finish(_res_: Gio.AsyncResult): void;

    change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_calendar_event_id_finish(_res_: Gio.AsyncResult): void;

    get_birthday(): GLib.DateTime | null;

    set_birthday(value?: GLib.DateTime | null): void;

    get_calendar_event_id(): string | null;

    set_calendar_event_id(value?: string | null): void;

    vfunc_change_birthday(birthday?: GLib.DateTime | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_birthday_finish(_res_: Gio.AsyncResult): void;

    vfunc_change_calendar_event_id(event_id?: string | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_calendar_event_id_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_birthday(): GLib.DateTime | null;

    vfunc_set_birthday(value?: GLib.DateTime | null): void;

    vfunc_get_calendar_event_id(): string | null;

    vfunc_set_calendar_event_id(value?: string | null): void;

    change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_email_addresses_finish(_res_: Gio.AsyncResult): void;

    get_email_addresses(): Gee.Set;

    set_email_addresses(value: Gee.Set): void;

    vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_email_addresses(): Gee.Set;

    vfunc_set_email_addresses(value: Gee.Set): void;

    change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_is_favourite_finish(_res_: Gio.AsyncResult): void;

    get_is_favourite(): boolean;

    set_is_favourite(value: boolean): void;

    vfunc_change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_is_favourite(): boolean;

    vfunc_set_is_favourite(value: boolean): void;

    change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_group_finish(_res_: Gio.AsyncResult): void;

    change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_groups_finish(_res_: Gio.AsyncResult): void;

    get_groups(): Gee.Set;

    set_groups(value: Gee.Set): void;

    vfunc_change_group(group: string, is_member: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_group_finish(_res_: Gio.AsyncResult): void;

    vfunc_change_groups(groups: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_groups_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_groups(): Gee.Set;

    vfunc_set_groups(value: Gee.Set): void;

    get_im_interaction_count(): number;

    get_last_im_interaction_datetime(): GLib.DateTime | null;

    get_call_interaction_count(): number;

    get_last_call_interaction_datetime(): GLib.DateTime | null;

    vfunc_get_im_interaction_count(): number;

    vfunc_get_last_im_interaction_datetime(): GLib.DateTime | null;

    vfunc_get_call_interaction_count(): number;

    vfunc_get_last_call_interaction_datetime(): GLib.DateTime | null;

    change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_im_addresses_finish(_res_: Gio.AsyncResult): void;

    get_im_addresses(): Gee.MultiMap;

    set_im_addresses(value: Gee.MultiMap): void;

    vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_im_addresses(): Gee.MultiMap;

    vfunc_set_im_addresses(value: Gee.MultiMap): void;

    change_structured_name(name?: Folks.StructuredName | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_structured_name_finish(_res_: Gio.AsyncResult): void;

    change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_full_name_finish(_res_: Gio.AsyncResult): void;

    change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_nickname_finish(_res_: Gio.AsyncResult): void;

    get_structured_name(): Folks.StructuredName | null;

    set_structured_name(value?: Folks.StructuredName | null): void;

    get_full_name(): string;

    set_full_name(value: string): void;

    get_nickname(): string;

    set_nickname(value: string): void;

    vfunc_change_structured_name(
        name?: Folks.StructuredName | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void;

    vfunc_change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void;

    vfunc_change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_structured_name(): Folks.StructuredName | null;

    vfunc_set_structured_name(value?: Folks.StructuredName | null): void;

    vfunc_get_full_name(): string;

    vfunc_set_full_name(value: string): void;

    vfunc_get_nickname(): string;

    vfunc_set_nickname(value: string): void;

    change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_phone_numbers_finish(_res_: Gio.AsyncResult): void;

    get_phone_numbers(): Gee.Set;

    set_phone_numbers(value: Gee.Set): void;

    vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_phone_numbers(): Gee.Set;

    vfunc_set_phone_numbers(value: Gee.Set): void;

    is_online(): boolean;

    get_presence_type(): Folks.PresenceType;

    set_presence_type(value: Folks.PresenceType): void;

    get_presence_message(): string;

    set_presence_message(value: string): void;

    get_client_types(): string[];

    set_client_types(value: string[]): void;

    get_presence_status(): string;

    set_presence_status(value: string): void;

    vfunc_get_presence_type(): Folks.PresenceType;

    vfunc_set_presence_type(value: Folks.PresenceType): void;

    vfunc_get_presence_message(): string;

    vfunc_set_presence_message(value: string): void;

    vfunc_get_client_types(): string[];

    vfunc_set_client_types(value: string[]): void;

    vfunc_get_presence_status(): string;

    vfunc_set_presence_status(value: string): void;

    change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_urls_finish(_res_: Gio.AsyncResult): void;

    get_urls(): Gee.Set;

    set_urls(value: Gee.Set): void;

    vfunc_change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_urls_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_urls(): Gee.Set;

    vfunc_set_urls(value: Gee.Set): void;
}

export class PersonaStorePrivate {
    static $gtype: GObject.GType<PersonaStorePrivate>;

    constructor(copy: PersonaStorePrivate);
}

export class PersonaPrivate {
    static $gtype: GObject.GType<PersonaPrivate>;

    constructor(copy: PersonaPrivate);
}
