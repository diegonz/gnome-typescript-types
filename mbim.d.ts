/**
 * Mbim 1.0
 *
 * Generated from 1.24.4
 */

import * as GLib from "./glib";
import * as GObject from "./gobject";
import * as Gio from "./gio";

export const DBUS_ERROR_PREFIX: string;
export const DEVICE_FILE: string;
export const DEVICE_IN_SESSION: string;
export const DEVICE_SIGNAL_ERROR: string;
export const DEVICE_SIGNAL_INDICATE_STATUS: string;
export const DEVICE_SIGNAL_REMOVED: string;
export const DEVICE_TRANSACTION_ID: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const PROXY_N_CLIENTS: string;
export const PROXY_N_DEVICES: string;
export const PROXY_SOCKET_PATH: string;

export function activation_command_get_string(val: ActivationCommand): string;

export function activation_state_get_string(val: ActivationState): string;

export function atds_provider_array_free(array: AtdsProviderArray): void;

export function atds_provider_plmn_mode_get_string(val: AtdsProviderPlmnMode): string;

export function atds_rat_mode_get_string(val: AtdsRatMode): string;

export function auth_protocol_get_string(val: AuthProtocol): string;

export function cellular_class_build_string_from_mask(mask: CellularClass): string;

export function cid_atds_get_string(val: CidAtds): string;

export function cid_auth_get_string(val: CidAuth): string;

export function cid_basic_connect_get_string(val: CidBasicConnect): string;

export function cid_can_notify(service: Service, cid: number): boolean;

export function cid_can_query(service: Service, cid: number): boolean;

export function cid_can_set(service: Service, cid: number): boolean;

export function cid_dss_get_string(val: CidDss): string;

export function cid_get_printable(service: Service, cid: number): string;

export function cid_intel_firmware_update_get_string(val: CidIntelFirmwareUpdate): string;

export function cid_ms_basic_connect_extensions_get_string(val: CidMsBasicConnectExtensions): string;

export function cid_ms_firmware_id_get_string(val: CidMsFirmwareId): string;

export function cid_ms_host_shutdown_get_string(val: CidMsHostShutdown): string;

export function cid_phonebook_get_string(val: CidPhonebook): string;

export function cid_proxy_control_get_string(val: CidProxyControl): string;

export function cid_qmi_get_string(val: CidQmi): string;

export function cid_sms_get_string(val: CidSms): string;

export function cid_stk_get_string(val: CidStk): string;

export function cid_ussd_get_string(val: CidUssd): string;

export function compression_get_string(val: Compression): string;

export function context_ip_type_get_string(val: ContextIpType): string;

export function context_source_get_string(val: ContextSource): string;

export function context_type_get_string(val: ContextType): string;

export function core_error_get_string(val: CoreError): string;

export function core_error_quark(): GLib.Quark;

export function ctrl_caps_build_string_from_mask(mask: CtrlCaps): string;

export function data_class_build_string_from_mask(mask: DataClass): string;

export function device_service_element_array_free(array: DeviceServiceElementArray): void;

export function device_type_get_string(val: DeviceType): string;

export function dss_link_state_get_string(val: DssLinkState): string;

export function emergency_mode_state_get_string(val: EmergencyModeState): string;

export function event_entry_array_free(array: EventEntryArray): void;

export function ip_configuration_available_flag_build_string_from_mask(mask: IPConfigurationAvailableFlag): string;

export function ipv4_element_array_free(array: IPv4ElementArray): void;

export function ipv6_element_array_free(array: IPv6ElementArray): void;

export function lte_attach_configuration_array_free(array: LteAttachConfigurationArray): void;

export function lte_attach_context_operation_get_string(val: LteAttachContextOperation): string;

export function lte_attach_context_roaming_control_get_string(val: LteAttachContextRoamingControl): string;

export function lte_attach_state_get_string(val: LteAttachState): string;

export function message_command_type_get_string(val: MessageCommandType): string;

export function message_type_get_string(val: MessageType): string;

export function network_idle_hint_state_get_string(val: NetworkIdleHintState): string;

export function nw_error_get_string(val: NwError): string;

export function packet_filter_array_free(array: PacketFilterArray): void;

export function packet_service_action_get_string(val: PacketServiceAction): string;

export function packet_service_state_get_string(val: PacketServiceState): string;

export function pco_type_get_string(val: PcoType): string;

export function phonebook_entry_array_free(array: PhonebookEntryArray): void;

export function phonebook_flag_get_string(val: PhonebookFlag): string;

export function phonebook_state_get_string(val: PhonebookState): string;

export function phonebook_write_flag_get_string(val: PhonebookWriteFlag): string;

export function pin_format_get_string(val: PinFormat): string;

export function pin_mode_get_string(val: PinMode): string;

export function pin_operation_get_string(val: PinOperation): string;

export function pin_state_get_string(val: PinState): string;

export function pin_type_get_string(val: PinType): string;

export function protocol_error_get_string(val: ProtocolError): string;

export function protocol_error_quark(): GLib.Quark;

export function provider_array_free(array: ProviderArray): void;

export function provider_state_build_string_from_mask(mask: ProviderState): string;

export function provisioned_context_element_array_free(array: ProvisionedContextElementArray): void;

export function radio_switch_state_get_string(val: RadioSwitchState): string;

export function ready_info_flag_build_string_from_mask(mask: ReadyInfoFlag): string;

export function register_action_get_string(val: RegisterAction): string;

export function register_custom_service(uuid: Uuid, nickname: string): number;

export function register_mode_get_string(val: RegisterMode): string;

export function register_state_get_string(val: RegisterState): string;

export function registration_flag_build_string_from_mask(mask: RegistrationFlag): string;

export function service_get_string(val: Service): string;

export function service_id_is_custom(id: number): boolean;

export function service_lookup_name(service: number): string;

export function sim_class_build_string_from_mask(mask: SimClass): string;

export function sms_caps_build_string_from_mask(mask: SmsCaps): string;

export function sms_cdma_encoding_get_string(val: SmsCdmaEncoding): string;

export function sms_cdma_lang_get_string(val: SmsCdmaLang): string;

export function sms_cdma_read_record_array_free(array: SmsCdmaReadRecordArray): void;

export function sms_flag_get_string(val: SmsFlag): string;

export function sms_format_get_string(val: SmsFormat): string;

export function sms_pdu_read_record_array_free(array: SmsPduReadRecordArray): void;

export function sms_status_flag_get_string(val: SmsStatusFlag): string;

export function sms_status_get_string(val: SmsStatus): string;

export function sms_storage_state_get_string(val: SmsStorageState): string;

export function status_error_get_string(val: StatusError): string;

export function status_error_quark(): GLib.Quark;

export function stk_pac_profile_get_string(val: StkPacProfile): string;

export function stk_pac_type_get_string(val: StkPacType): string;

export function subscriber_ready_state_get_string(val: SubscriberReadyState): string;

export function unregister_custom_service(id: number): boolean;

export function ussd_action_get_string(val: UssdAction): string;

export function ussd_response_get_string(val: UssdResponse): string;

export function ussd_session_state_get_string(val: UssdSessionState): string;

export function utils_get_traces_enabled(): boolean;

export function utils_set_traces_enabled(enabled: boolean): void;

export function uuid_from_context_type(context_type: ContextType): Uuid;

export function uuid_from_printable(str: string, uuid: Uuid): boolean;

export function uuid_from_service(service: Service): Uuid;

export function visible_providers_action_get_string(val: VisibleProvidersAction): string;

export function voice_call_state_get_string(val: VoiceCallState): string;

export function voice_class_get_string(val: VoiceClass): string;

export namespace ActivationCommand {
    export const $gtype: GObject.GType<ActivationCommand>;
}

export enum ActivationCommand {
    DEACTIVATE = 0,
    ACTIVATE = 1,
}

export namespace ActivationState {
    export const $gtype: GObject.GType<ActivationState>;
}

export enum ActivationState {
    UNKNOWN = 0,
    ACTIVATED = 1,
    ACTIVATING = 2,
    DEACTIVATED = 3,
    DEACTIVATING = 4,
}

export namespace AtdsProviderPlmnMode {
    export const $gtype: GObject.GType<AtdsProviderPlmnMode>;
}

