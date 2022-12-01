/**
 * GData 0.0
 *
 * Generated from 0.17.13
 */

import * as GObject from './gobject';
import * as Goa from './goa';
import * as Json from './json';
import * as Soup from './soup';
import * as libxml2 from './libxml2';
import * as Gio from './gio';
import * as GLib from './glib';

export const ACCESS_ROLE_NONE: string;
export const ACCESS_SCOPE_DEFAULT: string;
export const ACCESS_SCOPE_DOMAIN: string;
export const ACCESS_SCOPE_USER: string;
export const CALENDAR_ACCESS_ROLE_EDITOR: string;
export const CALENDAR_ACCESS_ROLE_FREE_BUSY: string;
export const CALENDAR_ACCESS_ROLE_OWNER: string;
export const CALENDAR_ACCESS_ROLE_READ: string;
export const CALENDAR_ACCESS_ROLE_ROOT: string;
export const CATEGORY_SCHEMA_LABELS: string;
export const CONTACTS_GENDER_FEMALE: string;
export const CONTACTS_GENDER_MALE: string;
export const CONTACTS_GROUP_CONTACTS: string;
export const CONTACTS_GROUP_COWORKERS: string;
export const CONTACTS_GROUP_FAMILY: string;
export const CONTACTS_GROUP_FRIENDS: string;
export const CONTACTS_PRIORITY_HIGH: string;
export const CONTACTS_PRIORITY_LOW: string;
export const CONTACTS_PRIORITY_NORMAL: string;
export const CONTACTS_SENSITIVITY_CONFIDENTIAL: string;
export const CONTACTS_SENSITIVITY_NORMAL: string;
export const CONTACTS_SENSITIVITY_PERSONAL: string;
export const CONTACTS_SENSITIVITY_PRIVATE: string;
export const DOCUMENTS_ACCESS_ROLE_OWNER: string;
export const DOCUMENTS_ACCESS_ROLE_READER: string;
export const DOCUMENTS_ACCESS_ROLE_WRITER: string;
export const DOCUMENTS_DRAWING_JPEG: string;
export const DOCUMENTS_DRAWING_PDF: string;
export const DOCUMENTS_DRAWING_PNG: string;
export const DOCUMENTS_DRAWING_SVG: string;
export const DOCUMENTS_PRESENTATION_PDF: string;
export const DOCUMENTS_PRESENTATION_PNG: string;
export const DOCUMENTS_PRESENTATION_PPT: string;
export const DOCUMENTS_PRESENTATION_SWF: string;
export const DOCUMENTS_PRESENTATION_TXT: string;
export const DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE: string;
export const DOCUMENTS_PROPERTY_VISIBILITY_PUBLIC: string;
export const DOCUMENTS_SPREADSHEET_CSV: string;
export const DOCUMENTS_SPREADSHEET_HTML: string;
export const DOCUMENTS_SPREADSHEET_ODS: string;
export const DOCUMENTS_SPREADSHEET_PDF: string;
export const DOCUMENTS_SPREADSHEET_TSV: string;
export const DOCUMENTS_SPREADSHEET_XLS: string;
export const DOCUMENTS_TEXT_DOC: string;
export const DOCUMENTS_TEXT_HTML: string;
export const DOCUMENTS_TEXT_JPEG: string;
export const DOCUMENTS_TEXT_ODT: string;
export const DOCUMENTS_TEXT_PDF: string;
export const DOCUMENTS_TEXT_PNG: string;
export const DOCUMENTS_TEXT_RTF: string;
export const DOCUMENTS_TEXT_TXT: string;
export const DOCUMENTS_TEXT_ZIP: string;
export const GCONTACT_CALENDAR_FREE_BUSY: string;
export const GCONTACT_CALENDAR_HOME: string;
export const GCONTACT_CALENDAR_WORK: string;
export const GCONTACT_EVENT_ANNIVERSARY: string;
export const GCONTACT_EVENT_OTHER: string;
export const GCONTACT_EXTERNAL_ID_ACCOUNT: string;
export const GCONTACT_EXTERNAL_ID_CUSTOMER: string;
export const GCONTACT_EXTERNAL_ID_NETWORK: string;
export const GCONTACT_EXTERNAL_ID_ORGANIZATION: string;
export const GCONTACT_JOT_HOME: string;
export const GCONTACT_JOT_KEYWORDS: string;
export const GCONTACT_JOT_OTHER: string;
export const GCONTACT_JOT_USER: string;
export const GCONTACT_JOT_WORK: string;
export const GCONTACT_RELATION_ASSISTANT: string;
export const GCONTACT_RELATION_BROTHER: string;
export const GCONTACT_RELATION_CHILD: string;
export const GCONTACT_RELATION_DOMESTIC_PARTNER: string;
export const GCONTACT_RELATION_FATHER: string;
export const GCONTACT_RELATION_FRIEND: string;
export const GCONTACT_RELATION_MANAGER: string;
export const GCONTACT_RELATION_MOTHER: string;
export const GCONTACT_RELATION_PARENT: string;
export const GCONTACT_RELATION_PARTNER: string;
export const GCONTACT_RELATION_REFERRER: string;
export const GCONTACT_RELATION_RELATIVE: string;
export const GCONTACT_RELATION_SISTER: string;
export const GCONTACT_RELATION_SPOUSE: string;
export const GCONTACT_WEBSITE_BLOG: string;
export const GCONTACT_WEBSITE_FTP: string;
export const GCONTACT_WEBSITE_HOME: string;
export const GCONTACT_WEBSITE_HOME_PAGE: string;
export const GCONTACT_WEBSITE_OTHER: string;
export const GCONTACT_WEBSITE_PROFILE: string;
export const GCONTACT_WEBSITE_WORK: string;
export const GD_ADDRESS_USAGE_GENERAL: string;
export const GD_ADDRESS_USAGE_LOCAL: string;
export const GD_EMAIL_ADDRESS_HOME: string;
export const GD_EMAIL_ADDRESS_OTHER: string;
export const GD_EMAIL_ADDRESS_WORK: string;
export const GD_EVENT_STATUS_CANCELED: string;
export const GD_EVENT_STATUS_CONFIRMED: string;
export const GD_EVENT_STATUS_TENTATIVE: string;
export const GD_EVENT_TRANSPARENCY_OPAQUE: string;
export const GD_EVENT_TRANSPARENCY_TRANSPARENT: string;
export const GD_EVENT_VISIBILITY_CONFIDENTIAL: string;
export const GD_EVENT_VISIBILITY_DEFAULT: string;
export const GD_EVENT_VISIBILITY_PRIVATE: string;
export const GD_EVENT_VISIBILITY_PUBLIC: string;
export const GD_IM_ADDRESS_HOME: string;
export const GD_IM_ADDRESS_NETMEETING: string;
export const GD_IM_ADDRESS_OTHER: string;
export const GD_IM_ADDRESS_WORK: string;
export const GD_IM_PROTOCOL_AIM: string;
export const GD_IM_PROTOCOL_GOOGLE_TALK: string;
export const GD_IM_PROTOCOL_ICQ: string;
export const GD_IM_PROTOCOL_JABBER: string;
export const GD_IM_PROTOCOL_LIVE_MESSENGER: string;
export const GD_IM_PROTOCOL_QQ: string;
export const GD_IM_PROTOCOL_SKYPE: string;
export const GD_IM_PROTOCOL_YAHOO_MESSENGER: string;
export const GD_MAIL_CLASS_BOTH: string;
export const GD_MAIL_CLASS_LETTERS: string;
export const GD_MAIL_CLASS_NEITHER: string;
export const GD_MAIL_CLASS_PARCELS: string;
export const GD_ORGANIZATION_OTHER: string;
export const GD_ORGANIZATION_WORK: string;
export const GD_PHONE_NUMBER_ASSISTANT: string;
export const GD_PHONE_NUMBER_CALLBACK: string;
export const GD_PHONE_NUMBER_CAR: string;
export const GD_PHONE_NUMBER_COMPANY_MAIN: string;
export const GD_PHONE_NUMBER_FAX: string;
export const GD_PHONE_NUMBER_HOME: string;
export const GD_PHONE_NUMBER_HOME_FAX: string;
export const GD_PHONE_NUMBER_ISDN: string;
export const GD_PHONE_NUMBER_MAIN: string;
export const GD_PHONE_NUMBER_MOBILE: string;
export const GD_PHONE_NUMBER_OTHER: string;
export const GD_PHONE_NUMBER_OTHER_FAX: string;
export const GD_PHONE_NUMBER_PAGER: string;
export const GD_PHONE_NUMBER_RADIO: string;
export const GD_PHONE_NUMBER_TELEX: string;
export const GD_PHONE_NUMBER_TTY_TDD: string;
export const GD_PHONE_NUMBER_WORK: string;
export const GD_PHONE_NUMBER_WORK_FAX: string;
export const GD_PHONE_NUMBER_WORK_MOBILE: string;
export const GD_PHONE_NUMBER_WORK_PAGER: string;
export const GD_POSTAL_ADDRESS_HOME: string;
export const GD_POSTAL_ADDRESS_OTHER: string;
export const GD_POSTAL_ADDRESS_WORK: string;
export const GD_REMINDER_ALERT: string;
export const GD_REMINDER_EMAIL: string;
export const GD_REMINDER_SMS: string;
export const GD_WHERE_EVENT: string;
export const GD_WHERE_EVENT_ALTERNATE: string;
export const GD_WHERE_EVENT_PARKING: string;
export const GD_WHO_EVENT_ATTENDEE: string;
export const GD_WHO_EVENT_ORGANIZER: string;
export const GD_WHO_EVENT_PERFORMER: string;
export const GD_WHO_EVENT_SPEAKER: string;
export const LINK_ACCESS_CONTROL_LIST: string;
export const LINK_ALTERNATE: string;
export const LINK_BATCH: string;
export const LINK_EDIT: string;
export const LINK_EDIT_MEDIA: string;
export const LINK_ENCLOSURE: string;
export const LINK_PARENT: string;
export const LINK_RELATED: string;
export const LINK_RESUMABLE_CREATE_MEDIA: string;
export const LINK_RESUMABLE_EDIT_MEDIA: string;
export const LINK_SELF: string;
export const LINK_VIA: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const OAUTH2_REDIRECT_URI_OOB: string;
export const OAUTH2_REDIRECT_URI_OOB_AUTO: string;
export const PICASAWEB_VIDEO_STATUS_FAILED: string;
export const PICASAWEB_VIDEO_STATUS_FINAL: string;
export const PICASAWEB_VIDEO_STATUS_PENDING: string;
export const PICASAWEB_VIDEO_STATUS_READY: string;
export const TASKS_STATUS_COMPLETED: string;
export const TASKS_STATUS_NEEDS_ACTION: string;
export const YOUTUBE_ACTION_COMMENT: string;
export const YOUTUBE_ACTION_COMMENT_VOTE: string;
export const YOUTUBE_ACTION_EMBED: string;
export const YOUTUBE_ACTION_RATE: string;
export const YOUTUBE_ACTION_SYNDICATE: string;
export const YOUTUBE_ACTION_VIDEO_RESPOND: string;
export const YOUTUBE_ASPECT_RATIO_WIDESCREEN: string;
export const YOUTUBE_CREDIT_ENTITY_PARTNER: string;
export const YOUTUBE_LICENSE_CC: string;
export const YOUTUBE_LICENSE_STANDARD: string;
export const YOUTUBE_RATING_TYPE_MPAA: string;
export const YOUTUBE_RATING_TYPE_SIMPLE: string;
export const YOUTUBE_RATING_TYPE_V_CHIP: string;

export function client_login_authorizer_error_quark(): GLib.Quark;

export function color_from_hexadecimal(hexadecimal: string): [boolean, Color];

export function documents_service_error_quark(): GLib.Quark;

export function parser_error_quark(): GLib.Quark;

export function service_error_quark(): GLib.Quark;

export function youtube_service_error_quark(): GLib.Quark;

export type BatchOperationCallback = (
    operation_id: number,
    operation_type: BatchOperationType,
    entry: Entry,
    error: GLib.Error
) => void;
export type QueryProgressCallback = (entry: Entry, entry_key: number, entry_count: number) => void;

export namespace BatchOperationType {
    export const $gtype: GObject.GType<BatchOperationType>;
}

export enum BatchOperationType {
    QUERY = 0,
    INSERTION = 1,
    UPDATE = 2,
    DELETION = 3,
}

export class ClientLoginAuthorizerError extends GLib.Error {
    static $gtype: GObject.GType<ClientLoginAuthorizerError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ClientLoginAuthorizerError);

    // Properties
    static BAD_AUTHENTICATION: number;
    static NOT_VERIFIED: number;
    static TERMS_NOT_AGREED: number;
    static CAPTCHA_REQUIRED: number;
    static ACCOUNT_DELETED: number;
    static ACCOUNT_DISABLED: number;
    static SERVICE_DISABLED: number;
    static ACCOUNT_MIGRATED: number;
    static INVALID_SECOND_FACTOR: number;

    // Members
    static quark(): GLib.Quark;
}

export class DocumentsServiceError extends GLib.Error {
    static $gtype: GObject.GType<DocumentsServiceError>;

    constructor(options: { message: string; code: number });
    constructor(copy: DocumentsServiceError);

    // Properties
    static TYPE: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace FreebaseSearchFilterType {
    export const $gtype: GObject.GType<FreebaseSearchFilterType>;
}

export enum FreebaseSearchFilterType {
    ALL = 0,
    ANY = 1,
    NOT = 2,
}

export namespace MediaExpression {
    export const $gtype: GObject.GType<MediaExpression>;
}

export enum MediaExpression {
    SAMPLE = 0,
    FULL = 1,
    NONSTOP = 2,
}

export namespace MediaMedium {
    export const $gtype: GObject.GType<MediaMedium>;
}

export enum MediaMedium {
    UNKNOWN = 0,
    IMAGE = 1,
    AUDIO = 2,
    VIDEO = 3,
    DOCUMENT = 4,
    EXECUTABLE = 5,
}

export namespace OperationType {
    export const $gtype: GObject.GType<OperationType>;
}

export enum OperationType {
    QUERY = 1,
    INSERTION = 2,
    UPDATE = 3,
    DELETION = 4,
    DOWNLOAD = 5,
    UPLOAD = 6,
    AUTHENTICATION = 7,
    BATCH = 8,
}

export class ParserError extends GLib.Error {
    static $gtype: GObject.GType<ParserError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ParserError);

    // Properties
    static PARSING_STRING: number;
    static EMPTY_DOCUMENT: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace PicasaWebVisibility {
    export const $gtype: GObject.GType<PicasaWebVisibility>;
}

export enum PicasaWebVisibility {
    PUBLIC = 1,
    PRIVATE = 2,
}

export class ServiceError extends GLib.Error {
    static $gtype: GObject.GType<ServiceError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ServiceError);

    // Properties
    static UNAVAILABLE: number;
    static PROTOCOL_ERROR: number;
    static ENTRY_ALREADYSERTED: number;
    static AUTHENTICATION_REQUIRED: number;
    static NOT_FOUND: number;
    static CONFLICT: number;
    static FORBIDDEN: number;
    static BAD_QUERY_PARAMETER: number;
    static NETWORK_ERROR: number;
    static PROXY_ERROR: number;
    static WITH_BATCH_OPERATION: number;
    static API_QUOTA_EXCEEDED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace YouTubeAge {
    export const $gtype: GObject.GType<YouTubeAge>;
}

export enum YouTubeAge {
    ALL_TIME = 0,
    TODAY = 1,
    THIS_WEEK = 2,
    THIS_MONTH = 3,
}

export namespace YouTubeFormat {
    export const $gtype: GObject.GType<YouTubeFormat>;
}

export enum YouTubeFormat {
    UNKNOWN = 0,
    RTSP_H263_AMR = 1,
    HTTP_SWF = 5,
    RTSP_MPEG4_AAC = 6,
}

export namespace YouTubePermission {
    export const $gtype: GObject.GType<YouTubePermission>;
}

export enum YouTubePermission {
    ALLOWED = 0,
    DENIED = 1,
    MODERATED = 2,
}

export namespace YouTubeSafeSearch {
    export const $gtype: GObject.GType<YouTubeSafeSearch>;
}

export enum YouTubeSafeSearch {
    NONE = 0,
    MODERATE = 1,
    STRICT = 2,
}

export class YouTubeServiceError extends GLib.Error {
    static $gtype: GObject.GType<YouTubeServiceError>;

    constructor(options: { message: string; code: number });
    constructor(copy: YouTubeServiceError);

    // Properties
    static API_QUOTA_EXCEEDED: number;
    static ENTRY_QUOTA_EXCEEDED: number;
    static CHANNEL_REQUIRED: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace YouTubeSortOrder {
    export const $gtype: GObject.GType<YouTubeSortOrder>;
}

export enum YouTubeSortOrder {
    NONE = 0,
    ASCENDING = 1,
    DESCENDING = 2,
}

export namespace YouTubeStandardFeedType {
    export const $gtype: GObject.GType<YouTubeStandardFeedType>;
}

export enum YouTubeStandardFeedType {
    TOP_RATED_FEED = 0,
    TOP_FAVORITES_FEED = 1,
    MOST_VIEWED_FEED = 2,
    MOST_POPULAR_FEED = 3,
    MOST_RECENT_FEED = 4,
    MOST_DISCUSSED_FEED = 5,
    MOST_LINKED_FEED = 6,
    MOST_RESPONDED_FEED = 7,
    RECENTLY_FEATURED_FEED = 8,
    WATCH_ON_MOBILE_FEED = 9,
}

export namespace YouTubeUploader {
    export const $gtype: GObject.GType<YouTubeUploader>;
}

export enum YouTubeUploader {
    ALL = 0,
    PARTNER = 1,
}

export namespace APPCategories {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        is_fixed: boolean;
        isFixed: boolean;
    }
}

export class APPCategories extends Parsable {
    static $gtype: GObject.GType<APPCategories>;

    constructor(properties?: Partial<APPCategories.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<APPCategories.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_fixed: boolean;
    isFixed: boolean;

    // Members

    get_categories(): Category[];
}

export namespace AccessRule {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        edited: number;
        key: string;
        role: string;
        scope_type: string;
        scopeType: string;
        scope_value: string;
        scopeValue: string;
    }
}

export class AccessRule extends Entry {
    static $gtype: GObject.GType<AccessRule>;

    constructor(properties?: Partial<AccessRule.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AccessRule.ConstructorProperties>, ...args: any[]): void;

    // Properties
    edited: number;
    key: string;
    role: string;
    scope_type: string;
    scopeType: string;
    scope_value: string;
    scopeValue: string;

