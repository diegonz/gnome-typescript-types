/**
 * Folks 0.6
 *
 * Generated from 0.6
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gee from './gee';
import * as Gio from './gio';
import * as GLib from './glib';

export namespace Gender {
    export const $gtype: GObject.GType<Gender>;
}

export enum Gender {
    UNSPECIFIED = 0,
    MALE = 1,
    FEMALE = 2,
}

export namespace TrustLevel {
    export const $gtype: GObject.GType<TrustLevel>;
}

export enum TrustLevel {
    NONE = 0,
    PERSONAS = 1,
}

export namespace PersonaStoreTrust {
    export const $gtype: GObject.GType<PersonaStoreTrust>;
}

export enum PersonaStoreTrust {
    NONE = 0,
    PARTIAL = 1,
    FULL = 2,
}

export namespace PersonaDetail {
    export const $gtype: GObject.GType<PersonaDetail>;
}

export enum PersonaDetail {
    INVALID = -1,
    ALIAS = 0,
    AVATAR = 0,
    BIRTHDAY = 1,
    EMAIL_ADDRESSES = 2,
    FULL_NAME = 3,
    GENDER = 4,
    IM_ADDRESSES = 5,
    IS_FAVOURITE = 6,
    LOCAL_IDS = 7,
    LOCATION = 8,
    NICKNAME = 9,
    NOTES = 10,
    PHONE_NUMBERS = 11,
    POSTAL_ADDRESSES = 12,
    ROLES = 13,
    STRUCTURED_NAME = 14,
    URLS = 15,
    WEB_SERVICE_ADDRESSES = 16,
    GROUPS = 17,
    IM_INTERACTION_COUNT = 18,
    LAST_IM_INTERACTION_DATETIME = 19,
    CALL_INTERACTION_COUNT = 20,
    LAST_CALL_INTERACTION_DATETIME = 21,
    ANTI_LINKS = 22,
    EXTENDED_INFO = 23,
}

export namespace MatchResult {
    export const $gtype: GObject.GType<MatchResult>;
}

export enum MatchResult {
    NONE = -1,
    VERY_LOW = 0,
    LOW = 1,
    MEDIUM = 2,
    HIGH = 3,
    VERY_HIGH = 4,
    MIN,
    MAX,
}

export namespace PresenceType {
    export const $gtype: GObject.GType<PresenceType>;
}

export enum PresenceType {
    UNSET = 0,
    OFFLINE = 1,
    AVAILABLE = 2,
    AWAY = 3,
    EXTENDED_AWAY = 4,
    HIDDEN = 5,
    BUSY = 6,
    UNKNOWN = 7,
    ERROR = 8,
}

export namespace MaybeBool {
    export const $gtype: GObject.GType<MaybeBool>;
}

export enum MaybeBool {
    UNSET = 0,
    FALSE = 1,
    TRUE = 2,
}

export class ImDetailsError extends GLib.Error {
    static $gtype: GObject.GType<ImDetailsError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ImDetailsError);

    // Properties
    static INVALID_IM_ADDRESS: number;
}

export class IndividualAggregatorError extends GLib.Error {
    static $gtype: GObject.GType<IndividualAggregatorError>;

    constructor(options: { message: string; code: number });
    constructor(copy: IndividualAggregatorError);

    // Properties
    static ADD_FAILED: number;
    static NO_WRITEABLE_STORE: number;
    static STORE_OFFLINE: number;
    static PROPERTY_NOT_WRITEABLE: number;
    static NO_PRIMARY_STORE: number;
}

export class PersonaStoreError extends GLib.Error {
    static $gtype: GObject.GType<PersonaStoreError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PersonaStoreError);

    // Properties
    static INVALID_ARGUMENT: number;
    static CREATE_FAILED: number;
    static UNSUPPORTED_ON_USER: number;
    static STORE_OFFLINE: number;
    static READ_ONLY: number;
    static PERMISSION_DENIED: number;
    static REMOVE_FAILED: number;
    static UNSUPPORTED_ON_NON_USER: number;
}

export class PropertyError extends GLib.Error {
    static $gtype: GObject.GType<PropertyError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PropertyError);

    // Properties
    static NOT_WRITEABLE: number;
    static INVALID_VALUE: number;
    static UNKNOWN_ERROR: number;
    static UNAVAILABLE: number;
}

export namespace GroupDetailsChangeReason {
    export const $gtype: GObject.GType<GroupDetailsChangeReason>;
}

export enum GroupDetailsChangeReason {
    NONE = 0,
    OFFLINE = 1,
    KICKED = 2,
    BUSY = 3,
    INVITED = 4,
    BANNED = 5,
    ERROR = 6,
    INVALID_MEMBER = 7,
    NO_ANSWER = 8,
    RENAMED = 9,
    PERMISSION_DENIED = 10,
    SEPARATED = 11,
}

export namespace AbstractFieldDetails {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        t_type: GObject.GType;
        tType: GObject.GType;
        t_dup_func: GObject.BoxedCopyFunc;
        tDupFunc: GObject.BoxedCopyFunc;
        t_destroy_func: GLib.DestroyNotify;
        tDestroyFunc: GLib.DestroyNotify;
        value: any;
        value_type: GObject.GType;
        valueType: GObject.GType;
        id: string;
        parameters: Gee.MultiMap;
    }
}

export abstract class AbstractFieldDetails extends GObject.Object {
    static $gtype: GObject.GType<AbstractFieldDetails>;

    constructor(properties?: Partial<AbstractFieldDetails.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AbstractFieldDetails.ConstructorProperties>, ...args: any[]): void;

    // Properties
    t_type: GObject.GType;
    tType: GObject.GType;
    t_dup_func: GObject.BoxedCopyFunc;
    tDupFunc: GObject.BoxedCopyFunc;
    t_destroy_func: GLib.DestroyNotify;
    tDestroyFunc: GLib.DestroyNotify;
    value: any;
    value_type: GObject.GType;
    valueType: GObject.GType;
    id: string;
    parameters: Gee.MultiMap;

    // Members

    get_parameter_values(parameter_name: string): Gee.Collection | null;

    add_parameter(parameter_name: string, parameter_value: string): void;

    set_parameter(parameter_name: string, parameter_value: string): void;

    extend_parameters(additional: Gee.MultiMap): void;

    remove_parameter_all(parameter_name: string): void;

    equal(that: AbstractFieldDetails): boolean;

    parameters_equal(that: AbstractFieldDetails): boolean;

    values_equal(that: AbstractFieldDetails): boolean;

    hash(): number;

    get_value(): any | null;

    set_value(value?: any | null): void;

    get_value_type(): GObject.GType;

    get_id(): string;

    set_id(value: string): void;

    get_parameters(): Gee.MultiMap;

    set_parameters(value: Gee.MultiMap): void;

    vfunc_equal(that: AbstractFieldDetails): boolean;

    vfunc_parameters_equal(that: AbstractFieldDetails): boolean;

    vfunc_values_equal(that: AbstractFieldDetails): boolean;

    vfunc_hash(): number;

    vfunc_get_value(): any | null;

    vfunc_set_value(value?: any | null): void;

    vfunc_get_id(): string;

    vfunc_set_id(value: string): void;

    vfunc_get_parameters(): Gee.MultiMap;

    vfunc_set_parameters(value: Gee.MultiMap): void;

    static equal_static(left: AbstractFieldDetails, right: AbstractFieldDetails): boolean;

    static hash_static(value: AbstractFieldDetails): number;
}

export namespace AvatarCache {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class AvatarCache extends GObject.Object {
    static $gtype: GObject.GType<AvatarCache>;

    constructor(properties?: Partial<AvatarCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AvatarCache.ConstructorProperties>, ...args: any[]): void;

    // Members

    load_avatar(id: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    load_avatar_finish(_res_: Gio.AsyncResult): Gio.LoadableIcon | null;

    store_avatar(id: string, avatar: Gio.LoadableIcon, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    store_avatar_finish(_res_: Gio.AsyncResult): string;

    remove_avatar(id: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    remove_avatar_finish(_res_: Gio.AsyncResult): void;

    build_uri_for_avatar(id: string): string;

    static dup(): AvatarCache;
}

export namespace BackendStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        enabled_backends: Gee.Map;
        enabledBackends: Gee.Map;
        is_prepared: boolean;
        isPrepared: boolean;
    }
}

export class BackendStore extends GObject.Object {
    static $gtype: GObject.GType<BackendStore>;

    constructor(properties?: Partial<BackendStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BackendStore.ConstructorProperties>, ...args: any[]): void;

    // Properties
    enabled_backends: Gee.Map;
    enabledBackends: Gee.Map;
    is_prepared: boolean;
    isPrepared: boolean;

    // Fields
    folks_backend_store_KEY_FILE_GROUP_ALL_OTHERS: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'backend-available', callback: (_source: this, backend: Backend) => void): number;

    connect_after(signal: 'backend-available', callback: (_source: this, backend: Backend) => void): number;

    emit(signal: 'backend-available', backend: Backend): void;

    // Members

    prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    prepare_finish(_res_: Gio.AsyncResult): void;

    load_backends(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    load_backends_finish(_res_: Gio.AsyncResult): void;

    add_backend(backend: Backend): void;

    dup_backend_by_name(name: string): Backend | null;

    list_backends(): Gee.Collection;

    enable_backend(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    enable_backend_finish(_res_: Gio.AsyncResult): void;

    disable_backend(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    disable_backend_finish(_res_: Gio.AsyncResult): void;

    get_enabled_backends(): Gee.Map;

    get_is_prepared(): boolean;

    static dup(): BackendStore;
}

export namespace Backend {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        is_prepared: boolean;
        isPrepared: boolean;
        is_quiescent: boolean;
        isQuiescent: boolean;
        name: string;
        persona_stores: Gee.Map;
        personaStores: Gee.Map;
    }
}

export abstract class Backend extends GObject.Object {
    static $gtype: GObject.GType<Backend>;

    constructor(properties?: Partial<Backend.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Backend.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_prepared: boolean;
    isPrepared: boolean;
    is_quiescent: boolean;
    isQuiescent: boolean;
    name: string;
    persona_stores: Gee.Map;
    personaStores: Gee.Map;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'persona-store-added', callback: (_source: this, store: PersonaStore) => void): number;

    connect_after(signal: 'persona-store-added', callback: (_source: this, store: PersonaStore) => void): number;

    emit(signal: 'persona-store-added', store: PersonaStore): void;

    connect(signal: 'persona-store-removed', callback: (_source: this, store: PersonaStore) => void): number;

    connect_after(signal: 'persona-store-removed', callback: (_source: this, store: PersonaStore) => void): number;

    emit(signal: 'persona-store-removed', store: PersonaStore): void;

    // Members

    disable_persona_store(store: PersonaStore): void;

    enable_persona_store(store: PersonaStore): void;

    set_persona_stores(storeids?: Gee.Set | null): void;

    prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    prepare_finish(_res_: Gio.AsyncResult): void;

    unprepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    unprepare_finish(_res_: Gio.AsyncResult): void;

    get_is_prepared(): boolean;

    get_is_quiescent(): boolean;

    get_name(): string;

    get_persona_stores(): Gee.Map;

    vfunc_disable_persona_store(store: PersonaStore): void;

    vfunc_enable_persona_store(store: PersonaStore): void;

    vfunc_set_persona_stores(storeids?: Gee.Set | null): void;

    vfunc_prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_prepare_finish(_res_: Gio.AsyncResult): void;

    vfunc_unprepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_unprepare_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_is_prepared(): boolean;

    vfunc_get_is_quiescent(): boolean;

    vfunc_get_name(): string;

    vfunc_get_persona_stores(): Gee.Map;
}

export namespace Debug {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        colour_enabled: boolean;
        colourEnabled: boolean;
        debug_output_enabled: boolean;
        debugOutputEnabled: boolean;
    }
}

export class Debug extends GObject.Object {
    static $gtype: GObject.GType<Debug>;

    constructor(properties?: Partial<Debug.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Debug.ConstructorProperties>, ...args: any[]): void;

    // Properties
    colour_enabled: boolean;
    colourEnabled: boolean;
    debug_output_enabled: boolean;
    debugOutputEnabled: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'print-status', callback: (_source: this) => void): number;

    connect_after(signal: 'print-status', callback: (_source: this) => void): number;

    emit(signal: 'print-status'): void;

    // Members

    emit_print_status(): void;

    indent(): void;

    unindent(): void;

    get_colour_enabled(): boolean;

    set_colour_enabled(value: boolean): void;

    get_debug_output_enabled(): boolean;

    set_debug_output_enabled(value: boolean): void;

    static dup(): Debug;

    static dup_with_flags(debug_flags: string | null, colour_enabled: boolean): Debug;
}

export namespace EmailFieldDetails {
    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
        [key: string]: any;
    }
}

export class EmailFieldDetails extends AbstractFieldDetails {
    static $gtype: GObject.GType<EmailFieldDetails>;

    constructor(properties?: Partial<EmailFieldDetails.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<EmailFieldDetails.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](value: string, parameters?: Gee.MultiMap | null): EmailFieldDetails;
}

export namespace ExtendedFieldDetails {
    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
        [key: string]: any;
    }
}

export class ExtendedFieldDetails extends AbstractFieldDetails {
    static $gtype: GObject.GType<ExtendedFieldDetails>;

    constructor(properties?: Partial<ExtendedFieldDetails.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ExtendedFieldDetails.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](value: string, parameters?: Gee.MultiMap | null): ExtendedFieldDetails;
}

export namespace ImFieldDetails {
    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
        [key: string]: any;
    }
}

export class ImFieldDetails extends AbstractFieldDetails {
    static $gtype: GObject.GType<ImFieldDetails>;

    constructor(properties?: Partial<ImFieldDetails.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ImFieldDetails.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](value: string, parameters?: Gee.MultiMap | null): ImFieldDetails;
}

export namespace IndividualAggregator {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        is_prepared: boolean;
        isPrepared: boolean;
        is_quiescent: boolean;
        isQuiescent: boolean;
        primary_store: PersonaStore;
        primaryStore: PersonaStore;
        backend_store: BackendStore;
        backendStore: BackendStore;
        individuals: Gee.Map;
        user: Individual;
    }
}

export class IndividualAggregator extends GObject.Object {
    static $gtype: GObject.GType<IndividualAggregator>;

    constructor(properties?: Partial<IndividualAggregator.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<IndividualAggregator.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_prepared: boolean;
    isPrepared: boolean;
    is_quiescent: boolean;
    isQuiescent: boolean;
    primary_store: PersonaStore;
    primaryStore: PersonaStore;
    backend_store: BackendStore;
    backendStore: BackendStore;
    individuals: Gee.Map;
    user: Individual;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'individuals-changed',
        callback: (
            _source: this,
            added: Gee.Set,
            removed: Gee.Set,
            message: string | null,
            actor: Persona | null,
            reason: GroupDetailsChangeReason
        ) => void
    ): number;

    connect_after(
        signal: 'individuals-changed',
        callback: (
            _source: this,
            added: Gee.Set,
            removed: Gee.Set,
            message: string | null,
            actor: Persona | null,
            reason: GroupDetailsChangeReason
        ) => void
    ): number;

    emit(
        signal: 'individuals-changed',
        added: Gee.Set,
        removed: Gee.Set,
        message: string | null,
        actor: Persona | null,
        reason: GroupDetailsChangeReason
    ): void;

    connect(signal: 'individuals-changed-detailed', callback: (_source: this, changes: Gee.MultiMap) => void): number;

    connect_after(
        signal: 'individuals-changed-detailed',
        callback: (_source: this, changes: Gee.MultiMap) => void
    ): number;

    emit(signal: 'individuals-changed-detailed', changes: Gee.MultiMap): void;

    // Constructors

    static ['new'](): IndividualAggregator;

    static with_backend_store(store: BackendStore): IndividualAggregator;

    // Members

    prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    prepare_finish(_res_: Gio.AsyncResult): void;

    unprepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    unprepare_finish(_res_: Gio.AsyncResult): void;

    get_potential_matches(matchee: Individual, min_threshold: MatchResult): Gee.Map;

    get_all_potential_matches(min_threshold: MatchResult): Gee.Map;

    add_persona_from_details(
        parent: Individual | null,
        persona_store: PersonaStore,
        details: GLib.HashTable<string, GObject.Value>,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null;

    remove_individual(individual: Individual, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    remove_individual_finish(_res_: Gio.AsyncResult): void;

    remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    remove_persona_finish(_res_: Gio.AsyncResult): void;

    link_personas(personas: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    link_personas_finish(_res_: Gio.AsyncResult): void;

    unlink_individual(individual: Individual, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    unlink_individual_finish(_res_: Gio.AsyncResult): void;

    ensure_individual_property_writeable(
        individual: Individual,
        property_name: string,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    ensure_individual_property_writeable_finish(_res_: Gio.AsyncResult): Persona;

    look_up_individual(id: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    look_up_individual_finish(_res_: Gio.AsyncResult): Individual | null;

    get_is_prepared(): boolean;

    get_is_quiescent(): boolean;

    get_primary_store(): PersonaStore | null;

    get_backend_store(): BackendStore;

    get_individuals(): Gee.Map;

    get_user(): Individual | null;

    static dup(): IndividualAggregator;

    static dup_with_backend_store(store: BackendStore): IndividualAggregator | null;
}

export namespace Individual {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        trust_level: TrustLevel;
        trustLevel: TrustLevel;
        is_user: boolean;
        isUser: boolean;
        id: string;
        display_name: string;
        displayName: string;
        personas: Gee.Set;
    }
}

export class Individual
    extends GObject.Object
    implements AliasDetails,
        AvatarDetails,
        BirthdayDetails,
        EmailDetails,
        ExtendedInfo,
        FavouriteDetails,
        GenderDetails,
        GroupDetails,
        ImDetails,
        InteractionDetails,
        LocalIdDetails,
        LocationDetails,
        NameDetails,
        NoteDetails,
        PresenceDetails,
        PhoneDetails,
        PostalAddressDetails,
        RoleDetails,
        UrlDetails,
        WebServiceDetails {
    static $gtype: GObject.GType<Individual>;

    constructor(properties?: Partial<Individual.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Individual.ConstructorProperties>, ...args: any[]): void;

    // Properties
    trust_level: TrustLevel;
    trustLevel: TrustLevel;
    is_user: boolean;
    isUser: boolean;
    id: string;
    display_name: string;
    displayName: string;
    personas: Gee.Set;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'removed', callback: (_source: this, replacement_individual: Individual | null) => void): number;

    connect_after(
        signal: 'removed',
        callback: (_source: this, replacement_individual: Individual | null) => void
    ): number;

    emit(signal: 'removed', replacement_individual: Individual | null): void;

    connect(signal: 'personas-changed', callback: (_source: this, added: Gee.Set, removed: Gee.Set) => void): number;

    connect_after(
        signal: 'personas-changed',
        callback: (_source: this, added: Gee.Set, removed: Gee.Set) => void
    ): number;

    emit(signal: 'personas-changed', added: Gee.Set, removed: Gee.Set): void;

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
    gender: Gender;
    groups: Gee.Set;
    im_addresses: Gee.MultiMap;
    imAddresses: Gee.MultiMap;
    im_interaction_count: number;
    imInteractionCount: number;
    last_im_interaction_datetime: GLib.DateTime;
    lastImInteractionDatetime: GLib.DateTime;
    call_interaction_count: number;
    callInteractionCount: number;
    last_call_interaction_datetime: GLib.DateTime;
    lastCallInteractionDatetime: GLib.DateTime;
    local_ids: Gee.Set;
    localIds: Gee.Set;
    location: Location;
    structured_name: StructuredName;
    structuredName: StructuredName;
    full_name: string;
    fullName: string;
    nickname: string;
    notes: Gee.Set;
    presence_type: PresenceType;
    presenceType: PresenceType;
    presence_message: string;
    presenceMessage: string;
    client_types: string[];
    clientTypes: string[];
    presence_status: string;
    presenceStatus: string;
    phone_numbers: Gee.Set;
    phoneNumbers: Gee.Set;
    postal_addresses: Gee.Set;
    postalAddresses: Gee.Set;
    roles: Gee.Set;
    urls: Gee.Set;
    web_service_addresses: Gee.MultiMap;
    webServiceAddresses: Gee.MultiMap;

    // Constructors

    static ['new'](personas?: Gee.Set | null): Individual;

    // Members

    has_anti_link_with_persona(p: Persona): boolean;

    has_anti_link_with_individual(i: Individual): boolean;

    get_trust_level(): TrustLevel;

    get_is_user(): boolean;

    get_id(): string;

    get_display_name(): string;

    get_personas(): Gee.Set;

    set_personas(value: Gee.Set): void;

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

    get_extended_field(name: string): ExtendedFieldDetails | null;

    change_extended_field(
        name: string,
        value: ExtendedFieldDetails,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    change_extended_field_finish(_res_: Gio.AsyncResult): void;

    remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    remove_extended_field_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_extended_field(name: string): ExtendedFieldDetails | null;

    vfunc_change_extended_field(
        name: string,
        value: ExtendedFieldDetails,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_change_extended_field_finish(_res_: Gio.AsyncResult): void;

    vfunc_remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_remove_extended_field_finish(_res_: Gio.AsyncResult): void;

    change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_is_favourite_finish(_res_: Gio.AsyncResult): void;

    get_is_favourite(): boolean;

    set_is_favourite(value: boolean): void;

    vfunc_change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_is_favourite(): boolean;

    vfunc_set_is_favourite(value: boolean): void;

    change_gender(gender: Gender, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_gender_finish(_res_: Gio.AsyncResult): void;

    get_gender(): Gender;

    set_gender(value: Gender): void;

    vfunc_change_gender(gender: Gender, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_gender_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_gender(): Gender;

    vfunc_set_gender(value: Gender): void;

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

    get_im_interaction_count(): number;

    get_last_im_interaction_datetime(): GLib.DateTime | null;

    get_call_interaction_count(): number;

    get_last_call_interaction_datetime(): GLib.DateTime | null;

    vfunc_get_im_interaction_count(): number;

    vfunc_get_last_im_interaction_datetime(): GLib.DateTime | null;

    vfunc_get_call_interaction_count(): number;

    vfunc_get_last_call_interaction_datetime(): GLib.DateTime | null;

    change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_local_ids_finish(_res_: Gio.AsyncResult): void;

    get_local_ids(): Gee.Set;

    set_local_ids(value: Gee.Set): void;

    vfunc_change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_local_ids(): Gee.Set;

    vfunc_set_local_ids(value: Gee.Set): void;

    change_location(location?: Location | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_location_finish(_res_: Gio.AsyncResult): void;

    get_location(): Location | null;

    set_location(value?: Location | null): void;

    vfunc_change_location(location?: Location | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_location_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_location(): Location | null;

    vfunc_set_location(value?: Location | null): void;

    change_structured_name(name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_structured_name_finish(_res_: Gio.AsyncResult): void;

    change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_full_name_finish(_res_: Gio.AsyncResult): void;

    change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_nickname_finish(_res_: Gio.AsyncResult): void;

    get_structured_name(): StructuredName | null;

    set_structured_name(value?: StructuredName | null): void;

    get_full_name(): string;

    set_full_name(value: string): void;

    get_nickname(): string;

    set_nickname(value: string): void;

    vfunc_change_structured_name(name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void;

    vfunc_change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void;

    vfunc_change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_structured_name(): StructuredName | null;

    vfunc_set_structured_name(value?: StructuredName | null): void;

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

    is_online(): boolean;

    get_presence_type(): PresenceType;

    set_presence_type(value: PresenceType): void;

    get_presence_message(): string;

    set_presence_message(value: string): void;

    get_client_types(): string[];

    set_client_types(value: string[]): void;

    get_presence_status(): string;

    set_presence_status(value: string): void;

    vfunc_get_presence_type(): PresenceType;

    vfunc_set_presence_type(value: PresenceType): void;

    vfunc_get_presence_message(): string;

    vfunc_set_presence_message(value: string): void;

    vfunc_get_client_types(): string[];

    vfunc_set_client_types(value: string[]): void;

    vfunc_get_presence_status(): string;

    vfunc_set_presence_status(value: string): void;

    change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_phone_numbers_finish(_res_: Gio.AsyncResult): void;

    get_phone_numbers(): Gee.Set;

    set_phone_numbers(value: Gee.Set): void;

    vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_phone_numbers(): Gee.Set;

    vfunc_set_phone_numbers(value: Gee.Set): void;

    change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_postal_addresses_finish(_res_: Gio.AsyncResult): void;

    get_postal_addresses(): Gee.Set;

    set_postal_addresses(value: Gee.Set): void;

    vfunc_change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_postal_addresses(): Gee.Set;

    vfunc_set_postal_addresses(value: Gee.Set): void;

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

export namespace Location {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Location extends GObject.Object {
    static $gtype: GObject.GType<Location>;

    constructor(properties?: Partial<Location.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Location.ConstructorProperties>, ...args: any[]): void;

    // Fields
    latitude: number;
    longitude: number;

    // Constructors

    static ['new'](latitude: number, longitude: number): Location;

    // Members

    equal(other: Location): boolean;

    equal_coordinates(latitude: number, longitude: number): boolean;
}

export namespace StructuredName {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        family_name: string;
        familyName: string;
        given_name: string;
        givenName: string;
        additional_names: string;
        additionalNames: string;
        prefixes: string;
        suffixes: string;
    }
}

export class StructuredName extends GObject.Object {
    static $gtype: GObject.GType<StructuredName>;

    constructor(properties?: Partial<StructuredName.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StructuredName.ConstructorProperties>, ...args: any[]): void;

    // Properties
    family_name: string;
    familyName: string;
    given_name: string;
    givenName: string;
    additional_names: string;
    additionalNames: string;
    prefixes: string;
    suffixes: string;

    // Constructors

    static ['new'](
        family_name?: string | null,
        given_name?: string | null,
        additional_names?: string | null,
        prefixes?: string | null,
        suffixes?: string | null
    ): StructuredName;

    static simple(family_name?: string | null, given_name?: string | null): StructuredName;

    // Members

    is_empty(): boolean;

    equal(other: StructuredName): boolean;

    to_string(): string;

    to_string_with_format(name_fmt: string): string;

    get_family_name(): string;

    set_family_name(value: string): void;

    get_given_name(): string;

    set_given_name(value: string): void;

    get_additional_names(): string;

    set_additional_names(value: string): void;

    get_prefixes(): string;

    set_prefixes(value: string): void;

    get_suffixes(): string;

    set_suffixes(value: string): void;
}

export namespace NoteFieldDetails {
    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
        [key: string]: any;

        uid: string;
    }
}

export class NoteFieldDetails extends AbstractFieldDetails {
    static $gtype: GObject.GType<NoteFieldDetails>;

    constructor(properties?: Partial<NoteFieldDetails.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<NoteFieldDetails.ConstructorProperties>, ...args: any[]): void;

    // Properties
    uid: string;

    // Constructors

    static ['new'](value: string, parameters?: Gee.MultiMap | null, uid?: string | null): NoteFieldDetails;

    // Members

    get_uid(): string;

    set_uid(value: string): void;
}

export namespace ObjectCache {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        t_type: GObject.GType;
        tType: GObject.GType;
        t_dup_func: GObject.BoxedCopyFunc;
        tDupFunc: GObject.BoxedCopyFunc;
        t_destroy_func: GLib.DestroyNotify;
        tDestroyFunc: GLib.DestroyNotify;
        type_id: string;
        typeId: string;
        id: string;
    }
}

export abstract class ObjectCache extends GObject.Object {
    static $gtype: GObject.GType<ObjectCache>;

    constructor(properties?: Partial<ObjectCache.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ObjectCache.ConstructorProperties>, ...args: any[]): void;

    // Properties
    t_type: GObject.GType;
    tType: GObject.GType;
    t_dup_func: GObject.BoxedCopyFunc;
    tDupFunc: GObject.BoxedCopyFunc;
    t_destroy_func: GLib.DestroyNotify;
    tDestroyFunc: GLib.DestroyNotify;
    type_id: string;
    typeId: string;
    id: string;

    // Members

    get_serialised_object_type(object_version: number): GLib.VariantType | null;

    get_serialised_object_version(): number;

    serialise_object(object?: any | null): GLib.Variant;

    deserialise_object(variant: GLib.Variant, object_version: number): any | null;

    load_objects(cancellable?: Gio.Cancellable | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    load_objects_finish(_res_: Gio.AsyncResult): Gee.Set | null;

    store_objects(
        objects: Gee.Set,
        cancellable?: Gio.Cancellable | null,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    store_objects_finish(_res_: Gio.AsyncResult): void;

    clear_cache(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    clear_cache_finish(_res_: Gio.AsyncResult): void;

    get_type_id(): string;

    get_id(): string;

    vfunc_get_serialised_object_type(object_version: number): GLib.VariantType | null;

    vfunc_get_serialised_object_version(): number;

    vfunc_serialise_object(object?: any | null): GLib.Variant;

    vfunc_deserialise_object(variant: GLib.Variant, object_version: number): any | null;
}

export namespace PersonaStore {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        type_id: string;
        typeId: string;
        display_name: string;
        displayName: string;
        id: string;
        personas: Gee.Map;
        can_add_personas: MaybeBool;
        canAddPersonas: MaybeBool;
        can_alias_personas: MaybeBool;
        canAliasPersonas: MaybeBool;
        can_group_personas: MaybeBool;
        canGroupPersonas: MaybeBool;
        can_remove_personas: MaybeBool;
        canRemovePersonas: MaybeBool;
        is_prepared: boolean;
        isPrepared: boolean;
        is_quiescent: boolean;
        isQuiescent: boolean;
        is_writeable: boolean;
        isWriteable: boolean;
        trust_level: PersonaStoreTrust;
        trustLevel: PersonaStoreTrust;
        always_writeable_properties: string[];
        alwaysWriteableProperties: string[];
        is_primary_store: boolean;
        isPrimaryStore: boolean;
        is_user_set_default: boolean;
        isUserSetDefault: boolean;
    }
}

export abstract class PersonaStore extends GObject.Object {
    static $gtype: GObject.GType<PersonaStore>;

    constructor(properties?: Partial<PersonaStore.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PersonaStore.ConstructorProperties>, ...args: any[]): void;

    // Properties
    type_id: string;
    typeId: string;
    display_name: string;
    displayName: string;
    id: string;
    personas: Gee.Map;
    can_add_personas: MaybeBool;
    canAddPersonas: MaybeBool;
    can_alias_personas: MaybeBool;
    canAliasPersonas: MaybeBool;
    can_group_personas: MaybeBool;
    canGroupPersonas: MaybeBool;
    can_remove_personas: MaybeBool;
    canRemovePersonas: MaybeBool;
    is_prepared: boolean;
    isPrepared: boolean;
    is_quiescent: boolean;
    isQuiescent: boolean;
    is_writeable: boolean;
    isWriteable: boolean;
    trust_level: PersonaStoreTrust;
    trustLevel: PersonaStoreTrust;
    always_writeable_properties: string[];
    alwaysWriteableProperties: string[];
    is_primary_store: boolean;
    isPrimaryStore: boolean;
    is_user_set_default: boolean;
    isUserSetDefault: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'personas-changed',
        callback: (
            _source: this,
            added: Gee.Set,
            removed: Gee.Set,
            message: string | null,
            actor: Persona | null,
            reason: GroupDetailsChangeReason
        ) => void
    ): number;

    connect_after(
        signal: 'personas-changed',
        callback: (
            _source: this,
            added: Gee.Set,
            removed: Gee.Set,
            message: string | null,
            actor: Persona | null,
            reason: GroupDetailsChangeReason
        ) => void
    ): number;

    emit(
        signal: 'personas-changed',
        added: Gee.Set,
        removed: Gee.Set,
        message: string | null,
        actor: Persona | null,
        reason: GroupDetailsChangeReason
    ): void;

    connect(signal: 'removed', callback: (_source: this) => void): number;

    connect_after(signal: 'removed', callback: (_source: this) => void): number;

    emit(signal: 'removed'): void;

    // Members

    _emit_personas_changed(
        added: Gee.Set | null,
        removed: Gee.Set | null,
        message: string | null,
        actor: Persona | null,
        reason: GroupDetailsChangeReason
    ): void;

    prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    prepare_finish(_res_: Gio.AsyncResult): void;

    flush(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    flush_finish(_res_: Gio.AsyncResult): void;

    add_persona_from_details(
        details: GLib.HashTable<string, GObject.Value>,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null;

    remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    remove_persona_finish(_res_: Gio.AsyncResult): void;

    get_type_id(): string;

    get_display_name(): string;

    get_id(): string;

    get_personas(): Gee.Map;

    get_can_add_personas(): MaybeBool;

    get_can_alias_personas(): MaybeBool;

    get_can_group_personas(): MaybeBool;

    get_can_remove_personas(): MaybeBool;

    get_is_prepared(): boolean;

    get_is_quiescent(): boolean;

    get_is_writeable(): boolean;

    set_is_writeable(value: boolean): void;

    get_trust_level(): PersonaStoreTrust;

    set_trust_level(value: PersonaStoreTrust): void;

    get_always_writeable_properties(): string[];

    get_is_primary_store(): boolean;

    get_is_user_set_default(): boolean;

    vfunc_prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_prepare_finish(_res_: Gio.AsyncResult): void;

    vfunc_flush(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_flush_finish(_res_: Gio.AsyncResult): void;

    vfunc_add_persona_from_details(
        details: GLib.HashTable<string, GObject.Value>,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_add_persona_from_details_finish(_res_: Gio.AsyncResult): Persona | null;

    vfunc_remove_persona(persona: Persona, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_remove_persona_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_type_id(): string;

    vfunc_get_personas(): Gee.Map;

    vfunc_get_can_add_personas(): MaybeBool;

    vfunc_get_can_alias_personas(): MaybeBool;

    vfunc_get_can_group_personas(): MaybeBool;

    vfunc_get_can_remove_personas(): MaybeBool;

    vfunc_get_is_prepared(): boolean;

    vfunc_get_is_quiescent(): boolean;

    vfunc_get_always_writeable_properties(): string[];

    static detail_key(detail: PersonaDetail): string | null;
}

export namespace Persona {
    export type LinkablePropertyCallback = (link: string) => void;

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        iid: string;
        uid: string;
        display_id: string;
        displayId: string;
        is_user: boolean;
        isUser: boolean;
        store: PersonaStore;
        individual: Individual;
        linkable_properties: string[];
        linkableProperties: string[];
        writeable_properties: string[];
        writeableProperties: string[];
    }
}

export abstract class Persona extends GObject.Object {
    static $gtype: GObject.GType<Persona>;

    constructor(properties?: Partial<Persona.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Persona.ConstructorProperties>, ...args: any[]): void;

    // Properties
    iid: string;
    uid: string;
    display_id: string;
    displayId: string;
    is_user: boolean;
    isUser: boolean;
    store: PersonaStore;
    individual: Individual;
    linkable_properties: string[];
    linkableProperties: string[];
    writeable_properties: string[];
    writeableProperties: string[];

    // Members

    linkable_property_to_links(prop_name: string, callback: Persona.LinkablePropertyCallback): void;

    get_iid(): string;

    get_uid(): string;

    get_display_id(): string;

    get_is_user(): boolean;

    get_store(): PersonaStore;

    get_individual(): Individual | null;

    get_linkable_properties(): string[];

    get_writeable_properties(): string[];

    vfunc_linkable_property_to_links(prop_name: string, callback: Persona.LinkablePropertyCallback): void;

    vfunc_get_linkable_properties(): string[];

    vfunc_get_writeable_properties(): string[];

    static build_uid(backend_name: string, persona_store_id: string, persona_id: string): string;

    static split_uid(uid: string): [string, string, string];
}

export namespace PhoneFieldDetails {
    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
        [key: string]: any;
    }
}

export class PhoneFieldDetails extends AbstractFieldDetails {
    static $gtype: GObject.GType<PhoneFieldDetails>;

    constructor(properties?: Partial<PhoneFieldDetails.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PhoneFieldDetails.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](value: string, parameters?: Gee.MultiMap | null): PhoneFieldDetails;

    // Members

    get_normalised(): string;
}

export namespace PostalAddress {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        po_box: string;
        poBox: string;
        extension: string;
        street: string;
        locality: string;
        region: string;
        postal_code: string;
        postalCode: string;
        country: string;
        address_format: string;
        addressFormat: string;
        uid: string;
    }
}

export class PostalAddress extends GObject.Object {
    static $gtype: GObject.GType<PostalAddress>;

    constructor(properties?: Partial<PostalAddress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PostalAddress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    po_box: string;
    poBox: string;
    extension: string;
    street: string;
    locality: string;
    region: string;
    postal_code: string;
    postalCode: string;
    country: string;
    address_format: string;
    addressFormat: string;
    uid: string;

    // Constructors

    static ['new'](
        po_box?: string | null,
        extension?: string | null,
        street?: string | null,
        locality?: string | null,
        region?: string | null,
        postal_code?: string | null,
        country?: string | null,
        address_format?: string | null,
        uid?: string | null
    ): PostalAddress;

    // Members

    is_empty(): boolean;

    equal(_with: PostalAddress): boolean;

    to_string(): string;

    get_po_box(): string;

    set_po_box(value: string): void;

    get_extension(): string;

    set_extension(value: string): void;

    get_street(): string;

    set_street(value: string): void;

    get_locality(): string;

    set_locality(value: string): void;

    get_region(): string;

    set_region(value: string): void;

    get_postal_code(): string;

    set_postal_code(value: string): void;

    get_country(): string;

    set_country(value: string): void;

    get_address_format(): string;

    set_address_format(value: string): void;

    get_uid(): string;

    set_uid(value: string): void;
}

export namespace PostalAddressFieldDetails {
    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
        [key: string]: any;
    }
}

export class PostalAddressFieldDetails extends AbstractFieldDetails {
    static $gtype: GObject.GType<PostalAddressFieldDetails>;

    constructor(properties?: Partial<PostalAddressFieldDetails.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PostalAddressFieldDetails.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](value: PostalAddress, parameters?: Gee.MultiMap | null): PostalAddressFieldDetails;
}

export namespace PotentialMatch {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class PotentialMatch extends GObject.Object {
    static $gtype: GObject.GType<PotentialMatch>;

    constructor(properties?: Partial<PotentialMatch.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PotentialMatch.ConstructorProperties>, ...args: any[]): void;

    // Fields
    folks_potential_match_known_email_aliases: Gee.Set;

    // Constructors

    static ['new'](): PotentialMatch;

    // Members

    potential_match(a: Individual, b: Individual): MatchResult;
}

export namespace Query {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        match_fields: string[];
        matchFields: string[];
    }
}

export abstract class Query extends GObject.Object {
    static $gtype: GObject.GType<Query>;

    constructor(properties?: Partial<Query.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Query.ConstructorProperties>, ...args: any[]): void;

    // Properties
    match_fields: string[];
    matchFields: string[];

    // Members

    is_match(individual: Individual): number;

    get_match_fields(): string[];

    vfunc_is_match(individual: Individual): number;

    vfunc_get_match_fields(): string[];
}

export namespace Role {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        organisation_name: string;
        organisationName: string;
        title: string;
        role: string;
        uid: string;
    }
}

export class Role extends GObject.Object {
    static $gtype: GObject.GType<Role>;

    constructor(properties?: Partial<Role.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Role.ConstructorProperties>, ...args: any[]): void;

    // Properties
    organisation_name: string;
    organisationName: string;
    title: string;
    role: string;
    uid: string;

    // Constructors

    static ['new'](title?: string | null, organisation_name?: string | null, uid?: string | null): Role;

    // Members

    is_empty(): boolean;

    to_string(): string;

    get_organisation_name(): string;

    set_organisation_name(value: string): void;

    get_title(): string;

    set_title(value: string): void;

    get_role(): string;

    set_role(value: string): void;

    get_uid(): string;

    set_uid(value: string): void;

    static equal(a: Role, b: Role): boolean;

    static hash(r: Role): number;
}

export namespace RoleFieldDetails {
    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
        [key: string]: any;
    }
}

export class RoleFieldDetails extends AbstractFieldDetails {
    static $gtype: GObject.GType<RoleFieldDetails>;

    constructor(properties?: Partial<RoleFieldDetails.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RoleFieldDetails.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](value: Role, parameters?: Gee.MultiMap | null): RoleFieldDetails;
}

export namespace SearchView {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        aggregator: IndividualAggregator;
        query: Query;
        individuals: Gee.SortedSet;
        is_prepared: boolean;
        isPrepared: boolean;
        is_quiescent: boolean;
        isQuiescent: boolean;
    }
}

export class SearchView extends GObject.Object {
    static $gtype: GObject.GType<SearchView>;

    constructor(properties?: Partial<SearchView.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SearchView.ConstructorProperties>, ...args: any[]): void;

    // Properties
    aggregator: IndividualAggregator;
    query: Query;
    individuals: Gee.SortedSet;
    is_prepared: boolean;
    isPrepared: boolean;
    is_quiescent: boolean;
    isQuiescent: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'individuals-changed-detailed',
        callback: (_source: this, added: Gee.SortedSet, removed: Gee.SortedSet) => void
    ): number;

    connect_after(
        signal: 'individuals-changed-detailed',
        callback: (_source: this, added: Gee.SortedSet, removed: Gee.SortedSet) => void
    ): number;

    emit(signal: 'individuals-changed-detailed', added: Gee.SortedSet, removed: Gee.SortedSet): void;

    // Constructors

    static ['new'](aggregator: IndividualAggregator, query: Query): SearchView;

    // Members

    prepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    prepare_finish(_res_: Gio.AsyncResult): void;

    unprepare(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    unprepare_finish(_res_: Gio.AsyncResult): void;

    refresh(_callback_?: Gio.AsyncReadyCallback<this> | null): void;

    refresh_finish(_res_: Gio.AsyncResult): void;

    get_aggregator(): IndividualAggregator;

    get_query(): Query;

    set_query(value: Query): void;

    get_individuals(): Gee.SortedSet;

    get_is_prepared(): boolean;

    get_is_quiescent(): boolean;
}

export namespace SimpleQuery {
    export interface ConstructorProperties extends Query.ConstructorProperties {
        [key: string]: any;

        query_string: string;
        queryString: string;
        query_locale: string;
        queryLocale: string;
    }
}

export class SimpleQuery extends Query {
    static $gtype: GObject.GType<SimpleQuery>;

    constructor(properties?: Partial<SimpleQuery.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SimpleQuery.ConstructorProperties>, ...args: any[]): void;

    // Properties
    query_string: string;
    queryString: string;
    query_locale: string;
    queryLocale: string;

    // Constructors

    static ['new'](query_string: string, match_fields: string[]): SimpleQuery;

    // Members

    get_query_string(): string;

    set_query_string(value: string): void;

    get_query_locale(): string | null;

    set_query_locale(value?: string | null): void;
}

export namespace UrlFieldDetails {
    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
        [key: string]: any;
    }
}

export class UrlFieldDetails extends AbstractFieldDetails {
    static $gtype: GObject.GType<UrlFieldDetails>;

    constructor(properties?: Partial<UrlFieldDetails.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UrlFieldDetails.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](value: string, parameters?: Gee.MultiMap | null): UrlFieldDetails;
}

export namespace Utils {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Utils extends GObject.Object {
    static $gtype: GObject.GType<Utils>;

    constructor(properties?: Partial<Utils.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Utils.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): Utils;

    // Members

    static multi_map_str_str_equal(a: Gee.MultiMap, b: Gee.MultiMap): boolean;

    static multi_map_str_afd_equal(a: Gee.MultiMap, b: Gee.MultiMap): boolean;

    static set_afd_equal(a: Gee.Set, b: Gee.Set): boolean;

    static set_string_afd_equal(a: Gee.Set, b: Gee.Set): boolean;
}

export namespace WebServiceFieldDetails {
    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
        [key: string]: any;
    }
}

export class WebServiceFieldDetails extends AbstractFieldDetails {
    static $gtype: GObject.GType<WebServiceFieldDetails>;

    constructor(properties?: Partial<WebServiceFieldDetails.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<WebServiceFieldDetails.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](value: string, parameters?: Gee.MultiMap | null): WebServiceFieldDetails;
}

export class AbstractFieldDetailsPrivate {
    static $gtype: GObject.GType<AbstractFieldDetailsPrivate>;

    constructor(copy: AbstractFieldDetailsPrivate);
}

export class AvatarCachePrivate {
    static $gtype: GObject.GType<AvatarCachePrivate>;

    constructor(copy: AvatarCachePrivate);
}

export class BackendStorePrivate {
    static $gtype: GObject.GType<BackendStorePrivate>;

    constructor(copy: BackendStorePrivate);
}

export class BackendPrivate {
    static $gtype: GObject.GType<BackendPrivate>;

    constructor(copy: BackendPrivate);
}

export class DebugPrivate {
    static $gtype: GObject.GType<DebugPrivate>;

    constructor(copy: DebugPrivate);
}

export class EmailFieldDetailsPrivate {
    static $gtype: GObject.GType<EmailFieldDetailsPrivate>;

    constructor(copy: EmailFieldDetailsPrivate);
}

export class ExtendedFieldDetailsPrivate {
    static $gtype: GObject.GType<ExtendedFieldDetailsPrivate>;

    constructor(copy: ExtendedFieldDetailsPrivate);
}

export class ImFieldDetailsPrivate {
    static $gtype: GObject.GType<ImFieldDetailsPrivate>;

    constructor(copy: ImFieldDetailsPrivate);
}

export class IndividualAggregatorPrivate {
    static $gtype: GObject.GType<IndividualAggregatorPrivate>;

    constructor(copy: IndividualAggregatorPrivate);
}

export class IndividualPrivate {
    static $gtype: GObject.GType<IndividualPrivate>;

    constructor(copy: IndividualPrivate);
}

export class LocationPrivate {
    static $gtype: GObject.GType<LocationPrivate>;

    constructor(copy: LocationPrivate);
}

export class StructuredNamePrivate {
    static $gtype: GObject.GType<StructuredNamePrivate>;

    constructor(copy: StructuredNamePrivate);
}

export class NoteFieldDetailsPrivate {
    static $gtype: GObject.GType<NoteFieldDetailsPrivate>;

    constructor(copy: NoteFieldDetailsPrivate);
}

export class ObjectCachePrivate {
    static $gtype: GObject.GType<ObjectCachePrivate>;

    constructor(copy: ObjectCachePrivate);
}

export class PersonaStorePrivate {
    static $gtype: GObject.GType<PersonaStorePrivate>;

    constructor(copy: PersonaStorePrivate);
}

export class PersonaPrivate {
    static $gtype: GObject.GType<PersonaPrivate>;

    constructor(copy: PersonaPrivate);
}

export class PhoneFieldDetailsPrivate {
    static $gtype: GObject.GType<PhoneFieldDetailsPrivate>;

    constructor(copy: PhoneFieldDetailsPrivate);
}

export class PostalAddressPrivate {
    static $gtype: GObject.GType<PostalAddressPrivate>;

    constructor(copy: PostalAddressPrivate);
}

export class PostalAddressFieldDetailsPrivate {
    static $gtype: GObject.GType<PostalAddressFieldDetailsPrivate>;

    constructor(copy: PostalAddressFieldDetailsPrivate);
}

export class PotentialMatchPrivate {
    static $gtype: GObject.GType<PotentialMatchPrivate>;

    constructor(copy: PotentialMatchPrivate);
}

export class QueryPrivate {
    static $gtype: GObject.GType<QueryPrivate>;

    constructor(copy: QueryPrivate);
}

export class RolePrivate {
    static $gtype: GObject.GType<RolePrivate>;

    constructor(copy: RolePrivate);
}

export class RoleFieldDetailsPrivate {
    static $gtype: GObject.GType<RoleFieldDetailsPrivate>;

    constructor(copy: RoleFieldDetailsPrivate);
}

export class SearchViewPrivate {
    static $gtype: GObject.GType<SearchViewPrivate>;

    constructor(copy: SearchViewPrivate);
}

export class SimpleQueryPrivate {
    static $gtype: GObject.GType<SimpleQueryPrivate>;

    constructor(copy: SimpleQueryPrivate);
}

export class UrlFieldDetailsPrivate {
    static $gtype: GObject.GType<UrlFieldDetailsPrivate>;

    constructor(copy: UrlFieldDetailsPrivate);
}

export class UtilsPrivate {
    static $gtype: GObject.GType<UtilsPrivate>;

    constructor(copy: UtilsPrivate);
}

export class WebServiceFieldDetailsPrivate {
    static $gtype: GObject.GType<WebServiceFieldDetailsPrivate>;

    constructor(copy: WebServiceFieldDetailsPrivate);
}

export interface AliasDetailsNamespace {
    $gtype: GObject.GType<AliasDetails>;
    prototype: AliasDetailsPrototype;
}

export type AliasDetails = AliasDetailsPrototype;

export interface AliasDetailsPrototype extends GObject.Object {
    // Properties
    alias: string;

    // Members

    change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_alias_finish(_res_: Gio.AsyncResult): void;

    get_alias(): string;

    set_alias(value: string): void;

    vfunc_change_alias(alias: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_alias_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_alias(): string;

    vfunc_set_alias(value: string): void;
}

export const AliasDetails: AliasDetailsNamespace;

export interface AntiLinkableNamespace {
    $gtype: GObject.GType<AntiLinkable>;
    prototype: AntiLinkablePrototype;
}

export type AntiLinkable = AntiLinkablePrototype;

export interface AntiLinkablePrototype extends Persona {
    // Properties
    anti_links: Gee.Set;
    antiLinks: Gee.Set;

    // Members

    change_anti_links(anti_links: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_anti_links_finish(_res_: Gio.AsyncResult): void;

    has_anti_link_with_persona(other_persona: Persona): boolean;

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
}

export const AntiLinkable: AntiLinkableNamespace;

export interface AvatarDetailsNamespace {
    $gtype: GObject.GType<AvatarDetails>;
    prototype: AvatarDetailsPrototype;
}

export type AvatarDetails = AvatarDetailsPrototype;

export interface AvatarDetailsPrototype extends GObject.Object {
    // Properties
    avatar: Gio.LoadableIcon;

    // Members

    change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_avatar_finish(_res_: Gio.AsyncResult): void;

    get_avatar(): Gio.LoadableIcon | null;

    set_avatar(value?: Gio.LoadableIcon | null): void;

    vfunc_change_avatar(avatar?: Gio.LoadableIcon | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_avatar_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_avatar(): Gio.LoadableIcon | null;

    vfunc_set_avatar(value?: Gio.LoadableIcon | null): void;
}

export const AvatarDetails: AvatarDetailsNamespace;

export interface BirthdayDetailsNamespace {
    $gtype: GObject.GType<BirthdayDetails>;
    prototype: BirthdayDetailsPrototype;
}

export type BirthdayDetails = BirthdayDetailsPrototype;

export interface BirthdayDetailsPrototype extends GObject.Object {
    // Properties
    birthday: GLib.DateTime;
    calendar_event_id: string;
    calendarEventId: string;

    // Members

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
}

export const BirthdayDetails: BirthdayDetailsNamespace;

export interface EmailDetailsNamespace {
    $gtype: GObject.GType<EmailDetails>;
    prototype: EmailDetailsPrototype;
}

export type EmailDetails = EmailDetailsPrototype;

export interface EmailDetailsPrototype extends GObject.Object {
    // Properties
    email_addresses: Gee.Set;
    emailAddresses: Gee.Set;

    // Members

    change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_email_addresses_finish(_res_: Gio.AsyncResult): void;

    get_email_addresses(): Gee.Set;

    set_email_addresses(value: Gee.Set): void;

    vfunc_change_email_addresses(email_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_email_addresses_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_email_addresses(): Gee.Set;

    vfunc_set_email_addresses(value: Gee.Set): void;
}

export const EmailDetails: EmailDetailsNamespace;

export interface ExtendedInfoNamespace {
    $gtype: GObject.GType<ExtendedInfo>;
    prototype: ExtendedInfoPrototype;
}

export type ExtendedInfo = ExtendedInfoPrototype;

export interface ExtendedInfoPrototype extends GObject.Object {
    // Members

    get_extended_field(name: string): ExtendedFieldDetails | null;

    change_extended_field(
        name: string,
        value: ExtendedFieldDetails,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    change_extended_field_finish(_res_: Gio.AsyncResult): void;

    remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    remove_extended_field_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_extended_field(name: string): ExtendedFieldDetails | null;

    vfunc_change_extended_field(
        name: string,
        value: ExtendedFieldDetails,
        _callback_?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_change_extended_field_finish(_res_: Gio.AsyncResult): void;

    vfunc_remove_extended_field(name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_remove_extended_field_finish(_res_: Gio.AsyncResult): void;
}

export const ExtendedInfo: ExtendedInfoNamespace;

export interface FavouriteDetailsNamespace {
    $gtype: GObject.GType<FavouriteDetails>;
    prototype: FavouriteDetailsPrototype;
}

export type FavouriteDetails = FavouriteDetailsPrototype;

export interface FavouriteDetailsPrototype extends GObject.Object {
    // Properties
    is_favourite: boolean;
    isFavourite: boolean;

    // Members

    change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_is_favourite_finish(_res_: Gio.AsyncResult): void;

    get_is_favourite(): boolean;

    set_is_favourite(value: boolean): void;

    vfunc_change_is_favourite(is_favourite: boolean, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_is_favourite_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_is_favourite(): boolean;

    vfunc_set_is_favourite(value: boolean): void;
}

export const FavouriteDetails: FavouriteDetailsNamespace;

export interface GenderDetailsNamespace {
    $gtype: GObject.GType<GenderDetails>;
    prototype: GenderDetailsPrototype;
}

export type GenderDetails = GenderDetailsPrototype;

export interface GenderDetailsPrototype extends GObject.Object {
    // Properties
    gender: Gender;

    // Members

    change_gender(gender: Gender, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_gender_finish(_res_: Gio.AsyncResult): void;

    get_gender(): Gender;

    set_gender(value: Gender): void;

    vfunc_change_gender(gender: Gender, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_gender_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_gender(): Gender;

    vfunc_set_gender(value: Gender): void;
}

export const GenderDetails: GenderDetailsNamespace;

export interface GroupDetailsNamespace {
    $gtype: GObject.GType<GroupDetails>;
    prototype: GroupDetailsPrototype;
}

export type GroupDetails = GroupDetailsPrototype;

export interface GroupDetailsPrototype extends GObject.Object {
    // Properties
    groups: Gee.Set;

    // Members

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
}

export const GroupDetails: GroupDetailsNamespace;

export interface ImDetailsNamespace {
    $gtype: GObject.GType<ImDetails>;
    prototype: ImDetailsPrototype;

    normalise_im_address(im_address: string, protocol: string): string;
}

export type ImDetails = ImDetailsPrototype;

export interface ImDetailsPrototype extends GObject.Object {
    // Properties
    im_addresses: Gee.MultiMap;
    imAddresses: Gee.MultiMap;

    // Members

    change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_im_addresses_finish(_res_: Gio.AsyncResult): void;

    get_im_addresses(): Gee.MultiMap;

    set_im_addresses(value: Gee.MultiMap): void;

    vfunc_change_im_addresses(im_addresses: Gee.MultiMap, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_im_addresses_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_im_addresses(): Gee.MultiMap;

    vfunc_set_im_addresses(value: Gee.MultiMap): void;
}

export const ImDetails: ImDetailsNamespace;

export interface InteractionDetailsNamespace {
    $gtype: GObject.GType<InteractionDetails>;
    prototype: InteractionDetailsPrototype;
}

export type InteractionDetails = InteractionDetailsPrototype;

export interface InteractionDetailsPrototype extends GObject.Object {
    // Properties
    im_interaction_count: number;
    imInteractionCount: number;
    last_im_interaction_datetime: GLib.DateTime;
    lastImInteractionDatetime: GLib.DateTime;
    call_interaction_count: number;
    callInteractionCount: number;
    last_call_interaction_datetime: GLib.DateTime;
    lastCallInteractionDatetime: GLib.DateTime;

    // Members

    get_im_interaction_count(): number;

    get_last_im_interaction_datetime(): GLib.DateTime | null;

    get_call_interaction_count(): number;

    get_last_call_interaction_datetime(): GLib.DateTime | null;

    vfunc_get_im_interaction_count(): number;

    vfunc_get_last_im_interaction_datetime(): GLib.DateTime | null;

    vfunc_get_call_interaction_count(): number;

    vfunc_get_last_call_interaction_datetime(): GLib.DateTime | null;
}

export const InteractionDetails: InteractionDetailsNamespace;

export interface LocalIdDetailsNamespace {
    $gtype: GObject.GType<LocalIdDetails>;
    prototype: LocalIdDetailsPrototype;
}

export type LocalIdDetails = LocalIdDetailsPrototype;

export interface LocalIdDetailsPrototype extends GObject.Object {
    // Properties
    local_ids: Gee.Set;
    localIds: Gee.Set;

    // Members

    change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_local_ids_finish(_res_: Gio.AsyncResult): void;

    get_local_ids(): Gee.Set;

    set_local_ids(value: Gee.Set): void;

    vfunc_change_local_ids(local_ids: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_local_ids_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_local_ids(): Gee.Set;

    vfunc_set_local_ids(value: Gee.Set): void;
}

export const LocalIdDetails: LocalIdDetailsNamespace;

export interface LocationDetailsNamespace {
    $gtype: GObject.GType<LocationDetails>;
    prototype: LocationDetailsPrototype;
}

export type LocationDetails = LocationDetailsPrototype;

export interface LocationDetailsPrototype extends GObject.Object {
    // Properties
    location: Location;

    // Members

    change_location(location?: Location | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_location_finish(_res_: Gio.AsyncResult): void;

    get_location(): Location | null;

    set_location(value?: Location | null): void;

    vfunc_change_location(location?: Location | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_location_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_location(): Location | null;

    vfunc_set_location(value?: Location | null): void;
}

export const LocationDetails: LocationDetailsNamespace;

export interface NameDetailsNamespace {
    $gtype: GObject.GType<NameDetails>;
    prototype: NameDetailsPrototype;
}

export type NameDetails = NameDetailsPrototype;

export interface NameDetailsPrototype extends GObject.Object {
    // Properties
    structured_name: StructuredName;
    structuredName: StructuredName;
    full_name: string;
    fullName: string;
    nickname: string;

    // Members

    change_structured_name(name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_structured_name_finish(_res_: Gio.AsyncResult): void;

    change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_full_name_finish(_res_: Gio.AsyncResult): void;

    change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_nickname_finish(_res_: Gio.AsyncResult): void;

    get_structured_name(): StructuredName | null;

    set_structured_name(value?: StructuredName | null): void;

    get_full_name(): string;

    set_full_name(value: string): void;

    get_nickname(): string;

    set_nickname(value: string): void;

    vfunc_change_structured_name(name?: StructuredName | null, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_structured_name_finish(_res_: Gio.AsyncResult): void;

    vfunc_change_full_name(full_name: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_full_name_finish(_res_: Gio.AsyncResult): void;

    vfunc_change_nickname(nickname: string, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_nickname_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_structured_name(): StructuredName | null;

    vfunc_set_structured_name(value?: StructuredName | null): void;

    vfunc_get_full_name(): string;

    vfunc_set_full_name(value: string): void;

    vfunc_get_nickname(): string;

    vfunc_set_nickname(value: string): void;
}

export const NameDetails: NameDetailsNamespace;

export interface NoteDetailsNamespace {
    $gtype: GObject.GType<NoteDetails>;
    prototype: NoteDetailsPrototype;
}

export type NoteDetails = NoteDetailsPrototype;

export interface NoteDetailsPrototype extends GObject.Object {
    // Properties
    notes: Gee.Set;

    // Members

    change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_notes_finish(_res_: Gio.AsyncResult): void;

    get_notes(): Gee.Set;

    set_notes(value: Gee.Set): void;

    vfunc_change_notes(notes: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_notes_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_notes(): Gee.Set;

    vfunc_set_notes(value: Gee.Set): void;
}

export const NoteDetails: NoteDetailsNamespace;

export interface PhoneDetailsNamespace {
    $gtype: GObject.GType<PhoneDetails>;
    prototype: PhoneDetailsPrototype;
}

export type PhoneDetails = PhoneDetailsPrototype;

export interface PhoneDetailsPrototype extends GObject.Object {
    // Properties
    phone_numbers: Gee.Set;
    phoneNumbers: Gee.Set;

    // Members

    change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_phone_numbers_finish(_res_: Gio.AsyncResult): void;

    get_phone_numbers(): Gee.Set;

    set_phone_numbers(value: Gee.Set): void;

    vfunc_change_phone_numbers(phone_numbers: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_phone_numbers_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_phone_numbers(): Gee.Set;

    vfunc_set_phone_numbers(value: Gee.Set): void;
}

export const PhoneDetails: PhoneDetailsNamespace;

export interface PostalAddressDetailsNamespace {
    $gtype: GObject.GType<PostalAddressDetails>;
    prototype: PostalAddressDetailsPrototype;
}

export type PostalAddressDetails = PostalAddressDetailsPrototype;

export interface PostalAddressDetailsPrototype extends GObject.Object {
    // Properties
    postal_addresses: Gee.Set;
    postalAddresses: Gee.Set;

    // Members

    change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_postal_addresses_finish(_res_: Gio.AsyncResult): void;

    get_postal_addresses(): Gee.Set;

    set_postal_addresses(value: Gee.Set): void;

    vfunc_change_postal_addresses(postal_addresses: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_postal_addresses_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_postal_addresses(): Gee.Set;

    vfunc_set_postal_addresses(value: Gee.Set): void;
}

export const PostalAddressDetails: PostalAddressDetailsNamespace;

export interface PresenceDetailsNamespace {
    $gtype: GObject.GType<PresenceDetails>;
    prototype: PresenceDetailsPrototype;

    get_default_message_from_type(type: PresenceType): string;

    typecmp(type_a: PresenceType, type_b: PresenceType): number;
}

export type PresenceDetails = PresenceDetailsPrototype;

export interface PresenceDetailsPrototype extends GObject.Object {
    // Properties
    presence_type: PresenceType;
    presenceType: PresenceType;
    presence_message: string;
    presenceMessage: string;
    client_types: string[];
    clientTypes: string[];
    presence_status: string;
    presenceStatus: string;

    // Members

    is_online(): boolean;

    get_presence_type(): PresenceType;

    set_presence_type(value: PresenceType): void;

    get_presence_message(): string;

    set_presence_message(value: string): void;

    get_client_types(): string[];

    set_client_types(value: string[]): void;

    get_presence_status(): string;

    set_presence_status(value: string): void;

    vfunc_get_presence_type(): PresenceType;

    vfunc_set_presence_type(value: PresenceType): void;

    vfunc_get_presence_message(): string;

    vfunc_set_presence_message(value: string): void;

    vfunc_get_client_types(): string[];

    vfunc_set_client_types(value: string[]): void;

    vfunc_get_presence_status(): string;

    vfunc_set_presence_status(value: string): void;
}

export const PresenceDetails: PresenceDetailsNamespace;

export interface RoleDetailsNamespace {
    $gtype: GObject.GType<RoleDetails>;
    prototype: RoleDetailsPrototype;
}

export type RoleDetails = RoleDetailsPrototype;

export interface RoleDetailsPrototype extends GObject.Object {
    // Properties
    roles: Gee.Set;

    // Members

    change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_roles_finish(_res_: Gio.AsyncResult): void;

    get_roles(): Gee.Set;

    set_roles(value: Gee.Set): void;

    vfunc_change_roles(roles: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_roles_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_roles(): Gee.Set;

    vfunc_set_roles(value: Gee.Set): void;
}

export const RoleDetails: RoleDetailsNamespace;

export interface UrlDetailsNamespace {
    $gtype: GObject.GType<UrlDetails>;
    prototype: UrlDetailsPrototype;
}

export type UrlDetails = UrlDetailsPrototype;

export interface UrlDetailsPrototype extends GObject.Object {
    // Properties
    urls: Gee.Set;

    // Members

    change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    change_urls_finish(_res_: Gio.AsyncResult): void;

    get_urls(): Gee.Set;

    set_urls(value: Gee.Set): void;

    vfunc_change_urls(urls: Gee.Set, _callback_?: Gio.AsyncReadyCallback<this> | null): void;

    vfunc_change_urls_finish(_res_: Gio.AsyncResult): void;

    vfunc_get_urls(): Gee.Set;

    vfunc_set_urls(value: Gee.Set): void;
}

export const UrlDetails: UrlDetailsNamespace;

export interface WebServiceDetailsNamespace {
    $gtype: GObject.GType<WebServiceDetails>;
    prototype: WebServiceDetailsPrototype;
}

export type WebServiceDetails = WebServiceDetailsPrototype;

export interface WebServiceDetailsPrototype extends GObject.Object {
    // Properties
    web_service_addresses: Gee.MultiMap;
    webServiceAddresses: Gee.MultiMap;

    // Members

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

export const WebServiceDetails: WebServiceDetailsNamespace;