export enum AtdsProviderPlmnMode {
    GSM = 0,
    UTRAN = 6,
    LTE = 7,
}

export namespace AtdsRatMode {
    export const $gtype: GObject.GType<AtdsRatMode>;
}

export enum AtdsRatMode {
    AUTOMATIC = 0,
    "2G_ONLY" = 1,
    "3G_ONLY" = 2,
    "4G_ONLY" = 3,
}

export namespace AuthProtocol {
    export const $gtype: GObject.GType<AuthProtocol>;
}

export enum AuthProtocol {
    NONE = 0,
    PAP = 1,
    CHAP = 2,
    MSCHAPV2 = 3,
}

export namespace CidAtds {
    export const $gtype: GObject.GType<CidAtds>;
}

export enum CidAtds {
    UNKNOWN = 0,
    SIGNAL = 1,
    LOCATION = 2,
    OPERATORS = 3,
    RAT = 4,
    REGISTER_STATE = 9,
}

export namespace CidAuth {
    export const $gtype: GObject.GType<CidAuth>;
}

export enum CidAuth {
    UNKNOWN = 0,
    AKA = 1,
    AKAP = 2,
    SIM = 3,
}

export namespace CidBasicConnect {
    export const $gtype: GObject.GType<CidBasicConnect>;
}

export enum CidBasicConnect {
    UNKNOWN = 0,
    DEVICE_CAPS = 1,
    SUBSCRIBER_READY_STATUS = 2,
    RADIO_STATE = 3,
    PIN = 4,
    PIN_LIST = 5,
    HOME_PROVIDER = 6,
    PREFERRED_PROVIDERS = 7,
    VISIBLE_PROVIDERS = 8,
    REGISTER_STATE = 9,
    PACKET_SERVICE = 10,
    SIGNAL_STATE = 11,
    CONNECT = 12,
    PROVISIONED_CONTEXTS = 13,
    SERVICE_ACTIVATION = 14,
    IP_CONFIGURATION = 15,
    DEVICE_SERVICES = 16,
    DEVICE_SERVICE_SUBSCRIBE_LIST = 19,
    PACKET_STATISTICS = 20,
    NETWORK_IDLE_HINT = 21,
    EMERGENCY_MODE = 22,
    IP_PACKET_FILTERS = 23,
    MULTICARRIER_PROVIDERS = 24,
}

export namespace CidDss {
    export const $gtype: GObject.GType<CidDss>;
}

export enum CidDss {
    UNKNOWN = 0,
    CONNECT = 1,
}

export namespace CidIntelFirmwareUpdate {
    export const $gtype: GObject.GType<CidIntelFirmwareUpdate>;
}

export enum CidIntelFirmwareUpdate {
    UNKNOWN = 0,
    MODEM_REBOOT = 1,
}

export namespace CidMsBasicConnectExtensions {
    export const $gtype: GObject.GType<CidMsBasicConnectExtensions>;
}

export enum CidMsBasicConnectExtensions {
    UNKNOWN = 0,
    PROVISIONED_CONTEXTS = 1,
    NETWORK_BLACKLIST = 2,
    LTE_ATTACH_CONFIGURATION = 3,
    LTE_ATTACH_STATUS = 4,
    SYS_CAPS = 5,
    DEVICE_CAPS = 6,
    DEVICE_SLOT_MAPPINGS = 7,
    SLOT_INFO_STATUS = 8,
    PCO = 9,
    DEVICE_RESET = 10,
}

export namespace CidMsFirmwareId {
    export const $gtype: GObject.GType<CidMsFirmwareId>;
}

export enum CidMsFirmwareId {
    UNKNOWN = 0,
    GET = 1,
}

export namespace CidMsHostShutdown {
    export const $gtype: GObject.GType<CidMsHostShutdown>;
}

export enum CidMsHostShutdown {
    UNKNOWN = 0,
    NOTIFY = 1,
}

export namespace CidPhonebook {
    export const $gtype: GObject.GType<CidPhonebook>;
}

export enum CidPhonebook {
    UNKNOWN = 0,
    CONFIGURATION = 1,
    READ = 2,
    DELETE = 3,
    WRITE = 4,
}

export namespace CidProxyControl {
    export const $gtype: GObject.GType<CidProxyControl>;
}

export enum CidProxyControl {
    UNKNOWN = 0,
    CONFIGURATION = 1,
}

export namespace CidQmi {
    export const $gtype: GObject.GType<CidQmi>;
}

export enum CidQmi {
    UNKNOWN = 0,
    MSG = 1,
}

export namespace CidSms {
    export const $gtype: GObject.GType<CidSms>;
}

export enum CidSms {
    UNKNOWN = 0,
    CONFIGURATION = 1,
    READ = 2,
    SEND = 3,
    DELETE = 4,
    MESSAGE_STORE_STATUS = 5,
}

export namespace CidStk {
    export const $gtype: GObject.GType<CidStk>;
}

export enum CidStk {
    UNKNOWN = 0,
    PAC = 1,
    TERMINAL_RESPONSE = 2,
    ENVELOPE = 3,
}

export namespace CidUssd {
    export const $gtype: GObject.GType<CidUssd>;
}

export enum CidUssd {
    USSD_UNKNOWN = 0,
    USSD = 1,
}

export namespace Compression {
    export const $gtype: GObject.GType<Compression>;
}

export enum Compression {
    NONE = 0,
    ENABLE = 1,
}

export namespace ContextIpType {
    export const $gtype: GObject.GType<ContextIpType>;
}

export enum ContextIpType {
    DEFAULT = 0,
    IPV4 = 1,
    IPV6 = 2,
    IPV4V6 = 3,
    IPV4_AND_IPV6 = 4,
}

export namespace ContextSource {
    export const $gtype: GObject.GType<ContextSource>;
}

export enum ContextSource {
    ADMIN = 0,
    USER = 1,
    OPERATOR = 2,
    MODEM = 3,
    DEVICE = 4,
}

export namespace ContextType {
    export const $gtype: GObject.GType<ContextType>;
}

export enum ContextType {
    INVALID = 0,
    NONE = 1,
    INTERNET = 2,
    VPN = 3,
    VOICE = 4,
    VIDEO_SHARE = 5,
    PURCHASE = 6,
    IMS = 7,
    MMS = 8,
    LOCAL = 9,
}

export class CoreError extends GLib.Error {
    static $gtype: GObject.GType<CoreError>;

    constructor(options: { message: string; code: number });
    constructor(copy: CoreError);

    // Properties
    static FAILED: number;
    static WRONGSTATE: number;
    static TIMEOUT: number;
    static INVALIDARGS: number;
    static INVALIDMESSAGE: number;
    static UNSUPPORTED: number;
    static ABORTED: number;
    static UNKNOWNSTATE: number;

    // Members
    static get_string(val: CoreError): string;

    static quark(): GLib.Quark;
}

export namespace DeviceType {
    export const $gtype: GObject.GType<DeviceType>;
}

export enum DeviceType {
    UNKNOWN = 0,
    EMBEDDED = 1,
    REMOVABLE = 2,
    REMOTE = 3,
}

export namespace DssLinkState {
    export const $gtype: GObject.GType<DssLinkState>;
}

export enum DssLinkState {
    DEACTIVATE = 0,
    ACTIVATE = 1,
}

export namespace EmergencyModeState {
    export const $gtype: GObject.GType<EmergencyModeState>;
}

export enum EmergencyModeState {
    OFF = 0,
    ON = 1,
}

export namespace LteAttachContextOperation {
    export const $gtype: GObject.GType<LteAttachContextOperation>;
}

export enum LteAttachContextOperation {
    DEFAULT = 0,
    RESTORE_FACTORY = 1,
}

export namespace LteAttachContextRoamingControl {
    export const $gtype: GObject.GType<LteAttachContextRoamingControl>;
}

export enum LteAttachContextRoamingControl {
    HOME = 0,
    PARTNER = 1,
    NON_PARTNER = 2,
}

export namespace LteAttachState {
    export const $gtype: GObject.GType<LteAttachState>;
}

export enum LteAttachState {
    DETACHED = 0,
    ATTACHED = 1,
}

export namespace MessageCommandType {
    export const $gtype: GObject.GType<MessageCommandType>;
}

export enum MessageCommandType {
    UNKNOWN = -1,
    QUERY = 0,
    SET = 1,
}