    // Fields
    priv: AccessRulePrivate | any;

    // Constructors

    static ['new'](id: string): AccessRule;
    static ['new'](...args: never[]): never;

    // Members

    get_edited(): number;

    get_key(): string;

    get_role(): string;

    get_scope(): [string | null, string | null];

    set_role(role: string): void;

    set_scope(type: string, value?: string | null): void;
}

export namespace Author {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        email_address: string;
        emailAddress: string;
        name: string;
        uri: string;
    }
}

export class Author extends Parsable implements Comparable {
    static $gtype: GObject.GType<Author>;

    constructor(properties?: Partial<Author.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Author.ConstructorProperties>, ...args: any[]): void;

    // Properties
    email_address: string;
    emailAddress: string;
    name: string;
    uri: string;

    // Fields
    priv: AuthorPrivate | any;

    // Constructors

    static ['new'](name: string, uri?: string | null, email_address?: string | null): Author;

    // Members

    get_email_address(): string;

    get_name(): string;

    get_uri(): string;

    set_email_address(email_address?: string | null): void;

    set_name(name: string): void;

    set_uri(uri?: string | null): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace AuthorizationDomain {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        scope: string;
        service_name: string;
        serviceName: string;
    }
}

export class AuthorizationDomain extends GObject.Object {
    static $gtype: GObject.GType<AuthorizationDomain>;

    constructor(properties?: Partial<AuthorizationDomain.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AuthorizationDomain.ConstructorProperties>, ...args: any[]): void;

    // Properties
    scope: string;
    service_name: string;
    serviceName: string;

    // Members

    get_scope(): string;

    get_service_name(): string;
}

export namespace BatchOperation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        authorization_domain: AuthorizationDomain;
        authorizationDomain: AuthorizationDomain;
        feed_uri: string;
        feedUri: string;
        service: Service;
    }
}

export class BatchOperation extends GObject.Object {
    static $gtype: GObject.GType<BatchOperation>;

    constructor(properties?: Partial<BatchOperation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BatchOperation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    authorization_domain: AuthorizationDomain;
    authorizationDomain: AuthorizationDomain;
    feed_uri: string;
    feedUri: string;
    service: Service;

    // Fields
    priv: BatchOperationPrivate;

    // Members

    add_deletion(entry: Entry, callback: BatchOperationCallback): number;

    add_insertion(entry: Entry, callback: BatchOperationCallback): number;

    add_query(id: string, entry_type: GObject.GType, callback: BatchOperationCallback): number;

    add_update(entry: Entry, callback: BatchOperationCallback): number;

    get_authorization_domain(): AuthorizationDomain | null;

    get_feed_uri(): string;

    get_service(): Service;

    run(cancellable?: Gio.Cancellable | null): boolean;

    run_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    run_finish(async_result: Gio.AsyncResult): boolean;
}

export namespace CalendarAccessRule {
    export interface ConstructorProperties extends AccessRule.ConstructorProperties {
        [key: string]: any;
    }
}

export class CalendarAccessRule extends AccessRule {
    static $gtype: GObject.GType<CalendarAccessRule>;

    constructor(properties?: Partial<CalendarAccessRule.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalendarAccessRule.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](id: string): CalendarAccessRule;
    static ['new'](...args: never[]): never;
}

export namespace CalendarCalendar {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        access_level: string;
        accessLevel: string;
        color: Color;
        edited: number;
        is_hidden: boolean;
        isHidden: boolean;
        is_selected: boolean;
        isSelected: boolean;
        times_cleaned: number;
        timesCleaned: number;
        timezone: string;
    }
}

export class CalendarCalendar extends Entry implements AccessHandler {
    static $gtype: GObject.GType<CalendarCalendar>;

    constructor(properties?: Partial<CalendarCalendar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalendarCalendar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    access_level: string;
    accessLevel: string;
    color: Color;
    edited: number;
    is_hidden: boolean;
    isHidden: boolean;
    is_selected: boolean;
    isSelected: boolean;
    times_cleaned: number;
    timesCleaned: number;
    timezone: string;

    // Fields
    priv: CalendarCalendarPrivate | any;

    // Constructors

    static ['new'](id?: string | null): CalendarCalendar;

    // Members

    get_access_level(): string;

    get_color(): Color;

    get_edited(): number;

    get_times_cleaned(): number;

    get_timezone(): string;

    set_color(color: Color): void;

    set_is_hidden(is_hidden: boolean): void;

    set_is_selected(is_selected: boolean): void;

    set_timezone(_timezone?: string | null): void;

    // Implemented Members

    get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    get_rules_async(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;
}

export namespace CalendarEvent {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        anyone_can_add_self: boolean;
        anyoneCanAddSelf: boolean;
        edited: number;
        guests_can_invite_others: boolean;
        guestsCanInviteOthers: boolean;
        guests_can_modify: boolean;
        guestsCanModify: boolean;
        guests_can_see_guests: boolean;
        guestsCanSeeGuests: boolean;
        original_event_id: string;
        originalEventId: string;
        original_event_uri: string;
        originalEventUri: string;
        recurrence: string;
        sequence: number;
        status: string;
        transparency: string;
        uid: string;
        visibility: string;
    }
}

export class CalendarEvent extends Entry {
    static $gtype: GObject.GType<CalendarEvent>;

    constructor(properties?: Partial<CalendarEvent.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalendarEvent.ConstructorProperties>, ...args: any[]): void;

    // Properties
    anyone_can_add_self: boolean;
    anyoneCanAddSelf: boolean;
    edited: number;
    guests_can_invite_others: boolean;
    guestsCanInviteOthers: boolean;
    guests_can_modify: boolean;
    guestsCanModify: boolean;
    guests_can_see_guests: boolean;
    guestsCanSeeGuests: boolean;
    original_event_id: string;
    originalEventId: string;
    original_event_uri: string;
    originalEventUri: string;
    recurrence: string;
    sequence: number;
    status: string;
    transparency: string;
    uid: string;
    visibility: string;

    // Fields
    priv: CalendarEventPrivate | any;

    // Constructors

    static ['new'](id?: string | null): CalendarEvent;

    // Members

    add_person(who: GDWho): void;

    add_place(where: GDWhere): void;

    add_time(when: GDWhen): void;

    get_anyone_can_add_self(): boolean;

    get_edited(): number;

    get_guests_can_invite_others(): boolean;

    get_guests_can_modify(): boolean;

    get_guests_can_see_guests(): boolean;

    get_original_event_details(): [string, string];

    get_people(): GDWho[];

    get_places(): GDWhere[];

    get_primary_time(): [boolean, number, number, GDWhen];

    get_recurrence(): string;

    get_sequence(): number;

    get_status(): string;

    get_times(): GDWhen[];

    get_transparency(): string;

    get_uid(): string;

    get_visibility(): string;

    is_exception(): boolean;

    set_anyone_can_add_self(anyone_can_add_self: boolean): void;

    set_guests_can_invite_others(guests_can_invite_others: boolean): void;

    set_guests_can_modify(guests_can_modify: boolean): void;

    set_guests_can_see_guests(guests_can_see_guests: boolean): void;

    set_recurrence(recurrence?: string | null): void;

    set_sequence(sequence: number): void;

    set_status(status?: string | null): void;

    set_transparency(transparency?: string | null): void;

    set_uid(uid?: string | null): void;

    set_visibility(visibility?: string | null): void;
}

export namespace CalendarFeed {
    export interface ConstructorProperties extends Feed.ConstructorProperties {
        [key: string]: any;

        times_cleaned: number;
        timesCleaned: number;
        timezone: string;
    }
}

export class CalendarFeed extends Feed {
    static $gtype: GObject.GType<CalendarFeed>;

    constructor(properties?: Partial<CalendarFeed.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalendarFeed.ConstructorProperties>, ...args: any[]): void;

    // Properties
    times_cleaned: number;
    timesCleaned: number;
    timezone: string;

    // Fields
    priv: CalendarFeedPrivate | any;

    // Members

    get_times_cleaned(): number;

    get_timezone(): string;
}

export namespace CalendarQuery {
    export interface ConstructorProperties extends Query.ConstructorProperties {
        [key: string]: any;

        future_events: boolean;
        futureEvents: boolean;
        max_attendees: number;
        maxAttendees: number;
        order_by: string;
        orderBy: string;
        recurrence_expansion_end: number;
        recurrenceExpansionEnd: number;
        recurrence_expansion_start: number;
        recurrenceExpansionStart: number;
        show_deleted: boolean;
        showDeleted: boolean;
        single_events: boolean;
        singleEvents: boolean;
        sort_order: string;
        sortOrder: string;
        start_max: number;
        startMax: number;
        start_min: number;
        startMin: number;
        timezone: string;
    }
}

export class CalendarQuery extends Query {
    static $gtype: GObject.GType<CalendarQuery>;

    constructor(properties?: Partial<CalendarQuery.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalendarQuery.ConstructorProperties>, ...args: any[]): void;

    // Properties
    future_events: boolean;
    futureEvents: boolean;
    max_attendees: number;
    maxAttendees: number;
    order_by: string;
    orderBy: string;
    recurrence_expansion_end: number;
    recurrenceExpansionEnd: number;
    recurrence_expansion_start: number;
    recurrenceExpansionStart: number;
    show_deleted: boolean;
    showDeleted: boolean;
    single_events: boolean;
    singleEvents: boolean;
    sort_order: string;
    sortOrder: string;
    start_max: number;
    startMax: number;
    start_min: number;
    startMin: number;
    timezone: string;

    // Fields
    priv: CalendarQueryPrivate | any;

    // Constructors

    static ['new'](q?: string | null): CalendarQuery;

    static new_with_limits(q: string | null, start_min: number, start_max: number): CalendarQuery;

    // Members

    get_future_events(): boolean;

    get_max_attendees(): number;

    get_order_by(): string;

    get_recurrence_expansion_end(): number;

    get_recurrence_expansion_start(): number;

    get_single_events(): boolean;

    get_sort_order(): string;

    get_start_max(): number;

    get_start_min(): number;

    get_timezone(): string;

    set_future_events(future_events: boolean): void;

    set_max_attendees(max_attendees: number): void;

    set_order_by(order_by?: string | null): void;

    set_recurrence_expansion_end(end: number): void;

    set_recurrence_expansion_start(start: number): void;

    set_show_deleted(show_deleted: boolean): void;

    set_single_events(single_events: boolean): void;

    set_sort_order(sort_order?: string | null): void;

    set_start_max(start_max: number): void;

    set_start_min(start_min: number): void;

    set_timezone(_timezone?: string | null): void;
}

export namespace CalendarService {
    export interface ConstructorProperties extends Service.ConstructorProperties {
        [key: string]: any;
    }
}

export class CalendarService extends Service implements Batchable {
    static $gtype: GObject.GType<CalendarService>;

    constructor(properties?: Partial<CalendarService.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<CalendarService.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](authorizer?: Authorizer | null): CalendarService;

    // Members

    insert_calendar_event(
        calendar: CalendarCalendar,
        event: CalendarEvent,
        cancellable?: Gio.Cancellable | null
    ): CalendarEvent;

