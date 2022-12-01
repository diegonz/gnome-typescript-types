/**
 * FolksDummy 0.6
 *
 * Generated from 0.6
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Folks from './folks';
import * as Gee from './gee';
import * as GLib from './glib';
import * as Gio from './gio';
import * as GObject from './gobject';

export namespace Backend {
    export interface ConstructorProperties extends Folks.Backend.ConstructorProperties {
        [key: string]: any;
    }
}

export class Backend extends Folks.Backend {
    static $gtype: GObject.GType<Backend>;

    constructor(properties?: Partial<Backend.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Backend.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Backend;

    // Members

    register_persona_stores(stores: Gee.Set, enable_stores: boolean): void;

    unregister_persona_stores(stores: Gee.Set): void;
}

export namespace FullPersona {
    export interface ConstructorProperties extends Persona.ConstructorProperties {
        [key: string]: any;
    }
}

export class FullPersona
    extends Persona
    implements Folks.AntiLinkable,
        Folks.AvatarDetails,
        Folks.BirthdayDetails,
        Folks.EmailDetails,
        Folks.FavouriteDetails,
        Folks.GenderDetails,
        Folks.GroupDetails,
        Folks.ImDetails,
        Folks.LocalIdDetails,
        Folks.NameDetails,
        Folks.NoteDetails,
        Folks.PhoneDetails,
        Folks.RoleDetails,
        Folks.UrlDetails,
        Folks.PostalAddressDetails,
        Folks.WebServiceDetails {
    static $gtype: GObject.GType<FullPersona>;

    constructor(properties?: Partial<FullPersona.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FullPersona.ConstructorProperties>, ...args: any[]): void;

    // Implemented Properties

    anti_links: Gee.Set;
    antiLinks: Gee.Set;
    avatar: Gio.LoadableIcon;
    birthday: GLib.DateTime;
    calendar_event_id: string;
    calendarEventId: string;
    email_addresses: Gee.Set;
    emailAddresses: Gee.Set;
    is_favourite: boolean;
    isFavourite: boolean;
    gender: Folks.Gender;
    groups: Gee.Set;
    im_addresses: Gee.MultiMap;
    imAddresses: Gee.MultiMap;
    local_ids: Gee.Set;
    localIds: Gee.Set;
    structured_name: Folks.StructuredName;
    structuredName: Folks.StructuredName;
    full_name: string;
    fullName: string;
    nickname: string;
    notes: Gee.Set;
    phone_numbers: Gee.Set;
    phoneNumbers: Gee.Set;
    roles: Gee.Set;
    urls: Gee.Set;
    postal_addresses: Gee.Set;
    postalAddresses: Gee.Set;
    web_service_addresses: Gee.MultiMap;
    webServiceAddresses: Gee.MultiMap;

    // Constructors

    static ['new'](
        store: PersonaStore,
        contact_id: string,
        is_user: boolean,
        linkable_properties: string[]
    ): FullPersona;

    // Members

    update_gender(gender: Folks.Gender): void;

    update_calendar_event_id(calendar_event_id?: string | null): void;

    update_birthday(birthday?: GLib.DateTime | null): void;

    update_roles(roles: Gee.Set): void;

    update_groups(groups: Gee.Set): void;

    update_web_service_addresses(web_service_addresses: Gee.MultiMap): void;

    update_email_addresses(email_addresses: Gee.Set): void;

    update_notes(notes: Gee.Set): void;

    update_full_name(full_name: string): void;

    update_nickname(nickname: string): void;

    update_structured_name(structured_name?: Folks.StructuredName | null): void;

    update_avatar(avatar?: Gio.LoadableIcon | null): void;

    update_urls(urls: Gee.Set): void;

    update_im_addresses(im_addresses: Gee.MultiMap): void;

    update_phone_numbers(phone_numbers: Gee.Set): void;

    update_postal_addresses(postal_addresses: Gee.Set): void;

    update_local_ids(local_ids: Gee.Set): void;

    update_is_favourite(is_favourite: boolean): void;

    update_anti_links(anti_links: Gee.Set): void;

    // Implemented Members

    change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_anti_links_finish(_res_: Gio.AsyncResult): void;

    has_anti_link_with_persona(other_persona: Folks.Persona): boolean;

    add_anti_links(other_personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    add_anti_links_finish(_res_: Gio.AsyncResult): void;

    remove_anti_links(other_personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    remove_anti_links_finish(_res_: Gio.AsyncResult): void;

    add_global_anti_link(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    add_global_anti_link_finish(_res_: Gio.AsyncResult): void;

    remove_global_anti_link(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    remove_global_anti_link_finish(_res_: Gio.AsyncResult): void;

    has_global_anti_link(): boolean;

    get_anti_links(): Gee.Set;

    set_anti_links(value: Gee.Set): void;

    vfunc_change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_anti_links_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_anti_links(): Gee.Set;

    vfunc_set_anti_links(value: Gee.Set): void;

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

    change_gender(gender: Folks.Gender, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_gender_finish(_res_: Gio.AsyncResult): void;

    get_gender(): Folks.Gender;

    set_gender(value: Folks.Gender): void;

    vfunc_change_gender(gender: Folks.Gender, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_gender_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_gender(): Folks.Gender;

    vfunc_set_gender(value: Folks.Gender): void;

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

    change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_im_addresses_finish(_res_: Gio.AsyncResult): void;

    get_im_addresses(): Gee.MultiMap;

    set_im_addresses(value: Gee.MultiMap): void;

    vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_im_addresses(): Gee.MultiMap;

    vfunc_set_im_addresses(value: Gee.MultiMap): void;

    change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_local_ids_finish(_res_: Gio.AsyncResult): void;

    get_local_ids(): Gee.Set;

    set_local_ids(value: Gee.Set): void;

    vfunc_change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_local_ids(): Gee.Set;

    vfunc_set_local_ids(value: Gee.Set): void;

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

    change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_notes_finish(_res_: Gio.AsyncResult): void;

    get_notes(): Gee.Set;

    set_notes(value: Gee.Set): void;

    vfunc_change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_notes_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_notes(): Gee.Set;

    vfunc_set_notes(value: Gee.Set): void;

    change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_phone_numbers_finish(_res_: Gio.AsyncResult): void;

    get_phone_numbers(): Gee.Set;

    set_phone_numbers(value: Gee.Set): void;

    vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_phone_numbers(): Gee.Set;

    vfunc_set_phone_numbers(value: Gee.Set): void;

    change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_roles_finish(_res_: Gio.AsyncResult): void;

    get_roles(): Gee.Set;

    set_roles(value: Gee.Set): void;

    vfunc_change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_roles_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_roles(): Gee.Set;

    vfunc_set_roles(value: Gee.Set): void;

    change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_urls_finish(_res_: Gio.AsyncResult): void;

    get_urls(): Gee.Set;

    set_urls(value: Gee.Set): void;

    vfunc_change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_urls_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_urls(): Gee.Set;

    vfunc_set_urls(value: Gee.Set): void;

    change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_postal_addresses_finish(_res_: Gio.AsyncResult): void;

    get_postal_addresses(): Gee.Set;

    set_postal_addresses(value: Gee.Set): void;

    vfunc_change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_postal_addresses(): Gee.Set;

    vfunc_set_postal_addresses(value: Gee.Set): void;

    change_web_service_addresses(
        web_service_addresses: Gee.MultiMap,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    change_web_service_addresses_finish(_res_: Gio.AsyncResult): void;

    get_web_service_addresses(): Gee.MultiMap;

    set_web_service_addresses(value: Gee.MultiMap): void;

    vfunc_change_web_service_addresses(
        web_service_addresses: Gee.MultiMap,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_change_web_service_addresses_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_web_service_addresses(): Gee.MultiMap;

    vfunc_set_web_service_addresses(value: Gee.MultiMap): void;
}

export namespace PersonaStore {
    export type AddPersonaFromDetailsMock = (persona: Persona) => number;
    export type RemovePersonaMock = (persona: Persona) => number;
    export type PrepareMock = () => number;

    export interface ConstructorProperties extends Folks.PersonaStore.ConstructorProperties {
        [key: string]: any;

        persona_type: GObject.GType;
        personaType: GObject.GType;
    }
}

export class PersonaStore extends Folks.PersonaStore {
    static $gtype: GObject.GType<PersonaStore>;

    constructor(properties?: Partial<PersonaStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PersonaStore.ConstructorProperties>, ...args: any[]): void;

    // Properties
    persona_type: GObject.GType;
    personaType: GObject.GType;

    // Constructors

    static ['new'](id: string, display_name: string, always_writeable_properties: string[]): PersonaStore;

    // Members

    update_capabilities(
        can_add_personas: Folks.MaybeBool,
        can_alias_personas: Folks.MaybeBool,
        can_remove_personas: Folks.MaybeBool
    ): void;

    freeze_personas_changed(): void;

    thaw_personas_changed(): void;

    register_personas(personas: Gee.Set): void;

    unregister_personas(personas: Gee.Set): void;

    reach_quiescence(): void;

    update_is_user_set_default(is_user_set_default: boolean): void;

    update_trust_level(trust_level: Folks.PersonaStoreTrust): void;

    set_add_persona_from_details_mock(mock?: PersonaStore.AddPersonaFromDetailsMock | null): void;

    set_remove_persona_mock(mock?: PersonaStore.RemovePersonaMock | null): void;

    set_prepare_mock(mock?: PersonaStore.PrepareMock | null): void;

    get_persona_type(): GObject.GType;

    set_persona_type(value: GObject.GType): void;
}

export namespace Persona {
    export type ChangePropertyCallback = () => void;

    export interface ConstructorProperties extends Folks.Persona.ConstructorProperties {
        [key: string]: any;

        property_change_delay: number;
        propertyChangeDelay: number;
    }
}

export class Persona extends Folks.Persona {
    static $gtype: GObject.GType<Persona>;

    constructor(properties?: Partial<Persona.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Persona.ConstructorProperties>, ...args: any[]): void;

    // Properties
    property_change_delay: number;
    propertyChangeDelay: number;

    // Constructors

    static ['new'](store: PersonaStore, contact_id: string, is_user: boolean, linkable_properties: string[]): Persona;

    // Members

    update_writeable_properties(writeable_properties: string[]): void;

    update_linkable_properties(linkable_properties: string[]): void;

    change_property(
        property_name: string,
        callback: Persona.ChangePropertyCallback,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    change_property_finish(_res_: Gio.AsyncResult): void;

    get_property_change_delay(): number;

    set_property_change_delay(value: number): void;
}

export class BackendPrivate {
    static $gtype: GObject.GType<BackendPrivate>;

    constructor(copy: BackendPrivate);
}

export class FullPersonaPrivate {
    static $gtype: GObject.GType<FullPersonaPrivate>;

    constructor(copy: FullPersonaPrivate);
}

export class PersonaStorePrivate {
    static $gtype: GObject.GType<PersonaStorePrivate>;

    constructor(copy: PersonaStorePrivate);
}

export class PersonaPrivate {
    static $gtype: GObject.GType<PersonaPrivate>;

    constructor(copy: PersonaPrivate);
}