export namespace MessageType {
    export const $gtype: GObject.GType<MessageType>;
}

export enum MessageType {
    INVALID = 0,
    OPEN = 1,
    CLOSE = 2,
    COMMAND = 3,
    HOST_ERROR = 4,
    OPEN_DONE = 2147483649,
    CLOSE_DONE = 2147483650,
    COMMAND_DONE = 2147483651,
    FUNCTION_ERROR = 2147483652,
    INDICATE_STATUS = 2147483655,
}

export namespace NetworkIdleHintState {
    export const $gtype: GObject.GType<NetworkIdleHintState>;
}

export enum NetworkIdleHintState {
    DISABLED = 0,
    ENABLED = 1,
}

export namespace NwError {
    export const $gtype: GObject.GType<NwError>;
}

export enum NwError {
    UNKNOWN = 0,
    IMSI_UNKNOWN_IN_HLR = 2,
    ILLEGAL_MS = 3,
    IMSI_UNKNOWN_IN_VLR = 4,
    IMEI_NOT_ACCEPTED = 5,
    ILLEGAL_ME = 6,
    GPRS_NOT_ALLOWED = 7,
    GPRS_AND_NON_GPRS_NOT_ALLOWED = 8,
    MS_IDENTITY_NOT_DERIVED_BY_NETWORK = 9,
    IMPLICITLY_DETACHED = 10,
    PLMN_NOT_ALLOWED = 11,
    LOCATION_AREA_NOT_ALLOWED = 12,
    ROAMING_NOT_ALLOWED_IN_LOCATION_AREA = 13,
    GPRS_NOT_ALLOWED_IN_PLMN = 14,
    NO_CELLS_IN_LOCATION_AREA = 15,
    MSC_TEMPORARILY_NOT_REACHABLE = 16,
    NETWORK_FAILURE = 17,
    MAC_FAILURE = 20,
    SYNCH_FAILURE = 21,
    CONGESTION = 22,
    GSM_AUTHENTICATION_UNACCEPTABLE = 23,
    NOT_AUTHORIZED_FOR_CSG = 25,
    INSUFFICIENT_RESOURCES = 26,
    MISSING_OR_UNKNOWN_APN = 27,
    UNKNOWN_PDP_ADDRESS_OR_TYPE = 28,
    USER_AUTHENTICATION_FAILED = 29,
    ACTIVATION_REJECTED_BY_GGSN_OR_GW = 30,
    ACTIVATION_REJECTED_UNSPECIFIED = 31,
    SERVICE_OPTION_NOT_SUPPORTED = 32,
    REQUESTED_SERVICE_OPTION_NOT_SUBSCRIBED = 33,
    SERVICE_OPTION_TEMPORARILY_OUT_OF_ORDER = 34,
    NO_PDP_CONTEXT_ACTIVATED = 40,
    PDP_TYPE_IPV4_ONLY_ALLOWED = 50,
    PDP_TYPE_IPV6_ONLY_ALLOWED = 51,
    MAXIMUM_NUMBER_OF_PDP_CONTEXTS_REACHED = 65,
    REQUESTED_APN_NOT_SUPPORTED_IN_CURRENT_RAT_AND_PLMN = 66,
    SEMANTICALLY_INCORRECT_MESSAGE = 95,
    INVALID_MANDATORY_INFORMATION = 96,
    MESSAGE_TYPE_NON_EXISTENT_OR_NOT_IMPLEMENTED = 97,
    MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 98,
    INFORMATION_ELEMENT_NON_EXISTENT_OR_NOT_IMPLEMENTED = 99,
    CONDITIONAL_IE_ERROR = 100,
    MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 101,
    PROTOCOL_ERROR_UNSPECIFIED = 111,
    APN_RESTRICTION_VALUE_INCOMPATIBLE_WITH_ACTIVE_PDP_CONTEXT = 112,
    MULTIPLE_ACCESSES_TO_A_PDN_CONNECTION_NOT_ALLOWED = 113,
}

export namespace PacketServiceAction {
    export const $gtype: GObject.GType<PacketServiceAction>;
}

export enum PacketServiceAction {
    ATTACH = 0,
    DETACH = 1,
}

export namespace PacketServiceState {
    export const $gtype: GObject.GType<PacketServiceState>;
}

export enum PacketServiceState {
    UNKNOWN = 0,
    ATTACHING = 1,
    ATTACHED = 2,
    DETACHING = 3,
    DETACHED = 4,
}

export namespace PcoType {
    export const $gtype: GObject.GType<PcoType>;
}

export enum PcoType {
    COMPLETE = 0,
    PARTIAL = 1,
}

export namespace PhonebookFlag {
    export const $gtype: GObject.GType<PhonebookFlag>;
}

export enum PhonebookFlag {
    ALL = 0,
    INDEX = 1,
}

export namespace PhonebookState {
    export const $gtype: GObject.GType<PhonebookState>;
}

export enum PhonebookState {
    NOT_INITIALIZED = 0,
    INITIALIZED = 1,
}

export namespace PhonebookWriteFlag {
    export const $gtype: GObject.GType<PhonebookWriteFlag>;
}

export enum PhonebookWriteFlag {
    UNUSED = 0,
    INDEX = 1,
}

export namespace PinFormat {
    export const $gtype: GObject.GType<PinFormat>;
}

export enum PinFormat {
    UNKNOWN = 0,
    NUMERIC = 1,
    ALPHANUMERIC = 2,
}

export namespace PinMode {
    export const $gtype: GObject.GType<PinMode>;
}

export enum PinMode {
    NOT_SUPPORTED = 0,
    ENABLED = 1,
    DISABLED = 2,
}

export namespace PinOperation {
    export const $gtype: GObject.GType<PinOperation>;
}

export enum PinOperation {
    ENTER = 0,
    ENABLE = 1,
    DISABLE = 2,
    CHANGE = 3,
}

export namespace PinState {
    export const $gtype: GObject.GType<PinState>;
}

export enum PinState {
    UNLOCKED = 0,
    LOCKED = 1,
}

export namespace PinType {
    export const $gtype: GObject.GType<PinType>;
}

export enum PinType {
    UNKNOWN = 0,
    CUSTOM = 1,
    PIN1 = 2,
    PIN2 = 3,
    DEVICE_SIM_PIN = 4,
    DEVICE_FIRST_SIM_PIN = 5,
    NETWORK_PIN = 6,
    NETWORK_SUBSET_PIN = 7,
    SERVICE_PROVIDER_PIN = 8,
    CORPORATE_PIN = 9,
    SUBSIDY_PIN = 10,
    PUK1 = 11,
    PUK2 = 12,
    DEVICE_FIRST_SIM_PUK = 13,
    NETWORK_PUK = 14,
    NETWORK_SUBSET_PUK = 15,
    SERVICE_PROVIDER_PUK = 16,
    CORPORATE_PUK = 17,
}

export class ProtocolError extends GLib.Error {
    static $gtype: GObject.GType<ProtocolError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ProtocolError);

    // Properties
    static INVALID: number;
    static TIMEOUTFRAGMENT: number;
    static FRAGMENTOUTOFSEQUENCE: number;
    static LENGTHMISMATCH: number;
    static DUPLICATEDTID: number;
    static NOTOPENED: number;
    static UNKNOWN: number;
    static CANCEL: number;
    static MAXTRANSFER: number;

    // Members
    static get_string(val: ProtocolError): string;

    static quark(): GLib.Quark;
}

export namespace RadioSwitchState {
    export const $gtype: GObject.GType<RadioSwitchState>;
}

export enum RadioSwitchState {
    OFF = 0,
    ON = 1,
}

export namespace RegisterAction {
    export const $gtype: GObject.GType<RegisterAction>;
}

export enum RegisterAction {
    AUTOMATIC = 0,
    MANUAL = 1,
}

export namespace RegisterMode {
    export const $gtype: GObject.GType<RegisterMode>;
}

export enum RegisterMode {
    UNKNOWN = 0,
    AUTOMATIC = 1,
    MANUAL = 2,
}

export namespace RegisterState {
    export const $gtype: GObject.GType<RegisterState>;
}