    insert_calendar_event_async(
        calendar: CalendarCalendar,
        event: CalendarEvent,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    insert_event(event: CalendarEvent, cancellable?: Gio.Cancellable | null): CalendarEvent;

    insert_event_async(
        event: CalendarEvent,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_all_calendars(
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_all_calendars_async(
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_events(
        calendar: CalendarCalendar,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_events_async(
        calendar: CalendarCalendar,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_own_calendars(
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_own_calendars_async(
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    static get_primary_authorization_domain(): AuthorizationDomain;

    // Implemented Members

    create_operation(domain: AuthorizationDomain | null, feed_uri: string): BatchOperation;
}

export namespace Category {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        label: string;
        scheme: string;
        term: string;
    }
}

export class Category extends Parsable implements Comparable {
    static $gtype: GObject.GType<Category>;

    constructor(properties?: Partial<Category.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Category.ConstructorProperties>, ...args: any[]): void;

    // Properties
    label: string;
    scheme: string;
    term: string;

    // Fields
    priv: CategoryPrivate | any;

    // Constructors

    static ['new'](term: string, scheme?: string | null, label?: string | null): Category;

    // Members

    get_label(): string;

    get_scheme(): string;

    get_term(): string;

    set_label(label?: string | null): void;

    set_scheme(scheme?: string | null): void;

    set_term(term: string): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace ClientLoginAuthorizer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        client_id: string;
        clientId: string;
        password: string;
        proxy_resolver: Gio.ProxyResolver;
        proxyResolver: Gio.ProxyResolver;
        proxy_uri: Soup.URI;
        proxyUri: Soup.URI;
        timeout: number;
        username: string;
    }
}

export class ClientLoginAuthorizer extends GObject.Object implements Authorizer {
    static $gtype: GObject.GType<ClientLoginAuthorizer>;

    constructor(properties?: Partial<ClientLoginAuthorizer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientLoginAuthorizer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    client_id: string;
    clientId: string;
    password: string;
    proxy_resolver: Gio.ProxyResolver;
    proxyResolver: Gio.ProxyResolver;
    proxy_uri: Soup.URI;
    proxyUri: Soup.URI;
    timeout: number;
    username: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'captcha-challenge', callback: (_source: this, uri: string) => string): number;

    connect_after(signal: 'captcha-challenge', callback: (_source: this, uri: string) => string): number;

    emit(signal: 'captcha-challenge', uri: string): void;

    // Constructors

    static ['new'](client_id: string, service_type: GObject.GType): ClientLoginAuthorizer;

    static new_for_authorization_domains(
        client_id: string,
        authorization_domains: AuthorizationDomain[]
    ): ClientLoginAuthorizer;

    // Members

    authenticate(username: string, password: string, cancellable?: Gio.Cancellable | null): boolean;

    authenticate_async(
        username: string,
        password: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    authenticate_finish(async_result: Gio.AsyncResult): boolean;

    get_client_id(): string;

    get_password(): string;

    get_proxy_resolver(): Gio.ProxyResolver | null;

    get_proxy_uri(): Soup.URI;

    get_timeout(): number;

    get_username(): string;

    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void;

    set_proxy_uri(proxy_uri?: Soup.URI | null): void;

    set_timeout(timeout: number): void;

    // Implemented Members

    is_authorized_for_domain(domain: AuthorizationDomain): boolean;

    process_request(domain: AuthorizationDomain | null, message: Soup.Message): void;

    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    refresh_authorization_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    refresh_authorization_finish(async_result: Gio.AsyncResult): boolean;

    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean;

    vfunc_process_request(domain: AuthorizationDomain | null, message: Soup.Message): void;

    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_refresh_authorization_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean;
}

export namespace Comment {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Comment extends Entry {
    static $gtype: GObject.GType<Comment>;

    constructor(properties?: Partial<Comment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Comment.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: CommentPrivate | any;
}

export namespace ContactsContact {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        billing_information: string;
        billingInformation: string;
        birthday: GLib.Date;
        birthday_has_year: boolean;
        birthdayHasYear: boolean;
        deleted: boolean;
        directory_server: string;
        directoryServer: string;
        edited: number;
        file_as: string;
        fileAs: string;
        gender: string;
        initials: string;
        maiden_name: string;
        maidenName: string;
        mileage: string;
        name: GDName;
        nickname: string;
        occupation: string;
        photo_etag: string;
        photoEtag: string;
        priority: string;
        sensitivity: string;
        short_name: string;
        shortName: string;
        subject: string;
    }
}

export class ContactsContact extends Entry {
    static $gtype: GObject.GType<ContactsContact>;

    constructor(properties?: Partial<ContactsContact.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContactsContact.ConstructorProperties>, ...args: any[]): void;

    // Properties
    billing_information: string;
    billingInformation: string;
    birthday: GLib.Date;
    birthday_has_year: boolean;
    birthdayHasYear: boolean;
    deleted: boolean;
    directory_server: string;
    directoryServer: string;
    edited: number;
    file_as: string;
    fileAs: string;
    gender: string;
    initials: string;
    maiden_name: string;
    maidenName: string;
    mileage: string;
    name: GDName;
    nickname: string;
    occupation: string;
    photo_etag: string;
    photoEtag: string;
    priority: string;
    sensitivity: string;
    short_name: string;
    shortName: string;
    subject: string;

    // Fields
    priv: ContactsContactPrivate | any;

    // Constructors

    static ['new'](id?: string | null): ContactsContact;

    // Members

    add_calendar(calendar: GContactCalendar): void;

    add_email_address(email_address: GDEmailAddress): void;

    add_event(event: GContactEvent): void;

    add_external_id(external_id: GContactExternalID): void;

    add_group(href: string): void;

    add_hobby(hobby: string): void;

    add_im_address(im_address: GDIMAddress): void;

    add_jot(jot: GContactJot): void;

    add_language(language: GContactLanguage): void;

    add_organization(organization: GDOrganization): void;

    add_phone_number(phone_number: GDPhoneNumber): void;

    add_postal_address(postal_address: GDPostalAddress): void;

    add_relation(relation: GContactRelation): void;

    add_website(website: GContactWebsite): void;

    get_billing_information(): string;

    get_birthday(): [boolean, GLib.Date | null];

    get_calendars(): GContactCalendar[];

    get_directory_server(): string;

    get_edited(): number;

    get_email_addresses(): GDEmailAddress[];

    get_events(): GContactEvent[];

    get_extended_properties(): GLib.HashTable<any, any>;

    get_extended_property(name: string): string;

    get_external_ids(): GContactExternalID[];

    get_file_as(): string;

    get_gender(): string;

    get_groups(): string[];

    get_hobbies(): string[];

    get_im_addresses(): GDIMAddress[];

    get_initials(): string;

    get_jots(): GContactJot[];

    get_languages(): GContactLanguage[];

    get_maiden_name(): string;

    get_mileage(): string;

    get_name(): GDName;

    get_nickname(): string;

    get_occupation(): string;

    get_organizations(): GDOrganization[];

    get_phone_numbers(): GDPhoneNumber[];

    get_photo(service: ContactsService, cancellable?: Gio.Cancellable | null): [Uint8Array, string | null];

    get_photo_async(
        service: ContactsService,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_photo_etag(): string;

    get_photo_finish(async_result: Gio.AsyncResult): [Uint8Array, string | null];

    get_postal_addresses(): GDPostalAddress[];

    get_primary_calendar(): GContactCalendar;

    get_primary_email_address(): GDEmailAddress;

    get_primary_im_address(): GDIMAddress;

    get_primary_organization(): GDOrganization;

    get_primary_phone_number(): GDPhoneNumber;

    get_primary_postal_address(): GDPostalAddress;

    get_primary_website(): GContactWebsite;

    get_priority(): string;

    get_relations(): GContactRelation[];

    get_sensitivity(): string;

    get_short_name(): string;

    get_subject(): string;

    get_user_defined_field(name: string): string;

    get_user_defined_fields(): GLib.HashTable<any, any>;

    get_websites(): GContactWebsite[];

    is_deleted(): boolean;

    is_group_deleted(href: string): boolean;

    remove_all_calendars(): void;

    remove_all_email_addresses(): void;

    remove_all_events(): void;

    remove_all_external_ids(): void;

    remove_all_hobbies(): void;

    remove_all_im_addresses(): void;

    remove_all_jots(): void;

    remove_all_languages(): void;

    remove_all_organizations(): void;

    remove_all_phone_numbers(): void;

    remove_all_postal_addresses(): void;

    remove_all_relations(): void;

    remove_all_websites(): void;

    remove_group(href: string): void;

    set_billing_information(billing_information?: string | null): void;

    set_birthday(birthday: GLib.Date | null, birthday_has_year: boolean): void;

    set_directory_server(directory_server?: string | null): void;

    set_extended_property(name: string, value?: string | null): boolean;

    set_file_as(file_as?: string | null): void;

    set_gender(gender?: string | null): void;

    set_initials(initials?: string | null): void;

    set_maiden_name(maiden_name?: string | null): void;

    set_mileage(mileage?: string | null): void;

    set_name(name: GDName): void;

    set_nickname(nickname?: string | null): void;

    set_occupation(occupation?: string | null): void;

    set_photo(
        service: ContactsService,
        data: number | null,
        length: number,
        content_type?: string | null,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    set_photo_async(
        service: ContactsService,
        data: number | null,
        length: number,
        content_type?: string | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_photo_finish(async_result: Gio.AsyncResult): boolean;

    set_priority(priority?: string | null): void;

    set_sensitivity(sensitivity?: string | null): void;

    set_short_name(short_name?: string | null): void;

    set_subject(subject?: string | null): void;

    set_user_defined_field(name: string, value?: string | null): void;
}

export namespace ContactsGroup {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        deleted: boolean;
        edited: number;
        system_group_id: string;
        systemGroupId: string;
    }
}

export class ContactsGroup extends Entry {
    static $gtype: GObject.GType<ContactsGroup>;

    constructor(properties?: Partial<ContactsGroup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContactsGroup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    deleted: boolean;
    edited: number;
    system_group_id: string;
    systemGroupId: string;

    // Fields
    priv: ContactsGroupPrivate | any;

    // Constructors

    static ['new'](id?: string | null): ContactsGroup;

    // Members

    get_edited(): number;

    get_extended_properties(): GLib.HashTable<any, any>;

    get_extended_property(name: string): string;

    get_system_group_id(): string;

    is_deleted(): boolean;

    set_extended_property(name: string, value?: string | null): boolean;
}

export namespace ContactsQuery {
    export interface ConstructorProperties extends Query.ConstructorProperties {
        [key: string]: any;

        group: string;
        order_by: string;
        orderBy: string;
        show_deleted: boolean;
        showDeleted: boolean;
        sort_order: string;
        sortOrder: string;
    }
}

export class ContactsQuery extends Query {
    static $gtype: GObject.GType<ContactsQuery>;

    constructor(properties?: Partial<ContactsQuery.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContactsQuery.ConstructorProperties>, ...args: any[]): void;

    // Properties
    group: string;
    order_by: string;
    orderBy: string;
    show_deleted: boolean;
    showDeleted: boolean;
    sort_order: string;
    sortOrder: string;

    // Fields
    priv: ContactsQueryPrivate | any;

    // Constructors

    static ['new'](q?: string | null): ContactsQuery;

    static new_with_limits(q: string | null, start_index: number, max_results: number): ContactsQuery;

    // Members

    get_group(): string;

    get_order_by(): string;

    get_sort_order(): string;

    set_group(group?: string | null): void;

    set_order_by(order_by?: string | null): void;

    set_show_deleted(show_deleted: boolean): void;

    set_sort_order(sort_order?: string | null): void;
}

export namespace ContactsService {
    export interface ConstructorProperties extends Service.ConstructorProperties {
        [key: string]: any;
    }
}

export class ContactsService extends Service implements Batchable {
    static $gtype: GObject.GType<ContactsService>;

    constructor(properties?: Partial<ContactsService.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContactsService.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](authorizer?: Authorizer | null): ContactsService;

    // Members

    insert_contact(contact: ContactsContact, cancellable?: Gio.Cancellable | null): ContactsContact;

    insert_contact_async(
        contact: ContactsContact,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    insert_group(group: ContactsGroup, cancellable?: Gio.Cancellable | null): ContactsGroup;

    insert_group_async(
        group: ContactsGroup,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_contacts(
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_contacts_async(
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_groups(
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_groups_async(
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    static get_primary_authorization_domain(): AuthorizationDomain;

    // Implemented Members

    create_operation(domain: AuthorizationDomain | null, feed_uri: string): BatchOperation;
}

export namespace DocumentsAccessRule {
    export interface ConstructorProperties extends AccessRule.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocumentsAccessRule extends AccessRule {
    static $gtype: GObject.GType<DocumentsAccessRule>;

    constructor(properties?: Partial<DocumentsAccessRule.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsAccessRule.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](id: string): DocumentsAccessRule;
    static ['new'](...args: never[]): never;
}

export namespace DocumentsDocument {
    export interface ConstructorProperties extends DocumentsEntry.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocumentsDocument extends DocumentsEntry implements AccessHandler {
    static $gtype: GObject.GType<DocumentsDocument>;

    constructor(properties?: Partial<DocumentsDocument.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsDocument.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DocumentsDocumentPrivate | any;

    // Constructors

    static ['new'](id?: string | null): DocumentsDocument;

    // Members

    download(service: DocumentsService, export_format: string, cancellable?: Gio.Cancellable | null): DownloadStream;

    get_download_uri(export_format: string): string | null;

    get_thumbnail_uri(): string | null;

    // Implemented Members

    get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    get_rules_async(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;
}

export namespace DocumentsDrawing {
    export interface ConstructorProperties extends DocumentsDocument.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocumentsDrawing extends DocumentsDocument implements AccessHandler {
    static $gtype: GObject.GType<DocumentsDrawing>;

    constructor(properties?: Partial<DocumentsDrawing.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsDrawing.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DocumentsDrawingPrivate | any;

    // Constructors

    static ['new'](id?: string | null): DocumentsDrawing;

    // Implemented Members

    get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    get_rules_async(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;
}

export namespace DocumentsEntry {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        document_id: string;
        documentId: string;
        edited: number;
        file_size: number;
        fileSize: number;
        is_deleted: boolean;
        isDeleted: boolean;
        last_modified_by: Author;
        lastModifiedBy: Author;
        last_viewed: number;
        lastViewed: number;
        quota_used: number;
        quotaUsed: number;
        resource_id: string;
        resourceId: string;
        writers_can_invite: boolean;
        writersCanInvite: boolean;
    }
}

export abstract class DocumentsEntry extends Entry implements AccessHandler {
    static $gtype: GObject.GType<DocumentsEntry>;

    constructor(properties?: Partial<DocumentsEntry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsEntry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    document_id: string;
    documentId: string;
    edited: number;
    file_size: number;
    fileSize: number;
    is_deleted: boolean;
    isDeleted: boolean;
    last_modified_by: Author;
    lastModifiedBy: Author;
    last_viewed: number;
    lastViewed: number;
    quota_used: number;
    quotaUsed: number;
    resource_id: string;
    resourceId: string;
    writers_can_invite: boolean;
    writersCanInvite: boolean;

    // Fields
    priv: DocumentsEntryPrivate | any;

    // Members

    add_documents_property(property: DocumentsProperty): boolean;

    get_document_id(): string;

    get_document_properties(): DocumentsProperty[];

    get_edited(): number;

    get_file_size(): number;

    get_last_modified_by(): Author;

    get_last_viewed(): number;

    get_path(): string;

    get_quota_used(): number;

    get_resource_id(): string;

    remove_documents_property(property: DocumentsProperty): boolean;

    set_writers_can_invite(writers_can_invite: boolean): void;

    // Implemented Members

    get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    get_rules_async(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;
}

export namespace DocumentsFeed {
    export interface ConstructorProperties extends Feed.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocumentsFeed extends Feed {
    static $gtype: GObject.GType<DocumentsFeed>;

    constructor(properties?: Partial<DocumentsFeed.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsFeed.ConstructorProperties>, ...args: any[]): void;
}

export namespace DocumentsFolder {
    export interface ConstructorProperties extends DocumentsEntry.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocumentsFolder extends DocumentsEntry implements AccessHandler {
    static $gtype: GObject.GType<DocumentsFolder>;

    constructor(properties?: Partial<DocumentsFolder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsFolder.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DocumentsFolderPrivate | any;

    // Constructors

    static ['new'](id?: string | null): DocumentsFolder;

    // Implemented Members

    get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    get_rules_async(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;
}

export namespace DocumentsMetadata {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        quota_total: number;
        quotaTotal: number;
        quota_used: number;
        quotaUsed: number;
    }
}

export class DocumentsMetadata extends Parsable {
    static $gtype: GObject.GType<DocumentsMetadata>;

    constructor(properties?: Partial<DocumentsMetadata.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsMetadata.ConstructorProperties>, ...args: any[]): void;

    // Properties
    quota_total: number;
    quotaTotal: number;
    quota_used: number;
    quotaUsed: number;

    // Fields
    priv: DocumentsMetadataPrivate | any;

    // Members

    get_quota_total(): number;

    get_quota_used(): number;
}

export namespace DocumentsPdf {
    export interface ConstructorProperties extends DocumentsDocument.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocumentsPdf extends DocumentsDocument implements AccessHandler {
    static $gtype: GObject.GType<DocumentsPdf>;

    constructor(properties?: Partial<DocumentsPdf.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsPdf.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DocumentsPdfPrivate | any;

    // Constructors

    static ['new'](id?: string | null): DocumentsPdf;

    // Implemented Members

    get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    get_rules_async(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;
}

export namespace DocumentsPresentation {
    export interface ConstructorProperties extends DocumentsDocument.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocumentsPresentation extends DocumentsDocument implements AccessHandler {
    static $gtype: GObject.GType<DocumentsPresentation>;

    constructor(properties?: Partial<DocumentsPresentation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsPresentation.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DocumentsPresentationPrivate | any;

    // Constructors

    static ['new'](id?: string | null): DocumentsPresentation;

    // Implemented Members

    get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    get_rules_async(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;
}

export namespace DocumentsProperty {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        etag: string;
        key: string;
        value: string;
        visibility: string;
    }
}

export class DocumentsProperty extends Parsable implements Comparable {
    static $gtype: GObject.GType<DocumentsProperty>;

    constructor(properties?: Partial<DocumentsProperty.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsProperty.ConstructorProperties>, ...args: any[]): void;

    // Properties
    etag: string;
    key: string;
    value: string;
    visibility: string;

    // Fields
    priv: DocumentsPropertyPrivate | any;

    // Constructors

    static ['new'](key: string): DocumentsProperty;

    // Members

    get_etag(): string;

    get_key(): string;

    get_value(): string | null;

    get_visibility(): string;

    set_value(value?: string | null): void;

    set_visibility(visibility: string): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace DocumentsQuery {
    export interface ConstructorProperties extends Query.ConstructorProperties {
        [key: string]: any;

        exact_title: boolean;
        exactTitle: boolean;
        folder_id: string;
        folderId: string;
        show_deleted: boolean;
        showDeleted: boolean;
        show_folders: boolean;
        showFolders: boolean;
        title: string;
    }
}

export class DocumentsQuery extends Query {
    static $gtype: GObject.GType<DocumentsQuery>;

    constructor(properties?: Partial<DocumentsQuery.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsQuery.ConstructorProperties>, ...args: any[]): void;

    // Properties
    exact_title: boolean;
    exactTitle: boolean;
    folder_id: string;
    folderId: string;
    show_deleted: boolean;
    showDeleted: boolean;
    show_folders: boolean;
    showFolders: boolean;
    title: string;

    // Fields
    priv: DocumentsQueryPrivate | any;

    // Constructors

    static ['new'](q?: string | null): DocumentsQuery;

    static new_with_limits(q: string | null, start_index: number, max_results: number): DocumentsQuery;

    // Members

    add_collaborator(email_address: string): void;

    add_reader(email_address: string): void;

    get_collaborator_addresses(): GDEmailAddress[];

    get_exact_title(): boolean;

    get_folder_id(): string;

    get_reader_addresses(): GDEmailAddress[];

    get_title(): string;

    set_folder_id(folder_id?: string | null): void;

    set_show_deleted(show_deleted: boolean): void;

    set_show_folders(show_folders: boolean): void;

    set_title(title: string | null, exact_title: boolean): void;
}

export namespace DocumentsService {
    export interface ConstructorProperties extends Service.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocumentsService extends Service implements Batchable {
    static $gtype: GObject.GType<DocumentsService>;

    constructor(properties?: Partial<DocumentsService.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsService.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DocumentsServicePrivate | any;

    // Constructors

    static ['new'](authorizer?: Authorizer | null): DocumentsService;

    // Members

    add_entry_to_folder(
        entry: DocumentsEntry,
        folder: DocumentsFolder,
        cancellable?: Gio.Cancellable | null
    ): DocumentsEntry;

    add_entry_to_folder_async(
        entry: DocumentsEntry,
        folder: DocumentsFolder,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    add_entry_to_folder_finish(async_result: Gio.AsyncResult): DocumentsEntry;

    copy_document(document: DocumentsDocument, cancellable?: Gio.Cancellable | null): DocumentsDocument;

    copy_document_async(
        document: DocumentsDocument,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    copy_document_finish(async_result: Gio.AsyncResult): DocumentsDocument;

    finish_upload(upload_stream: UploadStream): DocumentsDocument;

    get_metadata(cancellable?: Gio.Cancellable | null): DocumentsMetadata;

    get_metadata_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_metadata_finish(async_result: Gio.AsyncResult): DocumentsMetadata;

    query_documents(
        query?: DocumentsQuery | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): DocumentsFeed;

    query_documents_async(
        query?: DocumentsQuery | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_entry_from_folder(
        entry: DocumentsEntry,
        folder: DocumentsFolder,
        cancellable?: Gio.Cancellable | null
    ): DocumentsEntry;

    remove_entry_from_folder_async(
        entry: DocumentsEntry,
        folder: DocumentsFolder,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    remove_entry_from_folder_finish(async_result: Gio.AsyncResult): DocumentsEntry;

    update_document(
        document: DocumentsDocument,
        slug: string,
        content_type: string,
        cancellable?: Gio.Cancellable | null
    ): UploadStream;

    update_document_resumable(
        document: DocumentsDocument,
        slug: string,
        content_type: string,
        content_length: number,
        cancellable?: Gio.Cancellable | null
    ): UploadStream;

    upload_document(
        document: DocumentsDocument | null,
        slug: string,
        content_type: string,
        folder?: DocumentsFolder | null,
        cancellable?: Gio.Cancellable | null
    ): UploadStream;

    upload_document_resumable(
        document: DocumentsDocument | null,
        slug: string,
        content_type: string,
        content_length: number,
        query?: DocumentsUploadQuery | null,
        cancellable?: Gio.Cancellable | null
    ): UploadStream;

    static get_primary_authorization_domain(): AuthorizationDomain;

    static get_spreadsheet_authorization_domain(): AuthorizationDomain;

    static get_upload_uri(folder?: DocumentsFolder | null): string;

    // Implemented Members

    create_operation(domain: AuthorizationDomain | null, feed_uri: string): BatchOperation;
}

export namespace DocumentsSpreadsheet {
    export interface ConstructorProperties extends DocumentsDocument.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocumentsSpreadsheet extends DocumentsDocument implements AccessHandler {
    static $gtype: GObject.GType<DocumentsSpreadsheet>;

    constructor(properties?: Partial<DocumentsSpreadsheet.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsSpreadsheet.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DocumentsSpreadsheetPrivate | any;

    // Constructors

    static ['new'](id?: string | null): DocumentsSpreadsheet;

    // Members

    get_download_uri(export_format: string, gid: number): string;
    get_download_uri(...args: never[]): never;

    // Implemented Members

    get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    get_rules_async(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;
}

export namespace DocumentsText {
    export interface ConstructorProperties extends DocumentsDocument.ConstructorProperties {
        [key: string]: any;
    }
}

export class DocumentsText extends DocumentsDocument implements AccessHandler {
    static $gtype: GObject.GType<DocumentsText>;

    constructor(properties?: Partial<DocumentsText.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsText.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: DocumentsTextPrivate | any;

    // Constructors

    static ['new'](id?: string | null): DocumentsText;

    // Implemented Members

    get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    get_rules_async(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;
}

export namespace DocumentsUploadQuery {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        convert: boolean;
        folder: DocumentsFolder;
    }
}

export class DocumentsUploadQuery extends GObject.Object {
    static $gtype: GObject.GType<DocumentsUploadQuery>;

    constructor(properties?: Partial<DocumentsUploadQuery.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DocumentsUploadQuery.ConstructorProperties>, ...args: any[]): void;

    // Properties
    convert: boolean;
    folder: DocumentsFolder;

    // Fields
    priv: DocumentsUploadQueryPrivate;

    // Constructors

    static ['new'](): DocumentsUploadQuery;

    // Members

    build_uri(): string;

    get_convert(): boolean;

    get_folder(): DocumentsFolder | null;

    set_convert(convert: boolean): void;

    set_folder(folder?: DocumentsFolder | null): void;
}

export namespace DownloadStream {
    export interface ConstructorProperties extends Gio.InputStream.ConstructorProperties {
        [key: string]: any;

        authorization_domain: AuthorizationDomain;
        authorizationDomain: AuthorizationDomain;
        cancellable: Gio.Cancellable;
        content_length: number;
        contentLength: number;
        content_type: string;
        contentType: string;
        download_uri: string;
        downloadUri: string;
        service: Service;
    }
}

export class DownloadStream extends Gio.InputStream implements Gio.Seekable {
    static $gtype: GObject.GType<DownloadStream>;

    constructor(properties?: Partial<DownloadStream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<DownloadStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    authorization_domain: AuthorizationDomain;
    authorizationDomain: AuthorizationDomain;
    cancellable: Gio.Cancellable;
    content_length: number;
    contentLength: number;
    content_type: string;
    contentType: string;
    download_uri: string;
    downloadUri: string;
    service: Service;

    // Fields
    priv: DownloadStreamPrivate;

    // Constructors

    static ['new'](
        service: Service,
        domain: AuthorizationDomain | null,
        download_uri: string,
        cancellable?: Gio.Cancellable | null
    ): DownloadStream;

    // Members

    get_authorization_domain(): AuthorizationDomain | null;

    get_cancellable(): Gio.Cancellable;

    get_content_length(): number;

    get_content_type(): string;

    get_download_uri(): string;

    get_service(): Service;

    // Implemented Members

    can_seek(): boolean;

    can_truncate(): boolean;

    seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    tell(): number;

    truncate(offset: number, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_can_seek(): boolean;

    vfunc_can_truncate(): boolean;

    vfunc_seek(offset: number, type: GLib.SeekType, cancellable?: Gio.Cancellable | null): boolean;

    vfunc_tell(): number;

    vfunc_truncate_fn(offset: number, cancellable?: Gio.Cancellable | null): boolean;
}

export namespace Entry {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        content: string;
        content_uri: string;
        contentUri: string;
        etag: string;
        id: string;
        is_inserted: boolean;
        isInserted: boolean;
        published: number;
        rights: string;
        summary: string;
        title: string;
        updated: number;
    }
}

export class Entry extends Parsable {
    static $gtype: GObject.GType<Entry>;

    constructor(properties?: Partial<Entry.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Entry.ConstructorProperties>, ...args: any[]): void;

    // Properties
    content: string;
    content_uri: string;
    contentUri: string;
    etag: string;
    id: string;
    is_inserted: boolean;
    isInserted: boolean;
    published: number;
    rights: string;
    summary: string;
    title: string;
    updated: number;

    // Fields
    priv: EntryPrivate | any;

    // Constructors

    static ['new'](id?: string | null): Entry;

    // Members

    add_author(author: Author): void;

    add_category(category: Category): void;

    add_link(_link: Link): void;

    get_authors(): Author[];

    get_categories(): Category[];

    get_content(): string;

    get_content_uri(): string;

    get_etag(): string | null;

    get_id(): string | null;

    get_published(): number;

    get_rights(): string;

    get_summary(): string;

    get_title(): string;

    get_updated(): number;

    look_up_link(rel: string): Link;

    look_up_links(rel: string): Link[];

    remove_link(_link: Link): boolean;

    set_content(content?: string | null): void;

    set_content_uri(content_uri?: string | null): void;

    set_rights(rights?: string | null): void;

    set_summary(summary?: string | null): void;

    set_title(title?: string | null): void;
}

export namespace Feed {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        etag: string;
        generator: Generator;
        icon: string;
        id: string;
        items_per_page: number;
        itemsPerPage: number;
        logo: string;
        next_page_token: string;
        nextPageToken: string;
        rights: string;
        start_index: number;
        startIndex: number;
        subtitle: string;
        title: string;
        total_results: number;
        totalResults: number;
        updated: number;
    }
}

export class Feed extends Parsable {
    static $gtype: GObject.GType<Feed>;

    constructor(properties?: Partial<Feed.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Feed.ConstructorProperties>, ...args: any[]): void;

    // Properties
    etag: string;
    generator: Generator;
    icon: string;
    id: string;
    items_per_page: number;
    itemsPerPage: number;
    logo: string;
    next_page_token: string;
    nextPageToken: string;
    rights: string;
    start_index: number;
    startIndex: number;
    subtitle: string;
    title: string;
    total_results: number;
    totalResults: number;
    updated: number;

    // Members

    get_authors(): Author[];

    get_categories(): Category[];

    get_entries(): Entry[];

    get_etag(): string;

    get_generator(): Generator;

    get_icon(): string;

    get_id(): string;

    get_items_per_page(): number;

    get_links(): Link[];

    get_logo(): string;

    get_next_page_token(): string | null;

    get_rights(): string;

    get_start_index(): number;

    get_subtitle(): string;

    get_title(): string;

    get_total_results(): number;

    get_updated(): number;

    look_up_entry(id: string): Entry;

    look_up_link(rel: string): Link;
}

export namespace FreebaseQuery {
    export interface ConstructorProperties extends Query.ConstructorProperties {
        [key: string]: any;

        variant: GLib.Variant;
    }
}

export class FreebaseQuery extends Query {
    static $gtype: GObject.GType<FreebaseQuery>;

    constructor(properties?: Partial<FreebaseQuery.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FreebaseQuery.ConstructorProperties>, ...args: any[]): void;

    // Properties
    variant: GLib.Variant;

    // Constructors

    static ['new'](mql: string): FreebaseQuery;
    static ['new'](...args: never[]): never;

    static new_from_variant(variant: GLib.Variant): FreebaseQuery;
}

export namespace FreebaseResult {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        variant: GLib.Variant;
    }
}

export class FreebaseResult extends Entry {
    static $gtype: GObject.GType<FreebaseResult>;

    constructor(properties?: Partial<FreebaseResult.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FreebaseResult.ConstructorProperties>, ...args: any[]): void;

    // Properties
    variant: GLib.Variant;

    // Fields
    priv: FreebaseResultPrivate | any;

    // Constructors

    static ['new'](): FreebaseResult;
    static ['new'](...args: never[]): never;

    // Members

    dup_variant(): GLib.Variant | null;
}

export namespace FreebaseSearchQuery {
    export interface ConstructorProperties extends Query.ConstructorProperties {
        [key: string]: any;

        language: string;
        stemmed: boolean;
    }
}

export class FreebaseSearchQuery extends Query {
    static $gtype: GObject.GType<FreebaseSearchQuery>;

    constructor(properties?: Partial<FreebaseSearchQuery.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FreebaseSearchQuery.ConstructorProperties>, ...args: any[]): void;

    // Properties
    language: string;
    stemmed: boolean;

    // Fields
    priv: FreebaseSearchQueryPrivate | any;

    // Constructors

    static ['new'](search_terms: string): FreebaseSearchQuery;
    static ['new'](...args: never[]): never;

    // Members

    add_filter(property: string, value: string): void;

    add_location(radius: number, lat: number, lon: number): void;

    close_filter(): void;

    get_language(): string | null;

    get_stemmed(): boolean;

    open_filter(filter_type: FreebaseSearchFilterType): void;

    set_language(lang?: string | null): void;

    set_stemmed(stemmed: boolean): void;
}

export namespace FreebaseSearchResult {
    export interface ConstructorProperties extends FreebaseResult.ConstructorProperties {
        [key: string]: any;
    }
}

export class FreebaseSearchResult extends FreebaseResult {
    static $gtype: GObject.GType<FreebaseSearchResult>;

    constructor(properties?: Partial<FreebaseSearchResult.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FreebaseSearchResult.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FreebaseSearchResultPrivate | any;

    // Constructors

    static ['new'](): FreebaseSearchResult;
    static ['new'](...args: never[]): never;

    // Members

    get_item(i: number): FreebaseSearchResultItem | null;

    get_num_items(): number;

    get_total_hits(): number;
}

export namespace FreebaseService {
    export interface ConstructorProperties extends Service.ConstructorProperties {
        [key: string]: any;

        developer_key: string;
        developerKey: string;
    }
}

export class FreebaseService extends Service {
    static $gtype: GObject.GType<FreebaseService>;

    constructor(properties?: Partial<FreebaseService.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FreebaseService.ConstructorProperties>, ...args: any[]): void;

    // Properties
    developer_key: string;
    developerKey: string;

    // Constructors

    static ['new'](developer_key?: string | null, authorizer?: Authorizer | null): FreebaseService;

    // Members

    get_image(
        value: FreebaseTopicValue,
        cancellable: Gio.Cancellable | null,
        max_width: number,
        max_height: number
    ): Gio.InputStream;

    get_topic(query: FreebaseTopicQuery, cancellable?: Gio.Cancellable | null): FreebaseTopicResult;

    get_topic_async(
        query: FreebaseTopicQuery,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query(query: FreebaseQuery, cancellable?: Gio.Cancellable | null): FreebaseResult;
    query(...args: never[]): never;

    query_async(
        query: FreebaseQuery,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_async(...args: never[]): never;

    search(query: FreebaseSearchQuery, cancellable?: Gio.Cancellable | null): FreebaseSearchResult;

    search_async(
        query: FreebaseSearchQuery,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    static get_primary_authorization_domain(): AuthorizationDomain;
}

export namespace FreebaseTopicQuery {
    export interface ConstructorProperties extends Query.ConstructorProperties {
        [key: string]: any;

        filter: string[];
        language: string;
    }
}

export class FreebaseTopicQuery extends Query {
    static $gtype: GObject.GType<FreebaseTopicQuery>;

    constructor(properties?: Partial<FreebaseTopicQuery.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FreebaseTopicQuery.ConstructorProperties>, ...args: any[]): void;

    // Properties
    filter: string[];
    language: string;

    // Fields
    priv: FreebaseTopicQueryPrivate | any;

    // Constructors

    static ['new'](id: string): FreebaseTopicQuery;
    static ['new'](...args: never[]): never;

    // Members

    get_filter(): string[] | null;

    get_language(): string | null;

    set_filter(filter?: string[] | null): void;

    set_language(lang?: string | null): void;
}

export namespace FreebaseTopicResult {
    export interface ConstructorProperties extends FreebaseResult.ConstructorProperties {
        [key: string]: any;
    }
}

export class FreebaseTopicResult extends FreebaseResult {
    static $gtype: GObject.GType<FreebaseTopicResult>;

    constructor(properties?: Partial<FreebaseTopicResult.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<FreebaseTopicResult.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: FreebaseTopicResultPrivate | any;

    // Constructors

    static ['new'](): FreebaseTopicResult;
    static ['new'](...args: never[]): never;

    // Members

    dup_object(): FreebaseTopicObject;
}

export namespace GContactCalendar {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        is_primary: boolean;
        isPrimary: boolean;
        label: string;
        relation_type: string;
        relationType: string;
        uri: string;
    }
}

export class GContactCalendar extends Parsable implements Comparable {
    static $gtype: GObject.GType<GContactCalendar>;

    constructor(properties?: Partial<GContactCalendar.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GContactCalendar.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_primary: boolean;
    isPrimary: boolean;
    label: string;
    relation_type: string;
    relationType: string;
    uri: string;

    // Fields
    priv: GContactCalendarPrivate | any;

    // Constructors

    static ['new'](
        uri: string,
        relation_type: string | null,
        label: string | null,
        is_primary: boolean
    ): GContactCalendar;

    // Members

    get_label(): string;

    get_relation_type(): string;

    get_uri(): string;

    set_is_primary(is_primary: boolean): void;

    set_label(label?: string | null): void;

    set_relation_type(relation_type?: string | null): void;

    set_uri(uri: string): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GContactEvent {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        date: GLib.Date;
        label: string;
        relation_type: string;
        relationType: string;
    }
}

export class GContactEvent extends Parsable {
    static $gtype: GObject.GType<GContactEvent>;

    constructor(properties?: Partial<GContactEvent.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GContactEvent.ConstructorProperties>, ...args: any[]): void;

    // Properties
    date: GLib.Date;
    label: string;
    relation_type: string;
    relationType: string;

    // Fields
    priv: GContactEventPrivate | any;

    // Constructors

    static ['new'](date: GLib.Date, relation_type?: string | null, label?: string | null): GContactEvent;

    // Members

    get_date(): GLib.Date;

    get_label(): string;

    get_relation_type(): string;

    set_date(date: GLib.Date): void;

    set_label(label?: string | null): void;

    set_relation_type(relation_type?: string | null): void;
}

export namespace GContactExternalID {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        label: string;
        relation_type: string;
        relationType: string;
        value: string;
    }
}

export class GContactExternalID extends Parsable implements Comparable {
    static $gtype: GObject.GType<GContactExternalID>;

    constructor(properties?: Partial<GContactExternalID.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GContactExternalID.ConstructorProperties>, ...args: any[]): void;

    // Properties
    label: string;
    relation_type: string;
    relationType: string;
    value: string;

    // Fields
    priv: GContactExternalIDPrivate | any;

    // Constructors

    static ['new'](value: string, relation_type?: string | null, label?: string | null): GContactExternalID;

    // Members

    get_label(): string;

    get_relation_type(): string;

    get_value(): string;

    set_label(label?: string | null): void;

    set_relation_type(relation_type?: string | null): void;

    set_value(value: string): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GContactJot {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        content: string;
        relation_type: string;
        relationType: string;
    }
}

export class GContactJot extends Parsable {
    static $gtype: GObject.GType<GContactJot>;

    constructor(properties?: Partial<GContactJot.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GContactJot.ConstructorProperties>, ...args: any[]): void;

    // Properties
    content: string;
    relation_type: string;
    relationType: string;

    // Fields
    priv: GContactJotPrivate | any;

    // Constructors

    static ['new'](content: string, relation_type: string): GContactJot;

    // Members

    get_content(): string;

    get_relation_type(): string;

    set_content(content: string): void;

    set_relation_type(relation_type: string): void;
}

export namespace GContactLanguage {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        code: string;
        label: string;
    }
}

export class GContactLanguage extends Parsable implements Comparable {
    static $gtype: GObject.GType<GContactLanguage>;

    constructor(properties?: Partial<GContactLanguage.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GContactLanguage.ConstructorProperties>, ...args: any[]): void;

    // Properties
    code: string;
    label: string;

    // Fields
    priv: GContactLanguagePrivate | any;

    // Constructors

    static ['new'](code?: string | null, label?: string | null): GContactLanguage;

    // Members

    get_code(): string;

    get_label(): string;

    set_code(code?: string | null): void;

    set_label(label?: string | null): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GContactRelation {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        label: string;
        name: string;
        relation_type: string;
        relationType: string;
    }
}

export class GContactRelation extends Parsable {
    static $gtype: GObject.GType<GContactRelation>;

    constructor(properties?: Partial<GContactRelation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GContactRelation.ConstructorProperties>, ...args: any[]): void;

    // Properties
    label: string;
    name: string;
    relation_type: string;
    relationType: string;

    // Fields
    priv: GContactRelationPrivate | any;

    // Constructors

    static ['new'](name: string, relation_type?: string | null, label?: string | null): GContactRelation;

    // Members

    get_label(): string;

    get_name(): string;

    get_relation_type(): string;

    set_label(label?: string | null): void;

    set_name(name?: string | null): void;

    set_relation_type(relation_type?: string | null): void;
}

export namespace GContactWebsite {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        is_primary: boolean;
        isPrimary: boolean;
        label: string;
        relation_type: string;
        relationType: string;
        uri: string;
    }
}

export class GContactWebsite extends Parsable implements Comparable {
    static $gtype: GObject.GType<GContactWebsite>;

    constructor(properties?: Partial<GContactWebsite.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GContactWebsite.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_primary: boolean;
    isPrimary: boolean;
    label: string;
    relation_type: string;
    relationType: string;
    uri: string;

    // Fields
    priv: GContactWebsitePrivate | any;

    // Constructors

    static ['new'](uri: string, relation_type: string, label: string | null, is_primary: boolean): GContactWebsite;

    // Members

    get_label(): string;

    get_relation_type(): string;

    get_uri(): string;

    set_is_primary(is_primary: boolean): void;

    set_label(label?: string | null): void;

    set_relation_type(relation_type: string): void;

    set_uri(uri: string): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GDEmailAddress {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        address: string;
        display_name: string;
        displayName: string;
        is_primary: boolean;
        isPrimary: boolean;
        label: string;
        relation_type: string;
        relationType: string;
    }
}

export class GDEmailAddress extends Parsable implements Comparable {
    static $gtype: GObject.GType<GDEmailAddress>;

    constructor(properties?: Partial<GDEmailAddress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GDEmailAddress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    address: string;
    display_name: string;
    displayName: string;
    is_primary: boolean;
    isPrimary: boolean;
    label: string;
    relation_type: string;
    relationType: string;

    // Fields
    priv: GDEmailAddressPrivate | any;

    // Constructors

    static ['new'](
        address: string,
        relation_type: string | null,
        label: string | null,
        is_primary: boolean
    ): GDEmailAddress;

    // Members

    get_address(): string;

    get_display_name(): string;

    get_label(): string;

    get_relation_type(): string;

    set_address(address: string): void;

    set_display_name(display_name?: string | null): void;

    set_is_primary(is_primary: boolean): void;

    set_label(label?: string | null): void;

    set_relation_type(relation_type?: string | null): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GDIMAddress {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        address: string;
        is_primary: boolean;
        isPrimary: boolean;
        label: string;
        protocol: string;
        relation_type: string;
        relationType: string;
    }
}

export class GDIMAddress extends Parsable implements Comparable {
    static $gtype: GObject.GType<GDIMAddress>;

    constructor(properties?: Partial<GDIMAddress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GDIMAddress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    address: string;
    is_primary: boolean;
    isPrimary: boolean;
    label: string;
    protocol: string;
    relation_type: string;
    relationType: string;

    // Fields
    priv: GDIMAddressPrivate | any;

    // Constructors

    static ['new'](
        address: string,
        protocol: string | null,
        relation_type: string | null,
        label: string | null,
        is_primary: boolean
    ): GDIMAddress;

    // Members

    get_address(): string;

    get_label(): string;

    get_protocol(): string;

    get_relation_type(): string;

    set_address(address: string): void;

    set_is_primary(is_primary: boolean): void;

    set_label(label?: string | null): void;

    set_protocol(protocol?: string | null): void;

    set_relation_type(relation_type?: string | null): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GDName {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        additional_name: string;
        additionalName: string;
        family_name: string;
        familyName: string;
        full_name: string;
        fullName: string;
        given_name: string;
        givenName: string;
        prefix: string;
        suffix: string;
    }
}

export class GDName extends Parsable implements Comparable {
    static $gtype: GObject.GType<GDName>;

    constructor(properties?: Partial<GDName.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GDName.ConstructorProperties>, ...args: any[]): void;

    // Properties
    additional_name: string;
    additionalName: string;
    family_name: string;
    familyName: string;
    full_name: string;
    fullName: string;
    given_name: string;
    givenName: string;
    prefix: string;
    suffix: string;

    // Fields
    priv: GDNamePrivate | any;

    // Constructors

    static ['new'](given_name?: string | null, family_name?: string | null): GDName;

    // Members

    get_additional_name(): string;

    get_family_name(): string;

    get_full_name(): string;

    get_given_name(): string;

    get_prefix(): string;

    get_suffix(): string;

    set_additional_name(additional_name?: string | null): void;

    set_family_name(family_name?: string | null): void;

    set_full_name(full_name?: string | null): void;

    set_given_name(given_name?: string | null): void;

    set_prefix(prefix?: string | null): void;

    set_suffix(suffix?: string | null): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GDOrganization {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        department: string;
        is_primary: boolean;
        isPrimary: boolean;
        job_description: string;
        jobDescription: string;
        label: string;
        location: GDWhere;
        name: string;
        relation_type: string;
        relationType: string;
        symbol: string;
        title: string;
    }
}

export class GDOrganization extends Parsable implements Comparable {
    static $gtype: GObject.GType<GDOrganization>;

    constructor(properties?: Partial<GDOrganization.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GDOrganization.ConstructorProperties>, ...args: any[]): void;

    // Properties
    department: string;
    is_primary: boolean;
    isPrimary: boolean;
    job_description: string;
    jobDescription: string;
    label: string;
    location: GDWhere;
    name: string;
    relation_type: string;
    relationType: string;
    symbol: string;
    title: string;

    // Fields
    priv: GDOrganizationPrivate | any;

    // Constructors

    static ['new'](
        name: string | null,
        title: string | null,
        relation_type: string | null,
        label: string | null,
        is_primary: boolean
    ): GDOrganization;

    // Members

    get_department(): string;

    get_job_description(): string;

    get_label(): string;

    get_location(): GDWhere;

    get_name(): string;

    get_relation_type(): string;

    get_symbol(): string;

    get_title(): string;

    set_department(department?: string | null): void;

    set_is_primary(is_primary: boolean): void;

    set_job_description(job_description?: string | null): void;

    set_label(label?: string | null): void;

    set_location(location?: GDWhere | null): void;

    set_name(name?: string | null): void;

    set_relation_type(relation_type?: string | null): void;

    set_symbol(symbol?: string | null): void;

    set_title(title?: string | null): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GDPhoneNumber {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        is_primary: boolean;
        isPrimary: boolean;
        label: string;
        number: string;
        relation_type: string;
        relationType: string;
        uri: string;
    }
}

export class GDPhoneNumber extends Parsable implements Comparable {
    static $gtype: GObject.GType<GDPhoneNumber>;

    constructor(properties?: Partial<GDPhoneNumber.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GDPhoneNumber.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_primary: boolean;
    isPrimary: boolean;
    label: string;
    number: string;
    relation_type: string;
    relationType: string;
    uri: string;

    // Fields
    priv: GDPhoneNumberPrivate | any;

    // Constructors

    static ['new'](
        number: string,
        relation_type: string | null,
        label: string | null,
        uri: string | null,
        is_primary: boolean
    ): GDPhoneNumber;

    // Members

    get_label(): string;

    get_number(): string;

    get_relation_type(): string;

    get_uri(): string;

    set_is_primary(is_primary: boolean): void;

    set_label(label?: string | null): void;

    set_number(number: string): void;

    set_relation_type(relation_type?: string | null): void;

    set_uri(uri?: string | null): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GDPostalAddress {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        address: string;
        agent: string;
        city: string;
        country: string;
        country_code: string;
        countryCode: string;
        house_name: string;
        houseName: string;
        is_primary: boolean;
        isPrimary: boolean;
        label: string;
        mail_class: string;
        mailClass: string;
        neighborhood: string;
        po_box: string;
        poBox: string;
        postcode: string;
        region: string;
        relation_type: string;
        relationType: string;
        street: string;
        subregion: string;
        usage: string;
    }
}

export class GDPostalAddress extends Parsable implements Comparable {
    static $gtype: GObject.GType<GDPostalAddress>;

    constructor(properties?: Partial<GDPostalAddress.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GDPostalAddress.ConstructorProperties>, ...args: any[]): void;

    // Properties
    address: string;
    agent: string;
    city: string;
    country: string;
    country_code: string;
    countryCode: string;
    house_name: string;
    houseName: string;
    is_primary: boolean;
    isPrimary: boolean;
    label: string;
    mail_class: string;
    mailClass: string;
    neighborhood: string;
    po_box: string;
    poBox: string;
    postcode: string;
    region: string;
    relation_type: string;
    relationType: string;
    street: string;
    subregion: string;
    usage: string;

    // Fields
    priv: GDPostalAddressPrivate | any;

    // Constructors

    static ['new'](relation_type: string | null, label: string | null, is_primary: boolean): GDPostalAddress;

    // Members

    get_address(): string;

    get_agent(): string;

    get_city(): string;

    get_country(): string;

    get_country_code(): string;

    get_house_name(): string;

    get_label(): string;

    get_mail_class(): string;

    get_neighborhood(): string;

    get_po_box(): string;

    get_postcode(): string;

    get_region(): string;

    get_relation_type(): string;

    get_street(): string;

    get_subregion(): string;

    get_usage(): string;

    set_address(address?: string | null): void;

    set_agent(agent?: string | null): void;

    set_city(city?: string | null): void;

    set_country(country?: string | null, country_code?: string | null): void;

    set_house_name(house_name?: string | null): void;

    set_is_primary(is_primary: boolean): void;

    set_label(label?: string | null): void;

    set_mail_class(mail_class?: string | null): void;

    set_neighborhood(neighborhood?: string | null): void;

    set_po_box(po_box?: string | null): void;

    set_postcode(postcode?: string | null): void;

    set_region(region?: string | null): void;

    set_relation_type(relation_type?: string | null): void;

    set_street(street?: string | null): void;

    set_subregion(subregion?: string | null): void;

    set_usage(usage?: string | null): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GDReminder {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        absolute_time: number;
        absoluteTime: number;
        is_absolute_time: boolean;
        isAbsoluteTime: boolean;
        method: string;
        relative_time: number;
        relativeTime: number;
    }
}

export class GDReminder extends Parsable implements Comparable {
    static $gtype: GObject.GType<GDReminder>;

    constructor(properties?: Partial<GDReminder.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GDReminder.ConstructorProperties>, ...args: any[]): void;

    // Properties
    absolute_time: number;
    absoluteTime: number;
    is_absolute_time: boolean;
    isAbsoluteTime: boolean;
    method: string;
    relative_time: number;
    relativeTime: number;

    // Fields
    priv: GDReminderPrivate | any;

    // Constructors

    static ['new'](method: string | null, absolute_time: number, relative_time: number): GDReminder;

    // Members

    get_absolute_time(): number;

    get_method(): string;

    get_relative_time(): number;

    set_absolute_time(absolute_time: number): void;

    set_method(method?: string | null): void;

    set_relative_time(relative_time: number): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GDWhen {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        end_time: number;
        endTime: number;
        is_date: boolean;
        isDate: boolean;
        start_time: number;
        startTime: number;
        value_string: string;
        valueString: string;
    }
}

export class GDWhen extends Parsable implements Comparable {
    static $gtype: GObject.GType<GDWhen>;

    constructor(properties?: Partial<GDWhen.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GDWhen.ConstructorProperties>, ...args: any[]): void;

    // Properties
    end_time: number;
    endTime: number;
    is_date: boolean;
    isDate: boolean;
    start_time: number;
    startTime: number;
    value_string: string;
    valueString: string;

    // Fields
    priv: GDWhenPrivate | any;

    // Constructors

    static ['new'](start_time: number, end_time: number, is_date: boolean): GDWhen;

    // Members

    add_reminder(reminder: GDReminder): void;

    get_end_time(): number;

    get_reminders(): GDReminder[];

    get_start_time(): number;

    get_value_string(): string;

    set_end_time(end_time: number): void;

    set_is_date(is_date: boolean): void;

    set_start_time(start_time: number): void;

    set_value_string(value_string?: string | null): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GDWhere {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        label: string;
        relation_type: string;
        relationType: string;
        value_string: string;
        valueString: string;
    }
}

export class GDWhere extends Parsable implements Comparable {
    static $gtype: GObject.GType<GDWhere>;

    constructor(properties?: Partial<GDWhere.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GDWhere.ConstructorProperties>, ...args: any[]): void;

    // Properties
    label: string;
    relation_type: string;
    relationType: string;
    value_string: string;
    valueString: string;

    // Fields
    priv: GDWherePrivate | any;

    // Constructors

    static ['new'](relation_type?: string | null, value_string?: string | null, label?: string | null): GDWhere;

    // Members

    get_label(): string;

    get_relation_type(): string;

    get_value_string(): string;

    set_label(label?: string | null): void;

    set_relation_type(relation_type?: string | null): void;

    set_value_string(value_string?: string | null): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GDWho {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        email_address: string;
        emailAddress: string;
        relation_type: string;
        relationType: string;
        value_string: string;
        valueString: string;
    }
}

export class GDWho extends Parsable implements Comparable {
    static $gtype: GObject.GType<GDWho>;

    constructor(properties?: Partial<GDWho.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GDWho.ConstructorProperties>, ...args: any[]): void;

    // Properties
    email_address: string;
    emailAddress: string;
    relation_type: string;
    relationType: string;
    value_string: string;
    valueString: string;

    // Fields
    priv: GDWhoPrivate | any;

    // Constructors

    static ['new'](relation_type?: string | null, value_string?: string | null, email_address?: string | null): GDWho;

    // Members

    get_email_address(): string;

    get_relation_type(): string;

    get_value_string(): string;

    set_email_address(email_address?: string | null): void;

    set_relation_type(relation_type?: string | null): void;

    set_value_string(value_string?: string | null): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace Generator {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        name: string;
        uri: string;
        version: string;
    }
}

export class Generator extends Parsable implements Comparable {
    static $gtype: GObject.GType<Generator>;

    constructor(properties?: Partial<Generator.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Generator.ConstructorProperties>, ...args: any[]): void;

    // Properties
    name: string;
    uri: string;
    version: string;

    // Fields
    priv: GeneratorPrivate | any;

    // Members

    get_name(): string | null;

    get_uri(): string | null;

    get_version(): string;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace GoaAuthorizer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        goa_object: Goa.Object;
        goaObject: Goa.Object;
    }
}

export class GoaAuthorizer extends GObject.Object implements Authorizer {
    static $gtype: GObject.GType<GoaAuthorizer>;

    constructor(properties?: Partial<GoaAuthorizer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<GoaAuthorizer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    goa_object: Goa.Object;
    goaObject: Goa.Object;

    // Constructors

    static ['new'](goa_object: Goa.Object): GoaAuthorizer;

    // Members

    get_goa_object(): Goa.Object;

    // Implemented Members

    is_authorized_for_domain(domain: AuthorizationDomain): boolean;

    process_request(domain: AuthorizationDomain | null, message: Soup.Message): void;

    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    refresh_authorization_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    refresh_authorization_finish(async_result: Gio.AsyncResult): boolean;

    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean;

    vfunc_process_request(domain: AuthorizationDomain | null, message: Soup.Message): void;

    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_refresh_authorization_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean;
}

export namespace Link {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        content_type: string;
        contentType: string;
        language: string;
        length: number;
        relation_type: string;
        relationType: string;
        title: string;
        uri: string;
    }
}

export class Link extends Parsable implements Comparable {
    static $gtype: GObject.GType<Link>;

    constructor(properties?: Partial<Link.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Link.ConstructorProperties>, ...args: any[]): void;

    // Properties
    content_type: string;
    contentType: string;
    language: string;
    length: number;
    relation_type: string;
    relationType: string;
    title: string;
    uri: string;

    // Fields
    priv: LinkPrivate | any;

    // Constructors

    static ['new'](uri: string, relation_type?: string | null): Link;

    // Members

    get_content_type(): string | null;
    get_content_type(...args: never[]): never;

    get_language(): string | null;

    get_length(): number;

    get_relation_type(): string | null;

    get_title(): string;

    get_uri(): string;

    set_content_type(content_type?: string | null): void;

    set_language(language?: string | null): void;

    set_length(length: number): void;

    set_relation_type(relation_type?: string | null): void;

    set_title(title?: string | null): void;

    set_uri(uri: string): void;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace MediaCategory {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        category: string;
        label: string;
        scheme: string;
    }
}

export class MediaCategory extends Parsable {
    static $gtype: GObject.GType<MediaCategory>;

    constructor(properties?: Partial<MediaCategory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MediaCategory.ConstructorProperties>, ...args: any[]): void;

    // Properties
    category: string;
    label: string;
    scheme: string;

    // Fields
    priv: MediaCategoryPrivate | any;

    // Constructors

    static ['new'](category: string, scheme?: string | null, label?: string | null): MediaCategory;

    // Members

    get_category(): string;

    get_label(): string;

    get_scheme(): string;

    set_category(category: string): void;

    set_label(label?: string | null): void;

    set_scheme(scheme?: string | null): void;
}

export namespace MediaContent {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        content_type: string;
        contentType: string;
        duration: number;
        expression: MediaExpression;
        filesize: number;
        height: number;
        is_default: boolean;
        isDefault: boolean;
        medium: MediaMedium;
        uri: string;
        width: number;
    }
}

export class MediaContent extends Parsable {
    static $gtype: GObject.GType<MediaContent>;

    constructor(properties?: Partial<MediaContent.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MediaContent.ConstructorProperties>, ...args: any[]): void;

    // Properties
    content_type: string;
    contentType: string;
    duration: number;
    expression: MediaExpression;
    filesize: number;
    height: number;
    is_default: boolean;
    isDefault: boolean;
    medium: MediaMedium;
    uri: string;
    width: number;

    // Fields
    priv: MediaContentPrivate | any;

    // Members

    download(service: Service, cancellable?: Gio.Cancellable | null): DownloadStream;

    get_content_type(): string;

    get_duration(): number;

    get_expression(): MediaExpression;

    get_filesize(): number;

    get_height(): number;

    get_medium(): MediaMedium;

    get_uri(): string;

    get_width(): number;
}

export namespace MediaCredit {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        credit: string;
        role: string;
        scheme: string;
    }
}

export class MediaCredit extends Parsable {
    static $gtype: GObject.GType<MediaCredit>;

    constructor(properties?: Partial<MediaCredit.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MediaCredit.ConstructorProperties>, ...args: any[]): void;

    // Properties
    credit: string;
    role: string;
    scheme: string;

    // Fields
    priv: MediaCreditPrivate | any;

    // Members

    get_credit(): string;

    get_role(): string;

    get_scheme(): string;
}

export namespace MediaThumbnail {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        height: number;
        time: number;
        uri: string;
        width: number;
    }
}

export class MediaThumbnail extends Parsable {
    static $gtype: GObject.GType<MediaThumbnail>;

    constructor(properties?: Partial<MediaThumbnail.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MediaThumbnail.ConstructorProperties>, ...args: any[]): void;

    // Properties
    height: number;
    time: number;
    uri: string;
    width: number;

    // Fields
    priv: MediaThumbnailPrivate | any;

    // Members

    download(service: Service, cancellable?: Gio.Cancellable | null): DownloadStream;

    get_height(): number;

    get_time(): number;

    get_uri(): string;

    get_width(): number;
}

export namespace OAuth1Authorizer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        application_name: string;
        applicationName: string;
        locale: string;
        proxy_resolver: Gio.ProxyResolver;
        proxyResolver: Gio.ProxyResolver;
        proxy_uri: Soup.URI;
        proxyUri: Soup.URI;
        timeout: number;
    }
}

export class OAuth1Authorizer extends GObject.Object implements Authorizer {
    static $gtype: GObject.GType<OAuth1Authorizer>;

    constructor(properties?: Partial<OAuth1Authorizer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuth1Authorizer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    application_name: string;
    applicationName: string;
    locale: string;
    proxy_resolver: Gio.ProxyResolver;
    proxyResolver: Gio.ProxyResolver;
    proxy_uri: Soup.URI;
    proxyUri: Soup.URI;
    timeout: number;

    // Constructors

    static ['new'](application_name: string | null, service_type: GObject.GType): OAuth1Authorizer;

    static new_for_authorization_domains(
        application_name: string | null,
        authorization_domains: AuthorizationDomain[]
    ): OAuth1Authorizer;

    // Members

    get_application_name(): string | null;

    get_locale(): string | null;

    get_proxy_resolver(): Gio.ProxyResolver | null;

    get_proxy_uri(): Soup.URI | null;

    get_timeout(): number;

    request_authentication_uri(cancellable?: Gio.Cancellable | null): [string, string, string];

    request_authentication_uri_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    request_authentication_uri_finish(async_result: Gio.AsyncResult): [string, string, string];

    request_authorization(
        token: string,
        token_secret: string,
        verifier: string,
        cancellable?: Gio.Cancellable | null
    ): boolean;

    request_authorization_async(
        token: string,
        token_secret: string,
        verifier: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    request_authorization_finish(async_result: Gio.AsyncResult): boolean;

    set_locale(locale?: string | null): void;

    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void;

    set_proxy_uri(proxy_uri?: Soup.URI | null): void;

    set_timeout(timeout: number): void;

    // Implemented Members

    is_authorized_for_domain(domain: AuthorizationDomain): boolean;

    process_request(domain: AuthorizationDomain | null, message: Soup.Message): void;

    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    refresh_authorization_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    refresh_authorization_finish(async_result: Gio.AsyncResult): boolean;

    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean;

    vfunc_process_request(domain: AuthorizationDomain | null, message: Soup.Message): void;

    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_refresh_authorization_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean;
}

export namespace OAuth2Authorizer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        client_id: string;
        clientId: string;
        client_secret: string;
        clientSecret: string;
        locale: string;
        proxy_resolver: Gio.ProxyResolver;
        proxyResolver: Gio.ProxyResolver;
        redirect_uri: string;
        redirectUri: string;
        refresh_token: string;
        refreshToken: string;
        timeout: number;
    }
}

export class OAuth2Authorizer extends GObject.Object implements Authorizer {
    static $gtype: GObject.GType<OAuth2Authorizer>;

    constructor(properties?: Partial<OAuth2Authorizer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<OAuth2Authorizer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    client_id: string;
    clientId: string;
    client_secret: string;
    clientSecret: string;
    locale: string;
    proxy_resolver: Gio.ProxyResolver;
    proxyResolver: Gio.ProxyResolver;
    redirect_uri: string;
    redirectUri: string;
    refresh_token: string;
    refreshToken: string;
    timeout: number;

    // Constructors

    static ['new'](
        client_id: string,
        client_secret: string,
        redirect_uri: string,
        service_type: GObject.GType
    ): OAuth2Authorizer;

    static new_for_authorization_domains(
        client_id: string,
        client_secret: string,
        redirect_uri: string,
        authorization_domains: AuthorizationDomain[]
    ): OAuth2Authorizer;

    // Members

    build_authentication_uri(login_hint: string | null, include_granted_scopes: boolean): string;

    dup_refresh_token(): string;

    get_client_id(): string;

    get_client_secret(): string;

    get_locale(): string | null;

    get_proxy_resolver(): Gio.ProxyResolver | null;

    get_redirect_uri(): string;

    get_timeout(): number;

    request_authorization(authorization_code: string, cancellable?: Gio.Cancellable | null): boolean;

    request_authorization_async(
        authorization_code: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    request_authorization_finish(async_result: Gio.AsyncResult): boolean;

    set_locale(locale?: string | null): void;

    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void;

    set_refresh_token(refresh_token?: string | null): void;

    set_timeout(timeout: number): void;

    // Implemented Members

    is_authorized_for_domain(domain: AuthorizationDomain): boolean;

    process_request(domain: AuthorizationDomain | null, message: Soup.Message): void;

    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    refresh_authorization_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    refresh_authorization_finish(async_result: Gio.AsyncResult): boolean;

    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean;

    vfunc_process_request(domain: AuthorizationDomain | null, message: Soup.Message): void;

    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_refresh_authorization_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean;
}

export namespace Parsable {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        constructed_from_xml: boolean;
        constructedFromXml: boolean;
    }
}

export abstract class Parsable extends GObject.Object {
    static $gtype: GObject.GType<Parsable>;

    constructor(properties?: Partial<Parsable.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Parsable.ConstructorProperties>, ...args: any[]): void;

    // Properties
    constructed_from_xml: boolean;
    constructedFromXml: boolean;

    // Fields
    priv: ParsablePrivate;

    // Constructors

    static new_from_json(parsable_type: GObject.GType, json: string, length: number): Parsable;

    static new_from_xml(parsable_type: GObject.GType, xml: string, length: number): Parsable;

    // Members

    get_content_type(): string;

    get_json(): string;

    get_xml(): string;

    vfunc_get_json(builder: Json.Builder): void;

    vfunc_get_namespaces(namespaces: GLib.HashTable<any, any>): void;

    vfunc_get_xml(xml_string: GLib.String): void;

    vfunc_parse_json(reader: Json.Reader): boolean;

    vfunc_parse_xml(doc: libxml2.Doc, node: libxml2.Node): boolean;

    vfunc_post_parse_json(): boolean;

    vfunc_post_parse_xml(): boolean;

    vfunc_pre_get_xml(xml_string: GLib.String): void;

    vfunc_pre_parse_xml(doc: libxml2.Doc, root_node: libxml2.Node): boolean;
}

export namespace PicasaWebAlbum {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        album_id: string;
        albumId: string;
        bytes_used: number;
        bytesUsed: number;
        comment_count: number;
        commentCount: number;
        edited: number;
        is_commenting_enabled: boolean;
        isCommentingEnabled: boolean;
        latitude: number;
        location: string;
        longitude: number;
        nickname: string;
        num_photos: number;
        numPhotos: number;
        num_photos_remaining: number;
        numPhotosRemaining: number;
        tags: string[];
        timestamp: number;
        user: string;
        visibility: PicasaWebVisibility;
    }
}

export class PicasaWebAlbum extends Entry {
    static $gtype: GObject.GType<PicasaWebAlbum>;

    constructor(properties?: Partial<PicasaWebAlbum.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PicasaWebAlbum.ConstructorProperties>, ...args: any[]): void;

    // Properties
    album_id: string;
    albumId: string;
    bytes_used: number;
    bytesUsed: number;
    comment_count: number;
    commentCount: number;
    edited: number;
    is_commenting_enabled: boolean;
    isCommentingEnabled: boolean;
    latitude: number;
    location: string;
    longitude: number;
    nickname: string;
    num_photos: number;
    numPhotos: number;
    num_photos_remaining: number;
    numPhotosRemaining: number;
    tags: string[];
    timestamp: number;
    user: string;
    visibility: PicasaWebVisibility;

    // Fields
    priv: PicasaWebAlbumPrivate | any;

    // Constructors

    static ['new'](id?: string | null): PicasaWebAlbum;

    // Members

    get_bytes_used(): number;

    get_comment_count(): number;

    get_contents(): MediaContent[];

    get_coordinates(): [number | null, number | null];

    get_edited(): number;

    get_id(): string;
    get_id(...args: never[]): never;

    get_location(): string;

    get_nickname(): string;

    get_num_photos(): number;

    get_num_photos_remaining(): number;

    get_tags(): string[];

    get_thumbnails(): MediaThumbnail[];

    get_timestamp(): number;

    get_user(): string;

    get_visibility(): PicasaWebVisibility;

    set_coordinates(latitude: number, longitude: number): void;

    set_is_commenting_enabled(is_commenting_enabled: boolean): void;

    set_location(location?: string | null): void;

    set_tags(tags?: string[] | null): void;

    set_timestamp(timestamp: number): void;

    set_visibility(visibility: PicasaWebVisibility): void;
}

export namespace PicasaWebComment {
    export interface ConstructorProperties extends Comment.ConstructorProperties {
        [key: string]: any;
    }
}

export class PicasaWebComment extends Comment {
    static $gtype: GObject.GType<PicasaWebComment>;

    constructor(properties?: Partial<PicasaWebComment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PicasaWebComment.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: PicasaWebCommentPrivate | any;

    // Constructors

    static ['new'](id: string): PicasaWebComment;
    static ['new'](...args: never[]): never;
}

export namespace PicasaWebFeed {
    export interface ConstructorProperties extends Feed.ConstructorProperties {
        [key: string]: any;
    }
}

export class PicasaWebFeed extends Feed {
    static $gtype: GObject.GType<PicasaWebFeed>;

    constructor(properties?: Partial<PicasaWebFeed.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PicasaWebFeed.ConstructorProperties>, ...args: any[]): void;
}

export namespace PicasaWebFile {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        album_id: string;
        albumId: string;
        caption: string;
        checksum: string;
        comment_count: number;
        commentCount: number;
        credit: string;
        distance: number;
        edited: number;
        exposure: number;
        file_id: string;
        fileId: string;
        flash: boolean;
        focal_length: number;
        focalLength: number;
        fstop: number;
        height: number;
        image_unique_id: string;
        imageUniqueId: string;
        is_commenting_enabled: boolean;
        isCommentingEnabled: boolean;
        iso: number;
        latitude: number;
        longitude: number;
        make: string;
        model: string;
        rotation: number;
        size: number;
        tags: string[];
        timestamp: number;
        version: string;
        video_status: string;
        videoStatus: string;
        width: number;
    }
}

export class PicasaWebFile extends Entry implements Commentable {
    static $gtype: GObject.GType<PicasaWebFile>;

    constructor(properties?: Partial<PicasaWebFile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PicasaWebFile.ConstructorProperties>, ...args: any[]): void;

    // Properties
    album_id: string;
    albumId: string;
    caption: string;
    checksum: string;
    comment_count: number;
    commentCount: number;
    credit: string;
    distance: number;
    edited: number;
    exposure: number;
    file_id: string;
    fileId: string;
    flash: boolean;
    focal_length: number;
    focalLength: number;
    fstop: number;
    height: number;
    image_unique_id: string;
    imageUniqueId: string;
    is_commenting_enabled: boolean;
    isCommentingEnabled: boolean;
    iso: number;
    latitude: number;
    longitude: number;
    make: string;
    model: string;
    rotation: number;
    size: number;
    tags: string[];
    timestamp: number;
    version: string;
    video_status: string;
    videoStatus: string;
    width: number;

    // Fields
    priv: PicasaWebFilePrivate | any;

    // Constructors

    static ['new'](id?: string | null): PicasaWebFile;

    // Members

    get_album_id(): string;

    get_caption(): string;

    get_checksum(): string;

    get_comment_count(): number;

    get_contents(): MediaContent[];

    get_coordinates(): [number | null, number | null];

    get_credit(): string;

    get_distance(): number;

    get_edited(): number;

    get_exposure(): number;

    get_flash(): boolean;

    get_focal_length(): number;

    get_fstop(): number;

    get_height(): number;

    get_id(): string;
    get_id(...args: never[]): never;

    get_image_unique_id(): string;

    get_iso(): number;

    get_make(): string;

    get_model(): string;

    get_rotation(): number;

    get_size(): number;

    get_tags(): string[];

    get_thumbnails(): MediaThumbnail[];

    get_timestamp(): number;

    get_version(): string;

    get_video_status(): string;

    get_width(): number;

    set_album_id(album_id: string): void;

    set_caption(caption?: string | null): void;

    set_checksum(checksum?: string | null): void;

    set_coordinates(latitude: number, longitude: number): void;

    set_is_commenting_enabled(is_commenting_enabled: boolean): void;

    set_rotation(rotation: number): void;

    set_tags(tags?: string[] | null): void;

    set_timestamp(timestamp: number): void;

    // Implemented Members

    delete_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): boolean;

    delete_comment_async(
        service: Service,
        comment_: Comment,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_comment_finish(result: Gio.AsyncResult): boolean;

    insert_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): Comment | null;

    insert_comment_async(
        service: Service,
        comment_: Comment,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    insert_comment_finish(result: Gio.AsyncResult): Comment | null;

    query_comments(
        service: Service,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed | null;

    query_comments_async(
        service: Service,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_comments_finish(result: Gio.AsyncResult): Feed | null;

    vfunc_get_insert_comment_uri(comment: Comment): string;

    vfunc_get_query_comments_uri(): string;

    vfunc_is_comment_deletable(comment: Comment): boolean;
}

export namespace PicasaWebQuery {
    export interface ConstructorProperties extends Query.ConstructorProperties {
        [key: string]: any;

        image_size: string;
        imageSize: string;
        location: string;
        tag: string;
        thumbnail_size: string;
        thumbnailSize: string;
        visibility: number;
    }
}

export class PicasaWebQuery extends Query {
    static $gtype: GObject.GType<PicasaWebQuery>;

    constructor(properties?: Partial<PicasaWebQuery.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PicasaWebQuery.ConstructorProperties>, ...args: any[]): void;

    // Properties
    image_size: string;
    imageSize: string;
    location: string;
    tag: string;
    thumbnail_size: string;
    thumbnailSize: string;
    visibility: number;

    // Fields
    priv: PicasaWebQueryPrivate | any;

    // Constructors

    static ['new'](q?: string | null): PicasaWebQuery;

    static new_with_limits(q: string | null, start_index: number, max_results: number): PicasaWebQuery;

    // Members

    get_bounding_box(): [number | null, number | null, number | null, number | null];

    get_image_size(): string;

    get_location(): string;

    get_tag(): string;

    get_thumbnail_size(): string;

    get_visibility(): PicasaWebVisibility;

    set_bounding_box(north: number, east: number, south: number, west: number): void;

    set_image_size(image_size?: string | null): void;

    set_location(location?: string | null): void;

    set_tag(tag?: string | null): void;

    set_thumbnail_size(thumbnail_size?: string | null): void;

    set_visibility(visibility: PicasaWebVisibility): void;
}

export namespace PicasaWebService {
    export interface ConstructorProperties extends Service.ConstructorProperties {
        [key: string]: any;
    }
}

export class PicasaWebService extends Service {
    static $gtype: GObject.GType<PicasaWebService>;

    constructor(properties?: Partial<PicasaWebService.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PicasaWebService.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](authorizer?: Authorizer | null): PicasaWebService;

    // Members

    finish_file_upload(upload_stream: UploadStream): PicasaWebFile;

    get_user(username?: string | null, cancellable?: Gio.Cancellable | null): PicasaWebUser;

    get_user_async(
        username?: string | null,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_user_finish(result: Gio.AsyncResult): PicasaWebUser;

    insert_album(album: PicasaWebAlbum, cancellable?: Gio.Cancellable | null): PicasaWebAlbum;

    insert_album_async(
        album: PicasaWebAlbum,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_all_albums(
        query?: Query | null,
        username?: string | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_all_albums_async(
        query?: Query | null,
        username?: string | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_files(
        album?: PicasaWebAlbum | null,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_files_async(
        album?: PicasaWebAlbum | null,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    upload_file(
        album: PicasaWebAlbum | null,
        file_entry: PicasaWebFile,
        slug: string,
        content_type: string,
        cancellable?: Gio.Cancellable | null
    ): UploadStream;

    static get_primary_authorization_domain(): AuthorizationDomain;
}

export namespace PicasaWebUser {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        max_photos_per_album: number;
        maxPhotosPerAlbum: number;
        nickname: string;
        quota_current: number;
        quotaCurrent: number;
        quota_limit: number;
        quotaLimit: number;
        thumbnail_uri: string;
        thumbnailUri: string;
        user: string;
    }
}

export class PicasaWebUser extends Entry {
    static $gtype: GObject.GType<PicasaWebUser>;

    constructor(properties?: Partial<PicasaWebUser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<PicasaWebUser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_photos_per_album: number;
    maxPhotosPerAlbum: number;
    nickname: string;
    quota_current: number;
    quotaCurrent: number;
    quota_limit: number;
    quotaLimit: number;
    thumbnail_uri: string;
    thumbnailUri: string;
    user: string;

    // Fields
    priv: PicasaWebUserPrivate | any;

    // Members

    get_max_photos_per_album(): number;

    get_nickname(): string;

    get_quota_current(): number;

    get_quota_limit(): number;

    get_thumbnail_uri(): string;

    get_user(): string;
}

export namespace Query {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        author: string;
        categories: string;
        etag: string;
        is_strict: boolean;
        isStrict: boolean;
        max_results: number;
        maxResults: number;
        published_max: number;
        publishedMax: number;
        published_min: number;
        publishedMin: number;
        q: string;
        start_index: number;
        startIndex: number;
        updated_max: number;
        updatedMax: number;
        updated_min: number;
        updatedMin: number;
    }
}

export class Query extends GObject.Object {
    static $gtype: GObject.GType<Query>;

    constructor(properties?: Partial<Query.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Query.ConstructorProperties>, ...args: any[]): void;

    // Properties
    author: string;
    categories: string;
    etag: string;
    is_strict: boolean;
    isStrict: boolean;
    max_results: number;
    maxResults: number;
    published_max: number;
    publishedMax: number;
    published_min: number;
    publishedMin: number;
    q: string;
    start_index: number;
    startIndex: number;
    updated_max: number;
    updatedMax: number;
    updated_min: number;
    updatedMin: number;

    // Fields
    priv: QueryPrivate;

    // Constructors

    static ['new'](q?: string | null): Query;

    static new_with_limits(q: string | null, start_index: number, max_results: number): Query;

    // Members

    get_author(): string;

    get_categories(): string;

    get_etag(): string;

    get_max_results(): number;

    get_published_max(): number;

    get_published_min(): number;

    get_q(): string;

    get_query_uri(feed_uri: string): string;

    get_start_index(): number;

    get_updated_max(): number;

    get_updated_min(): number;

    next_page(): void;

    previous_page(): boolean;

    set_author(author?: string | null): void;

    set_categories(categories?: string | null): void;

    set_etag(etag?: string | null): void;

    set_is_strict(is_strict: boolean): void;

    set_max_results(max_results: number): void;

    set_published_max(published_max: number): void;

    set_published_min(published_min: number): void;

    set_q(q?: string | null): void;

    set_start_index(start_index: number): void;

    set_updated_max(updated_max: number): void;

    set_updated_min(updated_min: number): void;

    vfunc_get_query_uri(feed_uri: string, query_uri: GLib.String, params_started: boolean): void;
}

export namespace Service {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        authorizer: Authorizer;
        locale: string;
        proxy_resolver: Gio.ProxyResolver;
        proxyResolver: Gio.ProxyResolver;
        proxy_uri: Soup.URI;
        proxyUri: Soup.URI;
        timeout: number;
    }
}

export class Service extends GObject.Object {
    static $gtype: GObject.GType<Service>;

    constructor(properties?: Partial<Service.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Service.ConstructorProperties>, ...args: any[]): void;

    // Properties
    authorizer: Authorizer;
    locale: string;
    proxy_resolver: Gio.ProxyResolver;
    proxyResolver: Gio.ProxyResolver;
    proxy_uri: Soup.URI;
    proxyUri: Soup.URI;
    timeout: number;

    // Fields
    priv: ServicePrivate;

    // Members

    delete_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): boolean;

    delete_entry_async(
        domain: AuthorizationDomain | null,
        entry: Entry,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_entry_finish(async_result: Gio.AsyncResult): boolean;

    get_authorizer(): Authorizer;

    get_locale(): string;

    get_proxy_resolver(): Gio.ProxyResolver | null;

    get_proxy_uri(): Soup.URI;

    get_timeout(): number;

    insert_entry(
        domain: AuthorizationDomain | null,
        upload_uri: string,
        entry: Entry,
        cancellable?: Gio.Cancellable | null
    ): Entry;

    insert_entry_async(
        domain: AuthorizationDomain | null,
        upload_uri: string,
        entry: Entry,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    insert_entry_finish(async_result: Gio.AsyncResult): Entry;

    is_authorized(): boolean;

    query(
        domain: AuthorizationDomain | null,
        feed_uri: string,
        query: Query | null,
        entry_type: GObject.GType,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_async(
        domain: AuthorizationDomain | null,
        feed_uri: string,
        query: Query | null,
        entry_type: GObject.GType,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_finish(async_result: Gio.AsyncResult): Feed;

    query_single_entry(
        domain: AuthorizationDomain | null,
        entry_id: string,
        query: Query | null,
        entry_type: GObject.GType,
        cancellable?: Gio.Cancellable | null
    ): Entry;

    query_single_entry_async(
        domain: AuthorizationDomain | null,
        entry_id: string,
        query: Query | null,
        entry_type: GObject.GType,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_single_entry_finish(async_result: Gio.AsyncResult): Entry;

    set_authorizer(authorizer: Authorizer): void;

    set_locale(locale?: string | null): void;

    set_proxy_resolver(proxy_resolver?: Gio.ProxyResolver | null): void;

    set_proxy_uri(proxy_uri?: Soup.URI | null): void;

    set_timeout(timeout: number): void;

    update_entry(domain: AuthorizationDomain | null, entry: Entry, cancellable?: Gio.Cancellable | null): Entry;

    update_entry_async(
        domain: AuthorizationDomain | null,
        entry: Entry,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    update_entry_finish(async_result: Gio.AsyncResult): Entry;

    vfunc_append_query_headers(domain: AuthorizationDomain, message: Soup.Message): void;

    vfunc_parse_error_response(
        operation_type: OperationType,
        status: number,
        reason_phrase: string,
        response_body: string,
        length: number
    ): void;

    static get_authorization_domains(service_type: GObject.GType): AuthorizationDomain[];
}

export namespace TasksQuery {
    export interface ConstructorProperties extends Query.ConstructorProperties {
        [key: string]: any;

        completed_max: number;
        completedMax: number;
        completed_min: number;
        completedMin: number;
        due_max: number;
        dueMax: number;
        due_min: number;
        dueMin: number;
        show_completed: boolean;
        showCompleted: boolean;
        show_deleted: boolean;
        showDeleted: boolean;
        show_hidden: boolean;
        showHidden: boolean;
    }
}

export class TasksQuery extends Query {
    static $gtype: GObject.GType<TasksQuery>;

    constructor(properties?: Partial<TasksQuery.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TasksQuery.ConstructorProperties>, ...args: any[]): void;

    // Properties
    completed_max: number;
    completedMax: number;
    completed_min: number;
    completedMin: number;
    due_max: number;
    dueMax: number;
    due_min: number;
    dueMin: number;
    show_completed: boolean;
    showCompleted: boolean;
    show_deleted: boolean;
    showDeleted: boolean;
    show_hidden: boolean;
    showHidden: boolean;

    // Fields
    priv: TasksQueryPrivate | any;

    // Constructors

    static ['new'](q?: string | null): TasksQuery;

    // Members

    get_completed_max(): number;

    get_completed_min(): number;

    get_due_max(): number;

    get_due_min(): number;

    get_show_completed(): boolean;

    get_show_deleted(): boolean;

    get_show_hidden(): boolean;

    set_completed_max(completed_max: number): void;

    set_completed_min(completed_min: number): void;

    set_due_max(due_max: number): void;

    set_due_min(due_min: number): void;

    set_show_completed(show_completed: boolean): void;

    set_show_deleted(show_deleted: boolean): void;

    set_show_hidden(show_hidden: boolean): void;
}

export namespace TasksService {
    export interface ConstructorProperties extends Service.ConstructorProperties {
        [key: string]: any;
    }
}

export class TasksService extends Service {
    static $gtype: GObject.GType<TasksService>;

    constructor(properties?: Partial<TasksService.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TasksService.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](authorizer?: Authorizer | null): TasksService;

    // Members

    delete_task(task: TasksTask, cancellable?: Gio.Cancellable | null): boolean;

    delete_task_async(
        task: TasksTask,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_tasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): boolean;

    delete_tasklist_async(
        tasklist: TasksTasklist,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    insert_task(task: TasksTask, tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTask;

    insert_task_async(
        task: TasksTask,
        tasklist: TasksTasklist,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    insert_tasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTasklist;

    insert_tasklist_async(
        tasklist: TasksTasklist,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_all_tasklists(
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_all_tasklists_async(
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_tasks(
        tasklist: TasksTasklist,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_tasks_async(
        tasklist: TasksTasklist,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    update_task(task: TasksTask, cancellable?: Gio.Cancellable | null): TasksTask;

    update_task_async(
        task: TasksTask,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    update_tasklist(tasklist: TasksTasklist, cancellable?: Gio.Cancellable | null): TasksTasklist;

    update_tasklist_async(
        tasklist: TasksTasklist,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    static get_primary_authorization_domain(): AuthorizationDomain;
}

export namespace TasksTask {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        completed: number;
        due: number;
        is_deleted: boolean;
        isDeleted: boolean;
        is_hidden: boolean;
        isHidden: boolean;
        notes: string;
        position: string;
        status: string;
    }
}

export class TasksTask extends Entry {
    static $gtype: GObject.GType<TasksTask>;

    constructor(properties?: Partial<TasksTask.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TasksTask.ConstructorProperties>, ...args: any[]): void;

    // Properties
    completed: number;
    due: number;
    is_deleted: boolean;
    isDeleted: boolean;
    is_hidden: boolean;
    isHidden: boolean;
    notes: string;
    position: string;
    status: string;

    // Fields
    priv: TasksTaskPrivate | any;

    // Constructors

    static ['new'](id?: string | null): TasksTask;

    // Members

    get_completed(): number;

    get_due(): number;

    get_notes(): string | null;

    get_parent(): string | null;

    get_position(): string | null;

    get_status(): string | null;

    set_completed(completed: number): void;

    set_due(due: number): void;

    set_is_deleted(deleted: boolean): void;

    set_notes(notes?: string | null): void;

    set_parent(parent?: string | null): void;

    set_position(position: string): void;

    set_status(status?: string | null): void;
}

export namespace TasksTasklist {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;
    }
}

export class TasksTasklist extends Entry {
    static $gtype: GObject.GType<TasksTasklist>;

    constructor(properties?: Partial<TasksTasklist.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<TasksTasklist.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](id?: string | null): TasksTasklist;
}

export namespace UploadStream {
    export interface ConstructorProperties extends Gio.OutputStream.ConstructorProperties {
        [key: string]: any;

        authorization_domain: AuthorizationDomain;
        authorizationDomain: AuthorizationDomain;
        cancellable: Gio.Cancellable;
        content_length: number;
        contentLength: number;
        content_type: string;
        contentType: string;
        entry: Entry;
        method: string;
        service: Service;
        slug: string;
        upload_uri: string;
        uploadUri: string;
    }
}

export class UploadStream extends Gio.OutputStream {
    static $gtype: GObject.GType<UploadStream>;

    constructor(properties?: Partial<UploadStream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<UploadStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    authorization_domain: AuthorizationDomain;
    authorizationDomain: AuthorizationDomain;
    cancellable: Gio.Cancellable;
    content_length: number;
    contentLength: number;
    content_type: string;
    contentType: string;
    entry: Entry;
    method: string;
    service: Service;
    slug: string;
    upload_uri: string;
    uploadUri: string;

    // Fields
    priv: UploadStreamPrivate;

    // Constructors

    static ['new'](
        service: Service,
        domain: AuthorizationDomain | null,
        method: string,
        upload_uri: string,
        entry: Entry | null,
        slug: string,
        content_type: string,
        cancellable?: Gio.Cancellable | null
    ): UploadStream;

    static new_resumable(
        service: Service,
        domain: AuthorizationDomain | null,
        method: string,
        upload_uri: string,
        entry: Entry | null,
        slug: string,
        content_type: string,
        content_length: number,
        cancellable?: Gio.Cancellable | null
    ): UploadStream;

    // Members

    get_authorization_domain(): AuthorizationDomain | null;

    get_cancellable(): Gio.Cancellable;

    get_content_length(): number;

    get_content_type(): string;

    get_entry(): Entry;

    get_method(): string;

    get_response(): [string, number | null];

    get_service(): Service;

    get_slug(): string;

    get_upload_uri(): string;
}

export namespace YouTubeCategory {
    export interface ConstructorProperties extends Category.ConstructorProperties {
        [key: string]: any;

        is_assignable: boolean;
        isAssignable: boolean;
        is_deprecated: boolean;
        isDeprecated: boolean;
    }
}

export class YouTubeCategory extends Category implements Comparable {
    static $gtype: GObject.GType<YouTubeCategory>;

    constructor(properties?: Partial<YouTubeCategory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<YouTubeCategory.ConstructorProperties>, ...args: any[]): void;

    // Properties
    is_assignable: boolean;
    isAssignable: boolean;
    is_deprecated: boolean;
    isDeprecated: boolean;

    // Fields
    priv: YouTubeCategoryPrivate | any;

    // Members

    is_browsable(region: string): boolean;

    // Implemented Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export namespace YouTubeComment {
    export interface ConstructorProperties extends Comment.ConstructorProperties {
        [key: string]: any;

        parent_comment_uri: string;
        parentCommentUri: string;
    }
}

export class YouTubeComment extends Comment {
    static $gtype: GObject.GType<YouTubeComment>;

    constructor(properties?: Partial<YouTubeComment.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<YouTubeComment.ConstructorProperties>, ...args: any[]): void;

    // Properties
    parent_comment_uri: string;
    parentCommentUri: string;

    // Fields
    priv: YouTubeCommentPrivate | any;

    // Constructors

    static ['new'](id: string): YouTubeComment;
    static ['new'](...args: never[]): never;

    // Members

    get_parent_comment_uri(): string;

    set_parent_comment_uri(parent_comment_uri: string): void;
}

export namespace YouTubeContent {
    export interface ConstructorProperties extends MediaContent.ConstructorProperties {
        [key: string]: any;

        format: YouTubeFormat;
    }
}

export class YouTubeContent extends MediaContent {
    static $gtype: GObject.GType<YouTubeContent>;

    constructor(properties?: Partial<YouTubeContent.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<YouTubeContent.ConstructorProperties>, ...args: any[]): void;

    // Properties
    format: YouTubeFormat;

    // Fields
    priv: YouTubeContentPrivate | any;

    // Members

    get_format(): YouTubeFormat;
}

export namespace YouTubeCredit {
    export interface ConstructorProperties extends MediaCredit.ConstructorProperties {
        [key: string]: any;

        entity_type: string;
        entityType: string;
    }
}

export class YouTubeCredit extends MediaCredit {
    static $gtype: GObject.GType<YouTubeCredit>;

    constructor(properties?: Partial<YouTubeCredit.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<YouTubeCredit.ConstructorProperties>, ...args: any[]): void;

    // Properties
    entity_type: string;
    entityType: string;

    // Fields
    priv: YouTubeCreditPrivate | any;

    // Members

    get_entity_type(): string;
}

export namespace YouTubeFeed {
    export interface ConstructorProperties extends Feed.ConstructorProperties {
        [key: string]: any;
    }
}

export class YouTubeFeed extends Feed {
    static $gtype: GObject.GType<YouTubeFeed>;

    constructor(properties?: Partial<YouTubeFeed.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<YouTubeFeed.ConstructorProperties>, ...args: any[]): void;
}

export namespace YouTubeQuery {
    export interface ConstructorProperties extends Query.ConstructorProperties {
        [key: string]: any;

        age: YouTubeAge;
        format: YouTubeFormat;
        has_location: boolean;
        hasLocation: boolean;
        language: string;
        latitude: number;
        license: string;
        location_radius: number;
        locationRadius: number;
        longitude: number;
        order_by: string;
        orderBy: string;
        restriction: string;
        safe_search: YouTubeSafeSearch;
        safeSearch: YouTubeSafeSearch;
        sort_order: YouTubeSortOrder;
        sortOrder: YouTubeSortOrder;
        uploader: YouTubeUploader;
    }
}

export class YouTubeQuery extends Query {
    static $gtype: GObject.GType<YouTubeQuery>;

    constructor(properties?: Partial<YouTubeQuery.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<YouTubeQuery.ConstructorProperties>, ...args: any[]): void;

    // Properties
    age: YouTubeAge;
    format: YouTubeFormat;
    has_location: boolean;
    hasLocation: boolean;
    language: string;
    latitude: number;
    license: string;
    location_radius: number;
    locationRadius: number;
    longitude: number;
    order_by: string;
    orderBy: string;
    restriction: string;
    safe_search: YouTubeSafeSearch;
    safeSearch: YouTubeSafeSearch;
    sort_order: YouTubeSortOrder;
    sortOrder: YouTubeSortOrder;
    uploader: YouTubeUploader;

    // Fields
    priv: YouTubeQueryPrivate | any;

    // Constructors

    static ['new'](q?: string | null): YouTubeQuery;

    // Members

    get_age(): YouTubeAge;

    get_format(): YouTubeFormat;

    get_language(): string;

    get_license(): string;

    get_location(): [number | null, number | null, number | null, boolean | null];

    get_order_by(): string;

    get_restriction(): string;

    get_safe_search(): YouTubeSafeSearch;

    get_sort_order(): YouTubeSortOrder;

    get_uploader(): YouTubeUploader;

    set_age(age: YouTubeAge): void;

    set_format(format: YouTubeFormat): void;

    set_language(language?: string | null): void;

    set_license(license?: string | null): void;

    set_location(latitude: number, longitude: number, radius: number, has_location: boolean): void;

    set_order_by(order_by?: string | null): void;

    set_restriction(restriction?: string | null): void;

    set_safe_search(safe_search: YouTubeSafeSearch): void;

    set_sort_order(sort_order: YouTubeSortOrder): void;

    set_uploader(uploader: YouTubeUploader): void;
}

export namespace YouTubeService {
    export interface ConstructorProperties extends Service.ConstructorProperties {
        [key: string]: any;

        developer_key: string;
        developerKey: string;
    }
}

export class YouTubeService extends Service implements Batchable {
    static $gtype: GObject.GType<YouTubeService>;

    constructor(properties?: Partial<YouTubeService.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<YouTubeService.ConstructorProperties>, ...args: any[]): void;

    // Properties
    developer_key: string;
    developerKey: string;

    // Fields
    priv: YouTubeServicePrivate | any;

    // Constructors

    static ['new'](developer_key: string, authorizer?: Authorizer | null): YouTubeService;

    // Members

    finish_video_upload(upload_stream: UploadStream): YouTubeVideo;

    get_categories(cancellable?: Gio.Cancellable | null): APPCategories;

    get_categories_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    get_categories_finish(async_result: Gio.AsyncResult): APPCategories;

    get_developer_key(): string;

    query_related(
        video: YouTubeVideo,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_related_async(
        video: YouTubeVideo,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_standard_feed(
        feed_type: YouTubeStandardFeedType,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_standard_feed_async(
        feed_type: YouTubeStandardFeedType,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_videos(
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    query_videos_async(
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    upload_video(
        video: YouTubeVideo,
        slug: string,
        content_type: string,
        cancellable?: Gio.Cancellable | null
    ): UploadStream;

    static get_primary_authorization_domain(): AuthorizationDomain;

    // Implemented Members

    create_operation(domain: AuthorizationDomain | null, feed_uri: string): BatchOperation;
}

export namespace YouTubeState {
    export interface ConstructorProperties extends Parsable.ConstructorProperties {
        [key: string]: any;

        help_uri: string;
        helpUri: string;
        message: string;
        name: string;
        reason_code: string;
        reasonCode: string;
    }
}

export class YouTubeState extends Parsable {
    static $gtype: GObject.GType<YouTubeState>;

    constructor(properties?: Partial<YouTubeState.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<YouTubeState.ConstructorProperties>, ...args: any[]): void;

    // Properties
    help_uri: string;
    helpUri: string;
    message: string;
    name: string;
    reason_code: string;
    reasonCode: string;

    // Fields
    priv: YouTubeStatePrivate | any;

    // Members

    get_help_uri(): string;

    get_message(): string;

    get_name(): string;

    get_reason_code(): string;
}

export namespace YouTubeVideo {
    export interface ConstructorProperties extends Entry.ConstructorProperties {
        [key: string]: any;

        aspect_ratio: string;
        aspectRatio: string;
        average_rating: number;
        averageRating: number;
        category: MediaCategory;
        credit: YouTubeCredit;
        description: string;
        duration: number;
        favorite_count: number;
        favoriteCount: number;
        is_draft: boolean;
        isDraft: boolean;
        is_private: boolean;
        isPrivate: boolean;
        keywords: string[];
        latitude: number;
        location: string;
        longitude: number;
        max_rating: number;
        maxRating: number;
        min_rating: number;
        minRating: number;
        player_uri: string;
        playerUri: string;
        rating_count: number;
        ratingCount: number;
        recorded: number;
        state: YouTubeState;
        uploaded: number;
        video_id: string;
        videoId: string;
        view_count: number;
        viewCount: number;
    }
}

export class YouTubeVideo extends Entry implements Commentable {
    static $gtype: GObject.GType<YouTubeVideo>;

    constructor(properties?: Partial<YouTubeVideo.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<YouTubeVideo.ConstructorProperties>, ...args: any[]): void;

    // Properties
    aspect_ratio: string;
    aspectRatio: string;
    average_rating: number;
    averageRating: number;
    category: MediaCategory;
    credit: YouTubeCredit;
    description: string;
    duration: number;
    favorite_count: number;
    favoriteCount: number;
    is_draft: boolean;
    isDraft: boolean;
    is_private: boolean;
    isPrivate: boolean;
    keywords: string[];
    latitude: number;
    location: string;
    longitude: number;
    max_rating: number;
    maxRating: number;
    min_rating: number;
    minRating: number;
    player_uri: string;
    playerUri: string;
    rating_count: number;
    ratingCount: number;
    recorded: number;
    state: YouTubeState;
    uploaded: number;
    video_id: string;
    videoId: string;
    view_count: number;
    viewCount: number;

    // Fields
    priv: YouTubeVideoPrivate | any;

    // Constructors

    static ['new'](id?: string | null): YouTubeVideo;

    // Members

    get_access_control(action: string): YouTubePermission;

    get_aspect_ratio(): string;

    get_category(): MediaCategory;

    get_coordinates(): [number | null, number | null];

    get_credit(): YouTubeCredit;

    get_description(): string;

    get_duration(): number;

    get_favorite_count(): number;

    get_keywords(): string[];

    get_location(): string;

    get_media_rating(rating_type: string): string;

    get_player_uri(): string;

    get_rating(): [number | null, number | null, number | null, number | null];

    get_recorded(): number;

    get_state(): YouTubeState;

    get_thumbnails(): MediaThumbnail[];

    get_uploaded(): number;

    get_video_id(): string;

    get_view_count(): number;

    is_restricted_in_country(country: string): boolean;

    look_up_content(type: string): YouTubeContent;

    set_access_control(action: string, permission: YouTubePermission): void;

    set_aspect_ratio(aspect_ratio?: string | null): void;

    set_category(category: MediaCategory): void;

    set_coordinates(latitude: number, longitude: number): void;

    set_description(description?: string | null): void;

    set_is_draft(is_draft: boolean): void;

    set_is_private(is_private: boolean): void;

    set_keywords(keywords: string[]): void;

    set_location(location?: string | null): void;

    set_recorded(recorded: number): void;

    static get_video_id_from_uri(video_uri: string): string;

    // Implemented Members

    delete_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): boolean;

    delete_comment_async(
        service: Service,
        comment_: Comment,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_comment_finish(result: Gio.AsyncResult): boolean;

    insert_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): Comment | null;

    insert_comment_async(
        service: Service,
        comment_: Comment,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    insert_comment_finish(result: Gio.AsyncResult): Comment | null;

    query_comments(
        service: Service,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed | null;

    query_comments_async(
        service: Service,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_comments_finish(result: Gio.AsyncResult): Feed | null;

    vfunc_get_insert_comment_uri(comment: Comment): string;

    vfunc_get_query_comments_uri(): string;

    vfunc_is_comment_deletable(comment: Comment): boolean;
}

export class APPCategoriesPrivate {
    static $gtype: GObject.GType<APPCategoriesPrivate>;

    constructor(copy: APPCategoriesPrivate);
}

export class AccessRulePrivate {
    static $gtype: GObject.GType<AccessRulePrivate>;

    constructor(copy: AccessRulePrivate);
}

export class AuthorPrivate {
    static $gtype: GObject.GType<AuthorPrivate>;

    constructor(copy: AuthorPrivate);
}

export class AuthorizationDomainPrivate {
    static $gtype: GObject.GType<AuthorizationDomainPrivate>;

    constructor(copy: AuthorizationDomainPrivate);
}

export class BatchOperationPrivate {
    static $gtype: GObject.GType<BatchOperationPrivate>;

    constructor(copy: BatchOperationPrivate);
}

export class CalendarCalendarPrivate {
    static $gtype: GObject.GType<CalendarCalendarPrivate>;

    constructor(copy: CalendarCalendarPrivate);
}

export class CalendarEventPrivate {
    static $gtype: GObject.GType<CalendarEventPrivate>;

    constructor(copy: CalendarEventPrivate);
}

export class CalendarFeedPrivate {
    static $gtype: GObject.GType<CalendarFeedPrivate>;

    constructor(copy: CalendarFeedPrivate);
}

export class CalendarQueryPrivate {
    static $gtype: GObject.GType<CalendarQueryPrivate>;

    constructor(copy: CalendarQueryPrivate);
}

export class CalendarServicePrivate {
    static $gtype: GObject.GType<CalendarServicePrivate>;

    constructor(copy: CalendarServicePrivate);
}

export class CategoryPrivate {
    static $gtype: GObject.GType<CategoryPrivate>;

    constructor(copy: CategoryPrivate);
}

export class ClientLoginAuthorizerPrivate {
    static $gtype: GObject.GType<ClientLoginAuthorizerPrivate>;

    constructor(copy: ClientLoginAuthorizerPrivate);
}

export class Color {
    static $gtype: GObject.GType<Color>;

    constructor(
        properties?: Partial<{
            red?: number;
            green?: number;
            blue?: number;
        }>
    );

    constructor(copy: Color);

    // Fields
    red: number;
    green: number;
    blue: number;

    // Members
    to_hexadecimal(): string;

    static from_hexadecimal(hexadecimal: string): [boolean, Color];
}

export class CommentPrivate {
    static $gtype: GObject.GType<CommentPrivate>;

    constructor(copy: CommentPrivate);
}

export class ContactsContactPrivate {
    static $gtype: GObject.GType<ContactsContactPrivate>;

    constructor(copy: ContactsContactPrivate);
}

export class ContactsGroupPrivate {
    static $gtype: GObject.GType<ContactsGroupPrivate>;

    constructor(copy: ContactsGroupPrivate);
}

export class ContactsQueryPrivate {
    static $gtype: GObject.GType<ContactsQueryPrivate>;

    constructor(copy: ContactsQueryPrivate);
}

export class ContactsServicePrivate {
    static $gtype: GObject.GType<ContactsServicePrivate>;

    constructor(copy: ContactsServicePrivate);
}

export class DocumentsDocumentPrivate {
    static $gtype: GObject.GType<DocumentsDocumentPrivate>;

    constructor(copy: DocumentsDocumentPrivate);
}

export class DocumentsDrawingPrivate {
    static $gtype: GObject.GType<DocumentsDrawingPrivate>;

    constructor(copy: DocumentsDrawingPrivate);
}

export class DocumentsEntryPrivate {
    static $gtype: GObject.GType<DocumentsEntryPrivate>;

    constructor(copy: DocumentsEntryPrivate);
}

export class DocumentsFeedPrivate {
    static $gtype: GObject.GType<DocumentsFeedPrivate>;

    constructor(copy: DocumentsFeedPrivate);
}

export class DocumentsFolderPrivate {
    static $gtype: GObject.GType<DocumentsFolderPrivate>;

    constructor(copy: DocumentsFolderPrivate);
}

export class DocumentsMetadataPrivate {
    static $gtype: GObject.GType<DocumentsMetadataPrivate>;

    constructor(copy: DocumentsMetadataPrivate);
}

export class DocumentsPdfPrivate {
    static $gtype: GObject.GType<DocumentsPdfPrivate>;

    constructor(copy: DocumentsPdfPrivate);
}

export class DocumentsPresentationPrivate {
    static $gtype: GObject.GType<DocumentsPresentationPrivate>;

    constructor(copy: DocumentsPresentationPrivate);
}

export class DocumentsPropertyPrivate {
    static $gtype: GObject.GType<DocumentsPropertyPrivate>;

    constructor(copy: DocumentsPropertyPrivate);
}

export class DocumentsQueryPrivate {
    static $gtype: GObject.GType<DocumentsQueryPrivate>;

    constructor(copy: DocumentsQueryPrivate);
}

export class DocumentsServicePrivate {
    static $gtype: GObject.GType<DocumentsServicePrivate>;

    constructor(copy: DocumentsServicePrivate);
}

export class DocumentsSpreadsheetPrivate {
    static $gtype: GObject.GType<DocumentsSpreadsheetPrivate>;

    constructor(copy: DocumentsSpreadsheetPrivate);
}

export class DocumentsTextPrivate {
    static $gtype: GObject.GType<DocumentsTextPrivate>;

    constructor(copy: DocumentsTextPrivate);
}

export class DocumentsUploadQueryPrivate {
    static $gtype: GObject.GType<DocumentsUploadQueryPrivate>;

    constructor(copy: DocumentsUploadQueryPrivate);
}

export class DownloadStreamPrivate {
    static $gtype: GObject.GType<DownloadStreamPrivate>;

    constructor(copy: DownloadStreamPrivate);
}

export class EntryPrivate {
    static $gtype: GObject.GType<EntryPrivate>;

    constructor(copy: EntryPrivate);
}

export class FeedPrivate {
    static $gtype: GObject.GType<FeedPrivate>;

    constructor(copy: FeedPrivate);
}

export class FreebaseQueryPrivate {
    static $gtype: GObject.GType<FreebaseQueryPrivate>;

    constructor(copy: FreebaseQueryPrivate);
}

export class FreebaseResultPrivate {
    static $gtype: GObject.GType<FreebaseResultPrivate>;

    constructor(copy: FreebaseResultPrivate);
}

export class FreebaseSearchQueryPrivate {
    static $gtype: GObject.GType<FreebaseSearchQueryPrivate>;

    constructor(copy: FreebaseSearchQueryPrivate);
}

export class FreebaseSearchResultItem {
    static $gtype: GObject.GType<FreebaseSearchResultItem>;

    constructor(copy: FreebaseSearchResultItem);

    // Members
    get_id(): string;

    get_language(): string;

    get_mid(): string;

    get_name(): string;

    get_notable_id(): string | null;

    get_notable_name(): string | null;

    get_score(): number;
}

export class FreebaseSearchResultPrivate {
    static $gtype: GObject.GType<FreebaseSearchResultPrivate>;

    constructor(copy: FreebaseSearchResultPrivate);
}

export class FreebaseServicePrivate {
    static $gtype: GObject.GType<FreebaseServicePrivate>;

    constructor(copy: FreebaseServicePrivate);
}

export class FreebaseTopicObject {
    static $gtype: GObject.GType<FreebaseTopicObject>;

    constructor(copy: FreebaseTopicObject);

    // Members
    get_id(): string;

    get_property_count(property: string): number;

    get_property_hits(property: string): number;

    get_property_value(property: string, item: number): FreebaseTopicValue | null;

    list_properties(): string[];

    ref(): FreebaseTopicObject;

    unref(): void;
}

export class FreebaseTopicQueryPrivate {
    static $gtype: GObject.GType<FreebaseTopicQueryPrivate>;

    constructor(copy: FreebaseTopicQueryPrivate);
}

export class FreebaseTopicResultPrivate {
    static $gtype: GObject.GType<FreebaseTopicResultPrivate>;

    constructor(copy: FreebaseTopicResultPrivate);
}

export class FreebaseTopicValue {
    static $gtype: GObject.GType<FreebaseTopicValue>;

    constructor(copy: FreebaseTopicValue);

    // Members
    copy_value(): unknown;

    get_creator(): string;

    get_double(): number;

    get_int(): number;

    get_language(): string;

    get_object(): FreebaseTopicObject;

    get_property(): string;

    get_string(): string;

    get_text(): string;

    get_timestamp(): number;

    get_value_type(): GObject.GType;

    is_image(): boolean;

    ref(): FreebaseTopicValue;

    unref(): void;
}

export class GContactCalendarPrivate {
    static $gtype: GObject.GType<GContactCalendarPrivate>;

    constructor(copy: GContactCalendarPrivate);
}

export class GContactEventPrivate {
    static $gtype: GObject.GType<GContactEventPrivate>;

    constructor(copy: GContactEventPrivate);
}

export class GContactExternalIDPrivate {
    static $gtype: GObject.GType<GContactExternalIDPrivate>;

    constructor(copy: GContactExternalIDPrivate);
}

export class GContactJotPrivate {
    static $gtype: GObject.GType<GContactJotPrivate>;

    constructor(copy: GContactJotPrivate);
}

export class GContactLanguagePrivate {
    static $gtype: GObject.GType<GContactLanguagePrivate>;

    constructor(copy: GContactLanguagePrivate);
}

export class GContactRelationPrivate {
    static $gtype: GObject.GType<GContactRelationPrivate>;

    constructor(copy: GContactRelationPrivate);
}

export class GContactWebsitePrivate {
    static $gtype: GObject.GType<GContactWebsitePrivate>;

    constructor(copy: GContactWebsitePrivate);
}

export class GDEmailAddressPrivate {
    static $gtype: GObject.GType<GDEmailAddressPrivate>;

    constructor(copy: GDEmailAddressPrivate);
}

export class GDIMAddressPrivate {
    static $gtype: GObject.GType<GDIMAddressPrivate>;

    constructor(copy: GDIMAddressPrivate);
}

export class GDNamePrivate {
    static $gtype: GObject.GType<GDNamePrivate>;

    constructor(copy: GDNamePrivate);
}

export class GDOrganizationPrivate {
    static $gtype: GObject.GType<GDOrganizationPrivate>;

    constructor(copy: GDOrganizationPrivate);
}

export class GDPhoneNumberPrivate {
    static $gtype: GObject.GType<GDPhoneNumberPrivate>;

    constructor(copy: GDPhoneNumberPrivate);
}

export class GDPostalAddressPrivate {
    static $gtype: GObject.GType<GDPostalAddressPrivate>;

    constructor(copy: GDPostalAddressPrivate);
}

export class GDReminderPrivate {
    static $gtype: GObject.GType<GDReminderPrivate>;

    constructor(copy: GDReminderPrivate);
}

export class GDWhenPrivate {
    static $gtype: GObject.GType<GDWhenPrivate>;

    constructor(copy: GDWhenPrivate);
}

export class GDWherePrivate {
    static $gtype: GObject.GType<GDWherePrivate>;

    constructor(copy: GDWherePrivate);
}

export class GDWhoPrivate {
    static $gtype: GObject.GType<GDWhoPrivate>;

    constructor(copy: GDWhoPrivate);
}

export class GeneratorPrivate {
    static $gtype: GObject.GType<GeneratorPrivate>;

    constructor(copy: GeneratorPrivate);
}

export class GoaAuthorizerPrivate {
    static $gtype: GObject.GType<GoaAuthorizerPrivate>;

    constructor(copy: GoaAuthorizerPrivate);
}

export class LinkPrivate {
    static $gtype: GObject.GType<LinkPrivate>;

    constructor(copy: LinkPrivate);
}

export class MediaCategoryPrivate {
    static $gtype: GObject.GType<MediaCategoryPrivate>;

    constructor(copy: MediaCategoryPrivate);
}

export class MediaContentPrivate {
    static $gtype: GObject.GType<MediaContentPrivate>;

    constructor(copy: MediaContentPrivate);
}

export class MediaCreditPrivate {
    static $gtype: GObject.GType<MediaCreditPrivate>;

    constructor(copy: MediaCreditPrivate);
}

export class MediaThumbnailPrivate {
    static $gtype: GObject.GType<MediaThumbnailPrivate>;

    constructor(copy: MediaThumbnailPrivate);
}

export class OAuth1AuthorizerPrivate {
    static $gtype: GObject.GType<OAuth1AuthorizerPrivate>;

    constructor(copy: OAuth1AuthorizerPrivate);
}

export class OAuth2AuthorizerPrivate {
    static $gtype: GObject.GType<OAuth2AuthorizerPrivate>;

    constructor(copy: OAuth2AuthorizerPrivate);
}

export class ParsablePrivate {
    static $gtype: GObject.GType<ParsablePrivate>;

    constructor(copy: ParsablePrivate);
}

export class PicasaWebAlbumPrivate {
    static $gtype: GObject.GType<PicasaWebAlbumPrivate>;

    constructor(copy: PicasaWebAlbumPrivate);
}

export class PicasaWebCommentPrivate {
    static $gtype: GObject.GType<PicasaWebCommentPrivate>;

    constructor(copy: PicasaWebCommentPrivate);
}

export class PicasaWebFilePrivate {
    static $gtype: GObject.GType<PicasaWebFilePrivate>;

    constructor(copy: PicasaWebFilePrivate);
}

export class PicasaWebQueryPrivate {
    static $gtype: GObject.GType<PicasaWebQueryPrivate>;

    constructor(copy: PicasaWebQueryPrivate);
}

export class PicasaWebUserPrivate {
    static $gtype: GObject.GType<PicasaWebUserPrivate>;

    constructor(copy: PicasaWebUserPrivate);
}

export class QueryPrivate {
    static $gtype: GObject.GType<QueryPrivate>;

    constructor(copy: QueryPrivate);
}

export class ServicePrivate {
    static $gtype: GObject.GType<ServicePrivate>;

    constructor(copy: ServicePrivate);
}

export class TasksQueryPrivate {
    static $gtype: GObject.GType<TasksQueryPrivate>;

    constructor(copy: TasksQueryPrivate);
}

export class TasksTaskPrivate {
    static $gtype: GObject.GType<TasksTaskPrivate>;

    constructor(copy: TasksTaskPrivate);
}

export class UploadStreamPrivate {
    static $gtype: GObject.GType<UploadStreamPrivate>;

    constructor(copy: UploadStreamPrivate);
}

export class YouTubeCategoryPrivate {
    static $gtype: GObject.GType<YouTubeCategoryPrivate>;

    constructor(copy: YouTubeCategoryPrivate);
}

export class YouTubeCommentPrivate {
    static $gtype: GObject.GType<YouTubeCommentPrivate>;

    constructor(copy: YouTubeCommentPrivate);
}

export class YouTubeContentPrivate {
    static $gtype: GObject.GType<YouTubeContentPrivate>;

    constructor(copy: YouTubeContentPrivate);
}

export class YouTubeCreditPrivate {
    static $gtype: GObject.GType<YouTubeCreditPrivate>;

    constructor(copy: YouTubeCreditPrivate);
}

export class YouTubeFeedPrivate {
    static $gtype: GObject.GType<YouTubeFeedPrivate>;

    constructor(copy: YouTubeFeedPrivate);
}

export class YouTubeQueryPrivate {
    static $gtype: GObject.GType<YouTubeQueryPrivate>;

    constructor(copy: YouTubeQueryPrivate);
}

export class YouTubeServicePrivate {
    static $gtype: GObject.GType<YouTubeServicePrivate>;

    constructor(copy: YouTubeServicePrivate);
}

export class YouTubeStatePrivate {
    static $gtype: GObject.GType<YouTubeStatePrivate>;

    constructor(copy: YouTubeStatePrivate);
}

export class YouTubeVideoPrivate {
    static $gtype: GObject.GType<YouTubeVideoPrivate>;

    constructor(copy: YouTubeVideoPrivate);
}

export interface AccessHandlerNamespace {
    $gtype: GObject.GType<AccessHandler>;
    prototype: AccessHandlerPrototype;
}

export type AccessHandler = AccessHandlerPrototype;

export interface AccessHandlerPrototype extends Entry {
    // Members

    get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;

    get_rules_async(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_get_rules(
        service: Service,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed;
}

export const AccessHandler: AccessHandlerNamespace;

export interface AuthorizerNamespace {
    $gtype: GObject.GType<Authorizer>;
    prototype: AuthorizerPrototype;
}

export type Authorizer = AuthorizerPrototype;

export interface AuthorizerPrototype extends GObject.Object {
    // Members

    is_authorized_for_domain(domain: AuthorizationDomain): boolean;

    process_request(domain: AuthorizationDomain | null, message: Soup.Message): void;

    refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    refresh_authorization_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    refresh_authorization_finish(async_result: Gio.AsyncResult): boolean;

    vfunc_is_authorized_for_domain(domain: AuthorizationDomain): boolean;

    vfunc_process_request(domain: AuthorizationDomain | null, message: Soup.Message): void;

    vfunc_refresh_authorization(cancellable?: Gio.Cancellable | null): boolean;

    vfunc_refresh_authorization_async(
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_refresh_authorization_finish(async_result: Gio.AsyncResult): boolean;
}

export const Authorizer: AuthorizerNamespace;

export interface BatchableNamespace {
    $gtype: GObject.GType<Batchable>;
    prototype: BatchablePrototype;
}

export type Batchable = BatchablePrototype;

export interface BatchablePrototype extends Service {
    // Members

    create_operation(domain: AuthorizationDomain | null, feed_uri: string): BatchOperation;
}

export const Batchable: BatchableNamespace;

export interface CommentableNamespace {
    $gtype: GObject.GType<Commentable>;
    prototype: CommentablePrototype;
}

export type Commentable = CommentablePrototype;

export interface CommentablePrototype extends Entry {
    // Members

    delete_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): boolean;

    delete_comment_async(
        service: Service,
        comment_: Comment,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_comment_finish(result: Gio.AsyncResult): boolean;

    insert_comment(service: Service, comment_: Comment, cancellable?: Gio.Cancellable | null): Comment | null;

    insert_comment_async(
        service: Service,
        comment_: Comment,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    insert_comment_finish(result: Gio.AsyncResult): Comment | null;

    query_comments(
        service: Service,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null
    ): Feed | null;

    query_comments_async(
        service: Service,
        query?: Query | null,
        cancellable?: Gio.Cancellable | null,
        progress_callback?: QueryProgressCallback | null,
        destroy_progress_user_data?: GLib.DestroyNotify | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    query_comments_finish(result: Gio.AsyncResult): Feed | null;

    vfunc_get_insert_comment_uri(comment: Comment): string;

    vfunc_get_query_comments_uri(): string;

    vfunc_is_comment_deletable(comment: Comment): boolean;
}

export const Commentable: CommentableNamespace;

export interface ComparableNamespace {
    $gtype: GObject.GType<Comparable>;
    prototype: ComparablePrototype;
}

export type Comparable = ComparablePrototype;

export interface ComparablePrototype extends GObject.Object {
    // Members

    compare(other?: Comparable | null): number;

    vfunc_compare_with(other: Comparable): number;
}

export const Comparable: ComparableNamespace;
