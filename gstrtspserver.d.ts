/**
 * GstRtspServer 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as Gst from './gst';
import * as GstNet from './gstnet';
import * as GstRtsp from './gstrtsp';
import * as GObject from './gobject';
import * as GstSdp from './gstsdp';
import * as Gio from './gio';
import * as GLib from './glib';

export const RTSP_ADDRESS_POOL_ANY_IPV4: string;
export const RTSP_ADDRESS_POOL_ANY_IPV6: string;
export const RTSP_AUTH_CHECK_CONNECT: string;
export const RTSP_AUTH_CHECK_MEDIA_FACTORY_ACCESS: string;
export const RTSP_AUTH_CHECK_MEDIA_FACTORY_CONSTRUCT: string;
export const RTSP_AUTH_CHECK_TRANSPORT_CLIENT_SETTINGS: string;
export const RTSP_AUTH_CHECK_URL: string;
export const RTSP_ONVIF_BACKCHANNEL_REQUIREMENT: string;
export const RTSP_ONVIF_REPLAY_REQUIREMENT: string;
export const RTSP_PERM_MEDIA_FACTORY_ACCESS: string;
export const RTSP_PERM_MEDIA_FACTORY_CONSTRUCT: string;
export const RTSP_TOKEN_MEDIA_FACTORY_ROLE: string;
export const RTSP_TOKEN_TRANSPORT_CLIENT_SETTINGS: string;

export function rtsp_context_get_type(): GObject.GType;

export function rtsp_params_get(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult;

export function rtsp_params_set(client: RTSPClient, ctx: RTSPContext): GstRtsp.RTSPResult;

export function rtsp_sdp_from_media(sdp: GstSdp.SDPMessage, info: SDPInfo, media: RTSPMedia): boolean;

export function rtsp_sdp_from_stream(sdp: GstSdp.SDPMessage, info: SDPInfo, stream: RTSPStream): boolean;

export function rtsp_sdp_make_media(
    sdp: GstSdp.SDPMessage,
    info: SDPInfo,
    stream: RTSPStream,
    caps: Gst.Caps,
    profile: GstRtsp.RTSPProfile
): boolean;

export type RTSPClientSendFunc = (client: RTSPClient, message: GstRtsp.RTSPMessage, close: boolean) => boolean;
export type RTSPClientSendMessagesFunc = (
    client: RTSPClient,
    messages: GstRtsp.RTSPMessage,
    n_messages: number,
    close: boolean
) => boolean;
export type RTSPClientSessionFilterFunc = (client: RTSPClient, sess: RTSPSession) => RTSPFilterResult;
export type RTSPKeepAliveFunc = () => void;
export type RTSPMessageSentFunc = () => void;
export type RTSPMessageSentFuncFull = (trans: RTSPStreamTransport) => void;
export type RTSPSendFunc = (buffer: Gst.Buffer, channel: number) => boolean;
export type RTSPSendListFunc = (buffer_list: Gst.BufferList, channel: number) => boolean;
export type RTSPServerClientFilterFunc = (server: RTSPServer, client: RTSPClient) => RTSPFilterResult;
export type RTSPSessionFilterFunc = (sess: RTSPSession, media: RTSPSessionMedia) => RTSPFilterResult;
export type RTSPSessionPoolFilterFunc = (pool: RTSPSessionPool, session: RTSPSession) => RTSPFilterResult;
export type RTSPSessionPoolFunc = (pool: RTSPSessionPool) => boolean;
export type RTSPStreamTransportFilterFunc = (stream: RTSPStream, trans: RTSPStreamTransport) => RTSPFilterResult;

export namespace RTSPAddressPoolResult {
    export const $gtype: GObject.GType<RTSPAddressPoolResult>;
}

export enum RTSPAddressPoolResult {
    OK = 0,
    EINVAL = -1,
    ERESERVED = -2,
    ERANGE = -3,
    ELAST = -4,
}

export namespace RTSPFilterResult {
    export const $gtype: GObject.GType<RTSPFilterResult>;
}

export enum RTSPFilterResult {
    REMOVE = 0,
    KEEP = 1,
    REF = 2,
}

export namespace RTSPMediaStatus {
    export const $gtype: GObject.GType<RTSPMediaStatus>;
}

export enum RTSPMediaStatus {
    UNPREPARED = 0,
    UNPREPARING = 1,
    PREPARING = 2,
    PREPARED = 3,
    SUSPENDED = 4,
    ERROR = 5,
}

export namespace RTSPPublishClockMode {
    export const $gtype: GObject.GType<RTSPPublishClockMode>;
}

export enum RTSPPublishClockMode {
    NONE = 0,
    CLOCK = 1,
    CLOCK_AND_OFFSET = 2,
}

export namespace RTSPSuspendMode {
    export const $gtype: GObject.GType<RTSPSuspendMode>;
}

export enum RTSPSuspendMode {
    NONE = 0,
    PAUSE = 1,
    RESET = 2,
}

export namespace RTSPThreadType {
    export const $gtype: GObject.GType<RTSPThreadType>;
}

export enum RTSPThreadType {
    CLIENT = 0,
    MEDIA = 1,
}

export namespace RTSPAddressFlags {
    export const $gtype: GObject.GType<RTSPAddressFlags>;
}

export enum RTSPAddressFlags {
    NONE = 0,
    IPV4 = 1,
    IPV6 = 2,
    EVEN_PORT = 4,
    MULTICAST = 8,
    UNICAST = 16,
}

export namespace RTSPTransportMode {
    export const $gtype: GObject.GType<RTSPTransportMode>;
}

export enum RTSPTransportMode {
    PLAY = 1,
    RECORD = 2,
}

export namespace RTSPAddressPool {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RTSPAddressPool extends GObject.Object {
    static $gtype: GObject.GType<RTSPAddressPool>;

    constructor(properties?: Partial<RTSPAddressPool.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPAddressPool.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): RTSPAddressPool;

    // Members

    acquire_address(flags: RTSPAddressFlags, n_ports: number): RTSPAddress | null;

    add_range(min_address: string, max_address: string, min_port: number, max_port: number, ttl: number): boolean;

    clear(): void;

    dump(): void;

    has_unicast_addresses(): boolean;

    reserve_address(
        ip_address: string,
        port: number,
        n_ports: number,
        ttl: number
    ): [RTSPAddressPoolResult, RTSPAddress];
}

export namespace RTSPAuth {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RTSPAuth extends GObject.Object {
    static $gtype: GObject.GType<RTSPAuth>;

    constructor(properties?: Partial<RTSPAuth.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPAuth.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: 'accept-certificate',
        callback: (
            _source: this,
            connection: Gio.TlsConnection,
            peer_cert: Gio.TlsCertificate,
            errors: Gio.TlsCertificateFlags
        ) => boolean
    ): number;

    connect_after(
        signal: 'accept-certificate',
        callback: (
            _source: this,
            connection: Gio.TlsConnection,
            peer_cert: Gio.TlsCertificate,
            errors: Gio.TlsCertificateFlags
        ) => boolean
    ): number;

    emit(
        signal: 'accept-certificate',
        connection: Gio.TlsConnection,
        peer_cert: Gio.TlsCertificate,
        errors: Gio.TlsCertificateFlags
    ): void;

    // Constructors

    static ['new'](): RTSPAuth;

    // Members

    add_basic(basic: string, token: RTSPToken): void;

    add_digest(user: string, pass: string, token: RTSPToken): void;

    get_default_token(): RTSPToken | null;

    get_realm(): string;

    get_supported_methods(): GstRtsp.RTSPAuthMethod;

    get_tls_authentication_mode(): Gio.TlsAuthenticationMode;

    get_tls_certificate(): Gio.TlsCertificate | null;

    get_tls_database(): Gio.TlsDatabase | null;

    parse_htdigest(path: string, token: RTSPToken): boolean;

    remove_basic(basic: string): void;

    remove_digest(user: string): void;

    set_default_token(token?: RTSPToken | null): void;

    set_realm(realm: string): void;

    set_supported_methods(methods: GstRtsp.RTSPAuthMethod): void;

    set_tls_authentication_mode(mode: Gio.TlsAuthenticationMode): void;

    set_tls_certificate(cert?: Gio.TlsCertificate | null): void;

    set_tls_database(database?: Gio.TlsDatabase | null): void;

    vfunc_accept_certificate(
        connection: Gio.TlsConnection,
        peer_cert: Gio.TlsCertificate,
        errors: Gio.TlsCertificateFlags
    ): boolean;

    vfunc_authenticate(ctx: RTSPContext): boolean;

    vfunc_check(ctx: RTSPContext, check: string): boolean;

    vfunc_generate_authenticate_header(ctx: RTSPContext): void;

    static check(check: string): boolean;

    static make_basic(user: string, pass: string): string;
}

export namespace RTSPClient {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        drop_backlog: boolean;
        dropBacklog: boolean;
        mount_points: RTSPMountPoints;
        mountPoints: RTSPMountPoints;
        post_session_timeout: number;
        postSessionTimeout: number;
        session_pool: RTSPSessionPool;
        sessionPool: RTSPSessionPool;
    }
}

export class RTSPClient extends GObject.Object {
    static $gtype: GObject.GType<RTSPClient>;

    constructor(properties?: Partial<RTSPClient.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPClient.ConstructorProperties>, ...args: any[]): void;

    // Properties
    drop_backlog: boolean;
    dropBacklog: boolean;
    mount_points: RTSPMountPoints;
    mountPoints: RTSPMountPoints;
    post_session_timeout: number;
    postSessionTimeout: number;
    session_pool: RTSPSessionPool;
    sessionPool: RTSPSessionPool;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'announce-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    connect_after(signal: 'announce-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    emit(signal: 'announce-request', ctx: RTSPContext): void;

    connect(signal: 'check-requirements', callback: (_source: this, ctx: RTSPContext, arr: string[]) => string): number;

    connect_after(
        signal: 'check-requirements',
        callback: (_source: this, ctx: RTSPContext, arr: string[]) => string
    ): number;

    emit(signal: 'check-requirements', ctx: RTSPContext, arr: string[]): void;

    connect(signal: 'closed', callback: (_source: this) => void): number;

    connect_after(signal: 'closed', callback: (_source: this) => void): number;

    emit(signal: 'closed'): void;

    connect(signal: 'describe-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    connect_after(signal: 'describe-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    emit(signal: 'describe-request', ctx: RTSPContext): void;

    connect(signal: 'get-parameter-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    connect_after(signal: 'get-parameter-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    emit(signal: 'get-parameter-request', ctx: RTSPContext): void;

    connect(signal: 'handle-response', callback: (_source: this, ctx: RTSPContext) => void): number;

    connect_after(signal: 'handle-response', callback: (_source: this, ctx: RTSPContext) => void): number;

    emit(signal: 'handle-response', ctx: RTSPContext): void;

    connect(signal: 'new-session', callback: (_source: this, object: RTSPSession) => void): number;

    connect_after(signal: 'new-session', callback: (_source: this, object: RTSPSession) => void): number;

    emit(signal: 'new-session', object: RTSPSession): void;

    connect(signal: 'options-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    connect_after(signal: 'options-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    emit(signal: 'options-request', ctx: RTSPContext): void;

    connect(signal: 'pause-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    connect_after(signal: 'pause-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    emit(signal: 'pause-request', ctx: RTSPContext): void;

    connect(signal: 'play-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    connect_after(signal: 'play-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    emit(signal: 'play-request', ctx: RTSPContext): void;

    connect(
        signal: 'pre-announce-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    connect_after(
        signal: 'pre-announce-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    emit(signal: 'pre-announce-request', ctx: RTSPContext): void;

    connect(
        signal: 'pre-describe-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    connect_after(
        signal: 'pre-describe-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    emit(signal: 'pre-describe-request', ctx: RTSPContext): void;

    connect(
        signal: 'pre-get-parameter-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    connect_after(
        signal: 'pre-get-parameter-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    emit(signal: 'pre-get-parameter-request', ctx: RTSPContext): void;

    connect(
        signal: 'pre-options-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    connect_after(
        signal: 'pre-options-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    emit(signal: 'pre-options-request', ctx: RTSPContext): void;

    connect(signal: 'pre-pause-request', callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode): number;

    connect_after(
        signal: 'pre-pause-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    emit(signal: 'pre-pause-request', ctx: RTSPContext): void;

    connect(signal: 'pre-play-request', callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode): number;

    connect_after(
        signal: 'pre-play-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    emit(signal: 'pre-play-request', ctx: RTSPContext): void;

    connect(
        signal: 'pre-record-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    connect_after(
        signal: 'pre-record-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    emit(signal: 'pre-record-request', ctx: RTSPContext): void;

    connect(
        signal: 'pre-set-parameter-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    connect_after(
        signal: 'pre-set-parameter-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    emit(signal: 'pre-set-parameter-request', ctx: RTSPContext): void;

    connect(signal: 'pre-setup-request', callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode): number;

    connect_after(
        signal: 'pre-setup-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    emit(signal: 'pre-setup-request', ctx: RTSPContext): void;

    connect(
        signal: 'pre-teardown-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    connect_after(
        signal: 'pre-teardown-request',
        callback: (_source: this, ctx: RTSPContext) => GstRtsp.RTSPStatusCode
    ): number;

    emit(signal: 'pre-teardown-request', ctx: RTSPContext): void;

    connect(signal: 'record-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    connect_after(signal: 'record-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    emit(signal: 'record-request', ctx: RTSPContext): void;

    connect(
        signal: 'send-message',
        callback: (_source: this, session: RTSPSession, message: GstRtsp.RTSPMessage) => void
    ): number;

    connect_after(
        signal: 'send-message',
        callback: (_source: this, session: RTSPSession, message: GstRtsp.RTSPMessage) => void
    ): number;

    emit(signal: 'send-message', session: RTSPSession, message: GstRtsp.RTSPMessage): void;

    connect(signal: 'set-parameter-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    connect_after(signal: 'set-parameter-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    emit(signal: 'set-parameter-request', ctx: RTSPContext): void;

    connect(signal: 'setup-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    connect_after(signal: 'setup-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    emit(signal: 'setup-request', ctx: RTSPContext): void;

    connect(signal: 'teardown-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    connect_after(signal: 'teardown-request', callback: (_source: this, ctx: RTSPContext) => void): number;

    emit(signal: 'teardown-request', ctx: RTSPContext): void;

    // Constructors

    static ['new'](): RTSPClient;

    // Members

    attach(context?: GLib.MainContext | null): number;

    close(): void;

    get_auth(): RTSPAuth | null;

    get_connection(): GstRtsp.RTSPConnection | null;

    get_content_length_limit(): number;

    get_mount_points(): RTSPMountPoints | null;

    get_session_pool(): RTSPSessionPool | null;

    get_stream_transport(channel: number): RTSPStreamTransport | null;

    get_thread_pool(): RTSPThreadPool | null;

    handle_message(message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult;

    send_message(session: RTSPSession | null, message: GstRtsp.RTSPMessage): GstRtsp.RTSPResult;

    session_filter(func?: RTSPClientSessionFilterFunc | null): RTSPSession[];

    set_auth(auth?: RTSPAuth | null): void;

    set_connection(conn: GstRtsp.RTSPConnection): boolean;

    set_content_length_limit(limit: number): void;

    set_mount_points(mounts?: RTSPMountPoints | null): void;

    set_send_func(func: RTSPClientSendFunc, notify?: GLib.DestroyNotify | null): void;

    set_send_messages_func(func: RTSPClientSendMessagesFunc, notify?: GLib.DestroyNotify | null): void;

    set_session_pool(pool?: RTSPSessionPool | null): void;

    set_thread_pool(pool?: RTSPThreadPool | null): void;

    vfunc_adjust_play_mode(
        context: RTSPContext,
        range: GstRtsp.RTSPTimeRange,
        flags: Gst.SeekFlags,
        rate: number,
        trickmode_interval: Gst.ClockTime,
        enable_rate_control: boolean
    ): GstRtsp.RTSPStatusCode;

    vfunc_adjust_play_response(context: RTSPContext): GstRtsp.RTSPStatusCode;

    vfunc_announce_request(ctx: RTSPContext): void;

    vfunc_check_requirements(ctx: RTSPContext, arr: string): string;

    vfunc_closed(): void;

    vfunc_configure_client_media(media: RTSPMedia, stream: RTSPStream, ctx: RTSPContext): boolean;

    vfunc_configure_client_transport(ctx: RTSPContext, ct: GstRtsp.RTSPTransport): boolean;

    vfunc_create_sdp(media: RTSPMedia): GstSdp.SDPMessage;

    vfunc_describe_request(ctx: RTSPContext): void;

    vfunc_get_parameter_request(ctx: RTSPContext): void;

    vfunc_handle_response(ctx: RTSPContext): void;

    vfunc_handle_sdp(ctx: RTSPContext, media: RTSPMedia, sdp: GstSdp.SDPMessage): boolean;

    vfunc_make_path_from_uri(uri: GstRtsp.RTSPUrl): string;

    vfunc_new_session(session: RTSPSession): void;

    vfunc_options_request(ctx: RTSPContext): void;

    vfunc_params_get(ctx: RTSPContext): GstRtsp.RTSPResult;

    vfunc_params_set(ctx: RTSPContext): GstRtsp.RTSPResult;

    vfunc_pause_request(ctx: RTSPContext): void;

    vfunc_play_request(ctx: RTSPContext): void;

    vfunc_pre_announce_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;

    vfunc_pre_describe_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;

    vfunc_pre_get_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;

    vfunc_pre_options_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;

    vfunc_pre_pause_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;

    vfunc_pre_play_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;

    vfunc_pre_record_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;

    vfunc_pre_set_parameter_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;

    vfunc_pre_setup_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;

    vfunc_pre_teardown_request(ctx: RTSPContext): GstRtsp.RTSPStatusCode;

    vfunc_record_request(ctx: RTSPContext): void;

    vfunc_send_message(ctx: RTSPContext, response: GstRtsp.RTSPMessage): void;

    vfunc_set_parameter_request(ctx: RTSPContext): void;

    vfunc_setup_request(ctx: RTSPContext): void;

    vfunc_teardown_request(ctx: RTSPContext): void;

    vfunc_tunnel_http_response(request: GstRtsp.RTSPMessage, response: GstRtsp.RTSPMessage): void;
}

export namespace RTSPMedia {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        bind_mcast_address: boolean;
        bindMcastAddress: boolean;
        buffer_size: number;
        bufferSize: number;
        clock: Gst.Clock;
        dscp_qos: number;
        dscpQos: number;
        element: Gst.Element;
        eos_shutdown: boolean;
        eosShutdown: boolean;
        latency: number;
        max_mcast_ttl: number;
        maxMcastTtl: number;
        profiles: GstRtsp.RTSPProfile;
        protocols: GstRtsp.RTSPLowerTrans;
        reusable: boolean;
        shared: boolean;
        stop_on_disconnect: boolean;
        stopOnDisconnect: boolean;
        suspend_mode: RTSPSuspendMode;
        suspendMode: RTSPSuspendMode;
        time_provider: boolean;
        timeProvider: boolean;
        transport_mode: RTSPTransportMode;
        transportMode: RTSPTransportMode;
    }
}

export class RTSPMedia extends GObject.Object {
    static $gtype: GObject.GType<RTSPMedia>;

    constructor(properties?: Partial<RTSPMedia.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPMedia.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bind_mcast_address: boolean;
    bindMcastAddress: boolean;
    buffer_size: number;
    bufferSize: number;
    clock: Gst.Clock;
    dscp_qos: number;
    dscpQos: number;
    element: Gst.Element;
    eos_shutdown: boolean;
    eosShutdown: boolean;
    latency: number;
    max_mcast_ttl: number;
    maxMcastTtl: number;
    profiles: GstRtsp.RTSPProfile;
    protocols: GstRtsp.RTSPLowerTrans;
    reusable: boolean;
    shared: boolean;
    stop_on_disconnect: boolean;
    stopOnDisconnect: boolean;
    suspend_mode: RTSPSuspendMode;
    suspendMode: RTSPSuspendMode;
    time_provider: boolean;
    timeProvider: boolean;
    transport_mode: RTSPTransportMode;
    transportMode: RTSPTransportMode;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'new-state', callback: (_source: this, object: number) => void): number;

    connect_after(signal: 'new-state', callback: (_source: this, object: number) => void): number;

    emit(signal: 'new-state', object: number): void;

    connect(signal: 'new-stream', callback: (_source: this, object: RTSPStream) => void): number;

    connect_after(signal: 'new-stream', callback: (_source: this, object: RTSPStream) => void): number;

    emit(signal: 'new-stream', object: RTSPStream): void;

    connect(signal: 'prepared', callback: (_source: this) => void): number;

    connect_after(signal: 'prepared', callback: (_source: this) => void): number;

    emit(signal: 'prepared'): void;

    connect(signal: 'removed-stream', callback: (_source: this, object: RTSPStream) => void): number;

    connect_after(signal: 'removed-stream', callback: (_source: this, object: RTSPStream) => void): number;

    emit(signal: 'removed-stream', object: RTSPStream): void;

    connect(signal: 'target-state', callback: (_source: this, object: number) => void): number;

    connect_after(signal: 'target-state', callback: (_source: this, object: number) => void): number;

    emit(signal: 'target-state', object: number): void;

    connect(signal: 'unprepared', callback: (_source: this) => void): number;

    connect_after(signal: 'unprepared', callback: (_source: this) => void): number;

    emit(signal: 'unprepared'): void;

    // Constructors

    static ['new'](element: Gst.Element): RTSPMedia;

    // Members

    collect_streams(): void;

    complete_pipeline(transports: GstRtsp.RTSPTransport[]): boolean;

    create_stream(payloader: Gst.Element, pad: Gst.Pad): RTSPStream;

    find_stream(control: string): RTSPStream | null;

    get_address_pool(): RTSPAddressPool | null;

    get_base_time(): Gst.ClockTime;

    get_buffer_size(): number;

    get_clock(): Gst.Clock | null;

    get_do_retransmission(): boolean;

    get_dscp_qos(): number;

    get_element(): Gst.Element;

    get_latency(): number;

    get_max_mcast_ttl(): number;

    get_multicast_iface(): string | null;

    get_permissions(): RTSPPermissions | null;

    get_profiles(): GstRtsp.RTSPProfile;

    get_protocols(): GstRtsp.RTSPLowerTrans;

    get_publish_clock_mode(): RTSPPublishClockMode;

    get_range_string(play: boolean, unit: GstRtsp.RTSPRangeUnit): string | null;

    get_rate_control(): boolean;

    get_rates(): [boolean, number | null, number | null];

    get_retransmission_time(): Gst.ClockTime;

    get_status(): RTSPMediaStatus;

    get_stream(idx: number): RTSPStream | null;

    get_suspend_mode(): RTSPSuspendMode;

    get_time_provider(address: string | null, port: number): GstNet.NetTimeProvider;

    get_transport_mode(): RTSPTransportMode;

    handle_sdp(sdp: GstSdp.SDPMessage): boolean;

    has_completed_sender(): boolean;

    is_bind_mcast_address(): boolean;

    is_eos_shutdown(): boolean;

    is_receive_only(): boolean;

    is_reusable(): boolean;

    is_shared(): boolean;

    is_stop_on_disconnect(): boolean;

    is_time_provider(): boolean;

    lock(): void;

    n_streams(): number;

    prepare(thread?: RTSPThread | null): boolean;

    seek(range: GstRtsp.RTSPTimeRange): boolean;

    seek_full(range: GstRtsp.RTSPTimeRange, flags: Gst.SeekFlags): boolean;

    seek_trickmode(
        range: GstRtsp.RTSPTimeRange,
        flags: Gst.SeekFlags,
        rate: number,
        trickmode_interval: Gst.ClockTime
    ): boolean;

    seekable(): Gst.ClockTimeDiff;

    set_address_pool(pool?: RTSPAddressPool | null): void;

    set_bind_mcast_address(bind_mcast_addr: boolean): void;

    set_buffer_size(size: number): void;

    set_clock(clock?: Gst.Clock | null): void;

    set_do_retransmission(do_retransmission: boolean): void;

    set_dscp_qos(dscp_qos: number): void;

    set_eos_shutdown(eos_shutdown: boolean): void;

    set_latency(latency: number): void;

    set_max_mcast_ttl(ttl: number): boolean;

    set_multicast_iface(multicast_iface?: string | null): void;

    set_permissions(permissions?: RTSPPermissions | null): void;

    set_pipeline_state(state: Gst.State): void;

    set_profiles(profiles: GstRtsp.RTSPProfile): void;

    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void;

    set_publish_clock_mode(mode: RTSPPublishClockMode): void;

    set_rate_control(enabled: boolean): void;

    set_retransmission_time(time: Gst.ClockTime): void;

    set_reusable(reusable: boolean): void;

    set_shared(shared: boolean): void;

    set_state(state: Gst.State, transports: RTSPStreamTransport[]): boolean;

    set_stop_on_disconnect(stop_on_disconnect: boolean): void;

    set_suspend_mode(mode: RTSPSuspendMode): void;

    set_transport_mode(mode: RTSPTransportMode): void;

    setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean;

    suspend(): boolean;

    take_pipeline(pipeline: Gst.Pipeline): void;

    unlock(): void;

    unprepare(): boolean;

    unsuspend(): boolean;

    use_time_provider(time_provider: boolean): void;

    vfunc_convert_range(range: GstRtsp.RTSPTimeRange, unit: GstRtsp.RTSPRangeUnit): boolean;

    vfunc_handle_message(message: Gst.Message): boolean;

    vfunc_handle_sdp(sdp: GstSdp.SDPMessage): boolean;

    vfunc_new_state(state: Gst.State): void;

    vfunc_new_stream(stream: RTSPStream): void;

    vfunc_prepare(thread?: RTSPThread | null): boolean;

    vfunc_prepared(): void;

    vfunc_query_position(position: number): boolean;

    vfunc_query_stop(stop: number): boolean;

    vfunc_removed_stream(stream: RTSPStream): void;

    vfunc_setup_rtpbin(rtpbin: Gst.Element): boolean;

    vfunc_setup_sdp(sdp: GstSdp.SDPMessage, info: SDPInfo): boolean;

    vfunc_suspend(): boolean;

    vfunc_target_state(state: Gst.State): void;

    vfunc_unprepare(): boolean;

    vfunc_unprepared(): void;

    vfunc_unsuspend(): boolean;
}

export namespace RTSPMediaFactory {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        bind_mcast_address: boolean;
        bindMcastAddress: boolean;
        buffer_size: number;
        bufferSize: number;
        clock: Gst.Clock;
        dscp_qos: number;
        dscpQos: number;
        eos_shutdown: boolean;
        eosShutdown: boolean;
        latency: number;
        launch: string;
        max_mcast_ttl: number;
        maxMcastTtl: number;
        profiles: GstRtsp.RTSPProfile;
        protocols: GstRtsp.RTSPLowerTrans;
        shared: boolean;
        stop_on_disconnect: boolean;
        stopOnDisconnect: boolean;
        suspend_mode: RTSPSuspendMode;
        suspendMode: RTSPSuspendMode;
        transport_mode: RTSPTransportMode;
        transportMode: RTSPTransportMode;
    }
}

export class RTSPMediaFactory extends GObject.Object {
    static $gtype: GObject.GType<RTSPMediaFactory>;

    constructor(properties?: Partial<RTSPMediaFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPMediaFactory.ConstructorProperties>, ...args: any[]): void;

    // Properties
    bind_mcast_address: boolean;
    bindMcastAddress: boolean;
    buffer_size: number;
    bufferSize: number;
    clock: Gst.Clock;
    dscp_qos: number;
    dscpQos: number;
    eos_shutdown: boolean;
    eosShutdown: boolean;
    latency: number;
    launch: string;
    max_mcast_ttl: number;
    maxMcastTtl: number;
    profiles: GstRtsp.RTSPProfile;
    protocols: GstRtsp.RTSPLowerTrans;
    shared: boolean;
    stop_on_disconnect: boolean;
    stopOnDisconnect: boolean;
    suspend_mode: RTSPSuspendMode;
    suspendMode: RTSPSuspendMode;
    transport_mode: RTSPTransportMode;
    transportMode: RTSPTransportMode;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'media-configure', callback: (_source: this, object: RTSPMedia) => void): number;

    connect_after(signal: 'media-configure', callback: (_source: this, object: RTSPMedia) => void): number;

    emit(signal: 'media-configure', object: RTSPMedia): void;

    connect(signal: 'media-constructed', callback: (_source: this, object: RTSPMedia) => void): number;

    connect_after(signal: 'media-constructed', callback: (_source: this, object: RTSPMedia) => void): number;

    emit(signal: 'media-constructed', object: RTSPMedia): void;

    // Constructors

    static ['new'](): RTSPMediaFactory;

    // Members

    add_role_from_structure(structure: Gst.Structure): void;

    construct(url: GstRtsp.RTSPUrl): RTSPMedia;

    create_element(url: GstRtsp.RTSPUrl): Gst.Element;

    get_address_pool(): RTSPAddressPool | null;

    get_buffer_size(): number;

    get_clock(): Gst.Clock;

    get_do_retransmission(): boolean;

    get_dscp_qos(): number;

    get_latency(): number;

    get_launch(): string | null;

    get_max_mcast_ttl(): number;

    get_media_gtype(): GObject.GType;

    get_multicast_iface(): string | null;

    get_permissions(): RTSPPermissions | null;

    get_profiles(): GstRtsp.RTSPProfile;

    get_protocols(): GstRtsp.RTSPLowerTrans;

    get_publish_clock_mode(): RTSPPublishClockMode;

    get_retransmission_time(): Gst.ClockTime;

    get_suspend_mode(): RTSPSuspendMode;

    get_transport_mode(): RTSPTransportMode;

    is_bind_mcast_address(): boolean;

    is_eos_shutdown(): boolean;

    is_shared(): boolean;

    is_stop_on_disonnect(): boolean;

    set_address_pool(pool?: RTSPAddressPool | null): void;

    set_bind_mcast_address(bind_mcast_addr: boolean): void;

    set_buffer_size(size: number): void;

    set_clock(clock?: Gst.Clock | null): void;

    set_do_retransmission(do_retransmission: boolean): void;

    set_dscp_qos(dscp_qos: number): void;

    set_eos_shutdown(eos_shutdown: boolean): void;

    set_latency(latency: number): void;

    set_launch(launch: string): void;

    set_max_mcast_ttl(ttl: number): boolean;

    set_media_gtype(media_gtype: GObject.GType): void;

    set_multicast_iface(multicast_iface?: string | null): void;

    set_permissions(permissions?: RTSPPermissions | null): void;

    set_profiles(profiles: GstRtsp.RTSPProfile): void;

    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void;

    set_publish_clock_mode(mode: RTSPPublishClockMode): void;

    set_retransmission_time(time: Gst.ClockTime): void;

    set_shared(shared: boolean): void;

    set_stop_on_disconnect(stop_on_disconnect: boolean): void;

    set_suspend_mode(mode: RTSPSuspendMode): void;

    set_transport_mode(mode: RTSPTransportMode): void;

    vfunc_configure(media: RTSPMedia): void;

    vfunc_construct(url: GstRtsp.RTSPUrl): RTSPMedia;

    vfunc_create_element(url: GstRtsp.RTSPUrl): Gst.Element;

    vfunc_gen_key(url: GstRtsp.RTSPUrl): string;

    vfunc_media_configure(media: RTSPMedia): void;

    vfunc_media_constructed(media: RTSPMedia): void;
}

export namespace RTSPMediaFactoryURI {
    export interface ConstructorProperties extends RTSPMediaFactory.ConstructorProperties {
        [key: string]: any;

        uri: string;
        use_gstpay: boolean;
        useGstpay: boolean;
    }
}

export class RTSPMediaFactoryURI extends RTSPMediaFactory {
    static $gtype: GObject.GType<RTSPMediaFactoryURI>;

    constructor(properties?: Partial<RTSPMediaFactoryURI.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPMediaFactoryURI.ConstructorProperties>, ...args: any[]): void;

    // Properties
    uri: string;
    use_gstpay: boolean;
    useGstpay: boolean;

    // Constructors

    static ['new'](): RTSPMediaFactoryURI;

    // Members

    get_uri(): string;

    set_uri(uri: string): void;
}

export namespace RTSPMountPoints {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RTSPMountPoints extends GObject.Object {
    static $gtype: GObject.GType<RTSPMountPoints>;

    constructor(properties?: Partial<RTSPMountPoints.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPMountPoints.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): RTSPMountPoints;

    // Members

    add_factory(path: string, factory: RTSPMediaFactory): void;

    make_path(url: GstRtsp.RTSPUrl): string | null;

    match(path: string): [RTSPMediaFactory, number | null];

    remove_factory(path: string): void;

    vfunc_make_path(url: GstRtsp.RTSPUrl): string | null;
}

export namespace RTSPOnvifClient {
    export interface ConstructorProperties extends RTSPClient.ConstructorProperties {
        [key: string]: any;
    }
}

export class RTSPOnvifClient extends RTSPClient {
    static $gtype: GObject.GType<RTSPOnvifClient>;

    constructor(properties?: Partial<RTSPOnvifClient.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPOnvifClient.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): RTSPOnvifClient;
}

export namespace RTSPOnvifMedia {
    export interface ConstructorProperties extends RTSPMedia.ConstructorProperties {
        [key: string]: any;
    }
}

export class RTSPOnvifMedia extends RTSPMedia {
    static $gtype: GObject.GType<RTSPOnvifMedia>;

    constructor(properties?: Partial<RTSPOnvifMedia.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPOnvifMedia.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: RTSPOnvifMediaPrivate;

    // Members

    collect_backchannel(): boolean;

    get_backchannel_bandwidth(): number;

    set_backchannel_bandwidth(bandwidth: number): void;
}

export namespace RTSPOnvifMediaFactory {
    export interface ConstructorProperties extends RTSPMediaFactory.ConstructorProperties {
        [key: string]: any;
    }
}

export class RTSPOnvifMediaFactory extends RTSPMediaFactory {
    static $gtype: GObject.GType<RTSPOnvifMediaFactory>;

    constructor(properties?: Partial<RTSPOnvifMediaFactory.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPOnvifMediaFactory.ConstructorProperties>, ...args: any[]): void;

    // Fields
    priv: RTSPOnvifMediaFactoryPrivate;

    // Constructors

    static ['new'](): RTSPOnvifMediaFactory;

    // Members

    get_backchannel_bandwidth(): number;

    get_backchannel_launch(): string;

    has_backchannel_support(): boolean;

    has_replay_support(): boolean;

    set_backchannel_bandwidth(bandwidth: number): void;

    set_backchannel_launch(launch: string): void;

    set_replay_support(has_replay_support: boolean): void;

    vfunc_has_backchannel_support(): boolean;

    static requires_backchannel(factory: RTSPMediaFactory, ctx: RTSPContext): boolean;
}

export namespace RTSPOnvifServer {
    export interface ConstructorProperties extends RTSPServer.ConstructorProperties {
        [key: string]: any;
    }
}

export class RTSPOnvifServer extends RTSPServer {
    static $gtype: GObject.GType<RTSPOnvifServer>;

    constructor(properties?: Partial<RTSPOnvifServer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPOnvifServer.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](): RTSPOnvifServer;
}

export namespace RTSPServer {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        address: string;
        backlog: number;
        bound_port: number;
        boundPort: number;
        content_length_limit: number;
        contentLengthLimit: number;
        mount_points: RTSPMountPoints;
        mountPoints: RTSPMountPoints;
        service: string;
        session_pool: RTSPSessionPool;
        sessionPool: RTSPSessionPool;
    }
}

export class RTSPServer extends GObject.Object {
    static $gtype: GObject.GType<RTSPServer>;

    constructor(properties?: Partial<RTSPServer.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPServer.ConstructorProperties>, ...args: any[]): void;

    // Properties
    address: string;
    backlog: number;
    bound_port: number;
    boundPort: number;
    content_length_limit: number;
    contentLengthLimit: number;
    mount_points: RTSPMountPoints;
    mountPoints: RTSPMountPoints;
    service: string;
    session_pool: RTSPSessionPool;
    sessionPool: RTSPSessionPool;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'client-connected', callback: (_source: this, object: RTSPClient) => void): number;

    connect_after(signal: 'client-connected', callback: (_source: this, object: RTSPClient) => void): number;

    emit(signal: 'client-connected', object: RTSPClient): void;

    // Constructors

    static ['new'](): RTSPServer;

    // Members

    attach(context?: GLib.MainContext | null): number;

    client_filter(func?: RTSPServerClientFilterFunc | null): RTSPClient[];

    create_socket(cancellable?: Gio.Cancellable | null): Gio.Socket;

    create_source(cancellable?: Gio.Cancellable | null): GLib.Source;

    get_address(): string | null;

    get_auth(): RTSPAuth | null;

    get_backlog(): number;

    get_bound_port(): number;

    get_content_length_limit(): number;

    get_mount_points(): RTSPMountPoints | null;

    get_service(): string | null;

    get_session_pool(): RTSPSessionPool | null;

    get_thread_pool(): RTSPThreadPool | null;

    set_address(address: string): void;

    set_auth(auth?: RTSPAuth | null): void;

    set_backlog(backlog: number): void;

    set_content_length_limit(limit: number): void;

    set_mount_points(mounts?: RTSPMountPoints | null): void;

    set_service(service: string): void;

    set_session_pool(pool?: RTSPSessionPool | null): void;

    set_thread_pool(pool?: RTSPThreadPool | null): void;

    transfer_connection(socket: Gio.Socket, ip: string, port: number, initial_buffer?: string | null): boolean;

    vfunc_client_connected(client: RTSPClient): void;

    static io_func(socket: Gio.Socket, condition: GLib.IOCondition, server: RTSPServer): boolean;
}

export namespace RTSPSession {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        extra_timeout: number;
        extraTimeout: number;
        sessionid: string;
        timeout: number;
        timeout_always_visible: boolean;
        timeoutAlwaysVisible: boolean;
    }
}

export class RTSPSession extends GObject.Object {
    static $gtype: GObject.GType<RTSPSession>;

    constructor(properties?: Partial<RTSPSession.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPSession.ConstructorProperties>, ...args: any[]): void;

    // Properties
    extra_timeout: number;
    extraTimeout: number;
    sessionid: string;
    timeout: number;
    timeout_always_visible: boolean;
    timeoutAlwaysVisible: boolean;

    // Constructors

    static ['new'](sessionid: string): RTSPSession;

    // Members

    allow_expire(): void;

    filter(func?: RTSPSessionFilterFunc | null): RTSPSessionMedia[];

    get_header(): string | null;

    get_media(path: string): [RTSPSessionMedia | null, number];

    get_sessionid(): string | null;

    get_timeout(): number;

    is_expired(now: GLib.TimeVal): boolean;

    is_expired_usec(now: number): boolean;

    manage_media(path: string, media: RTSPMedia): RTSPSessionMedia;

    next_timeout(now: GLib.TimeVal): number;

    next_timeout_usec(now: number): number;

    prevent_expire(): void;

    release_media(media: RTSPSessionMedia): boolean;

    set_timeout(timeout: number): void;

    touch(): void;
}

export namespace RTSPSessionMedia {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RTSPSessionMedia extends GObject.Object {
    static $gtype: GObject.GType<RTSPSessionMedia>;

    constructor(properties?: Partial<RTSPSessionMedia.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPSessionMedia.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](path: string, media: RTSPMedia): RTSPSessionMedia;

    // Members

    alloc_channels(): [boolean, GstRtsp.RTSPRange];

    get_base_time(): Gst.ClockTime;

    get_media(): RTSPMedia | null;

    get_rtpinfo(): string | null;

    get_rtsp_state(): GstRtsp.RTSPState;

    get_transport(idx: number): RTSPStreamTransport | null;

    get_transports(): RTSPStreamTransport[];

    matches(path: string): [boolean, number];

    set_rtsp_state(state: GstRtsp.RTSPState): void;

    set_state(state: Gst.State): boolean;

    set_transport(stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport;
}

export namespace RTSPSessionPool {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        max_sessions: number;
        maxSessions: number;
    }
}

export class RTSPSessionPool extends GObject.Object {
    static $gtype: GObject.GType<RTSPSessionPool>;

    constructor(properties?: Partial<RTSPSessionPool.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPSessionPool.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_sessions: number;
    maxSessions: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'session-removed', callback: (_source: this, object: RTSPSession) => void): number;

    connect_after(signal: 'session-removed', callback: (_source: this, object: RTSPSession) => void): number;

    emit(signal: 'session-removed', object: RTSPSession): void;

    // Constructors

    static ['new'](): RTSPSessionPool;

    // Members

    cleanup(): number;

    create(): RTSPSession | null;

    create_watch(): GLib.Source;

    filter(func?: RTSPSessionPoolFilterFunc | null): RTSPSession[];

    find(sessionid: string): RTSPSession | null;

    get_max_sessions(): number;

    get_n_sessions(): number;

    remove(sess: RTSPSession): boolean;

    set_max_sessions(max: number): void;

    vfunc_create_session_id(): string;

    vfunc_session_removed(session: RTSPSession): void;
}

export namespace RTSPStream {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        control: string;
        profiles: GstRtsp.RTSPProfile;
        protocols: GstRtsp.RTSPLowerTrans;
    }
}

export class RTSPStream extends GObject.Object {
    static $gtype: GObject.GType<RTSPStream>;

    constructor(properties?: Partial<RTSPStream.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPStream.ConstructorProperties>, ...args: any[]): void;

    // Properties
    control: string;
    profiles: GstRtsp.RTSPProfile;
    protocols: GstRtsp.RTSPLowerTrans;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: 'new-rtcp-encoder', callback: (_source: this, object: Gst.Element) => void): number;

    connect_after(signal: 'new-rtcp-encoder', callback: (_source: this, object: Gst.Element) => void): number;

    emit(signal: 'new-rtcp-encoder', object: Gst.Element): void;

    connect(signal: 'new-rtp-encoder', callback: (_source: this, object: Gst.Element) => void): number;

    connect_after(signal: 'new-rtp-encoder', callback: (_source: this, object: Gst.Element) => void): number;

    emit(signal: 'new-rtp-encoder', object: Gst.Element): void;

    connect(signal: 'new-rtp-rtcp-decoder', callback: (_source: this, object: Gst.Element) => void): number;

    connect_after(signal: 'new-rtp-rtcp-decoder', callback: (_source: this, object: Gst.Element) => void): number;

    emit(signal: 'new-rtp-rtcp-decoder', object: Gst.Element): void;

    // Constructors

    static ['new'](idx: number, payloader: Gst.Element, pad: Gst.Pad): RTSPStream;

    // Members

    add_multicast_client_address(
        destination: string,
        rtp_port: number,
        rtcp_port: number,
        family: Gio.SocketFamily
    ): boolean;

    add_transport(trans: RTSPStreamTransport): boolean;

    allocate_udp_sockets(
        family: Gio.SocketFamily,
        transport: GstRtsp.RTSPTransport,
        use_client_settings: boolean
    ): boolean;

    complete_stream(transport: GstRtsp.RTSPTransport): boolean;

    get_address_pool(): RTSPAddressPool | null;

    get_buffer_size(): number;

    get_caps(): Gst.Caps | null;

    get_control(): string | null;

    get_current_seqnum(): number;

    get_dscp_qos(): number;

    get_index(): number;

    get_joined_bin(): Gst.Bin | null;

    get_max_mcast_ttl(): number;

    get_mtu(): number;

    get_multicast_address(family: Gio.SocketFamily): RTSPAddress | null;

    get_multicast_client_addresses(): string;

    get_multicast_iface(): string | null;

    get_profiles(): GstRtsp.RTSPProfile;

    get_protocols(): GstRtsp.RTSPLowerTrans;

    get_pt(): number;

    get_publish_clock_mode(): RTSPPublishClockMode;

    get_rate_control(): boolean;

    get_rates(): [boolean, number | null, number | null];

    get_retransmission_pt(): number;

    get_retransmission_time(): Gst.ClockTime;

    get_rtcp_multicast_socket(family: Gio.SocketFamily): Gio.Socket | null;

    get_rtcp_socket(family: Gio.SocketFamily): Gio.Socket | null;

    get_rtp_multicast_socket(family: Gio.SocketFamily): Gio.Socket | null;

    get_rtp_socket(family: Gio.SocketFamily): Gio.Socket | null;

    get_rtpinfo(): [boolean, number | null, number | null, number | null, Gst.ClockTime];

    get_rtpsession<T = GObject.Object>(): T;

    get_server_port(family: Gio.SocketFamily): GstRtsp.RTSPRange;

    get_sinkpad(): Gst.Pad | null;

    get_srcpad(): Gst.Pad | null;

    get_srtp_encoder(): Gst.Element;

    get_ssrc(): number;

    get_ulpfec_enabled(): boolean;

    get_ulpfec_percentage(): number;

    get_ulpfec_pt(): number;

    handle_keymgmt(keymgmt: string): boolean;

    has_control(control?: string | null): boolean;

    is_bind_mcast_address(): boolean;

    is_blocking(): boolean;

    is_client_side(): boolean;

    is_complete(): boolean;

    is_receiver(): boolean;

    is_sender(): boolean;

    is_transport_supported(transport: GstRtsp.RTSPTransport): boolean;

    join_bin(bin: Gst.Bin, rtpbin: Gst.Element, state: Gst.State): boolean;

    leave_bin(bin: Gst.Bin, rtpbin: Gst.Element): boolean;

    query_position(): [boolean, number];

    query_stop(): [boolean, number];

    recv_rtcp(buffer: Gst.Buffer): Gst.FlowReturn;

    recv_rtp(buffer: Gst.Buffer): Gst.FlowReturn;

    remove_transport(trans: RTSPStreamTransport): boolean;

    request_aux_receiver(sessid: number): Gst.Element | null;

    request_aux_sender(sessid: number): Gst.Element | null;

    request_ulpfec_decoder(rtpbin: Gst.Element, sessid: number): Gst.Element | null;

    request_ulpfec_encoder(sessid: number): Gst.Element | null;

    reserve_address(address: string, port: number, n_ports: number, ttl: number): RTSPAddress | null;

    seekable(): boolean;

    set_address_pool(pool?: RTSPAddressPool | null): void;

    set_bind_mcast_address(bind_mcast_addr: boolean): void;

    set_blocked(blocked: boolean): boolean;

    set_buffer_size(size: number): void;

    set_client_side(client_side: boolean): void;

    set_control(control?: string | null): void;

    set_dscp_qos(dscp_qos: number): void;

    set_max_mcast_ttl(ttl: number): boolean;

    set_mtu(mtu: number): void;

    set_multicast_iface(multicast_iface?: string | null): void;

    set_profiles(profiles: GstRtsp.RTSPProfile): void;

    set_protocols(protocols: GstRtsp.RTSPLowerTrans): void;

    set_pt_map(pt: number, caps: Gst.Caps): void;

    set_publish_clock_mode(mode: RTSPPublishClockMode): void;

    set_rate_control(enabled: boolean): void;

    set_retransmission_pt(rtx_pt: number): void;

    set_retransmission_time(time: Gst.ClockTime): void;

    set_seqnum_offset(seqnum: number): void;

    set_ulpfec_percentage(percentage: number): void;

    set_ulpfec_pt(pt: number): void;

    transport_filter(func?: RTSPStreamTransportFilterFunc | null): RTSPStreamTransport[];

    unblock_linked(): boolean;

    update_crypto(ssrc: number, crypto?: Gst.Caps | null): boolean;

    verify_mcast_ttl(ttl: number): boolean;
}

export namespace RTSPStreamTransport {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
    }
}

export class RTSPStreamTransport extends GObject.Object {
    static $gtype: GObject.GType<RTSPStreamTransport>;

    constructor(properties?: Partial<RTSPStreamTransport.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPStreamTransport.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ['new'](stream: RTSPStream, tr: GstRtsp.RTSPTransport): RTSPStreamTransport;

    // Members

    get_rtpinfo(start_time: Gst.ClockTime): string | null;

    get_stream(): RTSPStream | null;

    get_transport(): GstRtsp.RTSPTransport | null;

    get_url(): GstRtsp.RTSPUrl | null;

    is_timed_out(): boolean;

    keep_alive(): void;

    message_sent(): void;

    recv_data(channel: number, buffer: Gst.Buffer): Gst.FlowReturn;

    send_rtcp(buffer: Gst.Buffer): boolean;

    send_rtcp_list(buffer_list: Gst.BufferList): boolean;

    send_rtp(buffer: Gst.Buffer): boolean;

    send_rtp_list(buffer_list: Gst.BufferList): boolean;

    set_active(active: boolean): boolean;

    set_callbacks(send_rtp: RTSPSendFunc, send_rtcp: RTSPSendFunc, notify?: GLib.DestroyNotify | null): void;

    set_keepalive(keep_alive: RTSPKeepAliveFunc, notify?: GLib.DestroyNotify | null): void;

    set_list_callbacks(
        send_rtp_list: RTSPSendListFunc,
        send_rtcp_list: RTSPSendListFunc,
        notify?: GLib.DestroyNotify | null
    ): void;

    set_message_sent(message_sent: RTSPMessageSentFunc, notify?: GLib.DestroyNotify | null): void;

    set_message_sent_full(message_sent: RTSPMessageSentFuncFull, notify?: GLib.DestroyNotify | null): void;

    set_timed_out(timedout: boolean): void;

    set_transport(tr: GstRtsp.RTSPTransport): void;

    set_url(url?: GstRtsp.RTSPUrl | null): void;
}

export namespace RTSPThreadPool {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        max_threads: number;
        maxThreads: number;
    }
}

export class RTSPThreadPool extends GObject.Object {
    static $gtype: GObject.GType<RTSPThreadPool>;

    constructor(properties?: Partial<RTSPThreadPool.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<RTSPThreadPool.ConstructorProperties>, ...args: any[]): void;

    // Properties
    max_threads: number;
    maxThreads: number;

    // Constructors

    static ['new'](): RTSPThreadPool;

    // Members

    get_max_threads(): number;

    get_thread(type: RTSPThreadType, ctx: RTSPContext): RTSPThread | null;

    set_max_threads(max_threads: number): void;

    vfunc_configure_thread(thread: RTSPThread, ctx: RTSPContext): void;

    vfunc_get_thread(type: RTSPThreadType, ctx: RTSPContext): RTSPThread | null;

    vfunc_thread_enter(thread: RTSPThread): void;

    vfunc_thread_leave(thread: RTSPThread): void;

    static cleanup(): void;
}

export class RTSPAddress {
    static $gtype: GObject.GType<RTSPAddress>;

    constructor(copy: RTSPAddress);

    // Fields
    pool: RTSPAddressPool;
    address: string;
    port: number;
    n_ports: number;
    ttl: number;
    priv: any;

    // Members
    copy(): RTSPAddress;

    free(): void;
}

export class RTSPAddressPoolPrivate {
    static $gtype: GObject.GType<RTSPAddressPoolPrivate>;

    constructor(copy: RTSPAddressPoolPrivate);
}

export class RTSPAuthPrivate {
    static $gtype: GObject.GType<RTSPAuthPrivate>;

    constructor(copy: RTSPAuthPrivate);
}

export class RTSPClientPrivate {
    static $gtype: GObject.GType<RTSPClientPrivate>;

    constructor(copy: RTSPClientPrivate);
}

export class RTSPContext {
    static $gtype: GObject.GType<RTSPContext>;

    constructor(copy: RTSPContext);

    // Fields
    server: RTSPServer;
    conn: GstRtsp.RTSPConnection;
    client: RTSPClient;
    request: GstRtsp.RTSPMessage;
    uri: GstRtsp.RTSPUrl;
    method: GstRtsp.RTSPMethod;
    auth: RTSPAuth;
    token: RTSPToken;
    session: RTSPSession;
    sessmedia: RTSPSessionMedia;
    factory: RTSPMediaFactory;
    media: RTSPMedia;
    stream: RTSPStream;
    response: GstRtsp.RTSPMessage;
    trans: RTSPStreamTransport;

    // Members
    pop_current(): void;

    push_current(): void;
}

export class RTSPMediaFactoryPrivate {
    static $gtype: GObject.GType<RTSPMediaFactoryPrivate>;

    constructor(copy: RTSPMediaFactoryPrivate);
}

export class RTSPMediaFactoryURIPrivate {
    static $gtype: GObject.GType<RTSPMediaFactoryURIPrivate>;

    constructor(copy: RTSPMediaFactoryURIPrivate);
}

export class RTSPMediaPrivate {
    static $gtype: GObject.GType<RTSPMediaPrivate>;

    constructor(copy: RTSPMediaPrivate);
}

export class RTSPMountPointsPrivate {
    static $gtype: GObject.GType<RTSPMountPointsPrivate>;

    constructor(copy: RTSPMountPointsPrivate);
}

export class RTSPOnvifMediaFactoryPrivate {
    static $gtype: GObject.GType<RTSPOnvifMediaFactoryPrivate>;

    constructor(copy: RTSPOnvifMediaFactoryPrivate);
}

export class RTSPOnvifMediaPrivate {
    static $gtype: GObject.GType<RTSPOnvifMediaPrivate>;

    constructor(copy: RTSPOnvifMediaPrivate);
}

export class RTSPPermissions {
    static $gtype: GObject.GType<RTSPPermissions>;

    constructor();
    constructor(copy: RTSPPermissions);

    // Fields
    mini_object: Gst.MiniObject;

    // Constructors
    static ['new'](): RTSPPermissions;

    // Members
    add_permission_for_role(role: string, permission: string, allowed: boolean): void;

    add_role(role: string): void;

    add_role_from_structure(structure: Gst.Structure): void;

    get_role(role: string): Gst.Structure;

    is_allowed(role: string, permission: string): boolean;

    remove_role(role: string): void;
}

export class RTSPServerPrivate {
    static $gtype: GObject.GType<RTSPServerPrivate>;

    constructor(copy: RTSPServerPrivate);
}

export class RTSPSessionMediaPrivate {
    static $gtype: GObject.GType<RTSPSessionMediaPrivate>;

    constructor(copy: RTSPSessionMediaPrivate);
}

export class RTSPSessionPoolPrivate {
    static $gtype: GObject.GType<RTSPSessionPoolPrivate>;

    constructor(copy: RTSPSessionPoolPrivate);
}

export class RTSPSessionPrivate {
    static $gtype: GObject.GType<RTSPSessionPrivate>;

    constructor(copy: RTSPSessionPrivate);
}

export class RTSPStreamPrivate {
    static $gtype: GObject.GType<RTSPStreamPrivate>;

    constructor(copy: RTSPStreamPrivate);
}

export class RTSPStreamTransportPrivate {
    static $gtype: GObject.GType<RTSPStreamTransportPrivate>;

    constructor(copy: RTSPStreamTransportPrivate);
}

export class RTSPThread {
    static $gtype: GObject.GType<RTSPThread>;

    constructor(type: RTSPThreadType);
    constructor(copy: RTSPThread);

    // Fields
    mini_object: Gst.MiniObject;
    type: RTSPThreadType;
    context: GLib.MainContext;
    loop: GLib.MainLoop;

    // Constructors
    static ['new'](type: RTSPThreadType): RTSPThread;

    // Members
    reuse(): boolean;

    stop(): void;
}

export class RTSPThreadPoolPrivate {
    static $gtype: GObject.GType<RTSPThreadPoolPrivate>;

    constructor(copy: RTSPThreadPoolPrivate);
}

export class RTSPToken {
    static $gtype: GObject.GType<RTSPToken>;

    constructor();
    constructor(copy: RTSPToken);

    // Fields
    mini_object: Gst.MiniObject;

    // Constructors
    static ['new'](): RTSPToken;

    // Members
    get_string(field: string): string | null;

    get_structure(): Gst.Structure;

    is_allowed(field: string): boolean;

    set_bool(field: string, bool_value: boolean): void;

    set_string(field: string, string_value: string): void;

    writable_structure(): Gst.Structure;
}

export class SDPInfo {
    static $gtype: GObject.GType<SDPInfo>;

    constructor(
        properties?: Partial<{
            is_ipv6?: boolean;
            server_ip?: string;
        }>
    );

    constructor(copy: SDPInfo);

    // Fields
    is_ipv6: boolean;
    server_ip: string;
}