export enum RegisterState {
    UNKNOWN = 0,
    DEREGISTERED = 1,
    SEARCHING = 2,
    HOME = 3,
    ROAMING = 4,
    PARTNER = 5,
    DENIED = 6,
}

export namespace Service {
    export const $gtype: GObject.GType<Service>;
}

export enum Service {
    INVALID = 0,
    BASIC_CONNECT = 1,
    SMS = 2,
    USSD = 3,
    PHONEBOOK = 4,
    STK = 5,
    AUTH = 6,
    DSS = 7,
    MS_FIRMWARE_ID = 8,
    MS_HOST_SHUTDOWN = 9,
    PROXY_CONTROL = 10,
    QMI = 11,
    ATDS = 12,
    INTEL_FIRMWARE_UPDATE = 13,
    MS_BASIC_CONNECT_EXTENSIONS = 14,
}

export namespace SmsCdmaEncoding {
    export const $gtype: GObject.GType<SmsCdmaEncoding>;
}

export enum SmsCdmaEncoding {
    OCTET = 0,
    EPM = 1,
    "7BIT_ASCII" = 2,
    LA5 = 3,
    UNICODE = 4,
    SHIFT_JIS = 5,
    KOREAN = 6,
    LATIN_HEBREW = 7,
    LATIN = 8,
    GSM_7BIT = 9,
}

export namespace SmsCdmaLang {
    export const $gtype: GObject.GType<SmsCdmaLang>;
}

export enum SmsCdmaLang {
    UNKNOWN = 0,
    ENGLISH = 1,
    FRENCH = 2,
    SPANISH = 3,
    JAPANESE = 4,
    KOREAN = 5,
    CHINESE = 6,
    HEBREW = 7,
}

export namespace SmsFlag {
    export const $gtype: GObject.GType<SmsFlag>;
}

export enum SmsFlag {
    ALL = 0,
    INDEX = 1,
    NEW = 2,
    OLD = 3,
    SENT = 4,
    DRAFT = 5,
}

export namespace SmsFormat {
    export const $gtype: GObject.GType<SmsFormat>;
}

export enum SmsFormat {
    PDU = 0,
    CDMA = 1,
}

export namespace SmsStatus {
    export const $gtype: GObject.GType<SmsStatus>;
}

export enum SmsStatus {
    NEW = 0,
    OLD = 1,
    DRAFT = 2,
    SENT = 3,
}

export namespace SmsStatusFlag {
    export const $gtype: GObject.GType<SmsStatusFlag>;
}

export enum SmsStatusFlag {
    NONE = 0,
    MESSAGE_STORE_FULL = 1,
    NEW_MESSAGE = 2,
}

export namespace SmsStorageState {
    export const $gtype: GObject.GType<SmsStorageState>;
}

export enum SmsStorageState {
    NOT_INITIALIZED = 0,
    INITIALIZED = 1,
}

export class StatusError extends GLib.Error {
    static $gtype: GObject.GType<StatusError>;

    constructor(options: { message: string; code: number });
    constructor(copy: StatusError);

    // Properties
    static NONE: number;
    static BUSY: number;
    static FAILURE: number;
    static SIMNOTINSERTED: number;
    static BADSIM: number;
    static PINREQUIRED: number;
    static PINDISABLED: number;
    static NOTREGISTERED: number;
    static PROVIDERSNOTFOUND: number;
    static NODEVICESUPPORT: number;
    static PROVIDERNOTVISIBLE: number;
    static DATACLASSNOTAVAILABLE: number;
    static PACKETSERVICEDETACHED: number;
    static MAXACTIVATEDCONTEXTS: number;
    static NOTINITIALIZED: number;
    static VOICECALLINPROGRESS: number;
    static CONTEXTNOTACTIVATED: number;
    static SERVICENOTACTIVATED: number;
    static INVALIDACCESSSTRING: number;
    static INVALIDUSERNAMEPWD: number;
    static RADIOPOWEROFF: number;
    static INVALIDPARAMETERS: number;
    static READFAILURE: number;
    static WRITEFAILURE: number;
    static NOPHONEBOOK: number;
    static PARAMETERTOOLONG: number;
    static STKBUSY: number;
    static OPERATIONNOTALLOWED: number;
    static MEMORYFAILURE: number;
    static INVALIDMEMORYINDEX: number;
    static MEMORYFULL: number;
    static FILTERNOTSUPPORTED: number;
    static DSSINSTANCELIMIT: number;
    static INVALIDDEVICESERVICEOPERATION: number;
    static AUTHINCORRECTAUTH: number;
    static AUTHSYNCFAILURE: number;
    static AUTHAMFNOTSET: number;
    static CONTEXTNOTSUPPORTED: number;
    static SMSUNKNOWNSMSCADDRESS: number;
    static SMSNETWORKTIMEOUT: number;
    static SMSLANGNOTSUPPORTED: number;
    static SMSENCODINGNOTSUPPORTED: number;
    static SMSFORMATNOTSUPPORTED: number;

    // Members
    static get_string(val: StatusError): string;

    static quark(): GLib.Quark;
}

export namespace StkPacProfile {
    export const $gtype: GObject.GType<StkPacProfile>;
}

export enum StkPacProfile {
    NOT_HANDLED_BY_FUNCTION_HANDLED_BY_HOST = 0,
    NOT_HANDLED_BY_FUNCTION_MAY_BE_HANDLED_BY_HOST = 1,
    HANDLED_BY_FUNCTION_ONLY_TRANSPARENT_TO_HOST = 2,
    HANDLED_BY_FUNCTION_NOTIFICATION_TO_HOST_POSSIBLE = 3,
    HANDLED_BY_FUNCTION_NOTIFICATIONS_TO_HOST_ENABLED = 4,
    HANDLED_BY_FUNCTION_CAN_BE_OVERRIDEN_BY_HOST = 5,
    HANDLED_BY_HOST_FUNCTION_NOT_ABLE_TO_HANDLE = 6,
    HANDLED_BY_HOST_FUNCTION_ABLE_TO_HANDLE = 7,
}

export namespace StkPacType {
    export const $gtype: GObject.GType<StkPacType>;
}

export enum StkPacType {
    PROACTIVE_COMMAND = 0,
    NOTIFICATION = 1,
}

export namespace SubscriberReadyState {
    export const $gtype: GObject.GType<SubscriberReadyState>;
}

export enum SubscriberReadyState {
    NOT_INITIALIZED = 0,
    INITIALIZED = 1,
    SIM_NOT_INSERTED = 2,
    BAD_SIM = 3,
    FAILURE = 4,
    NOT_ACTIVATED = 5,
    DEVICE_LOCKED = 6,
}

export namespace UssdAction {
    export const $gtype: GObject.GType<UssdAction>;
}

export enum UssdAction {
    INITIATE = 0,
    CONTINUE = 1,
    CANCEL = 2,
}

export namespace UssdResponse {
    export const $gtype: GObject.GType<UssdResponse>;
}

export enum UssdResponse {
    NO_ACTION_REQUIRED = 0,
    ACTION_REQUIRED = 1,
    TERMINATED_BY_NETWORK = 2,
    OTHER_LOCAL_CLIENT = 3,
    OPERATION_NOT_SUPPORTED = 4,
    NETWORK_TIMEOUT = 5,
}

export namespace UssdSessionState {
    export const $gtype: GObject.GType<UssdSessionState>;
}

export enum UssdSessionState {
    NEW_SESSION = 0,
    EXISTING_SESSION = 1,
}

export namespace VisibleProvidersAction {
    export const $gtype: GObject.GType<VisibleProvidersAction>;
}

export enum VisibleProvidersAction {
    FULL_SCAN = 0,
    RESTRICTED_SCAN = 1,
}

export namespace VoiceCallState {
    export const $gtype: GObject.GType<VoiceCallState>;
}

export enum VoiceCallState {
    NONE = 0,
    IN_PROGRESS = 1,
    HANG_UP = 2,
}

export namespace VoiceClass {
    export const $gtype: GObject.GType<VoiceClass>;
}

export enum VoiceClass {
    UNKNOWN = 0,
    NO_VOICE = 1,
    SEPARATED_VOICE_DATA = 2,
    SIMULTANEOUS_VOICE_DATA = 3,
}

export namespace CellularClass {
    export const $gtype: GObject.GType<CellularClass>;
}

