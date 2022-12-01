/**
 * Farstream 0.2
 *
 * Generated from 0.2
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GObject from './gobject';
import * as Gst from './gst';
import * as GLib from './glib';

export const CODEC_FORMAT: string;
export const CODEC_ID_ANY: number;
export const CODEC_ID_DISABLE: number;
export const RTP_HEADER_EXTENSION_FORMAT: string;

export function candidate_list_copy(candidate_list: Codec[]): Codec[];

export function codec_list_are_equal(list1?: Codec[] | null, list2?: Codec[] | null): boolean;

export function codec_list_copy(codec_list: Codec[]): Codec[];

export function codec_list_from_keyfile(filename: string): Codec[];

export function error_quark(): GLib.Quark;

export function media_type_to_string(media_type: MediaType): string;

export function parse_error(object: GObject.Object, message: Gst.Message): [boolean, Error, string];

export function rtp_header_extension_list_copy(extensions: RtpHeaderExtension[]): RtpHeaderExtension[];

export function rtp_header_extension_list_from_keyfile(filename: string, media_type: MediaType): RtpHeaderExtension[];

export function utils_get_default_codec_preferences(element: Gst.Element): Codec[];

export function utils_get_default_rtp_header_extension_preferences(
    element: Gst.Element,
    media_type: MediaType
): Codec[];

export function utils_set_bitrate(element: Gst.Element, bitrate: number): void;

export function value_set_candidate_list(value: any, candidates?: Candidate[] | null): void;

export type CandidateList = object | null;
export type CodecGList = object | null;
export type RtpHeaderExtensionGList = object | null;

export namespace CandidateType {
    export const $gtype: GObject.GType<CandidateType>;
}

export enum CandidateType {
    HOST = 0,
    SRFLX = 1,
    PRFLX = 2,
    RELAY = 3,
    MULTICAST = 4,
}

export namespace ComponentType {
    export const $gtype: GObject.GType<ComponentType>;
}

export enum ComponentType {
    NONE = 0,
    RTP = 1,
    RTCP = 2,
}

export class DTMFEvent {
    static $gtype: GObject.GType<DTMFEvent>;

    constructor(copy: DTMFEvent);

    // Properties
    static '0': number;
    static '1': number;
    static '2': number;
    static '3': number;
    static '4': number;
    static '5': number;
    static '6': number;
    static '7': number;
    static '8': number;
    static '9': number;
    static STAR: number;
    static POUND: number;
    static A: number;
    static B: number;
    static C: number;
    static D: number;
}

export namespace DTMFMethod {
    export const $gtype: GObject.GType<DTMFMethod>;
}

export enum DTMFMethod {
    RTP_RFC4733 = 1,
    SOUND = 2,
}

export class Error extends GLib.Error {
    static $gtype: GObject.GType<Error>;

    constructor(options: { message: string; code: number });
    constructor(copy: Error);

    // Properties
    static CONSTRUCTION: number;
    static INTERNAL: number;
    static INVALID_ARGUMENTS: number;
    static NETWORK: number;
    static NOT_IMPLEMENTED: number;
    static NEGOTIATION_FAILED: number;
    static UNKNOWN_CODEC: number;
    static NO_CODECS: number;
    static NO_CODECS_LEFT: number;
    static CONNECTION_FAILED: number;
    static DISPOSED: number;
    static ALREADY_EXISTS: number;

    // Members
    static quark(): GLib.Quark;
}

export namespace MediaType {
    export const $gtype: GObject.GType<MediaType>;
}

export enum MediaType {
    AUDIO = 0,
    VIDEO = 1,
    APPLICATION = 2,
    LAST = 2,
}

export namespace NetworkProtocol {
    export const $gtype: GObject.GType<NetworkProtocol>;
}

export enum NetworkProtocol {
    UDP = 0,
    TCP = 1,
    TCP_PASSIVE = 1,
    TCP_ACTIVE = 2,
    TCP_SO = 3,
}

export namespace StreamState {
    export const $gtype: GObject.GType<StreamState>;
}

export enum StreamState {
    FAILED = 0,
    DISCONNECTED = 1,
    GATHERING = 2,
    CONNECTING = 3,
    CONNECTED = 4,
    READY = 5,
}

export namespace StreamDirection {
    export const $gtype: GObject.GType<StreamDirection>;
}

export enum StreamDirection {
    NONE = 0,
    SEND = 1,
    RECV = 2,
    BOTH = 3,
}

export namespace Conference {
    export interface ConstructorProperties extends Gst.Bin.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Conference extends Gst.Bin implements Gst.ChildProxy {
    static $gtype: GObject.GType<Conference>;

    constructor(properties?: Partial<Conference.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Conference.ConstructorProperties>, ...args: any[]): void;

    // Members

    new_participant(): Participant;

    new_session(media_type: MediaType): Session;

    vfunc_new_participant(): Participant;

    vfunc_new_session(media_type: MediaType): Session;

    // Implemented Members

    child_added(child: GObject.Object, name: string): void;

    child_removed(child: GObject.Object, name: string): void;

    get_child_by_index<T = GObject.Object>(index: number): T;

    get_child_by_name<T = GObject.Object>(name: string): T;

    get_children_count(): number;

    get_property(name: string): unknown;
    get_property(...args: never[]): never;

    lookup(name: string): [boolean, GObject.Object | null, GObject.ParamSpec | null];

    set_property(name: string, value: any): void;
    set_property(...args: never[]): never;

    vfunc_child_added(child: GObject.Object, name: string): void;

    vfunc_child_removed(child: GObject.Object, name: string): void;

    vfunc_get_child_by_index<T = GObject.Object>(index: number): T;

    vfunc_get_child_by_name<T = GObject.Object>(name: string): T;

    vfunc_get_children_count(): number;
}

export namespace ElementAddedNotifier {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class ElementAddedNotifier extends GObject.Object {
    static $gtype: GObject.GType<ElementAddedNotifier>;

    constructor(properties?: Partial<ElementAddedNotifier.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ElementAddedNotifier.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'element-added', callback: (_source: this, bin: Gst.Bin, element: Gst.Element) => void): number;

    connect_after(
        signal: 'element-added',
        callback: (_source: this, bin: Gst.Bin, element: Gst.Element) => void
    ): number;

    emit(signal: 'element-added', bin: Gst.Bin, element: Gst.Element): void;

    // Constructors

    static ['new'](): ElementAddedNotifier;

    // Members

    add(bin: Gst.Bin): void;

    remove(bin: Gst.Bin): boolean;

    set_default_properties(element: Gst.Element): number;

    set_properties_from_file(filename: string): boolean;

    set_properties_from_keyfile(keyfile: GLib.KeyFile): number;
}

export namespace Participant {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export abstract class Participant extends GObject.Object {
    static $gtype: GObject.GType<Participant>;

    constructor(properties?: Partial<Participant.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Participant.ConstructorProperties>, ...args: any[]): void;
}

export namespace Plugin {
    export interface ConstructorProperties extends GObject.TypeModule.ConstructorProperties {
        [key: string]: any;
    }
}

export class Plugin extends GObject.TypeModule implements GObject.TypePlugin {
    static $gtype: GObject.GType<Plugin>;

    constructor(properties?: Partial<Plugin.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Plugin.ConstructorProperties>, ...args: any[]): void;

    // Members

    static list_available(type_suffix: string): string[];

    static register_static(name: string, type_suffix: string, type: GObject.GType): void;

    // Implemented Members

    complete_interface_info(
        instance_type: GObject.GType,
        interface_type: GObject.GType,
        info: GObject.InterfaceInfo
    ): void;

    complete_type_info(g_type: GObject.GType, info: GObject.TypeInfo, value_table: GObject.TypeValueTable): void;

    unuse(): void;

    use(): void;
    use(...args: never[]): never;
}

export namespace Session {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        allowed_sink_caps: Gst.Caps;
        allowedSinkCaps: Gst.Caps;
        allowed_src_caps: Gst.Caps;
        allowedSrcCaps: Gst.Caps;
        codec_preferences: Codec[];
        codecPreferences: Codec[];
        codecs: Codec[];
        codecs_without_config: Codec[];
        codecsWithoutConfig: Codec[];
        conference: Conference;
        current_send_codec: Codec;
        currentSendCodec: Codec;
        encryption_parameters: Gst.Structure;
        encryptionParameters: Gst.Structure;
        id: number;
        media_type: MediaType;
        mediaType: MediaType;
        sink_pad: Gst.Pad;
        sinkPad: Gst.Pad;
        tos: number;
    }
}

export abstract class Session extends GObject.Object {
    static $gtype: GObject.GType<Session>;

    constructor(properties?: Partial<Session.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Session.ConstructorProperties>, ...args: any[]): void;

    // Properties
    allowed_sink_caps: Gst.Caps;
    allowedSinkCaps: Gst.Caps;
    allowed_src_caps: Gst.Caps;
    allowedSrcCaps: Gst.Caps;
    codec_preferences: Codec[];
    codecPreferences: Codec[];
    codecs: Codec[];
    codecs_without_config: Codec[];
    codecsWithoutConfig: Codec[];
    conference: Conference;
    current_send_codec: Codec;
    currentSendCodec: Codec;
    encryption_parameters: Gst.Structure;
    encryptionParameters: Gst.Structure;
    id: number;
    media_type: MediaType;
    mediaType: MediaType;
    sink_pad: Gst.Pad;
    sinkPad: Gst.Pad;
    tos: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'error',
        callback: (_source: this, object: GObject.Object, error_no: Error, error_msg: string) => void
    ): number;

    connect_after(
        signal: 'error',
        callback: (_source: this, object: GObject.Object, error_no: Error, error_msg: string) => void
    ): number;

    emit(signal: 'error', object: GObject.Object, error_no: Error, error_msg: string): void;

    // Members

    codecs_need_resend(old_codecs?: Codec[] | null, new_codecs?: Codec[] | null): Codec[];

    destroy(): void;

    emit_error(error_no: number, error_msg: string): void;

    get_stream_transmitter_type(transmitter: string): GObject.GType;

    list_transmitters(): string[];

    new_stream(participant: Participant, direction: StreamDirection): Stream;

    parse_codecs_changed(message: Gst.Message): boolean;

    parse_send_codec_changed(message: Gst.Message): [boolean, Codec, Codec[]];

    parse_telephony_event_started(message: Gst.Message): [boolean, DTMFMethod, DTMFEvent, number];

    parse_telephony_event_stopped(message: Gst.Message): [boolean, DTMFMethod];

    set_allowed_caps(sink_caps?: Gst.Caps | null, src_caps?: Gst.Caps | null): boolean;

    set_codec_preferences(codec_preferences?: Codec[] | null): boolean;

    set_encryption_parameters(parameters?: Gst.Structure | null): boolean;

    set_send_codec(send_codec: Codec): boolean;

    start_telephony_event(event: number, volume: number): boolean;

    stop_telephony_event(): boolean;

    vfunc_codecs_need_resend(old_codecs?: Codec[] | null, new_codecs?: Codec[] | null): Codec[];

    vfunc_get_stream_transmitter_type(transmitter: string): GObject.GType;

    vfunc_list_transmitters(): string[];

    vfunc_new_stream(participant: Participant, direction: StreamDirection): Stream;

    vfunc_set_allowed_caps(sink_caps?: Gst.Caps | null, src_caps?: Gst.Caps | null): boolean;

    vfunc_set_codec_preferences(codec_preferences?: Codec[] | null): boolean;

    vfunc_set_encryption_parameters(parameters?: Gst.Structure | null): boolean;

    vfunc_set_send_codec(send_codec: Codec): boolean;

    vfunc_start_telephony_event(event: number, volume: number): boolean;

    vfunc_stop_telephony_event(): boolean;
}

export namespace Stream {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        current_recv_codecs: Codec[];
        currentRecvCodecs: Codec[];
        decryption_parameters: Gst.Structure;
        decryptionParameters: Gst.Structure;
        direction: StreamDirection;
        negotiated_codecs: Codec[];
        negotiatedCodecs: Codec[];
        participant: Participant;
        remote_codecs: Codec[];
        remoteCodecs: Codec[];
        require_encryption: boolean;
        requireEncryption: boolean;
        session: Session;
    }
}

export abstract class Stream extends GObject.Object {
    static $gtype: GObject.GType<Stream>;

    constructor(properties?: Partial<Stream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Stream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    current_recv_codecs: Codec[];
    currentRecvCodecs: Codec[];
    decryption_parameters: Gst.Structure;
    decryptionParameters: Gst.Structure;
    direction: StreamDirection;
    negotiated_codecs: Codec[];
    negotiatedCodecs: Codec[];
    participant: Participant;
    remote_codecs: Codec[];
    remoteCodecs: Codec[];
    require_encryption: boolean;
    requireEncryption: boolean;
    session: Session;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'error', callback: (_source: this, errorno: Error, error_msg: string) => void): number;

    connect_after(signal: 'error', callback: (_source: this, errorno: Error, error_msg: string) => void): number;

    emit(signal: 'error', errorno: Error, error_msg: string): void;

    connect(signal: 'src-pad-added', callback: (_source: this, pad: Gst.Pad, codec: Codec) => void): number;

    connect_after(signal: 'src-pad-added', callback: (_source: this, pad: Gst.Pad, codec: Codec) => void): number;

    emit(signal: 'src-pad-added', pad: Gst.Pad, codec: Codec): void;

    // Members

    add_id(id: number): void;

    add_remote_candidates(candidates: Candidate[]): boolean;

    destroy(): void;

    emit_error(error_no: number, error_msg: string): void;

    emit_src_pad_added(pad: Gst.Pad, codec: Codec): void;

    force_remote_candidates(remote_candidates: Candidate[]): boolean;

    iterate_src_pads(): Gst.Iterator;

    parse_component_state_changed(message: Gst.Message): [boolean, number, StreamState];

    parse_local_candidates_prepared(message: Gst.Message): boolean;

    parse_new_active_candidate_pair(message: Gst.Message): [boolean, Candidate, Candidate];

    parse_new_local_candidate(message: Gst.Message): [boolean, Candidate];

    parse_recv_codecs_changed(message: Gst.Message): [boolean, Codec[]];

    set_decryption_parameters(parameters: Gst.Structure): boolean;

    set_remote_codecs(remote_codecs: Codec[]): boolean;

    set_transmitter(transmitter: string, stream_transmitter_parameters?: GObject.Parameter[] | null): boolean;

    set_transmitter_ht(
        transmitter: string,
        stream_transmitter_parameters?: GLib.HashTable<string, GObject.Value> | null
    ): boolean;

    vfunc_add_id(id: number): void;

    vfunc_add_remote_candidates(candidates: Candidate[]): boolean;

    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean;

    vfunc_set_decryption_parameters(parameters: Gst.Structure): boolean;

    vfunc_set_remote_codecs(remote_codecs: Codec[]): boolean;

    vfunc_set_transmitter(transmitter: string, stream_transmitter_parameters?: GObject.Parameter[] | null): boolean;
}

export namespace StreamTransmitter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        associate_on_source: boolean;
        associateOnSource: boolean;
        preferred_local_candidates: CandidateList;
        preferredLocalCandidates: CandidateList;
        sending: boolean;
    }
}

export abstract class StreamTransmitter extends GObject.Object {
    static $gtype: GObject.GType<StreamTransmitter>;

    constructor(properties?: Partial<StreamTransmitter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<StreamTransmitter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    associate_on_source: boolean;
    associateOnSource: boolean;
    preferred_local_candidates: CandidateList;
    preferredLocalCandidates: CandidateList;
    sending: boolean;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'error', callback: (_source: this, errorno: Error, error_msg: string) => void): number;

    connect_after(signal: 'error', callback: (_source: this, errorno: Error, error_msg: string) => void): number;

    emit(signal: 'error', errorno: Error, error_msg: string): void;

    connect(
        signal: 'known-source-packet-received',
        callback: (_source: this, component: number, buffer: any | null) => void
    ): number;

    connect_after(
        signal: 'known-source-packet-received',
        callback: (_source: this, component: number, buffer: any | null) => void
    ): number;

    emit(signal: 'known-source-packet-received', component: number, buffer: any | null): void;

    connect(signal: 'local-candidates-prepared', callback: (_source: this) => void): number;

    connect_after(signal: 'local-candidates-prepared', callback: (_source: this) => void): number;

    emit(signal: 'local-candidates-prepared'): void;

    connect(
        signal: 'new-active-candidate-pair',
        callback: (_source: this, local_candidate: Candidate, remote_candidate: Candidate) => void
    ): number;

    connect_after(
        signal: 'new-active-candidate-pair',
        callback: (_source: this, local_candidate: Candidate, remote_candidate: Candidate) => void
    ): number;

    emit(signal: 'new-active-candidate-pair', local_candidate: Candidate, remote_candidate: Candidate): void;

    connect(signal: 'new-local-candidate', callback: (_source: this, local_candidate: Candidate) => void): number;

    connect_after(signal: 'new-local-candidate', callback: (_source: this, local_candidate: Candidate) => void): number;

    emit(signal: 'new-local-candidate', local_candidate: Candidate): void;

    connect(signal: 'state-changed', callback: (_source: this, component: number, state: StreamState) => void): number;

    connect_after(
        signal: 'state-changed',
        callback: (_source: this, component: number, state: StreamState) => void
    ): number;

    emit(signal: 'state-changed', component: number, state: StreamState): void;

    // Members

    add_remote_candidates(candidates: Candidate[]): boolean;

    emit_error(error_no: number, error_msg: string): void;

    force_remote_candidates(remote_candidates: Candidate[]): boolean;

    gather_local_candidates(): boolean;

    stop(): void;

    vfunc_add_remote_candidates(candidates: Candidate[]): boolean;

    vfunc_force_remote_candidates(remote_candidates: Candidate[]): boolean;

    vfunc_gather_local_candidates(): boolean;

    vfunc_stop(): void;
}

export namespace Transmitter {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        components: number;
        do_timestamp: boolean;
        doTimestamp: boolean;
        gst_sink: Gst.Element;
        gstSink: Gst.Element;
        gst_src: Gst.Element;
        gstSrc: Gst.Element;
        tos: number;
    }
}

export abstract class Transmitter extends GObject.Object {
    static $gtype: GObject.GType<Transmitter>;

    constructor(properties?: Partial<Transmitter.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Transmitter.ConstructorProperties>, ...args: any[]): void;

    // Properties
    components: number;
    do_timestamp: boolean;
    doTimestamp: boolean;
    gst_sink: Gst.Element;
    gstSink: Gst.Element;
    gst_src: Gst.Element;
    gstSrc: Gst.Element;
    tos: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'error', callback: (_source: this, errorno: Error, error_msg: string) => void): number;

    connect_after(signal: 'error', callback: (_source: this, errorno: Error, error_msg: string) => void): number;

    emit(signal: 'error', errorno: Error, error_msg: string): void;

    // Constructors

    static ['new'](type: string, components: number, tos: number): Transmitter;

    // Members

    emit_error(error_no: number, error_msg: string): void;

    get_stream_transmitter_type(): GObject.GType;

    new_stream_transmitter(
        participant: Participant,
        n_parameters: number,
        parameters: GObject.Parameter
    ): StreamTransmitter;

    vfunc_get_stream_transmitter_type(): GObject.GType;

    vfunc_new_stream_transmitter(
        participant: Participant,
        n_parameters: number,
        parameters: GObject.Parameter
    ): StreamTransmitter;

    static list_available(): string[];
}

export class Candidate {
    static $gtype: GObject.GType<Candidate>;

    constructor(
        foundation: string,
        component_id: number,
        type: CandidateType,
        proto: NetworkProtocol,
        ip: string | null,
        port: number
    );

    constructor(copy: Candidate);

    // Fields
    foundation: string;
    component_id: number;
    ip: string;
    port: number;
    base_ip: string;
    base_port: number;
    proto: NetworkProtocol;
    priority: number;
    type: CandidateType;
    username: string;
    password: string;
    ttl: number;

    // Constructors
    static ['new'](
        foundation: string,
        component_id: number,
        type: CandidateType,
        proto: NetworkProtocol,
        ip: string | null,
        port: number
    ): Candidate;

    static new_full(
        foundation: string,
        component_id: number,
        ip: string | null,
        port: number,
        base_ip: string | null,
        base_port: number,
        proto: NetworkProtocol,
        priority: number,
        type: CandidateType,
        username: string | null,
        password: string | null,
        ttl: number
    ): Candidate;

    // Members
    copy(): Candidate;
}

export class Codec {
    static $gtype: GObject.GType<Codec>;

    constructor(id: number, encoding_name: string, media_type: MediaType, clock_rate: number);
    constructor(copy: Codec);

    // Fields
    id: number;
    encoding_name: string;
    media_type: MediaType;
    clock_rate: number;
    channels: number;
    minimum_reporting_interval: number;
    optional_params: CodecParameter[];
    feedback_params: FeedbackParameter[];

    // Constructors
    static ['new'](id: number, encoding_name: string, media_type: MediaType, clock_rate: number): Codec;

    // Members
    add_feedback_parameter(type: string, subtype: string, extra_params: string): void;

    add_optional_parameter(name: string, value: string): void;

    are_equal(codec2: Codec): boolean;

    copy(): Codec;

    get_feedback_parameter(
        type?: string | null,
        subtype?: string | null,
        extra_params?: string | null
    ): FeedbackParameter;

    get_optional_parameter(name: string, value?: string | null): CodecParameter;

    remove_feedback_parameter(item: FeedbackParameter[]): void;

    remove_optional_parameter(param: CodecParameter): void;

    to_string(): string;
}

export class CodecParameter {
    static $gtype: GObject.GType<CodecParameter>;

    constructor(
        properties?: Partial<{
            name?: string;
            value?: string;
        }>
    );

    constructor(copy: CodecParameter);

    // Fields
    name: string;
    value: string;

    // Members
    copy(): CodecParameter;

    free(): void;
}

export class ElementAddedNotifierPrivate {
    static $gtype: GObject.GType<ElementAddedNotifierPrivate>;

    constructor(copy: ElementAddedNotifierPrivate);
}

export class FeedbackParameter {
    static $gtype: GObject.GType<FeedbackParameter>;

    constructor(
        properties?: Partial<{
            type?: string;
            subtype?: string;
            extra_params?: string;
        }>
    );

    constructor(copy: FeedbackParameter);

    // Fields
    type: string;
    subtype: string;
    extra_params: string;

    // Members
    copy(): FeedbackParameter;

    free(): void;
}

export class ParticipantPrivate {
    static $gtype: GObject.GType<ParticipantPrivate>;

    constructor(copy: ParticipantPrivate);
}

export class PluginPrivate {
    static $gtype: GObject.GType<PluginPrivate>;

    constructor(copy: PluginPrivate);
}

export class RtpHeaderExtension {
    static $gtype: GObject.GType<RtpHeaderExtension>;

    constructor(id: number, direction: StreamDirection, uri: string);
    constructor(copy: RtpHeaderExtension);

    // Fields
    id: number;
    direction: StreamDirection;
    uri: string;

    // Constructors
    static ['new'](id: number, direction: StreamDirection, uri: string): RtpHeaderExtension;

    // Members
    are_equal(extension2: RtpHeaderExtension): boolean;
}

export class SessionPrivate {
    static $gtype: GObject.GType<SessionPrivate>;

    constructor(copy: SessionPrivate);
}

export class StreamPrivate {
    static $gtype: GObject.GType<StreamPrivate>;

    constructor(copy: StreamPrivate);
}

export class StreamTransmitterPrivate {
    static $gtype: GObject.GType<StreamTransmitterPrivate>;

    constructor(copy: StreamTransmitterPrivate);
}

export class TransmitterPrivate {
    static $gtype: GObject.GType<TransmitterPrivate>;

    constructor(copy: TransmitterPrivate);
}
