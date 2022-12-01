/**
 * EBookContacts 1.2
 *
 * Generated from 1.2
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Camel from './camel';
import * as EDataServer from './edataserver';
import * as GLib from './glib';
import * as GObject from './gobject';
import * as Gio from './gio';
import * as libxml2 from './libxml2';

export const BOOK_BACKEND_PROPERTY_REQUIRED_FIELDS: string;
export const BOOK_BACKEND_PROPERTY_REVISION: string;
export const BOOK_BACKEND_PROPERTY_SUPPORTED_FIELDS: string;
export const EVC_ADR: string;
export const EVC_BDAY: string;
export const EVC_CALURI: string;
export const EVC_CATEGORIES: string;
export const EVC_CL_UID: string;
export const EVC_CONTACT_LIST: string;
export const EVC_EMAIL: string;
export const EVC_ENCODING: string;
export const EVC_FBURL: string;
export const EVC_FN: string;
export const EVC_GEO: string;
export const EVC_ICSCALENDAR: string;
export const EVC_KEY: string;
export const EVC_LABEL: string;
export const EVC_LOGO: string;
export const EVC_MAILER: string;
export const EVC_N: string;
export const EVC_NICKNAME: string;
export const EVC_NOTE: string;
export const EVC_ORG: string;
export const EVC_PARENT_CL: string;
export const EVC_PHOTO: string;
export const EVC_PRODID: string;
export const EVC_QUOTEDPRINTABLE: string;
export const EVC_REV: string;
export const EVC_ROLE: string;
export const EVC_TEL: string;
export const EVC_TITLE: string;
export const EVC_TYPE: string;
export const EVC_UID: string;
export const EVC_URL: string;
export const EVC_VALUE: string;
export const EVC_VERSION: string;
export const EVC_X_AIM: string;
export const EVC_X_ANNIVERSARY: string;
export const EVC_X_ASSISTANT: string;
export const EVC_X_BIRTHDAY: string;
export const EVC_X_BLOG_URL: string;
export const EVC_X_BOOK_UID: string;
export const EVC_X_CALLBACK: string;
export const EVC_X_COMPANY: string;
export const EVC_X_DEST_CONTACT_UID: string;
export const EVC_X_DEST_EMAIL: string;
export const EVC_X_DEST_EMAIL_NUM: string;
export const EVC_X_DEST_HTML_MAIL: string;
export const EVC_X_DEST_NAME: string;
export const EVC_X_DEST_SOURCE_UID: string;
export const EVC_X_E164: string;
export const EVC_X_FILE_AS: string;
export const EVC_X_GADUGADU: string;
export const EVC_X_GOOGLE_TALK: string;
export const EVC_X_GROUPWISE: string;
export const EVC_X_ICQ: string;
export const EVC_X_JABBER: string;
export const EVC_X_LIST: string;
export const EVC_X_LIST_NAME: string;
export const EVC_X_LIST_SHOW_ADDRESSES: string;
export const EVC_X_MANAGER: string;
export const EVC_X_MSN: string;
export const EVC_X_RADIO: string;
export const EVC_X_SIP: string;
export const EVC_X_SKYPE: string;
export const EVC_X_SPOUSE: string;
export const EVC_X_TELEX: string;
export const EVC_X_TTYTDD: string;
export const EVC_X_TWITTER: string;
export const EVC_X_VIDEO_URL: string;
export const EVC_X_WANTS_HTML: string;
export const EVC_X_YAHOO: string;
export const SOURCE_EXTENSION_BACKEND_SUMMARY_SETUP: string;
export const VCARD_21_VALID_PARAMETERS: string;
export const VCARD_21_VALID_PROPERTIES: string;

export function address_western_parse(in_address: string): AddressWestern;

export function book_client_error_create(code: BookClientError, custom_msg: string): GLib.Error;

export function book_client_error_quark(): GLib.Quark;

export function book_client_error_to_string(code: BookClientError): string;

export function book_query_and(nqs: number, qs: BookQuery, unref: boolean): BookQuery;

export function book_query_any_field_contains(value: string): BookQuery;

export function book_query_field_exists(field: ContactField): BookQuery;

export function book_query_field_test(field: ContactField, test: BookQueryTest, value: string): BookQuery;

export function book_query_from_string(query_string: string): BookQuery;

export function book_query_or(nqs: number, qs: BookQuery, unref: boolean): BookQuery;

export function book_query_vcard_field_exists(field: string): BookQuery;

export function book_query_vcard_field_test(field: string, test: BookQueryTest, value: string): BookQuery;

export function book_util_conflict_resolution_to_operation_flags(
    conflict_resolution: EDataServer.ConflictResolution
): number;

export function book_util_operation_flags_to_conflict_resolution(flags: number): EDataServer.ConflictResolution;

export function contact_attr_list_copy(list: string[]): string[];

export function contact_attr_list_free(list: string[]): void;

export function contact_date_from_string(str: string): ContactDate;

export function contact_name_from_string(name_str: string): ContactName;

export function name_western_parse(full_name: string): NameWestern;

export function phone_number_compare_strings(first_number: string, second_number: string): PhoneNumberMatch;

export function phone_number_compare_strings_with_region(
    first_number: string,
    second_number: string,
    region_code?: string | null
): PhoneNumberMatch;

export function phone_number_error_quark(): GLib.Quark;

export function phone_number_from_string(phone_number: string, region_code?: string | null): PhoneNumber;

export function phone_number_get_country_code_for_region(region_code?: string | null): number;

export function phone_number_get_default_region(): string;

export function phone_number_is_supported(): boolean;

export type ContactAttrList = object | null;

export namespace BookChangeType {
    export const $gtype: GObject.GType<BookChangeType>;
}

export enum BookChangeType {
    ADDED = 0,
    DELETED = 1,
    MODIFIED = 2,
}

export class BookClientError extends GLib.Error {
    static $gtype: GObject.GType<BookClientError>;

    constructor(options: { message: string; code: number });
    constructor(copy: BookClientError);

    // Properties
    static NO_SUCH_BOOK: number;
    static CONTACT_NOT_FOUND: number;
    static CONTACT_ID_ALREADY_EXISTS: number;
    static NO_SUCH_SOURCE: number;
    static NO_SPACE: number;
}

export namespace BookCursorOrigin {
    export const $gtype: GObject.GType<BookCursorOrigin>;
}

export enum BookCursorOrigin {
    CURRENT = 0,
    BEGIN = 1,
    END = 2,
}

export namespace BookCursorSortType {
    export const $gtype: GObject.GType<BookCursorSortType>;
}

export enum BookCursorSortType {
    ASCENDING = 0,
    DESCENDING = 1,
}

export namespace BookIndexType {
    export const $gtype: GObject.GType<BookIndexType>;
}

export enum BookIndexType {
    PREFIX = 0,
    SUFFIX = 1,
    PHONE = 2,
    SORT_KEY = 3,
}

export namespace BookQueryTest {
    export const $gtype: GObject.GType<BookQueryTest>;
}

export enum BookQueryTest {
    IS = 0,
    CONTAINS = 1,
    BEGINS_WITH = 2,
    ENDS_WITH = 3,
    EQUALS_PHONE_NUMBER = 4,
    EQUALS_NATIONAL_PHONE_NUMBER = 5,
    EQUALS_SHORT_PHONE_NUMBER = 6,
    REGEX_NORMAL = 7,
    REGEX_RAW = 8,
    LAST = 9,
}

export namespace BookViewStatus {
    export const $gtype: GObject.GType<BookViewStatus>;
}

export enum BookViewStatus {
    STATUS_OK = 0,
    STATUS_TIME_LIMIT_EXCEEDED = 1,
    STATUS_SIZE_LIMIT_EXCEEDED = 2,
    ERROR_INVALID_QUERY = 3,
    ERROR_QUERY_REFUSED = 4,
    ERROR_OTHER_ERROR = 5,
}

export namespace ContactField {
    export const $gtype: GObject.GType<ContactField>;
}

export enum ContactField {
    UID = 1,
    FILE_AS = 2,
    BOOK_UID = 3,
    FULL_NAME = 4,
    GIVEN_NAME = 5,
    FAMILY_NAME = 6,
    NICKNAME = 7,
    EMAIL_1 = 8,
    EMAIL_2 = 9,
    EMAIL_3 = 10,
    EMAIL_4 = 11,
    MAILER = 12,
    ADDRESS_LABEL_HOME = 13,
    ADDRESS_LABEL_WORK = 14,
    ADDRESS_LABEL_OTHER = 15,
    PHONE_ASSISTANT = 16,
    PHONE_BUSINESS = 17,
    PHONE_BUSINESS_2 = 18,
    PHONE_BUSINESS_FAX = 19,
    PHONE_CALLBACK = 20,
    PHONE_CAR = 21,
    PHONE_COMPANY = 22,
    PHONE_HOME = 23,
    PHONE_HOME_2 = 24,
    PHONE_HOME_FAX = 25,
    PHONE_ISDN = 26,
    PHONE_MOBILE = 27,
    PHONE_OTHER = 28,
    PHONE_OTHER_FAX = 29,
    PHONE_PAGER = 30,
    PHONE_PRIMARY = 31,
    PHONE_RADIO = 32,
    PHONE_TELEX = 33,
    PHONE_TTYTDD = 34,
    ORG = 35,
    ORG_UNIT = 36,
    OFFICE = 37,
    TITLE = 38,
    ROLE = 39,
    MANAGER = 40,
    ASSISTANT = 41,
    HOMEPAGE_URL = 42,
    BLOG_URL = 43,
    CATEGORIES = 44,
    CALENDAR_URI = 45,
    FREEBUSY_URL = 46,
    ICS_CALENDAR = 47,
    VIDEO_URL = 48,
    SPOUSE = 49,
    NOTE = 50,
    IM_AIM_HOME_1 = 51,
    IM_AIM_HOME_2 = 52,
    IM_AIM_HOME_3 = 53,
    IM_AIM_WORK_1 = 54,
    IM_AIM_WORK_2 = 55,
    IM_AIM_WORK_3 = 56,
    IM_GROUPWISE_HOME_1 = 57,
    IM_GROUPWISE_HOME_2 = 58,
    IM_GROUPWISE_HOME_3 = 59,
    IM_GROUPWISE_WORK_1 = 60,
    IM_GROUPWISE_WORK_2 = 61,
    IM_GROUPWISE_WORK_3 = 62,
    IM_JABBER_HOME_1 = 63,
    IM_JABBER_HOME_2 = 64,
    IM_JABBER_HOME_3 = 65,
    IM_JABBER_WORK_1 = 66,
    IM_JABBER_WORK_2 = 67,
    IM_JABBER_WORK_3 = 68,
    IM_YAHOO_HOME_1 = 69,
    IM_YAHOO_HOME_2 = 70,
    IM_YAHOO_HOME_3 = 71,
    IM_YAHOO_WORK_1 = 72,
    IM_YAHOO_WORK_2 = 73,
    IM_YAHOO_WORK_3 = 74,
    IM_MSN_HOME_1 = 75,
    IM_MSN_HOME_2 = 76,
    IM_MSN_HOME_3 = 77,
    IM_MSN_WORK_1 = 78,
    IM_MSN_WORK_2 = 79,
    IM_MSN_WORK_3 = 80,
    IM_ICQ_HOME_1 = 81,
    IM_ICQ_HOME_2 = 82,
    IM_ICQ_HOME_3 = 83,
    IM_ICQ_WORK_1 = 84,
    IM_ICQ_WORK_2 = 85,
    IM_ICQ_WORK_3 = 86,
    REV = 87,
    NAME_OR_ORG = 88,
    ADDRESS = 89,
    ADDRESS_HOME = 90,
    ADDRESS_WORK = 91,
    ADDRESS_OTHER = 92,
    CATEGORY_LIST = 93,
    PHOTO = 94,
    LOGO = 95,
    NAME = 96,
    EMAIL = 97,
    IM_AIM = 98,
    IM_GROUPWISE = 99,
    IM_JABBER = 100,
    IM_YAHOO = 101,
    IM_MSN = 102,
    IM_ICQ = 103,
    WANTS_HTML = 104,
    IS_LIST = 105,
    LIST_SHOW_ADDRESSES = 106,
    BIRTH_DATE = 107,
    ANNIVERSARY = 108,
    X509_CERT = 109,
    PGP_CERT = 110,
    IM_GADUGADU_HOME_1 = 111,
    IM_GADUGADU_HOME_2 = 112,
    IM_GADUGADU_HOME_3 = 113,
    IM_GADUGADU_WORK_1 = 114,
    IM_GADUGADU_WORK_2 = 115,
    IM_GADUGADU_WORK_3 = 116,
    IM_GADUGADU = 117,
    GEO = 118,
    TEL = 119,
    IM_SKYPE_HOME_1 = 120,
    IM_SKYPE_HOME_2 = 121,
    IM_SKYPE_HOME_3 = 122,
    IM_SKYPE_WORK_1 = 123,
    IM_SKYPE_WORK_2 = 124,
    IM_SKYPE_WORK_3 = 125,
    IM_SKYPE = 126,
    SIP = 127,
    IM_GOOGLE_TALK_HOME_1 = 128,
    IM_GOOGLE_TALK_HOME_2 = 129,
    IM_GOOGLE_TALK_HOME_3 = 130,
    IM_GOOGLE_TALK_WORK_1 = 131,
    IM_GOOGLE_TALK_WORK_2 = 132,
    IM_GOOGLE_TALK_WORK_3 = 133,
    IM_GOOGLE_TALK = 134,
    IM_TWITTER = 135,
    FIELD_LAST = 136,
    FIELD_FIRST = 1,
    LAST_SIMPLE_STRING = 88,
    FIRST_PHONE_ID = 16,
    LAST_PHONE_ID = 34,
    FIRST_EMAIL_ID = 8,
    LAST_EMAIL_ID = 11,
    FIRST_ADDRESS_ID = 90,
    LAST_ADDRESS_ID = 92,
    FIRST_LABEL_ID = 13,
    LAST_LABEL_ID = 15,
}

export namespace ContactPhotoType {
    export const $gtype: GObject.GType<ContactPhotoType>;
}

export enum ContactPhotoType {
    INLINED = 0,
    URI = 1,
}

export namespace PhoneNumberCountrySource {
    export const $gtype: GObject.GType<PhoneNumberCountrySource>;
}

export enum PhoneNumberCountrySource {
    FQTN = 1,
    IDD = 5,
    DEFAULT = 20,
}

export class PhoneNumberError extends GLib.Error {
    static $gtype: GObject.GType<PhoneNumberError>;

    constructor(options: { message: string; code: number });
    constructor(copy: PhoneNumberError);

    // Properties
    static NOT_IMPLEMENTED: number;
    static UNKNOWN: number;
    static NOT_A_NUMBER: number;
    static INVALID_COUNTRY_CODE: number;
    static TOO_SHORT_AFTER_IDD: number;
    static TOO_SHORT: number;
    static TOO_LONG: number;
}

export namespace PhoneNumberFormat {
    export const $gtype: GObject.GType<PhoneNumberFormat>;
}

export enum PhoneNumberFormat {
    E164 = 0,
    INTERNATIONAL = 1,
    NATIONAL = 2,
    RFC3966 = 3,
}

export namespace PhoneNumberMatch {
    export const $gtype: GObject.GType<PhoneNumberMatch>;
}

export enum PhoneNumberMatch {
    NONE = 0,
    EXACT = 1,
    NATIONAL = 1024,
    SHORT = 2048,
}

export class VCardFormat {
    static $gtype: GObject.GType<VCardFormat>;

    constructor(copy: VCardFormat);

    // Properties
    static '21': number;
    static '30': number;
}

export namespace BookClientViewFlags {
    export const $gtype: GObject.GType<BookClientViewFlags>;
}

export enum BookClientViewFlags {
    NONE = 0,
    NOTIFY_INITIAL = 1,
}

export namespace BookCursorStepFlags {
    export const $gtype: GObject.GType<BookCursorStepFlags>;
}

export enum BookCursorStepFlags {
    MOVE = 1,
    FETCH = 2,
}

export namespace BookOperationFlags {
    export const $gtype: GObject.GType<BookOperationFlags>;
}

export enum BookOperationFlags {
    NONE = 0,
    CONFLICT_FAIL = 1,
    CONFLICT_USE_NEWER = 2,
    CONFLICT_KEEP_SERVER = 4,
    CONFLICT_KEEP_LOCAL = 0,
    CONFLICT_WRITE_COPY = 8,
}

export namespace Contact {
    export interface ConstructorProperties extends VCard.ConstructorProperties {
        [key: string]: any;

        Rev: string;
        address: ContactAttrList;
        address_home: ContactAddress;
        addressHome: ContactAddress;
        address_label_home: string;
        addressLabelHome: string;
        address_label_other: string;
        addressLabelOther: string;
        address_label_work: string;
        addressLabelWork: string;
        address_other: ContactAddress;
        addressOther: ContactAddress;
        address_work: ContactAddress;
        addressWork: ContactAddress;
        anniversary: ContactDate;
        assistant: string;
        assistant_phone: string;
        assistantPhone: string;
        birth_date: ContactDate;
        birthDate: ContactDate;
        blog_url: string;
        blogUrl: string;
        book_uid: string;
        bookUid: string;
        business_fax: string;
        businessFax: string;
        business_phone: string;
        businessPhone: string;
        business_phone_2: string;
        businessPhone2: string;
        callback_phone: string;
        callbackPhone: string;
        caluri: string;
        car_phone: string;
        carPhone: string;
        categories: string;
        category_list: any;
        categoryList: any;
        company_phone: string;
        companyPhone: string;
        email: ContactAttrList;
        email_1: string;
        email1: string;
        email_2: string;
        email2: string;
        email_3: string;
        email3: string;
        email_4: string;
        email4: string;
        family_name: string;
        familyName: string;
        fburl: string;
        file_as: string;
        fileAs: string;
        full_name: string;
        fullName: string;
        geo: ContactGeo;
        given_name: string;
        givenName: string;
        home_fax: string;
        homeFax: string;
        home_phone: string;
        homePhone: string;
        home_phone_2: string;
        homePhone2: string;
        homepage_url: string;
        homepageUrl: string;
        icscalendar: string;
        id: string;
        im_aim: ContactAttrList;
        imAim: ContactAttrList;
        im_aim_home_1: string;
        imAimHome1: string;
        im_aim_home_2: string;
        imAimHome2: string;
        im_aim_home_3: string;
        imAimHome3: string;
        im_aim_work_1: string;
        imAimWork1: string;
        im_aim_work_2: string;
        imAimWork2: string;
        im_aim_work_3: string;
        imAimWork3: string;
        im_gadugadu: ContactAttrList;
        imGadugadu: ContactAttrList;
        im_gadugadu_home_1: string;
        imGadugaduHome1: string;
        im_gadugadu_home_2: string;
        imGadugaduHome2: string;
        im_gadugadu_home_3: string;
        imGadugaduHome3: string;
        im_gadugadu_work_1: string;
        imGadugaduWork1: string;
        im_gadugadu_work_2: string;
        imGadugaduWork2: string;
        im_gadugadu_work_3: string;
        imGadugaduWork3: string;
        im_google_talk: ContactAttrList;
        imGoogleTalk: ContactAttrList;
        im_google_talk_home_1: string;
        imGoogleTalkHome1: string;
        im_google_talk_home_2: string;
        imGoogleTalkHome2: string;
        im_google_talk_home_3: string;
        imGoogleTalkHome3: string;
        im_google_talk_work_1: string;
        imGoogleTalkWork1: string;
        im_google_talk_work_2: string;
        imGoogleTalkWork2: string;
        im_google_talk_work_3: string;
        imGoogleTalkWork3: string;
        im_groupwise: ContactAttrList;
        imGroupwise: ContactAttrList;
        im_groupwise_home_1: string;
        imGroupwiseHome1: string;
        im_groupwise_home_2: string;
        imGroupwiseHome2: string;
        im_groupwise_home_3: string;
        imGroupwiseHome3: string;
        im_groupwise_work_1: string;
        imGroupwiseWork1: string;
        im_groupwise_work_2: string;
        imGroupwiseWork2: string;
        im_groupwise_work_3: string;
        imGroupwiseWork3: string;
        im_icq: ContactAttrList;
        imIcq: ContactAttrList;
        im_icq_home_1: string;
        imIcqHome1: string;
        im_icq_home_2: string;
        imIcqHome2: string;
        im_icq_home_3: string;
        imIcqHome3: string;
        im_icq_work_1: string;
        imIcqWork1: string;
        im_icq_work_2: string;
        imIcqWork2: string;
        im_icq_work_3: string;
        imIcqWork3: string;
        im_jabber: ContactAttrList;
        imJabber: ContactAttrList;
        im_jabber_home_1: string;
        imJabberHome1: string;
        im_jabber_home_2: string;
        imJabberHome2: string;
        im_jabber_home_3: string;
        imJabberHome3: string;
        im_jabber_work_1: string;
        imJabberWork1: string;
        im_jabber_work_2: string;
        imJabberWork2: string;
        im_jabber_work_3: string;
        imJabberWork3: string;
        im_msn: ContactAttrList;
        imMsn: ContactAttrList;
        im_msn_home_1: string;
        imMsnHome1: string;
        im_msn_home_2: string;
        imMsnHome2: string;
        im_msn_home_3: string;
        imMsnHome3: string;
        im_msn_work_1: string;
        imMsnWork1: string;
        im_msn_work_2: string;
        imMsnWork2: string;
        im_msn_work_3: string;
        imMsnWork3: string;
        im_skype: ContactAttrList;
        imSkype: ContactAttrList;
        im_skype_home_1: string;
        imSkypeHome1: string;
        im_skype_home_2: string;
        imSkypeHome2: string;
        im_skype_home_3: string;
        imSkypeHome3: string;
        im_skype_work_1: string;
        imSkypeWork1: string;
        im_skype_work_2: string;
        imSkypeWork2: string;
        im_skype_work_3: string;
        imSkypeWork3: string;
        im_twitter: ContactAttrList;
        imTwitter: ContactAttrList;
        im_yahoo: ContactAttrList;
        imYahoo: ContactAttrList;
        im_yahoo_home_1: string;
        imYahooHome1: string;
        im_yahoo_home_2: string;
        imYahooHome2: string;
        im_yahoo_home_3: string;
        imYahooHome3: string;
        im_yahoo_work_1: string;
        imYahooWork1: string;
        im_yahoo_work_2: string;
        imYahooWork2: string;
        im_yahoo_work_3: string;
        imYahooWork3: string;
        isdn_phone: string;
        isdnPhone: string;
        list: boolean;
        list_show_addresses: boolean;
        listShowAddresses: boolean;
        logo: ContactPhoto;
        mailer: string;
        manager: string;
        mobile_phone: string;
        mobilePhone: string;
        name: ContactName;
        name_or_org: string;
        nameOrOrg: string;
        nickname: string;
        note: string;
        office: string;
        org: string;
        org_unit: string;
        orgUnit: string;
        other_fax: string;
        otherFax: string;
        other_phone: string;
        otherPhone: string;
        pager: string;
        pgpCert: ContactCert;
        phone: ContactAttrList;
        photo: ContactPhoto;
        primary_phone: string;
        primaryPhone: string;
        radio: string;
        role: string;
        sip: ContactAttrList;
        spouse: string;
        telex: string;
        title: string;
        tty: string;
        video_url: string;
        videoUrl: string;
        wants_html: boolean;
        wantsHtml: boolean;
        x509Cert: ContactCert;
    }
}

export class Contact extends VCard {
    static $gtype: GObject.GType<Contact>;

    constructor(properties?: Partial<Contact.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Contact.ConstructorProperties>, ...args: any[]): void;

    // Properties
    Rev: string;
    address: ContactAttrList;
    address_home: ContactAddress;
    addressHome: ContactAddress;
    address_label_home: string;
    addressLabelHome: string;
    address_label_other: string;
    addressLabelOther: string;
    address_label_work: string;
    addressLabelWork: string;
    address_other: ContactAddress;
    addressOther: ContactAddress;
    address_work: ContactAddress;
    addressWork: ContactAddress;
    anniversary: ContactDate;
    assistant: string;
    assistant_phone: string;
    assistantPhone: string;
    birth_date: ContactDate;
    birthDate: ContactDate;
    blog_url: string;
    blogUrl: string;
    book_uid: string;
    bookUid: string;
    business_fax: string;
    businessFax: string;
    business_phone: string;
    businessPhone: string;
    business_phone_2: string;
    businessPhone2: string;
    callback_phone: string;
    callbackPhone: string;
    caluri: string;
    car_phone: string;
    carPhone: string;
    categories: string;
    category_list: any;
    categoryList: any;
    company_phone: string;
    companyPhone: string;
    email: ContactAttrList;
    email_1: string;
    email1: string;
    email_2: string;
    email2: string;
    email_3: string;
    email3: string;
    email_4: string;
    email4: string;
    family_name: string;
    familyName: string;
    fburl: string;
    file_as: string;
    fileAs: string;
    full_name: string;
    fullName: string;
    geo: ContactGeo;
    given_name: string;
    givenName: string;
    home_fax: string;
    homeFax: string;
    home_phone: string;
    homePhone: string;
    home_phone_2: string;
    homePhone2: string;
    homepage_url: string;
    homepageUrl: string;
    icscalendar: string;
    id: string;
    im_aim: ContactAttrList;
    imAim: ContactAttrList;
    im_aim_home_1: string;
    imAimHome1: string;
    im_aim_home_2: string;
    imAimHome2: string;
    im_aim_home_3: string;
    imAimHome3: string;
    im_aim_work_1: string;
    imAimWork1: string;
    im_aim_work_2: string;
    imAimWork2: string;
    im_aim_work_3: string;
    imAimWork3: string;
    im_gadugadu: ContactAttrList;
    imGadugadu: ContactAttrList;
    im_gadugadu_home_1: string;
    imGadugaduHome1: string;
    im_gadugadu_home_2: string;
    imGadugaduHome2: string;
    im_gadugadu_home_3: string;
    imGadugaduHome3: string;
    im_gadugadu_work_1: string;
    imGadugaduWork1: string;
    im_gadugadu_work_2: string;
    imGadugaduWork2: string;
    im_gadugadu_work_3: string;
    imGadugaduWork3: string;
    im_google_talk: ContactAttrList;
    imGoogleTalk: ContactAttrList;
    im_google_talk_home_1: string;
    imGoogleTalkHome1: string;
    im_google_talk_home_2: string;
    imGoogleTalkHome2: string;
    im_google_talk_home_3: string;
    imGoogleTalkHome3: string;
    im_google_talk_work_1: string;
    imGoogleTalkWork1: string;
    im_google_talk_work_2: string;
    imGoogleTalkWork2: string;
    im_google_talk_work_3: string;
    imGoogleTalkWork3: string;
    im_groupwise: ContactAttrList;
    imGroupwise: ContactAttrList;
    im_groupwise_home_1: string;
    imGroupwiseHome1: string;
    im_groupwise_home_2: string;
    imGroupwiseHome2: string;
    im_groupwise_home_3: string;
    imGroupwiseHome3: string;
    im_groupwise_work_1: string;
    imGroupwiseWork1: string;
    im_groupwise_work_2: string;
    imGroupwiseWork2: string;
    im_groupwise_work_3: string;
    imGroupwiseWork3: string;
    im_icq: ContactAttrList;
    imIcq: ContactAttrList;
    im_icq_home_1: string;
    imIcqHome1: string;
    im_icq_home_2: string;
    imIcqHome2: string;
    im_icq_home_3: string;
    imIcqHome3: string;
    im_icq_work_1: string;
    imIcqWork1: string;
    im_icq_work_2: string;
    imIcqWork2: string;
    im_icq_work_3: string;
    imIcqWork3: string;
    im_jabber: ContactAttrList;
    imJabber: ContactAttrList;
    im_jabber_home_1: string;
    imJabberHome1: string;
    im_jabber_home_2: string;
    imJabberHome2: string;
    im_jabber_home_3: string;
    imJabberHome3: string;
    im_jabber_work_1: string;
    imJabberWork1: string;
    im_jabber_work_2: string;
    imJabberWork2: string;
    im_jabber_work_3: string;
    imJabberWork3: string;
    im_msn: ContactAttrList;
    imMsn: ContactAttrList;
    im_msn_home_1: string;
    imMsnHome1: string;
    im_msn_home_2: string;
    imMsnHome2: string;
    im_msn_home_3: string;
    imMsnHome3: string;
    im_msn_work_1: string;
    imMsnWork1: string;
    im_msn_work_2: string;
    imMsnWork2: string;
    im_msn_work_3: string;
    imMsnWork3: string;
    im_skype: ContactAttrList;
    imSkype: ContactAttrList;
    im_skype_home_1: string;
    imSkypeHome1: string;
    im_skype_home_2: string;
    imSkypeHome2: string;
    im_skype_home_3: string;
    imSkypeHome3: string;
    im_skype_work_1: string;
    imSkypeWork1: string;
    im_skype_work_2: string;
    imSkypeWork2: string;
    im_skype_work_3: string;
    imSkypeWork3: string;
    im_twitter: ContactAttrList;
    imTwitter: ContactAttrList;
    im_yahoo: ContactAttrList;
    imYahoo: ContactAttrList;
    im_yahoo_home_1: string;
    imYahooHome1: string;
    im_yahoo_home_2: string;
    imYahooHome2: string;
    im_yahoo_home_3: string;
    imYahooHome3: string;
    im_yahoo_work_1: string;
    imYahooWork1: string;
    im_yahoo_work_2: string;
    imYahooWork2: string;
    im_yahoo_work_3: string;
    imYahooWork3: string;
    isdn_phone: string;
    isdnPhone: string;
    list: boolean;
    list_show_addresses: boolean;
    listShowAddresses: boolean;
    logo: ContactPhoto;
    mailer: string;
    manager: string;
    mobile_phone: string;
    mobilePhone: string;
    name: ContactName;
    name_or_org: string;
    nameOrOrg: string;
    nickname: string;
    note: string;
    office: string;
    org: string;
    org_unit: string;
    orgUnit: string;
    other_fax: string;
    otherFax: string;
    other_phone: string;
    otherPhone: string;
    pager: string;
    pgpCert: ContactCert;
    phone: ContactAttrList;
    photo: ContactPhoto;
    primary_phone: string;
    primaryPhone: string;
    radio: string;
    role: string;
    sip: ContactAttrList;
    spouse: string;
    telex: string;
    title: string;
    tty: string;
    video_url: string;
    videoUrl: string;
    wants_html: boolean;
    wantsHtml: boolean;
    x509Cert: ContactCert;

    // Constructors

    static ['new'](): Contact;

    static new_from_vcard(vcard: string): Contact;

    static new_from_vcard_with_uid(vcard: string, uid: string): Contact;

    // Members

    duplicate(): Contact;

    get(field_id: ContactField): any | null;

    get_attributes(field_id: ContactField): VCardAttribute[];
    get_attributes(...args: never[]): never;

    get_attributes_set(field_ids: ContactField, size: number): VCardAttribute[];

    get_const(field_id: ContactField): any | null;

    inline_local_photos(): boolean;

    set(field_id: ContactField, value?: any | null): void;
    set(...args: never[]): never;

    set_attributes(field_id: ContactField, attributes: VCardAttribute[]): void;

    static field_id(field_name: string): ContactField;

    static field_id_from_vcard(vcard_field: string): ContactField;

    static field_is_string(field_id: ContactField): boolean;

    static field_name(field_id: ContactField): string;

    static field_type(field_id: ContactField): GObject.GType;

    static pretty_name(field_id: ContactField): string;

    static vcard_attribute(field_id: ContactField): string;
}

export namespace SourceBackendSummarySetup {
    export interface ConstructorProperties extends EDataServer.SourceExtension.ConstructorProperties {
        [key: string]: any;

        indexed_fields: string;
        indexedFields: string;
        summary_fields: string;
        summaryFields: string;
    }
}

export class SourceBackendSummarySetup extends EDataServer.SourceExtension {
    static $gtype: GObject.GType<SourceBackendSummarySetup>;

    constructor(properties?: Partial<SourceBackendSummarySetup.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<SourceBackendSummarySetup.ConstructorProperties>, ...args: any[]): void;

    // Properties
    indexed_fields: string;
    indexedFields: string;
    summary_fields: string;
    summaryFields: string;

    // Members

    get_indexed_fields(): [ContactField, BookIndexType, number];

    get_summary_fields(): [ContactField, number];

    set_indexed_fieldsv(fields: ContactField, types: BookIndexType, n_fields: number): void;

    set_summary_fieldsv(fields: ContactField, n_fields: number): void;
}

export namespace VCard {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class VCard extends GObject.Object {
    static $gtype: GObject.GType<VCard>;

    constructor(properties?: Partial<VCard.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VCard.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): VCard;

    static new_from_string(str: string): VCard;

    // Members

    add_attribute(attr: VCardAttribute): void;

    add_attribute_with_value(attr: VCardAttribute, value: string): void;

    append_attribute(attr: VCardAttribute): void;

    append_attribute_with_value(attr: VCardAttribute, value: string): void;

    construct(str: string): void;

    construct_full(str: string, len: number, uid?: string | null): void;

    construct_with_uid(str: string, uid?: string | null): void;

    dump_structure(): void;

    get_attribute(name: string): VCardAttribute | null;

    get_attribute_if_parsed(name: string): VCardAttribute | null;

    get_attributes(): VCardAttribute[];

    is_parsed(): boolean;

    remove_attribute(attr: VCardAttribute): void;

    remove_attributes(attr_group: string | null, attr_name: string): void;

    to_string(format: VCardFormat): string;

    util_dup_x_attribute(x_name: string): string | null;

    util_set_x_attribute(x_name: string, value?: string | null): void;

    static escape_string(s: string): string;

    static unescape_string(s: string): string;
}

export class AddressWestern {
    static $gtype: GObject.GType<AddressWestern>;

    constructor(
        properties?: Partial<{
            po_box?: string;
            extended?: string;
            street?: string;
            locality?: string;
            region?: string;
            postal_code?: string;
            country?: string;
        }>
    );

    constructor(copy: AddressWestern);

    // Fields
    po_box: string;
    extended: string;
    street: string;
    locality: string;
    region: string;
    postal_code: string;
    country: string;

    // Members
    copy(): AddressWestern;

    free(): void;

    static parse(in_address: string): AddressWestern;
}

export class BookChange {
    static $gtype: GObject.GType<BookChange>;

    constructor(copy: BookChange);

    // Fields
    change_type: BookChangeType;
    contact: Contact;
}

export class BookQuery {
    static $gtype: GObject.GType<BookQuery>;

    constructor(copy: BookQuery);

    // Members
    copy(): BookQuery;

    not(unref: boolean): BookQuery;

    ref(): BookQuery;

    to_string(): string;

    unref(): void;

    static and(nqs: number, qs: BookQuery, unref: boolean): BookQuery;

    static any_field_contains(value: string): BookQuery;

    static field_exists(field: ContactField): BookQuery;

    static field_test(field: ContactField, test: BookQueryTest, value: string): BookQuery;

    static from_string(query_string: string): BookQuery;

    static or(nqs: number, qs: BookQuery, unref: boolean): BookQuery;

    static vcard_field_exists(field: string): BookQuery;

    static vcard_field_test(field: string, test: BookQueryTest, value: string): BookQuery;
}

export class ContactAddress {
    static $gtype: GObject.GType<ContactAddress>;

    constructor();
    constructor(
        properties?: Partial<{
            address_format?: string;
            po?: string;
            ext?: string;
            street?: string;
            locality?: string;
            region?: string;
            code?: string;
            country?: string;
        }>
    );

    constructor(copy: ContactAddress);

    // Fields
    address_format: string;
    po: string;
    ext: string;
    street: string;
    locality: string;
    region: string;
    code: string;
    country: string;

    // Constructors
    static ['new'](): ContactAddress;

    // Members
    free(): void;
}

export class ContactCert {
    static $gtype: GObject.GType<ContactCert>;

    constructor();
    constructor(
        properties?: Partial<{
            length?: number;
            data?: string;
        }>
    );

    constructor(copy: ContactCert);

    // Fields
    length: number;
    data: string;

    // Constructors
    static ['new'](): ContactCert;

    // Members
    free(): void;
}

export class ContactDate {
    static $gtype: GObject.GType<ContactDate>;

    constructor();
    constructor(
        properties?: Partial<{
            year?: number;
            month?: number;
            day?: number;
        }>
    );

    constructor(copy: ContactDate);

    // Fields
    year: number;
    month: number;
    day: number;

    // Constructors
    static ['new'](): ContactDate;

    // Members
    equal(dt2: ContactDate): boolean;

    free(): void;

    to_string(): string;

    static from_string(str: string): ContactDate;
}

export class ContactGeo {
    static $gtype: GObject.GType<ContactGeo>;

    constructor();
    constructor(
        properties?: Partial<{
            latitude?: number;
            longitude?: number;
        }>
    );

    constructor(copy: ContactGeo);

    // Fields
    latitude: number;
    longitude: number;

    // Constructors
    static ['new'](): ContactGeo;

    // Members
    free(): void;
}

export class ContactName {
    static $gtype: GObject.GType<ContactName>;

    constructor();
    constructor(
        properties?: Partial<{
            family?: string;
            given?: string;
            additional?: string;
            prefixes?: string;
            suffixes?: string;
        }>
    );

    constructor(copy: ContactName);

    // Fields
    family: string;
    given: string;
    additional: string;
    prefixes: string;
    suffixes: string;

    // Constructors
    static ['new'](): ContactName;

    // Members
    copy(): ContactName;

    free(): void;

    to_string(): string;

    static from_string(name_str: string): ContactName;
}

export class ContactPhoto {
    static $gtype: GObject.GType<ContactPhoto>;

    constructor();
    constructor(copy: ContactPhoto);

    // Fields
    type: ContactPhotoType;

    // Constructors
    static ['new'](): ContactPhoto;

    // Members
    copy(): ContactPhoto;

    free(): void;

    get_inlined(): Uint8Array | null;

    get_mime_type(): string | null;

    get_uri(): string | null;

    set_inlined(data: Uint8Array | string): void;

    set_mime_type(mime_type: string): void;

    set_uri(uri: string): void;
}

export class ContactPrivate {
    static $gtype: GObject.GType<ContactPrivate>;

    constructor(copy: ContactPrivate);
}

export class NameWestern {
    static $gtype: GObject.GType<NameWestern>;

    constructor(
        properties?: Partial<{
            prefix?: string;
            first?: string;
            middle?: string;
            nick?: string;
            last?: string;
            suffix?: string;
            full?: string;
        }>
    );

    constructor(copy: NameWestern);

    // Fields
    prefix: string;
    first: string;
    middle: string;
    nick: string;
    last: string;
    suffix: string;
    full: string;

    // Members
    copy(): NameWestern;

    free(): void;

    static parse(full_name: string): NameWestern;
}

export class PhoneNumber {
    static $gtype: GObject.GType<PhoneNumber>;

    constructor(copy: PhoneNumber);

    // Members
    compare(second_number: PhoneNumber): PhoneNumberMatch;

    copy(): PhoneNumber;

    free(): void;

    get_country_code(source: PhoneNumberCountrySource): number;

    get_national_number(): string;

    to_string(format: PhoneNumberFormat): string;

    static compare_strings(first_number: string, second_number: string): PhoneNumberMatch;

    static compare_strings_with_region(
        first_number: string,
        second_number: string,
        region_code?: string | null
    ): PhoneNumberMatch;

    static error_quark(): GLib.Quark;

    static from_string(phone_number: string, region_code?: string | null): PhoneNumber;

    static get_country_code_for_region(region_code?: string | null): number;

    static get_default_region(): string;

    static is_supported(): boolean;
}

export class SourceBackendSummarySetupPrivate {
    static $gtype: GObject.GType<SourceBackendSummarySetupPrivate>;

    constructor(copy: SourceBackendSummarySetupPrivate);
}

export class VCardAttribute {
    static $gtype: GObject.GType<VCardAttribute>;

    constructor(attr_group: string | null, attr_name: string);
    constructor(copy: VCardAttribute);

    // Constructors
    static ['new'](attr_group: string | null, attr_name: string): VCardAttribute;

    // Members
    add_param(param: VCardAttributeParam): void;

    add_param_with_value(param: VCardAttributeParam, value: string): void;

    add_value(value: string): void;

    add_value_decoded(value: string, len: number): void;

    copy(): VCardAttribute;

    free(): void;

    get_group(): string | null;

    get_name(): string;

    get_param(name: string): string[] | null;

    get_params(): VCardAttributeParam[];

    get_value(): string | null;

    get_value_decoded(): GLib.String | null;

    get_values(): string[];

    get_values_decoded(): GLib.String[];

    has_type(typestr: string): boolean;

    is_single_valued(): boolean;

    remove_param(param_name: string): void;

    remove_param_value(param_name: string, s: string): void;

    remove_params(): void;

    remove_value(s: string): void;

    remove_values(): void;
}

export class VCardAttributeParam {
    static $gtype: GObject.GType<VCardAttributeParam>;

    constructor(name: string);
    constructor(copy: VCardAttributeParam);

    // Constructors
    static ['new'](name: string): VCardAttributeParam;

    // Members
    add_value(value: string): void;

    copy(): VCardAttributeParam;

    free(): void;

    get_name(): string;

    get_values(): string[];

    remove_values(): void;
}

export class VCardPrivate {
    static $gtype: GObject.GType<VCardPrivate>;

    constructor(copy: VCardPrivate);
}