export enum CellularClass {
    GSM = 1,
    CDMA = 2,
}

export namespace CtrlCaps {
    export const $gtype: GObject.GType<CtrlCaps>;
}

export enum CtrlCaps {
    REG_MANUAL = 1,
    HW_RADIO_SWITCH = 2,
    CDMA_MOBILE_IP = 4,
    CDMA_SIMPLE_IP = 8,
    MULTI_CARRIER = 16,
}

export namespace DataClass {
    export const $gtype: GObject.GType<DataClass>;
}

export enum DataClass {
    GPRS = 1,
    EDGE = 2,
    UMTS = 4,
    HSDPA = 8,
    HSUPA = 16,
    LTE = 32,
    "1XRTT" = 65536,
    "1XEVDO" = 131072,
    "1XEVDO_REVA" = 262144,
    "1XEVDV" = 524288,
    "3XRTT" = 1048576,
    "1XEVDO_REVB" = 2097152,
    UMB = 4194304,
    CUSTOM = 2147483648,
}

export namespace DeviceOpenFlags {
    export const $gtype: GObject.GType<DeviceOpenFlags>;
}

export enum DeviceOpenFlags {
    NONE = 0,
    PROXY = 1,
}

export namespace IPConfigurationAvailableFlag {
    export const $gtype: GObject.GType<IPConfigurationAvailableFlag>;
}

export enum IPConfigurationAvailableFlag {
    NONE = 0,
    ADDRESS = 1,
    GATEWAY = 2,
    DNS = 4,
    MTU = 8,
}

export namespace ProviderState {
    export const $gtype: GObject.GType<ProviderState>;
}

export enum ProviderState {
    UNKNOWN = 0,
    HOME = 1,
    FORBIDDEN = 2,
    PREFERRED = 4,
    VISIBLE = 8,
    REGISTERED = 16,
    PREFERRED_MULTICARRIER = 32,
}

export namespace ReadyInfoFlag {
    export const $gtype: GObject.GType<ReadyInfoFlag>;
}

export enum ReadyInfoFlag {
    NONE = 0,
    PROTECT_UNIQUE_ID = 1,
}

export namespace RegistrationFlag {
    export const $gtype: GObject.GType<RegistrationFlag>;
}

export enum RegistrationFlag {
    NONE = 0,
    MANUAL_SELECTION_NOT_AVAILABLE = 1,
    PACKET_SERVICE_AUTOMATIC_ATTACH = 2,
}

export namespace SimClass {
    export const $gtype: GObject.GType<SimClass>;
}

export enum SimClass {
    LOGICAL = 1,
    REMOVABLE = 2,
}

export namespace SmsCaps {
    export const $gtype: GObject.GType<SmsCaps>;
}

export enum SmsCaps {
    PDU_RECEIVE = 1,
    PDU_SEND = 2,
    TEXT_RECEIVE = 4,
    TEXT_SEND = 8,
}

export module Device {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        device_file: Gio.File;
        deviceFile: Gio.File;
        device_in_session: boolean;
        deviceInSession: boolean;
        device_transaction_id: number;
        deviceTransactionId: number;
    }
}

