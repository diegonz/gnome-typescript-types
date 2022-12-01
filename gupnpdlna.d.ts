/**
 * GUPnPDLNA 2.0
 *
 * Generated from 2.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as GLib from './glib';

export namespace ValueState {
    export const $gtype: GObject.GType<ValueState>;
}

export enum ValueState {
    SET = 0,
    UNSET = 1,
    UNSUPPORTED = 2,
}

export namespace AudioInformation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class AudioInformation extends GObject.Object {
    static $gtype: GObject.GType<AudioInformation>;

    constructor(properties?: Partial<AudioInformation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<AudioInformation.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: AudioInformationPrivate;
}

export namespace ContainerInformation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class ContainerInformation extends GObject.Object {
    static $gtype: GObject.GType<ContainerInformation>;

    constructor(properties?: Partial<ContainerInformation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ContainerInformation.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ContainerInformationPrivate;
}

export namespace ImageInformation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class ImageInformation extends GObject.Object {
    static $gtype: GObject.GType<ImageInformation>;

    constructor(properties?: Partial<ImageInformation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ImageInformation.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: ImageInformationPrivate;
}

export namespace Information {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        audio_information: AudioInformation;
        audioInformation: AudioInformation;
        container_information: ContainerInformation;
        containerInformation: ContainerInformation;
        image_information: ImageInformation;
        imageInformation: ImageInformation;
        uri: string;
        video_information: VideoInformation;
        videoInformation: VideoInformation;
    }
}

export abstract class Information extends GObject.Object {
    static $gtype: GObject.GType<Information>;

    constructor(properties?: Partial<Information.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Information.ConstructorProperties>, ...args: any[]): void;

    // Properties
    audio_information: AudioInformation;
    audioInformation: AudioInformation;
    container_information: ContainerInformation;
    containerInformation: ContainerInformation;
    image_information: ImageInformation;
    imageInformation: ImageInformation;
    uri: string;
    video_information: VideoInformation;
    videoInformation: VideoInformation;

    // Fields
    priv: InformationPrivate;

    // Members

    get_audio_information(): AudioInformation;

    get_container_information(): ContainerInformation;

    get_image_information(): ImageInformation;

    get_profile_name(): string;

    get_uri(): string;

    get_video_information(): VideoInformation;

    vfunc_get_audio_information(): AudioInformation;

    vfunc_get_container_information(): ContainerInformation;

    vfunc_get_image_information(): ImageInformation;

    vfunc_get_profile_name(): string;

    vfunc_get_video_information(): VideoInformation;
}

export namespace Profile {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        audio_restrictions: any;
        audioRestrictions: any;
        container_restrictions: any;
        containerRestrictions: any;
        extended: boolean;
        image_restrictions: any;
        imageRestrictions: any;
        mime: string;
        name: string;
        video_restrictions: any;
        videoRestrictions: any;
    }
}

export class Profile extends GObject.Object {
    static $gtype: GObject.GType<Profile>;

    constructor(properties?: Partial<Profile.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Profile.ConstructorProperties>, ...args: any[]): void;

    // Properties
    audio_restrictions: any;
    audioRestrictions: any;
    container_restrictions: any;
    containerRestrictions: any;
    extended: boolean;
    image_restrictions: any;
    imageRestrictions: any;
    mime: string;
    name: string;
    video_restrictions: any;
    videoRestrictions: any;

    // Fields
    priv: ProfilePrivate;

    // Members

    get_audio_restrictions(): Restriction[];

    get_container_restrictions(): Restriction[];

    get_extended(): boolean;

    get_image_restrictions(): Restriction[];

    get_mime(): string;

    get_name(): string;

    get_video_restrictions(): Restriction[];
}

export namespace ProfileGuesser {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        extended_mode: boolean;
        extendedMode: boolean;
        relaxed_mode: boolean;
        relaxedMode: boolean;
    }
}

export class ProfileGuesser extends GObject.Object {
    static $gtype: GObject.GType<ProfileGuesser>;

    constructor(properties?: Partial<ProfileGuesser.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ProfileGuesser.ConstructorProperties>, ...args: any[]): void;

    // Properties
    extended_mode: boolean;
    extendedMode: boolean;
    relaxed_mode: boolean;
    relaxedMode: boolean;

    // Fields
    priv: ProfileGuesserPrivate;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'done',
        callback: (_source: this, info: Information, dlna: Profile | null, error: GLib.Error | null) => void
    ): number;

    connect_after(
        signal: 'done',
        callback: (_source: this, info: Information, dlna: Profile | null, error: GLib.Error | null) => void
    ): number;

    emit(signal: 'done', info: Information, dlna: Profile | null, error: GLib.Error | null): void;

    // Constructors

    static ['new'](relaxed_mode: boolean, extended_mode: boolean): ProfileGuesser;

    // Members

    get_extended_mode(): boolean;

    get_profile(name: string): Profile;

    get_relaxed_mode(): boolean;

    guess_profile_async(uri: string, timeout_in_ms: number): boolean;

    guess_profile_from_info(info: Information): Profile;

    guess_profile_sync(uri: string, timeout_in_ms: number): [Profile, Information | null];

    list_profiles(): Profile[];

    static cleanup(): void;
}

export namespace VideoInformation {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class VideoInformation extends GObject.Object {
    static $gtype: GObject.GType<VideoInformation>;

    constructor(properties?: Partial<VideoInformation.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<VideoInformation.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: VideoInformationPrivate;
}

export class AudioInformationPrivate {
    static $gtype: GObject.GType<AudioInformationPrivate>;

    constructor(copy: AudioInformationPrivate);
}

export class BoolValue {
    static $gtype: GObject.GType<BoolValue>;

    constructor(copy: BoolValue);

    // Fields
    value: boolean;
    state: ValueState;
}

export class ContainerInformationPrivate {
    static $gtype: GObject.GType<ContainerInformationPrivate>;

    constructor(copy: ContainerInformationPrivate);
}

export class Fraction {
    static $gtype: GObject.GType<Fraction>;

    constructor(copy: Fraction);

    // Members
    copy(): Fraction;

    free(): void;

    get_denominator(): number;

    get_numerator(): number;
}

export class FractionRange {
    static $gtype: GObject.GType<FractionRange>;

    constructor(copy: FractionRange);

    // Members
    copy(): FractionRange;

    free(): void;

    get_max(): Fraction;

    get_min(): Fraction;
}

export class FractionValue {
    static $gtype: GObject.GType<FractionValue>;

    constructor(copy: FractionValue);

    // Fields
    numerator: number;
    denominator: number;
    state: ValueState;
}

export class ImageInformationPrivate {
    static $gtype: GObject.GType<ImageInformationPrivate>;

    constructor(copy: ImageInformationPrivate);
}

export class InformationPrivate {
    static $gtype: GObject.GType<InformationPrivate>;

    constructor(copy: InformationPrivate);
}

export class IntRange {
    static $gtype: GObject.GType<IntRange>;

    constructor(copy: IntRange);

    // Members
    copy(): IntRange;

    free(): void;

    get_max(): number;

    get_min(): number;
}

export class IntValue {
    static $gtype: GObject.GType<IntValue>;

    constructor(copy: IntValue);

    // Fields
    value: number;
    state: ValueState;
}

export class ProfileGuesserPrivate {
    static $gtype: GObject.GType<ProfileGuesserPrivate>;

    constructor(copy: ProfileGuesserPrivate);
}

export class ProfilePrivate {
    static $gtype: GObject.GType<ProfilePrivate>;

    constructor(copy: ProfilePrivate);
}

export class Restriction {
    static $gtype: GObject.GType<Restriction>;

    constructor(copy: Restriction);

    // Members
    copy(): Restriction;

    free(): void;

    get_entries(): GLib.HashTable<string, ValueList>;

    get_mime(): string;

    is_empty(): boolean;

    to_string(): string;
}

export class StringValue {
    static $gtype: GObject.GType<StringValue>;

    constructor(copy: StringValue);

    // Fields
    value: string;
    state: ValueState;
}

export class ValueList {
    static $gtype: GObject.GType<ValueList>;

    constructor(copy: ValueList);

    // Members
    copy(): ValueList;

    free(): void;

    get_g_values(): GObject.Value[];

    is_empty(): boolean;

    to_string(): string;
}

export class VideoInformationPrivate {
    static $gtype: GObject.GType<VideoInformationPrivate>;

    constructor(copy: VideoInformationPrivate);
}
