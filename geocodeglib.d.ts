/**
 * GeocodeGlib 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gio from './gio';
import * as Json from './json';
import * as Soup from './soup';
import * as GLib from './glib';

export const LOCATION_ACCURACY_CITY: number;
export const LOCATION_ACCURACY_CONTINENT: number;
export const LOCATION_ACCURACY_COUNTRY: number;
export const LOCATION_ACCURACY_REGION: number;
export const LOCATION_ACCURACY_STREET: number;
export const LOCATION_ACCURACY_UNKNOWN: number;

export function error_quark(): GLib.Quark;

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static PARSE: number;
    static NOT_SUPPORTED: number;
    static NO_MATCHES: number;
    static INVALID_ARGUMENTS: number;
    static INTERNAL_SERVER: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace LocationCRS {
    export const $gtype: GObject.GType<LocationCRS>;
}

export enum LocationCRS {
    WGS84 = 0,
}

export namespace LocationURIScheme {
    export const $gtype: GObject.GType<LocationURIScheme>;
}

export enum LocationURIScheme {
    GEO = 0,
}

export namespace PlaceOsmType {
    export const $gtype: GObject.GType<PlaceOsmType>;
}

export enum PlaceOsmType {
    UNKNOWN = 0,
    NODE = 1,
    RELATION = 2,
    WAY = 3,
}

export namespace PlaceType {
    export const $gtype: GObject.GType<PlaceType>;
}

export enum PlaceType {
    UNKNOWN = 0,
    BUILDING = 1,
    STREET = 2,
    TOWN = 3,
    STATE = 4,
    COUNTY = 5,
    LOCAL_ADMINISTRATIVE_AREA = 6,
    POSTAL_CODE = 7,
    COUNTRY = 8,
    ISLAND = 9,
    AIRPORT = 10,
    RAILWAY_STATION = 11,
    BUS_STOP = 12,
    MOTORWAY = 13,
    DRAINAGE = 14,
    LAND_FEATURE = 15,
    MISCELLANEOUS = 16,
    SUPERNAME = 17,
    POINT_OF_INTEREST = 18,
    SUBURB = 19,
    COLLOQUIAL = 20,
    ZONE = 21,
    HISTORICAL_STATE = 22,
    HISTORICAL_COUNTY = 23,
    CONTINENT = 24,
    TIME_ZONE = 25,
    ESTATE = 26,
    HISTORICAL_TOWN = 27,
    OCEAN = 28,
    SEA = 29,
    SCHOOL = 30,
    PLACE_OF_WORSHIP = 31,
    RESTAURANT = 32,
    BAR = 33,
    LIGHT_RAIL_STATION = 34,
}

export namespace BoundingBox {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        bottom: number;
        left: number;
        right: number;
        top: number;
    }
}

export class BoundingBox extends GObject.Object {
    static $gtype: GObject.GType<BoundingBox>;

    constructor(properties?: Partial<BoundingBox.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<BoundingBox.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bottom: number;
    left: number;
    right: number;
    top: number;

    // Constructors

    static ['new'](top: number, bottom: number, left: number, right: number): BoundingBox;

    // Members

    equal(b: BoundingBox): boolean;

    get_bottom(): number;

    get_left(): number;

    get_right(): number;

    get_top(): number;
}

export namespace Forward {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        answer_count: number;
        answerCount: number;
        bounded: boolean;
        search_area: BoundingBox;
        searchArea: BoundingBox;
    }
}

export class Forward extends GObject.Object {
    static $gtype: GObject.GType<Forward>;

    constructor(properties?: Partial<Forward.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Forward.ConstructorProperties>, ...args: any[]): void;

    // Properties
    answer_count: number;
    answerCount: number;
    bounded: boolean;
    search_area: BoundingBox;
    searchArea: BoundingBox;

    // Constructors

    static new_for_params(params: GLib.HashTable<string, GObject.Value>): Forward;

    static new_for_string(str: string): Forward;

    // Members

    get_answer_count(): number;

    get_bounded(): boolean;

    get_search_area(): BoundingBox | null;

    search(): Place[];

    search_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    search_finish(res: Gio.AsyncResult): Place[];

    set_answer_count(count: number): void;

    set_backend(backend?: Backend | null): void;

    set_bounded(bounded: boolean): void;

    set_search_area(box: BoundingBox): void;
}

export namespace Location {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        accuracy: number;
        altitude: number;
        crs: LocationCRS;
        description: string;
        latitude: number;
        longitude: number;
        timestamp: number;
    }
}

export class Location extends GObject.Object {
    static $gtype: GObject.GType<Location>;

    constructor(properties?: Partial<Location.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Location.ConstructorProperties>, ...args: any[]): void;

    // Properties
    accuracy: number;
    altitude: number;
    crs: LocationCRS;
    description: string;
    latitude: number;
    longitude: number;
    timestamp: number;

    // Constructors

    static ['new'](latitude: number, longitude: number, accuracy: number): Location;

    static new_with_description(latitude: number, longitude: number, accuracy: number, description: string): Location;

    // Members

    equal(b: Location): boolean;

    get_accuracy(): number;

    get_altitude(): number;

    get_crs(): LocationCRS;

    get_description(): string;

    get_distance_from(locb: Location): number;

    get_latitude(): number;

    get_longitude(): number;

    get_timestamp(): number;

    set_description(description: string): void;

    set_from_uri(uri: string): boolean;

    to_uri(scheme: LocationURIScheme): string;
}

export namespace MockBackend {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class MockBackend extends GObject.Object implements Backend {
    static $gtype: GObject.GType<MockBackend>;

    constructor(properties?: Partial<MockBackend.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<MockBackend.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): MockBackend;

    // Members

    add_forward_result(
        params: GLib.HashTable<string, GObject.Value>,
        results?: Place[] | null,
        error?: GLib.Error | null
    ): void;

    add_reverse_result(
        params: GLib.HashTable<string, GObject.Value>,
        results?: Place[] | null,
        error?: GLib.Error | null
    ): void;

    clear(): void;

    get_query_log(): MockBackendQuery[];

    // Implemented Members

    forward_search(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];

    forward_search_async(
        params: GLib.HashTable<string, GObject.Value>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    forward_search_finish(result: Gio.AsyncResult): Place[];

    reverse_resolve(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];

    reverse_resolve_async(
        params: GLib.HashTable<string, GObject.Value>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reverse_resolve_finish(result: Gio.AsyncResult): Place[];

    vfunc_forward_search(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];

    vfunc_forward_search_async(
        params: GLib.HashTable<string, GObject.Value>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_forward_search_finish(result: Gio.AsyncResult): Place[];

    vfunc_reverse_resolve(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];

    vfunc_reverse_resolve_async(
        params: GLib.HashTable<string, GObject.Value>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[];
}

export namespace Nominatim {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        base_url: string;
        baseUrl: string;
        maintainer_email_address: string;
        maintainerEmailAddress: string;
        user_agent: string;
        userAgent: string;
    }
}

export class Nominatim extends GObject.Object implements Backend {
    static $gtype: GObject.GType<Nominatim>;

    constructor(properties?: Partial<Nominatim.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Nominatim.ConstructorProperties>, ...args: any[]): void;

    // Properties
    base_url: string;
    baseUrl: string;
    maintainer_email_address: string;
    maintainerEmailAddress: string;
    user_agent: string;
    userAgent: string;

    // Constructors

    static ['new'](base_url: string, maintainer_email_address: string): Nominatim;

    // Members

    vfunc_query(uri: string, cancellable?: Gio.Cancellable | null): string;

    vfunc_query_async(
        uri: string,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_query_finish(res: Gio.AsyncResult): string;

    static get_gnome(): Nominatim;

    // Implemented Members

    forward_search(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];

    forward_search_async(
        params: GLib.HashTable<string, GObject.Value>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    forward_search_finish(result: Gio.AsyncResult): Place[];

    reverse_resolve(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];

    reverse_resolve_async(
        params: GLib.HashTable<string, GObject.Value>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reverse_resolve_finish(result: Gio.AsyncResult): Place[];

    vfunc_forward_search(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];

    vfunc_forward_search_async(
        params: GLib.HashTable<string, GObject.Value>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_forward_search_finish(result: Gio.AsyncResult): Place[];

    vfunc_reverse_resolve(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];

    vfunc_reverse_resolve_async(
        params: GLib.HashTable<string, GObject.Value>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[];
}

export namespace Place {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        administrative_area: string;
        administrativeArea: string;
        area: string;
        bounding_box: BoundingBox;
        boundingBox: BoundingBox;
        building: string;
        continent: string;
        country: string;
        country_code: string;
        countryCode: string;
        county: string;
        icon: Gio.Icon;
        location: Location;
        name: string;
        osm_id: string;
        osmId: string;
        osm_type: PlaceOsmType;
        osmType: PlaceOsmType;
        place_type: PlaceType;
        placeType: PlaceType;
        postal_code: string;
        postalCode: string;
        state: string;
        street: string;
        street_address: string;
        streetAddress: string;
        town: string;
    }
}

export class Place extends GObject.Object {
    static $gtype: GObject.GType<Place>;

    constructor(properties?: Partial<Place.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Place.ConstructorProperties>, ...args: any[]): void;

    // Properties
    administrative_area: string;
    administrativeArea: string;
    area: string;
    bounding_box: BoundingBox;
    boundingBox: BoundingBox;
    building: string;
    continent: string;
    country: string;
    country_code: string;
    countryCode: string;
    county: string;
    icon: Gio.Icon;
    location: Location;
    name: string;
    osm_id: string;
    osmId: string;
    osm_type: PlaceOsmType;
    osmType: PlaceOsmType;
    place_type: PlaceType;
    placeType: PlaceType;
    postal_code: string;
    postalCode: string;
    state: string;
    street: string;
    street_address: string;
    streetAddress: string;
    town: string;

    // Constructors

    static ['new'](name: string, place_type: PlaceType): Place;

    static new_with_location(name: string, place_type: PlaceType, location: Location): Place;

    // Members

    equal(b: Place): boolean;

    get_administrative_area(): string;

    get_area(): string;

    get_bounding_box(): BoundingBox;

    get_building(): string;

    get_continent(): string;

    get_country(): string;

    get_country_code(): string;

    get_county(): string;

    get_icon(): Gio.Icon;

    get_location(): Location;

    get_name(): string;

    get_osm_id(): string;

    get_osm_type(): PlaceOsmType;

    get_place_type(): PlaceType;

    get_postal_code(): string;

    get_state(): string;

    get_street(): string;

    get_street_address(): string;

    get_town(): string;

    set_administrative_area(admin_area: string): void;

    set_area(area: string): void;

    set_bounding_box(bbox: BoundingBox): void;

    set_building(building: string): void;

    set_continent(continent: string): void;

    set_country(country: string): void;

    set_country_code(country_code: string): void;

    set_county(county: string): void;

    set_location(location: Location): void;

    set_name(name: string): void;

    set_postal_code(postal_code: string): void;

    set_state(state: string): void;

    set_street(street: string): void;

    set_street_address(street_address: string): void;

    set_town(town: string): void;
}

export namespace Reverse {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class Reverse extends GObject.Object {
    static $gtype: GObject.GType<Reverse>;

    constructor(properties?: Partial<Reverse.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Reverse.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_for_location(location: Location): Reverse;

    // Members

    resolve(): Place;

    resolve_async(cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    resolve_finish(res: Gio.AsyncResult): Place;

    set_backend(backend?: Backend | null): void;
}

export class BoundingBoxPrivate {
    static $gtype: GObject.GType<BoundingBoxPrivate>;

    constructor(copy: BoundingBoxPrivate);
}

export class ForwardPrivate {
    static $gtype: GObject.GType<ForwardPrivate>;

    constructor(copy: ForwardPrivate);
}

export class LocationPrivate {
    static $gtype: GObject.GType<LocationPrivate>;

    constructor(copy: LocationPrivate);
}

export class MockBackendQuery {
    static $gtype: GObject.GType<MockBackendQuery>;

    constructor(copy: MockBackendQuery);

    // Fields
    params: GLib.HashTable<any, any>;
    is_forward: boolean;
    results: Place[];
    error: GLib.Error;
}

export class PlacePrivate {
    static $gtype: GObject.GType<PlacePrivate>;

    constructor(copy: PlacePrivate);
}

export class ReversePrivate {
    static $gtype: GObject.GType<ReversePrivate>;

    constructor(copy: ReversePrivate);
}

export interface BackendNamespace {
    $gtype: GObject.GType<Backend>;
    prototype: BackendPrototype;
}

export type Backend = BackendPrototype;

export interface BackendPrototype extends GObject.Object {
    // Members

    forward_search(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];

    forward_search_async(
        params: GLib.HashTable<string, GObject.Value>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    forward_search_finish(result: Gio.AsyncResult): Place[];

    reverse_resolve(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];

    reverse_resolve_async(
        params: GLib.HashTable<string, GObject.Value>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reverse_resolve_finish(result: Gio.AsyncResult): Place[];

    vfunc_forward_search(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];

    vfunc_forward_search_async(
        params: GLib.HashTable<string, GObject.Value>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_forward_search_finish(result: Gio.AsyncResult): Place[];

    vfunc_reverse_resolve(params: GLib.HashTable<string, GObject.Value>, cancellable?: Gio.Cancellable | null): Place[];

    vfunc_reverse_resolve_async(
        params: GLib.HashTable<string, GObject.Value>,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_reverse_resolve_finish(result: Gio.AsyncResult): Place[];
}

export const Backend: BackendNamespace;