export class Device extends GObject.Object implements Gio.AsyncInitable<Device> {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Properties
    device_file: Gio.File;
    deviceFile: Gio.File;
    device_in_session: boolean;
    deviceInSession: boolean;
    device_transaction_id: number;
    deviceTransactionId: number;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "device-error", callback: (_source: this, object: GLib.Error) => void): number;

    connect_after(signal: "device-error", callback: (_source: this, object: GLib.Error) => void): number;

    emit(signal: "device-error", object: GLib.Error): void;

    connect(signal: "device-indicate-status", callback: (_source: this, object: Message) => void): number;

    connect_after(signal: "device-indicate-status", callback: (_source: this, object: Message) => void): number;

    emit(signal: "device-indicate-status", object: Message): void;

    connect(signal: "device-removed", callback: (_source: this) => void): number;

    connect_after(signal: "device-removed", callback: (_source: this) => void): number;

    emit(signal: "device-removed"): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): Device;
    static new_finish(...args: never[]): never;

    // Members

    close(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    close_finish(res: Gio.AsyncResult): boolean;

    close_force(): boolean;

    command(
        message: Message,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    command_finish(res: Gio.AsyncResult): Message;

    get_next_transaction_id(): number;

    get_path(): string;

    get_path_display(): string;

    get_transaction_id(): number;

    is_open(): boolean;

    open(timeout: number, cancellable?: Gio.Cancellable | null, callback?: Gio.AsyncReadyCallback<this> | null): void;

    open_finish(res: Gio.AsyncResult): boolean;

    open_full(
        flags: DeviceOpenFlags,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    open_full_finish(res: Gio.AsyncResult): boolean;

    static new(
        file: Gio.File,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<Device> | null
    ): void;

    // Implemented Members

    init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    init_finish(res: Gio.AsyncResult): boolean;

    new_finish(res: Gio.AsyncResult): Device;

    vfunc_init_async(
        io_priority: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    vfunc_init_finish(res: Gio.AsyncResult): boolean;
}

export module Proxy {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        mbim_proxy_n_clients: number;
        mbimProxyNClients: number;
        mbim_proxy_n_devices: number;
        mbimProxyNDevices: number;
    }
}

export class Proxy extends GObject.Object {
    static $gtype: GObject.GType<Proxy>;

    constructor(properties?: Partial<Proxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Proxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    mbim_proxy_n_clients: number;
    mbimProxyNClients: number;
    mbim_proxy_n_devices: number;
    mbimProxyNDevices: number;

    // Fields
    priv: ProxyPrivate;

    // Constructors

    static ["new"](): Proxy;
}

export class AtdsProvider {
    static $gtype: GObject.GType<AtdsProvider>;

    constructor(
        properties?: Partial<{
            provider_id?: string;
            provider_state?: number;
            provider_name?: string;
            plmn_mode?: number;
            rssi?: number;
            error_rate?: number;
        }>
    );
    constructor(copy: AtdsProvider);

    // Fields
    provider_id: string;
    provider_state: number;
    provider_name: string;
    plmn_mode: number;
    rssi: number;
    error_rate: number;

    // Members
    static array_free(array: AtdsProviderArray): void;
}

export class DevicePrivate {
    static $gtype: GObject.GType<DevicePrivate>;

    constructor(copy: DevicePrivate);
}

export class DeviceServiceElement {
    static $gtype: GObject.GType<DeviceServiceElement>;

    constructor(copy: DeviceServiceElement);

    // Fields
    device_service_id: Uuid;
    dss_payload: number;
    max_dss_instances: number;
    cids_count: number;
    cids: number;

    // Members
    static array_free(array: DeviceServiceElementArray): void;
}

export class EventEntry {
    static $gtype: GObject.GType<EventEntry>;

    constructor(copy: EventEntry);

    // Fields
    device_service_id: Uuid;
    cids_count: number;
    cids: number;

    // Members
    static array_free(array: EventEntryArray): void;
}

export class IPv4 {
    static $gtype: GObject.GType<IPv4>;

    constructor(copy: IPv4);

    // Fields
    addr: Uint8Array;
}

export class IPv4Element {
    static $gtype: GObject.GType<IPv4Element>;

    constructor(copy: IPv4Element);

    // Fields
    on_link_prefix_length: number;
    ipv4_address: IPv4;

    // Members
    static array_free(array: IPv4ElementArray): void;
}

export class IPv6 {
    static $gtype: GObject.GType<IPv6>;

    constructor(copy: IPv6);

    // Fields
    addr: Uint8Array;
}

export class IPv6Element {
    static $gtype: GObject.GType<IPv6Element>;

    constructor(copy: IPv6Element);

    // Fields
    on_link_prefix_length: number;
    ipv6_address: IPv6;

    // Members
    static array_free(array: IPv6ElementArray): void;
}

export class LteAttachConfiguration {
    static $gtype: GObject.GType<LteAttachConfiguration>;

    constructor(
        properties?: Partial<{
            ip_type?: number;
            roaming?: number;
            source?: number;
            access_string?: string;
            user_name?: string;
            password?: string;
            compression?: number;
            auth_protocol?: number;
        }>
    );
    constructor(copy: LteAttachConfiguration);

    // Fields
    ip_type: number;
    roaming: number;
    source: number;
    access_string: string;
    user_name: string;
    password: string;
    compression: number;
    auth_protocol: number;

    // Members
    static array_free(array: LteAttachConfigurationArray): void;
}

export class LteAttachStatus {
    static $gtype: GObject.GType<LteAttachStatus>;

    constructor(
        properties?: Partial<{
            lte_attach_state?: number;
            ip_type?: number;
            access_string?: string;
            user_name?: string;
            password?: string;
            compression?: number;
            auth_protocol?: number;
        }>
    );
    constructor(copy: LteAttachStatus);

    // Fields
    lte_attach_state: number;
    ip_type: number;
    access_string: string;
    user_name: string;
    password: string;
    compression: number;
    auth_protocol: number;

    // Members
    free(): void;
}

export class Message {
    static $gtype: GObject.GType<Message>;

    constructor();
    constructor(copy: Message);

    // Constructors
    static atds_location_query_new(): Message;

    static atds_operators_query_new(): Message;

    static atds_rat_query_new(): Message;

    static atds_rat_set_new(mode: AtdsRatMode): Message;

    static atds_register_state_query_new(): Message;

    static atds_signal_query_new(): Message;

    static auth_aka_query_new(rand: Uint8Array | string, autn: Uint8Array | string): Message;

    static auth_akap_query_new(rand: Uint8Array | string, autn: Uint8Array | string, network_name: string): Message;

    static auth_sim_query_new(
        rand1: Uint8Array | string,
        rand2: Uint8Array | string,
        rand3: Uint8Array | string,
        n: number
    ): Message;

    static close_done_new(transaction_id: number, error_status_code: StatusError): Message;

    static close_new(transaction_id: number): Message;

    static command_new(
        transaction_id: number,
        service: Service,
        cid: number,
        command_type: MessageCommandType
    ): Message;

    static connect_query_new(
        session_id: number,
        activation_state: ActivationState,
        voice_call_state: VoiceCallState,
        ip_type: ContextIpType,
        context_type: Uuid,
        nw_error: number
    ): Message;

    static connect_set_new(
        session_id: number,
        activation_command: ActivationCommand,
        access_string: string,
        user_name: string,
        password: string,
        compression: Compression,
        auth_protocol: AuthProtocol,
        ip_type: ContextIpType,
        context_type: Uuid
    ): Message;

    static device_caps_query_new(): Message;

    static device_service_subscribe_list_set_new(events_count: number, events: EventEntry): Message;

    static device_service_subscriber_list_set_new(events_count: number, events: EventEntry): Message;

    static device_services_query_new(): Message;

    static dss_connect_set_new(device_service_id: Uuid, dss_session_id: number, dss_link_state: DssLinkState): Message;

    static emergency_mode_query_new(): Message;

    static emergency_mode_set_new(state: EmergencyModeState): Message;

    static error_new(transaction_id: number, error_status_code: ProtocolError): Message;

    static function_error_new(transaction_id: number, error_status_code: ProtocolError): Message;

    static home_provider_query_new(): Message;

    static home_provider_set_new(provider: Provider): Message;

    static intel_firmware_update_modem_reboot_set_new(): Message;

    static ip_configuration_query_new(
        session_id: number,
        ipv4_configuration_available: IPConfigurationAvailableFlag,
        ipv6_configuration_available: IPConfigurationAvailableFlag,
        ipv4_address_count: number,
        ipv4_address: IPv4Element[],
        ipv6_address_count: number,
        ipv6_address: IPv6Element[],
        ipv4_gateway: IPv4,
        ipv6_gateway: IPv6,
        ipv4_dns_server_count: number,
        ipv4_dns_server: IPv4[],
        ipv6_dns_server_count: number,
        ipv6_dns_server: IPv6[],
        ipv4_mtu: number,
        ipv6_mtu: number
    ): Message;

    static ip_packet_filters_query_new(
        session_id: number,
        packet_filters_count: number,
        packet_filters: PacketFilter
    ): Message;

    static ip_packet_filters_set_new(
        session_id: number,
        packet_filters_count: number,
        packet_filters: PacketFilter
    ): Message;

    static ms_basic_connect_extensions_lte_attach_configuration_query_new(): Message;

    static ms_basic_connect_extensions_lte_attach_configuration_set_new(
        operation: LteAttachContextOperation,
        configuration_count: number,
        configurations: LteAttachConfiguration
    ): Message;

    static ms_basic_connect_extensions_lte_attach_status_query_new(): Message;

    static ms_basic_connect_extensions_pco_query_new(pco_value: PcoValue): Message;

    static ms_firmware_id_get_query_new(): Message;

    static ms_host_shutdown_notify_set_new(): Message;

    static multicarrier_providers_query_new(): Message;

    static multicarrier_providers_set_new(providers_count: number, providers: Provider): Message;

    static network_idle_hint_query_new(): Message;

    static network_idle_hint_set_new(state: NetworkIdleHintState): Message;

    static ["new"](data: number, data_length: number): Message;

    static open_done_new(transaction_id: number, error_status_code: StatusError): Message;

    static open_new(transaction_id: number, max_control_transfer: number): Message;

    static packet_service_query_new(): Message;

    static packet_service_set_new(packet_service_action: PacketServiceAction): Message;

    static packet_statistics_query_new(): Message;

    static phonebook_configuration_query_new(): Message;

    static phonebook_delete_set_new(filter_flag: PhonebookFlag, filter_message_index: number): Message;

    static phonebook_read_query_new(filter_flag: PhonebookFlag, filter_message_index: number): Message;

    static phonebook_write_set_new(
        save_flag: PhonebookWriteFlag,
        save_index: number,
        number: string,
        name: string
    ): Message;

    static pin_list_query_new(): Message;

    static pin_query_new(): Message;

    static pin_set_new(pin_type: PinType, pin_operation: PinOperation, pin: string, new_pin: string): Message;

    static preferred_providers_query_new(): Message;

    static preferred_providers_set_new(providers_count: number, providers: Provider): Message;

    static provisioned_contexts_query_new(): Message;

    static provisioned_contexts_set_new(
        context_id: number,
        context_type: Uuid,
        access_string: string,
        user_name: string,
        password: string,
        compression: Compression,
        auth_protocol: AuthProtocol,
        provider_id: string
    ): Message;

    static proxy_control_configuration_set_new(device_path: string, timeout: number): Message;

    static qmi_msg_set_new(qmi_msg: Uint8Array | string): Message;

    static radio_state_query_new(): Message;

    static radio_state_set_new(radio_state: RadioSwitchState): Message;

    static register_state_query_new(): Message;

    static register_state_set_new(provider_id: string, register_action: RegisterAction, data_class: DataClass): Message;

    static service_activation_set_new(buffer: Uint8Array | string): Message;

    static signal_state_query_new(): Message;

    static signal_state_set_new(
        signal_strength_interval: number,
        rssi_threshold: number,
        error_rate_threshold: number
    ): Message;

    static sms_configuration_query_new(): Message;

    static sms_configuration_set_new(format: SmsFormat, sc_address: string): Message;

    static sms_delete_set_new(flag: SmsFlag, message_index: number): Message;

    static sms_message_store_status_query_new(): Message;

    static sms_read_query_new(format: SmsFormat, flag: SmsFlag, message_index: number): Message;

    static sms_send_set_new(format: SmsFormat, pdu_message: SmsPduSendRecord, cdma_message: SmsCdmaSendRecord): Message;

    static stk_envelope_query_new(): Message;

    static stk_envelope_set_new(data: Uint8Array | string): Message;

    static stk_pac_query_new(): Message;

    static stk_pac_set_new(pac_host_control: Uint8Array | string): Message;

    static stk_terminal_response_set_new(response: Uint8Array | string): Message;

    static subscriber_ready_status_query_new(): Message;

    static ussd_set_new(action: UssdAction, data_coding_scheme: number, payload: Uint8Array | string): Message;

    static visible_providers_query_new(action: VisibleProvidersAction): Message;

    // Members
    atds_location_response_parse(): [boolean, number | null, number | null, number | null];

    atds_operators_response_parse(): [boolean, number | null, AtdsProvider[] | null];

    atds_rat_response_parse(): [boolean, AtdsRatMode | null];

    atds_register_state_response_parse(): [
        boolean,
            NwError | null,
            RegisterState | null,
            RegisterMode | null,
            DataClass | null,
            CellularClass | null,
            string | null,
            string | null,
            string | null,
            RegistrationFlag | null
    ];

    atds_signal_response_parse(): [
        boolean,
            number | null,
            number | null,
            number | null,
            number | null,
            number | null,
            number | null,
            number | null
    ];

    auth_aka_response_parse(): [
        boolean,
            Uint8Array | null,
            number | null,
            Uint8Array | null,
            Uint8Array | null,
            Uint8Array | null
    ];

    auth_akap_response_parse(): [
        boolean,
            Uint8Array | null,
            number | null,
            Uint8Array | null,
            Uint8Array | null,
            Uint8Array | null
    ];

    auth_sim_response_parse(): [
        boolean,
            number | null,
            number | null,
            number | null,
            number | null,
            number | null,
            number | null,
            number | null
    ];

    close_done_get_result(): boolean;

    close_done_get_status_code(): StatusError;

    command_append(buffer: number, buffer_size: number): void;

    command_done_get_cid(): number;

    command_done_get_raw_information_buffer(): [number, number];

    command_done_get_result(): boolean;

    command_done_get_service(): Service;

    command_done_get_service_id(): Uuid;

    command_done_get_status_code(): StatusError;

    command_get_cid(): number;

    command_get_command_type(): MessageCommandType;

    command_get_raw_information_buffer(): [number, number];

    command_get_service(): Service;

    command_get_service_id(): Uuid;

    connect_notification_parse(): [
        boolean,
            number | null,
            ActivationState | null,
            VoiceCallState | null,
            ContextIpType | null,
            Uuid | null,
            number | null
    ];

    connect_response_parse(): [
        boolean,
            number | null,
            ActivationState | null,
            VoiceCallState | null,
            ContextIpType | null,
            Uuid | null,
            number | null
    ];

    device_caps_response_parse(): [
        boolean,
            DeviceType | null,
            CellularClass | null,
            VoiceClass | null,
            SimClass | null,
            DataClass | null,
            SmsCaps | null,
            CtrlCaps | null,
            number | null,
            string | null,
            string | null,
            string | null,
            string | null
    ];

    device_service_subscribe_list_response_parse(): [boolean, number | null, EventEntry[] | null];

    device_service_subscriber_list_response_parse(events_count: number, events: EventEntry): boolean;

    device_services_response_parse(): [boolean, number | null, number | null, DeviceServiceElement[] | null];

    dss_connect_response_parse(): boolean;

    dup(): Message;

    emergency_mode_notification_parse(): [boolean, EmergencyModeState | null];

    emergency_mode_response_parse(): [boolean, EmergencyModeState | null];

    error_get_error(): GLib.Error;

    error_get_error_status_code(): ProtocolError;

    get_message_length(): number;

    get_message_type(): MessageType;

    get_printable(line_prefix: string, headers_only: boolean): string;

    get_raw(): [number, number];

    get_transaction_id(): number;

    home_provider_response_parse(): [boolean, Provider | null];

    indicate_status_get_cid(): number;

    indicate_status_get_raw_information_buffer(): [number, number];

    indicate_status_get_service(): Service;

    indicate_status_get_service_id(): Uuid;

    ip_configuration_notification_parse(): [
        boolean,
            number | null,
            IPConfigurationAvailableFlag | null,
            IPConfigurationAvailableFlag | null,
            number | null,
            IPv4Element[] | null,
            number | null,
            IPv6Element[] | null,
            IPv4 | null,
            IPv6 | null,
            number | null,
            IPv4[] | null,
            number | null,
            IPv6[] | null,
            number | null,
            number | null
    ];

    ip_configuration_response_parse(): [
        boolean,
            number | null,
            IPConfigurationAvailableFlag | null,
            IPConfigurationAvailableFlag | null,
            number | null,
            IPv4Element[] | null,
            number | null,
            IPv6Element[] | null,
            IPv4 | null,
            IPv6 | null,
            number | null,
            IPv4[] | null,
            number | null,
            IPv6[] | null,
            number | null,
            number | null
    ];

    ip_packet_filters_response_parse(): [boolean, number | null, number | null, PacketFilter[] | null];

    ms_basic_connect_extensions_lte_attach_configuration_notification_parse(): [
        boolean,
            number | null,
            LteAttachConfiguration[] | null
    ];

    ms_basic_connect_extensions_lte_attach_configuration_response_parse(): [
        boolean,
            number | null,
            LteAttachConfiguration[] | null
    ];

    ms_basic_connect_extensions_lte_attach_status_notification_parse(): [boolean, LteAttachStatus | null];

    ms_basic_connect_extensions_lte_attach_status_response_parse(): [boolean, LteAttachStatus | null];

    ms_basic_connect_extensions_pco_notification_parse(): [boolean, PcoValue | null];

    ms_basic_connect_extensions_pco_response_parse(): [boolean, PcoValue | null];

    ms_firmware_id_get_response_parse(): [boolean, Uuid | null];

    multicarrier_providers_notification_parse(): [boolean, number | null, Provider[] | null];

    multicarrier_providers_response_parse(): [boolean, number | null, Provider[] | null];

    network_idle_hint_response_parse(): [boolean, NetworkIdleHintState | null];

    open_done_get_result(): boolean;

    open_done_get_status_code(): StatusError;

    open_get_max_control_transfer(): number;

    packet_service_notification_parse(): [
        boolean,
            number | null,
            PacketServiceState | null,
            DataClass | null,
            number | null,
            number | null
    ];

    packet_service_response_parse(): [
        boolean,
            number | null,
            PacketServiceState | null,
            DataClass | null,
            number | null,
            number | null
    ];

    packet_statistics_response_parse(): [
        boolean,
            number | null,
            number | null,
            number | null,
            number | null,
            number | null,
            number | null,
            number | null,
            number | null
    ];

    phonebook_configuration_notification_parse(): [
        boolean,
            PhonebookState | null,
            number | null,
            number | null,
            number | null,
            number | null
    ];

    phonebook_configuration_response_parse(): [
        boolean,
            PhonebookState | null,
            number | null,
            number | null,
            number | null,
            number | null
    ];

    phonebook_delete_response_parse(): boolean;

    phonebook_read_response_parse(): [boolean, number | null, PhonebookEntry[] | null];

    phonebook_write_response_parse(): boolean;

    pin_list_response_parse(): [
        boolean,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null,
            PinDesc | null
    ];

    pin_response_parse(): [boolean, PinType | null, PinState | null, number | null];

    preferred_providers_notification_parse(): [boolean, number | null, Provider[] | null];

    preferred_providers_response_parse(): [boolean, number | null, Provider[] | null];

    provisioned_contexts_notification_parse(): [boolean, number | null, ProvisionedContextElement[] | null];

    provisioned_contexts_response_parse(): [boolean, number | null, ProvisionedContextElement[] | null];

    proxy_control_configuration_response_parse(): boolean;

    qmi_msg_notification_parse(): [boolean, Uint8Array | null];

    qmi_msg_response_parse(): [boolean, Uint8Array | null];

    radio_state_notification_parse(): [boolean, RadioSwitchState | null, RadioSwitchState | null];

    radio_state_response_parse(): [boolean, RadioSwitchState | null, RadioSwitchState | null];

    ref(): Message;

    register_state_notification_parse(): [
        boolean,
            NwError | null,
            RegisterState | null,
            RegisterMode | null,
            DataClass | null,
            CellularClass | null,
            string | null,
            string | null,
            string | null,
            RegistrationFlag | null
    ];

    register_state_response_parse(): [
        boolean,
            NwError | null,
            RegisterState | null,
            RegisterMode | null,
            DataClass | null,
            CellularClass | null,
            string | null,
            string | null,
            string | null,
            RegistrationFlag | null
    ];

    response_get_result(expected: MessageType): boolean;

    service_activation_response_parse(): [boolean, NwError | null, Uint8Array | null];

    set_transaction_id(transaction_id: number): void;

    signal_state_notification_parse(): [
        boolean,
            number | null,
            number | null,
            number | null,
            number | null,
            number | null
    ];

    signal_state_response_parse(): [boolean, number | null, number | null, number | null, number | null, number | null];

    sms_configuration_response_parse(): [
        boolean,
            SmsStorageState | null,
            SmsFormat | null,
            number | null,
            number | null,
            string | null
    ];

    sms_delete_response_parse(): boolean;

    sms_message_store_status_notification_parse(): [boolean, SmsStatusFlag | null, number | null];

    sms_message_store_status_response_parse(): [boolean, SmsStatusFlag | null, number | null];

    sms_read_notification_parse(): [
        boolean,
            SmsFormat | null,
            number | null,
            SmsPduReadRecord[] | null,
            SmsCdmaReadRecord[] | null
    ];

    sms_read_response_parse(): [
        boolean,
            SmsFormat | null,
            number | null,
            SmsPduReadRecord[] | null,
            SmsCdmaReadRecord[] | null
    ];

    sms_send_response_parse(): [boolean, number | null];

    stk_envelope_response_parse(): [boolean, Uint8Array | null];

    stk_pac_notification_parse(): [boolean, StkPacType | null, Uint8Array | null];

    stk_pac_response_parse(): [boolean, Uint8Array | null];

    stk_terminal_response_response_parse(): [boolean, Uint8Array | null, number | null];

    subscriber_ready_status_notification_parse(): [
        boolean,
            SubscriberReadyState | null,
            string | null,
            string | null,
            ReadyInfoFlag | null,
            number | null,
            string[] | null
    ];

    subscriber_ready_status_response_parse(): [
        boolean,
            SubscriberReadyState | null,
            string | null,
            string | null,
            ReadyInfoFlag | null,
            number | null,
            string[] | null
    ];

    unref(): void;

    ussd_notification_parse(): [
        boolean,
            UssdResponse | null,
            UssdSessionState | null,
            number | null,
            Uint8Array | null
    ];

    ussd_response_parse(): [boolean, UssdResponse | null, UssdSessionState | null, number | null, Uint8Array | null];

    visible_providers_response_parse(): [boolean, number | null, Provider[] | null];
}

export class PacketFilter {
    static $gtype: GObject.GType<PacketFilter>;

    constructor(
        properties?: Partial<{
            filter_size?: number;
            packet_filter?: number;
            packet_mask?: number;
        }>
    );
    constructor(copy: PacketFilter);

    // Fields
    filter_size: number;
    packet_filter: number;
    packet_mask: number;

    // Members
    static array_free(array: PacketFilterArray): void;
}

export class PcoValue {
    static $gtype: GObject.GType<PcoValue>;

    constructor(
        properties?: Partial<{
            session_id?: number;
            pco_data_size?: number;
            pco_data_type?: number;
            pco_data_buffer?: number;
        }>
    );
    constructor(copy: PcoValue);

    // Fields
    session_id: number;
    pco_data_size: number;
    pco_data_type: number;
    pco_data_buffer: number;

    // Members
    free(): void;
}

export class PhonebookEntry {
    static $gtype: GObject.GType<PhonebookEntry>;

    constructor(
        properties?: Partial<{
            entry_index?: number;
            number?: string;
            name?: string;
        }>
    );
    constructor(copy: PhonebookEntry);

    // Fields
    entry_index: number;
    number: string;
    name: string;

    // Members
    static array_free(array: PhonebookEntryArray): void;
}

export class PinDesc {
    static $gtype: GObject.GType<PinDesc>;

    constructor(
        properties?: Partial<{
            pin_mode?: number;
            pin_format?: number;
            pin_length_min?: number;
            pin_length_max?: number;
        }>
    );
    constructor(copy: PinDesc);

    // Fields
    pin_mode: number;
    pin_format: number;
    pin_length_min: number;
    pin_length_max: number;

    // Members
    free(): void;
}

export class Provider {
    static $gtype: GObject.GType<Provider>;

    constructor(
        properties?: Partial<{
            provider_id?: string;
            provider_state?: number;
            provider_name?: string;
            cellular_class?: number;
            rssi?: number;
            error_rate?: number;
        }>
    );
    constructor(copy: Provider);

    // Fields
    provider_id: string;
    provider_state: number;
    provider_name: string;
    cellular_class: number;
    rssi: number;
    error_rate: number;

    // Members
    free(): void;

    static array_free(array: ProviderArray): void;
}

export class ProvisionedContextElement {
    static $gtype: GObject.GType<ProvisionedContextElement>;

    constructor(copy: ProvisionedContextElement);

    // Fields
    context_id: number;
    context_type: Uuid;
    access_string: string;
    user_name: string;
    password: string;
    compression: number;
    auth_protocol: number;

    // Members
    static array_free(array: ProvisionedContextElementArray): void;
}

export class ProxyPrivate {
    static $gtype: GObject.GType<ProxyPrivate>;

    constructor(copy: ProxyPrivate);
}

export class SmsCdmaReadRecord {
    static $gtype: GObject.GType<SmsCdmaReadRecord>;

    constructor(
        properties?: Partial<{
            message_index?: number;
            message_status?: number;
            address?: string;
            timestamp?: string;
            encoding?: number;
            language?: number;
            encoded_message_size?: number;
            encoded_message?: number;
            encoded_message_size_in_characters?: number;
        }>
    );
    constructor(copy: SmsCdmaReadRecord);

    // Fields
    message_index: number;
    message_status: number;
    address: string;
    timestamp: string;
    encoding: number;
    language: number;
    encoded_message_size: number;
    encoded_message: number;
    encoded_message_size_in_characters: number;

    // Members
    static array_free(array: SmsCdmaReadRecordArray): void;
}

export class SmsCdmaSendRecord {
    static $gtype: GObject.GType<SmsCdmaSendRecord>;

    constructor(
        properties?: Partial<{
            encoding?: number;
            language?: number;
            address?: string;
            encoded_message_size?: number;
            encoded_message?: number;
            encoded_message_size_in_characters?: number;
        }>
    );
    constructor(copy: SmsCdmaSendRecord);

    // Fields
    encoding: number;
    language: number;
    address: string;
    encoded_message_size: number;
    encoded_message: number;
    encoded_message_size_in_characters: number;

    // Members
    free(): void;
}

export class SmsPduReadRecord {
    static $gtype: GObject.GType<SmsPduReadRecord>;

    constructor(
        properties?: Partial<{
            message_index?: number;
            message_status?: number;
            pdu_data_size?: number;
            pdu_data?: number;
        }>
    );
    constructor(copy: SmsPduReadRecord);

    // Fields
    message_index: number;
    message_status: number;
    pdu_data_size: number;
    pdu_data: number;

    // Members
    static array_free(array: SmsPduReadRecordArray): void;
}

export class SmsPduSendRecord {
    static $gtype: GObject.GType<SmsPduSendRecord>;

    constructor(
        properties?: Partial<{
            pdu_data_size?: number;
            pdu_data?: number;
        }>
    );
    constructor(copy: SmsPduSendRecord);

    // Fields
    pdu_data_size: number;
    pdu_data: number;

    // Members
    free(): void;
}

export class Uuid {
    static $gtype: GObject.GType<Uuid>;

    constructor(copy: Uuid);

    // Fields
    a: Uint8Array;
    b: Uint8Array;
    c: Uint8Array;
    d: Uint8Array;
    e: Uint8Array;

    // Members
    cmp(b: Uuid): boolean;

    get_printable(): string;

    to_context_type(): ContextType;

    to_service(): Service;

    static from_context_type(context_type: ContextType): Uuid;

    static from_printable(str: string, uuid: Uuid): boolean;

    static from_service(service: Service): Uuid;
}

export type AtdsProviderArray = AtdsProvider;
export type DeprecatedCidBasicConnect = number;
export type DeprecatedRegistrationFlag = number;
export type DeviceServiceElementArray = DeviceServiceElement;
export type EventEntryArray = EventEntry;
export type IPv4ElementArray = IPv4Element;
export type IPv6ElementArray = IPv6Element;
export type LteAttachConfigurationArray = LteAttachConfiguration;
export type PacketFilterArray = PacketFilter;
export type PhonebookEntryArray = PhonebookEntry;
export type ProviderArray = Provider;
export type ProvisionedContextElementArray = ProvisionedContextElement;
export type SmsCdmaReadRecordArray = SmsCdmaReadRecord;
export type SmsPduReadRecordArray = SmsPduReadRecord;
