/**
 * Qmi 1.0
 *
 * Generated from 1.0
 */
// noinspection JSUnusedGlobalSymbols,SpellCheckingInspection
/* eslint-disable no-unused-vars,@typescript-eslint/no-shadow,@typescript-eslint/adjacent-overload-signatures */

import * as GLib from "./glib";
import * as GObject from "./gobject";
import * as Gio from "./gio";

export const CID_BROADCAST: number;
export const CID_NONE: number;
export const CLIENT_CID: string;
export const CLIENT_DEVICE: string;
export const CLIENT_SERVICE: string;
export const CLIENT_VALID: string;
export const CLIENT_VERSION_MAJOR: string;
export const CLIENT_VERSION_MINOR: string;
export const DBUS_ERROR_PREFIX: string;
export const DEVICE_FILE: string;
export const DEVICE_NODE: string;
export const DEVICE_NO_FILE_CHECK: string;
export const DEVICE_PROXY_PATH: string;
export const DEVICE_SIGNAL_INDICATION: string;
export const DEVICE_SIGNAL_REMOVED: string;
export const DEVICE_WWAN_IFACE: string;
export const MESSAGE_QMUX_MARKER: number;
export const MESSAGE_VENDOR_GENERIC: number;
export const PROXY_N_CLIENTS: string;
export const PROXY_SOCKET_PATH: string;
export const WDS_RATE_UNAVAILABLE: number;

export function core_error_get_string(val: CoreError): string;

export function core_error_quark(): GLib.Quark;

export function ctl_data_format_get_string(val: CtlDataFormat): string;

export function ctl_data_link_protocol_get_string(val: CtlDataLinkProtocol): string;

export function ctl_flag_build_string_from_mask(mask: CtlFlag): string;

export function data_endpoint_type_get_string(val: DataEndpointType): string;

export function device_expected_data_format_get_string(val: DeviceExpectedDataFormat): string;

export function device_open_flags_build_string_from_mask(mask: DeviceOpenFlags): string;

export function device_release_client_flags_build_string_from_mask(mask: DeviceReleaseClientFlags): string;

export function dms_activation_state_get_string(val: DmsActivationState): string;

export function dms_band_capability_build_string_from_mask(mask: DmsBandCapability): string;

export function dms_boot_image_download_mode_get_string(val: DmsBootImageDownloadMode): string;

export function dms_data_service_capability_get_string(val: DmsDataServiceCapability): string;

export function dms_dell_device_mode_get_string(val: DmsDellDeviceMode): string;

export function dms_dell_firmware_version_type_get_string(val: DmsDellFirmwareVersionType): string;

export function dms_firmware_image_type_get_string(val: DmsFirmwareImageType): string;

export function dms_foxconn_device_mode_get_string(val: DmsFoxconnDeviceMode): string;

export function dms_foxconn_device_mode_get_type(): GObject.GType;

export function dms_foxconn_firmware_version_type_get_string(val: DmsFoxconnFirmwareVersionType): string;

export function dms_foxconn_firmware_version_type_get_type(): GObject.GType;

export function dms_hp_device_mode_get_string(val: DmsHpDeviceMode): string;

export function dms_lte_band_capability_build_string_from_mask(mask: DmsLteBandCapability): string;

export function dms_mac_type_get_string(val: DmsMacType): string;

export function dms_offline_reason_build_string_from_mask(mask: DmsOfflineReason): string;

export function dms_operating_mode_get_string(val: DmsOperatingMode): string;

export function dms_power_state_build_string_from_mask(mask: DmsPowerState): string;

export function dms_radio_interface_get_string(val: DmsRadioInterface): string;

export function dms_sim_capability_get_string(val: DmsSimCapability): string;

export function dms_swi_usb_composition_get_description(value: DmsSwiUsbComposition): string;

export function dms_swi_usb_composition_get_string(val: DmsSwiUsbComposition): string;

export function dms_time_reference_type_get_string(val: DmsTimeReferenceType): string;

export function dms_time_source_get_string(val: DmsTimeSource): string;

export function dms_uim_facility_get_string(val: DmsUimFacility): string;

export function dms_uim_facility_state_get_string(val: DmsUimFacilityState): string;

export function dms_uim_pin_id_get_string(val: DmsUimPinId): string;

export function dms_uim_pin_status_get_string(val: DmsUimPinStatus): string;

export function dms_uim_state_get_string(val: DmsUimState): string;

export function dsd_apn_type_get_string(val: DsdApnType): string;

export function dsd_apn_type_preference_build_string_from_mask(mask: DsdApnTypePreference): string;

export function gas_firmware_listing_mode_get_string(val: GasFirmwareListingMode): string;

export function loc_delete_cell_database_build_string_from_mask(mask: LocDeleteCellDatabase): string;

export function loc_delete_clock_info_build_string_from_mask(mask: LocDeleteClockInfo): string;

export function loc_delete_gnss_data_build_string_from_mask(mask: LocDeleteGnssData): string;

export function loc_delete_sv_info_build_string_from_mask(mask: LocDeleteSvInfo): string;

export function loc_engine_state_get_string(val: LocEngineState): string;

export function loc_event_registration_flag_build_string_from_mask(mask: LocEventRegistrationFlag): string;

export function loc_fix_recurrence_type_get_string(val: LocFixRecurrenceType): string;

export function loc_health_status_get_string(val: LocHealthStatus): string;

export function loc_indication_status_get_string(val: LocIndicationStatus): string;

export function loc_intermediate_report_state_get_string(val: LocIntermediateReportState): string;

export function loc_navigation_data_get_string(val: LocNavigationData): string;

export function loc_nmea_type_build_string_from_mask(mask: LocNmeaType): string;

export function loc_operation_mode_get_string(val: LocOperationMode): string;

export function loc_predicted_orbits_data_format_get_string(val: LocPredictedOrbitsDataFormat): string;

export function loc_reliability_get_string(val: LocReliability): string;

export function loc_satellite_status_get_string(val: LocSatelliteStatus): string;

export function loc_satellite_valid_information_build_string_from_mask(mask: LocSatelliteValidInformation): string;

export function loc_sensor_data_usage_build_string_from_mask(mask: LocSensorDataUsage): string;

export function loc_server_address_type_build_string_from_mask(mask: LocServerAddressType): string;

export function loc_server_type_get_string(val: LocServerType): string;

export function loc_session_status_get_string(val: LocSessionStatus): string;

export function loc_system_get_string(val: LocSystem): string;

export function loc_technology_used_build_string_from_mask(mask: LocTechnologyUsed): string;

export function loc_time_source_get_string(val: LocTimeSource): string;

export function message_add_raw_tlv(self: Message, type: number, raw: number, length: number): boolean;

export function message_dms_dell_change_device_mode_input_get_mode(
    self: MessageDmsFoxconnChangeDeviceModeInput,
    value_mode: DmsDellDeviceMode
): boolean;

export function message_dms_dell_change_device_mode_input_get_type(): GObject.GType;

export function message_dms_dell_change_device_mode_input_new(): MessageDmsFoxconnChangeDeviceModeInput;

export function message_dms_dell_change_device_mode_input_ref(
    self: MessageDmsFoxconnChangeDeviceModeInput
): MessageDmsFoxconnChangeDeviceModeInput;

export function message_dms_dell_change_device_mode_input_set_mode(
    self: MessageDmsFoxconnChangeDeviceModeInput,
    value_mode: DmsDellDeviceMode
): boolean;

export function message_dms_dell_change_device_mode_input_unref(self: MessageDmsFoxconnChangeDeviceModeInput): void;

export function message_dms_dell_change_device_mode_output_get_result(
    self: MessageDmsFoxconnChangeDeviceModeOutput
): boolean;

export function message_dms_dell_change_device_mode_output_get_type(): GObject.GType;

export function message_dms_dell_change_device_mode_output_ref(
    self: MessageDmsFoxconnChangeDeviceModeOutput
): MessageDmsFoxconnChangeDeviceModeOutput;

export function message_dms_dell_change_device_mode_output_unref(self: MessageDmsFoxconnChangeDeviceModeOutput): void;

export function message_dms_dell_get_firmware_version_input_get_type(): GObject.GType;

export function message_dms_dell_get_firmware_version_input_get_version_type(
    self: MessageDmsFoxconnGetFirmwareVersionInput,
    value_version_type: DmsDellFirmwareVersionType
): boolean;

export function message_dms_dell_get_firmware_version_input_new(): MessageDmsFoxconnGetFirmwareVersionInput;

export function message_dms_dell_get_firmware_version_input_ref(
    self: MessageDmsFoxconnGetFirmwareVersionInput
): MessageDmsFoxconnGetFirmwareVersionInput;

export function message_dms_dell_get_firmware_version_input_set_version_type(
    self: MessageDmsFoxconnGetFirmwareVersionInput,
    value_version_type: DmsDellFirmwareVersionType
): boolean;

export function message_dms_dell_get_firmware_version_input_unref(self: MessageDmsFoxconnGetFirmwareVersionInput): void;

export function message_dms_dell_get_firmware_version_output_get_result(
    self: MessageDmsFoxconnGetFirmwareVersionOutput
): boolean;

export function message_dms_dell_get_firmware_version_output_get_type(): GObject.GType;

export function message_dms_dell_get_firmware_version_output_get_version(
    self: MessageDmsFoxconnGetFirmwareVersionOutput,
    value_version: string
): boolean;

export function message_dms_dell_get_firmware_version_output_ref(
    self: MessageDmsFoxconnGetFirmwareVersionOutput
): MessageDmsFoxconnGetFirmwareVersionOutput;

export function message_dms_dell_get_firmware_version_output_unref(
    self: MessageDmsFoxconnGetFirmwareVersionOutput
): void;

export function message_foreach_raw_tlv(self: Message): void;

export function message_get_client_id(self: Message): number;

export function message_get_data(self: Message): [number, number];

export function message_get_length(self: Message): number;

export function message_get_message_id(self: Message): number;

export function message_get_printable(self: Message, line_prefix: string): string;

export function message_get_printable_full(self: Message, context: MessageContext, line_prefix: string): string;

export function message_get_raw(self: Message): [number, number];

export function message_get_raw_tlv(self: Message, type: number): [number, number];

export function message_get_service(self: Message): Service;

export function message_get_tlv_printable(
    self: Message,
    line_prefix: string,
    type: number,
    raw: number,
    raw_length: number
): string;

export function message_get_transaction_id(self: Message): number;

export function message_get_version_introduced(self: Message): [boolean, number, number];

export function message_get_version_introduced_full(self: Message, context: MessageContext): [boolean, number, number];

export function message_is_indication(self: Message): boolean;

export function message_is_request(self: Message): boolean;

export function message_is_response(self: Message): boolean;

export function message_new(service: Service, client_id: number, transaction_id: number, message_id: number): Message;

export function message_new_from_data(
    service: Service,
    client_id: number,
    qmi_data: Uint8Array | string
): [Message, Uint8Array];

export function message_new_from_raw(raw: Uint8Array | string): [Message, Uint8Array];

export function message_ref(self: Message): Message;

export function message_response_new(request: Message, error: ProtocolError): Message;

export function message_set_transaction_id(self: Message, transaction_id: number): void;

export function message_tlv_read_fixed_size_string(
    self: Message,
    tlv_offset: number,
    offset: number,
    string_length: number
): [boolean, number, string];

export function message_tlv_read_gdouble(
    self: Message,
    tlv_offset: number,
    offset: number,
    endian: Endian
): [boolean, number, number];

export function message_tlv_read_gfloat(self: Message, tlv_offset: number, offset: number, out: number): boolean;

export function message_tlv_read_gfloat_endian(
    self: Message,
    tlv_offset: number,
    offset: number,
    endian: Endian
): [boolean, number, number];

export function message_tlv_read_gint16(
    self: Message,
    tlv_offset: number,
    offset: number,
    endian: Endian
): [boolean, number, number];

export function message_tlv_read_gint32(
    self: Message,
    tlv_offset: number,
    offset: number,
    endian: Endian
): [boolean, number, number];

export function message_tlv_read_gint64(
    self: Message,
    tlv_offset: number,
    offset: number,
    endian: Endian
): [boolean, number, number];

export function message_tlv_read_gint8(self: Message, tlv_offset: number, offset: number): [boolean, number, number];

export function message_tlv_read_guint16(
    self: Message,
    tlv_offset: number,
    offset: number,
    endian: Endian
): [boolean, number, number];

export function message_tlv_read_guint32(
    self: Message,
    tlv_offset: number,
    offset: number,
    endian: Endian
): [boolean, number, number];

export function message_tlv_read_guint64(
    self: Message,
    tlv_offset: number,
    offset: number,
    endian: Endian
): [boolean, number, number];

export function message_tlv_read_guint8(self: Message, tlv_offset: number, offset: number): [boolean, number, number];

export function message_tlv_read_init(self: Message, type: number): [number, number];

export function message_tlv_read_sized_guint(
    self: Message,
    tlv_offset: number,
    offset: number,
    n_bytes: number,
    endian: Endian
): [boolean, number, number];

export function message_tlv_read_string(
    self: Message,
    tlv_offset: number,
    offset: number,
    n_size_prefix_bytes: number,
    max_size: number
): [boolean, number, string];

export function message_tlv_write_complete(self: Message, tlv_offset: number): boolean;

export function message_tlv_write_gint16(self: Message, endian: Endian, _in: number): boolean;

export function message_tlv_write_gint32(self: Message, endian: Endian, _in: number): boolean;

export function message_tlv_write_gint64(self: Message, endian: Endian, _in: number): boolean;

export function message_tlv_write_gint8(self: Message, _in: number): boolean;

export function message_tlv_write_guint16(self: Message, endian: Endian, _in: number): boolean;

export function message_tlv_write_guint32(self: Message, endian: Endian, _in: number): boolean;

export function message_tlv_write_guint64(self: Message, endian: Endian, _in: number): boolean;

export function message_tlv_write_guint8(self: Message, _in: number): boolean;

export function message_tlv_write_init(self: Message, type: number): number;

export function message_tlv_write_reset(self: Message, tlv_offset: number): void;

export function message_tlv_write_sized_guint(self: Message, n_bytes: number, endian: Endian, _in: number): boolean;

export function message_tlv_write_string(
    self: Message,
    n_size_prefix_bytes: number,
    _in: string,
    in_length: number
): boolean;

export function message_unref(self: Message): void;

export function nas_active_band_get_string(val: NasActiveBand): string;

export function nas_attach_state_get_string(val: NasAttachState): string;

export function nas_band_preference_build_string_from_mask(mask: NasBandPreference): string;

export function nas_call_barring_status_get_string(val: NasCallBarringStatus): string;

export function nas_cdma_pilot_type_get_string(val: NasCdmaPilotType): string;

export function nas_cdma_prl_preference_get_string(val: NasCdmaPrlPreference): string;

export function nas_cell_broadcast_capability_get_string(val: NasCellBroadcastCapability): string;

export function nas_change_duration_get_string(val: NasChangeDuration): string;

export function nas_data_capability_get_string(val: NasDataCapability): string;

export function nas_day_of_week_get_string(val: NasDayOfWeek): string;

export function nas_daylight_savings_adjustment_get_string(val: NasDaylightSavingsAdjustment): string;

export function nas_dl_bandwidth_get_string(val: NasDLBandwidth): string;

export function nas_evdo_sinr_level_get_string(val: NasEvdoSinrLevel): string;

export function nas_gsm_wcdma_acquisition_order_preference_get_string(
    val: NasGsmWcdmaAcquisitionOrderPreference
): string;

export function nas_hdr_personality_get_string(val: NasHdrPersonality): string;

export function nas_hdr_protocol_revision_get_string(val: NasHdrProtocolRevision): string;

export function nas_lte_band_preference_build_string_from_mask(mask: NasLteBandPreference): string;

export function nas_lte_cell_access_status_get_string(val: NasLteCellAccessStatus): string;

export function nas_lte_registration_domain_get_string(val: NasLteRegistrationDomain): string;

export function nas_network_description_display_get_string(val: NasNetworkDescriptionDisplay): string;

export function nas_network_description_encoding_get_string(val: NasNetworkDescriptionEncoding): string;

export function nas_network_name_display_condition_build_string_from_mask(mask: NasNetworkNameDisplayCondition): string;

export function nas_network_name_source_get_string(val: NasNetworkNameSource): string;

export function nas_network_register_type_get_string(val: NasNetworkRegisterType): string;

export function nas_network_scan_result_get_string(val: NasNetworkScanResult): string;

export function nas_network_scan_type_build_string_from_mask(mask: NasNetworkScanType): string;

export function nas_network_selection_preference_get_string(val: NasNetworkSelectionPreference): string;

export function nas_network_selection_registration_restriction_get_string(
    val: NasNetworkSelectionRegistrationRestriction
): string;

export function nas_network_service_domain_get_string(val: NasNetworkServiceDomain): string;

export function nas_network_status_build_string_from_mask(mask: NasNetworkStatus): string;

export function nas_network_type_get_string(val: NasNetworkType): string;

export function nas_plmn_encoding_scheme_get_string(val: NasPlmnEncodingScheme): string;

export function nas_plmn_name_country_initials_get_string(val: NasPlmnNameCountryInitials): string;

export function nas_plmn_name_spare_bits_get_string(val: NasPlmnNameSpareBits): string;

export function nas_preference_duration_get_string(val: NasPreferenceDuration): string;

export function nas_ps_attach_action_get_string(val: NasPsAttachAction): string;

export function nas_radio_interface_get_string(val: NasRadioInterface): string;

export function nas_radio_technology_preference_build_string_from_mask(mask: NasRadioTechnologyPreference): string;

export function nas_rat_mode_preference_build_string_from_mask(mask: NasRatModePreference): string;

export function nas_read_string_from_network_description_encoded_array(
    encoding: NasNetworkDescriptionEncoding,
    array: Uint8Array | string
): string;

export function nas_read_string_from_plmn_encoded_array(
    encoding: NasPlmnEncodingScheme,
    array: Uint8Array | string
): string;

export function nas_registration_state_get_string(val: NasRegistrationState): string;

export function nas_roaming_indicator_status_get_string(val: NasRoamingIndicatorStatus): string;

export function nas_roaming_preference_get_string(val: NasRoamingPreference): string;

export function nas_roaming_status_get_string(val: NasRoamingStatus): string;

export function nas_scell_state_get_string(val: NasScellState): string;

export function nas_service_domain_preference_get_string(val: NasServiceDomainPreference): string;

export function nas_service_status_get_string(val: NasServiceStatus): string;

export function nas_signal_strength_request_build_string_from_mask(mask: NasSignalStrengthRequest): string;

export function nas_sim_reject_state_get_string(val: NasSimRejectState): string;

export function nas_swi_emm_connection_state_get_string(val: NasSwiEmmConnectionState): string;

export function nas_swi_emm_state_get_string(val: NasSwiEmmState): string;

export function nas_swi_ims_reg_state_get_string(val: NasSwiImsRegState): string;

export function nas_swi_modem_mode_get_string(val: NasSwiModemMode): string;

export function nas_swi_ps_state_get_string(val: NasSwiPsState): string;

export function nas_swi_system_mode_get_string(val: NasSwiSystemMode): string;

export function nas_td_scdma_band_preference_build_string_from_mask(mask: NasTdScdmaBandPreference): string;

export function nas_usage_preference_get_string(val: NasUsagePreference): string;

export function nas_voice_domain_preference_get_string(val: NasVoiceDomainPreference): string;

export function nas_wcdma_hs_service_get_string(val: NasWcdmaHsService): string;

export function nas_wcdma_rrc_state_get_string(val: NasWcdmaRrcState): string;

export function oma_hfa_feature_done_state_get_string(val: OmaHfaFeatureDoneState): string;

export function oma_session_failed_reason_get_string(val: OmaSessionFailedReason): string;

export function oma_session_state_get_string(val: OmaSessionState): string;

export function oma_session_type_get_string(val: OmaSessionType): string;

export function pbm_event_registration_flag_build_string_from_mask(mask: PbmEventRegistrationFlag): string;

export function pbm_phonebook_type_build_string_from_mask(mask: PbmPhonebookType): string;

export function pbm_session_type_get_string(val: PbmSessionType): string;

export function pdc_configuration_type_get_string(val: PdcConfigurationType): string;

export function pds_data_valid_build_string_from_mask(mask: PdsDataValid): string;

export function pds_network_mode_get_string(val: PdsNetworkMode): string;

export function pds_operating_mode_get_string(val: PdsOperatingMode): string;

export function pds_operation_mode_get_string(val: PdsOperationMode): string;

export function pds_position_session_status_get_string(val: PdsPositionSessionStatus): string;

export function pds_tracking_session_state_get_string(val: PdsTrackingSessionState): string;

export function protocol_error_get_string(val: ProtocolError): string;

export function protocol_error_quark(): GLib.Quark;

export function qos_event_get_string(val: QosEvent): string;

export function qos_status_get_string(val: QosStatus): string;

export function service_flag_build_string_from_mask(mask: ServiceFlag): string;

export function service_get_string(val: Service): string;

export function uim_card_application_personalization_feature_get_string(
    val: UimCardApplicationPersonalizationFeature
): string;

export function uim_card_application_personalization_state_get_string(
    val: UimCardApplicationPersonalizationState
): string;

export function uim_card_application_state_get_string(val: UimCardApplicationState): string;

export function uim_card_application_type_get_string(val: UimCardApplicationType): string;

export function uim_card_error_get_string(val: UimCardError): string;

export function uim_card_protocol_get_string(val: UimCardProtocol): string;

export function uim_card_state_get_string(val: UimCardState): string;

export function uim_event_registration_flag_build_string_from_mask(mask: UimEventRegistrationFlag): string;

export function uim_file_type_get_string(val: UimFileType): string;

export function uim_physical_card_state_get_string(val: UimPhysicalCardState): string;

export function uim_pin_id_get_string(val: UimPinId): string;

export function uim_pin_state_get_string(val: UimPinState): string;

export function uim_security_attribute_build_string_from_mask(mask: UimSecurityAttribute): string;

export function uim_security_attribute_logic_get_string(val: UimSecurityAttributeLogic): string;

export function uim_session_type_get_string(val: UimSessionType): string;

export function uim_slot_state_get_string(val: UimSlotState): string;

export function utils_get_traces_enabled(): boolean;

export function utils_read_fixed_size_string_from_buffer(
    buffer: number,
    buffer_size: number,
    fixed_size: number,
    out: string
): void;

export function utils_read_gfloat_from_buffer(buffer: number, buffer_size: number, out: number): void;

export function utils_read_gint16_from_buffer(buffer: number, buffer_size: number, endian: Endian, out: number): void;

export function utils_read_gint32_from_buffer(buffer: number, buffer_size: number, endian: Endian, out: number): void;

export function utils_read_gint64_from_buffer(buffer: number, buffer_size: number, endian: Endian, out: number): void;

export function utils_read_gint8_from_buffer(buffer: number, buffer_size: number, out: number): void;

export function utils_read_guint16_from_buffer(buffer: number, buffer_size: number, endian: Endian, out: number): void;

export function utils_read_guint32_from_buffer(buffer: number, buffer_size: number, endian: Endian, out: number): void;

export function utils_read_guint64_from_buffer(buffer: number, buffer_size: number, endian: Endian, out: number): void;

export function utils_read_guint8_from_buffer(buffer: number, buffer_size: number, out: number): void;

export function utils_read_sized_guint_from_buffer(
    buffer: number,
    buffer_size: number,
    n_bytes: number,
    endian: Endian,
    out: number
): void;

export function utils_read_string_from_buffer(
    buffer: number,
    buffer_size: number,
    length_prefix_size: number,
    max_size: number,
    out: string
): void;

export function utils_set_traces_enabled(enabled: boolean): void;

export function utils_write_fixed_size_string_to_buffer(
    buffer: number,
    buffer_size: number,
    fixed_size: number,
    _in: string
): void;

export function utils_write_gint16_to_buffer(buffer: number, buffer_size: number, endian: Endian, _in: number): void;

export function utils_write_gint32_to_buffer(buffer: number, buffer_size: number, endian: Endian, _in: number): void;

export function utils_write_gint64_to_buffer(buffer: number, buffer_size: number, endian: Endian, _in: number): void;

export function utils_write_gint8_to_buffer(buffer: number, buffer_size: number, _in: number): void;

export function utils_write_guint16_to_buffer(buffer: number, buffer_size: number, endian: Endian, _in: number): void;

export function utils_write_guint32_to_buffer(buffer: number, buffer_size: number, endian: Endian, _in: number): void;

export function utils_write_guint64_to_buffer(buffer: number, buffer_size: number, endian: Endian, _in: number): void;

export function utils_write_guint8_to_buffer(buffer: number, buffer_size: number, _in: number): void;

export function utils_write_sized_guint_to_buffer(
    buffer: number,
    buffer_size: number,
    n_bytes: number,
    endian: Endian,
    _in: number
): void;

export function utils_write_string_to_buffer(
    buffer: number,
    buffer_size: number,
    length_prefix_size: number,
    _in: string
): void;

export function voice_alpha_data_coding_scheme_get_string(val: VoiceAlphaDataCodingScheme): string;

export function voice_als_get_string(val: VoiceAls): string;

export function voice_call_control_result_type_get_string(val: VoiceCallControlResultType): string;

export function voice_call_control_supplementary_service_type_get_string(
    val: VoiceCallControlSupplementaryServiceType
): string;

export function voice_call_direction_get_string(val: VoiceCallDirection): string;

export function voice_call_end_reason_get_string(val: VoiceCallEndReason): string;

export function voice_call_mode_get_string(val: VoiceCallMode): string;

export function voice_call_state_get_string(val: VoiceCallState): string;

export function voice_call_type_get_string(val: VoiceCallType): string;

export function voice_domain_get_string(val: VoiceDomain): string;

export function voice_presentation_get_string(val: VoicePresentation): string;

export function voice_privacy_get_string(val: VoicePrivacy): string;

export function voice_service_option_get_string(val: VoiceServiceOption): string;

export function voice_tty_mode_get_string(val: VoiceTtyMode): string;

export function voice_user_action_get_string(val: VoiceUserAction): string;

export function voice_uss_data_coding_scheme_get_string(val: VoiceUssDataCodingScheme): string;

export function voice_wcdma_amr_status_build_string_from_mask(mask: VoiceWcdmaAmrStatus): string;

export function wda_data_aggregation_protocol_get_string(val: WdaDataAggregationProtocol): string;

export function wda_link_layer_protocol_get_string(val: WdaLinkLayerProtocol): string;

export function wds_authentication_build_string_from_mask(mask: WdsAuthentication): string;

export function wds_autoconnect_setting_get_string(val: WdsAutoconnectSetting): string;

export function wds_autoconnect_setting_roaming_get_string(val: WdsAutoconnectSettingRoaming): string;

export function wds_call_end_reason_get_string(val: WdsCallEndReason): string;

export function wds_call_type_get_string(val: WdsCallType): string;

export function wds_client_type_get_string(val: WdsClientType): string;

export function wds_connection_status_get_string(val: WdsConnectionStatus): string;

export function wds_data_bearer_technology_get_string(val: WdsDataBearerTechnology): string;

export function wds_data_call_status_get_string(val: WdsDataCallStatus): string;

export function wds_data_call_type_get_string(val: WdsDataCallType): string;

export function wds_data_system_get_string(val: WdsDataSystem): string;

export function wds_data_system_network_type_get_string(val: WdsDataSystemNetworkType): string;

export function wds_delivery_order_get_string(val: WdsDeliveryOrder): string;

export function wds_dormancy_status_get_string(val: WdsDormancyStatus): string;

export function wds_ds_profile_error_get_string(val: WdsDsProfileError): string;

export function wds_extended_data_bearer_technology_3gpp2_build_string_from_mask(
    mask: WdsExtendedDataBearerTechnology3gpp2
): string;

export function wds_extended_data_bearer_technology_3gpp_build_string_from_mask(
    mask: WdsExtendedDataBearerTechnology3gpp
): string;

export function wds_extended_technology_preference_get_string(val: WdsExtendedTechnologyPreference): string;

export function wds_get_current_settings_requested_settings_build_string_from_mask(
    mask: WdsGetCurrentSettingsRequestedSettings
): string;

export function wds_ip_family_get_string(val: WdsIpFamily): string;

export function wds_network_type_get_string(val: WdsNetworkType): string;

export function wds_packet_statistics_mask_flag_build_string_from_mask(mask: WdsPacketStatisticsMaskFlag): string;

export function wds_pdp_data_compression_type_get_string(val: WdsPdpDataCompressionType): string;

export function wds_pdp_header_compression_type_get_string(val: WdsPdpHeaderCompressionType): string;

export function wds_pdp_type_get_string(val: WdsPdpType): string;

export function wds_profile_family_get_string(val: WdsProfileFamily): string;

export function wds_profile_type_get_string(val: WdsProfileType): string;

export function wds_qos_class_identifier_get_string(val: WdsQosClassIdentifier): string;

export function wds_radio_access_technology_get_string(val: WdsRadioAccessTechnology): string;

export function wds_rat_3gpp2_build_string_from_mask(mask: WdsRat3gpp2): string;

export function wds_rat_3gpp_build_string_from_mask(mask: WdsRat3gpp): string;

export function wds_sdu_erroneous_delivery_get_string(val: WdsSduErroneousDelivery): string;

export function wds_sdu_error_ratio_get_string(val: WdsSduErrorRatio): string;

export function wds_sdu_residual_bit_error_ratio_get_string(val: WdsSduResidualBitErrorRatio): string;

export function wds_set_event_report_transfer_statistics_build_string_from_mask(
    mask: WdsSetEventReportTransferStatistics
): string;

export function wds_so_cdma1x_build_string_from_mask(mask: WdsSoCdma1x): string;

export function wds_so_evdo_rev0_build_string_from_mask(mask: WdsSoEvdoRev0): string;

export function wds_so_evdo_reva_build_string_from_mask(mask: WdsSoEvdoRevA): string;

export function wds_so_evdo_revb_build_string_from_mask(mask: WdsSoEvdoRevB): string;

export function wds_technology_preference_build_string_from_mask(mask: WdsTechnologyPreference): string;

export function wds_tethered_call_type_get_string(val: WdsTetheredCallType): string;

export function wds_traffic_class_get_string(val: WdsTrafficClass): string;

export function wds_verbose_call_end_reason_3gpp_get_string(val: WdsVerboseCallEndReason3gpp): string;

export function wds_verbose_call_end_reason_cm_get_string(val: WdsVerboseCallEndReasonCm): string;

export function wds_verbose_call_end_reason_ehrpd_get_string(val: WdsVerboseCallEndReasonEhrpd): string;

export function wds_verbose_call_end_reason_get_string(type: WdsVerboseCallEndReasonType, reason: number): string;

export function wds_verbose_call_end_reason_internal_get_string(val: WdsVerboseCallEndReasonInternal): string;

export function wds_verbose_call_end_reason_ipv6_get_string(val: WdsVerboseCallEndReasonIpv6): string;

export function wds_verbose_call_end_reason_mip_get_string(val: WdsVerboseCallEndReasonMip): string;

export function wds_verbose_call_end_reason_ppp_get_string(val: WdsVerboseCallEndReasonPpp): string;

export function wds_verbose_call_end_reason_type_get_string(val: WdsVerboseCallEndReasonType): string;

export function wms_ack_indicator_get_string(val: WmsAckIndicator): string;

export function wms_cdma_cause_code_get_string(val: WmsCdmaCauseCode): string;

export function wms_cdma_error_class_get_string(val: WmsCdmaErrorClass): string;

export function wms_cdma_service_option_get_string(val: WmsCdmaServiceOption): string;

export function wms_gsm_umts_rp_cause_get_string(val: WmsGsmUmtsRpCause): string;

export function wms_gsm_umts_tp_cause_get_string(val: WmsGsmUmtsTpCause): string;

export function wms_message_class_get_string(val: WmsMessageClass): string;

export function wms_message_delivery_failure_type_get_string(val: WmsMessageDeliveryFailureType): string;

export function wms_message_format_get_string(val: WmsMessageFormat): string;

export function wms_message_mode_get_string(val: WmsMessageMode): string;

export function wms_message_protocol_get_string(val: WmsMessageProtocol): string;

export function wms_message_tag_type_get_string(val: WmsMessageTagType): string;

export function wms_message_type_get_string(val: WmsMessageType): string;

export function wms_notification_type_get_string(val: WmsNotificationType): string;

export function wms_receipt_action_get_string(val: WmsReceiptAction): string;

export function wms_storage_type_get_string(val: WmsStorageType): string;

export function wms_transfer_indication_get_string(val: WmsTransferIndication): string;

export type DeviceCommandAbortableParseResponseFn = (self: Device, abort_response: Message) => boolean;
export type MessageForeachRawTlvFn = (type: number, value: number, length: number) => void;

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
    static TLVNOTFOUND: number;
    static TLVTOOLONG: number;
    static UNSUPPORTED: number;
    static TLVEMPTY: number;
    static UNEXPECTEDMESSAGE: number;
    static INVALIDDATA: number;

    // Members
    static get_string(val: CoreError): string;

    static quark(): GLib.Quark;
}

export namespace CtlDataFormat {
    export const $gtype: GObject.GType<CtlDataFormat>;
}

export enum CtlDataFormat {
    ABSENT = 0,
    PRESENT = 1,
}

export namespace CtlDataLinkProtocol {
    export const $gtype: GObject.GType<CtlDataLinkProtocol>;
}

export enum CtlDataLinkProtocol {
    UNKNOWN = 0,
    "802_3" = 1,
    RAW_IP = 2,
}

export namespace DataEndpointType {
    export const $gtype: GObject.GType<DataEndpointType>;
}

export enum DataEndpointType {
    HSUSB = 0,
    UNDEFINED = 0,
}

export namespace DeviceExpectedDataFormat {
    export const $gtype: GObject.GType<DeviceExpectedDataFormat>;
}

export enum DeviceExpectedDataFormat {
    UNKNOWN = 0,
    "802_3" = 1,
    RAW_IP = 2,
}

export namespace DmsActivationState {
    export const $gtype: GObject.GType<DmsActivationState>;
}

export enum DmsActivationState {
    NOT_ACTIVATED = 0,
    ACTIVATED = 1,
    CONNECTING = 2,
    CONNECTED = 3,
    OTASP_AUTHENTICATED = 4,
    OTASP_NAM = 5,
    OTASP_MDN = 6,
    OTASP_IMSI = 7,
    OTASP_PRL = 8,
    OTASP_SPC = 9,
    OTASP_COMMITED = 10,
}

export namespace DmsBootImageDownloadMode {
    export const $gtype: GObject.GType<DmsBootImageDownloadMode>;
}

export enum DmsBootImageDownloadMode {
    NORMAL = 0,
    BOOT_AND_RECOVERY = 1,
}

export namespace DmsDataServiceCapability {
    export const $gtype: GObject.GType<DmsDataServiceCapability>;
}

export enum DmsDataServiceCapability {
    NONE = 0,
    CS = 1,
    PS = 2,
    SIMULTANEOUS_CS_PS = 3,
    NON_SIMULTANEOUS_CS_PS = 4,
}

export namespace DmsDellDeviceMode {
    export const $gtype: GObject.GType<DmsDellDeviceMode>;
}

export enum DmsDellDeviceMode {
    UNKNOWN = 0,
    FASTBOOT_ONLINE = 5,
    FASTBOOT_OTA = 10,
}

export namespace DmsDellFirmwareVersionType {
    export const $gtype: GObject.GType<DmsDellFirmwareVersionType>;
}

export enum DmsDellFirmwareVersionType {
    FIRMWARE_MCFG = 0,
    FIRMWARE_MCFG_APPS = 1,
    APPS = 2,
}

export namespace DmsFirmwareImageType {
    export const $gtype: GObject.GType<DmsFirmwareImageType>;
}

export enum DmsFirmwareImageType {
    MODEM = 0,
    PRI = 1,
}

export namespace DmsFoxconnDeviceMode {
    export const $gtype: GObject.GType<DmsFoxconnDeviceMode>;
}

export enum DmsFoxconnDeviceMode {
    UNKNOWN = 0,
    FASTBOOT_ONLINE = 5,
    FASTBOOT_OTA = 10,
}

export namespace DmsFoxconnFirmwareVersionType {
    export const $gtype: GObject.GType<DmsFoxconnFirmwareVersionType>;
}

export enum DmsFoxconnFirmwareVersionType {
    FIRMWARE_MCFG = 0,
    FIRMWARE_MCFG_APPS = 1,
    APPS = 2,
}

export namespace DmsHpDeviceMode {
    export const $gtype: GObject.GType<DmsHpDeviceMode>;
}

export enum DmsHpDeviceMode {
    FASTBOOT = 5,
}

export namespace DmsMacType {
    export const $gtype: GObject.GType<DmsMacType>;
}

export enum DmsMacType {
    WLAN = 0,
    BT = 1,
}

export namespace DmsOperatingMode {
    export const $gtype: GObject.GType<DmsOperatingMode>;
}

export enum DmsOperatingMode {
    ONLINE = 0,
    LOW_POWER = 1,
    FACTORY_TEST = 2,
    OFFLINE = 3,
    RESET = 4,
    SHUTTING_DOWN = 5,
    PERSISTENT_LOW_POWER = 6,
    MODE_ONLY_LOW_POWER = 7,
    UNKNOWN = 255,
}

export namespace DmsRadioInterface {
    export const $gtype: GObject.GType<DmsRadioInterface>;
}

export enum DmsRadioInterface {
    CDMA20001X = 1,
    EVDO = 2,
    GSM = 4,
    UMTS = 5,
    LTE = 8,
    "5GNR" = 10,
}

export namespace DmsSimCapability {
    export const $gtype: GObject.GType<DmsSimCapability>;
}

export enum DmsSimCapability {
    NOT_SUPPORTED = 1,
    SUPPORTED = 2,
}

export class DmsSwiUsbComposition {
    static $gtype: GObject.GType<DmsSwiUsbComposition>;

    constructor(copy: DmsSwiUsbComposition);

    // Properties
    static UNKNOWN: number;
    static "0": number;
    static "1": number;
    static "2": number;
    static "3": number;
    static "4": number;
    static "5": number;
    static "6": number;
    static "7": number;
    static "8": number;
    static "9": number;
    static "10": number;
    static "11": number;
    static "12": number;
    static "13": number;
    static "14": number;
    static "15": number;
    static "16": number;
    static "17": number;
    static "18": number;
    static "19": number;
    static "20": number;
    static "21": number;
    static "22": number;
}

export namespace DmsTimeReferenceType {
    export const $gtype: GObject.GType<DmsTimeReferenceType>;
}

export enum DmsTimeReferenceType {
    USER = 0,
}

export namespace DmsTimeSource {
    export const $gtype: GObject.GType<DmsTimeSource>;
}

export enum DmsTimeSource {
    DEVICE = 0,
    CDMA_NETWORK = 1,
    HDR_NETWORK = 2,
}

export namespace DmsUimFacility {
    export const $gtype: GObject.GType<DmsUimFacility>;
}

export enum DmsUimFacility {
    PN = 0,
    PU = 1,
    PP = 2,
    PC = 3,
    PF = 4,
}

export namespace DmsUimFacilityState {
    export const $gtype: GObject.GType<DmsUimFacilityState>;
}

export enum DmsUimFacilityState {
    DEACTIVATED = 0,
    ACTIVATED = 1,
    BLOCKED = 2,
}

export namespace DmsUimPinId {
    export const $gtype: GObject.GType<DmsUimPinId>;
}

export enum DmsUimPinId {
    PIN = 1,
    PIN2 = 2,
}

export namespace DmsUimPinStatus {
    export const $gtype: GObject.GType<DmsUimPinStatus>;
}

export enum DmsUimPinStatus {
    NOT_INITIALIZED = 0,
    ENABLED_NOT_VERIFIED = 1,
    ENABLED_VERIFIED = 2,
    DISABLED = 3,
    BLOCKED = 4,
    PERMANENTLY_BLOCKED = 5,
    UNBLOCKED = 6,
    CHANGED = 7,
}

export namespace DmsUimState {
    export const $gtype: GObject.GType<DmsUimState>;
}

export enum DmsUimState {
    INITIALIZATION_COMPLETED = 0,
    LOCKED_OR_FAILED = 1,
    NOT_PRESENT = 2,
    RESERVED = 3,
    UNKNOWN = 255,
}

export namespace DsdApnType {
    export const $gtype: GObject.GType<DsdApnType>;
}

export enum DsdApnType {
    DEFAULT = 0,
    IMS = 1,
    MMS = 2,
    DUN = 3,
    SUPL = 4,
    HIPRI = 5,
    FOTA = 6,
    CBS = 7,
    IA = 8,
    EMERGENCY = 9,
}

export namespace Endian {
    export const $gtype: GObject.GType<Endian>;
}

export enum Endian {
    LITTLE = 0,
    BIG = 1,
}

export namespace GasFirmwareListingMode {
    export const $gtype: GObject.GType<GasFirmwareListingMode>;
}

export enum GasFirmwareListingMode {
    ACTIVE_FIRMWARE = 0,
    ALL_FIRMWARE = 1,
    SPECIFIC_FIRMWARE = 2,
}

export namespace LocEngineState {
    export const $gtype: GObject.GType<LocEngineState>;
}

export enum LocEngineState {
    ON = 1,
    OFF = 2,
}

export namespace LocFixRecurrenceType {
    export const $gtype: GObject.GType<LocFixRecurrenceType>;
}

export enum LocFixRecurrenceType {
    PERIODIC_FIXES = 1,
    SINGLE_FIX = 2,
}

export namespace LocHealthStatus {
    export const $gtype: GObject.GType<LocHealthStatus>;
}

export enum LocHealthStatus {
    UNHEALTHY = 0,
    HEALTHY = 1,
}

export namespace LocIndicationStatus {
    export const $gtype: GObject.GType<LocIndicationStatus>;
}

export enum LocIndicationStatus {
    SUCCESS = 0,
    GENERAL_FAILURE = 1,
    UNSUPPORTED = 2,
    INVALID_PARAMETER = 3,
    ENGINE_BUSY = 4,
    PHONE_OFFLINE = 5,
    TIMEOUT = 6,
}

export namespace LocIntermediateReportState {
    export const $gtype: GObject.GType<LocIntermediateReportState>;
}

export enum LocIntermediateReportState {
    UNKNOWN = 0,
    ENABLE = 1,
    DISABLE = 2,
}

export namespace LocNavigationData {
    export const $gtype: GObject.GType<LocNavigationData>;
}

export enum LocNavigationData {
    EPHEMERIS = 0,
    ALMANAC = 1,
}

export namespace LocOperationMode {
    export const $gtype: GObject.GType<LocOperationMode>;
}

export enum LocOperationMode {
    DEFAULT = 1,
    MSB = 2,
    MSA = 3,
    STANDALONE = 4,
    CELLID = 5,
    WWAN = 6,
}

export namespace LocPredictedOrbitsDataFormat {
    export const $gtype: GObject.GType<LocPredictedOrbitsDataFormat>;
}

export enum LocPredictedOrbitsDataFormat {
    XTRA = 0,
}

export namespace LocReliability {
    export const $gtype: GObject.GType<LocReliability>;
}

export enum LocReliability {
    NOT_SET = 0,
    VERY_LOW = 1,
    LOW = 2,
    MEDIUM = 3,
    HIGH = 4,
}

export namespace LocSatelliteStatus {
    export const $gtype: GObject.GType<LocSatelliteStatus>;
}

export enum LocSatelliteStatus {
    IDLE = 0,
    SEARCHING = 1,
    TRACKING = 2,
}

export namespace LocServerType {
    export const $gtype: GObject.GType<LocServerType>;
}

export enum LocServerType {
    UNKNOWN = 0,
    CDMA_PDE = 1,
    CDMA_MPC = 2,
    UMTS_SLP = 3,
    CUSTOM_PDE = 4,
}

export namespace LocSessionStatus {
    export const $gtype: GObject.GType<LocSessionStatus>;
}

export enum LocSessionStatus {
    SUCCESS = 0,
    IN_PROGRESS = 1,
    GENERAL_FAILURE = 2,
    TIMEOUT = 3,
    USER_ENDED = 4,
    BAD_PARAMETER = 5,
    PHONE_OFFLINE = 6,
    ENGINE_LOCKED = 6,
}

export namespace LocSystem {
    export const $gtype: GObject.GType<LocSystem>;
}

export enum LocSystem {
    GPS = 1,
    GALILEO = 2,
    SBAS = 3,
    COMPASS = 4,
    GLONASS = 5,
}

export namespace LocTimeSource {
    export const $gtype: GObject.GType<LocTimeSource>;
}

export enum LocTimeSource {
    INVALID = 0,
    NETWORK_TIME_TRANSFER = 1,
    NETWORK_TIME_TAGGING = 2,
    EXTERNAL_INPUT = 3,
    TOW_DECODE = 4,
    TOW_CONFIRMED = 5,
    TOW_AND_WEEK_CONFIRMED = 6,
    NAVIGATION_SOLUTION = 7,
    SOLVE_FOR_TIME = 8,
    GLO_TOW_DECODE = 9,
    TIME_TRANSFORM = 10,
    WCDMA_SLEEP_TIME_TAG = 11,
    GSM_SLEEP_TIME_TAG = 12,
    UNKNOWN = 13,
    SYSTEM_TIMETICK = 14,
    QZSS_TOW_DECODE = 15,
    BDS_TOW_DECODE = 16,
}

export namespace NasActiveBand {
    export const $gtype: GObject.GType<NasActiveBand>;
}

export enum NasActiveBand {
    BC_0 = 0,
    BC_1 = 1,
    BC_2 = 2,
    BC_3 = 3,
    BC_4 = 4,
    BC_5 = 5,
    BC_6 = 6,
    BC_7 = 7,
    BC_8 = 8,
    BC_9 = 9,
    BC_10 = 10,
    BC_11 = 11,
    BC_12 = 12,
    BC_13 = 13,
    BC_14 = 14,
    BC_15 = 15,
    BC_16 = 16,
    BC_17 = 17,
    BC_18 = 18,
    BC_19 = 19,
    GSM_450 = 40,
    GSM_480 = 41,
    GSM_750 = 42,
    GSM_850 = 43,
    GSM_900_EXTENDED = 44,
    GSM_900_PRIMARY = 45,
    GSM_900_RAILWAYS = 46,
    GSM_DCS_1800 = 47,
    GSM_PCS_1900 = 48,
    WCDMA_2100 = 80,
    WCDMA_PCS_1900 = 81,
    WCDMA_DCS_1800 = 82,
    WCDMA_1700_US = 83,
    WCDMA_850 = 84,
    WCDMA_800 = 85,
    WCDMA_2600 = 86,
    WCDMA_900 = 87,
    WCDMA_1700_JAPAN = 88,
    WCDMA_1500_JAPAN = 90,
    WCDMA_850_JAPAN = 91,
    EUTRAN_1 = 120,
    EUTRAN_2 = 121,
    EUTRAN_3 = 122,
    EUTRAN_4 = 123,
    EUTRAN_5 = 124,
    EUTRAN_6 = 125,
    EUTRAN_7 = 126,
    EUTRAN_8 = 127,
    EUTRAN_9 = 128,
    EUTRAN_10 = 129,
    EUTRAN_11 = 130,
    EUTRAN_12 = 131,
    EUTRAN_13 = 132,
    EUTRAN_14 = 133,
    EUTRAN_17 = 134,
    EUTRAN_18 = 143,
    EUTRAN_19 = 144,
    EUTRAN_20 = 145,
    EUTRAN_21 = 146,
    EUTRAN_23 = 152,
    EUTRAN_24 = 147,
    EUTRAN_25 = 148,
    EUTRAN_26 = 153,
    EUTRAN_27 = 164,
    EUTRAN_28 = 158,
    EUTRAN_29 = 159,
    EUTRAN_30 = 160,
    EUTRAN_31 = 165,
    EUTRAN_32 = 154,
    EUTRAN_33 = 135,
    EUTRAN_34 = 136,
    EUTRAN_35 = 137,
    EUTRAN_36 = 138,
    EUTRAN_37 = 139,
    EUTRAN_38 = 140,
    EUTRAN_39 = 141,
    EUTRAN_40 = 142,
    EUTRAN_41 = 149,
    EUTRAN_42 = 150,
    EUTRAN_43 = 151,
    EUTRAN_46 = 163,
    EUTRAN_47 = 166,
    EUTRAN_48 = 167,
    EUTRAN_66 = 161,
    EUTRAN_71 = 168,
    EUTRAN_125 = 155,
    EUTRAN_126 = 156,
    EUTRAN_127 = 157,
    EUTRAN_250 = 162,
    TDSCDMA_A = 200,
    TDSCDMA_B = 201,
    TDSCDMA_C = 202,
    TDSCDMA_D = 203,
    TDSCDMA_E = 204,
    TDSCDMA_F = 205,
}

export namespace NasAttachState {
    export const $gtype: GObject.GType<NasAttachState>;
}

export enum NasAttachState {
    UNKNOWN = 0,
    ATTACHED = 1,
    DETACHED = 2,
}

export namespace NasCallBarringStatus {
    export const $gtype: GObject.GType<NasCallBarringStatus>;
}

export enum NasCallBarringStatus {
    NORMAL_ONLY = 0,
    EMERGENCY_ONLY = 1,
    NO_CALLS = 2,
    ALL_CALLS = 3,
    UNKNOWN = -1,
}

export namespace NasCdmaPilotType {
    export const $gtype: GObject.GType<NasCdmaPilotType>;
}

export enum NasCdmaPilotType {
    ACTIVE = 0,
    NEIGHBOR = 1,
}

export namespace NasCdmaPrlPreference {
    export const $gtype: GObject.GType<NasCdmaPrlPreference>;
}

export enum NasCdmaPrlPreference {
    A_SIDE_ONLY = 1,
    B_SIDE_ONLY = 2,
    ANY = 16383,
}

export namespace NasCellBroadcastCapability {
    export const $gtype: GObject.GType<NasCellBroadcastCapability>;
}

export enum NasCellBroadcastCapability {
    UNKNOWN = 0,
    OFF = 1,
    ON = 2,
}

export namespace NasChangeDuration {
    export const $gtype: GObject.GType<NasChangeDuration>;
}

export enum NasChangeDuration {
    POWER_CYCLE = 0,
    PERMANENT = 1,
}

export class NasDLBandwidth {
    static $gtype: GObject.GType<NasDLBandwidth>;

    constructor(copy: NasDLBandwidth);

    // Properties
    static "1_4": number;
    static "3": number;
    static "5": number;
    static "10": number;
    static "15": number;
    static "20": number;
    static INVALID: number;
    static UNKNOWN: number;
}

export namespace NasDataCapability {
    export const $gtype: GObject.GType<NasDataCapability>;
}

export enum NasDataCapability {
    NONE = 0,
    GPRS = 1,
    EDGE = 2,
    HSDPA = 3,
    HSUPA = 4,
    WCDMA = 5,
    CDMA = 6,
    EVDO_REV_0 = 7,
    EVDO_REV_A = 8,
    GSM = 9,
    EVDO_REV_B = 10,
    LTE = 11,
    HSDPA_PLUS = 12,
    DC_HSDPA_PLUS = 13,
}

export namespace NasDayOfWeek {
    export const $gtype: GObject.GType<NasDayOfWeek>;
}

export enum NasDayOfWeek {
    MONDAY = 0,
    TUESDAY = 1,
    WEDNESDAY = 2,
    THURSDAY = 3,
    FRIDAY = 4,
    SATURDAY = 5,
    SUNDAY = 6,
}

export namespace NasDaylightSavingsAdjustment {
    export const $gtype: GObject.GType<NasDaylightSavingsAdjustment>;
}

export enum NasDaylightSavingsAdjustment {
    NONE = 0,
    ONE_HOUR = 1,
    TWO_HOURS = 2,
}

export class NasEvdoSinrLevel {
    static $gtype: GObject.GType<NasEvdoSinrLevel>;

    constructor(copy: NasEvdoSinrLevel);

    // Properties
    static "0": number;
    static "1": number;
    static "2": number;
    static "3": number;
    static "4": number;
    static "5": number;
    static "6": number;
    static "7": number;
    static "8": number;
}

export namespace NasGsmWcdmaAcquisitionOrderPreference {
    export const $gtype: GObject.GType<NasGsmWcdmaAcquisitionOrderPreference>;
}

export enum NasGsmWcdmaAcquisitionOrderPreference {
    AUTOMATIC = 0,
    GSM = 1,
    WCDMA = 2,
}

export namespace NasHdrPersonality {
    export const $gtype: GObject.GType<NasHdrPersonality>;
}

export enum NasHdrPersonality {
    UNKNOWN = 0,
    HRPD = 1,
    EHRPD = 2,
}

export namespace NasHdrProtocolRevision {
    export const $gtype: GObject.GType<NasHdrProtocolRevision>;
}

export enum NasHdrProtocolRevision {
    NONE = 0,
    REL_0 = 1,
    REL_A = 2,
    REL_B = 3,
}

export namespace NasLteCellAccessStatus {
    export const $gtype: GObject.GType<NasLteCellAccessStatus>;
}

export enum NasLteCellAccessStatus {
    NORMAL_ONLY = 0,
    EMERGENCY_ONLY = 1,
    NO_CALLS = 2,
    ALL_CALLS = 3,
    UNKNOWN = 255,
}

export namespace NasLteRegistrationDomain {
    export const $gtype: GObject.GType<NasLteRegistrationDomain>;
}

export enum NasLteRegistrationDomain {
    NOT_APPLICABLE = 0,
    CS_ONLY = 1,
    PS_ONLY = 2,
    CS_PS = 3,
    LIMITED_SERVICE = 4,
}

export namespace NasNetworkDescriptionDisplay {
    export const $gtype: GObject.GType<NasNetworkDescriptionDisplay>;
}

export enum NasNetworkDescriptionDisplay {
    NO = 0,
    YES = 1,
    UNKNOWN = 255,
}

export namespace NasNetworkDescriptionEncoding {
    export const $gtype: GObject.GType<NasNetworkDescriptionEncoding>;
}

export enum NasNetworkDescriptionEncoding {
    UNSPECIFIED = 0,
    ASCII7 = 1,
    UNICODE = 4,
    GSM = 9,
}

export namespace NasNetworkNameSource {
    export const $gtype: GObject.GType<NasNetworkNameSource>;
}

export enum NasNetworkNameSource {
    UNKNOWN = 0,
    OPERATOR_PLMN_LIST_AND_PLMN_NETWORK_NAME = 1,
    COMMON_PCN_HANDSET_SPECIFICATION_AND_OPERATOR_NAME_STRING = 2,
    NITZ = 3,
    SE13 = 4,
    MCC_MNC = 5,
    SERVICE_PROVIDER_NAME = 6,
}

export namespace NasNetworkRegisterType {
    export const $gtype: GObject.GType<NasNetworkRegisterType>;
}

export enum NasNetworkRegisterType {
    AUTOMATIC = 1,
    MANUAL = 2,
}

export namespace NasNetworkScanResult {
    export const $gtype: GObject.GType<NasNetworkScanResult>;
}

export enum NasNetworkScanResult {
    SUCCESS = 0,
    ABORT = 1,
    RADIO_LINK_FAILURE = 2,
}

export namespace NasNetworkSelectionPreference {
    export const $gtype: GObject.GType<NasNetworkSelectionPreference>;
}

export enum NasNetworkSelectionPreference {
    AUTOMATIC = 0,
    MANUAL = 1,
}

export namespace NasNetworkSelectionRegistrationRestriction {
    export const $gtype: GObject.GType<NasNetworkSelectionRegistrationRestriction>;
}

export enum NasNetworkSelectionRegistrationRestriction {
    UNRESTRICTED = 0,
    CAMPED_ONLY = 1,
    LIMITED = 2,
}

export namespace NasNetworkServiceDomain {
    export const $gtype: GObject.GType<NasNetworkServiceDomain>;
}

export enum NasNetworkServiceDomain {
    NONE = 0,
    CS = 1,
    PS = 2,
    CS_PS = 3,
    UNKNOWN = 4,
}

export namespace NasNetworkType {
    export const $gtype: GObject.GType<NasNetworkType>;
}

export enum NasNetworkType {
    UNKNOWN = 0,
    "3GPP2" = 1,
    "3GPP" = 2,
}

export namespace NasPlmnEncodingScheme {
    export const $gtype: GObject.GType<NasPlmnEncodingScheme>;
}

export enum NasPlmnEncodingScheme {
    GSM = 0,
    UCS2LE = 1,
}

export namespace NasPlmnNameCountryInitials {
    export const $gtype: GObject.GType<NasPlmnNameCountryInitials>;
}

export enum NasPlmnNameCountryInitials {
    INITIALS_DO_NOT_ADD = 0,
    INIITALS_ADD = 1,
    INIITALS_UNSPECIFIED = 255,
}

export namespace NasPlmnNameSpareBits {
    export const $gtype: GObject.GType<NasPlmnNameSpareBits>;
}

export enum NasPlmnNameSpareBits {
    UNKNOWN = 0,
    BIT_8 = 1,
    BITS_78 = 2,
    BITS_68 = 3,
    BITS_58 = 4,
    BITS_48 = 5,
    BITS_38 = 6,
    BITS_28 = 7,
}

export namespace NasPreferenceDuration {
    export const $gtype: GObject.GType<NasPreferenceDuration>;
}

export enum NasPreferenceDuration {
    PERMANENT = 0,
    POWER_CYCLE = 1,
    ONE_CALL = 2,
    ONE_CALL_OR_TIME = 3,
    INTERNAL_ONE_CALL_1 = 4,
    INTERNAL_ONE_CALL_2 = 5,
    INTERNAL_ONE_CALL_3 = 6,
}

export namespace NasPsAttachAction {
    export const $gtype: GObject.GType<NasPsAttachAction>;
}

export enum NasPsAttachAction {
    ATTACH = 1,
    DETACH = 2,
}

export namespace NasRadioInterface {
    export const $gtype: GObject.GType<NasRadioInterface>;
}

export enum NasRadioInterface {
    UNKNOWN = -1,
    NONE = 0,
    CDMA_1X = 1,
    CDMA_1XEVDO = 2,
    AMPS = 3,
    GSM = 4,
    UMTS = 5,
    LTE = 8,
    TD_SCDMA = 9,
    "5GNR" = 12,
}

export namespace NasRegistrationState {
    export const $gtype: GObject.GType<NasRegistrationState>;
}

export enum NasRegistrationState {
    NOT_REGISTERED = 0,
    REGISTERED = 1,
    NOT_REGISTERED_SEARCHING = 2,
    REGISTRATION_DENIED = 3,
    UNKNOWN = 4,
}

export namespace NasRoamingIndicatorStatus {
    export const $gtype: GObject.GType<NasRoamingIndicatorStatus>;
}

export enum NasRoamingIndicatorStatus {
    ON = 0,
    OFF = 1,
}

export namespace NasRoamingPreference {
    export const $gtype: GObject.GType<NasRoamingPreference>;
}

export enum NasRoamingPreference {
    OFF = 1,
    NOT_OFF = 2,
    NOT_FLASHING = 3,
    ANY = 255,
}

export namespace NasRoamingStatus {
    export const $gtype: GObject.GType<NasRoamingStatus>;
}

export enum NasRoamingStatus {
    OFF = 0,
    ON = 1,
    BLINK = 2,
    OUT_OF_NEIGHBORHOOD = 3,
    OUT_OF_BUILDING = 4,
    PREFERRED_SYSTEM = 5,
    AVAILABLE_SYSTEM = 6,
    ALLIANCE_PARTNER = 7,
    PREMIUM_PARTNER = 8,
    FULL_SERVICE = 9,
    PARTIAL_SERVICE = 10,
    BANNER_ON = 11,
    BANNER_OFF = 12,
}

export namespace NasScellState {
    export const $gtype: GObject.GType<NasScellState>;
}

export enum NasScellState {
    DECONFIGURED = 0,
    DEACTIVATED = 1,
    ACTIVATED = 2,
}

export namespace NasServiceDomainPreference {
    export const $gtype: GObject.GType<NasServiceDomainPreference>;
}

export enum NasServiceDomainPreference {
    CS_ONLY = 0,
    PS_ONLY = 1,
    CS_PS = 2,
    PS_ATTACH = 3,
    PS_DETACH = 4,
}

export namespace NasServiceStatus {
    export const $gtype: GObject.GType<NasServiceStatus>;
}

export enum NasServiceStatus {
    NONE = 0,
    LIMITED = 1,
    AVAILABLE = 2,
    LIMITED_REGIONAL = 3,
    POWER_SAVE = 4,
}

export namespace NasSimRejectState {
    export const $gtype: GObject.GType<NasSimRejectState>;
}

export enum NasSimRejectState {
    UNAVAILABLE = 0,
    AVAILABLE = 1,
    CS_INVALID = 2,
    PS_INVALID = 3,
    CS_PS_INVALID = 4,
}

export namespace NasSwiEmmConnectionState {
    export const $gtype: GObject.GType<NasSwiEmmConnectionState>;
}

export enum NasSwiEmmConnectionState {
    RRC_IDLE = 0,
    WAITING_RRC_CFM = 1,
    RRC_CONNECTING = 2,
    RRC_RELEASING = 3,
    UNKNOWN = 255,
}

export namespace NasSwiEmmState {
    export const $gtype: GObject.GType<NasSwiEmmState>;
}

export enum NasSwiEmmState {
    DEREGISTERED = 0,
    REG_INITIATED = 1,
    REGISTERED = 2,
    TAU_INITIATED = 3,
    SR_INITIATED = 4,
    DEREG_INITIATED = 5,
    INVALID = 6,
    UNKNOWN = 255,
}

export namespace NasSwiImsRegState {
    export const $gtype: GObject.GType<NasSwiImsRegState>;
}

export enum NasSwiImsRegState {
    NO_SRV = 0,
    IN_PROG = 1,
    FAILED = 2,
    LIMITED = 3,
    FULL_SRV = 4,
    _UNKNOWN = 255,
}

export namespace NasSwiModemMode {
    export const $gtype: GObject.GType<NasSwiModemMode>;
}

export enum NasSwiModemMode {
    POWERING_OFF = 0,
    FACTORY_TEST = 1,
    OFFLINE = 2,
    OFFLINE_AMPS = 3,
    OFFLINE_CDMA = 4,
    ONLINE = 5,
    LOW_POWER = 6,
    RESETTING = 7,
    NETWORK_TEST = 8,
    OFFLINE_REQUEST = 9,
    PSEUDO_ONLINE = 10,
    RESETTING_MODEM = 11,
    UNKNOWN = 255,
}

export namespace NasSwiPsState {
    export const $gtype: GObject.GType<NasSwiPsState>;
}

export enum NasSwiPsState {
    ATTACHED = 0,
    DETACHED = 1,
    UNKNOWN = 255,
}

export namespace NasSwiSystemMode {
    export const $gtype: GObject.GType<NasSwiSystemMode>;
}

export enum NasSwiSystemMode {
    NO_SERVICE = 0,
    AMPS = 1,
    CDMA = 2,
    GSM = 3,
    HDR = 4,
    WCDMA = 5,
    GPS = 6,
    WLAN = 8,
    LTE = 9,
    UNKNOWN = 255,
}

export namespace NasUsagePreference {
    export const $gtype: GObject.GType<NasUsagePreference>;
}

export enum NasUsagePreference {
    UNKNOWN = 0,
    VOICE_CENTRIC = 1,
    DATA_CENTRIC = 2,
}

export namespace NasVoiceDomainPreference {
    export const $gtype: GObject.GType<NasVoiceDomainPreference>;
}

export enum NasVoiceDomainPreference {
    CS_ONLY = 0,
    PS_ONLY = 1,
    CS_PREFERRED = 2,
    PS_PREFERRED = 3,
}

export namespace NasWcdmaHsService {
    export const $gtype: GObject.GType<NasWcdmaHsService>;
}

export enum NasWcdmaHsService {
    HSDPA_HSUPA_UNSUPPORTED = 0,
    HSDPA_SUPPORTED = 1,
    HSUPA_SUPPORTED = 2,
    HSDPA_HSUPA_SUPPORTED = 3,
    HSDPA_PLUS_SUPPORTED = 4,
    HSDPA_PLUS_HSUPA_SUPPORTED = 5,
    DC_HSDPA_PLUS_SUPPORTED = 6,
    DC_HSDPA_PLUS_HSUPA_SUPPORTED = 7,
}

export namespace NasWcdmaRrcState {
    export const $gtype: GObject.GType<NasWcdmaRrcState>;
}

export enum NasWcdmaRrcState {
    DISCONNECTED = 0,
    CELL_PCH = 1,
    URA_PCH = 2,
    CELL_FACH = 3,
    CELL_DCH = 4,
}

export namespace OmaHfaFeatureDoneState {
    export const $gtype: GObject.GType<OmaHfaFeatureDoneState>;
}

export enum OmaHfaFeatureDoneState {
    NONE = 0,
    SUCCEEDED = 1,
    FAILED = 2,
}

export namespace OmaSessionFailedReason {
    export const $gtype: GObject.GType<OmaSessionFailedReason>;
}

export enum OmaSessionFailedReason {
    UNKNOWN = 0,
    NETWORK_UNAVAILABLE = 1,
    SERVER_UNAVAILABLE = 2,
    AUTHENTICATION_FAILED = 3,
    MAX_RETRY_EXCEEDED = 4,
    SESSION_CANCELLED = 5,
}

export namespace OmaSessionState {
    export const $gtype: GObject.GType<OmaSessionState>;
}

export enum OmaSessionState {
    COMPLETE_INFORMATION_UPDATED = 0,
    COMPLETE_UPDATED_INFORMATION_UNAVAILABLE = 1,
    FAILED = 2,
    RETRYING = 3,
    CONNECTING = 4,
    CONNECTED = 5,
    AUTHENTICATED = 6,
    MDN_DOWNLOADED = 7,
    MSID_DOWNLOADED = 8,
    PRL_DOWNLOADED = 9,
    MIP_PROFILE_DOWNLOADED = 10,
}

export namespace OmaSessionType {
    export const $gtype: GObject.GType<OmaSessionType>;
}

export enum OmaSessionType {
    CLIENT_INITIATED_DEVICE_CONFIGURE = 0,
    CLIENT_INITIATED_PRL_UPDATE = 1,
    CLIENT_INITIATED_HANDS_FREE_ACTIVATION = 2,
    DEVICE_INITIATED_HANDS_FREE_ACTIVATION = 3,
    NETWORK_INITIATED_PRL_UPDATE = 4,
    NETWORK_INITIATED_DEVICE_CONFIGURE = 5,
    DEVICE_INITIATED_PRL_UPDATE = 6,
}

export namespace PbmSessionType {
    export const $gtype: GObject.GType<PbmSessionType>;
}

export enum PbmSessionType {
    GW_PRIMARY = 0,
    "1X_PRIMARY" = 1,
    GW_SECONDARY = 2,
    "1X_SECONDARY" = 3,
    NONPROVISIONING_SLOT_1 = 4,
    NONPROVISIONING_SLOT_2 = 5,
    GLOBAL_PHONEBOOK_SLOT_1 = 6,
    GLOBAL_PHONEBOOK_SLOT_2 = 7,
}

export namespace PdcConfigurationType {
    export const $gtype: GObject.GType<PdcConfigurationType>;
}

export enum PdcConfigurationType {
    PLATFORM = 0,
    SOFTWARE = 1,
}

export namespace PdsNetworkMode {
    export const $gtype: GObject.GType<PdsNetworkMode>;
}

export enum PdsNetworkMode {
    UMTS = 0,
    CDMA = 1,
}

export namespace PdsOperatingMode {
    export const $gtype: GObject.GType<PdsOperatingMode>;
}

export enum PdsOperatingMode {
    STANDALONE = 0,
    MS_BASED = 1,
    MS_ASSISTED = 2,
}

export namespace PdsOperationMode {
    export const $gtype: GObject.GType<PdsOperationMode>;
}

export enum PdsOperationMode {
    UNKNOWN = -1,
    STANDALONE = 0,
    MS_BASED = 1,
    MS_ASSISTED = 2,
}

export namespace PdsPositionSessionStatus {
    export const $gtype: GObject.GType<PdsPositionSessionStatus>;
}

export enum PdsPositionSessionStatus {
    SUCCESS = 0,
    IN_PROGRESS = 1,
    GENERAL_FAILURE = 2,
    TIMEOUT = 3,
    USER_ENDED_SESSION = 4,
    BAD_PARAMETER = 5,
    PHONE_OFFLINE = 6,
    ENGINE_LOCKED = 7,
    E911_SESSION_IN_PROGRESS = 8,
}

export namespace PdsTrackingSessionState {
    export const $gtype: GObject.GType<PdsTrackingSessionState>;
}

export enum PdsTrackingSessionState {
    UNKNOWN = 0,
    INACTIVE = 1,
    ACTIVE = 2,
}

export class ProtocolError extends GLib.Error {
    static $gtype: GObject.GType<ProtocolError>;

    constructor(options: { message: string; code: number });
    constructor(copy: ProtocolError);

    // Properties
    static NONE: number;
    static MALFORMEDMESSAGE: number;
    static NOMEMORY: number;
    static INTERNAL: number;
    static ABORTED: number;
    static CLIENTIDSEXHAUSTED: number;
    static UNABORTABLETRANSACTION: number;
    static INVALIDCLIENTID: number;
    static NOTHRESHOLDSPROVIDED: number;
    static INVALIDHANDLE: number;
    static INVALIDPROFILE: number;
    static INVALIDPINID: number;
    static INCORRECTPIN: number;
    static NONETWORKFOUND: number;
    static CALLFAILED: number;
    static OUTOFCALL: number;
    static NOTPROVISIONED: number;
    static MISSINGARGUMENT: number;
    static ARGUMENTTOOLONG: number;
    static INVALIDTRANSACTIONID: number;
    static DEVICEINUSE: number;
    static NETWORKUNSUPPORTED: number;
    static DEVICEUNSUPPORTED: number;
    static NOEFFECT: number;
    static NOFREEPROFILE: number;
    static INVALIDPDPTYPE: number;
    static INVALIDTECHNOLOGYPREFERENCE: number;
    static INVALIDPROFILETYPE: number;
    static INVALIDSERVICETYPE: number;
    static INVALIDREGISTERACTION: number;
    static INVALIDPSATTACHACTION: number;
    static AUTHENTICATIONFAILED: number;
    static PINBLOCKED: number;
    static PINALWAYSBLOCKED: number;
    static UIMUNINITIALIZED: number;
    static MAXIMUMQOSREQUESTSINUSE: number;
    static INCORRECTFLOWFILTER: number;
    static NETWORKQOSUNAWARE: number;
    static INVALIDQOSID: number;
    static REQUESTEDNUMBERUNSUPPORTED: number;
    static INTERFACENOTFOUND: number;
    static FLOWSUSPENDED: number;
    static INVALIDDATAFORMAT: number;
    static GENERALERROR: number;
    static UNKNOWNERROR: number;
    static INVALIDARGUMENT: number;
    static INVALIDINDEX: number;
    static NOENTRY: number;
    static DEVICESTORAGEFULL: number;
    static DEVICENOTREADY: number;
    static NETWORKNOTREADY: number;
    static WMSCAUSECODE: number;
    static WMSMESSAGENOTSENT: number;
    static WMSMESSAGEDELIVERYFAILURE: number;
    static WMSINVALIDMESSAGEID: number;
    static WMSENCODING: number;
    static AUTHENTICATIONLOCK: number;
    static INVALIDTRANSITION: number;
    static NOTMCASTINTERFACE: number;
    static MAXIMUMMCASTREQUESTSINUSE: number;
    static INVALIDMCASTHANDLE: number;
    static INVALIDIPFAMILYPREFERENCE: number;
    static SESSIONINACTIVE: number;
    static SESSIONINVALID: number;
    static SESSIONOWNERSHIP: number;
    static INSUFFICIENTRESOURCES: number;
    static DISABLED: number;
    static INVALIDOPERATION: number;
    static INVALIDQMICOMMAND: number;
    static WMSTPDUTYPE: number;
    static WMSSMSCADDRESS: number;
    static INFORMATIONUNAVAILABLE: number;
    static SEGMENTTOOLONG: number;
    static SEGMENTORDER: number;
    static BUNDLINGNOTSUPPORTED: number;
    static OPERATIONPARTIALFAILURE: number;
    static POLICYMISMATCH: number;
    static SIMFILENOTFOUND: number;
    static EXTENDEDINTERNAL: number;
    static ACCESSDENIED: number;
    static HARDWARERESTRICTED: number;
    static ACKNOTSENT: number;
    static INJECTTIMEOUT: number;
    static INCOMPATIBLESTATE: number;
    static FDNRESTRICT: number;
    static SUPSFAILURECASE: number;
    static NORADIO: number;
    static NOTSUPPORTED: number;
    static NOSUBSCRIPTION: number;
    static CARDCALLCONTROLFAILED: number;
    static NETWORKABORTED: number;
    static MSGBLOCKED: number;
    static INVALIDSESSIONTYPE: number;
    static INVALIDPBTYPE: number;
    static NOSIM: number;
    static PBNOTREADY: number;
    static PINRESTRICTION: number;
    static PIN1RESTRICTION: number;
    static PUKRESTRICTION: number;
    static PUK2RESTRICTION: number;
    static PBACCESSRESTRICTED: number;
    static PBDELETEINPROGRESS: number;
    static PBTEXTTOOLONG: number;
    static PBNUMBERTOOLONG: number;
    static PBHIDDENKEYRESTRICTION: number;
    static PBNOTAVAILABLE: number;
    static DEVICEMEMORYERROR: number;
    static NOPERMISSION: number;
    static TOOSOON: number;
    static TIMENOTACQUIRED: number;
    static OPERATIONINPROGRESS: number;
    static FWWRITEFAILED: number;
    static FWINFOREADFAILED: number;
    static FWFILENOTFOUND: number;
    static FWDIRNOTFOUND: number;
    static FWALREADYACTIVATED: number;
    static FWCANNOTGENERICIMAGE: number;
    static FWFILEOPENFAILED: number;
    static FWUPDATEDISCONTINUOUSFRAME: number;
    static FWUPDATEFAILED: number;
    static CATEVENTREGISTRATIONFAILED: number;
    static CATINVALIDTERMINALRESPONSE: number;
    static CATINVALIDENVELOPECOMMAND: number;
    static CATENVELOPECOMMANDBUSY: number;
    static CATENVELOPECOMMANDFAILED: number;

    // Members
    static get_string(val: ProtocolError): string;

    static quark(): GLib.Quark;
}

export namespace QosEvent {
    export const $gtype: GObject.GType<QosEvent>;
}

export enum QosEvent {
    UNKNOWN = 0,
    ACTIVATED = 1,
    SUSPENDED = 2,
    GONE = 3,
    MODIFY_ACCEPTED = 4,
    MODIFY_REJECTED = 5,
    INFO_CODE_UPDATED = 6,
}

export namespace QosStatus {
    export const $gtype: GObject.GType<QosStatus>;
}

export enum QosStatus {
    UNKNOWN = 0,
    ACTIVATED = 1,
    SUSPENDED = 2,
    GONE = 3,
}

export namespace Service {
    export const $gtype: GObject.GType<Service>;
}

export enum Service {
    UNKNOWN = -1,
    CTL = 0,
    WDS = 1,
    DMS = 2,
    NAS = 3,
    QOS = 4,
    WMS = 5,
    PDS = 6,
    AUTH = 7,
    AT = 8,
    VOICE = 9,
    CAT2 = 10,
    UIM = 11,
    PBM = 12,
    QCHAT = 13,
    RMTFS = 14,
    TEST = 15,
    LOC = 16,
    SAR = 17,
    IMS = 18,
    ADC = 19,
    CSD = 20,
    MFS = 21,
    TIME = 22,
    TS = 23,
    TMD = 24,
    SAP = 25,
    WDA = 26,
    TSYNC = 27,
    RFSA = 28,
    CSVT = 29,
    QCMAP = 30,
    IMSP = 31,
    IMSVT = 32,
    IMSA = 33,
    COEX = 34,
    PDC = 36,
    STX = 38,
    BIT = 39,
    IMSRTP = 40,
    RFRPE = 41,
    DSD = 42,
    SSCTL = 43,
    CAT = 224,
    RMS = 225,
    OMA = 226,
    FOTA = 230,
    GMS = 231,
    GAS = 232,
}

export namespace UimCardApplicationPersonalizationFeature {
    export const $gtype: GObject.GType<UimCardApplicationPersonalizationFeature>;
}

export enum UimCardApplicationPersonalizationFeature {
    GW_NETWORK = 0,
    GW_NETWORK_SUBSET = 1,
    GW_SERVICE_PROVIDER = 2,
    GW_CORPORATE = 3,
    GW_UIM = 4,
    "1X_NETWORK_TYPE_1" = 5,
    "1X_NETWORK_TYPE_2" = 6,
    "1X_HRPD" = 7,
    "1X_SERVICE_PROVIDER" = 8,
    "1X_CORPORATE" = 9,
    "1X_RUIM" = 10,
    UNKNOWN = 11,
}

export namespace UimCardApplicationPersonalizationState {
    export const $gtype: GObject.GType<UimCardApplicationPersonalizationState>;
}

export enum UimCardApplicationPersonalizationState {
    UNKNOWN = 0,
    IN_PROGRESS = 1,
    READY = 2,
    CODE_REQUIRED = 3,
    PUK_CODE_REQUIRED = 4,
    PERMANENTLY_BLOCKED = 5,
}

export namespace UimCardApplicationState {
    export const $gtype: GObject.GType<UimCardApplicationState>;
}

export enum UimCardApplicationState {
    UNKNOWN = 0,
    DETECTED = 1,
    PIN1_OR_UPIN_PIN_REQUIRED = 2,
    PUK1_OR_UPIN_PUK_REQUIRED = 3,
    CHECK_PERSONALIZATION_STATE = 4,
    PIN1_BLOCKED = 5,
    ILLEGAL = 6,
    READY = 7,
}

export namespace UimCardApplicationType {
    export const $gtype: GObject.GType<UimCardApplicationType>;
}

export enum UimCardApplicationType {
    UNKNOWN = 0,
    SIM = 1,
    USIM = 2,
    RUIM = 3,
    CSIM = 4,
    ISIM = 5,
}

export namespace UimCardError {
    export const $gtype: GObject.GType<UimCardError>;
}

export enum UimCardError {
    UNKNOWN = 0,
    POWER_DOWN = 1,
    POLL = 2,
    NO_ATR_RECEIVED = 3,
    VOLTAGE_MISMATCH = 4,
    PARITY = 5,
    POSSIBLY_REMOVED = 6,
    TECHNICAL = 7,
}

export namespace UimCardProtocol {
    export const $gtype: GObject.GType<UimCardProtocol>;
}

export enum UimCardProtocol {
    UNKNOWN = 0,
    ICC = 1,
    UICC = 2,
}

export namespace UimCardState {
    export const $gtype: GObject.GType<UimCardState>;
}

export enum UimCardState {
    ABSENT = 0,
    PRESENT = 1,
    ERROR = 2,
}

export namespace UimFileType {
    export const $gtype: GObject.GType<UimFileType>;
}

export enum UimFileType {
    TRANSPARENT = 0,
    CYCLIC = 1,
    LINEAR_FIXED = 2,
    DEDICATED_FILE = 3,
    MASTER_FILE = 4,
}

export namespace UimPhysicalCardState {
    export const $gtype: GObject.GType<UimPhysicalCardState>;
}

export enum UimPhysicalCardState {
    UNKNOWN = 0,
    ABSENT = 1,
    PRESENT = 2,
}

export namespace UimPinId {
    export const $gtype: GObject.GType<UimPinId>;
}

export enum UimPinId {
    UNKNOWN = 0,
    PIN1 = 1,
    PIN2 = 2,
    UPIN = 3,
    HIDDEN_KEY = 4,
}

export namespace UimPinState {
    export const $gtype: GObject.GType<UimPinState>;
}

export enum UimPinState {
    NOT_INITIALIZED = 0,
    ENABLED_NOT_VERIFIED = 1,
    ENABLED_VERIFIED = 2,
    DISABLED = 3,
    BLOCKED = 4,
    PERMANENTLY_BLOCKED = 5,
}

export namespace UimSecurityAttributeLogic {
    export const $gtype: GObject.GType<UimSecurityAttributeLogic>;
}

export enum UimSecurityAttributeLogic {
    ALWAYS = 0,
    NEVER = 1,
    AND = 2,
    OR = 3,
    SINGLE = 4,
}

export namespace UimSessionType {
    export const $gtype: GObject.GType<UimSessionType>;
}

export enum UimSessionType {
    PRIMARY_GW_PROVISIONING = 0,
    PRIMARY_1X_PROVISIONING = 1,
    SECONDARY_GW_PROVISIONING = 2,
    SECONDARY_1X_PROVISIONING = 3,
    NONPROVISIONING_SLOT_1 = 4,
    NONPROVISIONING_SLOT_2 = 5,
    CARD_SLOT_1 = 6,
    CARD_SLOT_2 = 7,
    LOGICAL_CHANNEL_SLOT_1 = 8,
    LOGICAL_CHANNEL_SLOT_2 = 9,
}

export namespace UimSlotState {
    export const $gtype: GObject.GType<UimSlotState>;
}

export enum UimSlotState {
    INACTIVE = 0,
    ACTIVE = 1,
}

export namespace VoiceAlphaDataCodingScheme {
    export const $gtype: GObject.GType<VoiceAlphaDataCodingScheme>;
}

export enum VoiceAlphaDataCodingScheme {
    GSM = 1,
    UCS2 = 2,
}

export class VoiceAls {
    static $gtype: GObject.GType<VoiceAls>;

    constructor(copy: VoiceAls);

    // Properties
    static "1": number;
    static "2": number;
}

export namespace VoiceCallControlResultType {
    export const $gtype: GObject.GType<VoiceCallControlResultType>;
}

export enum VoiceCallControlResultType {
    VOICE = 0,
    SUPS = 1,
    USSD = 2,
}

export namespace VoiceCallControlSupplementaryServiceType {
    export const $gtype: GObject.GType<VoiceCallControlSupplementaryServiceType>;
}

export enum VoiceCallControlSupplementaryServiceType {
    ACTIVATE = 1,
    DEACTIVATE = 2,
    REGISTER = 3,
    ERASE = 4,
    INTERROGATE = 5,
    REGISTER_PASSWORD = 6,
    USSD = 7,
}

export namespace VoiceCallDirection {
    export const $gtype: GObject.GType<VoiceCallDirection>;
}

export enum VoiceCallDirection {
    UNKNOWN = 0,
    MO = 1,
    MT = 2,
}

export namespace VoiceCallEndReason {
    export const $gtype: GObject.GType<VoiceCallEndReason>;
}

export enum VoiceCallEndReason {
    OFFLINE = 0,
    CDMA_LOCK = 20,
    NO_SERVICE = 21,
    FADE = 22,
    INTERCEPT = 23,
    REORDER = 24,
    RELEASE_NORMAL = 25,
    RELEASE_SO_REJECT = 26,
    INCOMING_CALL = 27,
    ALERT_STOP = 28,
    CLIENT_END = 29,
    ACTIVATION = 30,
    MC_ABORT = 31,
    MAX_ACCESS_PROBE = 32,
    PSIST_N = 33,
    UIM_NOT_PRESENT = 34,
    ACCESS_ATTEMPT_IN_PROGRESS = 35,
    ACCESS_FAILURE = 36,
    ACCESS_RETRY_ORDER = 37,
    CCS_NOT_SUPPORTED_BY_BS = 38,
    NO_RESPONSE_FROM_BS = 39,
    REJECTED_BY_BS = 40,
    INCOMPATIBLE = 41,
    ACCESS_BLOCK = 42,
    ALREADY_IN_TC = 43,
    EMERGENCY_FLASHED = 44,
    USER_CALL_ORIGINATED_DURING_GPS = 45,
    USER_CALL_ORIGINATED_DURING_SMS = 46,
    USER_CALL_ORIGINATED_DURING_DATA = 47,
    REDIRECTION_OR_HANDOFF = 48,
    ACCESS_BLOCK_ALL = 49,
    OTASP_SPC_ERR = 50,
    IS707B_MAX_ACCESS_PROBES = 51,
    ACCESS_FAILURE_REJECT_ORDER = 52,
    ACCESS_FAILURE_RETRY_ORDER = 53,
    TIMEOUT_T42 = 54,
    TIMEOUT_T40 = 55,
    SERVICE_INIT_FAILURE = 56,
    TIMEOUT_T50 = 57,
    TIMEOUT_T51 = 58,
    RL_ACK_TIMEOUT = 59,
    BAD_FORWARD_LINK = 60,
    TRM_REQUEST_FAILED = 61,
    TIMEOUT_T41 = 62,
    INCOMING_REJECTED = 102,
    SETUP_REJECTED = 103,
    NETWORK_END = 104,
    NO_FUNDS = 105,
    NO_GW_SERVICE = 106,
    NO_CDMA_SERVICE = 107,
    NO_FULL_SERVICE = 108,
    MAX_PS_CALLS = 109,
    UNKNOWN_SUBSCRIBER = 110,
    ILLEGAL_SUBSCRIBER = 111,
    BEARER_SERVICE_NOT_PROVISIONED = 112,
    TELE_SERVICE_NOT_PROVISIONED = 113,
    ILLEGAL_EQUIPMENT = 114,
    CALL_BARRED = 115,
    ILLEGAL_SS_OPERATION = 116,
    SS_ERROR_STATUS = 117,
    SS_NOT_AVAILABLE = 118,
    SS_SUBSCRIPTION_VIOLATION = 119,
    SS_INCOMPATIBILITY = 120,
    FACILITY_NOT_SUPPORTED = 121,
    ABSENT_SUBSCRIBER = 122,
    SHORT_TERM_DENIAL = 123,
    LONG_TERM_DENIAL = 124,
    SYSTEM_FAILURE = 125,
    DATA_MISSING = 126,
    UNEXPECTED_DATA_VALUE = 127,
    PASSWORD_REGISTRATION_FAILURE = 128,
    NEGATIVE_PASSWORD_CHECK = 129,
    NUM_OF_PASSWORD_ATTEMPTS_VIOLATION = 130,
    POSITION_METHOD_FAILURE = 131,
    UNKNOWN_ALPHABET = 132,
    USSD_BUSY = 133,
    REJECTED_BY_USER = 134,
    REJECTED_BY_NETWORK = 135,
    DEFLECTION_TO_SERVED_SUBSCRIBER = 136,
    SPECIAL_SERVICE_CODE = 137,
    INVALID_DEFLECTED_TO_NUMBER = 138,
    MULTIPARTY_PARTICIPANTS_EXCEEDED = 139,
    RESOURCES_NOT_AVAILABLE = 140,
    UNASSIGNED_NUMBER = 141,
    NO_ROUTE_TO_DESTINATION = 142,
    CHANNEL_UNACCEPTABLE = 143,
    OPERATOR_DETERMINED_BARRING = 144,
    NORMAL_CALL_CLEARING = 145,
    USER_BUSY = 146,
    NO_USER_RESPONDING = 147,
    USER_ALERTING_NO_ANSWER = 148,
    CALL_REJECTED = 149,
    NUMBER_CHANGED = 150,
    PREEMPTION = 151,
    DESTINATION_OUT_OF_ORDER = 152,
    INVALID_NUMBER_FORMAT = 153,
    FACILITY_REJECTED = 154,
    RESPONSE_TO_STATUS_ENQUIRY = 155,
    NORMAL_UNSPECIFIED = 156,
    NO_CIRCUIT_OR_CHANNEL_AVAILABLE = 157,
    NETWORK_OUT_OF_ORDER = 158,
    TEMPORARY_FAILURE = 159,
    SWITCHING_EQUIPMENT_CONGESTION = 160,
    ACCESS_INFORMATION_DISCARDED = 161,
    REQUESTED_CIRCUIT_OR_CHANNEL_NOT_AVAILABLE = 162,
    RESOURCES_UNAVAILABLE_OR_UNSPECIFIED = 163,
    QOS_UNAVAILABLE = 164,
    REQUESTED_FACILITY_NOT_SUBSCRIBED = 165,
    INCOMING_CALLS_BARRED_WITHIN_CUG = 166,
    BEARER_CAPABILITY_NOT_AUTH = 167,
    BEARER_CAPABILITY_UNAVAILABLE = 168,
    SERVICE_OPTION_NOT_AVAILABLE = 169,
    ACM_LIMIT_EXCEEDED = 170,
    BEARER_SERVICE_NOT_IMPLEMENTED = 171,
    REQUESTED_FACILITY_NOT_IMPLEMENTED = 172,
    ONLY_DIGITAL_INFORMATION_BEARER_AVAILABLE = 173,
    SERVICE_OR_OPTION_NOT_IMPLEMENTED = 174,
    INVALID_TRANSACTION_IDENTIFIER = 175,
    USER_NOT_MEMBER_OF_CUG = 176,
    INCOMPATIBLE_DESTINATION = 177,
    INVALID_TRANSIT_NETWORK_SELECTION = 178,
    SEMANTICALLY_INCORRECT_MESSAGE = 179,
    INVALID_MANDATORY_INFORMATION = 180,
    MESSAGE_TYPE_NOT_IMPLEMENTED = 181,
    MESSAGE_TYPE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 182,
    INFORMATION_ELEMENT_NON_EXISTENT = 183,
    CONDITIONAL_IE_ERROR = 184,
    MESSAGE_NOT_COMPATIBLE_WITH_PROTOCOL_STATE = 185,
    RECOVERY_ON_TIMER_EXPIRED = 186,
    PROTOCOL_ERROR_UNSPECIFIED = 187,
    INTERWORKING_UNSPECIFIED = 188,
    OUTGOING_CALLS_BARRED_WITHIN_CUG = 189,
    NO_CUG_SELECTION = 190,
    UNKNOWN_CUG_INDEX = 191,
    CUG_INDEX_INCOMPATIBLE = 192,
    CUG_CALL_FAILURE_UNSPECIFIED = 193,
    CLIR_NOT_SUBSCRIBED = 194,
    CCBS_POSSIBLE = 195,
    CCBS_NOT_POSSIBLE = 196,
    IMSI_UNKNOWN_IN_HLR = 197,
    ILLEGAL_MS = 198,
    IMSI_UNKNOWN_IN_VLR = 199,
    IMEI_NOT_ACCEPTED = 200,
    ILLEGAL_ME = 201,
    PLMN_NOT_ALLOWED = 202,
    LOCATION_AREA_NOT_ALLOWED = 203,
    ROAMING_NOT_ALLOWED_IN_THIS_LOCATION_AREA = 204,
    NO_SUITABLE_CELLS_IN_LOCATION_AREA = 205,
    NETWORK_FAILURE = 206,
    MAC_FAILURE = 207,
    SYNCH_FAILURE = 208,
    NETWORK_CONGESTION = 209,
    GSM_AUTHENTICATION_UNACCEPTABLE = 210,
    SERVICE_NOT_SUBSCRIBED = 211,
    SERVICE_TEMPORARILY_OUT_OF_ORDER = 212,
    CALL_CANNOT_BE_IDENTIFIED = 213,
    INCORRECT_SEMANTICS_IN_MESSAGE = 214,
    MANDATORY_INFORMATION_INVALID = 215,
    ACCESS_STRATUM_FAILURE = 216,
    INVALID_SIM = 217,
    WRONG_STATE = 218,
    ACCESS_CLASS_BLOCKED = 219,
    NO_RESOURCES = 220,
    INVALID_USER_DATA = 221,
    TIMER_T3230_EXPIRED = 222,
    NO_CELL_AVAILABLE = 223,
    ABORT_MESSAGE_RECEIVED = 224,
    RADIO_LINK_LOST = 225,
    TIMER_T303_EXPIRED = 226,
    CNM_MM_RELEASE_PENDING = 227,
    ACCESS_STRATUM_REJECT_RR_RELEASE_INDICATION = 228,
    ACCESS_STRATUM_REJECT_RR_RANDOM_ACCESS_FAILURE = 229,
    ACCESS_STRATUM_REJECT_RRC_RELEASE_INDICATION = 230,
    ACCESS_STRATUM_REJECT_RRC_CLOSE_SESSION_INDICATION = 231,
    ACCESS_STRATUM_REJECT_RRC_OPEN_SESSION_FAILURE = 232,
    ACCESS_STRATUM_REJECT_LOW_LEVEL_FAILURE = 233,
    ACCESS_STRATUM_REJECT_LOW_LEVEL_FAILURE_REDIAL_NOT_ALLOWED = 234,
    ACCESS_STRATUM_REJECT_LOW_LEVEL_IMMEDIATE_RETRY = 235,
    ACCESS_STRATUM_REJECT_ABORT_RADIO_UNAVAILABLE = 236,
    SERVICE_OPTION_NOT_SUPPORTED = 237,
    BAD_REQUEST_WAIT_INVITE = 300,
    BAD_REQUEST_WAIT_REINVITE = 301,
    INVALID_REMOTE_URI = 302,
    REMOTE_UNSUPPORTED_MEDIA_TYPE = 303,
    PEER_NOT_REACHABLE = 304,
    NETWORK_NO_RESPONSE_TIMEOUT = 305,
    NETWORK_NO_RESPONSE_HOLD_FAILURE = 306,
    DATA_CONNECTION_LOST = 307,
    UPGRADE_DOWNGRADE_REJECTED = 308,
    SIP_403_FORBIDDEN = 309,
    NO_NETWORK_RESPONSE = 310,
    UPGRADE_DOWNGRADE_FAILED = 311,
    UPGRADE_DOWNGRADE_CANCELLED = 312,
    SSAC_REJECT = 313,
    THERMAL_EMERGENCY = 314,
    "1XCSFB_SOFT_FAILURE" = 315,
    "1XCSFB_HARD_FAILURE" = 316,
}

export namespace VoiceCallMode {
    export const $gtype: GObject.GType<VoiceCallMode>;
}

export enum VoiceCallMode {
    UNKNOWN = 0,
    CDMA = 1,
    GSM = 2,
    UMTS = 3,
    LTE = 4,
}

export namespace VoiceCallState {
    export const $gtype: GObject.GType<VoiceCallState>;
}

export enum VoiceCallState {
    UNKNOWN = 0,
    ORIGINATION = 1,
    INCOMING = 2,
    CONVERSATION = 3,
    CC_IN_PROGRESS = 4,
    ALERTING = 5,
    HOLD = 6,
    WAITING = 7,
    DISCONNECTING = 8,
    END = 9,
    SETUP = 10,
}

export namespace VoiceCallType {
    export const $gtype: GObject.GType<VoiceCallType>;
}

export enum VoiceCallType {
    VOICE = 0,
    VOICE_IP = 2,
    OTAPA = 6,
    NON_STD_OTASP = 8,
    EMERGENCY = 9,
    SUPS = 10,
}

export namespace VoiceDomain {
    export const $gtype: GObject.GType<VoiceDomain>;
}

export enum VoiceDomain {
    CS_ONLY = 0,
    PS_ONLY = 1,
    CS_PREFERRED = 2,
    PS_PREFERRED = 3,
}

export namespace VoicePresentation {
    export const $gtype: GObject.GType<VoicePresentation>;
}

export enum VoicePresentation {
    ALLOWED = 0,
    RESTRICTED = 1,
    UNAVAILABLE = 2,
    PAYPHONE = 4,
}

export namespace VoicePrivacy {
    export const $gtype: GObject.GType<VoicePrivacy>;
}

export enum VoicePrivacy {
    STANDARD = 0,
    ENHANCED = 1,
}

export namespace VoiceServiceOption {
    export const $gtype: GObject.GType<VoiceServiceOption>;
}

export enum VoiceServiceOption {
    WILD = 0,
    IS_96A = 1,
    EVRC = 3,
    "13K_IS733" = 17,
    SELECTABLE_MODE_VOCODER = 56,
    "4GV_NARROW_BAND" = 68,
    "4GV_WIDE_BAND" = 70,
    "13K" = 32768,
    IS_96 = 32769,
    WVRC = 32803,
}

export namespace VoiceTtyMode {
    export const $gtype: GObject.GType<VoiceTtyMode>;
}

export enum VoiceTtyMode {
    FULL = 0,
    VCO = 1,
    HCO = 2,
    OFF = 3,
}

export namespace VoiceUserAction {
    export const $gtype: GObject.GType<VoiceUserAction>;
}

export enum VoiceUserAction {
    UNKNOWN = 0,
    NOT_REQUIRED = 1,
    REQUIRED = 2,
}

export namespace VoiceUssDataCodingScheme {
    export const $gtype: GObject.GType<VoiceUssDataCodingScheme>;
}

export enum VoiceUssDataCodingScheme {
    UNKNOWN = 0,
    ASCII = 1,
    "8BIT" = 2,
    UCS2 = 3,
}

export namespace WdaDataAggregationProtocol {
    export const $gtype: GObject.GType<WdaDataAggregationProtocol>;
}

export enum WdaDataAggregationProtocol {
    DISABLED = 0,
    TLP = 1,
    QC_NCM = 2,
    MBIM = 3,
    RNDIS = 4,
    QMAP = 5,
}

export namespace WdaLinkLayerProtocol {
    export const $gtype: GObject.GType<WdaLinkLayerProtocol>;
}

export enum WdaLinkLayerProtocol {
    UNKNOWN = 0,
    "802_3" = 1,
    RAW_IP = 2,
}

export namespace WdsAutoconnectSetting {
    export const $gtype: GObject.GType<WdsAutoconnectSetting>;
}

export enum WdsAutoconnectSetting {
    DISABLED = 0,
    ENABLED = 1,
    PAUSED = 2,
}

export namespace WdsAutoconnectSettingRoaming {
    export const $gtype: GObject.GType<WdsAutoconnectSettingRoaming>;
}

export enum WdsAutoconnectSettingRoaming {
    ALLOWED = 0,
    HOME_ONLY = 1,
}

export namespace WdsCallEndReason {
    export const $gtype: GObject.GType<WdsCallEndReason>;
}

export enum WdsCallEndReason {
    GENERIC_UNSPECIFIED = 1,
    GENERIC_CLIENT_END = 2,
    GENERIC_NO_SERVICE = 3,
    GENERIC_FADE = 4,
    GENERIC_RELEASE_NORMAL = 5,
    GENERIC_ACCESS_ATTEMPT_IN_PROGRESS = 6,
    GENERIC_ACCESS_FAILURE = 7,
    GENERIC_REDIRECTION_OR_HANDOFF = 8,
    GENERIC_CLOSE_IN_PROGRESS = 9,
    GENERIC_AUTHENTICATION_FAILED = 10,
    GENERIC_INTERNAL_ERROR = 11,
    CDMA_LOCK = 500,
    CDMA_INTERCEPT = 501,
    CDMA_REORDER = 502,
    CDMA_RELEASE_SO_REJECT = 503,
    CDMA_INCOMING_CALL = 504,
    CDMA_ALERT_STOP = 505,
    CDMA_ACTIVATION = 506,
    CDMA_MAX_ACCESS_PROBES = 507,
    CDMA_CCS_NOT_SUPPORTED_BY_BS = 508,
    CDMA_NO_RESPONSE_FROM_BS = 509,
    CDMA_REJECTED_BY_BS = 510,
    CDMA_INCOMPATIBLE = 511,
    CDMA_ALREADY_IN_TC = 512,
    CDMA_USER_CALL_ORIGINATED_DURING_GPS = 513,
    CDMA_USER_CALL_ORIGINATED_DURING_SMS = 514,
    CDMA_NO_SERVICE = 515,
    GSM_WCDMA_CONFERENCE_FAILED = 1000,
    GSM_WCDMA_INCOMING_REJECTED = 1001,
    GSM_WCDMA_NO_SERVICE = 1002,
    GSM_WCDMA_NETWORK_END = 1003,
    GSM_WCDMA_LLC_SNDCP_FAILURE = 1004,
    GSM_WCDMA_INSUFFICIENT_RESOURCES = 1005,
    GSM_WCDMA_OPTION_TEMPORARILY_OUT_OF_ORDER = 1006,
    GSM_WCDMA_NSAPI_ALREADY_USED = 1007,
    GSM_WCDMA_REGULAR_DEACTIVATION = 1008,
    GSM_WCDMA_NETWORK_FAILURE = 1009,
    GSM_WCDMA_REATTACH_REQUIRED = 1010,
    GSM_WCDMA_PROTOCOL_ERROR = 1011,
    GSM_WCDMA_OPERATOR_DETERMINED_BARRING = 1012,
    GSM_WCDMA_UNKNOWN_APN = 1013,
    GSM_WCDMA_UNKNOWN_PDP = 1014,
    GSM_WCDMA_GGSN_REJECT = 1015,
    GSM_WCDMA_ACTIVATION_REJECT = 1016,
    GSM_WCDMA_OPTION_NOT_SUPPORTED = 1017,
    GSM_WCDMA_OPTION_UNSUBSCRIBED = 1018,
    GSM_WCDMA_QOS_NOT_ACCEPTED = 1019,
    GSM_WCDMA_TFT_SEMANTIC_ERROR = 1020,
    GSM_WCDMA_TFT_SYNTAX_ERROR = 1021,
    GSM_WCDMA_UNKNOWN_PDP_CONTEXT = 1022,
    GSM_WCDMA_FILTER_SEMANTIC_ERROR = 1023,
    GSM_WCDMA_FILTER_SYNTAX_ERROR = 1024,
    GSM_WCDMA_PDP_WITHOUT_ACTIVE_TFT = 1025,
    GSM_WCDMA_INVALID_TRANSACTION_ID = 1026,
    GSM_WCDMA_MESSAGE_INCORRECT_SEMANTIC = 1027,
    GSM_WCDMA_INVALID_MANDATORY_INFO = 1028,
    GSM_WCDMA_MESSAGE_TYPE_UNSUPPORTED = 1029,
    GSM_WCDMA_MESSAGE_TYPE_NONCOMPATIBLE_STATE = 1030,
    GSM_WCDMA_UNKNOWN_INFO_ELEMENT = 1031,
    GSM_WCDMA_CONDITIONAL_IE_ERROR = 1032,
    GSM_WCDMA_MESSAGE_AND_PROTOCOL_STATE_UNCOMPATIBLE = 1033,
    GSM_WCDMA_APN_TYPE_CONFLICT = 1034,
    GSM_WCDMA_NO_GPRS_CONTEXT = 1035,
    GSM_WCDMA_FEATURE_NOT_SUPPORTED = 1036,
    EVDO_CONNECTION_DENY_GENERAL_OR_BUSY = 1500,
    EVDO_CONNECTION_DENY_BILLING_OR_AUTHENTICATION_FAILURE = 1501,
    EVDO_HDR_CHANGE = 1502,
    EVDO_HDR_EXIT = 1503,
    EVDO_HDR_NO_SESSION = 1504,
    EVDO_HDR_ORIGINATION_DURING_GPS_FIX = 1505,
    EVDO_HDR_CONNECTION_SETUP_TIMEOUT = 1506,
    EVDO_HDR_RELEASED_BY_CM = 1507,
}

export namespace WdsCallType {
    export const $gtype: GObject.GType<WdsCallType>;
}

export enum WdsCallType {
    LAPTOP = 0,
    EMBEDDED = 1,
}

export namespace WdsClientType {
    export const $gtype: GObject.GType<WdsClientType>;
}

export enum WdsClientType {
    TETHERED = 1,
    UNDEFINED = 255,
}

export namespace WdsConnectionStatus {
    export const $gtype: GObject.GType<WdsConnectionStatus>;
}

export enum WdsConnectionStatus {
    UNKNOWN = 0,
    DISCONNECTED = 1,
    CONNECTED = 2,
    SUSPENDED = 3,
    AUTHENTICATING = 4,
}

export namespace WdsDataBearerTechnology {
    export const $gtype: GObject.GType<WdsDataBearerTechnology>;
}

export enum WdsDataBearerTechnology {
    UNKNOWN = -1,
    CDMA20001X = 1,
    "1XEVDO" = 2,
    GSM = 3,
    UMTS = 4,
    "1XEVDO_REVA" = 5,
    EDGE = 6,
    HSDPA = 7,
    HSUPA = 8,
    HSDPA_HSUPDA = 9,
    LTE = 10,
    EHRPD = 11,
    HSDPAPLUS = 12,
    HSDPAPLUS_HSUPA = 13,
    DCHSDPAPLUS = 14,
    DCHSDPAPLUS_HSUPA = 15,
    HSDPAPLUS_PLUS_64QAM = 16,
    HSDPAPLUS_PLUS_64QAM_HSUPA = 17,
    TDSCDMA = 18,
    TDSCDMA_HSDPA = 19,
    TDSCDMA_HSUPA = 20,
}

export namespace WdsDataCallStatus {
    export const $gtype: GObject.GType<WdsDataCallStatus>;
}

export enum WdsDataCallStatus {
    UNKNOWN = 0,
    ACTIVATED = 1,
    TERMINATED = 2,
}

export namespace WdsDataCallType {
    export const $gtype: GObject.GType<WdsDataCallType>;
}

export enum WdsDataCallType {
    UNKNOWN = 0,
    EMBEDDED = 1,
    TETHERED = 2,
    MODEM_EMBEDDED = 3,
}

export namespace WdsDataSystem {
    export const $gtype: GObject.GType<WdsDataSystem>;
}

export enum WdsDataSystem {
    UNKNOWN = 0,
    CDMA1X = 1,
    CDMA1X_EVDO = 2,
    GPRS = 3,
    WCDMA = 4,
    LTE = 5,
    TDSCDMA = 6,
}

export namespace WdsDataSystemNetworkType {
    export const $gtype: GObject.GType<WdsDataSystemNetworkType>;
}

export enum WdsDataSystemNetworkType {
    "3GPP" = 0,
    "3GPP2" = 1,
}

export namespace WdsDeliveryOrder {
    export const $gtype: GObject.GType<WdsDeliveryOrder>;
}

export enum WdsDeliveryOrder {
    SUBSCRIBE = 0,
    ON = 1,
    OFF = 2,
}

export namespace WdsDormancyStatus {
    export const $gtype: GObject.GType<WdsDormancyStatus>;
}

export enum WdsDormancyStatus {
    UNKNOWN = 0,
    TRAFFIC_CHANNEL_DORMANT = 1,
    TRAFFIC_CHANNEL_ACTIVE = 2,
}

export namespace WdsDsProfileError {
    export const $gtype: GObject.GType<WdsDsProfileError>;
}

export enum WdsDsProfileError {
    UNKNOWN = 0,
    FAIL = 1,
    INVALID_HANDLE = 2,
    INVALID_OPERATION = 3,
    INVALID_PROFILE_TYPE = 4,
    INVALID_PROFILE_NUMBER = 5,
    INVALID_PROFILE_ID = 6,
    INVALID_ARGUMENT = 7,
    REGISTRY_NOT_INITIALIZED = 8,
    INVALID_PARAMETER_LENGTH = 9,
    LIST_END = 10,
    INVALID_SUBSCRIPTION_ID = 11,
    INVALID_PROFILE_FAMILY = 12,
    "3GPP_INVALID_PROFILE_FAMILY" = 1001,
    "3GPP_ACCESS_ERROR" = 1002,
    "3GPP_CONTEXT_NOT_DEFINED" = 1003,
    "3GPP_VALID_FLAG_NOT_SET" = 1004,
    "3GPP_READ_ONLY_FLAG_SET" = 1005,
    "3GPP_OUT_OF_PROFILES" = 1006,
    "3GPP2_INVALID_PROFILE_ID" = 1101,
}

export namespace WdsExtendedTechnologyPreference {
    export const $gtype: GObject.GType<WdsExtendedTechnologyPreference>;
}

export enum WdsExtendedTechnologyPreference {
    CDMA = 32769,
    UMTS = 32772,
    EPC = 34944,
    EMBMS = 34946,
    MODEM_LINK_LOCAL = 34952,
}

export namespace WdsIpFamily {
    export const $gtype: GObject.GType<WdsIpFamily>;
}

export enum WdsIpFamily {
    UNKNOWN = 0,
    IPV4 = 4,
    IPV6 = 6,
    UNSPECIFIED = 8,
}

export namespace WdsNetworkType {
    export const $gtype: GObject.GType<WdsNetworkType>;
}

export enum WdsNetworkType {
    UNKNOWN = 0,
    "3GPP2" = 1,
    "3GPP" = 2,
}

export namespace WdsPdpDataCompressionType {
    export const $gtype: GObject.GType<WdsPdpDataCompressionType>;
}

export enum WdsPdpDataCompressionType {
    OFF = 0,
    MANUFACTURER_PREFERRED = 1,
    V42BIS = 2,
    V44 = 3,
}

export namespace WdsPdpHeaderCompressionType {
    export const $gtype: GObject.GType<WdsPdpHeaderCompressionType>;
}

export enum WdsPdpHeaderCompressionType {
    OFF = 0,
    MANUFACTURER_PREFERRED = 1,
    RFC1144 = 2,
    RFC2507 = 3,
    RFC3095 = 4,
}

export namespace WdsPdpType {
    export const $gtype: GObject.GType<WdsPdpType>;
}

export enum WdsPdpType {
    IPV4 = 0,
    PPP = 1,
    IPV6 = 2,
    IPV4_OR_IPV6 = 3,
}

export namespace WdsProfileFamily {
    export const $gtype: GObject.GType<WdsProfileFamily>;
}

export enum WdsProfileFamily {
    EMBEDDED = 0,
    TETHERED = 1,
}

export namespace WdsProfileType {
    export const $gtype: GObject.GType<WdsProfileType>;
}

export enum WdsProfileType {
    "3GPP" = 0,
    "3GPP2" = 1,
}

export namespace WdsQosClassIdentifier {
    export const $gtype: GObject.GType<WdsQosClassIdentifier>;
}

export enum WdsQosClassIdentifier {
    NETWORK_ASSIGN = 0,
    GUARANTEED_BITRATE1 = 1,
    GUARANTEED_BITRATE2 = 2,
    GUARANTEED_BITRATE3 = 3,
    GUARANTEED_BITRATE4 = 4,
    NON_GUARANTEED_BITRATE5 = 5,
    NON_GUARANTEED_BITRATE6 = 6,
    NON_GUARANTEED_BITRATE7 = 7,
    NON_GUARANTEED_BITRATE8 = 8,
}

export namespace WdsRadioAccessTechnology {
    export const $gtype: GObject.GType<WdsRadioAccessTechnology>;
}

export enum WdsRadioAccessTechnology {
    NULL_BEARER = 0,
    "3GPP_WCDMA" = 1,
    "3GPP_GERAN" = 2,
    "3GPP_LTE" = 3,
    "3GPP_TDSCDMA" = 4,
    "3GPP_WLAN" = 5,
    "3GPP_MAXIMUM" = 100,
    "3GPP2_1X" = 101,
    "3GPP2_HRPD" = 102,
    "3GPP2_EHRPD" = 103,
    "3GPP2_WLAN" = 104,
    "3GPP2_MAXIMUM" = 200,
}

export namespace WdsSduErroneousDelivery {
    export const $gtype: GObject.GType<WdsSduErroneousDelivery>;
}

export enum WdsSduErroneousDelivery {
    SUBSCRIBE = 0,
    NO_DETECTION = 1,
    ENABLED = 2,
    DISABLED = 3,
}

export namespace WdsSduErrorRatio {
    export const $gtype: GObject.GType<WdsSduErrorRatio>;
}

export enum WdsSduErrorRatio {
    SUBSCRIBE = 0,
    "1E2" = 1,
    "7E3" = 2,
    "1E3" = 3,
    "1E4" = 4,
    "1E5" = 5,
    "1E6" = 6,
    "1E1" = 7,
}

export namespace WdsSduResidualBitErrorRatio {
    export const $gtype: GObject.GType<WdsSduResidualBitErrorRatio>;
}

export enum WdsSduResidualBitErrorRatio {
    SUBSCRIBE = 0,
    "5E2" = 1,
    "1E2" = 2,
    "5E3" = 3,
    "4E3" = 4,
    "1E3" = 5,
    "1E4" = 6,
    "1E5" = 7,
    "1E6" = 8,
    "6E8" = 9,
}

export namespace WdsTetheredCallType {
    export const $gtype: GObject.GType<WdsTetheredCallType>;
}

export enum WdsTetheredCallType {
    NON_TETHERED = 0,
    RMNET = 1,
    DUN = 2,
}

export namespace WdsTrafficClass {
    export const $gtype: GObject.GType<WdsTrafficClass>;
}

export enum WdsTrafficClass {
    SUBSCRIBED = 0,
    CONVERSATIONAL = 1,
    STREAMING = 2,
    INTERACTIVE = 3,
    BACKGROUND = 4,
}

export namespace WdsVerboseCallEndReason3gpp {
    export const $gtype: GObject.GType<WdsVerboseCallEndReason3gpp>;
}

export enum WdsVerboseCallEndReason3gpp {
    OPERATOR_DETERMINED_BARRING = 8,
    LLC_SNDCP_FAILURE = 25,
    INSUFFICIENT_RESOURCES = 26,
    UNKNOWN_APN = 27,
    UNKNOWN_PDP = 28,
    AUTHENTICATION_FAILED = 29,
    GGSN_REJECT = 30,
    ACTIVATION_REJECT = 31,
    OPTION_NOT_SUPPORTED = 32,
    OPTION_UNSUBSCRIBED = 33,
    OPTION_TEMPORARILY_OUT_OF_ORDER = 34,
    NSAPI_ALREADY_USED = 35,
    REGULAR_DEACTIVATION = 36,
    QOS_NOT_ACCEPTED = 37,
    NETWORK_FAILURE = 38,
    REATTACH_REQUIRED = 39,
    FEATURE_NOT_SUPPORTED = 40,
    TFT_SEMANTIC_ERROR = 41,
    TFT_SYNTAX_ERROR = 42,
    UNKNOWN_PDP_CONTEXT = 43,
    FILTER_SEMANTIC_ERROR = 44,
    FILTER_SYNTAX_ERROR = 45,
    PDP_WITHOUT_ACTIVE_TFT = 46,
    IPV4_ONLY_ALLOWED = 50,
    IPV6_ONLY_ALLOWED = 51,
    SINGLE_ADDRESS_BEARER_ONLY = 52,
    ESM_INFO_NOT_RECEIVED = 53,
    PDN_CONNECTION_DOES_NOT_EXIST = 54,
    MULTIPLE_CONNECTION_TO_SAME_PDN_NOT_ALLOWED = 55,
    INVALID_TRANSACTION_ID = 81,
    MESSAGE_INCORRECT_SEMANTIC = 95,
    INVALID_MANDATORY_INFO = 96,
    MESSAGE_TYPE_UNSUPPORTED = 97,
    MESSAGE_TYPE_NONCOMPATIBLE_STATE = 98,
    UNKNOWN_INFO_ELEMENT = 99,
    CONDITIONAL_IE_ERROR = 100,
    MESSAGE_AND_PROTOCOL_STATE_UNCOMPATIBLE = 101,
    PROTOCOL_ERROR = 111,
    APN_TYPE_CONFLICT = 112,
    INVALID_PROXY_CALL_SESSION_CONTROL_FUNCTION_ADDRESS = 113,
}

export namespace WdsVerboseCallEndReasonCm {
    export const $gtype: GObject.GType<WdsVerboseCallEndReasonCm>;
}

export enum WdsVerboseCallEndReasonCm {
    CDMA_LOCK = 500,
    INTERCEPT = 501,
    REORDER = 502,
    RELEASE_SO_REJECT = 503,
    INCOMING_CALL = 504,
    ALERT_STOP = 505,
    ACTIVATION = 506,
    MAX_ACCESS_PROBES = 507,
    CCS_NOT_SUPPORTED_BY_BS = 508,
    NO_RESPONSE_FROM_BS = 509,
    REJECTED_BY_BS = 510,
    INCOMPATIBLE = 511,
    ALREADY_IN_TC = 512,
    USER_CALL_ORIGINATED_DURING_GPS = 513,
    USER_CALL_ORIGINATED_DURING_SMS = 514,
    NO_CDMA_SERVICE = 515,
    MC_ABORT = 516,
    PSIST_NG = 517,
    UIM_NOT_PRESENT = 518,
    RETRY_ORDER = 519,
    ACCESS_BLOCK = 520,
    ACCESS_BLOCK_ALL = 521,
    IS707B_MAX_ACCESS_PROBES = 522,
    THERMAL_EMERGENCY = 523,
    CALL_ORIGINATION_THROTTLED = 524,
    USER_CALL_ORIGINATED = 525,
    CONFERENCE_FAILED = 1000,
    INCOMING_REJECTED = 1001,
    NO_GATEWAY_SERVICE = 1002,
    NO_GPRS_CONTEXT = 1003,
    ILLEGAL_MS = 1004,
    ILLEGAL_ME = 1005,
    GPRS_AND_NON_GPRS_SERVICES_NOT_ALLOWED = 1006,
    GPRS_SERVICES_NOT_ALLOWED = 1007,
    MS_IDENTITY_NOT_DERIVED_BY_THE_NETWORK = 1008,
    IMPLICITLY_DETACHED = 1009,
    PLMN_NOT_ALLOWED = 1010,
    LA_NOT_ALLOWED = 1011,
    GPRS_SERVICES_NOT_ALLOWED_IN_PLMN = 1012,
    PDP_DUPLICATE = 1013,
    UE_RAT_CHANGE = 1014,
    CONGESTION = 1015,
    NO_PDP_CONTEXT_ACTIVATED = 1016,
    ACCESS_CLASS_DSAC_REJECTION = 1017,
    PDP_ACTIVATE_MAX_RETRY_FAILED = 1018,
    RAB_FAILURE = 1019,
    EPS_SERVICE_NOT_ALLOWED = 1020,
    TRACKING_AREA_NOT_ALLOWED = 1021,
    ROAMING_NOT_ALLOWED_IN_TRACKING_AREA = 1022,
    NO_SUITABLE_CELLS_IN_TRACKING_AREA = 1023,
    NOT_AUTHORIZED_CLOSED_SUBSCRIBER_GROUP = 1024,
    ESM_UNKNOWN_EPS_BEARER_CONTEXT = 1025,
    DRB_RELEASED_AT_RRC = 1026,
    NAS_SIGNAL_CONNECTION_RELEASED = 1027,
    EMM_DETACHED = 1028,
    EMM_ATTACH_FAILED = 1029,
    EMM_ATTACH_STARTED = 1030,
    LTE_NAS_SERVICE_REQUEST_FAILED = 1031,
    ESM_ACTIVE_DEDICATED_BEARER_REACTIVATED_BY_NW = 1032,
    ESM_LOWER_LAYER_FAILURE = 1033,
    ESM_SYNC_UP_WITH_NW = 1034,
    ESM_NW_ACTIVATED_DEDICATED_BEARER_WITH_ID_OF_DEFAULT_BEARER = 1035,
    ESM_BAD_OTA_MESSAGE = 1036,
    ESM_DS_REJECTED_CALL = 1037,
    ESM_CONTEXT_TRANSFERRED_DUE_TO_IRAT = 1038,
    DS_EXPLICIT_DEACT = 1039,
    ESM_LOCAL_CAUSE_NONE = 1040,
    LTE_NAS_SERVICE_REQUEST_FAILED_NO_THROTTLE = 1041,
    ACL_FAILURE = 1042,
    LTE_NAS_SERVICE_REQUEST_FAILED_DS_DISALLOW = 1043,
    EMM_T3417_EXPIRED = 1044,
    EMM_T3417_EXT_EXPIRED = 1045,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_TXN = 1046,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_HANDOVER = 1047,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_CONN_REL = 1048,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_RLF = 1049,
    LRRC_UL_DATA_CONFIRMATION_FAILURE_CTRL_NOT_CONN = 1050,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE = 1051,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_ABORTED = 1052,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_ACCESS_BARRED = 1053,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_CELL_RESELECTION = 1054,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_CONFIG_FAILURE = 1055,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_TIMER_EXPIRED = 1056,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_LINK_FAILURE = 1057,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_NOT_CAMPED = 1058,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_SI_FAILURE = 1059,
    LRRC_CONNECTION_ESTABLISHMENT_FAILURE_REJECTED = 1060,
    LRRC_CONNECTION_RELEASE_NORMAL = 1061,
    LRRC_CONNECTION_RELEASE_RLF = 1062,
    LRRC_CONNECTION_RELEASE_CRE_FAILURE = 1063,
    LRRC_CONNECTION_RELEASE_OOS_DURING_CRE = 1064,
    LRRC_CONNECTION_RELEASE_ABORTED = 1065,
    LRRC_CONNECTION_RELEASE_SIB_READ_ERROR = 1066,
    DETACH_WITH_REATTACH_LTE_NW_DETACH = 1067,
    DETACH_WITHOUT_REATTACH_LTE_NW_DETACH = 1068,
    ESM_PROC_TIMEOUT = 1069,
    MESSAGE_EXCEED_MAX_L2_LIMIT = 1070,
    CONNECTION_DENY_GENERAL_OR_BUSY = 1500,
    CONNECTION_DENY_BILLING_OR_AUTHENTICATION_FAILURE = 1501,
    HDR_CHANGE = 1502,
    HDR_EXIT = 1503,
    HDR_NO_SESSION = 1504,
    HDR_ORIGINATION_DURING_GPS_FIX = 1505,
    HDR_CONNECTION_SETUP_TIMEOUT = 1506,
    HDR_RELEASED_BY_CM = 1507,
    HDR_COLLOCATED_ACQUISITION_FAILED = 1508,
    OTASP_COMMIT_IN_PROGRESS = 1509,
    HDR_NO_HYBRID_SERVICE = 1510,
    HDR_NO_LOCK_GRANTED = 1511,
    HOLD_OTHER_IN_PROGRESS = 1512,
    HDR_FADE = 1513,
    HDR_ACCESS_FAILURE = 1514,
    CLIENT_END = 2000,
    NO_SERVICE = 2001,
    FADE = 2002,
    RELEASE_NORMAL = 2003,
    ACCESS_ATTEMPT_IN_PROGRESS = 2004,
    ACCESS_FAILURE = 2005,
    REDIRECTION_OR_HANDOFF = 2006,
    OFFLINE = 2500,
    EMERGENCY_MODE = 2501,
    PHONE_IN_USE = 2502,
    INVALID_MODE = 2503,
    INVALID_SIM_STATE = 2504,
    NO_COLLOCATED_HDR = 2505,
    CALL_CONTROL_REJECTED = 2506,
}

export namespace WdsVerboseCallEndReasonEhrpd {
    export const $gtype: GObject.GType<WdsVerboseCallEndReasonEhrpd>;
}

export enum WdsVerboseCallEndReasonEhrpd {
    SUBSCRIPTION_LIMITED_TO_IPV4 = 1,
    SUBSCRIPTION_LIMITED_TO_IPV6 = 2,
    VSNCP_TIMEOUT = 4,
    VSNCP_FAILURE = 5,
    VSNCP_3GPP2_GENERAL_ERROR = 6,
    VSNCP_3GPP2_UNAUTHENTICATED_APN = 7,
    VSNCP_3GPP2_PDN_LIMIT_EXCEEDED = 8,
    VSNCP_3GPP2_NO_PDN_GATEWAY = 9,
    VSNCP_3GPP2_PDN_GATEWAY_UNREACHABLE = 10,
    VSNCP_3GPP2_PDN_GATEWAY_REJECTED = 11,
    VSNCP_3GPP2_INSUFFICIENT_PARAMETERS = 12,
    VSNCP_3GPP2_RESOURCE_UNAVAILABLE = 13,
    VSNCP_3GPP2_ADMINISTRATIVELY_PROHIBITED = 14,
    VSNCP_3GPP2_PDN_ID_IN_USE = 15,
    VSNCP_3GPP2_SUBSCRIPTION_LIMITATION = 16,
    VSNCP_3GPP2_PDN_EXISTS_FOR_THIS_APN = 17,
}

export namespace WdsVerboseCallEndReasonInternal {
    export const $gtype: GObject.GType<WdsVerboseCallEndReasonInternal>;
}

export enum WdsVerboseCallEndReasonInternal {
    ERROR = 201,
    CALL_ENDED = 202,
    UNKNOWN_INTERNAL_CAUSE = 203,
    UNKNOWN_CAUSE = 204,
    CLOSE_IN_PROGRESS = 205,
    NETWORK_INITIATED_TERMINATION = 206,
    APP_PREEMPTED = 207,
    PDN_IPV4_CALL_DISALLOWED = 208,
    PDN_IPV4_CALL_THROTTLED = 209,
    PDN_IPV6_CALL_DISALLOWED = 210,
    PDN_IPV6_CALL_THROTTLED = 211,
    MODEM_RESTART = 212,
    PDP_PPP_NOT_SUPPORTED = 213,
    UNPREFERRED_RAT = 214,
    PHYSICAL_LINK_CLOSE_IN_PROGRESS = 215,
    APN_PENDING_HANDOVER = 216,
    PROFILE_BEARER_INCOMPATIBLE = 217,
    MMGDSI_CARD_EVENT = 218,
    LPM_OR_POWER_DOWN = 219,
    APN_DISABLED = 220,
    MPIT_EXPIRED = 221,
    IPV6_ADDRESS_TRANSFER_FAILED = 222,
    TRAT_SWAP_FAILED = 223,
    EHRPD_TO_HRPD_FALLBACK = 224,
    MANDATORY_APN_DISABLED = 225,
    MIP_CONFIG_FAILURE = 226,
    PDN_INACTIVITY_TIMER_EXPIRED = 227,
    MAX_V4_CONNECTIONS = 228,
    MAX_V6_CONNECTIONS = 229,
    APN_MISMATCH = 230,
    IP_VERSION_MISMATCH = 231,
    DUN_CALL_DISALLOWED = 232,
    INVALID_PROFILE = 233,
    EPC_NONEPC_TRANSITION = 234,
    INVALID_PROFILE_ID = 235,
    CALL_ALREADY_PRESENT = 236,
    INTERFACE_IN_USE = 237,
    IP_PDP_MISMATCH = 238,
    APN_DISALLOWED_ON_ROAMING = 239,
    APN_PARAMETER_CHANGE = 240,
    INTERFACE_IN_USE_CONFIG_MATCH = 241,
    NULL_APN_DISALLOWED = 242,
    THERMAL_MITIGATION = 243,
    SUBS_ID_MISMATCH = 244,
    DATA_SETTINGS_DISABLED = 245,
    DATA_ROAMING_SETTINGS_DISABLED = 246,
    APN_FORMAT_INVALID = 247,
    DDS_CALL_ABORT = 248,
    VALIDATION_FAILURE = 249,
}

export namespace WdsVerboseCallEndReasonIpv6 {
    export const $gtype: GObject.GType<WdsVerboseCallEndReasonIpv6>;
}

export enum WdsVerboseCallEndReasonIpv6 {
    PREFIX_UNAVAILABLE = 1,
    HRPD_IPV6_DISABLED = 2,
    DISABLED = 3,
}

export namespace WdsVerboseCallEndReasonMip {
    export const $gtype: GObject.GType<WdsVerboseCallEndReasonMip>;
}

export enum WdsVerboseCallEndReasonMip {
    ERROR_REASON_UNKNOWN = -1,
    FA_ERROR_REASON_UNSPECIFIED = 64,
    FA_ERROR_ADMINISTRATIVELY_PROHIBITED = 65,
    FA_ERROR_INSUFFICIENT_RESOURCES = 66,
    FA_ERROR_MOBILE_NODE_AUTHENTICATION_FAILURE = 67,
    FA_ERROR_HA_AUTHENTICATION_FAILURE = 68,
    FA_ERROR_REQUESTED_LIFETIME_TOO_LONG = 69,
    FA_ERROR_MALFORMED_REQUEST = 70,
    FA_ERROR_MALFORMED_REPLY = 71,
    FA_ERROR_ENCAPSULATION_UNAVAILABLE = 72,
    FA_ERROR_VJHC_UNAVAILABLE = 73,
    FA_ERROR_REVERSE_TUNNEL_UNAVAILABLE = 74,
    FA_ERROR_REVERSE_TUNNEL_MANDATORY_AND_T_BIT_NOT_SET = 75,
    FA_ERROR_DELIVERY_STYLE_NOT_SUPPORTED = 79,
    FA_ERROR_MISSING_NAI = 97,
    FA_ERROR_MISSING_HA = 98,
    FA_ERROR_MISSING_HOME_ADDRESS = 99,
    FA_ERROR_UNKNOWN_CHALLENGE = 104,
    FA_ERROR_MISSING_CHALLENGE = 105,
    FA_ERROR_STALE_CHALLENGE = 106,
    HA_ERROR_REASON_UNSPECIFIED = 128,
    HA_ERROR_ADMINISTRATIVELY_PROHIBITED = 129,
    HA_ERROR_INSUFFICIENT_RESOURCES = 130,
    HA_ERROR_MOBILE_NODE_AUTHENTICATION_FAILURE = 131,
    HA_ERROR_FA_AUTHENTICATION_FAILURE = 132,
    HA_ERROR_REGISTRATION_ID_MISMATCH = 133,
    HA_ERROR_MALFORMED_REQUEST = 134,
    HA_ERROR_UNKNOWN_HA_ADDRESS = 136,
    HA_ERROR_REVERSE_TUNNEL_UNAVAILABLE = 137,
    HA_ERROR_REVERSE_TUNNEL_MANDATORY_AND_T_BIT_NOT_SET = 138,
    HA_ERROR_ENCAPSULATION_UNAVAILABLE = 139,
}

export namespace WdsVerboseCallEndReasonPpp {
    export const $gtype: GObject.GType<WdsVerboseCallEndReasonPpp>;
}

export enum WdsVerboseCallEndReasonPpp {
    UNKNOWN = -1,
    TIMEOUT = 1,
    AUTHENTICATION_FAILURE = 2,
    OPTION_MISMATCH = 3,
    PAP_FAILURE = 31,
    CHAP_FAILURE = 32,
    CLOSE_IN_PROGRESS = 33,
}

export namespace WdsVerboseCallEndReasonType {
    export const $gtype: GObject.GType<WdsVerboseCallEndReasonType>;
}

export enum WdsVerboseCallEndReasonType {
    MIP = 1,
    INTERNAL = 2,
    CM = 3,
    "3GPP" = 6,
    PPP = 7,
    EHRPD = 8,
    IPV6 = 9,
}

export namespace WmsAckIndicator {
    export const $gtype: GObject.GType<WmsAckIndicator>;
}

export enum WmsAckIndicator {
    SEND = 0,
    DO_NOT_SEND = 1,
}

export namespace WmsCdmaCauseCode {
    export const $gtype: GObject.GType<WmsCdmaCauseCode>;
}

export enum WmsCdmaCauseCode {
    NETWORK_ADDRESS_VACANT = 0,
    NETWORK_ADDRESS_TRANSLATION_FAILURE = 1,
    NETWORK_RESOURCE_SHORTAGE = 2,
    NETWORK_FAILURE = 3,
    NETWORK_INVALID_TELESERVICE_ID = 4,
    NETWORK_OTHER = 5,
    DESTINATION_NO_PAGE_RESPONSE = 32,
    DESTINATION_BUSY = 33,
    DESTINATION_NO_ACK = 34,
    DESTINATION_RESOURCE_SHORTAGE = 35,
    DESTINATION_SMS_DELIVERY_POSTPONED = 36,
    DESTINATION_OUT_OF_SERVICE = 37,
    DESTINATION_NOT_AT_ADDRESS = 38,
    DESTINATION_OTHER = 39,
    RADIO_INTERFACE_RESOURCE_SHORTAGE = 64,
    RADIO_INTERFACE_INCOMPATIBILITY = 65,
    RADIO_INTERFACE_OTHER = 66,
    GENERAL_ENCODING = 96,
    GENERAL_SMS_ORIGIN_DENIED = 97,
    GENERAL_SMS_DESTINATION_DENIED = 98,
    GENERAL_SUPPLEMENTARY_SERVICE_NOT_SUPPORTED = 99,
    GENERAL_SMS_NOT_SUPPORTED = 100,
    GENERAL_MISSING_EXPECTED_PARAMETER = 101,
    GENERAL_MISSING_MANDATORY_PARAMETER = 102,
    GENERAL_UNRECOGNIZED_PARAMETER_VALUE = 103,
    GENERAL_UNEXPECTED_PARAMETER_VALUE = 104,
    GENERAL_USER_DATA_SIZE_ERROR = 105,
    GENERAL_OTHER = 106,
}

export namespace WmsCdmaErrorClass {
    export const $gtype: GObject.GType<WmsCdmaErrorClass>;
}

export enum WmsCdmaErrorClass {
    TEMPORARY = 0,
    PERMANENT = 1,
}

export class WmsCdmaServiceOption {
    static $gtype: GObject.GType<WmsCdmaServiceOption>;

    constructor(copy: WmsCdmaServiceOption);

    // Properties
    static AUTO: number;
    static "6": number;
    static "14": number;
}

export namespace WmsGsmUmtsRpCause {
    export const $gtype: GObject.GType<WmsGsmUmtsRpCause>;
}

export enum WmsGsmUmtsRpCause {
    UNASSIGNED_NUMBER = 1,
    OPERATOR_DETERMINED_BARRING = 8,
    CALL_BARRED = 10,
    RESERVED = 11,
    SMS_TRANSFER_REJECTED = 21,
    MEMORY_CAPACITY_EXCEEDED = 22,
    DESTINATION_OUT_OF_ORDER = 27,
    UNIDENTIFIED_SUBSCRIBER = 28,
    FACILITY_REJECTED = 29,
    UNKNOWN_SUBSCRIBER = 30,
    NETWORK_OUF_OF_ORDER = 32,
    TEMPORARY_FAILURE = 33,
    CONGESTION = 42,
    RESOURCES_UNAVAILABLE = 47,
    FACILITY_NOT_SUBSCRIBED = 50,
    FACILITY_NOT_IMPLEMENTED = 69,
    INVALID_SMS_TRANSFER_REFERENCE_VALUE = 81,
    SEMANTICALLY_INCORRECT_MESSAGE = 95,
    INVALID_MANDATORY_INFO = 96,
    MESSAGE_TYPE_NOT_IMPLEMENTED = 97,
    MESSAGE_NOT_COMPATIBLE_WITH_SMS = 98,
    INFORMATION_ELEMENT_NOT_IMPLEMENTED = 99,
    PROTOCOL_ERROR = 111,
    INTERWORKING = 127,
}

export namespace WmsGsmUmtsTpCause {
    export const $gtype: GObject.GType<WmsGsmUmtsTpCause>;
}

export enum WmsGsmUmtsTpCause {
    TELE_INTERWORKING_NOT_SUPPORTED = 128,
    SHORT_MESSAGE_TYPE_0_NOT_SUPPORTED = 129,
    SHORT_MESSAGE_CANNOT_BE_REPLACED = 130,
    UNSPECIFIED_PID_ERROR = 143,
    DCS_NOT_SUPPORTED = 144,
    MESSAGE_CLASS_NOT_SUPPORTED = 145,
    UNSPECIFIED_DCS_ERROR = 159,
    COMMAND_CANNOT_BE_ACTIONED = 160,
    COMMAND_UNSUPPORTED = 161,
    UNSPECIFIED_COMMAND_ERROR = 175,
    TPDU_NOT_SUPPORTED = 176,
    SC_BUSY = 192,
    NO_SC_SUBSCRIPTION = 193,
    SC_SYSTEM_FAILURE = 194,
    INVALID_SME_ADDRESS = 195,
    DESTINATION_SME_BARRED = 196,
    SM_REJECTED_OR_DUPLICATE = 197,
    VPF_NOT_SUPPORTED = 198,
    VP_NOT_SUPPORTED = 199,
    SIM_SMS_STORAGE_FULL = 208,
    NO_SMS_STORAGE_CAPABILITY_IN_SIM = 209,
    MS_ERROR = 210,
    MEMORY_CAPACITY_EXCEEDED = 211,
    SIM_APPLICATION_TOOLKIT_BUSY = 212,
    SIM_DATA_DOWNLOAD_ERROR = 213,
    UNSPECIFIED_ERROR = 255,
}

export class WmsMessageClass {
    static $gtype: GObject.GType<WmsMessageClass>;

    constructor(copy: WmsMessageClass);

    // Properties
    static "0": number;
    static "1": number;
    static "2": number;
    static "3": number;
    static NONE: number;
    static CDMA: number;
}

export namespace WmsMessageDeliveryFailureType {
    export const $gtype: GObject.GType<WmsMessageDeliveryFailureType>;
}

export enum WmsMessageDeliveryFailureType {
    TEMPORARY = 0,
    PERMANENT = 1,
}

export namespace WmsMessageFormat {
    export const $gtype: GObject.GType<WmsMessageFormat>;
}

export enum WmsMessageFormat {
    CDMA = 0,
    GSM_WCDMA_POINT_TO_POINT = 6,
    GSM_WCDMA_BROADCAST = 7,
    MWI = 8,
}

export namespace WmsMessageMode {
    export const $gtype: GObject.GType<WmsMessageMode>;
}

export enum WmsMessageMode {
    CDMA = 0,
    GSM_WCDMA = 1,
}

export namespace WmsMessageProtocol {
    export const $gtype: GObject.GType<WmsMessageProtocol>;
}

export enum WmsMessageProtocol {
    CDMA = 0,
    WCDMA = 1,
}

export namespace WmsMessageTagType {
    export const $gtype: GObject.GType<WmsMessageTagType>;
}

export enum WmsMessageTagType {
    MT_READ = 0,
    MT_NOT_READ = 1,
    MO_SENT = 2,
    MO_NOT_SENT = 3,
}

export namespace WmsMessageType {
    export const $gtype: GObject.GType<WmsMessageType>;
}

export enum WmsMessageType {
    POINT = 0,
}

export namespace WmsNotificationType {
    export const $gtype: GObject.GType<WmsNotificationType>;
}

export enum WmsNotificationType {
    PRIMARY = 0,
    SECONDARY_GSM = 1,
    SECONDARY_UMTS = 2,
}

export namespace WmsReceiptAction {
    export const $gtype: GObject.GType<WmsReceiptAction>;
}

export enum WmsReceiptAction {
    DISCARD = 0,
    STORE_AND_NOTIFY = 1,
    TRANSFER_ONLY = 2,
    TRANSFER_AND_ACK = 3,
    UNKNOWN = 255,
}

export namespace WmsStorageType {
    export const $gtype: GObject.GType<WmsStorageType>;
}

export enum WmsStorageType {
    UIM = 0,
    NV = 1,
    NONE = 255,
}

export namespace WmsTransferIndication {
    export const $gtype: GObject.GType<WmsTransferIndication>;
}

export enum WmsTransferIndication {
    CLIENT = 1,
}

export namespace CtlFlag {
    export const $gtype: GObject.GType<CtlFlag>;
}

export enum CtlFlag {
    NONE = 0,
    RESPONSE = 1,
    INDICATION = 2,
}

export namespace DeviceOpenFlags {
    export const $gtype: GObject.GType<DeviceOpenFlags>;
}

export enum DeviceOpenFlags {
    NONE = 0,
    VERSION_INFO = 1,
    SYNC = 2,
    NET_802_3 = 4,
    NET_RAW_IP = 8,
    NET_QOS_HEADER = 16,
    NET_NO_QOS_HEADER = 32,
    PROXY = 64,
    MBIM = 128,
    AUTO = 256,
    EXPECT_INDICATIONS = 512,
}

export namespace DeviceReleaseClientFlags {
    export const $gtype: GObject.GType<DeviceReleaseClientFlags>;
}

export enum DeviceReleaseClientFlags {
    NONE = 0,
    RELEASE_CID = 1,
}

export namespace DmsBandCapability {
    export const $gtype: GObject.GType<DmsBandCapability>;
}

export enum DmsBandCapability {
    BC_0_A_SYSTEM = 1,
    BC_0_B_SYSTEM = 2,
    BC_1_ALL_BLOCKS = 4,
    BC_2 = 8,
    BC_3_A_SYSTEM = 16,
    BC_4_ALL_BLOCKS = 32,
    BC_5_ALL_BLOCKS = 64,
    GSM_DCS_1800 = 128,
    GSM_900_EXTENDED = 256,
    GSM_900_PRIMARY = 512,
    BC_6 = 1024,
    BC_7 = 2048,
    BC_8 = 4096,
    BC_9 = 8192,
    BC_10 = 16384,
    BC_11 = 32768,
    GSM_450 = 65536,
    GSM_480 = 131072,
    GSM_750 = 262144,
    GSM_850 = 524288,
    GSM_900_RAILWAYS = 1048576,
    GSM_PCS_1900 = 2097152,
    WCDMA_2100 = 4194304,
    WCDMA_PCS_1900 = 8388608,
    WCDMA_DCS_1800 = 16777216,
    WCDMA_1700_US = 33554432,
    WCDMA_850_US = 67108864,
    WCDMA_800 = 134217728,
    BC_12 = 268435456,
    BC_14 = 536870912,
    BC_15 = 2147483648,
    WCDMA_2600 = 281474976710656,
    WCDMA_900 = 562949953421312,
    WCDMA_1700_JAPAN = 1125899906842624,
    BC_16 = 72057594037927936,
    BC_17 = 144115188075855872,
    BC_18 = 288230376151711744,
    BC_19 = 576460752303423488,
    WCDMA_850_JAPAN = 1152921504606846976,
    WCDMA_1500 = 2305843009213693952,
}

export class DmsLteBandCapability {
    static $gtype: GObject.GType<DmsLteBandCapability>;

    constructor(copy: DmsLteBandCapability);

    // Properties
    static "1": number;
    static "2": number;
    static "3": number;
    static "4": number;
    static "5": number;
    static "6": number;
    static "7": number;
    static "8": number;
    static "9": number;
    static "10": number;
    static "11": number;
    static "12": number;
    static "13": number;
    static "14": number;
    static "17": number;
    static "18": number;
    static "19": number;
    static "20": number;
    static "21": number;
    static "24": number;
    static "25": number;
    static "26": number;
    static "27": number;
    static "28": number;
    static "29": number;
    static "30": number;
    static "31": number;
    static "32": number;
    static "33": number;
    static "34": number;
    static "35": number;
    static "36": number;
    static "37": number;
    static "38": number;
    static "39": number;
    static "40": number;
    static "41": number;
    static "42": number;
    static "43": number;
}

export namespace DmsOfflineReason {
    export const $gtype: GObject.GType<DmsOfflineReason>;
}

export enum DmsOfflineReason {
    HOST_IMAGE_MISCONFIGURATION = 1,
    PRI_IMAGE_MISCONFIGURATION = 2,
    PRI_VERSION_INCOMPATIBLE = 4,
    DEVICE_MEMORY_FULL = 8,
}

export namespace DmsPowerState {
    export const $gtype: GObject.GType<DmsPowerState>;
}

export enum DmsPowerState {
    EXTERNAL_SOURCE = 1,
    BATTERY_CONNECTED = 2,
    BATTERY_CHARGING = 4,
    FAULT = 8,
}

export namespace DsdApnTypePreference {
    export const $gtype: GObject.GType<DsdApnTypePreference>;
}

export enum DsdApnTypePreference {
    DEFAULT = 1,
    IMS = 2,
    MMS = 4,
    DUN = 8,
    SUPL = 16,
    HIPRI = 32,
    FOTA = 64,
    CBS = 128,
    IA = 256,
    EMERGENCY = 512,
}

export namespace LocDeleteCellDatabase {
    export const $gtype: GObject.GType<LocDeleteCellDatabase>;
}

export enum LocDeleteCellDatabase {
    POS = 1,
    LATEST_GPS_POS = 2,
    OTA_POS = 4,
    EXT_REF_POS = 8,
    TIMETAG = 16,
    CELLID = 32,
    CACHED_CELLID = 64,
    LAST_SRV_CELL = 128,
    CUR_SRV_CELL = 256,
    NEIGHBOR_INFO = 512,
}

export namespace LocDeleteClockInfo {
    export const $gtype: GObject.GType<LocDeleteClockInfo>;
}

export enum LocDeleteClockInfo {
    TIME_EST = 1,
    FREQ_EST = 2,
    WEEK_NUMBER = 4,
    RTC_TIME = 8,
    TIME_TRANSFER = 16,
    GPS_TIME_EST = 32,
    GLO_TIME_EST = 64,
    GLO_DAY_NUMBER = 128,
    GLO_YEAR_NUMBER = 256,
    GLO_RF_GRP_DELAY = 512,
    DISABLE_TT = 1024,
}

export namespace LocDeleteGnssData {
    export const $gtype: GObject.GType<LocDeleteGnssData>;
}

export enum LocDeleteGnssData {
    GPS_SVDIR = 1,
    GPS_SVSTEER = 2,
    GPS_TIME = 4,
    GPS_ALM_CORR = 8,
    GLO_SVDIR = 16,
    GLO_SVSTEER = 32,
    GLO_TIME = 64,
    GLO_ALM_CORR = 128,
    SBAS_SVDIR = 256,
    SBAS_SVSTEER = 512,
    POSITION = 1024,
    TIME = 2048,
    IONO = 4096,
    UTC = 8192,
    HEALTH = 16384,
    SADATA = 32768,
    RTI = 65536,
    SV_NO_EXIST = 131072,
    FREQ_BIAS_EST = 262144,
}

export namespace LocDeleteSvInfo {
    export const $gtype: GObject.GType<LocDeleteSvInfo>;
}

export enum LocDeleteSvInfo {
    EPHEMERIS = 1,
    ALMANAC = 2,
}

export namespace LocEventRegistrationFlag {
    export const $gtype: GObject.GType<LocEventRegistrationFlag>;
}

export enum LocEventRegistrationFlag {
    POSITION_REPORT = 1,
    GNSS_SATELLITE_INFO = 2,
    NMEA = 4,
    NI_NOTIFY_VERIFY_REQUEST = 8,
    INJECT_TIME_REQUEST = 16,
    INJECT_PREDICTED_ORBITS_REQUEST = 32,
    INJECT_POSITION_REQUEST = 64,
    ENGINE_STATE = 128,
    FIX_SESSION_STATE = 256,
    WIFI_REQUEST = 512,
    SENSOR_STREAMING_READY_STATUS = 1024,
    TIME_SYNC_REQUEST = 2048,
    SET_SPI_STREAMING_REPORT = 4096,
    LOCATION_SERVER_CONNECTION_REQUEST = 8192,
    NI_GEOFENCE_NOTIFICATION = 16384,
    GEOFENCE_GENERAL_ALERT = 32768,
    GEOFENCE_BREACH_NOTIFICATION = 65536,
    PEDOMETER_CONTROL = 131072,
    MOTION_DATA_CONTROL = 262144,
}

export namespace LocNmeaType {
    export const $gtype: GObject.GType<LocNmeaType>;
}

export enum LocNmeaType {
    GGA = 1,
    RMC = 2,
    GSV = 4,
    GSA = 8,
    VTG = 16,
    PQXFI = 32,
    PSTIS = 64,
    ALL = 65535,
}

export namespace LocSatelliteValidInformation {
    export const $gtype: GObject.GType<LocSatelliteValidInformation>;
}

export enum LocSatelliteValidInformation {
    SYSTEM = 1,
    GNSS_SATELLITE_ID = 2,
    HEALTH_STATUS = 4,
    PROCESS_STATUS = 8,
    SATELLITE_INFO_MASK = 16,
    ELEVATION = 32,
    AZIMUTH = 64,
    SIGNAL_TO_NOISE_RATIO = 128,
}

export namespace LocSensorDataUsage {
    export const $gtype: GObject.GType<LocSensorDataUsage>;
}

export enum LocSensorDataUsage {
    ACCELEROMETER_USED = 1,
    GYRO_USED = 2,
    AIDED_HEADING = 4294967296,
    AIDED_SPEED = 8589934592,
    AIDED_POSITION = 17179869184,
    AIDED_VELOCITY = 34359738368,
}

export namespace LocServerAddressType {
    export const $gtype: GObject.GType<LocServerAddressType>;
}

export enum LocServerAddressType {
    NONE = 0,
    IPV4 = 1,
    IPV6 = 2,
    URL = 4,
}

export namespace LocTechnologyUsed {
    export const $gtype: GObject.GType<LocTechnologyUsed>;
}

export enum LocTechnologyUsed {
    SATELLITE = 1,
    CELLULAR = 2,
    WIFI = 4,
    SENSORS = 8,
    REFERENCE_LOCATION = 16,
    INJECTED_POSITION = 32,
    AFLT = 64,
    HYBRID = 128,
}

export namespace NasBandPreference {
    export const $gtype: GObject.GType<NasBandPreference>;
}

export enum NasBandPreference {
    BC_0_A_SYSTEM = 1,
    BC_0_B_SYSTEM = 2,
    BC_1_ALL_BLOCKS = 4,
    BC_2 = 8,
    BC_3_A_SYSTEM = 16,
    BC_4_ALL_BLOCKS = 32,
    BC_5_ALL_BLOCKS = 64,
    GSM_DCS_1800 = 128,
    GSM_900_EXTENDED = 256,
    GSM_900_PRIMARY = 512,
    BC_6 = 1024,
    BC_7 = 2048,
    BC_8 = 4096,
    BC_9 = 8192,
    BC_10 = 16384,
    BC_11 = 32768,
    GSM_450 = 65536,
    GSM_480 = 131072,
    GSM_750 = 262144,
    GSM_850 = 524288,
    GSM_900_RAILWAYS = 1048576,
    GSM_PCS_1900 = 2097152,
    WCDMA_2100 = 4194304,
    WCDMA_PCS_1900 = 8388608,
    WCDMA_DCS_1800 = 16777216,
    WCDMA_1700_US = 33554432,
    WCDMA_850_US = 67108864,
    WCDMA_800 = 134217728,
    BC_12 = 268435456,
    BC_14 = 536870912,
    BC_15 = 2147483648,
    WCDMA_2600 = 281474976710656,
    WCDMA_900 = 562949953421312,
    WCDMA_1700_JAPAN = 1125899906842624,
    BC_16 = 72057594037927936,
    BC_17 = 144115188075855872,
    BC_18 = 288230376151711744,
    BC_19 = 576460752303423488,
    WCDMA_850_JAPAN = 1152921504606846976,
    WCDMA_1500 = 2305843009213693952,
}

export class NasLteBandPreference {
    static $gtype: GObject.GType<NasLteBandPreference>;

    constructor(copy: NasLteBandPreference);

    // Properties
    static "1": number;
    static "2": number;
    static "3": number;
    static "4": number;
    static "5": number;
    static "6": number;
    static "7": number;
    static "8": number;
    static "9": number;
    static "10": number;
    static "11": number;
    static "12": number;
    static "13": number;
    static "14": number;
    static "17": number;
    static "18": number;
    static "19": number;
    static "20": number;
    static "21": number;
    static "24": number;
    static "25": number;
    static "26": number;
    static "27": number;
    static "28": number;
    static "29": number;
    static "30": number;
    static "31": number;
    static "32": number;
    static "33": number;
    static "34": number;
    static "35": number;
    static "36": number;
    static "37": number;
    static "38": number;
    static "39": number;
    static "40": number;
    static "41": number;
    static "42": number;
    static "43": number;
}

export namespace NasNetworkNameDisplayCondition {
    export const $gtype: GObject.GType<NasNetworkNameDisplayCondition>;
}

export enum NasNetworkNameDisplayCondition {
    REGISTERED_PLMN_IF_KNOWN_NETWORK = 1,
    SPN_NOT_REQUIRED_IF_UNKNOWN_NETWORK = 2,
}

export namespace NasNetworkScanType {
    export const $gtype: GObject.GType<NasNetworkScanType>;
}

export enum NasNetworkScanType {
    GSM = 1,
    UMTS = 2,
    LTE = 4,
    TD_SCDMA = 8,
}

export namespace NasNetworkStatus {
    export const $gtype: GObject.GType<NasNetworkStatus>;
}

export enum NasNetworkStatus {
    CURRENT_SERVING = 1,
    AVAILABLE = 2,
    HOME = 4,
    ROAMING = 8,
    FORBIDDEN = 16,
    NOT_FORBIDDEN = 32,
    PREFERRED = 64,
    NOT_PREFERRED = 128,
}

export namespace NasRadioTechnologyPreference {
    export const $gtype: GObject.GType<NasRadioTechnologyPreference>;
}

export enum NasRadioTechnologyPreference {
    AUTO = 0,
    "3GPP2" = 1,
    "3GPP" = 2,
    AMPS_OR_GSM = 4,
    CDMA_OR_WCDMA = 8,
    HDR = 16,
    LTE = 32,
}

export namespace NasRatModePreference {
    export const $gtype: GObject.GType<NasRatModePreference>;
}

export enum NasRatModePreference {
    CDMA_1X = 1,
    CDMA_1XEVDO = 2,
    GSM = 4,
    UMTS = 8,
    LTE = 16,
    TD_SCDMA = 32,
    "5GNR" = 64,
}

export namespace NasSignalStrengthRequest {
    export const $gtype: GObject.GType<NasSignalStrengthRequest>;
}

export enum NasSignalStrengthRequest {
    NONE = 0,
    RSSI = 1,
    ECIO = 2,
    IO = 4,
    SINR = 8,
    ERROR_RATE = 16,
    RSRQ = 32,
    LTE_SNR = 64,
    LTE_RSRP = 128,
}

export namespace NasTdScdmaBandPreference {
    export const $gtype: GObject.GType<NasTdScdmaBandPreference>;
}

export enum NasTdScdmaBandPreference {
    A = 1,
    B = 2,
    C = 4,
    D = 8,
    E = 16,
    F = 32,
}

export namespace PbmEventRegistrationFlag {
    export const $gtype: GObject.GType<PbmEventRegistrationFlag>;
}

export enum PbmEventRegistrationFlag {
    RECORD_UPDATE = 1,
    PHONEBOOK_READY = 2,
    EMERGENCY_NUMBER_LIST = 4,
    HIDDEN_RECORD_STATUS = 8,
    AAS_UPDATE = 16,
    GAS_UPDATE = 32,
}

export namespace PbmPhonebookType {
    export const $gtype: GObject.GType<PbmPhonebookType>;
}

export enum PbmPhonebookType {
    ADN = 1,
    FDN = 2,
    MSISDN = 4,
    MBDN = 8,
    SDN = 16,
    BDN = 32,
    LND = 64,
    MBN = 128,
}

export namespace PdsDataValid {
    export const $gtype: GObject.GType<PdsDataValid>;
}

export enum PdsDataValid {
    TIMESTAMP_CALENDAR = 1,
    TIMESTAMP_UTC = 2,
    LEAP_SECONDS = 4,
    TIME_UNCERTAINTY = 8,
    LATITUDE = 16,
    LONGITUDE = 32,
    ELLIPSOID_ALTITUDE = 64,
    MEAN_SEA_LEVEL_ALTITUDE = 128,
    HORIZONTAL_SPEED = 256,
    VERTICAL_SPEED = 512,
    HEADING = 1024,
    HORIZONTAL_UNCERTAINTY_CIRCULAR = 2048,
    HORIZONTAL_UNCERTAINTY_ELLIPSE_SEMI_MAJOR = 4096,
    HORIZONTAL_UNCERTAINTY_ELLIPSE_SEMI_MINOR = 8192,
    HORIZONTAL_UNCERTAINTY_ELLIPSE_ORIENT_AZIMUTH = 16384,
    VERTICAL_UNCERTAINTY = 32768,
    HORIZONTAL_VELOCITY_UNCERTAINTY = 65536,
    VERTICAL_VELOCITY_UNCERTAINTY = 131072,
    HORIZONTAL_CONFIDENCE = 262144,
    POSITION_DOP = 524288,
    HORIZONTAL_DOP = 1048576,
    VERTICAL_DOP = 2097152,
    OPERATING_MODE = 4194304,
}

export namespace ServiceFlag {
    export const $gtype: GObject.GType<ServiceFlag>;
}

export enum ServiceFlag {
    NONE = 0,
    COMPOUND = 1,
    RESPONSE = 2,
    INDICATION = 4,
}

export namespace UimEventRegistrationFlag {
    export const $gtype: GObject.GType<UimEventRegistrationFlag>;
}

export enum UimEventRegistrationFlag {
    CARD_STATUS = 1,
    SAP_CONNECTION = 2,
    EXTENDED_CARD_STATUS = 4,
    PHYSICAL_SLOT_STATUS = 16,
}

export namespace UimSecurityAttribute {
    export const $gtype: GObject.GType<UimSecurityAttribute>;
}

export enum UimSecurityAttribute {
    PIN1 = 1,
    PIN2 = 2,
    UPIN = 4,
    ADM = 8,
}

export namespace VoiceWcdmaAmrStatus {
    export const $gtype: GObject.GType<VoiceWcdmaAmrStatus>;
}

export enum VoiceWcdmaAmrStatus {
    NOT_SUPPORTED = 1,
    WCDMA_AMR_WB = 2,
    GSM_HR_AMR = 4,
    GSM_AMR_WB = 8,
    GSM_AMR_NB = 16,
}

export namespace WdsAuthentication {
    export const $gtype: GObject.GType<WdsAuthentication>;
}

export enum WdsAuthentication {
    NONE = 0,
    PAP = 1,
    CHAP = 2,
}

export namespace WdsExtendedDataBearerTechnology3gpp {
    export const $gtype: GObject.GType<WdsExtendedDataBearerTechnology3gpp>;
}

export enum WdsExtendedDataBearerTechnology3gpp {
    UNKNOWN = 0,
    WCDMA = 1,
    HSDPA = 2,
    HSUPA = 4,
    HSDPA_PLUS = 8,
    DC_HSDPA_PLUS = 16,
    "64QAM" = 32,
    HSPA = 64,
    GPRS = 128,
    EDGE = 256,
    GSM = 512,
    S2B = 1024,
    LTE_LIMITED_SERVICE = 2048,
    LTE_FDD = 4096,
    LTE_TDD = 8192,
}

export namespace WdsExtendedDataBearerTechnology3gpp2 {
    export const $gtype: GObject.GType<WdsExtendedDataBearerTechnology3gpp2>;
}

export enum WdsExtendedDataBearerTechnology3gpp2 {
    UNKNOWN = 0,
    RESERVED = 1,
    CDMA1X_IS95 = 2,
    CDMA1X_IS2000 = 4,
    CDMA1X_IS2000_REL_A = 8,
    HDR_REV_0_DPA = 16,
    HDR_REV_A_DPA = 32,
    HDR_REV_B_DPA = 64,
    HDR_REV_A_MPA = 128,
    HDR_REV_B_MPA = 256,
    HDR_REV_A_EMPA = 512,
    HDR_REV_B_EMPA = 1024,
    HDR_REV_B_MMPA = 2048,
    HDR_EVDO_FMC = 4096,
}

export namespace WdsGetCurrentSettingsRequestedSettings {
    export const $gtype: GObject.GType<WdsGetCurrentSettingsRequestedSettings>;
}

export enum WdsGetCurrentSettingsRequestedSettings {
    NONE = 0,
    PROFILE_ID = 1,
    PROFILE_NAME = 2,
    PDP_TYPE = 4,
    APN_NAME = 8,
    DNS_ADDRESS = 16,
    GRANTED_QOS = 32,
    USERNAME = 64,
    AUTH_PROTOCOL = 128,
    IP_ADDRESS = 256,
    GATEWAY_INFO = 512,
    PCSCF_ADDRESS = 1024,
    PCSCF_SERVER_ADDRESS_LIST = 2048,
    PCSCF_DOMAIN_NAME_LIST = 4096,
    MTU = 8192,
    DOMAIN_NAME_LIST = 16384,
    IP_FAMILY = 32768,
    IMCN_FLAG = 65536,
    EXTENDED_TECHNOLOGY = 131072,
}

export namespace WdsPacketStatisticsMaskFlag {
    export const $gtype: GObject.GType<WdsPacketStatisticsMaskFlag>;
}

export enum WdsPacketStatisticsMaskFlag {
    TX_PACKETS_OK = 1,
    RX_PACKETS_OK = 2,
    TX_PACKETS_ERROR = 4,
    RX_PACKETS_ERROR = 8,
    TX_OVERFLOWS = 16,
    RX_OVERFLOWS = 32,
    TX_BYTES_OK = 64,
    RX_BYTES_OK = 128,
    TX_PACKETS_DROPPED = 256,
    RX_PACKETS_DROPPED = 512,
}

export namespace WdsRat3gpp {
    export const $gtype: GObject.GType<WdsRat3gpp>;
}

export enum WdsRat3gpp {
    NONE = 0,
    WCDMA = 1,
    GPRS = 2,
    HSDPA = 4,
    HSUPA = 8,
    EDGE = 16,
    LTE = 32,
    HSDPAPLUS = 64,
    DCHSDPAPLUS = 128,
    "64QAM" = 256,
    TDSCDMA = 512,
    NULL_BEARER = 32768,
}

export namespace WdsRat3gpp2 {
    export const $gtype: GObject.GType<WdsRat3gpp2>;
}

export enum WdsRat3gpp2 {
    NONE = 0,
    CDMA1X = 1,
    EVDO_REV0 = 2,
    EVDO_REVA = 4,
    EVDO_REVB = 8,
    EHRPD = 16,
    FMC = 32,
    NULL_BEARER = 32768,
}

export namespace WdsSetEventReportTransferStatistics {
    export const $gtype: GObject.GType<WdsSetEventReportTransferStatistics>;
}

export enum WdsSetEventReportTransferStatistics {
    TX_PACKETS_OK = 1,
    RX_PACKETS_OK = 2,
    TX_PACKETS_ERROR = 4,
    RX_PACKETS_ERROR = 8,
    TX_OVERFLOWS = 16,
    RX_OVERFLOWS = 32,
    TX_BYTES_OK = 64,
    RX_BYTES_OK = 128,
    TX_PACKETS_DROPPED = 256,
    RX_PACKETS_DROPPED = 512,
}

export namespace WdsSoCdma1x {
    export const $gtype: GObject.GType<WdsSoCdma1x>;
}

export enum WdsSoCdma1x {
    NONE = 0,
    IS95 = 1,
    IS2000 = 2,
    IS2000_REL_A = 4,
}

export namespace WdsSoEvdoRev0 {
    export const $gtype: GObject.GType<WdsSoEvdoRev0>;
}

export enum WdsSoEvdoRev0 {
    NONE = 0,
    DPA = 1,
}

export namespace WdsSoEvdoRevA {
    export const $gtype: GObject.GType<WdsSoEvdoRevA>;
}

export enum WdsSoEvdoRevA {
    NONE = 0,
    DPA = 1,
    MFPA = 2,
    EMPA = 4,
    EMPA_EHRPD = 8,
}

export namespace WdsSoEvdoRevB {
    export const $gtype: GObject.GType<WdsSoEvdoRevB>;
}

export enum WdsSoEvdoRevB {
    NONE = 0,
    DPA = 1,
    MFPA = 2,
    EMPA = 4,
    EMPA_EHRPD = 8,
    MMPA = 16,
    MMPA_EHRPD = 32,
}

export namespace WdsTechnologyPreference {
    export const $gtype: GObject.GType<WdsTechnologyPreference>;
}

export enum WdsTechnologyPreference {
    "3GPP" = 1,
    "3GPP2" = 2,
}

export module Client {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        client_cid: number;
        clientCid: number;
        client_device: Device;
        clientDevice: Device;
        client_service: Service;
        clientService: Service;
        client_valid: boolean;
        clientValid: boolean;
        client_version_major: number;
        clientVersionMajor: number;
        client_version_minor: number;
        clientVersionMinor: number;
    }
}

export abstract class Client extends GObject.Object {
    static $gtype: GObject.GType<Client>;

    constructor(properties?: Partial<Client.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Client.ConstructorProperties>, ...args: any[]): void;

    // Properties
    client_cid: number;
    clientCid: number;
    client_device: Device;
    clientDevice: Device;
    client_service: Service;
    clientService: Service;
    client_valid: boolean;
    clientValid: boolean;
    client_version_major: number;
    clientVersionMajor: number;
    client_version_minor: number;
    clientVersionMinor: number;

    // Members

    check_version(major: number, minor: number): boolean;

    get_cid(): number;

    get_device<T = GObject.Object>(): T;

    get_next_transaction_id(): number;

    get_service(): Service;

    get_version(major: number, minor: number): boolean;

    is_valid(): boolean;

    peek_device<T = GObject.Object>(): T;

    vfunc_process_indication(message: Message): void;
}

export module ClientCtl {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientCtl extends Client {
    static $gtype: GObject.GType<ClientCtl>;

    constructor(properties?: Partial<ClientCtl.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientCtl.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "sync", callback: (_source: this) => void): number;

    connect_after(signal: "sync", callback: (_source: this) => void): number;

    emit(signal: "sync"): void;

    // Members

    allocate_cid(
        input: MessageCtlAllocateCidInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    allocate_cid_finish(res: Gio.AsyncResult): MessageCtlAllocateCidOutput;

    get_version_info(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_version_info_finish(res: Gio.AsyncResult): MessageCtlGetVersionInfoOutput;

    internal_proxy_open(
        input: MessageCtlInternalProxyOpenInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    internal_proxy_open_finish(res: Gio.AsyncResult): MessageCtlInternalProxyOpenOutput;

    release_cid(
        input: MessageCtlReleaseCidInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    release_cid_finish(res: Gio.AsyncResult): MessageCtlReleaseCidOutput;

    set_data_format(
        input: MessageCtlSetDataFormatInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_data_format_finish(res: Gio.AsyncResult): MessageCtlSetDataFormatOutput;

    set_instance_id(
        input: MessageCtlSetInstanceIdInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_instance_id_finish(res: Gio.AsyncResult): MessageCtlSetInstanceIdOutput;

    sync(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    sync_finish(res: Gio.AsyncResult): MessageCtlSyncOutput;
}

export module ClientDms {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientDms extends Client {
    static $gtype: GObject.GType<ClientDms>;

    constructor(properties?: Partial<ClientDms.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientDms.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "event-report", callback: (_source: this, output: IndicationDmsEventReportOutput) => void): number;

    connect_after(
        signal: "event-report",
        callback: (_source: this, output: IndicationDmsEventReportOutput) => void
    ): number;

    emit(signal: "event-report", output: IndicationDmsEventReportOutput): void;

    // Members

    activate_automatic(
        input: MessageDmsActivateAutomaticInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    activate_automatic_finish(res: Gio.AsyncResult): MessageDmsActivateAutomaticOutput;

    activate_manual(
        input: MessageDmsActivateManualInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    activate_manual_finish(res: Gio.AsyncResult): MessageDmsActivateManualOutput;

    delete_stored_image(
        input: MessageDmsDeleteStoredImageInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_stored_image_finish(res: Gio.AsyncResult): MessageDmsDeleteStoredImageOutput;

    dell_change_device_mode(
        input: MessageDmsFoxconnChangeDeviceModeInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    dell_change_device_mode_finish(res: Gio.AsyncResult): MessageDmsFoxconnChangeDeviceModeOutput;

    dell_get_firmware_version(
        input: MessageDmsFoxconnGetFirmwareVersionInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    dell_get_firmware_version_finish(res: Gio.AsyncResult): MessageDmsFoxconnGetFirmwareVersionOutput;

    foxconn_change_device_mode(
        input: MessageDmsFoxconnChangeDeviceModeInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    foxconn_change_device_mode_finish(res: Gio.AsyncResult): MessageDmsFoxconnChangeDeviceModeOutput;

    foxconn_get_firmware_version(
        input: MessageDmsFoxconnGetFirmwareVersionInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    foxconn_get_firmware_version_finish(res: Gio.AsyncResult): MessageDmsFoxconnGetFirmwareVersionOutput;

    get_activation_state(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_activation_state_finish(res: Gio.AsyncResult): MessageDmsGetActivationStateOutput;

    get_alt_net_config(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_alt_net_config_finish(res: Gio.AsyncResult): MessageDmsGetAltNetConfigOutput;

    get_band_capabilities(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_band_capabilities_finish(res: Gio.AsyncResult): MessageDmsGetBandCapabilitiesOutput;

    get_boot_image_download_mode(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_boot_image_download_mode_finish(res: Gio.AsyncResult): MessageDmsGetBootImageDownloadModeOutput;

    get_capabilities(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_capabilities_finish(res: Gio.AsyncResult): MessageDmsGetCapabilitiesOutput;

    get_factory_sku(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_factory_sku_finish(res: Gio.AsyncResult): MessageDmsGetFactorySkuOutput;

    get_firmware_preference(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_firmware_preference_finish(res: Gio.AsyncResult): MessageDmsGetFirmwarePreferenceOutput;

    get_hardware_revision(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_hardware_revision_finish(res: Gio.AsyncResult): MessageDmsGetHardwareRevisionOutput;

    get_ids(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_ids_finish(res: Gio.AsyncResult): MessageDmsGetIdsOutput;

    get_mac_address(
        input: MessageDmsGetMacAddressInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_mac_address_finish(res: Gio.AsyncResult): MessageDmsGetMacAddressOutput;

    get_manufacturer(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_manufacturer_finish(res: Gio.AsyncResult): MessageDmsGetManufacturerOutput;

    get_model(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_model_finish(res: Gio.AsyncResult): MessageDmsGetModelOutput;

    get_msisdn(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_msisdn_finish(res: Gio.AsyncResult): MessageDmsGetMsisdnOutput;

    get_operating_mode(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_operating_mode_finish(res: Gio.AsyncResult): MessageDmsGetOperatingModeOutput;

    get_power_state(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_power_state_finish(res: Gio.AsyncResult): MessageDmsGetPowerStateOutput;

    get_prl_version(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_prl_version_finish(res: Gio.AsyncResult): MessageDmsGetPrlVersionOutput;

    get_revision(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_revision_finish(res: Gio.AsyncResult): MessageDmsGetRevisionOutput;

    get_software_version(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_software_version_finish(res: Gio.AsyncResult): MessageDmsGetSoftwareVersionOutput;

    get_stored_image_info(
        input: MessageDmsGetStoredImageInfoInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_stored_image_info_finish(res: Gio.AsyncResult): MessageDmsGetStoredImageInfoOutput;

    get_supported_messages(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_supported_messages_finish(res: Gio.AsyncResult): MessageDmsGetSupportedMessagesOutput;

    get_time(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_time_finish(res: Gio.AsyncResult): MessageDmsGetTimeOutput;

    get_user_lock_state(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_user_lock_state_finish(res: Gio.AsyncResult): MessageDmsGetUserLockStateOutput;

    hp_change_device_mode(
        input: MessageDmsHpChangeDeviceModeInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    hp_change_device_mode_finish(res: Gio.AsyncResult): MessageDmsHpChangeDeviceModeOutput;

    list_stored_images(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    list_stored_images_finish(res: Gio.AsyncResult): MessageDmsListStoredImagesOutput;

    read_eri_file(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    read_eri_file_finish(res: Gio.AsyncResult): MessageDmsReadEriFileOutput;

    read_user_data(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    read_user_data_finish(res: Gio.AsyncResult): MessageDmsReadUserDataOutput;

    reset(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reset_finish(res: Gio.AsyncResult): MessageDmsResetOutput;

    restore_factory_defaults(
        input: MessageDmsRestoreFactoryDefaultsInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    restore_factory_defaults_finish(res: Gio.AsyncResult): MessageDmsRestoreFactoryDefaultsOutput;

    set_alt_net_config(
        input: MessageDmsSetAltNetConfigInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_alt_net_config_finish(res: Gio.AsyncResult): MessageDmsSetAltNetConfigOutput;

    set_boot_image_download_mode(
        input: MessageDmsSetBootImageDownloadModeInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_boot_image_download_mode_finish(res: Gio.AsyncResult): MessageDmsSetBootImageDownloadModeOutput;

    set_event_report(
        input: MessageDmsSetEventReportInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_event_report_finish(res: Gio.AsyncResult): MessageDmsSetEventReportOutput;

    set_fcc_authentication(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_fcc_authentication_finish(res: Gio.AsyncResult): MessageDmsSetFccAuthenticationOutput;

    set_firmware_id(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_firmware_id_finish(res: Gio.AsyncResult): MessageDmsSetFirmwareIdOutput;

    set_firmware_preference(
        input: MessageDmsSetFirmwarePreferenceInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_firmware_preference_finish(res: Gio.AsyncResult): MessageDmsSetFirmwarePreferenceOutput;

    set_operating_mode(
        input: MessageDmsSetOperatingModeInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_operating_mode_finish(res: Gio.AsyncResult): MessageDmsSetOperatingModeOutput;

    set_service_programming_code(
        input: MessageDmsSetServiceProgrammingCodeInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_service_programming_code_finish(res: Gio.AsyncResult): MessageDmsSetServiceProgrammingCodeOutput;

    set_time(
        input: MessageDmsSetTimeInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_time_finish(res: Gio.AsyncResult): MessageDmsSetTimeOutput;

    set_user_lock_code(
        input: MessageDmsSetUserLockCodeInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_user_lock_code_finish(res: Gio.AsyncResult): MessageDmsSetUserLockCodeOutput;

    set_user_lock_state(
        input: MessageDmsSetUserLockStateInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_user_lock_state_finish(res: Gio.AsyncResult): MessageDmsSetUserLockStateOutput;

    swi_get_current_firmware(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    swi_get_current_firmware_finish(res: Gio.AsyncResult): MessageDmsSwiGetCurrentFirmwareOutput;

    swi_get_usb_composition(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    swi_get_usb_composition_finish(res: Gio.AsyncResult): MessageDmsSwiGetUsbCompositionOutput;

    swi_set_usb_composition(
        input: MessageDmsSwiSetUsbCompositionInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    swi_set_usb_composition_finish(res: Gio.AsyncResult): MessageDmsSwiSetUsbCompositionOutput;

    uim_change_pin(
        input: MessageDmsUimChangePinInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    uim_change_pin_finish(res: Gio.AsyncResult): MessageDmsUimChangePinOutput;

    uim_get_ck_status(
        input: MessageDmsUimGetCkStatusInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    uim_get_ck_status_finish(res: Gio.AsyncResult): MessageDmsUimGetCkStatusOutput;

    uim_get_iccid(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    uim_get_iccid_finish(res: Gio.AsyncResult): MessageDmsUimGetIccidOutput;

    uim_get_imsi(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    uim_get_imsi_finish(res: Gio.AsyncResult): MessageDmsUimGetImsiOutput;

    uim_get_pin_status(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    uim_get_pin_status_finish(res: Gio.AsyncResult): MessageDmsUimGetPinStatusOutput;

    uim_get_state(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    uim_get_state_finish(res: Gio.AsyncResult): MessageDmsUimGetStateOutput;

    uim_set_ck_protection(
        input: MessageDmsUimSetCkProtectionInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    uim_set_ck_protection_finish(res: Gio.AsyncResult): MessageDmsUimSetCkProtectionOutput;

    uim_set_pin_protection(
        input: MessageDmsUimSetPinProtectionInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    uim_set_pin_protection_finish(res: Gio.AsyncResult): MessageDmsUimSetPinProtectionOutput;

    uim_unblock_ck(
        input: MessageDmsUimUnblockCkInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    uim_unblock_ck_finish(res: Gio.AsyncResult): MessageDmsUimUnblockCkOutput;

    uim_unblock_pin(
        input: MessageDmsUimUnblockPinInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    uim_unblock_pin_finish(res: Gio.AsyncResult): MessageDmsUimUnblockPinOutput;

    uim_verify_pin(
        input: MessageDmsUimVerifyPinInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    uim_verify_pin_finish(res: Gio.AsyncResult): MessageDmsUimVerifyPinOutput;

    validate_service_programming_code(
        input: MessageDmsValidateServiceProgrammingCodeInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    validate_service_programming_code_finish(res: Gio.AsyncResult): MessageDmsValidateServiceProgrammingCodeOutput;

    write_user_data(
        input: MessageDmsWriteUserDataInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    write_user_data_finish(res: Gio.AsyncResult): MessageDmsWriteUserDataOutput;
}

export module ClientDsd {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientDsd extends Client {
    static $gtype: GObject.GType<ClientDsd>;

    constructor(properties?: Partial<ClientDsd.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientDsd.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_apn_info(
        input: MessageDsdGetApnInfoInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_apn_info_finish(res: Gio.AsyncResult): MessageDsdGetApnInfoOutput;

    set_apn_type(
        input: MessageDsdSetApnTypeInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_apn_type_finish(res: Gio.AsyncResult): MessageDsdSetApnTypeOutput;
}

export module ClientGas {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientGas extends Client {
    static $gtype: GObject.GType<ClientGas>;

    constructor(properties?: Partial<ClientGas.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientGas.ConstructorProperties>, ...args: any[]): void;

    // Members

    dms_get_firmware_list(
        input: MessageGasDmsGetFirmwareListInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    dms_get_firmware_list_finish(res: Gio.AsyncResult): MessageGasDmsGetFirmwareListOutput;

    dms_set_active_firmware(
        input: MessageGasDmsSetActiveFirmwareInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    dms_set_active_firmware_finish(res: Gio.AsyncResult): MessageGasDmsSetActiveFirmwareOutput;
}

export module ClientGms {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientGms extends Client {
    static $gtype: GObject.GType<ClientGms>;

    constructor(properties?: Partial<ClientGms.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientGms.ConstructorProperties>, ...args: any[]): void;

    // Members

    test_get_value(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    test_get_value_finish(res: Gio.AsyncResult): MessageGmsTestGetValueOutput;

    test_set_value(
        input: MessageGmsTestSetValueInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    test_set_value_finish(res: Gio.AsyncResult): MessageGmsTestSetValueOutput;
}

export module ClientLoc {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientLoc extends Client {
    static $gtype: GObject.GType<ClientLoc>;

    constructor(properties?: Partial<ClientLoc.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientLoc.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: "delete-assistance-data",
        callback: (_source: this, output: IndicationLocDeleteAssistanceDataOutput) => void
    ): number;

    connect_after(
        signal: "delete-assistance-data",
        callback: (_source: this, output: IndicationLocDeleteAssistanceDataOutput) => void
    ): number;

    emit(signal: "delete-assistance-data", output: IndicationLocDeleteAssistanceDataOutput): void;

    connect(signal: "engine-state", callback: (_source: this, output: IndicationLocEngineStateOutput) => void): number;

    connect_after(
        signal: "engine-state",
        callback: (_source: this, output: IndicationLocEngineStateOutput) => void
    ): number;

    emit(signal: "engine-state", output: IndicationLocEngineStateOutput): void;

    connect(
        signal: "fix-recurrence-type",
        callback: (_source: this, output: IndicationLocFixRecurrenceTypeOutput) => void
    ): number;

    connect_after(
        signal: "fix-recurrence-type",
        callback: (_source: this, output: IndicationLocFixRecurrenceTypeOutput) => void
    ): number;

    emit(signal: "fix-recurrence-type", output: IndicationLocFixRecurrenceTypeOutput): void;

    connect(
        signal: "get-nmea-types",
        callback: (_source: this, output: IndicationLocGetNmeaTypesOutput) => void
    ): number;

    connect_after(
        signal: "get-nmea-types",
        callback: (_source: this, output: IndicationLocGetNmeaTypesOutput) => void
    ): number;

    emit(signal: "get-nmea-types", output: IndicationLocGetNmeaTypesOutput): void;

    connect(
        signal: "get-operation-mode",
        callback: (_source: this, output: IndicationLocGetOperationModeOutput) => void
    ): number;

    connect_after(
        signal: "get-operation-mode",
        callback: (_source: this, output: IndicationLocGetOperationModeOutput) => void
    ): number;

    emit(signal: "get-operation-mode", output: IndicationLocGetOperationModeOutput): void;

    connect(
        signal: "get-predicted-orbits-data-source",
        callback: (_source: this, output: IndicationLocGetPredictedOrbitsDataSourceOutput) => void
    ): number;

    connect_after(
        signal: "get-predicted-orbits-data-source",
        callback: (_source: this, output: IndicationLocGetPredictedOrbitsDataSourceOutput) => void
    ): number;

    emit(signal: "get-predicted-orbits-data-source", output: IndicationLocGetPredictedOrbitsDataSourceOutput): void;

    connect(signal: "get-server", callback: (_source: this, output: IndicationLocGetServerOutput) => void): number;

    connect_after(
        signal: "get-server",
        callback: (_source: this, output: IndicationLocGetServerOutput) => void
    ): number;

    emit(signal: "get-server", output: IndicationLocGetServerOutput): void;

    connect(signal: "gnss-sv-info", callback: (_source: this, output: IndicationLocGnssSvInfoOutput) => void): number;

    connect_after(
        signal: "gnss-sv-info",
        callback: (_source: this, output: IndicationLocGnssSvInfoOutput) => void
    ): number;

    emit(signal: "gnss-sv-info", output: IndicationLocGnssSvInfoOutput): void;

    connect(
        signal: "inject-predicted-orbits-data",
        callback: (_source: this, output: IndicationLocInjectPredictedOrbitsDataOutput) => void
    ): number;

    connect_after(
        signal: "inject-predicted-orbits-data",
        callback: (_source: this, output: IndicationLocInjectPredictedOrbitsDataOutput) => void
    ): number;

    emit(signal: "inject-predicted-orbits-data", output: IndicationLocInjectPredictedOrbitsDataOutput): void;

    connect(
        signal: "inject-xtra-data",
        callback: (_source: this, output: IndicationLocInjectXtraDataOutput) => void
    ): number;

    connect_after(
        signal: "inject-xtra-data",
        callback: (_source: this, output: IndicationLocInjectXtraDataOutput) => void
    ): number;

    emit(signal: "inject-xtra-data", output: IndicationLocInjectXtraDataOutput): void;

    connect(signal: "nmea", callback: (_source: this, output: IndicationLocNmeaOutput) => void): number;

    connect_after(signal: "nmea", callback: (_source: this, output: IndicationLocNmeaOutput) => void): number;

    emit(signal: "nmea", output: IndicationLocNmeaOutput): void;

    connect(
        signal: "position-report",
        callback: (_source: this, output: IndicationLocPositionReportOutput) => void
    ): number;

    connect_after(
        signal: "position-report",
        callback: (_source: this, output: IndicationLocPositionReportOutput) => void
    ): number;

    emit(signal: "position-report", output: IndicationLocPositionReportOutput): void;

    connect(
        signal: "set-nmea-types",
        callback: (_source: this, output: IndicationLocSetNmeaTypesOutput) => void
    ): number;

    connect_after(
        signal: "set-nmea-types",
        callback: (_source: this, output: IndicationLocSetNmeaTypesOutput) => void
    ): number;

    emit(signal: "set-nmea-types", output: IndicationLocSetNmeaTypesOutput): void;

    connect(
        signal: "set-operation-mode",
        callback: (_source: this, output: IndicationLocSetOperationModeOutput) => void
    ): number;

    connect_after(
        signal: "set-operation-mode",
        callback: (_source: this, output: IndicationLocSetOperationModeOutput) => void
    ): number;

    emit(signal: "set-operation-mode", output: IndicationLocSetOperationModeOutput): void;

    connect(signal: "set-server", callback: (_source: this, output: IndicationLocSetServerOutput) => void): number;

    connect_after(
        signal: "set-server",
        callback: (_source: this, output: IndicationLocSetServerOutput) => void
    ): number;

    emit(signal: "set-server", output: IndicationLocSetServerOutput): void;

    // Members

    delete_assistance_data(
        input: MessageLocDeleteAssistanceDataInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_assistance_data_finish(res: Gio.AsyncResult): MessageLocDeleteAssistanceDataOutput;

    get_nmea_types(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_nmea_types_finish(res: Gio.AsyncResult): MessageLocGetNmeaTypesOutput;

    get_operation_mode(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_operation_mode_finish(res: Gio.AsyncResult): MessageLocGetOperationModeOutput;

    get_predicted_orbits_data_source(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_predicted_orbits_data_source_finish(res: Gio.AsyncResult): MessageLocGetPredictedOrbitsDataSourceOutput;

    get_server(
        input: MessageLocGetServerInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_server_finish(res: Gio.AsyncResult): MessageLocGetServerOutput;

    inject_predicted_orbits_data(
        input: MessageLocInjectPredictedOrbitsDataInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    inject_predicted_orbits_data_finish(res: Gio.AsyncResult): MessageLocInjectPredictedOrbitsDataOutput;

    inject_xtra_data(
        input: MessageLocInjectXtraDataInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    inject_xtra_data_finish(res: Gio.AsyncResult): MessageLocInjectXtraDataOutput;

    register_events(
        input: MessageLocRegisterEventsInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    register_events_finish(res: Gio.AsyncResult): MessageLocRegisterEventsOutput;

    set_nmea_types(
        input: MessageLocSetNmeaTypesInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_nmea_types_finish(res: Gio.AsyncResult): MessageLocSetNmeaTypesOutput;

    set_operation_mode(
        input: MessageLocSetOperationModeInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_operation_mode_finish(res: Gio.AsyncResult): MessageLocSetOperationModeOutput;

    set_server(
        input: MessageLocSetServerInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_server_finish(res: Gio.AsyncResult): MessageLocSetServerOutput;

    start(
        input: MessageLocStartInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    start_finish(res: Gio.AsyncResult): MessageLocStartOutput;

    stop(
        input: MessageLocStopInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    stop_finish(res: Gio.AsyncResult): MessageLocStopOutput;
}

export module ClientNas {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientNas extends Client {
    static $gtype: GObject.GType<ClientNas>;

    constructor(properties?: Partial<ClientNas.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientNas.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "event-report", callback: (_source: this, output: IndicationNasEventReportOutput) => void): number;

    connect_after(
        signal: "event-report",
        callback: (_source: this, output: IndicationNasEventReportOutput) => void
    ): number;

    emit(signal: "event-report", output: IndicationNasEventReportOutput): void;

    connect(signal: "network-time", callback: (_source: this, output: IndicationNasNetworkTimeOutput) => void): number;

    connect_after(
        signal: "network-time",
        callback: (_source: this, output: IndicationNasNetworkTimeOutput) => void
    ): number;

    emit(signal: "network-time", output: IndicationNasNetworkTimeOutput): void;

    connect(
        signal: "operator-name",
        callback: (_source: this, output: IndicationNasOperatorNameOutput) => void
    ): number;

    connect_after(
        signal: "operator-name",
        callback: (_source: this, output: IndicationNasOperatorNameOutput) => void
    ): number;

    emit(signal: "operator-name", output: IndicationNasOperatorNameOutput): void;

    connect(
        signal: "serving-system",
        callback: (_source: this, output: IndicationNasServingSystemOutput) => void
    ): number;

    connect_after(
        signal: "serving-system",
        callback: (_source: this, output: IndicationNasServingSystemOutput) => void
    ): number;

    emit(signal: "serving-system", output: IndicationNasServingSystemOutput): void;

    connect(signal: "signal-info", callback: (_source: this, output: IndicationNasSignalInfoOutput) => void): number;

    connect_after(
        signal: "signal-info",
        callback: (_source: this, output: IndicationNasSignalInfoOutput) => void
    ): number;

    emit(signal: "signal-info", output: IndicationNasSignalInfoOutput): void;

    connect(signal: "system-info", callback: (_source: this, output: IndicationNasSystemInfoOutput) => void): number;

    connect_after(
        signal: "system-info",
        callback: (_source: this, output: IndicationNasSystemInfoOutput) => void
    ): number;

    emit(signal: "system-info", output: IndicationNasSystemInfoOutput): void;

    // Members

    attach_detach(
        input: MessageNasAttachDetachInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    attach_detach_finish(res: Gio.AsyncResult): MessageNasAttachDetachOutput;

    config_signal_info(
        input: MessageNasConfigSignalInfoInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    config_signal_info_finish(res: Gio.AsyncResult): MessageNasConfigSignalInfoOutput;

    force_network_search(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    force_network_search_finish(res: Gio.AsyncResult): MessageNasForceNetworkSearchOutput;

    get_cdma_position_info(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_cdma_position_info_finish(res: Gio.AsyncResult): MessageNasGetCdmaPositionInfoOutput;

    get_cell_location_info(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_cell_location_info_finish(res: Gio.AsyncResult): MessageNasGetCellLocationInfoOutput;

    get_home_network(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_home_network_finish(res: Gio.AsyncResult): MessageNasGetHomeNetworkOutput;

    get_lte_cphy_ca_info(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_lte_cphy_ca_info_finish(res: Gio.AsyncResult): MessageNasGetLteCphyCaInfoOutput;

    get_operator_name(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_operator_name_finish(res: Gio.AsyncResult): MessageNasGetOperatorNameOutput;

    get_rf_band_information(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_rf_band_information_finish(res: Gio.AsyncResult): MessageNasGetRfBandInformationOutput;

    get_serving_system(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_serving_system_finish(res: Gio.AsyncResult): MessageNasGetServingSystemOutput;

    get_signal_info(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_signal_info_finish(res: Gio.AsyncResult): MessageNasGetSignalInfoOutput;

    get_signal_strength(
        input: MessageNasGetSignalStrengthInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_signal_strength_finish(res: Gio.AsyncResult): MessageNasGetSignalStrengthOutput;

    get_supported_messages(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_supported_messages_finish(res: Gio.AsyncResult): MessageNasGetSupportedMessagesOutput;

    get_system_info(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_system_info_finish(res: Gio.AsyncResult): MessageNasGetSystemInfoOutput;

    get_system_selection_preference(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_system_selection_preference_finish(res: Gio.AsyncResult): MessageNasGetSystemSelectionPreferenceOutput;

    get_technology_preference(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_technology_preference_finish(res: Gio.AsyncResult): MessageNasGetTechnologyPreferenceOutput;

    get_tx_rx_info(
        input: MessageNasGetTxRxInfoInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_tx_rx_info_finish(res: Gio.AsyncResult): MessageNasGetTxRxInfoOutput;

    initiate_network_register(
        input: MessageNasInitiateNetworkRegisterInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    initiate_network_register_finish(res: Gio.AsyncResult): MessageNasInitiateNetworkRegisterOutput;

    network_scan(
        input: MessageNasNetworkScanInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    network_scan_finish(res: Gio.AsyncResult): MessageNasNetworkScanOutput;

    register_indications(
        input: MessageNasRegisterIndicationsInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    register_indications_finish(res: Gio.AsyncResult): MessageNasRegisterIndicationsOutput;

    reset(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reset_finish(res: Gio.AsyncResult): MessageNasResetOutput;

    set_event_report(
        input: MessageNasSetEventReportInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_event_report_finish(res: Gio.AsyncResult): MessageNasSetEventReportOutput;

    set_system_selection_preference(
        input: MessageNasSetSystemSelectionPreferenceInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_system_selection_preference_finish(res: Gio.AsyncResult): MessageNasSetSystemSelectionPreferenceOutput;

    set_technology_preference(
        input: MessageNasSetTechnologyPreferenceInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_technology_preference_finish(res: Gio.AsyncResult): MessageNasSetTechnologyPreferenceOutput;

    swi_get_status(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    swi_get_status_finish(res: Gio.AsyncResult): MessageNasSwiGetStatusOutput;
}

export module ClientOma {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientOma extends Client {
    static $gtype: GObject.GType<ClientOma>;

    constructor(properties?: Partial<ClientOma.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientOma.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "event-report", callback: (_source: this, output: IndicationOmaEventReportOutput) => void): number;

    connect_after(
        signal: "event-report",
        callback: (_source: this, output: IndicationOmaEventReportOutput) => void
    ): number;

    emit(signal: "event-report", output: IndicationOmaEventReportOutput): void;

    // Members

    cancel_session(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    cancel_session_finish(res: Gio.AsyncResult): MessageOmaCancelSessionOutput;

    get_feature_setting(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_feature_setting_finish(res: Gio.AsyncResult): MessageOmaGetFeatureSettingOutput;

    get_session_info(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_session_info_finish(res: Gio.AsyncResult): MessageOmaGetSessionInfoOutput;

    reset(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reset_finish(res: Gio.AsyncResult): MessageOmaResetOutput;

    send_selection(
        input: MessageOmaSendSelectionInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    send_selection_finish(res: Gio.AsyncResult): MessageOmaSendSelectionOutput;

    set_event_report(
        input: MessageOmaSetEventReportInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_event_report_finish(res: Gio.AsyncResult): MessageOmaSetEventReportOutput;

    set_feature_setting(
        input: MessageOmaSetFeatureSettingInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_feature_setting_finish(res: Gio.AsyncResult): MessageOmaSetFeatureSettingOutput;

    start_session(
        input: MessageOmaStartSessionInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    start_session_finish(res: Gio.AsyncResult): MessageOmaStartSessionOutput;
}

export module ClientPbm {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientPbm extends Client {
    static $gtype: GObject.GType<ClientPbm>;

    constructor(properties?: Partial<ClientPbm.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientPbm.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_all_capabilities(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_all_capabilities_finish(res: Gio.AsyncResult): MessagePbmGetAllCapabilitiesOutput;

    get_capabilities(
        input: MessagePbmGetCapabilitiesInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_capabilities_finish(res: Gio.AsyncResult): MessagePbmGetCapabilitiesOutput;

    indication_register(
        input: MessagePbmIndicationRegisterInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    indication_register_finish(res: Gio.AsyncResult): MessagePbmIndicationRegisterOutput;
}

export module ClientPdc {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientPdc extends Client {
    static $gtype: GObject.GType<ClientPdc>;

    constructor(properties?: Partial<ClientPdc.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientPdc.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: "activate-config",
        callback: (_source: this, output: IndicationPdcActivateConfigOutput) => void
    ): number;

    connect_after(
        signal: "activate-config",
        callback: (_source: this, output: IndicationPdcActivateConfigOutput) => void
    ): number;

    emit(signal: "activate-config", output: IndicationPdcActivateConfigOutput): void;

    connect(
        signal: "deactivate-config",
        callback: (_source: this, output: IndicationPdcDeactivateConfigOutput) => void
    ): number;

    connect_after(
        signal: "deactivate-config",
        callback: (_source: this, output: IndicationPdcDeactivateConfigOutput) => void
    ): number;

    emit(signal: "deactivate-config", output: IndicationPdcDeactivateConfigOutput): void;

    connect(
        signal: "get-config-info",
        callback: (_source: this, output: IndicationPdcGetConfigInfoOutput) => void
    ): number;

    connect_after(
        signal: "get-config-info",
        callback: (_source: this, output: IndicationPdcGetConfigInfoOutput) => void
    ): number;

    emit(signal: "get-config-info", output: IndicationPdcGetConfigInfoOutput): void;

    connect(
        signal: "get-selected-config",
        callback: (_source: this, output: IndicationPdcGetSelectedConfigOutput) => void
    ): number;

    connect_after(
        signal: "get-selected-config",
        callback: (_source: this, output: IndicationPdcGetSelectedConfigOutput) => void
    ): number;

    emit(signal: "get-selected-config", output: IndicationPdcGetSelectedConfigOutput): void;

    connect(signal: "list-configs", callback: (_source: this, output: IndicationPdcListConfigsOutput) => void): number;

    connect_after(
        signal: "list-configs",
        callback: (_source: this, output: IndicationPdcListConfigsOutput) => void
    ): number;

    emit(signal: "list-configs", output: IndicationPdcListConfigsOutput): void;

    connect(signal: "load-config", callback: (_source: this, output: IndicationPdcLoadConfigOutput) => void): number;

    connect_after(
        signal: "load-config",
        callback: (_source: this, output: IndicationPdcLoadConfigOutput) => void
    ): number;

    emit(signal: "load-config", output: IndicationPdcLoadConfigOutput): void;

    connect(
        signal: "set-selected-config",
        callback: (_source: this, output: IndicationPdcSetSelectedConfigOutput) => void
    ): number;

    connect_after(
        signal: "set-selected-config",
        callback: (_source: this, output: IndicationPdcSetSelectedConfigOutput) => void
    ): number;

    emit(signal: "set-selected-config", output: IndicationPdcSetSelectedConfigOutput): void;

    // Members

    activate_config(
        input: MessagePdcActivateConfigInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    activate_config_finish(res: Gio.AsyncResult): MessagePdcActivateConfigOutput;

    config_change(
        input: MessagePdcConfigChangeInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    config_change_finish(res: Gio.AsyncResult): MessagePdcConfigChangeOutput;

    deactivate_config(
        input: MessagePdcDeactivateConfigInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    deactivate_config_finish(res: Gio.AsyncResult): MessagePdcDeactivateConfigOutput;

    delete_config(
        input: MessagePdcDeleteConfigInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_config_finish(res: Gio.AsyncResult): MessagePdcDeleteConfigOutput;

    get_config_info(
        input: MessagePdcGetConfigInfoInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_config_info_finish(res: Gio.AsyncResult): MessagePdcGetConfigInfoOutput;

    get_config_limits(
        input: MessagePdcGetConfigLimitsInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_config_limits_finish(res: Gio.AsyncResult): MessagePdcGetConfigLimitsOutput;

    get_default_config_info(
        input: MessagePdcGetDefaultConfigInfoInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_default_config_info_finish(res: Gio.AsyncResult): MessagePdcGetDefaultConfigInfoOutput;

    get_selected_config(
        input: MessagePdcGetSelectedConfigInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_selected_config_finish(res: Gio.AsyncResult): MessagePdcGetSelectedConfigOutput;

    list_configs(
        input: MessagePdcListConfigsInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    list_configs_finish(res: Gio.AsyncResult): MessagePdcListConfigsOutput;

    load_config(
        input: MessagePdcLoadConfigInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    load_config_finish(res: Gio.AsyncResult): MessagePdcLoadConfigOutput;

    register(
        input: MessagePdcRegisterInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    register_finish(res: Gio.AsyncResult): MessagePdcRegisterOutput;

    reset(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reset_finish(res: Gio.AsyncResult): MessagePdcResetOutput;

    set_selected_config(
        input: MessagePdcSetSelectedConfigInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_selected_config_finish(res: Gio.AsyncResult): MessagePdcSetSelectedConfigOutput;
}

export module ClientPds {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientPds extends Client {
    static $gtype: GObject.GType<ClientPds>;

    constructor(properties?: Partial<ClientPds.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientPds.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "event-report", callback: (_source: this, output: IndicationPdsEventReportOutput) => void): number;

    connect_after(
        signal: "event-report",
        callback: (_source: this, output: IndicationPdsEventReportOutput) => void
    ): number;

    emit(signal: "event-report", output: IndicationPdsEventReportOutput): void;

    connect(signal: "gps-ready", callback: (_source: this) => void): number;

    connect_after(signal: "gps-ready", callback: (_source: this) => void): number;

    emit(signal: "gps-ready"): void;

    // Members

    get_agps_config(
        input: MessagePdsGetAgpsConfigInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_agps_config_finish(res: Gio.AsyncResult): MessagePdsGetAgpsConfigOutput;

    get_auto_tracking_state(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_auto_tracking_state_finish(res: Gio.AsyncResult): MessagePdsGetAutoTrackingStateOutput;

    get_default_tracking_session(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_default_tracking_session_finish(res: Gio.AsyncResult): MessagePdsGetDefaultTrackingSessionOutput;

    get_gps_service_state(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_gps_service_state_finish(res: Gio.AsyncResult): MessagePdsGetGpsServiceStateOutput;

    reset(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reset_finish(res: Gio.AsyncResult): MessagePdsResetOutput;

    set_agps_config(
        input: MessagePdsSetAgpsConfigInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_agps_config_finish(res: Gio.AsyncResult): MessagePdsSetAgpsConfigOutput;

    set_auto_tracking_state(
        input: MessagePdsSetAutoTrackingStateInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_auto_tracking_state_finish(res: Gio.AsyncResult): MessagePdsSetAutoTrackingStateOutput;

    set_default_tracking_session(
        input: MessagePdsSetDefaultTrackingSessionInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_default_tracking_session_finish(res: Gio.AsyncResult): MessagePdsSetDefaultTrackingSessionOutput;

    set_event_report(
        input: MessagePdsSetEventReportInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_event_report_finish(res: Gio.AsyncResult): MessagePdsSetEventReportOutput;

    set_gps_service_state(
        input: MessagePdsSetGpsServiceStateInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_gps_service_state_finish(res: Gio.AsyncResult): MessagePdsSetGpsServiceStateOutput;
}

export module ClientQos {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientQos extends Client {
    static $gtype: GObject.GType<ClientQos>;

    constructor(properties?: Partial<ClientQos.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientQos.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "flow-status", callback: (_source: this, output: IndicationQosFlowStatusOutput) => void): number;

    connect_after(
        signal: "flow-status",
        callback: (_source: this, output: IndicationQosFlowStatusOutput) => void
    ): number;

    emit(signal: "flow-status", output: IndicationQosFlowStatusOutput): void;

    connect(
        signal: "network-status",
        callback: (_source: this, output: IndicationQosNetworkStatusOutput) => void
    ): number;

    connect_after(
        signal: "network-status",
        callback: (_source: this, output: IndicationQosNetworkStatusOutput) => void
    ): number;

    emit(signal: "network-status", output: IndicationQosNetworkStatusOutput): void;

    // Members

    get_flow_status(
        input: MessageQosGetFlowStatusInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_flow_status_finish(res: Gio.AsyncResult): MessageQosGetFlowStatusOutput;

    get_network_status(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_network_status_finish(res: Gio.AsyncResult): MessageQosGetNetworkStatusOutput;

    reset(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reset_finish(res: Gio.AsyncResult): MessageQosResetOutput;

    swi_read_data_stats(
        input: MessageQosSwiReadDataStatsInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    swi_read_data_stats_finish(res: Gio.AsyncResult): MessageQosSwiReadDataStatsOutput;
}

export module ClientUim {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientUim extends Client {
    static $gtype: GObject.GType<ClientUim>;

    constructor(properties?: Partial<ClientUim.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientUim.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "card-status", callback: (_source: this, output: IndicationUimCardStatusOutput) => void): number;

    connect_after(
        signal: "card-status",
        callback: (_source: this, output: IndicationUimCardStatusOutput) => void
    ): number;

    emit(signal: "card-status", output: IndicationUimCardStatusOutput): void;

    connect(signal: "slot-status", callback: (_source: this, output: IndicationUimSlotStatusOutput) => void): number;

    connect_after(
        signal: "slot-status",
        callback: (_source: this, output: IndicationUimSlotStatusOutput) => void
    ): number;

    emit(signal: "slot-status", output: IndicationUimSlotStatusOutput): void;

    // Members

    change_pin(
        input: MessageUimChangePinInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    change_pin_finish(res: Gio.AsyncResult): MessageUimChangePinOutput;

    change_provisioning_session(
        input: MessageUimChangeProvisioningSessionInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    change_provisioning_session_finish(res: Gio.AsyncResult): MessageUimChangeProvisioningSessionOutput;

    get_card_status(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_card_status_finish(res: Gio.AsyncResult): MessageUimGetCardStatusOutput;

    get_file_attributes(
        input: MessageUimGetFileAttributesInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_file_attributes_finish(res: Gio.AsyncResult): MessageUimGetFileAttributesOutput;

    get_slot_status(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_slot_status_finish(res: Gio.AsyncResult): MessageUimGetSlotStatusOutput;

    get_supported_messages(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_supported_messages_finish(res: Gio.AsyncResult): MessageUimGetSupportedMessagesOutput;

    power_off_sim(
        input: MessageUimPowerOffSimInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    power_off_sim_finish(res: Gio.AsyncResult): MessageUimPowerOffSimOutput;

    power_on_sim(
        input: MessageUimPowerOnSimInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    power_on_sim_finish(res: Gio.AsyncResult): MessageUimPowerOnSimOutput;

    read_record(
        input: MessageUimReadRecordInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    read_record_finish(res: Gio.AsyncResult): MessageUimReadRecordOutput;

    read_transparent(
        input: MessageUimReadTransparentInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    read_transparent_finish(res: Gio.AsyncResult): MessageUimReadTransparentOutput;

    register_events(
        input: MessageUimRegisterEventsInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    register_events_finish(res: Gio.AsyncResult): MessageUimRegisterEventsOutput;

    reset(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reset_finish(res: Gio.AsyncResult): MessageUimResetOutput;

    set_pin_protection(
        input: MessageUimSetPinProtectionInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_pin_protection_finish(res: Gio.AsyncResult): MessageUimSetPinProtectionOutput;

    switch_slot(
        input: MessageUimSwitchSlotInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    switch_slot_finish(res: Gio.AsyncResult): MessageUimSwitchSlotOutput;

    unblock_pin(
        input: MessageUimUnblockPinInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    unblock_pin_finish(res: Gio.AsyncResult): MessageUimUnblockPinOutput;

    verify_pin(
        input: MessageUimVerifyPinInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    verify_pin_finish(res: Gio.AsyncResult): MessageUimVerifyPinOutput;
}

export module ClientVoice {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientVoice extends Client {
    static $gtype: GObject.GType<ClientVoice>;

    constructor(properties?: Partial<ClientVoice.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientVoice.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(
        signal: "all-call-status",
        callback: (_source: this, output: IndicationVoiceAllCallStatusOutput) => void
    ): number;

    connect_after(
        signal: "all-call-status",
        callback: (_source: this, output: IndicationVoiceAllCallStatusOutput) => void
    ): number;

    emit(signal: "all-call-status", output: IndicationVoiceAllCallStatusOutput): void;

    connect(
        signal: "originate-ussd-no-wait",
        callback: (_source: this, output: IndicationVoiceOriginateUssdNoWaitOutput) => void
    ): number;

    connect_after(
        signal: "originate-ussd-no-wait",
        callback: (_source: this, output: IndicationVoiceOriginateUssdNoWaitOutput) => void
    ): number;

    emit(signal: "originate-ussd-no-wait", output: IndicationVoiceOriginateUssdNoWaitOutput): void;

    connect(signal: "release-ussd", callback: (_source: this) => void): number;

    connect_after(signal: "release-ussd", callback: (_source: this) => void): number;

    emit(signal: "release-ussd"): void;

    connect(signal: "ussd", callback: (_source: this, output: IndicationVoiceUssdOutput) => void): number;

    connect_after(signal: "ussd", callback: (_source: this, output: IndicationVoiceUssdOutput) => void): number;

    emit(signal: "ussd", output: IndicationVoiceUssdOutput): void;

    // Members

    answer_call(
        input: MessageVoiceAnswerCallInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    answer_call_finish(res: Gio.AsyncResult): MessageVoiceAnswerCallOutput;

    answer_ussd(
        input: MessageVoiceAnswerUssdInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    answer_ussd_finish(res: Gio.AsyncResult): MessageVoiceAnswerUssdOutput;

    cancel_ussd(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    cancel_ussd_finish(res: Gio.AsyncResult): MessageVoiceCancelUssdOutput;

    dial_call(
        input: MessageVoiceDialCallInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    dial_call_finish(res: Gio.AsyncResult): MessageVoiceDialCallOutput;

    end_call(
        input: MessageVoiceEndCallInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    end_call_finish(res: Gio.AsyncResult): MessageVoiceEndCallOutput;

    get_config(
        input: MessageVoiceGetConfigInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_config_finish(res: Gio.AsyncResult): MessageVoiceGetConfigOutput;

    get_supported_messages(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_supported_messages_finish(res: Gio.AsyncResult): MessageVoiceGetSupportedMessagesOutput;

    indication_register(
        input: MessageVoiceIndicationRegisterInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    indication_register_finish(res: Gio.AsyncResult): MessageVoiceIndicationRegisterOutput;

    originate_ussd(
        input: MessageVoiceOriginateUssdInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    originate_ussd_finish(res: Gio.AsyncResult): MessageVoiceOriginateUssdOutput;

    originate_ussd_no_wait(
        input: MessageVoiceOriginateUssdNoWaitInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    originate_ussd_no_wait_finish(res: Gio.AsyncResult): MessageVoiceOriginateUssdNoWaitOutput;
}

export module ClientWda {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientWda extends Client {
    static $gtype: GObject.GType<ClientWda>;

    constructor(properties?: Partial<ClientWda.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientWda.ConstructorProperties>, ...args: any[]): void;

    // Members

    get_data_format(
        input: MessageWdaGetDataFormatInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_data_format_finish(res: Gio.AsyncResult): MessageWdaGetDataFormatOutput;

    get_supported_messages(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_supported_messages_finish(res: Gio.AsyncResult): MessageWdaGetSupportedMessagesOutput;

    set_data_format(
        input: MessageWdaSetDataFormatInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_data_format_finish(res: Gio.AsyncResult): MessageWdaSetDataFormatOutput;
}

export module ClientWds {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientWds extends Client {
    static $gtype: GObject.GType<ClientWds>;

    constructor(properties?: Partial<ClientWds.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientWds.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "event-report", callback: (_source: this, output: IndicationWdsEventReportOutput) => void): number;

    connect_after(
        signal: "event-report",
        callback: (_source: this, output: IndicationWdsEventReportOutput) => void
    ): number;

    emit(signal: "event-report", output: IndicationWdsEventReportOutput): void;

    connect(
        signal: "packet-service-status",
        callback: (_source: this, output: IndicationWdsPacketServiceStatusOutput) => void
    ): number;

    connect_after(
        signal: "packet-service-status",
        callback: (_source: this, output: IndicationWdsPacketServiceStatusOutput) => void
    ): number;

    emit(signal: "packet-service-status", output: IndicationWdsPacketServiceStatusOutput): void;

    // Members

    bind_mux_data_port(
        input: MessageWdsBindMuxDataPortInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    bind_mux_data_port_finish(res: Gio.AsyncResult): MessageWdsBindMuxDataPortOutput;

    create_profile(
        input: MessageWdsCreateProfileInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    create_profile_finish(res: Gio.AsyncResult): MessageWdsCreateProfileOutput;

    delete_profile(
        input: MessageWdsDeleteProfileInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_profile_finish(res: Gio.AsyncResult): MessageWdsDeleteProfileOutput;

    get_autoconnect_settings(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_autoconnect_settings_finish(res: Gio.AsyncResult): MessageWdsGetAutoconnectSettingsOutput;

    get_channel_rates(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_channel_rates_finish(res: Gio.AsyncResult): MessageWdsGetChannelRatesOutput;

    get_current_data_bearer_technology(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_current_data_bearer_technology_finish(res: Gio.AsyncResult): MessageWdsGetCurrentDataBearerTechnologyOutput;

    get_current_settings(
        input: MessageWdsGetCurrentSettingsInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_current_settings_finish(res: Gio.AsyncResult): MessageWdsGetCurrentSettingsOutput;

    get_data_bearer_technology(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_data_bearer_technology_finish(res: Gio.AsyncResult): MessageWdsGetDataBearerTechnologyOutput;

    get_default_profile_num(
        input: MessageWdsGetDefaultProfileNumInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_default_profile_num_finish(res: Gio.AsyncResult): MessageWdsGetDefaultProfileNumOutput;

    get_default_settings(
        input: MessageWdsGetDefaultSettingsInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_default_settings_finish(res: Gio.AsyncResult): MessageWdsGetDefaultSettingsOutput;

    get_dormancy_status(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_dormancy_status_finish(res: Gio.AsyncResult): MessageWdsGetDormancyStatusOutput;

    get_packet_service_status(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_packet_service_status_finish(res: Gio.AsyncResult): MessageWdsGetPacketServiceStatusOutput;

    get_packet_statistics(
        input: MessageWdsGetPacketStatisticsInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_packet_statistics_finish(res: Gio.AsyncResult): MessageWdsGetPacketStatisticsOutput;

    get_pdn_throttle_info(
        input: MessageWdsGetPdnThrottleInfoInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_pdn_throttle_info_finish(res: Gio.AsyncResult): MessageWdsGetPdnThrottleInfoOutput;

    get_profile_list(
        input: MessageWdsGetProfileListInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_profile_list_finish(res: Gio.AsyncResult): MessageWdsGetProfileListOutput;

    get_profile_settings(
        input: MessageWdsGetProfileSettingsInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_profile_settings_finish(res: Gio.AsyncResult): MessageWdsGetProfileSettingsOutput;

    get_supported_messages(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_supported_messages_finish(res: Gio.AsyncResult): MessageWdsGetSupportedMessagesOutput;

    go_active(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    go_active_finish(res: Gio.AsyncResult): MessageWdsGoActiveOutput;

    go_dormant(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    go_dormant_finish(res: Gio.AsyncResult): MessageWdsGoDormantOutput;

    modify_profile(
        input: MessageWdsModifyProfileInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    modify_profile_finish(res: Gio.AsyncResult): MessageWdsModifyProfileOutput;

    reset(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reset_finish(res: Gio.AsyncResult): MessageWdsResetOutput;

    set_autoconnect_settings(
        input: MessageWdsSetAutoconnectSettingsInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_autoconnect_settings_finish(res: Gio.AsyncResult): MessageWdsSetAutoconnectSettingsOutput;

    set_default_profile_num(
        input: MessageWdsSetDefaultProfileNumInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_default_profile_num_finish(res: Gio.AsyncResult): MessageWdsSetDefaultProfileNumOutput;

    set_event_report(
        input: MessageWdsSetEventReportInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_event_report_finish(res: Gio.AsyncResult): MessageWdsSetEventReportOutput;

    set_ip_family(
        input: MessageWdsSetIpFamilyInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_ip_family_finish(res: Gio.AsyncResult): MessageWdsSetIpFamilyOutput;

    start_network(
        input: MessageWdsStartNetworkInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    start_network_finish(res: Gio.AsyncResult): MessageWdsStartNetworkOutput;

    stop_network(
        input: MessageWdsStopNetworkInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    stop_network_finish(res: Gio.AsyncResult): MessageWdsStopNetworkOutput;

    swi_create_profile_indexed(
        input: MessageWdsSwiCreateProfileIndexedInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    swi_create_profile_indexed_finish(res: Gio.AsyncResult): MessageWdsSwiCreateProfileIndexedOutput;
}

export module ClientWms {
    export interface ConstructorProperties extends Client.ConstructorProperties {
        [key: string]: any;
    }
}

export class ClientWms extends Client {
    static $gtype: GObject.GType<ClientWms>;

    constructor(properties?: Partial<ClientWms.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<ClientWms.ConstructorProperties>, ...args: any[]): void;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "event-report", callback: (_source: this, output: IndicationWmsEventReportOutput) => void): number;

    connect_after(
        signal: "event-report",
        callback: (_source: this, output: IndicationWmsEventReportOutput) => void
    ): number;

    emit(signal: "event-report", output: IndicationWmsEventReportOutput): void;

    connect(signal: "smsc-address", callback: (_source: this, output: IndicationWmsSmscAddressOutput) => void): number;

    connect_after(
        signal: "smsc-address",
        callback: (_source: this, output: IndicationWmsSmscAddressOutput) => void
    ): number;

    emit(signal: "smsc-address", output: IndicationWmsSmscAddressOutput): void;

    // Members

    ["delete"](
        input: MessageWmsDeleteInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    delete_finish(res: Gio.AsyncResult): MessageWmsDeleteOutput;

    get_message_protocol(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_message_protocol_finish(res: Gio.AsyncResult): MessageWmsGetMessageProtocolOutput;

    get_routes(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_routes_finish(res: Gio.AsyncResult): MessageWmsGetRoutesOutput;

    get_supported_messages(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_supported_messages_finish(res: Gio.AsyncResult): MessageWmsGetSupportedMessagesOutput;

    list_messages(
        input: MessageWmsListMessagesInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    list_messages_finish(res: Gio.AsyncResult): MessageWmsListMessagesOutput;

    modify_tag(
        input: MessageWmsModifyTagInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    modify_tag_finish(res: Gio.AsyncResult): MessageWmsModifyTagOutput;

    raw_read(
        input: MessageWmsRawReadInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    raw_read_finish(res: Gio.AsyncResult): MessageWmsRawReadOutput;

    raw_send(
        input: MessageWmsRawSendInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    raw_send_finish(res: Gio.AsyncResult): MessageWmsRawSendOutput;

    raw_write(
        input: MessageWmsRawWriteInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    raw_write_finish(res: Gio.AsyncResult): MessageWmsRawWriteOutput;

    reset(
        unused: any | null,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    reset_finish(res: Gio.AsyncResult): MessageWmsResetOutput;

    send_from_memory_storage(
        input: MessageWmsSendFromMemoryStorageInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    send_from_memory_storage_finish(res: Gio.AsyncResult): MessageWmsSendFromMemoryStorageOutput;

    set_event_report(
        input: MessageWmsSetEventReportInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_event_report_finish(res: Gio.AsyncResult): MessageWmsSetEventReportOutput;

    set_routes(
        input: MessageWmsSetRoutesInput,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_routes_finish(res: Gio.AsyncResult): MessageWmsSetRoutesOutput;
}

export module Device {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;

        device_file: Gio.File;
        deviceFile: Gio.File;
        device_no_file_check: boolean;
        deviceNoFileCheck: boolean;
        device_proxy_path: string;
        deviceProxyPath: string;
        device_wwan_iface: string;
        deviceWwanIface: string;
    }
}

export class Device extends GObject.Object implements Gio.AsyncInitable<Device> {
    static $gtype: GObject.GType<Device>;

    constructor(properties?: Partial<Device.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Device.ConstructorProperties>, ...args: any[]): void;

    // Properties
    device_file: Gio.File;
    deviceFile: Gio.File;
    device_no_file_check: boolean;
    deviceNoFileCheck: boolean;
    device_proxy_path: string;
    deviceProxyPath: string;
    device_wwan_iface: string;
    deviceWwanIface: string;

    // Signals

    connect(id: string, callback: (...args: any[]) => any): number;

    connect_after(id: string, callback: (...args: any[]) => any): number;

    emit(id: string, ...args: any[]): void;

    connect(signal: "device-removed", callback: (_source: this) => void): number;

    connect_after(signal: "device-removed", callback: (_source: this) => void): number;

    emit(signal: "device-removed"): void;

    connect(signal: "indication", callback: (_source: this, output: Uint8Array) => void): number;

    connect_after(signal: "indication", callback: (_source: this, output: Uint8Array) => void): number;

    emit(signal: "indication", output: Uint8Array | string): void;

    // Constructors

    static new_finish(res: Gio.AsyncResult): Device;
    static new_finish(...args: never[]): never;

    // Members

    allocate_client(
        service: Service,
        cid: number,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    allocate_client_finish(res: Gio.AsyncResult): Client;

    close(): boolean;

    close_async(
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    close_finish(res: Gio.AsyncResult): boolean;

    command(
        message: Message,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    command_abortable_finish(res: Gio.AsyncResult): Message;

    command_finish(res: Gio.AsyncResult): Message;

    command_full(
        message: Message,
        message_context: MessageContext,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    command_full_finish(res: Gio.AsyncResult): Message;

    get_expected_data_format(): DeviceExpectedDataFormat;

    get_file(): Gio.File;

    get_path(): string;

    get_path_display(): string;

    get_service_version_info(
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    get_service_version_info_finish(res: Gio.AsyncResult): DeviceServiceVersionInfo[];

    get_wwan_iface(): string;

    is_open(): boolean;

    open(
        flags: DeviceOpenFlags,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    open_finish(res: Gio.AsyncResult): boolean;

    peek_file(): Gio.File;

    release_client(
        client: Client,
        flags: DeviceReleaseClientFlags,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    release_client_finish(res: Gio.AsyncResult): boolean;

    set_expected_data_format(format: DeviceExpectedDataFormat): boolean;

    set_instance_id(
        instance_id: number,
        timeout: number,
        cancellable?: Gio.Cancellable | null,
        callback?: Gio.AsyncReadyCallback<this> | null
    ): void;

    set_instance_id_finish(res: Gio.AsyncResult, link_id: number): boolean;

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

        qmi_proxy_n_clients: number;
        qmiProxyNClients: number;
    }
}

export class Proxy extends GObject.Object {
    static $gtype: GObject.GType<Proxy>;

    constructor(properties?: Partial<Proxy.ConstructorProperties>, ...args: any[]);

    _init(properties?: Partial<Proxy.ConstructorProperties>, ...args: any[]): void;

    // Properties
    qmi_proxy_n_clients: number;
    qmiProxyNClients: number;

    // Fields
    priv: ProxyPrivate;

    // Constructors

    static ["new"](): Proxy;

    // Members

    get_n_clients(): number;
}

export class ClientPrivate {
    static $gtype: GObject.GType<ClientPrivate>;

    constructor(copy: ClientPrivate);
}

export class ConfigTypeAndId {
    static $gtype: GObject.GType<ConfigTypeAndId>;

    constructor(copy: ConfigTypeAndId);

    // Fields
    config_type: PdcConfigurationType;
    id: any[];
}

export class DevicePrivate {
    static $gtype: GObject.GType<DevicePrivate>;

    constructor(copy: DevicePrivate);
}

export class DeviceServiceVersionInfo {
    static $gtype: GObject.GType<DeviceServiceVersionInfo>;

    constructor(copy: DeviceServiceVersionInfo);

    // Fields
    service: Service;
    major_version: number;
    minor_version: number;
}

export class IndicationDmsEventReportOutput {
    static $gtype: GObject.GType<IndicationDmsEventReportOutput>;

    constructor(copy: IndicationDmsEventReportOutput);

    // Members
    get_activation_state(): [boolean, DmsActivationState];

    get_operating_mode(): [boolean, DmsOperatingMode];

    get_pin1_status(): [boolean, DmsUimPinStatus, number, number];

    get_pin2_status(): [boolean, DmsUimPinStatus, number, number];

    get_power_state(): [boolean, number, number];

    get_prl_init_notification(): [boolean, boolean];

    get_uim_state(): [boolean, DmsUimState];

    get_wireless_disable_state(): [boolean, boolean];

    ref(): IndicationDmsEventReportOutput;

    unref(): void;
}

export class IndicationLocDeleteAssistanceDataOutput {
    static $gtype: GObject.GType<IndicationLocDeleteAssistanceDataOutput>;

    constructor(copy: IndicationLocDeleteAssistanceDataOutput);

    // Members
    get_indication_status(): [boolean, LocIndicationStatus];

    ref(): IndicationLocDeleteAssistanceDataOutput;

    unref(): void;
}

export class IndicationLocEngineStateOutput {
    static $gtype: GObject.GType<IndicationLocEngineStateOutput>;

    constructor(copy: IndicationLocEngineStateOutput);

    // Members
    get_engine_state(): [boolean, LocEngineState];

    ref(): IndicationLocEngineStateOutput;

    unref(): void;
}

export class IndicationLocFixRecurrenceTypeOutput {
    static $gtype: GObject.GType<IndicationLocFixRecurrenceTypeOutput>;

    constructor(copy: IndicationLocFixRecurrenceTypeOutput);

    // Members
    get_fix_recurrence_type(): [boolean, LocFixRecurrenceType];

    ref(): IndicationLocFixRecurrenceTypeOutput;

    unref(): void;
}

export class IndicationLocGetNmeaTypesOutput {
    static $gtype: GObject.GType<IndicationLocGetNmeaTypesOutput>;

    constructor(copy: IndicationLocGetNmeaTypesOutput);

    // Members
    get_indication_status(): [boolean, LocIndicationStatus];

    get_nmea_types(): [boolean, LocNmeaType];

    ref(): IndicationLocGetNmeaTypesOutput;

    unref(): void;
}

export class IndicationLocGetOperationModeOutput {
    static $gtype: GObject.GType<IndicationLocGetOperationModeOutput>;

    constructor(copy: IndicationLocGetOperationModeOutput);

    // Members
    get_indication_status(): [boolean, LocIndicationStatus];

    get_operation_mode(): [boolean, LocOperationMode];

    ref(): IndicationLocGetOperationModeOutput;

    unref(): void;
}

export class IndicationLocGetPredictedOrbitsDataSourceOutput {
    static $gtype: GObject.GType<IndicationLocGetPredictedOrbitsDataSourceOutput>;

    constructor(copy: IndicationLocGetPredictedOrbitsDataSourceOutput);

    // Members
    get_allowed_sizes(): [boolean, number, number];

    get_indication_status(): [boolean, LocIndicationStatus];

    get_server_list(): [boolean, string[]];

    ref(): IndicationLocGetPredictedOrbitsDataSourceOutput;

    unref(): void;
}

export class IndicationLocGetServerOutput {
    static $gtype: GObject.GType<IndicationLocGetServerOutput>;

    constructor(copy: IndicationLocGetServerOutput);

    // Members
    get_indication_status(): [boolean, LocIndicationStatus];

    get_ipv4(): [boolean, number, number];

    get_ipv6(): [boolean, number[], number];

    get_server_type(): [boolean, LocServerType];

    get_url(): [boolean, string];

    ref(): IndicationLocGetServerOutput;

    unref(): void;
}

export class IndicationLocGnssSvInfoOutput {
    static $gtype: GObject.GType<IndicationLocGnssSvInfoOutput>;

    constructor(copy: IndicationLocGnssSvInfoOutput);

    // Members
    get_altitude_assumed(): [boolean, boolean];

    get_list(): [boolean, IndicationLocGnssSvInfoOutputListElement[]];

    ref(): IndicationLocGnssSvInfoOutput;

    unref(): void;
}

export class IndicationLocGnssSvInfoOutputListElement {
    static $gtype: GObject.GType<IndicationLocGnssSvInfoOutputListElement>;

    constructor(copy: IndicationLocGnssSvInfoOutputListElement);

    // Fields
    valid_information: LocSatelliteValidInformation;
    system: LocSystem;
    gnss_satellite_id: number;
    health_status: LocHealthStatus;
    satellite_status: LocSatelliteStatus;
    navigation_data: LocNavigationData;
    elevation_degrees: number;
    azimuth_degrees: number;
    signal_to_noise_ratio_bhz: number;
}

export class IndicationLocInjectPredictedOrbitsDataOutput {
    static $gtype: GObject.GType<IndicationLocInjectPredictedOrbitsDataOutput>;

    constructor(copy: IndicationLocInjectPredictedOrbitsDataOutput);

    // Members
    get_indication_status(): [boolean, LocIndicationStatus];

    get_part_number(): [boolean, number];

    ref(): IndicationLocInjectPredictedOrbitsDataOutput;

    unref(): void;
}

export class IndicationLocInjectXtraDataOutput {
    static $gtype: GObject.GType<IndicationLocInjectXtraDataOutput>;

    constructor(copy: IndicationLocInjectXtraDataOutput);

    // Members
    get_indication_status(): [boolean, LocIndicationStatus];

    get_part_number(): [boolean, number];

    ref(): IndicationLocInjectXtraDataOutput;

    unref(): void;
}

export class IndicationLocNmeaOutput {
    static $gtype: GObject.GType<IndicationLocNmeaOutput>;

    constructor(copy: IndicationLocNmeaOutput);

    // Members
    get_nmea_string(): [boolean, string];

    ref(): IndicationLocNmeaOutput;

    unref(): void;
}

export class IndicationLocPositionReportOutput {
    static $gtype: GObject.GType<IndicationLocPositionReportOutput>;

    constructor(copy: IndicationLocPositionReportOutput);

    // Members
    get_altitude_assumed(): [boolean, boolean];

    get_altitude_from_ellipsoid(): [boolean, number];

    get_altitude_from_sealevel(): [boolean, number];

    get_dilution_of_precision(): [boolean, IndicationLocPositionReportOutputDilutionOfPrecision];

    get_gps_time(): [boolean, IndicationLocPositionReportOutputGpsTime];

    get_heading(): [boolean, number];

    get_heading_uncertainty(): [boolean, number];

    get_horizontal_confidence(): [boolean, number];

    get_horizontal_reliability(): [boolean, LocReliability];

    get_horizontal_speed(): [boolean, number];

    get_horizontal_uncertainty_circular(): [boolean, number];

    get_horizontal_uncertainty_elliptical_azimuth(): [boolean, number];

    get_horizontal_uncertainty_elliptical_major(): [boolean, number];

    get_horizontal_uncertainty_elliptical_minor(): [boolean, number];

    get_latitude(): [boolean, number];

    get_leap_seconds(): [boolean, number];

    get_longitude(): [boolean, number];

    get_magnetic_deviation(): [boolean, number];

    get_satellites_used(): [boolean, number[]];

    get_sensor_data_usage(): [boolean, LocSensorDataUsage];

    get_session_fix_count(): [boolean, number];

    get_session_id(): [boolean, number];

    get_session_status(): [boolean, LocSessionStatus];

    get_speed_uncertainty(): [boolean, number];

    get_technology_used(): [boolean, LocTechnologyUsed];

    get_time_source(): [boolean, LocTimeSource];

    get_time_uncertainty(): [boolean, number];

    get_utc_timestamp(): [boolean, number];

    get_vertical_confidence(): [boolean, number];

    get_vertical_reliability(): [boolean, number];

    get_vertical_speed(): [boolean, number];

    get_vertical_uncertainty(): [boolean, number];

    ref(): IndicationLocPositionReportOutput;

    unref(): void;
}

export class IndicationLocPositionReportOutputDilutionOfPrecision {
    static $gtype: GObject.GType<IndicationLocPositionReportOutputDilutionOfPrecision>;

    constructor(
        properties?: Partial<{
            position_dilution_of_precision?: number;
            horizontal_dilution_of_precision?: number;
            vertical_dilution_of_precision?: number;
        }>
    );
    constructor(copy: IndicationLocPositionReportOutputDilutionOfPrecision);

    // Fields
    position_dilution_of_precision: number;
    horizontal_dilution_of_precision: number;
    vertical_dilution_of_precision: number;
}

export class IndicationLocPositionReportOutputGpsTime {
    static $gtype: GObject.GType<IndicationLocPositionReportOutputGpsTime>;

    constructor(
        properties?: Partial<{
            gps_weeks?: number;
            gps_time_of_week_milliseconds?: number;
        }>
    );
    constructor(copy: IndicationLocPositionReportOutputGpsTime);

    // Fields
    gps_weeks: number;
    gps_time_of_week_milliseconds: number;
}

export class IndicationLocSetNmeaTypesOutput {
    static $gtype: GObject.GType<IndicationLocSetNmeaTypesOutput>;

    constructor(copy: IndicationLocSetNmeaTypesOutput);

    // Members
    get_indication_status(): [boolean, LocIndicationStatus];

    ref(): IndicationLocSetNmeaTypesOutput;

    unref(): void;
}

export class IndicationLocSetOperationModeOutput {
    static $gtype: GObject.GType<IndicationLocSetOperationModeOutput>;

    constructor(copy: IndicationLocSetOperationModeOutput);

    // Members
    get_indication_status(): [boolean, LocIndicationStatus];

    ref(): IndicationLocSetOperationModeOutput;

    unref(): void;
}

export class IndicationLocSetServerOutput {
    static $gtype: GObject.GType<IndicationLocSetServerOutput>;

    constructor(copy: IndicationLocSetServerOutput);

    // Members
    get_indication_status(): [boolean, LocIndicationStatus];

    ref(): IndicationLocSetServerOutput;

    unref(): void;
}

export class IndicationNasEventReportOutput {
    static $gtype: GObject.GType<IndicationNasEventReportOutput>;

    constructor(copy: IndicationNasEventReportOutput);

    // Members
    get_ecio(): [boolean, number, NasRadioInterface];

    get_error_rate(): [boolean, number, NasRadioInterface];

    get_io(): [boolean, number];

    get_lte_rsrp(): [boolean, number];

    get_lte_snr(): [boolean, number];

    get_registration_reject_reason(): [boolean, NasNetworkServiceDomain, number];

    get_rf_band_information(): [boolean, IndicationNasEventReportOutputRfBandInformationElement[]];

    get_rsrq(): [boolean, number, NasRadioInterface];

    get_rssi(): [boolean, number, NasRadioInterface];

    get_signal_strength(): [boolean, number, NasRadioInterface];

    get_sinr(): [boolean, NasEvdoSinrLevel];

    ref(): IndicationNasEventReportOutput;

    unref(): void;
}

export class IndicationNasEventReportOutputRfBandInformationElement {
    static $gtype: GObject.GType<IndicationNasEventReportOutputRfBandInformationElement>;

    constructor(copy: IndicationNasEventReportOutputRfBandInformationElement);

    // Fields
    radio_interface: NasRadioInterface;
    active_band_class: NasActiveBand;
    active_channel: number;
}

export class IndicationNasNetworkTimeOutput {
    static $gtype: GObject.GType<IndicationNasNetworkTimeOutput>;

    constructor(copy: IndicationNasNetworkTimeOutput);

    // Members
    get_daylight_savings_adjustment(): [boolean, NasDaylightSavingsAdjustment];

    get_radio_interface(): [boolean, NasRadioInterface];

    get_timezone_offset(): [boolean, number];

    get_universal_time(): [boolean, number, number, number, number, number, number, NasDayOfWeek];

    ref(): IndicationNasNetworkTimeOutput;

    unref(): void;
}

export class IndicationNasOperatorNameOutput {
    static $gtype: GObject.GType<IndicationNasOperatorNameOutput>;

    constructor(copy: IndicationNasOperatorNameOutput);

    // Members
    get_nitz_information(): [
        boolean,
        NasPlmnEncodingScheme,
        NasPlmnNameCountryInitials,
        NasPlmnNameSpareBits,
        NasPlmnNameSpareBits,
        Uint8Array,
        Uint8Array
    ];

    get_operator_nitz_information(
        value_operator_nitz_information_name_encoding: NasPlmnEncodingScheme,
        value_operator_nitz_information_short_country_initials: NasPlmnNameCountryInitials,
        value_operator_nitz_information_long_name_spare_bits: NasPlmnNameSpareBits,
        value_operator_nitz_information_short_name_spare_bits: NasPlmnNameSpareBits,
        value_operator_nitz_information_long_name: string,
        value_operator_nitz_information_short_name: string
    ): boolean;

    get_operator_plmn_list(): [boolean, IndicationNasOperatorNameOutputOperatorPlmnListElement[]];

    get_operator_plmn_name(): [boolean, IndicationNasOperatorNameOutputOperatorPlmnNameElement[]];

    get_operator_string_name(): [boolean, string];

    get_service_provider_name(): [boolean, NasNetworkNameDisplayCondition, string];

    ref(): IndicationNasOperatorNameOutput;

    unref(): void;
}

export class IndicationNasOperatorNameOutputOperatorPlmnListElement {
    static $gtype: GObject.GType<IndicationNasOperatorNameOutputOperatorPlmnListElement>;

    constructor(
        properties?: Partial<{
            mcc?: string;
            mnc?: string;
            lac1?: number;
            lac2?: number;
            plmn_name_record_identifier?: number;
        }>
    );
    constructor(copy: IndicationNasOperatorNameOutputOperatorPlmnListElement);

    // Fields
    mcc: string;
    mnc: string;
    lac1: number;
    lac2: number;
    plmn_name_record_identifier: number;
}

export class IndicationNasOperatorNameOutputOperatorPlmnNameElement {
    static $gtype: GObject.GType<IndicationNasOperatorNameOutputOperatorPlmnNameElement>;

    constructor(copy: IndicationNasOperatorNameOutputOperatorPlmnNameElement);

    // Fields
    name_encoding: NasPlmnEncodingScheme;
    short_country_initials: NasPlmnNameCountryInitials;
    long_name_spare_bits: NasPlmnNameSpareBits;
    short_name_spare_bits: NasPlmnNameSpareBits;
    long_name: any[];
    short_name: any[];
}

export class IndicationNasServingSystemOutput {
    static $gtype: GObject.GType<IndicationNasServingSystemOutput>;

    constructor(copy: IndicationNasServingSystemOutput);

    // Members
    get_call_barring_status(): [boolean, NasCallBarringStatus, NasCallBarringStatus];

    get_cdma_base_station_info(): [boolean, number, number, number];

    get_cdma_p_rev(): [boolean, number];

    get_cdma_system_id(): [boolean, number, number];

    get_cdma_system_info(): [boolean, number, number];

    get_cid_3gpp(): [boolean, number];

    get_concurrent_service_info_3gpp2(): [boolean, boolean];

    get_current_plmn(): [boolean, number, number, string];

    get_data_service_capability(): [boolean, NasDataCapability[]];

    get_daylight_saving_time_adjustment_3gpp(): [boolean, number];

    get_default_roaming_indicator(): [boolean, NasRoamingIndicatorStatus];

    get_detailed_service_status(): [
        boolean,
        NasServiceStatus,
        NasNetworkServiceDomain,
        NasServiceStatus,
        boolean,
        boolean
    ];

    get_dtm_support(): [boolean, boolean];

    get_hdr_personality(): [boolean, NasHdrPersonality];

    get_lac_3gpp(): [boolean, number];

    get_lte_tac(): [boolean, number];

    get_mnc_pcs_digit_include_status(): [boolean, number, number, boolean];

    get_network_name_source(): [boolean, NasNetworkNameSource];

    get_plmn_name_flag_3gpp(): [boolean, boolean];

    get_plmn_not_changed_indication(): [boolean, boolean];

    get_prl_indicator_3gpp2(): [boolean, boolean];

    get_roaming_indicator(): [boolean, NasRoamingIndicatorStatus];

    get_roaming_indicator_list(): [boolean, IndicationNasServingSystemOutputRoamingIndicatorListElement[]];

    get_serving_system(): [
        boolean,
        NasRegistrationState,
        NasAttachState,
        NasAttachState,
        NasNetworkType,
        NasRadioInterface[]
    ];

    get_time_zone_3gpp(): [boolean, number];

    get_time_zone_3gpp2(): [boolean, number, number, boolean];

    get_umts_primary_scrambling_code(): [boolean, number];

    get_universal_time_and_local_time_zone_3gpp(): [boolean, number, number, number, number, number, number, number];

    ref(): IndicationNasServingSystemOutput;

    unref(): void;
}

export class IndicationNasServingSystemOutputRoamingIndicatorListElement {
    static $gtype: GObject.GType<IndicationNasServingSystemOutputRoamingIndicatorListElement>;

    constructor(copy: IndicationNasServingSystemOutputRoamingIndicatorListElement);

    // Fields
    radio_interface: NasRadioInterface;
    roaming_indicator: NasRoamingIndicatorStatus;
}

export class IndicationNasSignalInfoOutput {
    static $gtype: GObject.GType<IndicationNasSignalInfoOutput>;

    constructor(copy: IndicationNasSignalInfoOutput);

    // Members
    get_cdma_signal_strength(): [boolean, number, number];

    get_gsm_signal_strength(): [boolean, number];

    get_hdr_signal_strength(): [boolean, number, number, NasEvdoSinrLevel, number];

    get_lte_signal_strength(): [boolean, number, number, number, number];

    get_tdma_signal_strength(): [boolean, number];

    get_wcdma_signal_strength(): [boolean, number, number];

    ref(): IndicationNasSignalInfoOutput;

    unref(): void;
}

export class IndicationNasSystemInfoOutput {
    static $gtype: GObject.GType<IndicationNasSystemInfoOutput>;

    constructor(copy: IndicationNasSystemInfoOutput);

    // Members
    get_additional_cdma_system_info(): [boolean, number, number];

    get_additional_gsm_system_info(): [boolean, number, NasCellBroadcastCapability];

    get_additional_hdr_system_info(): [boolean, number];

    get_additional_lte_system_info(): [boolean, number];

    get_additional_wcdma_system_info(): [boolean, number, NasCellBroadcastCapability];

    get_cdma_service_status(): [boolean, NasServiceStatus, boolean];

    get_cdma_system_info(): [
        boolean,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasRoamingStatus,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        number,
        boolean,
        number,
        boolean,
        boolean,
        boolean,
        number,
        number,
        boolean,
        number,
        number,
        number,
        boolean,
        number,
        boolean,
        string,
        string
    ];

    get_gsm_call_barring_status(): [boolean, NasCallBarringStatus, NasCallBarringStatus];

    get_gsm_cipher_domain(): [boolean, NasNetworkServiceDomain];

    get_gsm_service_status(): [boolean, NasServiceStatus, NasServiceStatus, boolean];

    get_gsm_system_info(): [
        boolean,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasRoamingStatus,
        boolean,
        boolean,
        boolean,
        number,
        boolean,
        number,
        boolean,
        NasNetworkServiceDomain,
        number,
        boolean,
        string,
        string,
        boolean,
        boolean,
        boolean,
        boolean
    ];

    get_hdr_service_status(): [boolean, NasServiceStatus, boolean];

    get_hdr_system_info(): [
        boolean,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasRoamingStatus,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        NasHdrPersonality,
        boolean,
        NasHdrProtocolRevision,
        boolean,
        string
    ];

    get_lte_embms_coverage_info_support(): [boolean, boolean];

    get_lte_service_status(): [boolean, NasServiceStatus, NasServiceStatus, boolean];

    get_lte_system_info(): [
        boolean,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasRoamingStatus,
        boolean,
        boolean,
        boolean,
        number,
        boolean,
        number,
        boolean,
        NasNetworkServiceDomain,
        number,
        boolean,
        string,
        string,
        boolean,
        number
    ];

    get_lte_voice_support(): [boolean, boolean];

    get_plmn_not_changed_indication(): [boolean, boolean];

    get_sim_reject_info(): [boolean, NasSimRejectState];

    get_td_scdma_service_status(): [boolean, NasServiceStatus, NasServiceStatus, boolean];

    get_td_scma_system_info(): [
        boolean,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasRoamingStatus,
        boolean,
        boolean,
        boolean,
        number,
        boolean,
        number,
        boolean,
        NasNetworkServiceDomain,
        number,
        boolean,
        string,
        string,
        boolean,
        NasWcdmaHsService,
        boolean,
        NasWcdmaHsService,
        boolean,
        number,
        boolean,
        NasCellBroadcastCapability,
        boolean,
        NasCallBarringStatus,
        boolean,
        NasCallBarringStatus,
        boolean,
        NasNetworkServiceDomain
    ];

    get_wcdma_call_barring_status(): [boolean, NasCallBarringStatus, NasCallBarringStatus];

    get_wcdma_cipher_domain(): [boolean, NasNetworkServiceDomain];

    get_wcdma_service_status(): [boolean, NasServiceStatus, NasServiceStatus, boolean];

    get_wcdma_system_info(): [
        boolean,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasRoamingStatus,
        boolean,
        boolean,
        boolean,
        number,
        boolean,
        number,
        boolean,
        NasNetworkServiceDomain,
        number,
        boolean,
        string,
        string,
        boolean,
        NasWcdmaHsService,
        boolean,
        NasWcdmaHsService,
        boolean,
        number
    ];

    ref(): IndicationNasSystemInfoOutput;

    unref(): void;
}

export class IndicationOmaEventReportOutput {
    static $gtype: GObject.GType<IndicationOmaEventReportOutput>;

    constructor(copy: IndicationOmaEventReportOutput);

    // Members
    get_network_initiated_alert(): [boolean, OmaSessionType, number];

    get_session_fail_reason(): [boolean, OmaSessionFailedReason];

    get_session_state(): [boolean, OmaSessionState];

    ref(): IndicationOmaEventReportOutput;

    unref(): void;
}

export class IndicationPdcActivateConfigOutput {
    static $gtype: GObject.GType<IndicationPdcActivateConfigOutput>;

    constructor(copy: IndicationPdcActivateConfigOutput);

    // Members
    get_indication_result(): [boolean, number];

    get_token(): [boolean, number];

    ref(): IndicationPdcActivateConfigOutput;

    unref(): void;
}

export class IndicationPdcDeactivateConfigOutput {
    static $gtype: GObject.GType<IndicationPdcDeactivateConfigOutput>;

    constructor(copy: IndicationPdcDeactivateConfigOutput);

    // Members
    get_indication_result(): [boolean, number];

    get_token(): [boolean, number];

    ref(): IndicationPdcDeactivateConfigOutput;

    unref(): void;
}

export class IndicationPdcGetConfigInfoOutput {
    static $gtype: GObject.GType<IndicationPdcGetConfigInfoOutput>;

    constructor(copy: IndicationPdcGetConfigInfoOutput);

    // Members
    get_description(): [boolean, string];

    get_indication_result(): [boolean, number];

    get_token(): [boolean, number];

    get_total_size(): [boolean, number];

    get_version(): [boolean, number];

    ref(): IndicationPdcGetConfigInfoOutput;

    unref(): void;
}

export class IndicationPdcGetSelectedConfigOutput {
    static $gtype: GObject.GType<IndicationPdcGetSelectedConfigOutput>;

    constructor(copy: IndicationPdcGetSelectedConfigOutput);

    // Members
    get_active_id(): [boolean, Uint8Array];

    get_indication_result(): [boolean, number];

    get_pending_id(): [boolean, Uint8Array];

    get_token(): [boolean, number];

    ref(): IndicationPdcGetSelectedConfigOutput;

    unref(): void;
}

export class IndicationPdcListConfigsOutput {
    static $gtype: GObject.GType<IndicationPdcListConfigsOutput>;

    constructor(copy: IndicationPdcListConfigsOutput);

    // Members
    get_configs(): [boolean, IndicationPdcListConfigsOutputConfigsElement[]];

    get_indication_result(): [boolean, number];

    get_token(): [boolean, number];

    ref(): IndicationPdcListConfigsOutput;

    unref(): void;
}

export class IndicationPdcListConfigsOutputConfigsElement {
    static $gtype: GObject.GType<IndicationPdcListConfigsOutputConfigsElement>;

    constructor(copy: IndicationPdcListConfigsOutputConfigsElement);

    // Fields
    config_type: PdcConfigurationType;
    id: any[];
}

export class IndicationPdcLoadConfigOutput {
    static $gtype: GObject.GType<IndicationPdcLoadConfigOutput>;

    constructor(copy: IndicationPdcLoadConfigOutput);

    // Members
    get_frame_reset(): [boolean, boolean];

    get_indication_result(): [boolean, number];

    get_received(): [boolean, number];

    get_remaining_size(): [boolean, number];

    get_token(): [boolean, number];

    ref(): IndicationPdcLoadConfigOutput;

    unref(): void;
}

export class IndicationPdcSetSelectedConfigOutput {
    static $gtype: GObject.GType<IndicationPdcSetSelectedConfigOutput>;

    constructor(copy: IndicationPdcSetSelectedConfigOutput);

    // Members
    get_indication_result(): [boolean, number];

    get_token(): [boolean, number];

    ref(): IndicationPdcSetSelectedConfigOutput;

    unref(): void;
}

export class IndicationPdsEventReportOutput {
    static $gtype: GObject.GType<IndicationPdsEventReportOutput>;

    constructor(copy: IndicationPdsEventReportOutput);

    // Members
    get_extended_nmea_position(): [boolean, PdsOperationMode, string];

    get_nmea_position(): [boolean, string];

    get_position_session_status(): [boolean, PdsPositionSessionStatus];

    ref(): IndicationPdsEventReportOutput;

    unref(): void;
}

export class IndicationQosFlowStatusOutput {
    static $gtype: GObject.GType<IndicationQosFlowStatusOutput>;

    constructor(copy: IndicationQosFlowStatusOutput);

    // Members
    get_value(): [boolean, number, QosStatus, QosEvent];

    ref(): IndicationQosFlowStatusOutput;

    unref(): void;
}

export class IndicationQosNetworkStatusOutput {
    static $gtype: GObject.GType<IndicationQosNetworkStatusOutput>;

    constructor(copy: IndicationQosNetworkStatusOutput);

    // Members
    get_qos_supported(): [boolean, boolean];

    ref(): IndicationQosNetworkStatusOutput;

    unref(): void;
}

export class IndicationUimCardStatusOutput {
    static $gtype: GObject.GType<IndicationUimCardStatusOutput>;

    constructor(copy: IndicationUimCardStatusOutput);

    // Members
    get_card_status(): [boolean, number, number, number, number, IndicationUimCardStatusOutputCardStatusCardsElement[]];

    ref(): IndicationUimCardStatusOutput;

    unref(): void;
}

export class IndicationUimCardStatusOutputCardStatusCardsElement {
    static $gtype: GObject.GType<IndicationUimCardStatusOutputCardStatusCardsElement>;

    constructor(copy: IndicationUimCardStatusOutputCardStatusCardsElement);

    // Fields
    card_state: UimCardState;
    upin_state: UimPinState;
    upin_retries: number;
    upuk_retries: number;
    error_code: UimCardError;
    applications: any[];
}

export class IndicationUimCardStatusOutputCardStatusCardsElementApplicationsElement {
    static $gtype: GObject.GType<IndicationUimCardStatusOutputCardStatusCardsElementApplicationsElement>;

    constructor(copy: IndicationUimCardStatusOutputCardStatusCardsElementApplicationsElement);

    // Fields
    type: UimCardApplicationType;
    state: UimCardApplicationState;
    personalization_state: UimCardApplicationPersonalizationState;
    personalization_feature: UimCardApplicationPersonalizationFeature;
    personalization_retries: number;
    personalization_unblock_retries: number;
    application_identifier_value: any[];
    upin_replaces_pin1: boolean;
    pin1_state: UimPinState;
    pin1_retries: number;
    puk1_retries: number;
    pin2_state: UimPinState;
    pin2_retries: number;
    puk2_retries: number;
}

export class IndicationUimSlotStatusOutput {
    static $gtype: GObject.GType<IndicationUimSlotStatusOutput>;

    constructor(copy: IndicationUimSlotStatusOutput);

    // Members
    get_physical_slot_information(): [boolean, PhysicalSlotInformationSlot[]];

    get_physical_slot_status(): [boolean, PhysicalSlotStatusSlot[]];

    get_slot_eid_information(): [boolean, any[][]];

    ref(): IndicationUimSlotStatusOutput;

    unref(): void;
}

export class IndicationVoiceAllCallStatusOutput {
    static $gtype: GObject.GType<IndicationVoiceAllCallStatusOutput>;

    constructor(copy: IndicationVoiceAllCallStatusOutput);

    // Members
    get_call_information(): [boolean, IndicationVoiceAllCallStatusOutputCallInformationCall[]];

    get_remote_party_number(): [boolean, IndicationVoiceAllCallStatusOutputRemotePartyNumberCall[]];

    ref(): IndicationVoiceAllCallStatusOutput;

    unref(): void;
}

export class IndicationVoiceAllCallStatusOutputCallInformationCall {
    static $gtype: GObject.GType<IndicationVoiceAllCallStatusOutputCallInformationCall>;

    constructor(copy: IndicationVoiceAllCallStatusOutputCallInformationCall);

    // Fields
    id: number;
    state: VoiceCallState;
    type: VoiceCallType;
    direction: VoiceCallDirection;
    mode: VoiceCallMode;
    multipart_indicator: boolean;
    als: VoiceAls;
}

export class IndicationVoiceAllCallStatusOutputRemotePartyNumberCall {
    static $gtype: GObject.GType<IndicationVoiceAllCallStatusOutputRemotePartyNumberCall>;

    constructor(copy: IndicationVoiceAllCallStatusOutputRemotePartyNumberCall);

    // Fields
    id: number;
    presentation_indicator: VoicePresentation;
    type: string;
}

export class IndicationVoiceOriginateUssdNoWaitOutput {
    static $gtype: GObject.GType<IndicationVoiceOriginateUssdNoWaitOutput>;

    constructor(copy: IndicationVoiceOriginateUssdNoWaitOutput);

    // Members
    get_alpha_identifier(): [boolean, VoiceAlphaDataCodingScheme, Uint8Array];

    get_error_code(): [boolean, number];

    get_failure_cause(): [boolean, VoiceCallEndReason];

    get_uss_data(): [boolean, VoiceUssDataCodingScheme, Uint8Array];

    get_uss_data_utf16(): [boolean, number[]];

    ref(): IndicationVoiceOriginateUssdNoWaitOutput;

    unref(): void;
}

export class IndicationVoiceUssdOutput {
    static $gtype: GObject.GType<IndicationVoiceUssdOutput>;

    constructor(copy: IndicationVoiceUssdOutput);

    // Members
    get_user_action(): [boolean, VoiceUserAction];

    get_uss_data(): [boolean, VoiceUssDataCodingScheme, Uint8Array];

    get_uss_data_utf16(): [boolean, number[]];

    ref(): IndicationVoiceUssdOutput;

    unref(): void;
}

export class IndicationWdsEventReportOutput {
    static $gtype: GObject.GType<IndicationWdsEventReportOutput>;

    constructor(copy: IndicationWdsEventReportOutput);

    // Members
    get_channel_rates(): [boolean, number, number];

    get_current_data_bearer_technology(): [boolean, WdsNetworkType, number, number];

    get_data_bearer_technology(): [boolean, WdsDataBearerTechnology];

    get_data_call_address_family(): [boolean, WdsIpFamily];

    get_data_call_status(): [boolean, WdsDataCallStatus];

    get_data_call_type(): [boolean, WdsDataCallType, WdsTetheredCallType];

    get_data_systems(): [boolean, WdsDataSystemNetworkType, IndicationWdsEventReportOutputDataSystemsNetworksNetwork[]];

    get_dormancy_status(): [boolean, WdsDormancyStatus];

    get_evdo_page_monitor_period_change(): [boolean, number, boolean];

    get_extended_data_bearer_technology(): [
        boolean,
        WdsDataSystemNetworkType,
        WdsRadioAccessTechnology,
        WdsExtendedDataBearerTechnology3gpp,
        WdsExtendedDataBearerTechnology3gpp2
    ];

    get_mip_status(): [boolean, boolean];

    get_pdn_filters_removed(): [boolean, number[]];

    get_preferred_data_system(): [boolean, WdsDataSystem];

    get_rx_bytes_ok(): [boolean, number];

    get_rx_overflows(): [boolean, number];

    get_rx_packets_dropped(): [boolean, number];

    get_rx_packets_error(): [boolean, number];

    get_rx_packets_ok(): [boolean, number];

    get_tx_bytes_ok(): [boolean, number];

    get_tx_overflows(): [boolean, number];

    get_tx_packets_dropped(): [boolean, number];

    get_tx_packets_error(): [boolean, number];

    get_tx_packets_ok(): [boolean, number];

    get_uplink_flow_control_enabled(): [boolean, boolean];

    ref(): IndicationWdsEventReportOutput;

    unref(): void;
}

export class IndicationWdsEventReportOutputDataSystemsNetworksNetwork {
    static $gtype: GObject.GType<IndicationWdsEventReportOutputDataSystemsNetworksNetwork>;

    constructor(copy: IndicationWdsEventReportOutputDataSystemsNetworksNetwork);

    // Fields
    network_type: WdsDataSystemNetworkType;
    rat_mask: number;
    so_mask: number;
}

export class IndicationWdsPacketServiceStatusOutput {
    static $gtype: GObject.GType<IndicationWdsPacketServiceStatusOutput>;

    constructor(copy: IndicationWdsPacketServiceStatusOutput);

    // Members
    get_call_end_reason(): [boolean, WdsCallEndReason];

    get_connection_status(): [boolean, WdsConnectionStatus, boolean];

    get_extended_technology_preference(): [boolean, WdsExtendedTechnologyPreference];

    get_ip_family(): [boolean, WdsIpFamily];

    get_verbose_call_end_reason(): [boolean, WdsVerboseCallEndReasonType, number];

    ref(): IndicationWdsPacketServiceStatusOutput;

    unref(): void;
}

export class IndicationWmsEventReportOutput {
    static $gtype: GObject.GType<IndicationWmsEventReportOutput>;

    constructor(copy: IndicationWmsEventReportOutput);

    // Members
    get_etws_message(): [boolean, WmsNotificationType, Uint8Array];

    get_etws_plmn_information(): [boolean, number, number];

    get_message_mode(): [boolean, WmsMessageMode];

    get_mt_message(): [boolean, WmsStorageType, number];

    get_sms_on_ims(): [boolean, boolean];

    get_smsc_address(): [boolean, string];

    get_transfer_route_mt_message(): [boolean, WmsAckIndicator, number, WmsMessageFormat, Uint8Array];

    ref(): IndicationWmsEventReportOutput;

    unref(): void;
}

export class IndicationWmsSmscAddressOutput {
    static $gtype: GObject.GType<IndicationWmsSmscAddressOutput>;

    constructor(copy: IndicationWmsSmscAddressOutput);

    // Members
    get_address(): [boolean, string, string];

    ref(): IndicationWmsSmscAddressOutput;

    unref(): void;
}

export class MessageContext {
    static $gtype: GObject.GType<MessageContext>;

    constructor();
    constructor(copy: MessageContext);

    // Constructors
    static ["new"](): MessageContext;

    // Members
    get_vendor_id(): number;

    ref(): MessageContext;

    set_vendor_id(vendor_id: number): void;

    unref(): void;
}

export class MessageCtlAllocateCidInput {
    static $gtype: GObject.GType<MessageCtlAllocateCidInput>;

    constructor();
    constructor(copy: MessageCtlAllocateCidInput);

    // Constructors
    static ["new"](): MessageCtlAllocateCidInput;

    // Members
    get_service(): [boolean, Service];

    ref(): MessageCtlAllocateCidInput;

    set_service(value_service: Service): boolean;

    unref(): void;
}

export class MessageCtlAllocateCidOutput {
    static $gtype: GObject.GType<MessageCtlAllocateCidOutput>;

    constructor(copy: MessageCtlAllocateCidOutput);

    // Members
    get_allocation_info(): [boolean, Service, number];

    get_result(): boolean;

    ref(): MessageCtlAllocateCidOutput;

    unref(): void;
}

export class MessageCtlGetVersionInfoOutput {
    static $gtype: GObject.GType<MessageCtlGetVersionInfoOutput>;

    constructor(copy: MessageCtlGetVersionInfoOutput);

    // Members
    get_result(): boolean;

    get_service_list(): [boolean, MessageCtlGetVersionInfoOutputServiceListService[]];

    ref(): MessageCtlGetVersionInfoOutput;

    unref(): void;
}

export class MessageCtlGetVersionInfoOutputServiceListService {
    static $gtype: GObject.GType<MessageCtlGetVersionInfoOutputServiceListService>;

    constructor(copy: MessageCtlGetVersionInfoOutputServiceListService);

    // Fields
    service: Service;
    major_version: number;
    minor_version: number;
}

export class MessageCtlInternalProxyOpenInput {
    static $gtype: GObject.GType<MessageCtlInternalProxyOpenInput>;

    constructor();
    constructor(copy: MessageCtlInternalProxyOpenInput);

    // Constructors
    static ["new"](): MessageCtlInternalProxyOpenInput;

    // Members
    get_device_path(): [boolean, string];

    ref(): MessageCtlInternalProxyOpenInput;

    set_device_path(value_device_path: string): boolean;

    unref(): void;
}

export class MessageCtlInternalProxyOpenOutput {
    static $gtype: GObject.GType<MessageCtlInternalProxyOpenOutput>;

    constructor(copy: MessageCtlInternalProxyOpenOutput);

    // Members
    get_result(): boolean;

    ref(): MessageCtlInternalProxyOpenOutput;

    unref(): void;
}

export class MessageCtlReleaseCidInput {
    static $gtype: GObject.GType<MessageCtlReleaseCidInput>;

    constructor();
    constructor(copy: MessageCtlReleaseCidInput);

    // Constructors
    static ["new"](): MessageCtlReleaseCidInput;

    // Members
    get_release_info(): [boolean, Service, number];

    ref(): MessageCtlReleaseCidInput;

    set_release_info(value_release_info_service: Service, value_release_info_cid: number): boolean;

    unref(): void;
}

export class MessageCtlReleaseCidOutput {
    static $gtype: GObject.GType<MessageCtlReleaseCidOutput>;

    constructor(copy: MessageCtlReleaseCidOutput);

    // Members
    get_release_info(): [boolean, Service, number];

    get_result(): boolean;

    ref(): MessageCtlReleaseCidOutput;

    unref(): void;
}

export class MessageCtlSetDataFormatInput {
    static $gtype: GObject.GType<MessageCtlSetDataFormatInput>;

    constructor();
    constructor(copy: MessageCtlSetDataFormatInput);

    // Constructors
    static ["new"](): MessageCtlSetDataFormatInput;

    // Members
    get_format(): [boolean, CtlDataFormat];

    get_protocol(): [boolean, CtlDataLinkProtocol];

    ref(): MessageCtlSetDataFormatInput;

    set_format(value_format: CtlDataFormat): boolean;

    set_protocol(value_protocol: CtlDataLinkProtocol): boolean;

    unref(): void;
}

export class MessageCtlSetDataFormatOutput {
    static $gtype: GObject.GType<MessageCtlSetDataFormatOutput>;

    constructor(copy: MessageCtlSetDataFormatOutput);

    // Members
    get_protocol(): [boolean, CtlDataLinkProtocol];

    get_result(): boolean;

    ref(): MessageCtlSetDataFormatOutput;

    unref(): void;
}

export class MessageCtlSetInstanceIdInput {
    static $gtype: GObject.GType<MessageCtlSetInstanceIdInput>;

    constructor();
    constructor(copy: MessageCtlSetInstanceIdInput);

    // Constructors
    static ["new"](): MessageCtlSetInstanceIdInput;

    // Members
    get_id(): [boolean, number];

    ref(): MessageCtlSetInstanceIdInput;

    set_id(value_id: number): boolean;

    unref(): void;
}

export class MessageCtlSetInstanceIdOutput {
    static $gtype: GObject.GType<MessageCtlSetInstanceIdOutput>;

    constructor(copy: MessageCtlSetInstanceIdOutput);

    // Members
    get_link_id(): [boolean, number];

    get_result(): boolean;

    ref(): MessageCtlSetInstanceIdOutput;

    unref(): void;
}

export class MessageCtlSyncOutput {
    static $gtype: GObject.GType<MessageCtlSyncOutput>;

    constructor(copy: MessageCtlSyncOutput);

    // Members
    get_result(): boolean;

    ref(): MessageCtlSyncOutput;

    unref(): void;
}

export class MessageDmsActivateAutomaticInput {
    static $gtype: GObject.GType<MessageDmsActivateAutomaticInput>;

    constructor();
    constructor(copy: MessageDmsActivateAutomaticInput);

    // Constructors
    static ["new"](): MessageDmsActivateAutomaticInput;

    // Members
    get_activation_code(): [boolean, string];

    ref(): MessageDmsActivateAutomaticInput;

    set_activation_code(value_activation_code: string): boolean;

    unref(): void;
}

export class MessageDmsActivateAutomaticOutput {
    static $gtype: GObject.GType<MessageDmsActivateAutomaticOutput>;

    constructor(copy: MessageDmsActivateAutomaticOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsActivateAutomaticOutput;

    unref(): void;
}

export class MessageDmsActivateManualInput {
    static $gtype: GObject.GType<MessageDmsActivateManualInput>;

    constructor();
    constructor(copy: MessageDmsActivateManualInput);

    // Constructors
    static ["new"](): MessageDmsActivateManualInput;

    // Members
    get_info(): [boolean, string, number, string, string];

    get_mn_aaa_key(): [boolean, string];

    get_mn_ha_key(): [boolean, string];

    get_prl(): [boolean, number, number, Uint8Array];

    ref(): MessageDmsActivateManualInput;

    set_info(
        value_info_service_programming_code: string,
        value_info_system_identification_number: number,
        value_info_mobile_directory_number: string,
        value_info_mobile_identification_number: string
    ): boolean;

    set_mn_aaa_key(value_mn_aaa_key: string): boolean;

    set_mn_ha_key(value_mn_ha_key: string): boolean;

    set_prl(
        value_prl_prl_total_length: number,
        value_prl_prl_segment_sequence: number,
        value_prl_prl_segment: Uint8Array | string
    ): boolean;

    unref(): void;
}

export class MessageDmsActivateManualOutput {
    static $gtype: GObject.GType<MessageDmsActivateManualOutput>;

    constructor(copy: MessageDmsActivateManualOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsActivateManualOutput;

    unref(): void;
}

export class MessageDmsDeleteStoredImageInput {
    static $gtype: GObject.GType<MessageDmsDeleteStoredImageInput>;

    constructor();
    constructor(copy: MessageDmsDeleteStoredImageInput);

    // Constructors
    static ["new"](): MessageDmsDeleteStoredImageInput;

    // Members
    get_image(): [boolean, MessageDmsDeleteStoredImageInputImage];

    ref(): MessageDmsDeleteStoredImageInput;

    set_image(value_image: MessageDmsDeleteStoredImageInputImage): boolean;

    unref(): void;
}

export class MessageDmsDeleteStoredImageInputImage {
    static $gtype: GObject.GType<MessageDmsDeleteStoredImageInputImage>;

    constructor(copy: MessageDmsDeleteStoredImageInputImage);

    // Fields
    type: DmsFirmwareImageType;
    unique_id: any[];
    build_id: string;
}

export class MessageDmsDeleteStoredImageOutput {
    static $gtype: GObject.GType<MessageDmsDeleteStoredImageOutput>;

    constructor(copy: MessageDmsDeleteStoredImageOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsDeleteStoredImageOutput;

    unref(): void;
}

export class MessageDmsFoxconnChangeDeviceModeInput {
    static $gtype: GObject.GType<MessageDmsFoxconnChangeDeviceModeInput>;

    constructor();
    constructor(copy: MessageDmsFoxconnChangeDeviceModeInput);

    // Constructors
    static ["new"](): MessageDmsFoxconnChangeDeviceModeInput;

    // Members
    get_mode(): [boolean, DmsFoxconnDeviceMode];

    ref(): MessageDmsFoxconnChangeDeviceModeInput;

    set_mode(value_mode: DmsFoxconnDeviceMode): boolean;

    unref(): void;
}

export class MessageDmsFoxconnChangeDeviceModeOutput {
    static $gtype: GObject.GType<MessageDmsFoxconnChangeDeviceModeOutput>;

    constructor(copy: MessageDmsFoxconnChangeDeviceModeOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsFoxconnChangeDeviceModeOutput;

    unref(): void;
}

export class MessageDmsFoxconnGetFirmwareVersionInput {
    static $gtype: GObject.GType<MessageDmsFoxconnGetFirmwareVersionInput>;

    constructor();
    constructor(copy: MessageDmsFoxconnGetFirmwareVersionInput);

    // Constructors
    static ["new"](): MessageDmsFoxconnGetFirmwareVersionInput;

    // Members
    get_version_type(): [boolean, DmsFoxconnFirmwareVersionType];

    ref(): MessageDmsFoxconnGetFirmwareVersionInput;

    set_version_type(value_version_type: DmsFoxconnFirmwareVersionType): boolean;

    unref(): void;
}

export class MessageDmsFoxconnGetFirmwareVersionOutput {
    static $gtype: GObject.GType<MessageDmsFoxconnGetFirmwareVersionOutput>;

    constructor(copy: MessageDmsFoxconnGetFirmwareVersionOutput);

    // Members
    get_result(): boolean;

    get_version(): [boolean, string];

    ref(): MessageDmsFoxconnGetFirmwareVersionOutput;

    unref(): void;
}

export class MessageDmsGetActivationStateOutput {
    static $gtype: GObject.GType<MessageDmsGetActivationStateOutput>;

    constructor(copy: MessageDmsGetActivationStateOutput);

    // Members
    get_info(): [boolean, DmsActivationState];

    get_result(): boolean;

    ref(): MessageDmsGetActivationStateOutput;

    unref(): void;
}

export class MessageDmsGetAltNetConfigOutput {
    static $gtype: GObject.GType<MessageDmsGetAltNetConfigOutput>;

    constructor(copy: MessageDmsGetAltNetConfigOutput);

    // Members
    get_config(): [boolean, boolean];

    get_result(): boolean;

    ref(): MessageDmsGetAltNetConfigOutput;

    unref(): void;
}

export class MessageDmsGetBandCapabilitiesOutput {
    static $gtype: GObject.GType<MessageDmsGetBandCapabilitiesOutput>;

    constructor(copy: MessageDmsGetBandCapabilitiesOutput);

    // Members
    get_band_capability(): [boolean, DmsBandCapability];

    get_extended_lte_band_capability(): [boolean, number[]];

    get_lte_band_capability(): [boolean, DmsLteBandCapability];

    get_result(): boolean;

    ref(): MessageDmsGetBandCapabilitiesOutput;

    unref(): void;
}

export class MessageDmsGetBootImageDownloadModeOutput {
    static $gtype: GObject.GType<MessageDmsGetBootImageDownloadModeOutput>;

    constructor(copy: MessageDmsGetBootImageDownloadModeOutput);

    // Members
    get_mode(): [boolean, DmsBootImageDownloadMode];

    get_result(): boolean;

    ref(): MessageDmsGetBootImageDownloadModeOutput;

    unref(): void;
}

export class MessageDmsGetCapabilitiesOutput {
    static $gtype: GObject.GType<MessageDmsGetCapabilitiesOutput>;

    constructor(copy: MessageDmsGetCapabilitiesOutput);

    // Members
    get_info(): [boolean, number, number, DmsDataServiceCapability, DmsSimCapability, DmsRadioInterface[]];

    get_result(): boolean;

    ref(): MessageDmsGetCapabilitiesOutput;

    unref(): void;
}

export class MessageDmsGetFactorySkuOutput {
    static $gtype: GObject.GType<MessageDmsGetFactorySkuOutput>;

    constructor(copy: MessageDmsGetFactorySkuOutput);

    // Members
    get_result(): boolean;

    get_sku(): [boolean, string];

    ref(): MessageDmsGetFactorySkuOutput;

    unref(): void;
}

export class MessageDmsGetFirmwarePreferenceOutput {
    static $gtype: GObject.GType<MessageDmsGetFirmwarePreferenceOutput>;

    constructor(copy: MessageDmsGetFirmwarePreferenceOutput);

    // Members
    get_list(): [boolean, MessageDmsGetFirmwarePreferenceOutputListImage[]];

    get_result(): boolean;

    ref(): MessageDmsGetFirmwarePreferenceOutput;

    unref(): void;
}

export class MessageDmsGetFirmwarePreferenceOutputListImage {
    static $gtype: GObject.GType<MessageDmsGetFirmwarePreferenceOutputListImage>;

    constructor(copy: MessageDmsGetFirmwarePreferenceOutputListImage);

    // Fields
    type: DmsFirmwareImageType;
    unique_id: any[];
    build_id: string;
}

export class MessageDmsGetHardwareRevisionOutput {
    static $gtype: GObject.GType<MessageDmsGetHardwareRevisionOutput>;

    constructor(copy: MessageDmsGetHardwareRevisionOutput);

    // Members
    get_result(): boolean;

    get_revision(): [boolean, string];

    ref(): MessageDmsGetHardwareRevisionOutput;

    unref(): void;
}

export class MessageDmsGetIdsOutput {
    static $gtype: GObject.GType<MessageDmsGetIdsOutput>;

    constructor(copy: MessageDmsGetIdsOutput);

    // Members
    get_esn(): [boolean, string];

    get_imei(): [boolean, string];

    get_imei_software_version(): [boolean, string];

    get_meid(): [boolean, string];

    get_result(): boolean;

    ref(): MessageDmsGetIdsOutput;

    unref(): void;
}

export class MessageDmsGetMacAddressInput {
    static $gtype: GObject.GType<MessageDmsGetMacAddressInput>;

    constructor();
    constructor(copy: MessageDmsGetMacAddressInput);

    // Constructors
    static ["new"](): MessageDmsGetMacAddressInput;

    // Members
    get_device(): [boolean, DmsMacType];

    ref(): MessageDmsGetMacAddressInput;

    set_device(value_device: DmsMacType): boolean;

    unref(): void;
}

export class MessageDmsGetMacAddressOutput {
    static $gtype: GObject.GType<MessageDmsGetMacAddressOutput>;

    constructor(copy: MessageDmsGetMacAddressOutput);

    // Members
    get_mac_address(): [boolean, Uint8Array];

    get_result(): boolean;

    ref(): MessageDmsGetMacAddressOutput;

    unref(): void;
}

export class MessageDmsGetManufacturerOutput {
    static $gtype: GObject.GType<MessageDmsGetManufacturerOutput>;

    constructor(copy: MessageDmsGetManufacturerOutput);

    // Members
    get_manufacturer(): [boolean, string];

    get_result(): boolean;

    ref(): MessageDmsGetManufacturerOutput;

    unref(): void;
}

export class MessageDmsGetModelOutput {
    static $gtype: GObject.GType<MessageDmsGetModelOutput>;

    constructor(copy: MessageDmsGetModelOutput);

    // Members
    get_model(): [boolean, string];

    get_result(): boolean;

    ref(): MessageDmsGetModelOutput;

    unref(): void;
}

export class MessageDmsGetMsisdnOutput {
    static $gtype: GObject.GType<MessageDmsGetMsisdnOutput>;

    constructor(copy: MessageDmsGetMsisdnOutput);

    // Members
    get_msisdn(): [boolean, string];

    get_result(): boolean;

    ref(): MessageDmsGetMsisdnOutput;

    unref(): void;
}

export class MessageDmsGetOperatingModeOutput {
    static $gtype: GObject.GType<MessageDmsGetOperatingModeOutput>;

    constructor(copy: MessageDmsGetOperatingModeOutput);

    // Members
    get_hardware_restricted_mode(): [boolean, boolean];

    get_mode(): [boolean, DmsOperatingMode];

    get_offline_reason(): [boolean, DmsOfflineReason];

    get_result(): boolean;

    ref(): MessageDmsGetOperatingModeOutput;

    unref(): void;
}

export class MessageDmsGetPowerStateOutput {
    static $gtype: GObject.GType<MessageDmsGetPowerStateOutput>;

    constructor(copy: MessageDmsGetPowerStateOutput);

    // Members
    get_info(): [boolean, number, number];

    get_result(): boolean;

    ref(): MessageDmsGetPowerStateOutput;

    unref(): void;
}

export class MessageDmsGetPrlVersionOutput {
    static $gtype: GObject.GType<MessageDmsGetPrlVersionOutput>;

    constructor(copy: MessageDmsGetPrlVersionOutput);

    // Members
    get_prl_only_preference(): [boolean, boolean];

    get_result(): boolean;

    get_version(): [boolean, number];

    ref(): MessageDmsGetPrlVersionOutput;

    unref(): void;
}

export class MessageDmsGetRevisionOutput {
    static $gtype: GObject.GType<MessageDmsGetRevisionOutput>;

    constructor(copy: MessageDmsGetRevisionOutput);

    // Members
    get_result(): boolean;

    get_revision(): [boolean, string];

    ref(): MessageDmsGetRevisionOutput;

    unref(): void;
}

export class MessageDmsGetSoftwareVersionOutput {
    static $gtype: GObject.GType<MessageDmsGetSoftwareVersionOutput>;

    constructor(copy: MessageDmsGetSoftwareVersionOutput);

    // Members
    get_result(): boolean;

    get_version(): [boolean, string];

    ref(): MessageDmsGetSoftwareVersionOutput;

    unref(): void;
}

export class MessageDmsGetStoredImageInfoInput {
    static $gtype: GObject.GType<MessageDmsGetStoredImageInfoInput>;

    constructor();
    constructor(copy: MessageDmsGetStoredImageInfoInput);

    // Constructors
    static ["new"](): MessageDmsGetStoredImageInfoInput;

    // Members
    get_image(): [boolean, MessageDmsGetStoredImageInfoInputImage];

    ref(): MessageDmsGetStoredImageInfoInput;

    set_image(value_image: MessageDmsGetStoredImageInfoInputImage): boolean;

    unref(): void;
}

export class MessageDmsGetStoredImageInfoInputImage {
    static $gtype: GObject.GType<MessageDmsGetStoredImageInfoInputImage>;

    constructor(copy: MessageDmsGetStoredImageInfoInputImage);

    // Fields
    type: DmsFirmwareImageType;
    unique_id: any[];
    build_id: string;
}

export class MessageDmsGetStoredImageInfoOutput {
    static $gtype: GObject.GType<MessageDmsGetStoredImageInfoOutput>;

    constructor(copy: MessageDmsGetStoredImageInfoOutput);

    // Members
    get_boot_version(): [boolean, number, number];

    get_oem_lock_id(): [boolean, number];

    get_pri_version(): [boolean, number, string];

    get_result(): boolean;

    ref(): MessageDmsGetStoredImageInfoOutput;

    unref(): void;
}

export class MessageDmsGetSupportedMessagesOutput {
    static $gtype: GObject.GType<MessageDmsGetSupportedMessagesOutput>;

    constructor(copy: MessageDmsGetSupportedMessagesOutput);

    // Members
    get_list(): [boolean, Uint8Array];

    get_result(): boolean;

    ref(): MessageDmsGetSupportedMessagesOutput;

    unref(): void;
}

export class MessageDmsGetTimeOutput {
    static $gtype: GObject.GType<MessageDmsGetTimeOutput>;

    constructor(copy: MessageDmsGetTimeOutput);

    // Members
    get_device_time(): [boolean, number, DmsTimeSource];

    get_result(): boolean;

    get_system_time(): [boolean, number];

    get_user_time(): [boolean, number];

    ref(): MessageDmsGetTimeOutput;

    unref(): void;
}

export class MessageDmsGetUserLockStateOutput {
    static $gtype: GObject.GType<MessageDmsGetUserLockStateOutput>;

    constructor(copy: MessageDmsGetUserLockStateOutput);

    // Members
    get_enabled(): [boolean, boolean];

    get_result(): boolean;

    ref(): MessageDmsGetUserLockStateOutput;

    unref(): void;
}

export class MessageDmsHpChangeDeviceModeInput {
    static $gtype: GObject.GType<MessageDmsHpChangeDeviceModeInput>;

    constructor();
    constructor(copy: MessageDmsHpChangeDeviceModeInput);

    // Constructors
    static ["new"](): MessageDmsHpChangeDeviceModeInput;

    // Members
    get_mode(): [boolean, DmsHpDeviceMode];

    ref(): MessageDmsHpChangeDeviceModeInput;

    set_mode(value_mode: DmsHpDeviceMode): boolean;

    unref(): void;
}

export class MessageDmsHpChangeDeviceModeOutput {
    static $gtype: GObject.GType<MessageDmsHpChangeDeviceModeOutput>;

    constructor(copy: MessageDmsHpChangeDeviceModeOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsHpChangeDeviceModeOutput;

    unref(): void;
}

export class MessageDmsListStoredImagesOutput {
    static $gtype: GObject.GType<MessageDmsListStoredImagesOutput>;

    constructor(copy: MessageDmsListStoredImagesOutput);

    // Members
    get_list(): [boolean, MessageDmsListStoredImagesOutputListImage[]];

    get_result(): boolean;

    ref(): MessageDmsListStoredImagesOutput;

    unref(): void;
}

export class MessageDmsListStoredImagesOutputListImage {
    static $gtype: GObject.GType<MessageDmsListStoredImagesOutputListImage>;

    constructor(copy: MessageDmsListStoredImagesOutputListImage);

    // Fields
    type: DmsFirmwareImageType;
    maximum_images: number;
    index_of_running_image: number;
    sublist: any[];
}

export class MessageDmsListStoredImagesOutputListImageSublistSublistElement {
    static $gtype: GObject.GType<MessageDmsListStoredImagesOutputListImageSublistSublistElement>;

    constructor(copy: MessageDmsListStoredImagesOutputListImageSublistSublistElement);

    // Fields
    storage_index: number;
    failure_count: number;
    unique_id: any[];
    build_id: string;
}

export class MessageDmsReadEriFileOutput {
    static $gtype: GObject.GType<MessageDmsReadEriFileOutput>;

    constructor(copy: MessageDmsReadEriFileOutput);

    // Members
    get_eri_file(): [boolean, Uint8Array];

    get_result(): boolean;

    ref(): MessageDmsReadEriFileOutput;

    unref(): void;
}

export class MessageDmsReadUserDataOutput {
    static $gtype: GObject.GType<MessageDmsReadUserDataOutput>;

    constructor(copy: MessageDmsReadUserDataOutput);

    // Members
    get_result(): boolean;

    get_user_data(): [boolean, Uint8Array];

    ref(): MessageDmsReadUserDataOutput;

    unref(): void;
}

export class MessageDmsResetOutput {
    static $gtype: GObject.GType<MessageDmsResetOutput>;

    constructor(copy: MessageDmsResetOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsResetOutput;

    unref(): void;
}

export class MessageDmsRestoreFactoryDefaultsInput {
    static $gtype: GObject.GType<MessageDmsRestoreFactoryDefaultsInput>;

    constructor();
    constructor(copy: MessageDmsRestoreFactoryDefaultsInput);

    // Constructors
    static ["new"](): MessageDmsRestoreFactoryDefaultsInput;

    // Members
    get_service_programming_code(): [boolean, string];

    ref(): MessageDmsRestoreFactoryDefaultsInput;

    set_service_programming_code(value_service_programming_code: string): boolean;

    unref(): void;
}

export class MessageDmsRestoreFactoryDefaultsOutput {
    static $gtype: GObject.GType<MessageDmsRestoreFactoryDefaultsOutput>;

    constructor(copy: MessageDmsRestoreFactoryDefaultsOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsRestoreFactoryDefaultsOutput;

    unref(): void;
}

export class MessageDmsSetAltNetConfigInput {
    static $gtype: GObject.GType<MessageDmsSetAltNetConfigInput>;

    constructor();
    constructor(copy: MessageDmsSetAltNetConfigInput);

    // Constructors
    static ["new"](): MessageDmsSetAltNetConfigInput;

    // Members
    get_config(): [boolean, boolean];

    ref(): MessageDmsSetAltNetConfigInput;

    set_config(value_config: boolean): boolean;

    unref(): void;
}

export class MessageDmsSetAltNetConfigOutput {
    static $gtype: GObject.GType<MessageDmsSetAltNetConfigOutput>;

    constructor(copy: MessageDmsSetAltNetConfigOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsSetAltNetConfigOutput;

    unref(): void;
}

export class MessageDmsSetBootImageDownloadModeInput {
    static $gtype: GObject.GType<MessageDmsSetBootImageDownloadModeInput>;

    constructor();
    constructor(copy: MessageDmsSetBootImageDownloadModeInput);

    // Constructors
    static ["new"](): MessageDmsSetBootImageDownloadModeInput;

    // Members
    get_mode(): [boolean, DmsBootImageDownloadMode];

    ref(): MessageDmsSetBootImageDownloadModeInput;

    set_mode(value_mode: DmsBootImageDownloadMode): boolean;

    unref(): void;
}

export class MessageDmsSetBootImageDownloadModeOutput {
    static $gtype: GObject.GType<MessageDmsSetBootImageDownloadModeOutput>;

    constructor(copy: MessageDmsSetBootImageDownloadModeOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsSetBootImageDownloadModeOutput;

    unref(): void;
}

export class MessageDmsSetEventReportInput {
    static $gtype: GObject.GType<MessageDmsSetEventReportInput>;

    constructor();
    constructor(copy: MessageDmsSetEventReportInput);

    // Constructors
    static ["new"](): MessageDmsSetEventReportInput;

    // Members
    get_activation_state_reporting(): [boolean, boolean];

    get_battery_level_report_limits(): [boolean, number, number];

    get_operating_mode_reporting(): [boolean, boolean];

    get_pin_state_reporting(): [boolean, boolean];

    get_power_state_reporting(): [boolean, boolean];

    get_prl_init_reporting(): [boolean, boolean];

    get_uim_state_reporting(): [boolean, boolean];

    get_wireless_disable_state_reporting(): [boolean, boolean];

    ref(): MessageDmsSetEventReportInput;

    set_activation_state_reporting(value_activation_state_reporting: boolean): boolean;

    set_battery_level_report_limits(
        value_battery_level_report_limits_lower_limit: number,
        value_battery_level_report_limits_upper_limit: number
    ): boolean;

    set_operating_mode_reporting(value_operating_mode_reporting: boolean): boolean;

    set_pin_state_reporting(value_pin_state_reporting: boolean): boolean;

    set_power_state_reporting(value_power_state_reporting: boolean): boolean;

    set_prl_init_reporting(value_prl_init_reporting: boolean): boolean;

    set_uim_state_reporting(value_uim_state_reporting: boolean): boolean;

    set_wireless_disable_state_reporting(value_wireless_disable_state_reporting: boolean): boolean;

    unref(): void;
}

export class MessageDmsSetEventReportOutput {
    static $gtype: GObject.GType<MessageDmsSetEventReportOutput>;

    constructor(copy: MessageDmsSetEventReportOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsSetEventReportOutput;

    unref(): void;
}

export class MessageDmsSetFccAuthenticationOutput {
    static $gtype: GObject.GType<MessageDmsSetFccAuthenticationOutput>;

    constructor(copy: MessageDmsSetFccAuthenticationOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsSetFccAuthenticationOutput;

    unref(): void;
}

export class MessageDmsSetFirmwareIdOutput {
    static $gtype: GObject.GType<MessageDmsSetFirmwareIdOutput>;

    constructor(copy: MessageDmsSetFirmwareIdOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsSetFirmwareIdOutput;

    unref(): void;
}

export class MessageDmsSetFirmwarePreferenceInput {
    static $gtype: GObject.GType<MessageDmsSetFirmwarePreferenceInput>;

    constructor();
    constructor(copy: MessageDmsSetFirmwarePreferenceInput);

    // Constructors
    static ["new"](): MessageDmsSetFirmwarePreferenceInput;

    // Members
    get_download_override(): [boolean, boolean];

    get_list(): [boolean, MessageDmsSetFirmwarePreferenceInputListImage[]];

    get_modem_storage_index(): [boolean, number];

    ref(): MessageDmsSetFirmwarePreferenceInput;

    set_download_override(value_download_override: boolean): boolean;

    set_list(value_list: MessageDmsSetFirmwarePreferenceInputListImage[]): boolean;

    set_modem_storage_index(value_modem_storage_index: number): boolean;

    unref(): void;
}

export class MessageDmsSetFirmwarePreferenceInputListImage {
    static $gtype: GObject.GType<MessageDmsSetFirmwarePreferenceInputListImage>;

    constructor(copy: MessageDmsSetFirmwarePreferenceInputListImage);

    // Fields
    type: DmsFirmwareImageType;
    unique_id: any[];
    build_id: string;
}

export class MessageDmsSetFirmwarePreferenceOutput {
    static $gtype: GObject.GType<MessageDmsSetFirmwarePreferenceOutput>;

    constructor(copy: MessageDmsSetFirmwarePreferenceOutput);

    // Members
    get_image_download_list(): [boolean, DmsFirmwareImageType[]];

    get_result(): boolean;

    ref(): MessageDmsSetFirmwarePreferenceOutput;

    unref(): void;
}

export class MessageDmsSetOperatingModeInput {
    static $gtype: GObject.GType<MessageDmsSetOperatingModeInput>;

    constructor();
    constructor(copy: MessageDmsSetOperatingModeInput);

    // Constructors
    static ["new"](): MessageDmsSetOperatingModeInput;

    // Members
    get_mode(): [boolean, DmsOperatingMode];

    ref(): MessageDmsSetOperatingModeInput;

    set_mode(value_mode: DmsOperatingMode): boolean;

    unref(): void;
}

export class MessageDmsSetOperatingModeOutput {
    static $gtype: GObject.GType<MessageDmsSetOperatingModeOutput>;

    constructor(copy: MessageDmsSetOperatingModeOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsSetOperatingModeOutput;

    unref(): void;
}

export class MessageDmsSetServiceProgrammingCodeInput {
    static $gtype: GObject.GType<MessageDmsSetServiceProgrammingCodeInput>;

    constructor();
    constructor(copy: MessageDmsSetServiceProgrammingCodeInput);

    // Constructors
    static ["new"](): MessageDmsSetServiceProgrammingCodeInput;

    // Members
    get_current(arg_current: string): boolean;

    get_current_code(): [boolean, string];

    get_new(arg_new: string): boolean;

    get_new_code(): [boolean, string];

    ref(): MessageDmsSetServiceProgrammingCodeInput;

    set_current(arg_current: string): boolean;

    set_current_code(value_current_code: string): boolean;

    set_new(arg_new: string): boolean;

    set_new_code(value_new_code: string): boolean;

    unref(): void;
}

export class MessageDmsSetServiceProgrammingCodeOutput {
    static $gtype: GObject.GType<MessageDmsSetServiceProgrammingCodeOutput>;

    constructor(copy: MessageDmsSetServiceProgrammingCodeOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsSetServiceProgrammingCodeOutput;

    unref(): void;
}

export class MessageDmsSetTimeInput {
    static $gtype: GObject.GType<MessageDmsSetTimeInput>;

    constructor();
    constructor(copy: MessageDmsSetTimeInput);

    // Constructors
    static ["new"](): MessageDmsSetTimeInput;

    // Members
    get_time_reference_type(): [boolean, DmsTimeReferenceType];

    get_time_value(): [boolean, number];

    ref(): MessageDmsSetTimeInput;

    set_time_reference_type(value_time_reference_type: DmsTimeReferenceType): boolean;

    set_time_value(value_time_value: number): boolean;

    unref(): void;
}

export class MessageDmsSetTimeOutput {
    static $gtype: GObject.GType<MessageDmsSetTimeOutput>;

    constructor(copy: MessageDmsSetTimeOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsSetTimeOutput;

    unref(): void;
}

export class MessageDmsSetUserLockCodeInput {
    static $gtype: GObject.GType<MessageDmsSetUserLockCodeInput>;

    constructor();
    constructor(copy: MessageDmsSetUserLockCodeInput);

    // Constructors
    static ["new"](): MessageDmsSetUserLockCodeInput;

    // Members
    get_info(): [boolean, string, string];

    ref(): MessageDmsSetUserLockCodeInput;

    set_info(value_info_old_code: string, value_info_new_code: string): boolean;

    unref(): void;
}

export class MessageDmsSetUserLockCodeOutput {
    static $gtype: GObject.GType<MessageDmsSetUserLockCodeOutput>;

    constructor(copy: MessageDmsSetUserLockCodeOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsSetUserLockCodeOutput;

    unref(): void;
}

export class MessageDmsSetUserLockStateInput {
    static $gtype: GObject.GType<MessageDmsSetUserLockStateInput>;

    constructor();
    constructor(copy: MessageDmsSetUserLockStateInput);

    // Constructors
    static ["new"](): MessageDmsSetUserLockStateInput;

    // Members
    get_info(): [boolean, boolean, string];

    ref(): MessageDmsSetUserLockStateInput;

    set_info(value_info_enabled: boolean, value_info_lock_code: string): boolean;

    unref(): void;
}

export class MessageDmsSetUserLockStateOutput {
    static $gtype: GObject.GType<MessageDmsSetUserLockStateOutput>;

    constructor(copy: MessageDmsSetUserLockStateOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsSetUserLockStateOutput;

    unref(): void;
}

export class MessageDmsSwiGetCurrentFirmwareOutput {
    static $gtype: GObject.GType<MessageDmsSwiGetCurrentFirmwareOutput>;

    constructor(copy: MessageDmsSwiGetCurrentFirmwareOutput);

    // Members
    get_amss_version(): [boolean, string];

    get_boot_version(): [boolean, string];

    get_carrier(): [boolean, string];

    get_carrier_id(): [boolean, string];

    get_config_version(): [boolean, string];

    get_model(): [boolean, string];

    get_package_id(): [boolean, string];

    get_pri_version(): [boolean, string];

    get_result(): boolean;

    get_sku_id(): [boolean, string];

    ref(): MessageDmsSwiGetCurrentFirmwareOutput;

    unref(): void;
}

export class MessageDmsSwiGetUsbCompositionOutput {
    static $gtype: GObject.GType<MessageDmsSwiGetUsbCompositionOutput>;

    constructor(copy: MessageDmsSwiGetUsbCompositionOutput);

    // Members
    get_current(): [boolean, DmsSwiUsbComposition];

    get_result(): boolean;

    get_supported(): [boolean, DmsSwiUsbComposition[]];

    ref(): MessageDmsSwiGetUsbCompositionOutput;

    unref(): void;
}

export class MessageDmsSwiSetUsbCompositionInput {
    static $gtype: GObject.GType<MessageDmsSwiSetUsbCompositionInput>;

    constructor();
    constructor(copy: MessageDmsSwiSetUsbCompositionInput);

    // Constructors
    static ["new"](): MessageDmsSwiSetUsbCompositionInput;

    // Members
    get_current(): [boolean, DmsSwiUsbComposition];

    ref(): MessageDmsSwiSetUsbCompositionInput;

    set_current(value_current: DmsSwiUsbComposition): boolean;

    unref(): void;
}

export class MessageDmsSwiSetUsbCompositionOutput {
    static $gtype: GObject.GType<MessageDmsSwiSetUsbCompositionOutput>;

    constructor(copy: MessageDmsSwiSetUsbCompositionOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsSwiSetUsbCompositionOutput;

    unref(): void;
}

export class MessageDmsUimChangePinInput {
    static $gtype: GObject.GType<MessageDmsUimChangePinInput>;

    constructor();
    constructor(copy: MessageDmsUimChangePinInput);

    // Constructors
    static ["new"](): MessageDmsUimChangePinInput;

    // Members
    get_info(): [boolean, DmsUimPinId, string, string];

    ref(): MessageDmsUimChangePinInput;

    set_info(value_info_pin_id: DmsUimPinId, value_info_old_pin: string, value_info_new_pin: string): boolean;

    unref(): void;
}

export class MessageDmsUimChangePinOutput {
    static $gtype: GObject.GType<MessageDmsUimChangePinOutput>;

    constructor(copy: MessageDmsUimChangePinOutput);

    // Members
    get_pin_retries_status(): [boolean, number, number];

    get_result(): boolean;

    ref(): MessageDmsUimChangePinOutput;

    unref(): void;
}

export class MessageDmsUimGetCkStatusInput {
    static $gtype: GObject.GType<MessageDmsUimGetCkStatusInput>;

    constructor();
    constructor(copy: MessageDmsUimGetCkStatusInput);

    // Constructors
    static ["new"](): MessageDmsUimGetCkStatusInput;

    // Members
    get_facility(): [boolean, DmsUimFacility];

    ref(): MessageDmsUimGetCkStatusInput;

    set_facility(value_facility: DmsUimFacility): boolean;

    unref(): void;
}

export class MessageDmsUimGetCkStatusOutput {
    static $gtype: GObject.GType<MessageDmsUimGetCkStatusOutput>;

    constructor(copy: MessageDmsUimGetCkStatusOutput);

    // Members
    get_ck_status(): [boolean, DmsUimFacilityState, number, number];

    get_operation_blocking_facility(): [boolean, boolean];

    get_result(): boolean;

    ref(): MessageDmsUimGetCkStatusOutput;

    unref(): void;
}

export class MessageDmsUimGetIccidOutput {
    static $gtype: GObject.GType<MessageDmsUimGetIccidOutput>;

    constructor(copy: MessageDmsUimGetIccidOutput);

    // Members
    get_iccid(): [boolean, string];

    get_result(): boolean;

    ref(): MessageDmsUimGetIccidOutput;

    unref(): void;
}

export class MessageDmsUimGetImsiOutput {
    static $gtype: GObject.GType<MessageDmsUimGetImsiOutput>;

    constructor(copy: MessageDmsUimGetImsiOutput);

    // Members
    get_imsi(): [boolean, string];

    get_result(): boolean;

    ref(): MessageDmsUimGetImsiOutput;

    unref(): void;
}

export class MessageDmsUimGetPinStatusOutput {
    static $gtype: GObject.GType<MessageDmsUimGetPinStatusOutput>;

    constructor(copy: MessageDmsUimGetPinStatusOutput);

    // Members
    get_pin1_status(): [boolean, DmsUimPinStatus, number, number];

    get_pin2_status(): [boolean, DmsUimPinStatus, number, number];

    get_result(): boolean;

    ref(): MessageDmsUimGetPinStatusOutput;

    unref(): void;
}

export class MessageDmsUimGetStateOutput {
    static $gtype: GObject.GType<MessageDmsUimGetStateOutput>;

    constructor(copy: MessageDmsUimGetStateOutput);

    // Members
    get_result(): boolean;

    get_state(): [boolean, DmsUimState];

    ref(): MessageDmsUimGetStateOutput;

    unref(): void;
}

export class MessageDmsUimSetCkProtectionInput {
    static $gtype: GObject.GType<MessageDmsUimSetCkProtectionInput>;

    constructor();
    constructor(copy: MessageDmsUimSetCkProtectionInput);

    // Constructors
    static ["new"](): MessageDmsUimSetCkProtectionInput;

    // Members
    get_facility(): [boolean, DmsUimFacility, DmsUimFacilityState, string];

    ref(): MessageDmsUimSetCkProtectionInput;

    set_facility(
        value_facility_facility: DmsUimFacility,
        value_facility_facility_state: DmsUimFacilityState,
        value_facility_facility_depersonalization_control_key: string
    ): boolean;

    unref(): void;
}

export class MessageDmsUimSetCkProtectionOutput {
    static $gtype: GObject.GType<MessageDmsUimSetCkProtectionOutput>;

    constructor(copy: MessageDmsUimSetCkProtectionOutput);

    // Members
    get_result(): boolean;

    get_verify_retries_left(): [boolean, number];

    ref(): MessageDmsUimSetCkProtectionOutput;

    unref(): void;
}

export class MessageDmsUimSetPinProtectionInput {
    static $gtype: GObject.GType<MessageDmsUimSetPinProtectionInput>;

    constructor();
    constructor(copy: MessageDmsUimSetPinProtectionInput);

    // Constructors
    static ["new"](): MessageDmsUimSetPinProtectionInput;

    // Members
    get_info(): [boolean, DmsUimPinId, boolean, string];

    ref(): MessageDmsUimSetPinProtectionInput;

    set_info(value_info_pin_id: DmsUimPinId, value_info_protection_enabled: boolean, value_info_pin: string): boolean;

    unref(): void;
}

export class MessageDmsUimSetPinProtectionOutput {
    static $gtype: GObject.GType<MessageDmsUimSetPinProtectionOutput>;

    constructor(copy: MessageDmsUimSetPinProtectionOutput);

    // Members
    get_pin_retries_status(): [boolean, number, number];

    get_result(): boolean;

    ref(): MessageDmsUimSetPinProtectionOutput;

    unref(): void;
}

export class MessageDmsUimUnblockCkInput {
    static $gtype: GObject.GType<MessageDmsUimUnblockCkInput>;

    constructor();
    constructor(copy: MessageDmsUimUnblockCkInput);

    // Constructors
    static ["new"](): MessageDmsUimUnblockCkInput;

    // Members
    get_facility(): [boolean, DmsUimFacility, string];

    ref(): MessageDmsUimUnblockCkInput;

    set_facility(value_facility_facility: DmsUimFacility, value_facility_facility_control_key: string): boolean;

    unref(): void;
}

export class MessageDmsUimUnblockCkOutput {
    static $gtype: GObject.GType<MessageDmsUimUnblockCkOutput>;

    constructor(copy: MessageDmsUimUnblockCkOutput);

    // Members
    get_result(): boolean;

    get_unblock_retries_left(): [boolean, number];

    ref(): MessageDmsUimUnblockCkOutput;

    unref(): void;
}

export class MessageDmsUimUnblockPinInput {
    static $gtype: GObject.GType<MessageDmsUimUnblockPinInput>;

    constructor();
    constructor(copy: MessageDmsUimUnblockPinInput);

    // Constructors
    static ["new"](): MessageDmsUimUnblockPinInput;

    // Members
    get_info(): [boolean, DmsUimPinId, string, string];

    ref(): MessageDmsUimUnblockPinInput;

    set_info(value_info_pin_id: DmsUimPinId, value_info_puk: string, value_info_new_pin: string): boolean;

    unref(): void;
}

export class MessageDmsUimUnblockPinOutput {
    static $gtype: GObject.GType<MessageDmsUimUnblockPinOutput>;

    constructor(copy: MessageDmsUimUnblockPinOutput);

    // Members
    get_pin_retries_status(): [boolean, number, number];

    get_result(): boolean;

    ref(): MessageDmsUimUnblockPinOutput;

    unref(): void;
}

export class MessageDmsUimVerifyPinInput {
    static $gtype: GObject.GType<MessageDmsUimVerifyPinInput>;

    constructor();
    constructor(copy: MessageDmsUimVerifyPinInput);

    // Constructors
    static ["new"](): MessageDmsUimVerifyPinInput;

    // Members
    get_info(): [boolean, DmsUimPinId, string];

    ref(): MessageDmsUimVerifyPinInput;

    set_info(value_info_pin_id: DmsUimPinId, value_info_pin: string): boolean;

    unref(): void;
}

export class MessageDmsUimVerifyPinOutput {
    static $gtype: GObject.GType<MessageDmsUimVerifyPinOutput>;

    constructor(copy: MessageDmsUimVerifyPinOutput);

    // Members
    get_pin_retries_status(): [boolean, number, number];

    get_result(): boolean;

    ref(): MessageDmsUimVerifyPinOutput;

    unref(): void;
}

export class MessageDmsValidateServiceProgrammingCodeInput {
    static $gtype: GObject.GType<MessageDmsValidateServiceProgrammingCodeInput>;

    constructor();
    constructor(copy: MessageDmsValidateServiceProgrammingCodeInput);

    // Constructors
    static ["new"](): MessageDmsValidateServiceProgrammingCodeInput;

    // Members
    get_service_programming_code(): [boolean, string];

    ref(): MessageDmsValidateServiceProgrammingCodeInput;

    set_service_programming_code(value_service_programming_code: string): boolean;

    unref(): void;
}

export class MessageDmsValidateServiceProgrammingCodeOutput {
    static $gtype: GObject.GType<MessageDmsValidateServiceProgrammingCodeOutput>;

    constructor(copy: MessageDmsValidateServiceProgrammingCodeOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsValidateServiceProgrammingCodeOutput;

    unref(): void;
}

export class MessageDmsWriteUserDataInput {
    static $gtype: GObject.GType<MessageDmsWriteUserDataInput>;

    constructor();
    constructor(copy: MessageDmsWriteUserDataInput);

    // Constructors
    static ["new"](): MessageDmsWriteUserDataInput;

    // Members
    get_user_data(): [boolean, Uint8Array];

    ref(): MessageDmsWriteUserDataInput;

    set_user_data(value_user_data: Uint8Array | string): boolean;

    unref(): void;
}

export class MessageDmsWriteUserDataOutput {
    static $gtype: GObject.GType<MessageDmsWriteUserDataOutput>;

    constructor(copy: MessageDmsWriteUserDataOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDmsWriteUserDataOutput;

    unref(): void;
}

export class MessageDsdGetApnInfoInput {
    static $gtype: GObject.GType<MessageDsdGetApnInfoInput>;

    constructor();
    constructor(copy: MessageDsdGetApnInfoInput);

    // Constructors
    static ["new"](): MessageDsdGetApnInfoInput;

    // Members
    get_apn_type(): [boolean, DsdApnType];

    ref(): MessageDsdGetApnInfoInput;

    set_apn_type(value_apn_type: DsdApnType): boolean;

    unref(): void;
}

export class MessageDsdGetApnInfoOutput {
    static $gtype: GObject.GType<MessageDsdGetApnInfoOutput>;

    constructor(copy: MessageDsdGetApnInfoOutput);

    // Members
    get_apn_name(): [boolean, string];

    get_result(): boolean;

    ref(): MessageDsdGetApnInfoOutput;

    unref(): void;
}

export class MessageDsdSetApnTypeInput {
    static $gtype: GObject.GType<MessageDsdSetApnTypeInput>;

    constructor();
    constructor(copy: MessageDsdSetApnTypeInput);

    // Constructors
    static ["new"](): MessageDsdSetApnTypeInput;

    // Members
    get_apn_type(): [boolean, string, DsdApnTypePreference];

    get_apn_type_preference_mask(): [boolean, DsdApnTypePreference];

    ref(): MessageDsdSetApnTypeInput;

    set_apn_type(value_apn_type_name: string, value_apn_type_type: DsdApnTypePreference): boolean;

    set_apn_type_preference_mask(value_apn_type_preference_mask: DsdApnTypePreference): boolean;

    unref(): void;
}

export class MessageDsdSetApnTypeOutput {
    static $gtype: GObject.GType<MessageDsdSetApnTypeOutput>;

    constructor(copy: MessageDsdSetApnTypeOutput);

    // Members
    get_result(): boolean;

    ref(): MessageDsdSetApnTypeOutput;

    unref(): void;
}

export class MessageGasDmsGetFirmwareListInput {
    static $gtype: GObject.GType<MessageGasDmsGetFirmwareListInput>;

    constructor();
    constructor(copy: MessageGasDmsGetFirmwareListInput);

    // Constructors
    static ["new"](): MessageGasDmsGetFirmwareListInput;

    // Members
    get_mode(): [boolean, GasFirmwareListingMode];

    get_name(): [boolean, string];

    get_slot_index(): [boolean, number];

    get_version(): [boolean, string];

    ref(): MessageGasDmsGetFirmwareListInput;

    set_mode(value_mode: GasFirmwareListingMode): boolean;

    set_name(value_name: string): boolean;

    set_slot_index(value_slot_index: number): boolean;

    set_version(value_version: string): boolean;

    unref(): void;
}

export class MessageGasDmsGetFirmwareListOutput {
    static $gtype: GObject.GType<MessageGasDmsGetFirmwareListOutput>;

    constructor(copy: MessageGasDmsGetFirmwareListOutput);

    // Members
    get_mode(): [boolean, GasFirmwareListingMode];

    get_result(): boolean;

    get_stored_firmware_1(): [boolean, number, string, string, string];

    get_stored_firmware_2(): [boolean, number, string, string, string];

    get_stored_firmware_3(): [boolean, number, string, string, string];

    get_stored_firmware_4(): [boolean, number, string, string, string];

    ref(): MessageGasDmsGetFirmwareListOutput;

    unref(): void;
}

export class MessageGasDmsSetActiveFirmwareInput {
    static $gtype: GObject.GType<MessageGasDmsSetActiveFirmwareInput>;

    constructor();
    constructor(copy: MessageGasDmsSetActiveFirmwareInput);

    // Constructors
    static ["new"](): MessageGasDmsSetActiveFirmwareInput;

    // Members
    get_carrier_name(): [boolean, string];

    get_slot_index(): [boolean, number];

    get_version(): [boolean, string];

    ref(): MessageGasDmsSetActiveFirmwareInput;

    set_carrier_name(value_carrier_name: string): boolean;

    set_slot_index(value_slot_index: number): boolean;

    set_version(value_version: string): boolean;

    unref(): void;
}

export class MessageGasDmsSetActiveFirmwareOutput {
    static $gtype: GObject.GType<MessageGasDmsSetActiveFirmwareOutput>;

    constructor(copy: MessageGasDmsSetActiveFirmwareOutput);

    // Members
    get_result(): boolean;

    ref(): MessageGasDmsSetActiveFirmwareOutput;

    unref(): void;
}

export class MessageGmsTestGetValueOutput {
    static $gtype: GObject.GType<MessageGmsTestGetValueOutput>;

    constructor(copy: MessageGmsTestGetValueOutput);

    // Members
    get_result(): boolean;

    get_test_mandatory_value(): [boolean, number];

    get_test_optional_value(): [boolean, number];

    ref(): MessageGmsTestGetValueOutput;

    unref(): void;
}

export class MessageGmsTestSetValueInput {
    static $gtype: GObject.GType<MessageGmsTestSetValueInput>;

    constructor();
    constructor(copy: MessageGmsTestSetValueInput);

    // Constructors
    static ["new"](): MessageGmsTestSetValueInput;

    // Members
    get_test_mandatory_value(): [boolean, number];

    get_test_optional_value(): [boolean, number];

    ref(): MessageGmsTestSetValueInput;

    set_test_mandatory_value(value_test_mandatory_value: number): boolean;

    set_test_optional_value(value_test_optional_value: number): boolean;

    unref(): void;
}

export class MessageGmsTestSetValueOutput {
    static $gtype: GObject.GType<MessageGmsTestSetValueOutput>;

    constructor(copy: MessageGmsTestSetValueOutput);

    // Members
    get_result(): boolean;

    ref(): MessageGmsTestSetValueOutput;

    unref(): void;
}

export class MessageLocDeleteAssistanceDataInput {
    static $gtype: GObject.GType<MessageLocDeleteAssistanceDataInput>;

    constructor();
    constructor(copy: MessageLocDeleteAssistanceDataInput);

    // Constructors
    static ["new"](): MessageLocDeleteAssistanceDataInput;

    // Members
    get_delete_all(): [boolean, boolean];

    get_delete_cell_database_mask(): [boolean, LocDeleteCellDatabase];

    get_delete_clock_info_mask(): [boolean, LocDeleteClockInfo];

    get_delete_gnss_data_mask(): [boolean, LocDeleteGnssData];

    get_delete_sv_info(): [boolean, MessageLocDeleteAssistanceDataInputDeleteSvInfoElement[]];

    ref(): MessageLocDeleteAssistanceDataInput;

    set_delete_all(value_delete_all: boolean): boolean;

    set_delete_cell_database_mask(value_delete_cell_database_mask: LocDeleteCellDatabase): boolean;

    set_delete_clock_info_mask(value_delete_clock_info_mask: LocDeleteClockInfo): boolean;

    set_delete_gnss_data_mask(value_delete_gnss_data_mask: LocDeleteGnssData): boolean;

    set_delete_sv_info(value_delete_sv_info: MessageLocDeleteAssistanceDataInputDeleteSvInfoElement[]): boolean;

    unref(): void;
}

export class MessageLocDeleteAssistanceDataInputDeleteSvInfoElement {
    static $gtype: GObject.GType<MessageLocDeleteAssistanceDataInputDeleteSvInfoElement>;

    constructor(copy: MessageLocDeleteAssistanceDataInputDeleteSvInfoElement);

    // Fields
    gnss_sv_id: number;
    system: LocSystem;
    delete_sv_info_mask: LocDeleteSvInfo;
}

export class MessageLocDeleteAssistanceDataOutput {
    static $gtype: GObject.GType<MessageLocDeleteAssistanceDataOutput>;

    constructor(copy: MessageLocDeleteAssistanceDataOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocDeleteAssistanceDataOutput;

    unref(): void;
}

export class MessageLocGetNmeaTypesOutput {
    static $gtype: GObject.GType<MessageLocGetNmeaTypesOutput>;

    constructor(copy: MessageLocGetNmeaTypesOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocGetNmeaTypesOutput;

    unref(): void;
}

export class MessageLocGetOperationModeOutput {
    static $gtype: GObject.GType<MessageLocGetOperationModeOutput>;

    constructor(copy: MessageLocGetOperationModeOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocGetOperationModeOutput;

    unref(): void;
}

export class MessageLocGetPredictedOrbitsDataSourceOutput {
    static $gtype: GObject.GType<MessageLocGetPredictedOrbitsDataSourceOutput>;

    constructor(copy: MessageLocGetPredictedOrbitsDataSourceOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocGetPredictedOrbitsDataSourceOutput;

    unref(): void;
}

export class MessageLocGetServerInput {
    static $gtype: GObject.GType<MessageLocGetServerInput>;

    constructor();
    constructor(copy: MessageLocGetServerInput);

    // Constructors
    static ["new"](): MessageLocGetServerInput;

    // Members
    get_server_address_type(): [boolean, LocServerAddressType];

    get_server_type(): [boolean, LocServerType];

    ref(): MessageLocGetServerInput;

    set_server_address_type(value_server_address_type: LocServerAddressType): boolean;

    set_server_type(value_server_type: LocServerType): boolean;

    unref(): void;
}

export class MessageLocGetServerOutput {
    static $gtype: GObject.GType<MessageLocGetServerOutput>;

    constructor(copy: MessageLocGetServerOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocGetServerOutput;

    unref(): void;
}

export class MessageLocInjectPredictedOrbitsDataInput {
    static $gtype: GObject.GType<MessageLocInjectPredictedOrbitsDataInput>;

    constructor();
    constructor(copy: MessageLocInjectPredictedOrbitsDataInput);

    // Constructors
    static ["new"](): MessageLocInjectPredictedOrbitsDataInput;

    // Members
    get_format_type(): [boolean, LocPredictedOrbitsDataFormat];

    get_part_data(): [boolean, Uint8Array];

    get_part_number(): [boolean, number];

    get_total_parts(): [boolean, number];

    get_total_size(): [boolean, number];

    ref(): MessageLocInjectPredictedOrbitsDataInput;

    set_format_type(value_format_type: LocPredictedOrbitsDataFormat): boolean;

    set_part_data(value_part_data: Uint8Array | string): boolean;

    set_part_number(value_part_number: number): boolean;

    set_total_parts(value_total_parts: number): boolean;

    set_total_size(value_total_size: number): boolean;

    unref(): void;
}

export class MessageLocInjectPredictedOrbitsDataOutput {
    static $gtype: GObject.GType<MessageLocInjectPredictedOrbitsDataOutput>;

    constructor(copy: MessageLocInjectPredictedOrbitsDataOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocInjectPredictedOrbitsDataOutput;

    unref(): void;
}

export class MessageLocInjectXtraDataInput {
    static $gtype: GObject.GType<MessageLocInjectXtraDataInput>;

    constructor();
    constructor(copy: MessageLocInjectXtraDataInput);

    // Constructors
    static ["new"](): MessageLocInjectXtraDataInput;

    // Members
    get_part_data(): [boolean, Uint8Array];

    get_part_number(): [boolean, number];

    get_total_parts(): [boolean, number];

    get_total_size(): [boolean, number];

    ref(): MessageLocInjectXtraDataInput;

    set_part_data(value_part_data: Uint8Array | string): boolean;

    set_part_number(value_part_number: number): boolean;

    set_total_parts(value_total_parts: number): boolean;

    set_total_size(value_total_size: number): boolean;

    unref(): void;
}

export class MessageLocInjectXtraDataOutput {
    static $gtype: GObject.GType<MessageLocInjectXtraDataOutput>;

    constructor(copy: MessageLocInjectXtraDataOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocInjectXtraDataOutput;

    unref(): void;
}

export class MessageLocRegisterEventsInput {
    static $gtype: GObject.GType<MessageLocRegisterEventsInput>;

    constructor();
    constructor(copy: MessageLocRegisterEventsInput);

    // Constructors
    static ["new"](): MessageLocRegisterEventsInput;

    // Members
    get_event_registration_mask(): [boolean, LocEventRegistrationFlag];

    ref(): MessageLocRegisterEventsInput;

    set_event_registration_mask(value_event_registration_mask: LocEventRegistrationFlag): boolean;

    unref(): void;
}

export class MessageLocRegisterEventsOutput {
    static $gtype: GObject.GType<MessageLocRegisterEventsOutput>;

    constructor(copy: MessageLocRegisterEventsOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocRegisterEventsOutput;

    unref(): void;
}

export class MessageLocSetNmeaTypesInput {
    static $gtype: GObject.GType<MessageLocSetNmeaTypesInput>;

    constructor();
    constructor(copy: MessageLocSetNmeaTypesInput);

    // Constructors
    static ["new"](): MessageLocSetNmeaTypesInput;

    // Members
    get_nmea_types(): [boolean, LocNmeaType];

    ref(): MessageLocSetNmeaTypesInput;

    set_nmea_types(value_nmea_types: LocNmeaType): boolean;

    unref(): void;
}

export class MessageLocSetNmeaTypesOutput {
    static $gtype: GObject.GType<MessageLocSetNmeaTypesOutput>;

    constructor(copy: MessageLocSetNmeaTypesOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocSetNmeaTypesOutput;

    unref(): void;
}

export class MessageLocSetOperationModeInput {
    static $gtype: GObject.GType<MessageLocSetOperationModeInput>;

    constructor();
    constructor(copy: MessageLocSetOperationModeInput);

    // Constructors
    static ["new"](): MessageLocSetOperationModeInput;

    // Members
    get_operation_mode(): [boolean, LocOperationMode];

    ref(): MessageLocSetOperationModeInput;

    set_operation_mode(value_operation_mode: LocOperationMode): boolean;

    unref(): void;
}

export class MessageLocSetOperationModeOutput {
    static $gtype: GObject.GType<MessageLocSetOperationModeOutput>;

    constructor(copy: MessageLocSetOperationModeOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocSetOperationModeOutput;

    unref(): void;
}

export class MessageLocSetServerInput {
    static $gtype: GObject.GType<MessageLocSetServerInput>;

    constructor();
    constructor(copy: MessageLocSetServerInput);

    // Constructors
    static ["new"](): MessageLocSetServerInput;

    // Members
    get_ipv4(): [boolean, number, number];

    get_ipv6(): [boolean, number[], number];

    get_server_type(): [boolean, LocServerType];

    get_url(): [boolean, string];

    ref(): MessageLocSetServerInput;

    set_ipv4(value_ipv4_ipv4_address: number, value_ipv4_ipv4_port: number): boolean;

    set_ipv6(value_ipv6_ipv6_address: number[], value_ipv6_ipv6_port: number): boolean;

    set_server_type(value_server_type: LocServerType): boolean;

    set_url(value_url: string): boolean;

    unref(): void;
}

export class MessageLocSetServerOutput {
    static $gtype: GObject.GType<MessageLocSetServerOutput>;

    constructor(copy: MessageLocSetServerOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocSetServerOutput;

    unref(): void;
}

export class MessageLocStartInput {
    static $gtype: GObject.GType<MessageLocStartInput>;

    constructor();
    constructor(copy: MessageLocStartInput);

    // Constructors
    static ["new"](): MessageLocStartInput;

    // Members
    get_fix_recurrence_type(): [boolean, LocFixRecurrenceType];

    get_intermediate_report_state(): [boolean, LocIntermediateReportState];

    get_minimum_interval_between_position_reports(): [boolean, number];

    get_session_id(): [boolean, number];

    ref(): MessageLocStartInput;

    set_fix_recurrence_type(value_fix_recurrence_type: LocFixRecurrenceType): boolean;

    set_intermediate_report_state(value_intermediate_report_state: LocIntermediateReportState): boolean;

    set_minimum_interval_between_position_reports(value_minimum_interval_between_position_reports: number): boolean;

    set_session_id(value_session_id: number): boolean;

    unref(): void;
}

export class MessageLocStartOutput {
    static $gtype: GObject.GType<MessageLocStartOutput>;

    constructor(copy: MessageLocStartOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocStartOutput;

    unref(): void;
}

export class MessageLocStopInput {
    static $gtype: GObject.GType<MessageLocStopInput>;

    constructor();
    constructor(copy: MessageLocStopInput);

    // Constructors
    static ["new"](): MessageLocStopInput;

    // Members
    get_session_id(): [boolean, number];

    ref(): MessageLocStopInput;

    set_session_id(value_session_id: number): boolean;

    unref(): void;
}

export class MessageLocStopOutput {
    static $gtype: GObject.GType<MessageLocStopOutput>;

    constructor(copy: MessageLocStopOutput);

    // Members
    get_result(): boolean;

    ref(): MessageLocStopOutput;

    unref(): void;
}

export class MessageNasAttachDetachInput {
    static $gtype: GObject.GType<MessageNasAttachDetachInput>;

    constructor();
    constructor(copy: MessageNasAttachDetachInput);

    // Constructors
    static ["new"](): MessageNasAttachDetachInput;

    // Members
    get_action(): [boolean, NasPsAttachAction];

    ref(): MessageNasAttachDetachInput;

    set_action(value_action: NasPsAttachAction): boolean;

    unref(): void;
}

export class MessageNasAttachDetachOutput {
    static $gtype: GObject.GType<MessageNasAttachDetachOutput>;

    constructor(copy: MessageNasAttachDetachOutput);

    // Members
    get_result(): boolean;

    ref(): MessageNasAttachDetachOutput;

    unref(): void;
}

export class MessageNasConfigSignalInfoInput {
    static $gtype: GObject.GType<MessageNasConfigSignalInfoInput>;

    constructor();
    constructor(copy: MessageNasConfigSignalInfoInput);

    // Constructors
    static ["new"](): MessageNasConfigSignalInfoInput;

    // Members
    get_ecio_threshold(): [boolean, number[]];

    get_io_threshold(): [boolean, number[]];

    get_lte_report(): [boolean, number, number];

    get_lte_snr_threshold(): [boolean, number[]];

    get_rscp_threshold(): [boolean, Uint8Array];

    get_rsrp_threshold(): [boolean, number[]];

    get_rsrq_threshold(): [boolean, Uint8Array];

    get_rssi_threshold(): [boolean, Uint8Array];

    get_sinr_threshold(): [boolean, Uint8Array];

    ref(): MessageNasConfigSignalInfoInput;

    set_ecio_threshold(value_ecio_threshold: number[]): boolean;

    set_io_threshold(value_io_threshold: number[]): boolean;

    set_lte_report(value_lte_report_rate: number, value_lte_report_average_period: number): boolean;

    set_lte_snr_threshold(value_lte_snr_threshold: number[]): boolean;

    set_rscp_threshold(value_rscp_threshold: Uint8Array | string): boolean;

    set_rsrp_threshold(value_rsrp_threshold: number[]): boolean;

    set_rsrq_threshold(value_rsrq_threshold: Uint8Array | string): boolean;

    set_rssi_threshold(value_rssi_threshold: Uint8Array | string): boolean;

    set_sinr_threshold(value_sinr_threshold: Uint8Array | string): boolean;

    unref(): void;
}

export class MessageNasConfigSignalInfoOutput {
    static $gtype: GObject.GType<MessageNasConfigSignalInfoOutput>;

    constructor(copy: MessageNasConfigSignalInfoOutput);

    // Members
    get_result(): boolean;

    ref(): MessageNasConfigSignalInfoOutput;

    unref(): void;
}

export class MessageNasForceNetworkSearchOutput {
    static $gtype: GObject.GType<MessageNasForceNetworkSearchOutput>;

    constructor(copy: MessageNasForceNetworkSearchOutput);

    // Members
    get_result(): boolean;

    ref(): MessageNasForceNetworkSearchOutput;

    unref(): void;
}

export class MessageNasGetCdmaPositionInfoOutput {
    static $gtype: GObject.GType<MessageNasGetCdmaPositionInfoOutput>;

    constructor(copy: MessageNasGetCdmaPositionInfoOutput);

    // Members
    get_cdma_position_info(): [
        boolean,
        number,
        MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation[]
    ];

    get_result(): boolean;

    ref(): MessageNasGetCdmaPositionInfoOutput;

    unref(): void;
}

export class MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation {
    static $gtype: GObject.GType<MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation>;

    constructor(copy: MessageNasGetCdmaPositionInfoOutputCdmaPositionInfoBasestationsBasestation);

    // Fields
    pilot_type: NasCdmaPilotType;
    system_id: number;
    network_id: number;
    base_station_id: number;
    pilot_pn: number;
    pilot_strength: number;
    latitude: number;
    longitude: number;
    gps_time_in_milliseconds: number;
}

export class MessageNasGetCellLocationInfoOutput {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutput>;

    constructor(copy: MessageNasGetCellLocationInfoOutput);

    // Members
    get_cdma_info(): [boolean, number, number, number, number, number, number];

    get_geran_info(): [
        boolean,
        number,
        string,
        number,
        number,
        number,
        number,
        number,
        MessageNasGetCellLocationInfoOutputGeranInfoCellElement[]
    ];

    get_geran_info_v2(): [
        boolean,
        number,
        Uint8Array,
        number,
        number,
        number,
        number,
        number,
        MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement[]
    ];

    get_interfrequency_lte_info(): [
        boolean,
        boolean,
        MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement[]
    ];

    get_intrafrequency_lte_info(): [
        boolean,
        boolean,
        string,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoCellElement[]
    ];

    get_intrafrequency_lte_info_v2(): [
        boolean,
        boolean,
        Uint8Array,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        number,
        MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement[]
    ];

    get_lte_info_neighboring_gsm(): [
        boolean,
        boolean,
        MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement[]
    ];

    get_lte_info_neighboring_wcdma(): [
        boolean,
        boolean,
        MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement[]
    ];

    get_result(): boolean;

    get_umts_cell_id(): [boolean, number];

    get_umts_info(): [
        boolean,
        number,
        string,
        number,
        number,
        number,
        number,
        number,
        MessageNasGetCellLocationInfoOutputUmtsInfoCellElement[],
        MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringGeranElement[]
    ];

    get_umts_info_neighboring_lte(): [
        boolean,
        NasWcdmaRrcState,
        MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement[]
    ];

    get_umts_info_v2(): [
        boolean,
        number,
        Uint8Array,
        number,
        number,
        number,
        number,
        number,
        MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement[],
        MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement[]
    ];

    ref(): MessageNasGetCellLocationInfoOutput;

    unref(): void;
}

export class MessageNasGetCellLocationInfoOutputGeranInfoCellElement {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputGeranInfoCellElement>;

    constructor(
        properties?: Partial<{
            cell_id?: number;
            plmn?: string;
            lac?: number;
            geran_absolute_rf_channel_number?: number;
            base_station_identity_code?: number;
            rx_level?: number;
        }>
    );
    constructor(copy: MessageNasGetCellLocationInfoOutputGeranInfoCellElement);

    // Fields
    cell_id: number;
    plmn: string;
    lac: number;
    geran_absolute_rf_channel_number: number;
    base_station_identity_code: number;
    rx_level: number;
}

export class MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement>;

    constructor(copy: MessageNasGetCellLocationInfoOutputGeranInfoV2CellElement);

    // Fields
    cell_id: number;
    plmn: any[];
    lac: number;
    geran_absolute_rf_channel_number: number;
    base_station_identity_code: number;
    rx_level: number;
}

export class MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement>;

    constructor(copy: MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElement);

    // Fields
    eutra_absolute_rf_channel_number: number;
    cell_selection_rx_level_low_threshold: number;
    cell_selection_rx_level_high_threshold: number;
    cell_reselection_priority: number;
    cell: any[];
}

export class MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement>;

    constructor(
        properties?: Partial<{
            physical_cell_id?: number;
            rsrq?: number;
            rsrp?: number;
            rssi?: number;
            cell_selection_rx_level?: number;
        }>
    );
    constructor(copy: MessageNasGetCellLocationInfoOutputInterfrequencyLteInfoFrequencyElementCellElement);

    // Fields
    physical_cell_id: number;
    rsrq: number;
    rsrp: number;
    rssi: number;
    cell_selection_rx_level: number;
}

export class MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement>;

    constructor(
        properties?: Partial<{
            physical_cell_id?: number;
            rsrq?: number;
            rsrp?: number;
            rssi?: number;
            cell_selection_rx_level?: number;
        }>
    );
    constructor(copy: MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement);

    // Fields
    physical_cell_id: number;
    rsrq: number;
    rsrp: number;
    rssi: number;
    cell_selection_rx_level: number;
}

export class MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement>;

    constructor(copy: MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElement);

    // Fields
    cell_reselection_priority: number;
    cell_reselection_high_threshold: number;
    cell_reselection_low_threshold: number;
    ncc_permitted: number;
    cell: any[];
}

export class MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement>;

    constructor(
        properties?: Partial<{
            geran_absolute_rf_channel_number?: number;
            band_is_1900?: boolean;
            cell_id_valid?: boolean;
            base_station_identity_code?: number;
            rssi?: number;
            cell_selection_rx_level?: number;
        }>
    );
    constructor(copy: MessageNasGetCellLocationInfoOutputLteInfoNeighboringGsmFrequencyElementCellElement);

    // Fields
    geran_absolute_rf_channel_number: number;
    band_is_1900: boolean;
    cell_id_valid: boolean;
    base_station_identity_code: number;
    rssi: number;
    cell_selection_rx_level: number;
}

export class MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement>;

    constructor(copy: MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElement);

    // Fields
    utra_absolute_rf_channel_number: number;
    cell_reselection_priority: number;
    cell_reselection_high_threshold: number;
    cell_reselection_low_threshold: number;
    cell: any[];
}

export class MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement>;

    constructor(
        properties?: Partial<{
            primary_scrambling_code?: number;
            cpich_rscp?: number;
            cpich_ecno?: number;
            cell_selection_rx_level?: number;
        }>
    );
    constructor(copy: MessageNasGetCellLocationInfoOutputLteInfoNeighboringWcdmaFrequencyElementCellElement);

    // Fields
    primary_scrambling_code: number;
    cpich_rscp: number;
    cpich_ecno: number;
    cell_selection_rx_level: number;
}

export class MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement>;

    constructor(
        properties?: Partial<{
            eutra_absolute_rf_channel_number?: number;
            physical_cell_id?: number;
            rsrp?: number;
            rsrq?: number;
            cell_selection_rx_level?: number;
            is_tdd?: boolean;
        }>
    );
    constructor(copy: MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringLteFrequencyElement);

    // Fields
    eutra_absolute_rf_channel_number: number;
    physical_cell_id: number;
    rsrp: number;
    rsrq: number;
    cell_selection_rx_level: number;
    is_tdd: boolean;
}

export class MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement>;

    constructor(
        properties?: Partial<{
            utra_absolute_rf_channel_number?: number;
            primary_scrambling_code?: number;
            rscp?: number;
            ecio?: number;
        }>
    );
    constructor(copy: MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement);

    // Fields
    utra_absolute_rf_channel_number: number;
    primary_scrambling_code: number;
    rscp: number;
    ecio: number;
}

export class MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement {
    static $gtype: GObject.GType<MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement>;

    constructor(
        properties?: Partial<{
            geran_absolute_rf_channel_number?: number;
            network_color_code?: number;
            base_station_color_code?: number;
            rssi?: number;
        }>
    );
    constructor(copy: MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement);

    // Fields
    geran_absolute_rf_channel_number: number;
    network_color_code: number;
    base_station_color_code: number;
    rssi: number;
}

export class MessageNasGetHomeNetworkOutput {
    static $gtype: GObject.GType<MessageNasGetHomeNetworkOutput>;

    constructor(copy: MessageNasGetHomeNetworkOutput);

    // Members
    get_home_network(): [boolean, number, number, string];

    get_home_network_3gpp2(
        value_home_network_3gpp2_mcc: number,
        value_home_network_3gpp2_mnc: number,
        value_home_network_3gpp2_display_description: NasNetworkDescriptionDisplay,
        value_home_network_3gpp2_description_encoding: NasNetworkDescriptionEncoding,
        value_home_network_3gpp2_description: string
    ): boolean;

    get_home_network_3gpp2_ext(): [
        boolean,
        number,
        number,
        NasNetworkDescriptionDisplay,
        NasNetworkDescriptionEncoding,
        Uint8Array
    ];

    get_home_network_3gpp_mnc(): [boolean, boolean, boolean];

    get_home_system_id(): [boolean, number, number];

    get_network_name_source(): [boolean, NasNetworkNameSource];

    get_result(): boolean;

    ref(): MessageNasGetHomeNetworkOutput;

    unref(): void;
}

export class MessageNasGetLteCphyCaInfoOutput {
    static $gtype: GObject.GType<MessageNasGetLteCphyCaInfoOutput>;

    constructor(copy: MessageNasGetLteCphyCaInfoOutput);

    // Members
    get_dl_bandwidth(): [boolean, NasDLBandwidth];

    get_phy_ca_agg_pcell_info(): [boolean, number, number, NasDLBandwidth, NasActiveBand];

    get_phy_ca_agg_scell_info(): [boolean, number, number, NasDLBandwidth, NasActiveBand, NasScellState];

    get_phy_ca_agg_secondary_cells(): [boolean, MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc[]];

    get_result(): boolean;

    get_scell_index(): [boolean, number];

    ref(): MessageNasGetLteCphyCaInfoOutput;

    unref(): void;
}

export class MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc {
    static $gtype: GObject.GType<MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc>;

    constructor(copy: MessageNasGetLteCphyCaInfoOutputPhyCaAggSecondaryCellsSsc);

    // Fields
    physical_cell_id: number;
    rx_channel: number;
    dl_bandwidth: NasDLBandwidth;
    lte_band: NasActiveBand;
    state: NasScellState;
    cell_index: number;
}

export class MessageNasGetOperatorNameOutput {
    static $gtype: GObject.GType<MessageNasGetOperatorNameOutput>;

    constructor(copy: MessageNasGetOperatorNameOutput);

    // Members
    get_nitz_information(): [
        boolean,
        NasPlmnEncodingScheme,
        NasPlmnNameCountryInitials,
        NasPlmnNameSpareBits,
        NasPlmnNameSpareBits,
        Uint8Array,
        Uint8Array
    ];

    get_operator_nitz_information(
        value_operator_nitz_information_name_encoding: NasPlmnEncodingScheme,
        value_operator_nitz_information_short_country_initials: NasPlmnNameCountryInitials,
        value_operator_nitz_information_long_name_spare_bits: NasPlmnNameSpareBits,
        value_operator_nitz_information_short_name_spare_bits: NasPlmnNameSpareBits,
        value_operator_nitz_information_long_name: string,
        value_operator_nitz_information_short_name: string
    ): boolean;

    get_operator_plmn_list(): [boolean, MessageNasGetOperatorNameOutputOperatorPlmnListElement[]];

    get_operator_plmn_name(): [boolean, MessageNasGetOperatorNameOutputOperatorPlmnNameElement[]];

    get_operator_string_name(): [boolean, string];

    get_result(): boolean;

    get_service_provider_name(): [boolean, NasNetworkNameDisplayCondition, string];

    ref(): MessageNasGetOperatorNameOutput;

    unref(): void;
}

export class MessageNasGetOperatorNameOutputOperatorPlmnListElement {
    static $gtype: GObject.GType<MessageNasGetOperatorNameOutputOperatorPlmnListElement>;

    constructor(
        properties?: Partial<{
            mcc?: string;
            mnc?: string;
            lac1?: number;
            lac2?: number;
            plmn_name_record_identifier?: number;
        }>
    );
    constructor(copy: MessageNasGetOperatorNameOutputOperatorPlmnListElement);

    // Fields
    mcc: string;
    mnc: string;
    lac1: number;
    lac2: number;
    plmn_name_record_identifier: number;
}

export class MessageNasGetOperatorNameOutputOperatorPlmnNameElement {
    static $gtype: GObject.GType<MessageNasGetOperatorNameOutputOperatorPlmnNameElement>;

    constructor(copy: MessageNasGetOperatorNameOutputOperatorPlmnNameElement);

    // Fields
    name_encoding: NasPlmnEncodingScheme;
    short_country_initials: NasPlmnNameCountryInitials;
    long_name_spare_bits: NasPlmnNameSpareBits;
    short_name_spare_bits: NasPlmnNameSpareBits;
    long_name: any[];
    short_name: any[];
}

export class MessageNasGetRfBandInformationOutput {
    static $gtype: GObject.GType<MessageNasGetRfBandInformationOutput>;

    constructor(copy: MessageNasGetRfBandInformationOutput);

    // Members
    get_bandwidth_list(): [boolean, MessageNasGetRfBandInformationOutputBandwidthListElement[]];

    get_extended_list(): [boolean, MessageNasGetRfBandInformationOutputExtendedListElement[]];

    get_list(): [boolean, MessageNasGetRfBandInformationOutputListElement[]];

    get_result(): boolean;

    ref(): MessageNasGetRfBandInformationOutput;

    unref(): void;
}

export class MessageNasGetRfBandInformationOutputBandwidthListElement {
    static $gtype: GObject.GType<MessageNasGetRfBandInformationOutputBandwidthListElement>;

    constructor(copy: MessageNasGetRfBandInformationOutputBandwidthListElement);

    // Fields
    radio_interface: NasRadioInterface;
    bandwidth: NasDLBandwidth;
}

export class MessageNasGetRfBandInformationOutputExtendedListElement {
    static $gtype: GObject.GType<MessageNasGetRfBandInformationOutputExtendedListElement>;

    constructor(copy: MessageNasGetRfBandInformationOutputExtendedListElement);

    // Fields
    radio_interface: NasRadioInterface;
    active_band_class: NasActiveBand;
    active_channel: number;
}

export class MessageNasGetRfBandInformationOutputListElement {
    static $gtype: GObject.GType<MessageNasGetRfBandInformationOutputListElement>;

    constructor(copy: MessageNasGetRfBandInformationOutputListElement);

    // Fields
    radio_interface: NasRadioInterface;
    active_band_class: NasActiveBand;
    active_channel: number;
}

export class MessageNasGetServingSystemOutput {
    static $gtype: GObject.GType<MessageNasGetServingSystemOutput>;

    constructor(copy: MessageNasGetServingSystemOutput);

    // Members
    get_call_barring_status(): [boolean, NasCallBarringStatus, NasCallBarringStatus];

    get_cdma_base_station_info(): [boolean, number, number, number];

    get_cdma_p_rev(): [boolean, number];

    get_cdma_system_id(): [boolean, number, number];

    get_cdma_system_info(): [boolean, number, number];

    get_cid_3gpp(): [boolean, number];

    get_concurrent_service_info_3gpp2(): [boolean, boolean];

    get_current_plmn(): [boolean, number, number, string];

    get_data_service_capability(): [boolean, NasDataCapability[]];

    get_daylight_saving_time_adjustment_3gpp(): [boolean, number];

    get_default_roaming_indicator(): [boolean, NasRoamingIndicatorStatus];

    get_detailed_service_status(): [
        boolean,
        NasServiceStatus,
        NasNetworkServiceDomain,
        NasServiceStatus,
        boolean,
        boolean
    ];

    get_dtm_support(): [boolean, boolean];

    get_hdr_personality(): [boolean, NasHdrPersonality];

    get_lac_3gpp(): [boolean, number];

    get_lte_tac(): [boolean, number];

    get_mnc_pcs_digit_include_status(): [boolean, number, number, boolean];

    get_network_name_source(): [boolean, NasNetworkNameSource];

    get_prl_indicator_3gpp2(): [boolean, boolean];

    get_result(): boolean;

    get_roaming_indicator(): [boolean, NasRoamingIndicatorStatus];

    get_roaming_indicator_list(): [boolean, MessageNasGetServingSystemOutputRoamingIndicatorListElement[]];

    get_serving_system(): [
        boolean,
        NasRegistrationState,
        NasAttachState,
        NasAttachState,
        NasNetworkType,
        NasRadioInterface[]
    ];

    get_time_zone_3gpp(): [boolean, number];

    get_time_zone_3gpp2(): [boolean, number, number, boolean];

    get_umts_primary_scrambling_code(): [boolean, number];

    ref(): MessageNasGetServingSystemOutput;

    unref(): void;
}

export class MessageNasGetServingSystemOutputRoamingIndicatorListElement {
    static $gtype: GObject.GType<MessageNasGetServingSystemOutputRoamingIndicatorListElement>;

    constructor(copy: MessageNasGetServingSystemOutputRoamingIndicatorListElement);

    // Fields
    radio_interface: NasRadioInterface;
    roaming_indicator: NasRoamingIndicatorStatus;
}

export class MessageNasGetSignalInfoOutput {
    static $gtype: GObject.GType<MessageNasGetSignalInfoOutput>;

    constructor(copy: MessageNasGetSignalInfoOutput);

    // Members
    get_5g_signal_strength(): [boolean, number, number];

    get_5g_signal_strength_extended(): [boolean, number];

    get_cdma_signal_strength(): [boolean, number, number];

    get_gsm_signal_strength(): [boolean, number];

    get_hdr_signal_strength(): [boolean, number, number, NasEvdoSinrLevel, number];

    get_lte_signal_strength(): [boolean, number, number, number, number];

    get_result(): boolean;

    get_tdma_signal_strength(): [boolean, number];

    get_tdma_signal_strength_extended(): [boolean, number, number, number, number];

    get_wcdma_signal_strength(): [boolean, number, number];

    ref(): MessageNasGetSignalInfoOutput;

    unref(): void;
}

export class MessageNasGetSignalStrengthInput {
    static $gtype: GObject.GType<MessageNasGetSignalStrengthInput>;

    constructor();
    constructor(copy: MessageNasGetSignalStrengthInput);

    // Constructors
    static ["new"](): MessageNasGetSignalStrengthInput;

    // Members
    get_request_mask(): [boolean, NasSignalStrengthRequest];

    ref(): MessageNasGetSignalStrengthInput;

    set_request_mask(value_request_mask: NasSignalStrengthRequest): boolean;

    unref(): void;
}

export class MessageNasGetSignalStrengthOutput {
    static $gtype: GObject.GType<MessageNasGetSignalStrengthOutput>;

    constructor(copy: MessageNasGetSignalStrengthOutput);

    // Members
    get_ecio_list(): [boolean, MessageNasGetSignalStrengthOutputEcioListElement[]];

    get_error_rate_list(): [boolean, MessageNasGetSignalStrengthOutputErrorRateListElement[]];

    get_io(): [boolean, number];

    get_lte_rsrp(): [boolean, number];

    get_lte_snr(): [boolean, number];

    get_result(): boolean;

    get_rsrq(): [boolean, number, NasRadioInterface];

    get_rssi_list(): [boolean, MessageNasGetSignalStrengthOutputRssiListElement[]];

    get_signal_strength(): [boolean, number, NasRadioInterface];

    get_sinr(): [boolean, NasEvdoSinrLevel];

    get_strength_list(): [boolean, MessageNasGetSignalStrengthOutputStrengthListElement[]];

    ref(): MessageNasGetSignalStrengthOutput;

    unref(): void;
}

export class MessageNasGetSignalStrengthOutputEcioListElement {
    static $gtype: GObject.GType<MessageNasGetSignalStrengthOutputEcioListElement>;

    constructor(copy: MessageNasGetSignalStrengthOutputEcioListElement);

    // Fields
    ecio: number;
    radio_interface: NasRadioInterface;
}

export class MessageNasGetSignalStrengthOutputErrorRateListElement {
    static $gtype: GObject.GType<MessageNasGetSignalStrengthOutputErrorRateListElement>;

    constructor(copy: MessageNasGetSignalStrengthOutputErrorRateListElement);

    // Fields
    rate: number;
    radio_interface: NasRadioInterface;
}

export class MessageNasGetSignalStrengthOutputRssiListElement {
    static $gtype: GObject.GType<MessageNasGetSignalStrengthOutputRssiListElement>;

    constructor(copy: MessageNasGetSignalStrengthOutputRssiListElement);

    // Fields
    rssi: number;
    radio_interface: NasRadioInterface;
}

export class MessageNasGetSignalStrengthOutputStrengthListElement {
    static $gtype: GObject.GType<MessageNasGetSignalStrengthOutputStrengthListElement>;

    constructor(copy: MessageNasGetSignalStrengthOutputStrengthListElement);

    // Fields
    strength: number;
    radio_interface: NasRadioInterface;
}

export class MessageNasGetSupportedMessagesOutput {
    static $gtype: GObject.GType<MessageNasGetSupportedMessagesOutput>;

    constructor(copy: MessageNasGetSupportedMessagesOutput);

    // Members
    get_list(): [boolean, Uint8Array];

    get_result(): boolean;

    ref(): MessageNasGetSupportedMessagesOutput;

    unref(): void;
}

export class MessageNasGetSystemInfoOutput {
    static $gtype: GObject.GType<MessageNasGetSystemInfoOutput>;

    constructor(copy: MessageNasGetSystemInfoOutput);

    // Members
    get_additional_cdma_system_info(): [boolean, number, number];

    get_additional_gsm_system_info(): [boolean, number, NasCellBroadcastCapability];

    get_additional_hdr_system_info(): [boolean, number];

    get_additional_lte_system_info(): [boolean, number];

    get_additional_wcdma_system_info(): [boolean, number, NasCellBroadcastCapability];

    get_cdma_service_status(): [boolean, NasServiceStatus, boolean];

    get_cdma_system_info(): [
        boolean,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasRoamingStatus,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        number,
        boolean,
        number,
        boolean,
        boolean,
        boolean,
        number,
        number,
        boolean,
        number,
        number,
        number,
        boolean,
        number,
        boolean,
        string,
        string
    ];

    get_gsm_call_barring_status(): [boolean, NasCallBarringStatus, NasCallBarringStatus];

    get_gsm_cipher_domain(): [boolean, NasNetworkServiceDomain];

    get_gsm_service_status(): [boolean, NasServiceStatus, NasServiceStatus, boolean];

    get_gsm_system_info(): [
        boolean,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasRoamingStatus,
        boolean,
        boolean,
        boolean,
        number,
        boolean,
        number,
        boolean,
        NasNetworkServiceDomain,
        number,
        boolean,
        string,
        string,
        boolean,
        boolean,
        boolean,
        boolean
    ];

    get_hdr_service_status(): [boolean, NasServiceStatus, boolean];

    get_hdr_system_info(): [
        boolean,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasRoamingStatus,
        boolean,
        boolean,
        boolean,
        boolean,
        boolean,
        NasHdrPersonality,
        boolean,
        NasHdrProtocolRevision,
        boolean,
        string
    ];

    get_ims_voice_support(): [boolean, boolean];

    get_lte_cell_access_status(): [boolean, NasLteCellAccessStatus];

    get_lte_embms_coverage_info_support(): [boolean, boolean];

    get_lte_embms_coverage_info_trace_id(): [boolean, number];

    get_lte_registration_domain(): [boolean, NasLteRegistrationDomain];

    get_lte_service_status(): [boolean, NasServiceStatus, NasServiceStatus, boolean];

    get_lte_system_info(): [
        boolean,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasRoamingStatus,
        boolean,
        boolean,
        boolean,
        number,
        boolean,
        number,
        boolean,
        NasNetworkServiceDomain,
        number,
        boolean,
        string,
        string,
        boolean,
        number
    ];

    get_lte_voice_support(): [boolean, boolean];

    get_network_selection_registration_restriction(): [boolean, NasNetworkSelectionRegistrationRestriction];

    get_result(): boolean;

    get_sim_reject_info(): [boolean, NasSimRejectState];

    get_td_scdma_service_status(): [boolean, NasServiceStatus, NasServiceStatus, boolean];

    get_td_scdma_system_info(): [
        boolean,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasRoamingStatus,
        boolean,
        boolean,
        boolean,
        number,
        boolean,
        number,
        boolean,
        NasNetworkServiceDomain,
        number,
        boolean,
        string,
        string,
        boolean,
        NasWcdmaHsService,
        boolean,
        NasWcdmaHsService,
        boolean,
        number,
        boolean,
        NasCellBroadcastCapability,
        boolean,
        NasCallBarringStatus,
        boolean,
        NasCallBarringStatus,
        boolean,
        NasNetworkServiceDomain
    ];

    get_wcdma_call_barring_status(): [boolean, NasCallBarringStatus, NasCallBarringStatus];

    get_wcdma_cipher_domain(): [boolean, NasNetworkServiceDomain];

    get_wcdma_service_status(): [boolean, NasServiceStatus, NasServiceStatus, boolean];

    get_wcdma_system_info(): [
        boolean,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasNetworkServiceDomain,
        boolean,
        NasRoamingStatus,
        boolean,
        boolean,
        boolean,
        number,
        boolean,
        number,
        boolean,
        NasNetworkServiceDomain,
        number,
        boolean,
        string,
        string,
        boolean,
        NasWcdmaHsService,
        boolean,
        NasWcdmaHsService,
        boolean,
        number
    ];

    ref(): MessageNasGetSystemInfoOutput;

    unref(): void;
}

export class MessageNasGetSystemSelectionPreferenceOutput {
    static $gtype: GObject.GType<MessageNasGetSystemSelectionPreferenceOutput>;

    constructor(copy: MessageNasGetSystemSelectionPreferenceOutput);

    // Members
    get_acquisition_order_preference(): [boolean, NasRadioInterface[]];

    get_band_preference(): [boolean, NasBandPreference];

    get_cdma_prl_preference(): [boolean, NasCdmaPrlPreference];

    get_disabled_modes(): [boolean, NasRatModePreference];

    get_emergency_mode(): [boolean, boolean];

    get_extended_lte_band_preference(): [boolean, number, number, number, number];

    get_gsm_wcdma_acquisition_order_preference(): [boolean, NasGsmWcdmaAcquisitionOrderPreference];

    get_lte_band_preference(): [boolean, NasLteBandPreference];

    get_manual_network_selection(): [boolean, number, number, boolean];

    get_mode_preference(): [boolean, NasRatModePreference];

    get_network_selection_preference(): [boolean, NasNetworkSelectionPreference];

    get_network_selection_registration_restriction(): [boolean, NasNetworkSelectionRegistrationRestriction];

    get_result(): boolean;

    get_roaming_preference(): [boolean, NasRoamingPreference];

    get_service_domain_preference(): [boolean, NasServiceDomainPreference];

    get_td_scdma_band_preference(): [boolean, NasTdScdmaBandPreference];

    get_usage_preference(): [boolean, NasUsagePreference];

    get_voice_domain_preference(): [boolean, NasVoiceDomainPreference];

    ref(): MessageNasGetSystemSelectionPreferenceOutput;

    unref(): void;
}

export class MessageNasGetTechnologyPreferenceOutput {
    static $gtype: GObject.GType<MessageNasGetTechnologyPreferenceOutput>;

    constructor(copy: MessageNasGetTechnologyPreferenceOutput);

    // Members
    get_active(): [boolean, NasRadioTechnologyPreference, NasPreferenceDuration];

    get_persistent(): [boolean, NasRadioTechnologyPreference];

    get_result(): boolean;

    ref(): MessageNasGetTechnologyPreferenceOutput;

    unref(): void;
}

export class MessageNasGetTxRxInfoInput {
    static $gtype: GObject.GType<MessageNasGetTxRxInfoInput>;

    constructor();
    constructor(copy: MessageNasGetTxRxInfoInput);

    // Constructors
    static ["new"](): MessageNasGetTxRxInfoInput;

    // Members
    get_radio_interface(): [boolean, NasRadioInterface];

    ref(): MessageNasGetTxRxInfoInput;

    set_radio_interface(value_radio_interface: NasRadioInterface): boolean;

    unref(): void;
}

export class MessageNasGetTxRxInfoOutput {
    static $gtype: GObject.GType<MessageNasGetTxRxInfoOutput>;

    constructor(copy: MessageNasGetTxRxInfoOutput);

    // Members
    get_result(): boolean;

    get_rx_chain_0_info(): [boolean, boolean, number, number, number, number, number];

    get_rx_chain_1_info(): [boolean, boolean, number, number, number, number, number];

    get_tx_info(): [boolean, boolean, number];

    ref(): MessageNasGetTxRxInfoOutput;

    unref(): void;
}

export class MessageNasInitiateNetworkRegisterInput {
    static $gtype: GObject.GType<MessageNasInitiateNetworkRegisterInput>;

    constructor();
    constructor(copy: MessageNasInitiateNetworkRegisterInput);

    // Constructors
    static ["new"](): MessageNasInitiateNetworkRegisterInput;

    // Members
    get_action(): [boolean, NasNetworkRegisterType];

    get_change_duration(): [boolean, NasChangeDuration];

    get_manual_registration_info_3gpp(): [boolean, number, number, NasRadioInterface];

    get_mnc_pcs_digit_include_status(): [boolean, boolean];

    ref(): MessageNasInitiateNetworkRegisterInput;

    set_action(value_action: NasNetworkRegisterType): boolean;

    set_change_duration(value_change_duration: NasChangeDuration): boolean;

    set_manual_registration_info_3gpp(
        value_manual_registration_info_3gpp_mcc: number,
        value_manual_registration_info_3gpp_mnc: number,
        value_manual_registration_info_3gpp_radio_interface: NasRadioInterface
    ): boolean;

    set_mnc_pcs_digit_include_status(value_mnc_pcs_digit_include_status: boolean): boolean;

    unref(): void;
}

export class MessageNasInitiateNetworkRegisterOutput {
    static $gtype: GObject.GType<MessageNasInitiateNetworkRegisterOutput>;

    constructor(copy: MessageNasInitiateNetworkRegisterOutput);

    // Members
    get_result(): boolean;

    ref(): MessageNasInitiateNetworkRegisterOutput;

    unref(): void;
}

export class MessageNasNetworkScanInput {
    static $gtype: GObject.GType<MessageNasNetworkScanInput>;

    constructor();
    constructor(copy: MessageNasNetworkScanInput);

    // Constructors
    static ["new"](): MessageNasNetworkScanInput;

    // Members
    get_network_type(): [boolean, NasNetworkScanType];

    ref(): MessageNasNetworkScanInput;

    set_network_type(value_network_type: NasNetworkScanType): boolean;

    unref(): void;
}

export class MessageNasNetworkScanOutput {
    static $gtype: GObject.GType<MessageNasNetworkScanOutput>;

    constructor(copy: MessageNasNetworkScanOutput);

    // Members
    get_mnc_pcs_digit_include_status(): [boolean, MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement[]];

    get_network_information(): [boolean, MessageNasNetworkScanOutputNetworkInformationElement[]];

    get_network_scan_result(): [boolean, NasNetworkScanResult];

    get_radio_access_technology(): [boolean, MessageNasNetworkScanOutputRadioAccessTechnologyElement[]];

    get_result(): boolean;

    ref(): MessageNasNetworkScanOutput;

    unref(): void;
}

export class MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement {
    static $gtype: GObject.GType<MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement>;

    constructor(
        properties?: Partial<{
            mcc?: number;
            mnc?: number;
            includes_pcs_digit?: boolean;
        }>
    );
    constructor(copy: MessageNasNetworkScanOutputMncPcsDigitIncludeStatusElement);

    // Fields
    mcc: number;
    mnc: number;
    includes_pcs_digit: boolean;
}

export class MessageNasNetworkScanOutputNetworkInformationElement {
    static $gtype: GObject.GType<MessageNasNetworkScanOutputNetworkInformationElement>;

    constructor(copy: MessageNasNetworkScanOutputNetworkInformationElement);

    // Fields
    mcc: number;
    mnc: number;
    network_status: NasNetworkStatus;
    description: string;
}

export class MessageNasNetworkScanOutputRadioAccessTechnologyElement {
    static $gtype: GObject.GType<MessageNasNetworkScanOutputRadioAccessTechnologyElement>;

    constructor(copy: MessageNasNetworkScanOutputRadioAccessTechnologyElement);

    // Fields
    mcc: number;
    mnc: number;
    radio_interface: NasRadioInterface;
}

export class MessageNasRegisterIndicationsInput {
    static $gtype: GObject.GType<MessageNasRegisterIndicationsInput>;

    constructor();
    constructor(copy: MessageNasRegisterIndicationsInput);

    // Constructors
    static ["new"](): MessageNasRegisterIndicationsInput;

    // Members
    get_current_plmn_name(): [boolean, boolean];

    get_ddtm_events(): [boolean, boolean];

    get_dual_standby_preference(): [boolean, boolean];

    get_embms_status(): [boolean, boolean];

    get_error_rate(): [boolean, boolean];

    get_hdr_new_uati_assigned(): [boolean, boolean];

    get_hdr_session_closed(): [boolean, boolean];

    get_managed_roaming(): [boolean, boolean];

    get_network_time(): [boolean, boolean];

    get_rf_band_information(): [boolean, boolean];

    get_serving_system_events(): [boolean, boolean];

    get_signal_info(): [boolean, boolean];

    get_subscription_info(): [boolean, boolean];

    get_system_info(): [boolean, boolean];

    get_system_selection_preference(): [boolean, boolean];

    ref(): MessageNasRegisterIndicationsInput;

    set_current_plmn_name(value_current_plmn_name: boolean): boolean;

    set_ddtm_events(value_ddtm_events: boolean): boolean;

    set_dual_standby_preference(value_dual_standby_preference: boolean): boolean;

    set_embms_status(value_embms_status: boolean): boolean;

    set_error_rate(value_error_rate: boolean): boolean;

    set_hdr_new_uati_assigned(value_hdr_new_uati_assigned: boolean): boolean;

    set_hdr_session_closed(value_hdr_session_closed: boolean): boolean;

    set_managed_roaming(value_managed_roaming: boolean): boolean;

    set_network_time(value_network_time: boolean): boolean;

    set_rf_band_information(value_rf_band_information: boolean): boolean;

    set_serving_system_events(value_serving_system_events: boolean): boolean;

    set_signal_info(value_signal_info: boolean): boolean;

    set_subscription_info(value_subscription_info: boolean): boolean;

    set_system_info(value_system_info: boolean): boolean;

    set_system_selection_preference(value_system_selection_preference: boolean): boolean;

    unref(): void;
}

export class MessageNasRegisterIndicationsOutput {
    static $gtype: GObject.GType<MessageNasRegisterIndicationsOutput>;

    constructor(copy: MessageNasRegisterIndicationsOutput);

    // Members
    get_result(): boolean;

    ref(): MessageNasRegisterIndicationsOutput;

    unref(): void;
}

export class MessageNasResetOutput {
    static $gtype: GObject.GType<MessageNasResetOutput>;

    constructor(copy: MessageNasResetOutput);

    // Members
    get_result(): boolean;

    ref(): MessageNasResetOutput;

    unref(): void;
}

export class MessageNasSetEventReportInput {
    static $gtype: GObject.GType<MessageNasSetEventReportInput>;

    constructor();
    constructor(copy: MessageNasSetEventReportInput);

    // Constructors
    static ["new"](): MessageNasSetEventReportInput;

    // Members
    get_ecio_indicator(): [boolean, boolean, number];

    get_ecio_threshold(): [boolean, boolean, number[]];

    get_error_rate_indicator(): [boolean, boolean];

    get_io_indicator(): [boolean, boolean, number];

    get_lte_rsrp_delta(): [boolean, boolean, number];

    get_lte_snr_delta(): [boolean, boolean, number];

    get_registration_reject_reason(): [boolean, boolean];

    get_rf_band_information(): [boolean, boolean];

    get_rssi_indicator(): [boolean, boolean, number];

    get_signal_strength_indicator(): [boolean, boolean, Uint8Array];

    get_sinr_indicator(): [boolean, boolean, number];

    get_sinr_threshold(): [boolean, boolean, Uint8Array];

    ref(): MessageNasSetEventReportInput;

    set_ecio_indicator(value_ecio_indicator_report: boolean, value_ecio_indicator_ecio_delta: number): boolean;

    set_ecio_threshold(value_ecio_threshold_report: boolean, value_ecio_threshold_thresholds: number[]): boolean;

    set_error_rate_indicator(value_error_rate_indicator: boolean): boolean;

    set_io_indicator(value_io_indicator_report: boolean, value_io_indicator_io_delta: number): boolean;

    set_lte_rsrp_delta(value_lte_rsrp_delta_report: boolean, value_lte_rsrp_delta_rsrp_delta: number): boolean;

    set_lte_snr_delta(value_lte_snr_delta_report: boolean, value_lte_snr_delta_snr_delta: number): boolean;

    set_registration_reject_reason(value_registration_reject_reason: boolean): boolean;

    set_rf_band_information(value_rf_band_information: boolean): boolean;

    set_rssi_indicator(value_rssi_indicator_report: boolean, value_rssi_indicator_rssi_delta: number): boolean;

    set_signal_strength_indicator(
        value_signal_strength_indicator_report: boolean,
        value_signal_strength_indicator_thresholds: Uint8Array | string
    ): boolean;

    set_sinr_indicator(value_sinr_indicator_report: boolean, value_sinr_indicator_sinr_delta: number): boolean;

    set_sinr_threshold(
        value_sinr_threshold_report: boolean,
        value_sinr_threshold_thresholds: Uint8Array | string
    ): boolean;

    unref(): void;
}

export class MessageNasSetEventReportOutput {
    static $gtype: GObject.GType<MessageNasSetEventReportOutput>;

    constructor(copy: MessageNasSetEventReportOutput);

    // Members
    get_result(): boolean;

    ref(): MessageNasSetEventReportOutput;

    unref(): void;
}

export class MessageNasSetSystemSelectionPreferenceInput {
    static $gtype: GObject.GType<MessageNasSetSystemSelectionPreferenceInput>;

    constructor();
    constructor(copy: MessageNasSetSystemSelectionPreferenceInput);

    // Constructors
    static ["new"](): MessageNasSetSystemSelectionPreferenceInput;

    // Members
    get_acquisition_order_preference(): [boolean, NasRadioInterface[]];

    get_band_preference(): [boolean, NasBandPreference];

    get_cdma_prl_preference(): [boolean, NasCdmaPrlPreference];

    get_change_duration(): [boolean, NasChangeDuration];

    get_emergency_mode(): [boolean, boolean];

    get_extended_lte_band_preference(): [boolean, number, number, number, number];

    get_gsm_wcdma_acquisition_order_preference(): [boolean, NasGsmWcdmaAcquisitionOrderPreference];

    get_lte_band_preference(): [boolean, NasLteBandPreference];

    get_mnc_pds_digit_include_status(): [boolean, boolean];

    get_mode_preference(): [boolean, NasRatModePreference];

    get_network_selection_preference(): [boolean, NasNetworkSelectionPreference, number, number];

    get_network_selection_registration_restriction(): [boolean, NasNetworkSelectionRegistrationRestriction];

    get_roaming_preference(): [boolean, NasRoamingPreference];

    get_service_domain_preference(): [boolean, NasServiceDomainPreference];

    get_td_scdma_band_preference(): [boolean, NasTdScdmaBandPreference];

    get_usage_preference(): [boolean, NasUsagePreference];

    get_voice_domain_preference(): [boolean, NasVoiceDomainPreference];

    ref(): MessageNasSetSystemSelectionPreferenceInput;

    set_acquisition_order_preference(value_acquisition_order_preference: NasRadioInterface[]): boolean;

    set_band_preference(value_band_preference: NasBandPreference): boolean;

    set_cdma_prl_preference(value_cdma_prl_preference: NasCdmaPrlPreference): boolean;

    set_change_duration(value_change_duration: NasChangeDuration): boolean;

    set_emergency_mode(value_emergency_mode: boolean): boolean;

    set_extended_lte_band_preference(
        value_extended_lte_band_preference_mask_low: number,
        value_extended_lte_band_preference_mask_mid_low: number,
        value_extended_lte_band_preference_mask_mid_high: number,
        value_extended_lte_band_preference_mask_high: number
    ): boolean;

    set_gsm_wcdma_acquisition_order_preference(
        value_gsm_wcdma_acquisition_order_preference: NasGsmWcdmaAcquisitionOrderPreference
    ): boolean;

    set_lte_band_preference(value_lte_band_preference: NasLteBandPreference): boolean;

    set_mnc_pds_digit_include_status(value_mnc_pds_digit_include_status: boolean): boolean;

    set_mode_preference(value_mode_preference: NasRatModePreference): boolean;

    set_network_selection_preference(
        value_network_selection_preference_mode: NasNetworkSelectionPreference,
        value_network_selection_preference_mcc: number,
        value_network_selection_preference_mnc: number
    ): boolean;

    set_network_selection_registration_restriction(
        value_network_selection_registration_restriction: NasNetworkSelectionRegistrationRestriction
    ): boolean;

    set_roaming_preference(value_roaming_preference: NasRoamingPreference): boolean;

    set_service_domain_preference(value_service_domain_preference: NasServiceDomainPreference): boolean;

    set_td_scdma_band_preference(value_td_scdma_band_preference: NasTdScdmaBandPreference): boolean;

    set_usage_preference(value_usage_preference: NasUsagePreference): boolean;

    set_voice_domain_preference(value_voice_domain_preference: NasVoiceDomainPreference): boolean;

    unref(): void;
}

export class MessageNasSetSystemSelectionPreferenceOutput {
    static $gtype: GObject.GType<MessageNasSetSystemSelectionPreferenceOutput>;

    constructor(copy: MessageNasSetSystemSelectionPreferenceOutput);

    // Members
    get_result(): boolean;

    ref(): MessageNasSetSystemSelectionPreferenceOutput;

    unref(): void;
}

export class MessageNasSetTechnologyPreferenceInput {
    static $gtype: GObject.GType<MessageNasSetTechnologyPreferenceInput>;

    constructor();
    constructor(copy: MessageNasSetTechnologyPreferenceInput);

    // Constructors
    static ["new"](): MessageNasSetTechnologyPreferenceInput;

    // Members
    get_current(): [boolean, NasRadioTechnologyPreference, NasPreferenceDuration];

    ref(): MessageNasSetTechnologyPreferenceInput;

    set_current(
        value_current_technology_preference: NasRadioTechnologyPreference,
        value_current_technology_preference_duration: NasPreferenceDuration
    ): boolean;

    unref(): void;
}

export class MessageNasSetTechnologyPreferenceOutput {
    static $gtype: GObject.GType<MessageNasSetTechnologyPreferenceOutput>;

    constructor(copy: MessageNasSetTechnologyPreferenceOutput);

    // Members
    get_result(): boolean;

    ref(): MessageNasSetTechnologyPreferenceOutput;

    unref(): void;
}

export class MessageNasSwiGetStatusOutput {
    static $gtype: GObject.GType<MessageNasSwiGetStatusOutput>;

    constructor(copy: MessageNasSwiGetStatusOutput);

    // Members
    get_common_info(): [boolean, number, NasSwiModemMode, NasSwiSystemMode, NasSwiImsRegState, NasSwiPsState];

    get_lte_info(): [
        boolean,
        NasActiveBand,
        NasDLBandwidth,
        number,
        number,
        NasSwiEmmState,
        number,
        NasSwiEmmConnectionState
    ];

    get_result(): boolean;

    ref(): MessageNasSwiGetStatusOutput;

    unref(): void;
}

export class MessageOmaCancelSessionOutput {
    static $gtype: GObject.GType<MessageOmaCancelSessionOutput>;

    constructor(copy: MessageOmaCancelSessionOutput);

    // Members
    get_result(): boolean;

    ref(): MessageOmaCancelSessionOutput;

    unref(): void;
}

export class MessageOmaGetFeatureSettingOutput {
    static $gtype: GObject.GType<MessageOmaGetFeatureSettingOutput>;

    constructor(copy: MessageOmaGetFeatureSettingOutput);

    // Members
    get_device_provisioning_service_update_config(): [boolean, boolean];

    get_hfa_feature_config(): [boolean, boolean];

    get_hfa_feature_done_state(): [boolean, OmaHfaFeatureDoneState];

    get_prl_update_service_config(): [boolean, boolean];

    get_result(): boolean;

    ref(): MessageOmaGetFeatureSettingOutput;

    unref(): void;
}

export class MessageOmaGetSessionInfoOutput {
    static $gtype: GObject.GType<MessageOmaGetSessionInfoOutput>;

    constructor(copy: MessageOmaGetSessionInfoOutput);

    // Members
    get_network_initiated_alert(): [boolean, OmaSessionType, number];

    get_result(): boolean;

    get_retry_info(): [boolean, number, number, number];

    get_session_failed_reason(): [boolean, OmaSessionFailedReason];

    get_session_info(): [boolean, OmaSessionState, OmaSessionType];

    ref(): MessageOmaGetSessionInfoOutput;

    unref(): void;
}

export class MessageOmaResetOutput {
    static $gtype: GObject.GType<MessageOmaResetOutput>;

    constructor(copy: MessageOmaResetOutput);

    // Members
    get_result(): boolean;

    ref(): MessageOmaResetOutput;

    unref(): void;
}

export class MessageOmaSendSelectionInput {
    static $gtype: GObject.GType<MessageOmaSendSelectionInput>;

    constructor();
    constructor(copy: MessageOmaSendSelectionInput);

    // Constructors
    static ["new"](): MessageOmaSendSelectionInput;

    // Members
    get_network_initiated_alert_selection(): [boolean, boolean, number];

    ref(): MessageOmaSendSelectionInput;

    set_network_initiated_alert_selection(
        value_network_initiated_alert_selection_control_point_selection_accept: boolean,
        value_network_initiated_alert_selection_session_id: number
    ): boolean;

    unref(): void;
}

export class MessageOmaSendSelectionOutput {
    static $gtype: GObject.GType<MessageOmaSendSelectionOutput>;

    constructor(copy: MessageOmaSendSelectionOutput);

    // Members
    get_result(): boolean;

    ref(): MessageOmaSendSelectionOutput;

    unref(): void;
}

export class MessageOmaSetEventReportInput {
    static $gtype: GObject.GType<MessageOmaSetEventReportInput>;

    constructor();
    constructor(copy: MessageOmaSetEventReportInput);

    // Constructors
    static ["new"](): MessageOmaSetEventReportInput;

    // Members
    get_network_initiated_alert_reporting(): [boolean, boolean];

    get_session_state_reporting(): [boolean, boolean];

    ref(): MessageOmaSetEventReportInput;

    set_network_initiated_alert_reporting(value_network_initiated_alert_reporting: boolean): boolean;

    set_session_state_reporting(value_session_state_reporting: boolean): boolean;

    unref(): void;
}

export class MessageOmaSetEventReportOutput {
    static $gtype: GObject.GType<MessageOmaSetEventReportOutput>;

    constructor(copy: MessageOmaSetEventReportOutput);

    // Members
    get_result(): boolean;

    ref(): MessageOmaSetEventReportOutput;

    unref(): void;
}

export class MessageOmaSetFeatureSettingInput {
    static $gtype: GObject.GType<MessageOmaSetFeatureSettingInput>;

    constructor();
    constructor(copy: MessageOmaSetFeatureSettingInput);

    // Constructors
    static ["new"](): MessageOmaSetFeatureSettingInput;

    // Members
    get_device_provisioning_service_update_config(): [boolean, boolean];

    get_hfa_feature_config(): [boolean, boolean];

    get_prl_update_service_config(): [boolean, boolean];

    ref(): MessageOmaSetFeatureSettingInput;

    set_device_provisioning_service_update_config(value_device_provisioning_service_update_config: boolean): boolean;

    set_hfa_feature_config(value_hfa_feature_config: boolean): boolean;

    set_prl_update_service_config(value_prl_update_service_config: boolean): boolean;

    unref(): void;
}

export class MessageOmaSetFeatureSettingOutput {
    static $gtype: GObject.GType<MessageOmaSetFeatureSettingOutput>;

    constructor(copy: MessageOmaSetFeatureSettingOutput);

    // Members
    get_result(): boolean;

    ref(): MessageOmaSetFeatureSettingOutput;

    unref(): void;
}

export class MessageOmaStartSessionInput {
    static $gtype: GObject.GType<MessageOmaStartSessionInput>;

    constructor();
    constructor(copy: MessageOmaStartSessionInput);

    // Constructors
    static ["new"](): MessageOmaStartSessionInput;

    // Members
    get_session_type(): [boolean, OmaSessionType];

    ref(): MessageOmaStartSessionInput;

    set_session_type(value_session_type: OmaSessionType): boolean;

    unref(): void;
}

export class MessageOmaStartSessionOutput {
    static $gtype: GObject.GType<MessageOmaStartSessionOutput>;

    constructor(copy: MessageOmaStartSessionOutput);

    // Members
    get_result(): boolean;

    ref(): MessageOmaStartSessionOutput;

    unref(): void;
}

export class MessagePbmGetAllCapabilitiesOutput {
    static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutput>;

    constructor(copy: MessagePbmGetAllCapabilitiesOutput);

    // Members
    get_additional_number_alpha_string_capability(): [
        boolean,
        MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement[]
    ];

    get_additional_number_capability(): [
        boolean,
        MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement[]
    ];

    get_capability_basic_information(): [
        boolean,
        MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement[]
    ];

    get_email_capability(): [boolean, MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement[]];

    get_group_capability(): [boolean, MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement[]];

    get_grouping_information_alpha_string_capability(): [
        boolean,
        MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement[]
    ];

    get_hidden_records_capability(): [boolean, MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement[]];

    get_result(): boolean;

    get_second_name_capability(): [boolean, MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement[]];

    ref(): MessagePbmGetAllCapabilitiesOutput;

    unref(): void;
}

export class MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement {
    static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement>;

    constructor(copy: MessagePbmGetAllCapabilitiesOutputAdditionalNumberAlphaStringCapabilityElement);

    // Fields
    session_type: PbmSessionType;
    maximum_records: number;
    used_records: number;
    maximum_string_length: number;
}

export class MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement {
    static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement>;

    constructor(copy: MessagePbmGetAllCapabilitiesOutputAdditionalNumberCapabilityElement);

    // Fields
    session_type: PbmSessionType;
    maximum_additional_numbers: number;
    maximum_additional_number_length: number;
    maximum_additional_number_tag_length: number;
}

export class MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement {
    static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement>;

    constructor(copy: MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElement);

    // Fields
    session_type: PbmSessionType;
    phonebooks: any[];
}

export class MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementPhonebooksElement {
    static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementPhonebooksElement>;

    constructor(copy: MessagePbmGetAllCapabilitiesOutputCapabilityBasicInformationElementPhonebooksElement);

    // Fields
    phonebook_type: PbmPhonebookType;
    used_records: number;
    maximum_records: number;
    maximum_number_length: number;
    maximum_name_length: number;
}

export class MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement {
    static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement>;

    constructor(copy: MessagePbmGetAllCapabilitiesOutputEmailCapabilityElement);

    // Fields
    session_type: PbmSessionType;
    maximum_emails: number;
    maximum_email_address_length: number;
}

export class MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement {
    static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement>;

    constructor(copy: MessagePbmGetAllCapabilitiesOutputGroupCapabilityElement);

    // Fields
    session_type: PbmSessionType;
    maximum_groups: number;
    maximum_group_tag_length: number;
}

export class MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement {
    static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement>;

    constructor(copy: MessagePbmGetAllCapabilitiesOutputGroupingInformationAlphaStringCapabilityElement);

    // Fields
    session_type: PbmSessionType;
    maximum_records: number;
    used_records: number;
    maximum_string_length: number;
}

export class MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement {
    static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement>;

    constructor(copy: MessagePbmGetAllCapabilitiesOutputHiddenRecordsCapabilityElement);

    // Fields
    session_type: PbmSessionType;
    supported: boolean;
}

export class MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement {
    static $gtype: GObject.GType<MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement>;

    constructor(copy: MessagePbmGetAllCapabilitiesOutputSecondNameCapabilityElement);

    // Fields
    session_type: PbmSessionType;
    maximum_second_name_length: number;
}

export class MessagePbmGetCapabilitiesInput {
    static $gtype: GObject.GType<MessagePbmGetCapabilitiesInput>;

    constructor();
    constructor(copy: MessagePbmGetCapabilitiesInput);

    // Constructors
    static ["new"](): MessagePbmGetCapabilitiesInput;

    // Members
    get_phonebook_information(): [boolean, PbmSessionType, PbmPhonebookType];

    ref(): MessagePbmGetCapabilitiesInput;

    set_phonebook_information(
        value_phonebook_information_session_type: PbmSessionType,
        value_phonebook_information_phonebook_type: PbmPhonebookType
    ): boolean;

    unref(): void;
}

export class MessagePbmGetCapabilitiesOutput {
    static $gtype: GObject.GType<MessagePbmGetCapabilitiesOutput>;

    constructor(copy: MessagePbmGetCapabilitiesOutput);

    // Members
    get_additional_number_alpha_string_capability(): [boolean, number, number, number];

    get_additional_number_capability(): [boolean, number, number, number];

    get_capability_basic_information(): [boolean, PbmSessionType, PbmPhonebookType, number, number, number, number];

    get_email_capability(): [boolean, number, number];

    get_group_capability(): [boolean, number, number];

    get_grouping_information_alpha_string_capability(): [boolean, number, number, number];

    get_hidden_records_capability(): [boolean, boolean];

    get_result(): boolean;

    get_second_name_capability(): [boolean, number];

    ref(): MessagePbmGetCapabilitiesOutput;

    unref(): void;
}

export class MessagePbmIndicationRegisterInput {
    static $gtype: GObject.GType<MessagePbmIndicationRegisterInput>;

    constructor();
    constructor(copy: MessagePbmIndicationRegisterInput);

    // Constructors
    static ["new"](): MessagePbmIndicationRegisterInput;

    // Members
    get_event_registration_mask(): [boolean, PbmEventRegistrationFlag];

    ref(): MessagePbmIndicationRegisterInput;

    set_event_registration_mask(value_event_registration_mask: PbmEventRegistrationFlag): boolean;

    unref(): void;
}

export class MessagePbmIndicationRegisterOutput {
    static $gtype: GObject.GType<MessagePbmIndicationRegisterOutput>;

    constructor(copy: MessagePbmIndicationRegisterOutput);

    // Members
    get_event_registration_mask(): [boolean, PbmEventRegistrationFlag];

    get_result(): boolean;

    ref(): MessagePbmIndicationRegisterOutput;

    unref(): void;
}

export class MessagePdcActivateConfigInput {
    static $gtype: GObject.GType<MessagePdcActivateConfigInput>;

    constructor();
    constructor(copy: MessagePdcActivateConfigInput);

    // Constructors
    static ["new"](): MessagePdcActivateConfigInput;

    // Members
    get_config_type(): [boolean, PdcConfigurationType];

    get_token(): [boolean, number];

    ref(): MessagePdcActivateConfigInput;

    set_config_type(value_config_type: PdcConfigurationType): boolean;

    set_token(value_token: number): boolean;

    unref(): void;
}

export class MessagePdcActivateConfigOutput {
    static $gtype: GObject.GType<MessagePdcActivateConfigOutput>;

    constructor(copy: MessagePdcActivateConfigOutput);

    // Members
    get_result(): boolean;

    get_token(): [boolean, number];

    ref(): MessagePdcActivateConfigOutput;

    unref(): void;
}

export class MessagePdcConfigChangeInput {
    static $gtype: GObject.GType<MessagePdcConfigChangeInput>;

    constructor();
    constructor(copy: MessagePdcConfigChangeInput);

    // Constructors
    static ["new"](): MessagePdcConfigChangeInput;

    // Members
    get_type_with_id(): [boolean, ConfigTypeAndId];

    ref(): MessagePdcConfigChangeInput;

    set_type_with_id(value_type_with_id: ConfigTypeAndId): boolean;

    unref(): void;
}

export class MessagePdcConfigChangeOutput {
    static $gtype: GObject.GType<MessagePdcConfigChangeOutput>;

    constructor(copy: MessagePdcConfigChangeOutput);

    // Members
    get_result(): boolean;

    get_type_with_id(): [boolean, ConfigTypeAndId];

    ref(): MessagePdcConfigChangeOutput;

    unref(): void;
}

export class MessagePdcDeactivateConfigInput {
    static $gtype: GObject.GType<MessagePdcDeactivateConfigInput>;

    constructor();
    constructor(copy: MessagePdcDeactivateConfigInput);

    // Constructors
    static ["new"](): MessagePdcDeactivateConfigInput;

    // Members
    get_config_type(): [boolean, PdcConfigurationType];

    get_token(): [boolean, number];

    ref(): MessagePdcDeactivateConfigInput;

    set_config_type(value_config_type: PdcConfigurationType): boolean;

    set_token(value_token: number): boolean;

    unref(): void;
}

export class MessagePdcDeactivateConfigOutput {
    static $gtype: GObject.GType<MessagePdcDeactivateConfigOutput>;

    constructor(copy: MessagePdcDeactivateConfigOutput);

    // Members
    get_result(): boolean;

    get_token(): [boolean, number];

    ref(): MessagePdcDeactivateConfigOutput;

    unref(): void;
}

export class MessagePdcDeleteConfigInput {
    static $gtype: GObject.GType<MessagePdcDeleteConfigInput>;

    constructor();
    constructor(copy: MessagePdcDeleteConfigInput);

    // Constructors
    static ["new"](): MessagePdcDeleteConfigInput;

    // Members
    get_config_type(): [boolean, PdcConfigurationType];

    get_id(): [boolean, Uint8Array];

    get_token(): [boolean, number];

    ref(): MessagePdcDeleteConfigInput;

    set_config_type(value_config_type: PdcConfigurationType): boolean;

    set_id(value_id: Uint8Array | string): boolean;

    set_token(value_token: number): boolean;

    unref(): void;
}

export class MessagePdcDeleteConfigOutput {
    static $gtype: GObject.GType<MessagePdcDeleteConfigOutput>;

    constructor(copy: MessagePdcDeleteConfigOutput);

    // Members
    get_result(): boolean;

    get_token(): [boolean, number];

    ref(): MessagePdcDeleteConfigOutput;

    unref(): void;
}

export class MessagePdcGetConfigInfoInput {
    static $gtype: GObject.GType<MessagePdcGetConfigInfoInput>;

    constructor();
    constructor(copy: MessagePdcGetConfigInfoInput);

    // Constructors
    static ["new"](): MessagePdcGetConfigInfoInput;

    // Members
    get_token(): [boolean, number];

    get_type_with_id(): [boolean, ConfigTypeAndId];

    ref(): MessagePdcGetConfigInfoInput;

    set_token(value_token: number): boolean;

    set_type_with_id(value_type_with_id: ConfigTypeAndId): boolean;

    unref(): void;
}

export class MessagePdcGetConfigInfoOutput {
    static $gtype: GObject.GType<MessagePdcGetConfigInfoOutput>;

    constructor(copy: MessagePdcGetConfigInfoOutput);

    // Members
    get_result(): boolean;

    ref(): MessagePdcGetConfigInfoOutput;

    unref(): void;
}

export class MessagePdcGetConfigLimitsInput {
    static $gtype: GObject.GType<MessagePdcGetConfigLimitsInput>;

    constructor();
    constructor(copy: MessagePdcGetConfigLimitsInput);

    // Constructors
    static ["new"](): MessagePdcGetConfigLimitsInput;

    // Members
    get_config_type(): [boolean, PdcConfigurationType];

    get_token(): [boolean, number];

    ref(): MessagePdcGetConfigLimitsInput;

    set_config_type(value_config_type: PdcConfigurationType): boolean;

    set_token(value_token: number): boolean;

    unref(): void;
}

export class MessagePdcGetConfigLimitsOutput {
    static $gtype: GObject.GType<MessagePdcGetConfigLimitsOutput>;

    constructor(copy: MessagePdcGetConfigLimitsOutput);

    // Members
    get_current_size(): [boolean, number];

    get_maximum_size(): [boolean, number];

    get_result(): boolean;

    get_token(): [boolean, number];

    ref(): MessagePdcGetConfigLimitsOutput;

    unref(): void;
}

export class MessagePdcGetDefaultConfigInfoInput {
    static $gtype: GObject.GType<MessagePdcGetDefaultConfigInfoInput>;

    constructor();
    constructor(copy: MessagePdcGetDefaultConfigInfoInput);

    // Constructors
    static ["new"](): MessagePdcGetDefaultConfigInfoInput;

    // Members
    get_config_type(): [boolean, PdcConfigurationType];

    get_token(): [boolean, number];

    ref(): MessagePdcGetDefaultConfigInfoInput;

    set_config_type(value_config_type: PdcConfigurationType): boolean;

    set_token(value_token: number): boolean;

    unref(): void;
}

export class MessagePdcGetDefaultConfigInfoOutput {
    static $gtype: GObject.GType<MessagePdcGetDefaultConfigInfoOutput>;

    constructor(copy: MessagePdcGetDefaultConfigInfoOutput);

    // Members
    get_description(): [boolean, string];

    get_result(): boolean;

    get_token(): [boolean, number];

    get_total_size(): [boolean, number];

    get_version(): [boolean, number];

    ref(): MessagePdcGetDefaultConfigInfoOutput;

    unref(): void;
}

export class MessagePdcGetSelectedConfigInput {
    static $gtype: GObject.GType<MessagePdcGetSelectedConfigInput>;

    constructor();
    constructor(copy: MessagePdcGetSelectedConfigInput);

    // Constructors
    static ["new"](): MessagePdcGetSelectedConfigInput;

    // Members
    get_config_type(): [boolean, PdcConfigurationType];

    get_token(): [boolean, number];

    ref(): MessagePdcGetSelectedConfigInput;

    set_config_type(value_config_type: PdcConfigurationType): boolean;

    set_token(value_token: number): boolean;

    unref(): void;
}

export class MessagePdcGetSelectedConfigOutput {
    static $gtype: GObject.GType<MessagePdcGetSelectedConfigOutput>;

    constructor(copy: MessagePdcGetSelectedConfigOutput);

    // Members
    get_result(): boolean;

    get_token(): [boolean, number];

    ref(): MessagePdcGetSelectedConfigOutput;

    unref(): void;
}

export class MessagePdcListConfigsInput {
    static $gtype: GObject.GType<MessagePdcListConfigsInput>;

    constructor();
    constructor(copy: MessagePdcListConfigsInput);

    // Constructors
    static ["new"](): MessagePdcListConfigsInput;

    // Members
    get_config_type(): [boolean, PdcConfigurationType];

    get_token(): [boolean, number];

    ref(): MessagePdcListConfigsInput;

    set_config_type(value_config_type: PdcConfigurationType): boolean;

    set_token(value_token: number): boolean;

    unref(): void;
}

export class MessagePdcListConfigsOutput {
    static $gtype: GObject.GType<MessagePdcListConfigsOutput>;

    constructor(copy: MessagePdcListConfigsOutput);

    // Members
    get_result(): boolean;

    ref(): MessagePdcListConfigsOutput;

    unref(): void;
}

export class MessagePdcLoadConfigInput {
    static $gtype: GObject.GType<MessagePdcLoadConfigInput>;

    constructor();
    constructor(copy: MessagePdcLoadConfigInput);

    // Constructors
    static ["new"](): MessagePdcLoadConfigInput;

    // Members
    get_config_chunk(): [boolean, PdcConfigurationType, Uint8Array, number, Uint8Array];

    get_token(): [boolean, number];

    ref(): MessagePdcLoadConfigInput;

    set_config_chunk(
        value_config_chunk_type: PdcConfigurationType,
        value_config_chunk_id: Uint8Array | string,
        value_config_chunk_total_size: number,
        value_config_chunk_chunk: Uint8Array | string
    ): boolean;

    set_token(value_token: number): boolean;

    unref(): void;
}

export class MessagePdcLoadConfigOutput {
    static $gtype: GObject.GType<MessagePdcLoadConfigOutput>;

    constructor(copy: MessagePdcLoadConfigOutput);

    // Members
    get_result(): boolean;

    get_token(): [boolean, number];

    ref(): MessagePdcLoadConfigOutput;

    unref(): void;
}

export class MessagePdcRegisterInput {
    static $gtype: GObject.GType<MessagePdcRegisterInput>;

    constructor();
    constructor(copy: MessagePdcRegisterInput);

    // Constructors
    static ["new"](): MessagePdcRegisterInput;

    // Members
    get_enable_reporting(): [boolean, boolean];

    ref(): MessagePdcRegisterInput;

    set_enable_reporting(value_enable_reporting: boolean): boolean;

    unref(): void;
}

export class MessagePdcRegisterOutput {
    static $gtype: GObject.GType<MessagePdcRegisterOutput>;

    constructor(copy: MessagePdcRegisterOutput);

    // Members
    get_result(): boolean;

    ref(): MessagePdcRegisterOutput;

    unref(): void;
}

export class MessagePdcResetOutput {
    static $gtype: GObject.GType<MessagePdcResetOutput>;

    constructor(copy: MessagePdcResetOutput);

    // Members
    get_result(): boolean;

    ref(): MessagePdcResetOutput;

    unref(): void;
}

export class MessagePdcSetSelectedConfigInput {
    static $gtype: GObject.GType<MessagePdcSetSelectedConfigInput>;

    constructor();
    constructor(copy: MessagePdcSetSelectedConfigInput);

    // Constructors
    static ["new"](): MessagePdcSetSelectedConfigInput;

    // Members
    get_token(): [boolean, number];

    get_type_with_id(): [boolean, ConfigTypeAndId];

    ref(): MessagePdcSetSelectedConfigInput;

    set_token(value_token: number): boolean;

    set_type_with_id(value_type_with_id: ConfigTypeAndId): boolean;

    unref(): void;
}

export class MessagePdcSetSelectedConfigOutput {
    static $gtype: GObject.GType<MessagePdcSetSelectedConfigOutput>;

    constructor(copy: MessagePdcSetSelectedConfigOutput);

    // Members
    get_result(): boolean;

    get_token(): [boolean, number];

    ref(): MessagePdcSetSelectedConfigOutput;

    unref(): void;
}

export class MessagePdsGetAgpsConfigInput {
    static $gtype: GObject.GType<MessagePdsGetAgpsConfigInput>;

    constructor();
    constructor(copy: MessagePdsGetAgpsConfigInput);

    // Constructors
    static ["new"](): MessagePdsGetAgpsConfigInput;

    // Members
    get_network_mode(): [boolean, PdsNetworkMode];

    ref(): MessagePdsGetAgpsConfigInput;

    set_network_mode(value_network_mode: PdsNetworkMode): boolean;

    unref(): void;
}

export class MessagePdsGetAgpsConfigOutput {
    static $gtype: GObject.GType<MessagePdsGetAgpsConfigOutput>;

    constructor(copy: MessagePdsGetAgpsConfigOutput);

    // Members
    get_location_server_address(): [boolean, number, number];

    get_location_server_url(): [boolean, Uint8Array];

    get_result(): boolean;

    ref(): MessagePdsGetAgpsConfigOutput;

    unref(): void;
}

export class MessagePdsGetAutoTrackingStateOutput {
    static $gtype: GObject.GType<MessagePdsGetAutoTrackingStateOutput>;

    constructor(copy: MessagePdsGetAutoTrackingStateOutput);

    // Members
    get_result(): boolean;

    get_state(): [boolean, boolean];

    ref(): MessagePdsGetAutoTrackingStateOutput;

    unref(): void;
}

export class MessagePdsGetDefaultTrackingSessionOutput {
    static $gtype: GObject.GType<MessagePdsGetDefaultTrackingSessionOutput>;

    constructor(copy: MessagePdsGetDefaultTrackingSessionOutput);

    // Members
    get_info(): [boolean, PdsOperatingMode, number, number, number];

    get_result(): boolean;

    ref(): MessagePdsGetDefaultTrackingSessionOutput;

    unref(): void;
}

export class MessagePdsGetGpsServiceStateOutput {
    static $gtype: GObject.GType<MessagePdsGetGpsServiceStateOutput>;

    constructor(copy: MessagePdsGetGpsServiceStateOutput);

    // Members
    get_result(): boolean;

    get_state(): [boolean, boolean, PdsTrackingSessionState];

    ref(): MessagePdsGetGpsServiceStateOutput;

    unref(): void;
}

export class MessagePdsResetOutput {
    static $gtype: GObject.GType<MessagePdsResetOutput>;

    constructor(copy: MessagePdsResetOutput);

    // Members
    get_result(): boolean;

    ref(): MessagePdsResetOutput;

    unref(): void;
}

export class MessagePdsSetAgpsConfigInput {
    static $gtype: GObject.GType<MessagePdsSetAgpsConfigInput>;

    constructor();
    constructor(copy: MessagePdsSetAgpsConfigInput);

    // Constructors
    static ["new"](): MessagePdsSetAgpsConfigInput;

    // Members
    get_location_server_address(): [boolean, number, number];

    get_location_server_url(): [boolean, Uint8Array];

    get_network_mode(): [boolean, PdsNetworkMode];

    ref(): MessagePdsSetAgpsConfigInput;

    set_location_server_address(
        value_location_server_address_ip: number,
        value_location_server_address_port: number
    ): boolean;

    set_location_server_url(value_location_server_url: Uint8Array | string): boolean;

    set_network_mode(value_network_mode: PdsNetworkMode): boolean;

    unref(): void;
}

export class MessagePdsSetAgpsConfigOutput {
    static $gtype: GObject.GType<MessagePdsSetAgpsConfigOutput>;

    constructor(copy: MessagePdsSetAgpsConfigOutput);

    // Members
    get_result(): boolean;

    ref(): MessagePdsSetAgpsConfigOutput;

    unref(): void;
}

export class MessagePdsSetAutoTrackingStateInput {
    static $gtype: GObject.GType<MessagePdsSetAutoTrackingStateInput>;

    constructor();
    constructor(copy: MessagePdsSetAutoTrackingStateInput);

    // Constructors
    static ["new"](): MessagePdsSetAutoTrackingStateInput;

    // Members
    get_state(): [boolean, boolean];

    ref(): MessagePdsSetAutoTrackingStateInput;

    set_state(value_state_auto_tracking_state: boolean): boolean;

    unref(): void;
}

export class MessagePdsSetAutoTrackingStateOutput {
    static $gtype: GObject.GType<MessagePdsSetAutoTrackingStateOutput>;

    constructor(copy: MessagePdsSetAutoTrackingStateOutput);

    // Members
    get_result(): boolean;

    ref(): MessagePdsSetAutoTrackingStateOutput;

    unref(): void;
}

export class MessagePdsSetDefaultTrackingSessionInput {
    static $gtype: GObject.GType<MessagePdsSetDefaultTrackingSessionInput>;

    constructor();
    constructor(copy: MessagePdsSetDefaultTrackingSessionInput);

    // Constructors
    static ["new"](): MessagePdsSetDefaultTrackingSessionInput;

    // Members
    get_info(): [boolean, PdsOperatingMode, number, number, number];

    ref(): MessagePdsSetDefaultTrackingSessionInput;

    set_info(
        value_info_session_operation: PdsOperatingMode,
        value_info_position_data_timeout: number,
        value_info_interval: number,
        value_info_accuracy_threshold: number
    ): boolean;

    unref(): void;
}

export class MessagePdsSetDefaultTrackingSessionOutput {
    static $gtype: GObject.GType<MessagePdsSetDefaultTrackingSessionOutput>;

    constructor(copy: MessagePdsSetDefaultTrackingSessionOutput);

    // Members
    get_result(): boolean;

    ref(): MessagePdsSetDefaultTrackingSessionOutput;

    unref(): void;
}

export class MessagePdsSetEventReportInput {
    static $gtype: GObject.GType<MessagePdsSetEventReportInput>;

    constructor();
    constructor(copy: MessagePdsSetEventReportInput);

    // Constructors
    static ["new"](): MessagePdsSetEventReportInput;

    // Members
    get_accelerometer_data_streaming_ready_reporting(): [boolean, boolean];

    get_extended_external_xtra_data_request_reporting(): [boolean, boolean];

    get_extended_nmea_position_reporting(): [boolean, boolean];

    get_external_time_injection_request_reporting(): [boolean, boolean];

    get_external_wifi_position_request_reporting(): [boolean, boolean];

    get_external_xtra_data_request_reporting(): [boolean, boolean];

    get_gyro_data_streaming_ready_reporting(): [boolean, boolean];

    get_heading_uncertainty_reporting(): [boolean, boolean];

    get_nmea_debug_strings_reporting(): [boolean, boolean];

    get_nmea_position_reporting(): [boolean, boolean];

    get_parsed_position_reporting(): [boolean, boolean];

    get_pds_comm_event_reporting(): [boolean, boolean];

    get_position_reliability_indicator_reporting(): [boolean, boolean];

    get_satellite_information_reporting(): [boolean, boolean];

    get_sensor_data_usage_indicator_reporting(): [boolean, boolean];

    get_supl_network_initiated_prompt_reporting(): [boolean, boolean];

    get_time_source_information_reporting(): [boolean, boolean];

    get_time_sync_request_reporting(): [boolean, boolean];

    get_umts_cp_network_initiated_prompt_reporting(): [boolean, boolean];

    get_vx_network_initiated_request_reporting(): [boolean, boolean];

    ref(): MessagePdsSetEventReportInput;

    set_accelerometer_data_streaming_ready_reporting(
        value_accelerometer_data_streaming_ready_reporting: boolean
    ): boolean;

    set_extended_external_xtra_data_request_reporting(
        value_extended_external_xtra_data_request_reporting: boolean
    ): boolean;

    set_extended_nmea_position_reporting(value_extended_nmea_position_reporting: boolean): boolean;

    set_external_time_injection_request_reporting(value_external_time_injection_request_reporting: boolean): boolean;

    set_external_wifi_position_request_reporting(value_external_wifi_position_request_reporting: boolean): boolean;

    set_external_xtra_data_request_reporting(value_external_xtra_data_request_reporting: boolean): boolean;

    set_gyro_data_streaming_ready_reporting(value_gyro_data_streaming_ready_reporting: boolean): boolean;

    set_heading_uncertainty_reporting(value_heading_uncertainty_reporting: boolean): boolean;

    set_nmea_debug_strings_reporting(value_nmea_debug_strings_reporting: boolean): boolean;

    set_nmea_position_reporting(value_nmea_position_reporting: boolean): boolean;

    set_parsed_position_reporting(value_parsed_position_reporting: boolean): boolean;

    set_pds_comm_event_reporting(value_pds_comm_event_reporting: boolean): boolean;

    set_position_reliability_indicator_reporting(value_position_reliability_indicator_reporting: boolean): boolean;

    set_satellite_information_reporting(value_satellite_information_reporting: boolean): boolean;

    set_sensor_data_usage_indicator_reporting(value_sensor_data_usage_indicator_reporting: boolean): boolean;

    set_supl_network_initiated_prompt_reporting(value_supl_network_initiated_prompt_reporting: boolean): boolean;

    set_time_source_information_reporting(value_time_source_information_reporting: boolean): boolean;

    set_time_sync_request_reporting(value_time_sync_request_reporting: boolean): boolean;

    set_umts_cp_network_initiated_prompt_reporting(value_umts_cp_network_initiated_prompt_reporting: boolean): boolean;

    set_vx_network_initiated_request_reporting(value_vx_network_initiated_request_reporting: boolean): boolean;

    unref(): void;
}

export class MessagePdsSetEventReportOutput {
    static $gtype: GObject.GType<MessagePdsSetEventReportOutput>;

    constructor(copy: MessagePdsSetEventReportOutput);

    // Members
    get_result(): boolean;

    ref(): MessagePdsSetEventReportOutput;

    unref(): void;
}

export class MessagePdsSetGpsServiceStateInput {
    static $gtype: GObject.GType<MessagePdsSetGpsServiceStateInput>;

    constructor();
    constructor(copy: MessagePdsSetGpsServiceStateInput);

    // Constructors
    static ["new"](): MessagePdsSetGpsServiceStateInput;

    // Members
    get_state(): [boolean, boolean];

    ref(): MessagePdsSetGpsServiceStateInput;

    set_state(value_state_gps_service_state: boolean): boolean;

    unref(): void;
}

export class MessagePdsSetGpsServiceStateOutput {
    static $gtype: GObject.GType<MessagePdsSetGpsServiceStateOutput>;

    constructor(copy: MessagePdsSetGpsServiceStateOutput);

    // Members
    get_result(): boolean;

    ref(): MessagePdsSetGpsServiceStateOutput;

    unref(): void;
}

export class MessageQosGetFlowStatusInput {
    static $gtype: GObject.GType<MessageQosGetFlowStatusInput>;

    constructor();
    constructor(copy: MessageQosGetFlowStatusInput);

    // Constructors
    static ["new"](): MessageQosGetFlowStatusInput;

    // Members
    get_qos_id(): [boolean, number];

    ref(): MessageQosGetFlowStatusInput;

    set_qos_id(value_qos_id: number): boolean;

    unref(): void;
}

export class MessageQosGetFlowStatusOutput {
    static $gtype: GObject.GType<MessageQosGetFlowStatusOutput>;

    constructor(copy: MessageQosGetFlowStatusOutput);

    // Members
    get_result(): boolean;

    get_value(): [boolean, QosStatus];

    ref(): MessageQosGetFlowStatusOutput;

    unref(): void;
}

export class MessageQosGetNetworkStatusOutput {
    static $gtype: GObject.GType<MessageQosGetNetworkStatusOutput>;

    constructor(copy: MessageQosGetNetworkStatusOutput);

    // Members
    get_qos_supported(): [boolean, boolean];

    get_result(): boolean;

    ref(): MessageQosGetNetworkStatusOutput;

    unref(): void;
}

export class MessageQosResetOutput {
    static $gtype: GObject.GType<MessageQosResetOutput>;

    constructor(copy: MessageQosResetOutput);

    // Members
    get_result(): boolean;

    ref(): MessageQosResetOutput;

    unref(): void;
}

export class MessageQosSwiReadDataStatsInput {
    static $gtype: GObject.GType<MessageQosSwiReadDataStatsInput>;

    constructor();
    constructor(copy: MessageQosSwiReadDataStatsInput);

    // Constructors
    static ["new"](): MessageQosSwiReadDataStatsInput;

    // Members
    get_apn_id(): [boolean, number];

    ref(): MessageQosSwiReadDataStatsInput;

    set_apn_id(value_apn_id: number): boolean;

    unref(): void;
}

export class MessageQosSwiReadDataStatsOutput {
    static $gtype: GObject.GType<MessageQosSwiReadDataStatsOutput>;

    constructor(copy: MessageQosSwiReadDataStatsOutput);

    // Members
    get_apn(): [boolean, number, number, number, number, number, number, number];

    get_flow(): [boolean, MessageQosSwiReadDataStatsOutputFlowElement[]];

    get_result(): boolean;

    ref(): MessageQosSwiReadDataStatsOutput;

    unref(): void;
}

export class MessageQosSwiReadDataStatsOutputFlowElement {
    static $gtype: GObject.GType<MessageQosSwiReadDataStatsOutputFlowElement>;

    constructor(
        properties?: Partial<{
            bearer_id?: number;
            tx_packets?: number;
            tx_packets_dropped?: number;
            tx_bytes?: number;
            tx_bytes_dropped?: number;
        }>
    );
    constructor(copy: MessageQosSwiReadDataStatsOutputFlowElement);

    // Fields
    bearer_id: number;
    tx_packets: number;
    tx_packets_dropped: number;
    tx_bytes: number;
    tx_bytes_dropped: number;
}

export class MessageUimChangePinInput {
    static $gtype: GObject.GType<MessageUimChangePinInput>;

    constructor();
    constructor(copy: MessageUimChangePinInput);

    // Constructors
    static ["new"](): MessageUimChangePinInput;

    // Members
    get_info(): [boolean, UimPinId, string, string];

    get_response_in_indication_token(): [boolean, number];

    get_session(): [boolean, UimSessionType, Uint8Array];

    get_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    ref(): MessageUimChangePinInput;

    set_info(value_info_pin_id: UimPinId, value_info_old_pin: string, value_info_new_pin: string): boolean;

    set_response_in_indication_token(value_response_in_indication_token: number): boolean;

    set_session(
        value_session_session_type: UimSessionType,
        value_session_application_identifier: Uint8Array | string
    ): boolean;

    set_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    unref(): void;
}

export class MessageUimChangePinOutput {
    static $gtype: GObject.GType<MessageUimChangePinOutput>;

    constructor(copy: MessageUimChangePinOutput);

    // Members
    get_card_result(): [boolean, number, number];

    get_response_in_indication_token(): [boolean, number];

    get_result(): boolean;

    get_retries_remaining(): [boolean, number, number];

    ref(): MessageUimChangePinOutput;

    unref(): void;
}

export class MessageUimChangeProvisioningSessionInput {
    static $gtype: GObject.GType<MessageUimChangeProvisioningSessionInput>;

    constructor();
    constructor(copy: MessageUimChangeProvisioningSessionInput);

    // Constructors
    static ["new"](): MessageUimChangeProvisioningSessionInput;

    // Members
    get_application_information(): [boolean, number, Uint8Array];

    get_session_change(): [boolean, UimSessionType, boolean];

    ref(): MessageUimChangeProvisioningSessionInput;

    set_application_information(
        value_application_information_slot: number,
        value_application_information_application_identifier: Uint8Array | string
    ): boolean;

    set_session_change(
        value_session_change_session_type: UimSessionType,
        value_session_change_activate: boolean
    ): boolean;

    unref(): void;
}

export class MessageUimChangeProvisioningSessionOutput {
    static $gtype: GObject.GType<MessageUimChangeProvisioningSessionOutput>;

    constructor(copy: MessageUimChangeProvisioningSessionOutput);

    // Members
    get_result(): boolean;

    ref(): MessageUimChangeProvisioningSessionOutput;

    unref(): void;
}

export class MessageUimGetCardStatusOutput {
    static $gtype: GObject.GType<MessageUimGetCardStatusOutput>;

    constructor(copy: MessageUimGetCardStatusOutput);

    // Members
    get_card_status(): [boolean, number, number, number, number, MessageUimGetCardStatusOutputCardStatusCardsElement[]];

    get_result(): boolean;

    ref(): MessageUimGetCardStatusOutput;

    unref(): void;
}

export class MessageUimGetCardStatusOutputCardStatusCardsElement {
    static $gtype: GObject.GType<MessageUimGetCardStatusOutputCardStatusCardsElement>;

    constructor(copy: MessageUimGetCardStatusOutputCardStatusCardsElement);

    // Fields
    card_state: UimCardState;
    upin_state: UimPinState;
    upin_retries: number;
    upuk_retries: number;
    error_code: UimCardError;
    applications: any[];
}

export class MessageUimGetCardStatusOutputCardStatusCardsElementApplicationsElement {
    static $gtype: GObject.GType<MessageUimGetCardStatusOutputCardStatusCardsElementApplicationsElement>;

    constructor(copy: MessageUimGetCardStatusOutputCardStatusCardsElementApplicationsElement);

    // Fields
    type: UimCardApplicationType;
    state: UimCardApplicationState;
    personalization_state: UimCardApplicationPersonalizationState;
    personalization_feature: UimCardApplicationPersonalizationFeature;
    personalization_retries: number;
    personalization_unblock_retries: number;
    application_identifier_value: any[];
    upin_replaces_pin1: boolean;
    pin1_state: UimPinState;
    pin1_retries: number;
    puk1_retries: number;
    pin2_state: UimPinState;
    pin2_retries: number;
    puk2_retries: number;
}

export class MessageUimGetFileAttributesInput {
    static $gtype: GObject.GType<MessageUimGetFileAttributesInput>;

    constructor();
    constructor(copy: MessageUimGetFileAttributesInput);

    // Constructors
    static ["new"](): MessageUimGetFileAttributesInput;

    // Members
    get_file(): [boolean, number, Uint8Array];

    get_response_in_indication_token(): [boolean, number];

    get_session(): [boolean, UimSessionType, Uint8Array];

    get_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    ref(): MessageUimGetFileAttributesInput;

    set_file(value_file_file_id: number, value_file_file_path: Uint8Array | string): boolean;

    set_response_in_indication_token(value_response_in_indication_token: number): boolean;

    set_session(
        value_session_session_type: UimSessionType,
        value_session_application_identifier: Uint8Array | string
    ): boolean;

    set_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    unref(): void;
}

export class MessageUimGetFileAttributesOutput {
    static $gtype: GObject.GType<MessageUimGetFileAttributesOutput>;

    constructor(copy: MessageUimGetFileAttributesOutput);

    // Members
    get_card_result(): [boolean, number, number];

    get_file_attributes(): [
        boolean,
        number,
        number,
        UimFileType,
        number,
        number,
        UimSecurityAttributeLogic,
        UimSecurityAttribute,
        UimSecurityAttributeLogic,
        UimSecurityAttribute,
        UimSecurityAttributeLogic,
        UimSecurityAttribute,
        UimSecurityAttributeLogic,
        UimSecurityAttribute,
        UimSecurityAttributeLogic,
        UimSecurityAttribute,
        Uint8Array
    ];

    get_response_in_indication_token(): [boolean, number];

    get_result(): boolean;

    ref(): MessageUimGetFileAttributesOutput;

    unref(): void;
}

export class MessageUimGetSlotStatusOutput {
    static $gtype: GObject.GType<MessageUimGetSlotStatusOutput>;

    constructor(copy: MessageUimGetSlotStatusOutput);

    // Members
    get_physical_slot_information(): [boolean, PhysicalSlotInformationSlot[]];

    get_physical_slot_status(): [boolean, PhysicalSlotStatusSlot[]];

    get_result(): boolean;

    get_slot_eid_information(): [boolean, any[][]];

    ref(): MessageUimGetSlotStatusOutput;

    unref(): void;
}

export class MessageUimGetSupportedMessagesOutput {
    static $gtype: GObject.GType<MessageUimGetSupportedMessagesOutput>;

    constructor(copy: MessageUimGetSupportedMessagesOutput);

    // Members
    get_list(): [boolean, Uint8Array];

    get_result(): boolean;

    ref(): MessageUimGetSupportedMessagesOutput;

    unref(): void;
}

export class MessageUimPowerOffSimInput {
    static $gtype: GObject.GType<MessageUimPowerOffSimInput>;

    constructor();
    constructor(copy: MessageUimPowerOffSimInput);

    // Constructors
    static ["new"](): MessageUimPowerOffSimInput;

    // Members
    get_slot(): [boolean, number];

    ref(): MessageUimPowerOffSimInput;

    set_slot(value_slot: number): boolean;

    unref(): void;
}

export class MessageUimPowerOffSimOutput {
    static $gtype: GObject.GType<MessageUimPowerOffSimOutput>;

    constructor(copy: MessageUimPowerOffSimOutput);

    // Members
    get_result(): boolean;

    ref(): MessageUimPowerOffSimOutput;

    unref(): void;
}

export class MessageUimPowerOnSimInput {
    static $gtype: GObject.GType<MessageUimPowerOnSimInput>;

    constructor();
    constructor(copy: MessageUimPowerOnSimInput);

    // Constructors
    static ["new"](): MessageUimPowerOnSimInput;

    // Members
    get_slot(): [boolean, number];

    ref(): MessageUimPowerOnSimInput;

    set_slot(value_slot: number): boolean;

    unref(): void;
}

export class MessageUimPowerOnSimOutput {
    static $gtype: GObject.GType<MessageUimPowerOnSimOutput>;

    constructor(copy: MessageUimPowerOnSimOutput);

    // Members
    get_result(): boolean;

    ref(): MessageUimPowerOnSimOutput;

    unref(): void;
}

export class MessageUimReadRecordInput {
    static $gtype: GObject.GType<MessageUimReadRecordInput>;

    constructor();
    constructor(copy: MessageUimReadRecordInput);

    // Constructors
    static ["new"](): MessageUimReadRecordInput;

    // Members
    get_file(): [boolean, number, Uint8Array];

    get_last_record(): [boolean, number];

    get_record(): [boolean, number, number];

    get_response_in_indication_token(): [boolean, number];

    get_session(): [boolean, UimSessionType, Uint8Array];

    get_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    ref(): MessageUimReadRecordInput;

    set_file(value_file_file_id: number, value_file_file_path: Uint8Array | string): boolean;

    set_last_record(value_last_record: number): boolean;

    set_record(value_record_record_number: number, value_record_record_length: number): boolean;

    set_response_in_indication_token(value_response_in_indication_token: number): boolean;

    set_session(
        value_session_session_type: UimSessionType,
        value_session_application_identifier: Uint8Array | string
    ): boolean;

    set_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    unref(): void;
}

export class MessageUimReadRecordOutput {
    static $gtype: GObject.GType<MessageUimReadRecordOutput>;

    constructor(copy: MessageUimReadRecordOutput);

    // Members
    get_additional_read_result(): [boolean, Uint8Array];

    get_card_result(): [boolean, number, number];

    get_read_result(): [boolean, Uint8Array];

    get_response_in_indication_token(): [boolean, number];

    get_result(): boolean;

    ref(): MessageUimReadRecordOutput;

    unref(): void;
}

export class MessageUimReadTransparentInput {
    static $gtype: GObject.GType<MessageUimReadTransparentInput>;

    constructor();
    constructor(copy: MessageUimReadTransparentInput);

    // Constructors
    static ["new"](): MessageUimReadTransparentInput;

    // Members
    get_encrypt_data(): [boolean, boolean];

    get_file(): [boolean, number, Uint8Array];

    get_read_information(): [boolean, number, number];

    get_response_in_indication_token(): [boolean, number];

    get_session(): [boolean, UimSessionType, Uint8Array];

    get_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    ref(): MessageUimReadTransparentInput;

    set_encrypt_data(value_encrypt_data: boolean): boolean;

    set_file(value_file_file_id: number, value_file_file_path: Uint8Array | string): boolean;

    set_read_information(value_read_information_offset: number, value_read_information_length: number): boolean;

    set_response_in_indication_token(value_response_in_indication_token: number): boolean;

    set_session(
        value_session_session_type: UimSessionType,
        value_session_application_identifier: Uint8Array | string
    ): boolean;

    set_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    unref(): void;
}

export class MessageUimReadTransparentOutput {
    static $gtype: GObject.GType<MessageUimReadTransparentOutput>;

    constructor(copy: MessageUimReadTransparentOutput);

    // Members
    get_card_result(): [boolean, number, number];

    get_encrypted_data(): [boolean, boolean];

    get_read_result(): [boolean, Uint8Array];

    get_response_in_indication_token(): [boolean, number];

    get_result(): boolean;

    ref(): MessageUimReadTransparentOutput;

    unref(): void;
}

export class MessageUimRegisterEventsInput {
    static $gtype: GObject.GType<MessageUimRegisterEventsInput>;

    constructor();
    constructor(copy: MessageUimRegisterEventsInput);

    // Constructors
    static ["new"](): MessageUimRegisterEventsInput;

    // Members
    get_event_registration_mask(): [boolean, UimEventRegistrationFlag];

    ref(): MessageUimRegisterEventsInput;

    set_event_registration_mask(value_event_registration_mask: UimEventRegistrationFlag): boolean;

    unref(): void;
}

export class MessageUimRegisterEventsOutput {
    static $gtype: GObject.GType<MessageUimRegisterEventsOutput>;

    constructor(copy: MessageUimRegisterEventsOutput);

    // Members
    get_event_registration_mask(): [boolean, UimEventRegistrationFlag];

    get_result(): boolean;

    ref(): MessageUimRegisterEventsOutput;

    unref(): void;
}

export class MessageUimResetOutput {
    static $gtype: GObject.GType<MessageUimResetOutput>;

    constructor(copy: MessageUimResetOutput);

    // Members
    get_result(): boolean;

    ref(): MessageUimResetOutput;

    unref(): void;
}

export class MessageUimSetPinProtectionInput {
    static $gtype: GObject.GType<MessageUimSetPinProtectionInput>;

    constructor();
    constructor(copy: MessageUimSetPinProtectionInput);

    // Constructors
    static ["new"](): MessageUimSetPinProtectionInput;

    // Members
    get_info(): [boolean, UimPinId, boolean, string];

    get_response_in_indication_token(): [boolean, number];

    get_session(): [boolean, UimSessionType, Uint8Array];

    get_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    ref(): MessageUimSetPinProtectionInput;

    set_info(value_info_pin_id: UimPinId, value_info_pin_enabled: boolean, value_info_pin_value: string): boolean;

    set_response_in_indication_token(value_response_in_indication_token: number): boolean;

    set_session(
        value_session_session_type: UimSessionType,
        value_session_application_identifier: Uint8Array | string
    ): boolean;

    set_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    unref(): void;
}

export class MessageUimSetPinProtectionOutput {
    static $gtype: GObject.GType<MessageUimSetPinProtectionOutput>;

    constructor(copy: MessageUimSetPinProtectionOutput);

    // Members
    get_response_in_indication_token(): [boolean, number];

    get_result(): boolean;

    get_retries_remaining(): [boolean, number, number];

    ref(): MessageUimSetPinProtectionOutput;

    unref(): void;
}

export class MessageUimSwitchSlotInput {
    static $gtype: GObject.GType<MessageUimSwitchSlotInput>;

    constructor();
    constructor(copy: MessageUimSwitchSlotInput);

    // Constructors
    static ["new"](): MessageUimSwitchSlotInput;

    // Members
    get_logical_slot(): [boolean, number];

    get_physical_slot(): [boolean, number];

    ref(): MessageUimSwitchSlotInput;

    set_logical_slot(value_logical_slot: number): boolean;

    set_physical_slot(value_physical_slot: number): boolean;

    unref(): void;
}

export class MessageUimSwitchSlotOutput {
    static $gtype: GObject.GType<MessageUimSwitchSlotOutput>;

    constructor(copy: MessageUimSwitchSlotOutput);

    // Members
    get_result(): boolean;

    ref(): MessageUimSwitchSlotOutput;

    unref(): void;
}

export class MessageUimUnblockPinInput {
    static $gtype: GObject.GType<MessageUimUnblockPinInput>;

    constructor();
    constructor(copy: MessageUimUnblockPinInput);

    // Constructors
    static ["new"](): MessageUimUnblockPinInput;

    // Members
    get_info(): [boolean, UimPinId, string, string];

    get_response_in_indication_token(): [boolean, number];

    get_session(): [boolean, UimSessionType, Uint8Array];

    get_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    ref(): MessageUimUnblockPinInput;

    set_info(value_info_pin_id: UimPinId, value_info_puk: string, value_info_new_pin: string): boolean;

    set_response_in_indication_token(value_response_in_indication_token: number): boolean;

    set_session(
        value_session_session_type: UimSessionType,
        value_session_application_identifier: Uint8Array | string
    ): boolean;

    set_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    unref(): void;
}

export class MessageUimUnblockPinOutput {
    static $gtype: GObject.GType<MessageUimUnblockPinOutput>;

    constructor(copy: MessageUimUnblockPinOutput);

    // Members
    get_card_result(): [boolean, number, number];

    get_response_in_indication_token(): [boolean, number];

    get_result(): boolean;

    get_retries_remaining(): [boolean, number, number];

    ref(): MessageUimUnblockPinOutput;

    unref(): void;
}

export class MessageUimVerifyPinInput {
    static $gtype: GObject.GType<MessageUimVerifyPinInput>;

    constructor();
    constructor(copy: MessageUimVerifyPinInput);

    // Constructors
    static ["new"](): MessageUimVerifyPinInput;

    // Members
    get_info(): [boolean, UimPinId, string];

    get_response_in_indication_token(): [boolean, number];

    get_session(): [boolean, UimSessionType, Uint8Array];

    get_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    ref(): MessageUimVerifyPinInput;

    set_info(value_info_pin_id: UimPinId, value_info_pin_value: string): boolean;

    set_response_in_indication_token(value_response_in_indication_token: number): boolean;

    set_session(
        value_session_session_type: UimSessionType,
        value_session_application_identifier: Uint8Array | string
    ): boolean;

    set_session_information(
        value_session_information_session_type: UimSessionType,
        value_session_information_application_identifier: string
    ): boolean;

    unref(): void;
}

export class MessageUimVerifyPinOutput {
    static $gtype: GObject.GType<MessageUimVerifyPinOutput>;

    constructor(copy: MessageUimVerifyPinOutput);

    // Members
    get_card_result(): [boolean, number, number];

    get_response_in_indication_token(): [boolean, number];

    get_result(): boolean;

    get_retries_remaining(): [boolean, number, number];

    ref(): MessageUimVerifyPinOutput;

    unref(): void;
}

export class MessageVoiceAnswerCallInput {
    static $gtype: GObject.GType<MessageVoiceAnswerCallInput>;

    constructor();
    constructor(copy: MessageVoiceAnswerCallInput);

    // Constructors
    static ["new"](): MessageVoiceAnswerCallInput;

    // Members
    get_call_id(): [boolean, number];

    ref(): MessageVoiceAnswerCallInput;

    set_call_id(value_call_id: number): boolean;

    unref(): void;
}

export class MessageVoiceAnswerCallOutput {
    static $gtype: GObject.GType<MessageVoiceAnswerCallOutput>;

    constructor(copy: MessageVoiceAnswerCallOutput);

    // Members
    get_call_id(): [boolean, number];

    get_result(): boolean;

    ref(): MessageVoiceAnswerCallOutput;

    unref(): void;
}

export class MessageVoiceAnswerUssdInput {
    static $gtype: GObject.GType<MessageVoiceAnswerUssdInput>;

    constructor();
    constructor(copy: MessageVoiceAnswerUssdInput);

    // Constructors
    static ["new"](): MessageVoiceAnswerUssdInput;

    // Members
    get_uss_data(): [boolean, VoiceUssDataCodingScheme, Uint8Array];

    ref(): MessageVoiceAnswerUssdInput;

    set_uss_data(
        value_uss_data_data_coding_scheme: VoiceUssDataCodingScheme,
        value_uss_data_data: Uint8Array | string
    ): boolean;

    unref(): void;
}

export class MessageVoiceAnswerUssdOutput {
    static $gtype: GObject.GType<MessageVoiceAnswerUssdOutput>;

    constructor(copy: MessageVoiceAnswerUssdOutput);

    // Members
    get_result(): boolean;

    ref(): MessageVoiceAnswerUssdOutput;

    unref(): void;
}

export class MessageVoiceCancelUssdOutput {
    static $gtype: GObject.GType<MessageVoiceCancelUssdOutput>;

    constructor(copy: MessageVoiceCancelUssdOutput);

    // Members
    get_result(): boolean;

    ref(): MessageVoiceCancelUssdOutput;

    unref(): void;
}

export class MessageVoiceDialCallInput {
    static $gtype: GObject.GType<MessageVoiceDialCallInput>;

    constructor();
    constructor(copy: MessageVoiceDialCallInput);

    // Constructors
    static ["new"](): MessageVoiceDialCallInput;

    // Members
    get_calling_number(): [boolean, string];

    ref(): MessageVoiceDialCallInput;

    set_calling_number(value_calling_number: string): boolean;

    unref(): void;
}

export class MessageVoiceDialCallOutput {
    static $gtype: GObject.GType<MessageVoiceDialCallOutput>;

    constructor(copy: MessageVoiceDialCallOutput);

    // Members
    get_call_id(): [boolean, number];

    get_result(): boolean;

    ref(): MessageVoiceDialCallOutput;

    unref(): void;
}

export class MessageVoiceEndCallInput {
    static $gtype: GObject.GType<MessageVoiceEndCallInput>;

    constructor();
    constructor(copy: MessageVoiceEndCallInput);

    // Constructors
    static ["new"](): MessageVoiceEndCallInput;

    // Members
    get_call_id(): [boolean, number];

    ref(): MessageVoiceEndCallInput;

    set_call_id(value_call_id: number): boolean;

    unref(): void;
}

export class MessageVoiceEndCallOutput {
    static $gtype: GObject.GType<MessageVoiceEndCallOutput>;

    constructor(copy: MessageVoiceEndCallOutput);

    // Members
    get_call_id(): [boolean, number];

    get_result(): boolean;

    ref(): MessageVoiceEndCallOutput;

    unref(): void;
}

export class MessageVoiceGetConfigInput {
    static $gtype: GObject.GType<MessageVoiceGetConfigInput>;

    constructor();
    constructor(copy: MessageVoiceGetConfigInput);

    // Constructors
    static ["new"](): MessageVoiceGetConfigInput;

    // Members
    get_air_timer(): [boolean, boolean];

    get_amr_status(): [boolean, boolean];

    get_auto_answer(): [boolean, boolean];

    get_nam_index(): [boolean, boolean];

    get_preferred_voice_privacy(): [boolean, boolean];

    get_preferred_voice_service_option(): [boolean, boolean];

    get_roam_timer(): [boolean, boolean];

    get_tty_mode(): [boolean, boolean];

    get_voice_domain_preference(): [boolean, boolean];

    ref(): MessageVoiceGetConfigInput;

    set_air_timer(value_air_timer: boolean): boolean;

    set_amr_status(value_amr_status: boolean): boolean;

    set_auto_answer(value_auto_answer: boolean): boolean;

    set_nam_index(value_nam_index: boolean): boolean;

    set_preferred_voice_privacy(value_preferred_voice_privacy: boolean): boolean;

    set_preferred_voice_service_option(value_preferred_voice_service_option: boolean): boolean;

    set_roam_timer(value_roam_timer: boolean): boolean;

    set_tty_mode(value_tty_mode: boolean): boolean;

    set_voice_domain_preference(value_voice_domain_preference: boolean): boolean;

    unref(): void;
}

export class MessageVoiceGetConfigOutput {
    static $gtype: GObject.GType<MessageVoiceGetConfigOutput>;

    constructor(copy: MessageVoiceGetConfigOutput);

    // Members
    get_air_timer_count(): [boolean, number, number];

    get_auto_answer_status(): [boolean, boolean];

    get_current_amr_status(): [boolean, boolean, VoiceWcdmaAmrStatus];

    get_current_preferred_voice_so(): [
        boolean,
        number,
        boolean,
        VoiceServiceOption,
        VoiceServiceOption,
        VoiceServiceOption
    ];

    get_current_tty_mode(): [boolean, VoiceTtyMode];

    get_current_voice_domain_preference(): [boolean, VoiceDomain];

    get_current_voice_privacy_preference(): [boolean, VoicePrivacy];

    get_result(): boolean;

    get_roam_timer_count(): [boolean, number, number];

    ref(): MessageVoiceGetConfigOutput;

    unref(): void;
}

export class MessageVoiceGetSupportedMessagesOutput {
    static $gtype: GObject.GType<MessageVoiceGetSupportedMessagesOutput>;

    constructor(copy: MessageVoiceGetSupportedMessagesOutput);

    // Members
    get_list(): [boolean, Uint8Array];

    get_result(): boolean;

    ref(): MessageVoiceGetSupportedMessagesOutput;

    unref(): void;
}

export class MessageVoiceIndicationRegisterInput {
    static $gtype: GObject.GType<MessageVoiceIndicationRegisterInput>;

    constructor();
    constructor(copy: MessageVoiceIndicationRegisterInput);

    // Constructors
    static ["new"](): MessageVoiceIndicationRegisterInput;

    // Members
    get_aoc_events(): [boolean, boolean];

    get_call_notification_events(): [boolean, boolean];

    get_conference_events(): [boolean, boolean];

    get_dtmf_events(): [boolean, boolean];

    get_extended_burst_type_international_information_events(): [boolean, boolean];

    get_handover_events(): [boolean, boolean];

    get_modification_events(): [boolean, boolean];

    get_mt_page_miss_information_events(): [boolean, boolean];

    get_speech_codec_events(): [boolean, boolean];

    get_supplementary_service_notification_events(): [boolean, boolean];

    get_ussd_notification_events(): [boolean, boolean];

    get_uus_events(): [boolean, boolean];

    get_voice_privacy_events(): [boolean, boolean];

    ref(): MessageVoiceIndicationRegisterInput;

    set_aoc_events(value_aoc_events: boolean): boolean;

    set_call_notification_events(value_call_notification_events: boolean): boolean;

    set_conference_events(value_conference_events: boolean): boolean;

    set_dtmf_events(value_dtmf_events: boolean): boolean;

    set_extended_burst_type_international_information_events(
        value_extended_burst_type_international_information_events: boolean
    ): boolean;

    set_handover_events(value_handover_events: boolean): boolean;

    set_modification_events(value_modification_events: boolean): boolean;

    set_mt_page_miss_information_events(value_mt_page_miss_information_events: boolean): boolean;

    set_speech_codec_events(value_speech_codec_events: boolean): boolean;

    set_supplementary_service_notification_events(value_supplementary_service_notification_events: boolean): boolean;

    set_ussd_notification_events(value_ussd_notification_events: boolean): boolean;

    set_uus_events(value_uus_events: boolean): boolean;

    set_voice_privacy_events(value_voice_privacy_events: boolean): boolean;

    unref(): void;
}

export class MessageVoiceIndicationRegisterOutput {
    static $gtype: GObject.GType<MessageVoiceIndicationRegisterOutput>;

    constructor(copy: MessageVoiceIndicationRegisterOutput);

    // Members
    get_result(): boolean;

    ref(): MessageVoiceIndicationRegisterOutput;

    unref(): void;
}

export class MessageVoiceOriginateUssdInput {
    static $gtype: GObject.GType<MessageVoiceOriginateUssdInput>;

    constructor();
    constructor(copy: MessageVoiceOriginateUssdInput);

    // Constructors
    static ["new"](): MessageVoiceOriginateUssdInput;

    // Members
    get_uss_data(): [boolean, VoiceUssDataCodingScheme, Uint8Array];

    ref(): MessageVoiceOriginateUssdInput;

    set_uss_data(
        value_uss_data_data_coding_scheme: VoiceUssDataCodingScheme,
        value_uss_data_data: Uint8Array | string
    ): boolean;

    unref(): void;
}

export class MessageVoiceOriginateUssdNoWaitInput {
    static $gtype: GObject.GType<MessageVoiceOriginateUssdNoWaitInput>;

    constructor();
    constructor(copy: MessageVoiceOriginateUssdNoWaitInput);

    // Constructors
    static ["new"](): MessageVoiceOriginateUssdNoWaitInput;

    // Members
    get_uss_data(): [boolean, VoiceUssDataCodingScheme, Uint8Array];

    ref(): MessageVoiceOriginateUssdNoWaitInput;

    set_uss_data(
        value_uss_data_data_coding_scheme: VoiceUssDataCodingScheme,
        value_uss_data_data: Uint8Array | string
    ): boolean;

    unref(): void;
}

export class MessageVoiceOriginateUssdNoWaitOutput {
    static $gtype: GObject.GType<MessageVoiceOriginateUssdNoWaitOutput>;

    constructor(copy: MessageVoiceOriginateUssdNoWaitOutput);

    // Members
    get_result(): boolean;

    ref(): MessageVoiceOriginateUssdNoWaitOutput;

    unref(): void;
}

export class MessageVoiceOriginateUssdOutput {
    static $gtype: GObject.GType<MessageVoiceOriginateUssdOutput>;

    constructor(copy: MessageVoiceOriginateUssdOutput);

    // Members
    get_alpha_identifier(): [boolean, VoiceAlphaDataCodingScheme, Uint8Array];

    get_call_control_result_type(): [boolean, VoiceCallControlResultType];

    get_call_control_supplementary_service_type(): [boolean, VoiceCallControlSupplementaryServiceType];

    get_call_id(): [boolean, number];

    get_failure_cause(): [boolean, VoiceCallEndReason];

    get_result(): boolean;

    get_uss_data(): [boolean, VoiceUssDataCodingScheme, Uint8Array];

    get_uss_data_utf16(): [boolean, number[]];

    ref(): MessageVoiceOriginateUssdOutput;

    unref(): void;
}

export class MessageWdaGetDataFormatInput {
    static $gtype: GObject.GType<MessageWdaGetDataFormatInput>;

    constructor();
    constructor(copy: MessageWdaGetDataFormatInput);

    // Constructors
    static ["new"](): MessageWdaGetDataFormatInput;

    // Members
    get_endpoint_info(): [boolean, DataEndpointType, number];

    ref(): MessageWdaGetDataFormatInput;

    set_endpoint_info(
        value_endpoint_info_endpoint_type: DataEndpointType,
        value_endpoint_info_interface_number: number
    ): boolean;

    unref(): void;
}

export class MessageWdaGetDataFormatOutput {
    static $gtype: GObject.GType<MessageWdaGetDataFormatOutput>;

    constructor(copy: MessageWdaGetDataFormatOutput);

    // Members
    get_downlink_data_aggregation_max_datagrams(): [boolean, number];

    get_downlink_data_aggregation_max_size(): [boolean, number];

    get_downlink_data_aggregation_protocol(): [boolean, WdaDataAggregationProtocol];

    get_link_layer_protocol(): [boolean, WdaLinkLayerProtocol];

    get_ndp_signature(): [boolean, number];

    get_qos_format(): [boolean, boolean];

    get_result(): boolean;

    get_uplink_data_aggregation_max_size(value_uplink_data_aggregation_max_size: number): boolean;

    get_uplink_data_aggregation_protocol(): [boolean, WdaDataAggregationProtocol];

    ref(): MessageWdaGetDataFormatOutput;

    unref(): void;
}

export class MessageWdaGetSupportedMessagesOutput {
    static $gtype: GObject.GType<MessageWdaGetSupportedMessagesOutput>;

    constructor(copy: MessageWdaGetSupportedMessagesOutput);

    // Members
    get_list(): [boolean, Uint8Array];

    get_result(): boolean;

    ref(): MessageWdaGetSupportedMessagesOutput;

    unref(): void;
}

export class MessageWdaSetDataFormatInput {
    static $gtype: GObject.GType<MessageWdaSetDataFormatInput>;

    constructor();
    constructor(copy: MessageWdaSetDataFormatInput);

    // Constructors
    static ["new"](): MessageWdaSetDataFormatInput;

    // Members
    get_downlink_data_aggregation_max_datagrams(): [boolean, number];

    get_downlink_data_aggregation_max_size(): [boolean, number];

    get_downlink_data_aggregation_protocol(): [boolean, WdaDataAggregationProtocol];

    get_endpoint_info(): [boolean, DataEndpointType, number];

    get_link_layer_protocol(): [boolean, WdaLinkLayerProtocol];

    get_ndp_signature(): [boolean, number];

    get_qos_format(): [boolean, boolean];

    get_uplink_data_aggregation_protocol(): [boolean, WdaDataAggregationProtocol];

    ref(): MessageWdaSetDataFormatInput;

    set_downlink_data_aggregation_max_datagrams(value_downlink_data_aggregation_max_datagrams: number): boolean;

    set_downlink_data_aggregation_max_size(value_downlink_data_aggregation_max_size: number): boolean;

    set_downlink_data_aggregation_protocol(
        value_downlink_data_aggregation_protocol: WdaDataAggregationProtocol
    ): boolean;

    set_endpoint_info(
        value_endpoint_info_endpoint_type: DataEndpointType,
        value_endpoint_info_interface_number: number
    ): boolean;

    set_link_layer_protocol(value_link_layer_protocol: WdaLinkLayerProtocol): boolean;

    set_ndp_signature(value_ndp_signature: number): boolean;

    set_qos_format(value_qos_format: boolean): boolean;

    set_uplink_data_aggregation_protocol(value_uplink_data_aggregation_protocol: WdaDataAggregationProtocol): boolean;

    unref(): void;
}

export class MessageWdaSetDataFormatOutput {
    static $gtype: GObject.GType<MessageWdaSetDataFormatOutput>;

    constructor(copy: MessageWdaSetDataFormatOutput);

    // Members
    get_downlink_data_aggregation_max_datagrams(): [boolean, number];

    get_downlink_data_aggregation_max_size(): [boolean, number];

    get_downlink_data_aggregation_protocol(): [boolean, WdaDataAggregationProtocol];

    get_link_layer_protocol(): [boolean, WdaLinkLayerProtocol];

    get_ndp_signature(): [boolean, number];

    get_qos_format(): [boolean, boolean];

    get_result(): boolean;

    get_uplink_data_aggregation_protocol(): [boolean, WdaDataAggregationProtocol];

    ref(): MessageWdaSetDataFormatOutput;

    unref(): void;
}

export class MessageWdsBindMuxDataPortInput {
    static $gtype: GObject.GType<MessageWdsBindMuxDataPortInput>;

    constructor();
    constructor(copy: MessageWdsBindMuxDataPortInput);

    // Constructors
    static ["new"](): MessageWdsBindMuxDataPortInput;

    // Members
    get_client_type(): [boolean, WdsClientType];

    get_endpoint_info(): [boolean, DataEndpointType, number];

    get_mux_id(): [boolean, number];

    ref(): MessageWdsBindMuxDataPortInput;

    set_client_type(value_client_type: WdsClientType): boolean;

    set_endpoint_info(
        value_endpoint_info_endpoint_type: DataEndpointType,
        value_endpoint_info_interface_number: number
    ): boolean;

    set_mux_id(value_mux_id: number): boolean;

    unref(): void;
}

export class MessageWdsBindMuxDataPortOutput {
    static $gtype: GObject.GType<MessageWdsBindMuxDataPortOutput>;

    constructor(copy: MessageWdsBindMuxDataPortOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWdsBindMuxDataPortOutput;

    unref(): void;
}

export class MessageWdsCreateProfileInput {
    static $gtype: GObject.GType<MessageWdsCreateProfileInput>;

    constructor();
    constructor(copy: MessageWdsCreateProfileInput);

    // Constructors
    static ["new"](): MessageWdsCreateProfileInput;

    // Members
    get_apn_disabled_flag(): [boolean, boolean];

    get_apn_name(): [boolean, string];

    get_authentication(): [boolean, WdsAuthentication];

    get_gprs_minimum_qos(): [boolean, number, number, number, number, number];

    get_gprs_requested_qos(): [boolean, number, number, number, number, number];

    get_imcn_flag(): [boolean, boolean];

    get_ipv4_address_preference(): [boolean, number];

    get_ipv6_address_preference(): [boolean, number[]];

    get_ipv6_primary_dns_address_preference(): [boolean, number[]];

    get_ipv6_secondary_dns_address_preference(): [boolean, number[]];

    get_lte_qos_parameters(): [boolean, WdsQosClassIdentifier, number, number, number, number];

    get_password(): [boolean, string];

    get_pcscf_address_using_dhcp(): [boolean, boolean];

    get_pcscf_address_using_pco(): [boolean, boolean];

    get_pdp_context_number(): [boolean, number];

    get_pdp_context_primary_id(): [boolean, number];

    get_pdp_context_secondary_flag(): [boolean, boolean];

    get_pdp_data_compression_type(): [boolean, WdsPdpDataCompressionType];

    get_pdp_header_compression_type(): [boolean, WdsPdpHeaderCompressionType];

    get_pdp_type(): [boolean, WdsPdpType];

    get_primary_ipv4_dns_address(): [boolean, number];

    get_profile_name(): [boolean, string];

    get_profile_type(): [boolean, WdsProfileType];

    get_roaming_disallowed_flag(): [boolean, boolean];

    get_secondary_ipv4_dns_address(): [boolean, number];

    get_umts_minimum_qos(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number
    ];

    get_umts_minimum_qos_with_signaling_indication_flag(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number,
        number
    ];

    get_umts_requested_qos(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number
    ];

    get_umts_requested_qos_with_signaling_indication_flag(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number,
        number
    ];

    get_username(): [boolean, string];

    ref(): MessageWdsCreateProfileInput;

    set_apn_disabled_flag(value_apn_disabled_flag: boolean): boolean;

    set_apn_name(value_apn_name: string): boolean;

    set_authentication(value_authentication: WdsAuthentication): boolean;

    set_gprs_minimum_qos(
        value_gprs_minimum_qos_precedence_class: number,
        value_gprs_minimum_qos_delay_class: number,
        value_gprs_minimum_qos_reliability_class: number,
        value_gprs_minimum_qos_peak_throughput_class: number,
        value_gprs_minimum_qos_mean_throughput_class: number
    ): boolean;

    set_gprs_requested_qos(
        value_gprs_requested_qos_precedence_class: number,
        value_gprs_requested_qos_delay_class: number,
        value_gprs_requested_qos_reliability_class: number,
        value_gprs_requested_qos_peak_throughput_class: number,
        value_gprs_requested_qos_mean_throughput_class: number
    ): boolean;

    set_imcn_flag(value_imcn_flag: boolean): boolean;

    set_ipv4_address_preference(value_ipv4_address_preference: number): boolean;

    set_ipv6_address_preference(value_ipv6_address_preference_address: number[]): boolean;

    set_ipv6_primary_dns_address_preference(value_ipv6_primary_dns_address_preference: number[]): boolean;

    set_ipv6_secondary_dns_address_preference(value_ipv6_secondary_dns_address_preference: number[]): boolean;

    set_lte_qos_parameters(
        value_lte_qos_parameters_qos_class_identifier: WdsQosClassIdentifier,
        value_lte_qos_parameters_guaranteed_downlink_bitrate: number,
        value_lte_qos_parameters_max_downlink_bitrate: number,
        value_lte_qos_parameters_guaranteed_uplink_bitrate: number,
        value_lte_qos_parameters_max_uplink_bitrate: number
    ): boolean;

    set_password(value_password: string): boolean;

    set_pcscf_address_using_dhcp(value_pcscf_address_using_dhcp: boolean): boolean;

    set_pcscf_address_using_pco(value_pcscf_address_using_pco: boolean): boolean;

    set_pdp_context_number(value_pdp_context_number: number): boolean;

    set_pdp_context_primary_id(value_pdp_context_primary_id: number): boolean;

    set_pdp_context_secondary_flag(value_pdp_context_secondary_flag: boolean): boolean;

    set_pdp_data_compression_type(value_pdp_data_compression_type: WdsPdpDataCompressionType): boolean;

    set_pdp_header_compression_type(value_pdp_header_compression_type: WdsPdpHeaderCompressionType): boolean;

    set_pdp_type(value_pdp_type: WdsPdpType): boolean;

    set_primary_ipv4_dns_address(value_primary_ipv4_dns_address: number): boolean;

    set_profile_name(value_profile_name: string): boolean;

    set_profile_type(value_profile_type: WdsProfileType): boolean;

    set_roaming_disallowed_flag(value_roaming_disallowed_flag: boolean): boolean;

    set_secondary_ipv4_dns_address(value_secondary_ipv4_dns_address: number): boolean;

    set_umts_minimum_qos(
        value_umts_minimum_qos_traffic_class: WdsTrafficClass,
        value_umts_minimum_qos_max_uplink_bitrate: number,
        value_umts_minimum_qos_max_downlink_bitrate: number,
        value_umts_minimum_qos_guaranteed_uplink_bitrate: number,
        value_umts_minimum_qos_guaranteed_downlink_bitrate: number,
        value_umts_minimum_qos_qos_delivery_order: WdsDeliveryOrder,
        value_umts_minimum_qos_maximum_sdu_size: number,
        value_umts_minimum_qos_sdu_error_ratio: WdsSduErrorRatio,
        value_umts_minimum_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio,
        value_umts_minimum_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery,
        value_umts_minimum_qos_transfer_delay: number,
        value_umts_minimum_qos_traffic_handling_priority: number
    ): boolean;

    set_umts_minimum_qos_with_signaling_indication_flag(
        value_umts_minimum_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass,
        value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate: number,
        value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate: number,
        value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number,
        value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number,
        value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder,
        value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size: number,
        value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio,
        value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio,
        value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery,
        value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay: number,
        value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority: number,
        value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication: number
    ): boolean;

    set_umts_requested_qos(
        value_umts_requested_qos_traffic_class: WdsTrafficClass,
        value_umts_requested_qos_max_uplink_bitrate: number,
        value_umts_requested_qos_max_downlink_bitrate: number,
        value_umts_requested_qos_guaranteed_uplink_bitrate: number,
        value_umts_requested_qos_guaranteed_downlink_bitrate: number,
        value_umts_requested_qos_qos_delivery_order: WdsDeliveryOrder,
        value_umts_requested_qos_maximum_sdu_size: number,
        value_umts_requested_qos_sdu_error_ratio: WdsSduErrorRatio,
        value_umts_requested_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio,
        value_umts_requested_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery,
        value_umts_requested_qos_transfer_delay: number,
        value_umts_requested_qos_traffic_handling_priority: number
    ): boolean;

    set_umts_requested_qos_with_signaling_indication_flag(
        value_umts_requested_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass,
        value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate: number,
        value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate: number,
        value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number,
        value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number,
        value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder,
        value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size: number,
        value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio,
        value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio,
        value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery,
        value_umts_requested_qos_with_signaling_indication_flag_transfer_delay: number,
        value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority: number,
        value_umts_requested_qos_with_signaling_indication_flag_signaling_indication: number
    ): boolean;

    set_username(value_username: string): boolean;

    unref(): void;
}

export class MessageWdsCreateProfileOutput {
    static $gtype: GObject.GType<MessageWdsCreateProfileOutput>;

    constructor(copy: MessageWdsCreateProfileOutput);

    // Members
    get_extended_error_code(): [boolean, WdsDsProfileError];

    get_profile_identifier(): [boolean, WdsProfileType, number];

    get_result(): boolean;

    ref(): MessageWdsCreateProfileOutput;

    unref(): void;
}

export class MessageWdsDeleteProfileInput {
    static $gtype: GObject.GType<MessageWdsDeleteProfileInput>;

    constructor();
    constructor(copy: MessageWdsDeleteProfileInput);

    // Constructors
    static ["new"](): MessageWdsDeleteProfileInput;

    // Members
    get_profile_identifier(): [boolean, WdsProfileType, number];

    ref(): MessageWdsDeleteProfileInput;

    set_profile_identifier(
        value_profile_identifier_profile_type: WdsProfileType,
        value_profile_identifier_profile_index: number
    ): boolean;

    unref(): void;
}

export class MessageWdsDeleteProfileOutput {
    static $gtype: GObject.GType<MessageWdsDeleteProfileOutput>;

    constructor(copy: MessageWdsDeleteProfileOutput);

    // Members
    get_extended_error_code(): [boolean, WdsDsProfileError];

    get_result(): boolean;

    ref(): MessageWdsDeleteProfileOutput;

    unref(): void;
}

export class MessageWdsGetAutoconnectSettingsOutput {
    static $gtype: GObject.GType<MessageWdsGetAutoconnectSettingsOutput>;

    constructor(copy: MessageWdsGetAutoconnectSettingsOutput);

    // Members
    get_result(): boolean;

    get_roaming(): [boolean, WdsAutoconnectSettingRoaming];

    get_status(): [boolean, WdsAutoconnectSetting];

    ref(): MessageWdsGetAutoconnectSettingsOutput;

    unref(): void;
}

export class MessageWdsGetChannelRatesOutput {
    static $gtype: GObject.GType<MessageWdsGetChannelRatesOutput>;

    constructor(copy: MessageWdsGetChannelRatesOutput);

    // Members
    get_channel_rates(): [boolean, number, number, number, number];

    get_result(): boolean;

    ref(): MessageWdsGetChannelRatesOutput;

    unref(): void;
}

export class MessageWdsGetCurrentDataBearerTechnologyOutput {
    static $gtype: GObject.GType<MessageWdsGetCurrentDataBearerTechnologyOutput>;

    constructor(copy: MessageWdsGetCurrentDataBearerTechnologyOutput);

    // Members
    get_current(): [boolean, WdsNetworkType, number, number];

    get_last(): [boolean, WdsNetworkType, number, number];

    get_result(): boolean;

    ref(): MessageWdsGetCurrentDataBearerTechnologyOutput;

    unref(): void;
}

export class MessageWdsGetCurrentSettingsInput {
    static $gtype: GObject.GType<MessageWdsGetCurrentSettingsInput>;

    constructor();
    constructor(copy: MessageWdsGetCurrentSettingsInput);

    // Constructors
    static ["new"](): MessageWdsGetCurrentSettingsInput;

    // Members
    get_requested_settings(): [boolean, WdsGetCurrentSettingsRequestedSettings];

    ref(): MessageWdsGetCurrentSettingsInput;

    set_requested_settings(value_requested_settings: WdsGetCurrentSettingsRequestedSettings): boolean;

    unref(): void;
}

export class MessageWdsGetCurrentSettingsOutput {
    static $gtype: GObject.GType<MessageWdsGetCurrentSettingsOutput>;

    constructor(copy: MessageWdsGetCurrentSettingsOutput);

    // Members
    get_apn_name(): [boolean, string];

    get_authentication(): [boolean, WdsAuthentication];

    get_domain_name_list(): [boolean, string[]];

    get_extended_technology_preference(): [boolean, WdsExtendedTechnologyPreference];

    get_gprs_granted_qos(): [boolean, number, number, number, number, number];

    get_imcn_flag(): [boolean, number];

    get_ip_family(): [boolean, WdsIpFamily];

    get_ipv4_address(): [boolean, number];

    get_ipv4_gateway_address(): [boolean, number];

    get_ipv4_gateway_subnet_mask(): [boolean, number];

    get_ipv6_address(): [boolean, number[], number];

    get_ipv6_gateway_address(): [boolean, number[], number];

    get_ipv6_primary_dns_address(): [boolean, number[]];

    get_ipv6_secondary_dns_address(): [boolean, number[]];

    get_mtu(): [boolean, number];

    get_pcscf_address_using_pco(): [boolean, number];

    get_pcscf_domain_name_list(): [boolean, string[]];

    get_pcscf_server_address_list(): [boolean, number[]];

    get_pdp_type(): [boolean, WdsPdpType];

    get_primary_ipv4_dns_address(): [boolean, number];

    get_profile_id(): [boolean, WdsProfileType, number];

    get_profile_name(): [boolean, string];

    get_result(): boolean;

    get_secondary_ipv4_dns_address(): [boolean, number];

    get_umts_granted_qos(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number
    ];

    get_username(): [boolean, string];

    ref(): MessageWdsGetCurrentSettingsOutput;

    unref(): void;
}

export class MessageWdsGetDataBearerTechnologyOutput {
    static $gtype: GObject.GType<MessageWdsGetDataBearerTechnologyOutput>;

    constructor(copy: MessageWdsGetDataBearerTechnologyOutput);

    // Members
    get_current(): [boolean, WdsDataBearerTechnology];

    get_last(): [boolean, WdsDataBearerTechnology];

    get_result(): boolean;

    ref(): MessageWdsGetDataBearerTechnologyOutput;

    unref(): void;
}

export class MessageWdsGetDefaultProfileNumInput {
    static $gtype: GObject.GType<MessageWdsGetDefaultProfileNumInput>;

    constructor();
    constructor(copy: MessageWdsGetDefaultProfileNumInput);

    // Constructors
    static ["new"](): MessageWdsGetDefaultProfileNumInput;

    // Members
    get_profile_type(): [boolean, WdsProfileType, WdsProfileFamily];

    ref(): MessageWdsGetDefaultProfileNumInput;

    set_profile_type(
        value_profile_type_profile_type: WdsProfileType,
        value_profile_type_profile_family: WdsProfileFamily
    ): boolean;

    unref(): void;
}

export class MessageWdsGetDefaultProfileNumOutput {
    static $gtype: GObject.GType<MessageWdsGetDefaultProfileNumOutput>;

    constructor(copy: MessageWdsGetDefaultProfileNumOutput);

    // Members
    get_default_profile_number(): [boolean, number];

    get_extended_error_code(): [boolean, WdsDsProfileError];

    get_result(): boolean;

    ref(): MessageWdsGetDefaultProfileNumOutput;

    unref(): void;
}

export class MessageWdsGetDefaultSettingsInput {
    static $gtype: GObject.GType<MessageWdsGetDefaultSettingsInput>;

    constructor();
    constructor(copy: MessageWdsGetDefaultSettingsInput);

    // Constructors
    static ["new"](): MessageWdsGetDefaultSettingsInput;

    // Members
    get_profile_type(): [boolean, WdsProfileType];

    ref(): MessageWdsGetDefaultSettingsInput;

    set_profile_type(value_profile_type: WdsProfileType): boolean;

    unref(): void;
}

export class MessageWdsGetDefaultSettingsOutput {
    static $gtype: GObject.GType<MessageWdsGetDefaultSettingsOutput>;

    constructor(copy: MessageWdsGetDefaultSettingsOutput);

    // Members
    get_apn_name(): [boolean, string];

    get_authentication(): [boolean, WdsAuthentication];

    get_extended_error_code(): [boolean, WdsDsProfileError];

    get_gprs_minimum_qos(): [boolean, number, number, number, number, number];

    get_gprs_requested_qos(): [boolean, number, number, number, number, number];

    get_imcn_flag(): [boolean, boolean];

    get_ipv4_address_preference(): [boolean, number];

    get_ipv6_address_preference(): [boolean, number[]];

    get_ipv6_primary_dns_address_preference(): [boolean, number[]];

    get_ipv6_secondary_dns_address_preference(): [boolean, number[]];

    get_lte_qos_parameters(): [boolean, WdsQosClassIdentifier, number, number, number, number];

    get_password(): [boolean, string];

    get_pcscf_address_using_dhcp(): [boolean, boolean];

    get_pcscf_address_using_pco(): [boolean, boolean];

    get_pdp_context_number(): [boolean, number];

    get_pdp_context_primary_id(): [boolean, number];

    get_pdp_context_secondary_flag(): [boolean, boolean];

    get_pdp_data_compression_type(): [boolean, WdsPdpDataCompressionType];

    get_pdp_header_compression_type(): [boolean, WdsPdpHeaderCompressionType];

    get_pdp_type(): [boolean, WdsPdpType];

    get_primary_ipv4_dns_address(): [boolean, number];

    get_profile_name(): [boolean, string];

    get_result(): boolean;

    get_secondary_ipv4_dns_address(): [boolean, number];

    get_umts_minimum_qos(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number
    ];

    get_umts_minimum_qos_with_signaling_indication_flag(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number,
        number
    ];

    get_umts_requested_qos(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number
    ];

    get_umts_requested_qos_with_signaling_indication_flag(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number,
        number
    ];

    get_username(): [boolean, string];

    ref(): MessageWdsGetDefaultSettingsOutput;

    unref(): void;
}

export class MessageWdsGetDormancyStatusOutput {
    static $gtype: GObject.GType<MessageWdsGetDormancyStatusOutput>;

    constructor(copy: MessageWdsGetDormancyStatusOutput);

    // Members
    get_dormancy_status(): [boolean, WdsDormancyStatus];

    get_result(): boolean;

    ref(): MessageWdsGetDormancyStatusOutput;

    unref(): void;
}

export class MessageWdsGetPacketServiceStatusOutput {
    static $gtype: GObject.GType<MessageWdsGetPacketServiceStatusOutput>;

    constructor(copy: MessageWdsGetPacketServiceStatusOutput);

    // Members
    get_connection_status(): [boolean, WdsConnectionStatus];

    get_result(): boolean;

    ref(): MessageWdsGetPacketServiceStatusOutput;

    unref(): void;
}

export class MessageWdsGetPacketStatisticsInput {
    static $gtype: GObject.GType<MessageWdsGetPacketStatisticsInput>;

    constructor();
    constructor(copy: MessageWdsGetPacketStatisticsInput);

    // Constructors
    static ["new"](): MessageWdsGetPacketStatisticsInput;

    // Members
    get_mask(): [boolean, WdsPacketStatisticsMaskFlag];

    ref(): MessageWdsGetPacketStatisticsInput;

    set_mask(value_mask: WdsPacketStatisticsMaskFlag): boolean;

    unref(): void;
}

export class MessageWdsGetPacketStatisticsOutput {
    static $gtype: GObject.GType<MessageWdsGetPacketStatisticsOutput>;

    constructor(copy: MessageWdsGetPacketStatisticsOutput);

    // Members
    get_last_call_rx_bytes_ok(): [boolean, number];

    get_last_call_tx_bytes_ok(): [boolean, number];

    get_result(): boolean;

    get_rx_bytes_ok(): [boolean, number];

    get_rx_overflows(): [boolean, number];

    get_rx_packets_dropped(): [boolean, number];

    get_rx_packets_error(): [boolean, number];

    get_rx_packets_ok(): [boolean, number];

    get_tx_bytes_ok(): [boolean, number];

    get_tx_overflows(): [boolean, number];

    get_tx_packets_dropped(): [boolean, number];

    get_tx_packets_error(): [boolean, number];

    get_tx_packets_ok(): [boolean, number];

    ref(): MessageWdsGetPacketStatisticsOutput;

    unref(): void;
}

export class MessageWdsGetPdnThrottleInfoInput {
    static $gtype: GObject.GType<MessageWdsGetPdnThrottleInfoInput>;

    constructor();
    constructor(copy: MessageWdsGetPdnThrottleInfoInput);

    // Constructors
    static ["new"](): MessageWdsGetPdnThrottleInfoInput;

    // Members
    get_network_type(): [boolean, WdsDataSystemNetworkType];

    ref(): MessageWdsGetPdnThrottleInfoInput;

    set_network_type(value_network_type: WdsDataSystemNetworkType): boolean;

    unref(): void;
}

export class MessageWdsGetPdnThrottleInfoOutput {
    static $gtype: GObject.GType<MessageWdsGetPdnThrottleInfoOutput>;

    constructor(copy: MessageWdsGetPdnThrottleInfoOutput);

    // Members
    get_info(): [boolean, MessageWdsGetPdnThrottleInfoOutputInfoElement[]];

    get_result(): boolean;

    ref(): MessageWdsGetPdnThrottleInfoOutput;

    unref(): void;
}

export class MessageWdsGetPdnThrottleInfoOutputInfoElement {
    static $gtype: GObject.GType<MessageWdsGetPdnThrottleInfoOutputInfoElement>;

    constructor(
        properties?: Partial<{
            ipv4_throttled?: boolean;
            ipv6_throttled?: boolean;
            ipv4_throttle_time_left_ms?: number;
            ipv6_throttle_time_left_ms?: number;
            apn?: string;
        }>
    );
    constructor(copy: MessageWdsGetPdnThrottleInfoOutputInfoElement);

    // Fields
    ipv4_throttled: boolean;
    ipv6_throttled: boolean;
    ipv4_throttle_time_left_ms: number;
    ipv6_throttle_time_left_ms: number;
    apn: string;
}

export class MessageWdsGetProfileListInput {
    static $gtype: GObject.GType<MessageWdsGetProfileListInput>;

    constructor();
    constructor(copy: MessageWdsGetProfileListInput);

    // Constructors
    static ["new"](): MessageWdsGetProfileListInput;

    // Members
    get_profile_type(): [boolean, WdsProfileType];

    ref(): MessageWdsGetProfileListInput;

    set_profile_type(value_profile_type: WdsProfileType): boolean;

    unref(): void;
}

export class MessageWdsGetProfileListOutput {
    static $gtype: GObject.GType<MessageWdsGetProfileListOutput>;

    constructor(copy: MessageWdsGetProfileListOutput);

    // Members
    get_extended_error_code(): [boolean, WdsDsProfileError];

    get_profile_list(): [boolean, MessageWdsGetProfileListOutputProfileListProfile[]];

    get_result(): boolean;

    ref(): MessageWdsGetProfileListOutput;

    unref(): void;
}

export class MessageWdsGetProfileListOutputProfileListProfile {
    static $gtype: GObject.GType<MessageWdsGetProfileListOutputProfileListProfile>;

    constructor(copy: MessageWdsGetProfileListOutputProfileListProfile);

    // Fields
    profile_type: WdsProfileType;
    profile_index: number;
    profile_name: string;
}

export class MessageWdsGetProfileSettingsInput {
    static $gtype: GObject.GType<MessageWdsGetProfileSettingsInput>;

    constructor();
    constructor(copy: MessageWdsGetProfileSettingsInput);

    // Constructors
    static ["new"](): MessageWdsGetProfileSettingsInput;

    // Members
    get_profile_id(): [boolean, WdsProfileType, number];

    ref(): MessageWdsGetProfileSettingsInput;

    set_profile_id(value_profile_id_profile_type: WdsProfileType, value_profile_id_profile_index: number): boolean;

    unref(): void;
}

export class MessageWdsGetProfileSettingsOutput {
    static $gtype: GObject.GType<MessageWdsGetProfileSettingsOutput>;

    constructor(copy: MessageWdsGetProfileSettingsOutput);

    // Members
    get_apn_disabled_flag(): [boolean, boolean];

    get_apn_name(): [boolean, string];

    get_authentication(): [boolean, WdsAuthentication];

    get_extended_error_code(): [boolean, WdsDsProfileError];

    get_gprs_minimum_qos(): [boolean, number, number, number, number, number];

    get_gprs_requested_qos(): [boolean, number, number, number, number, number];

    get_imcn_flag(): [boolean, boolean];

    get_ipv4_address_preference(): [boolean, number];

    get_ipv6_address_preference(): [boolean, number[]];

    get_ipv6_primary_dns_address_preference(): [boolean, number[]];

    get_ipv6_secondary_dns_address_preference(): [boolean, number[]];

    get_lte_qos_parameters(): [boolean, WdsQosClassIdentifier, number, number, number, number];

    get_password(): [boolean, string];

    get_pcscf_address_using_dhcp(): [boolean, boolean];

    get_pcscf_address_using_pco(): [boolean, boolean];

    get_pdp_context_number(): [boolean, number];

    get_pdp_context_primary_id(): [boolean, number];

    get_pdp_context_secondary_flag(): [boolean, boolean];

    get_pdp_data_compression_type(): [boolean, WdsPdpDataCompressionType];

    get_pdp_header_compression_type(): [boolean, WdsPdpHeaderCompressionType];

    get_pdp_type(): [boolean, WdsPdpType];

    get_primary_ipv4_dns_address(): [boolean, number];

    get_profile_name(): [boolean, string];

    get_result(): boolean;

    get_roaming_disallowed_flag(): [boolean, boolean];

    get_secondary_ipv4_dns_address(): [boolean, number];

    get_umts_minimum_qos(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number
    ];

    get_umts_minimum_qos_with_signaling_indication_flag(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number,
        number
    ];

    get_umts_requested_qos(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number
    ];

    get_umts_requested_qos_with_signaling_indication_flag(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number,
        number
    ];

    get_username(): [boolean, string];

    ref(): MessageWdsGetProfileSettingsOutput;

    unref(): void;
}

export class MessageWdsGetSupportedMessagesOutput {
    static $gtype: GObject.GType<MessageWdsGetSupportedMessagesOutput>;

    constructor(copy: MessageWdsGetSupportedMessagesOutput);

    // Members
    get_list(): [boolean, Uint8Array];

    get_result(): boolean;

    ref(): MessageWdsGetSupportedMessagesOutput;

    unref(): void;
}

export class MessageWdsGoActiveOutput {
    static $gtype: GObject.GType<MessageWdsGoActiveOutput>;

    constructor(copy: MessageWdsGoActiveOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWdsGoActiveOutput;

    unref(): void;
}

export class MessageWdsGoDormantOutput {
    static $gtype: GObject.GType<MessageWdsGoDormantOutput>;

    constructor(copy: MessageWdsGoDormantOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWdsGoDormantOutput;

    unref(): void;
}

export class MessageWdsModifyProfileInput {
    static $gtype: GObject.GType<MessageWdsModifyProfileInput>;

    constructor();
    constructor(copy: MessageWdsModifyProfileInput);

    // Constructors
    static ["new"](): MessageWdsModifyProfileInput;

    // Members
    get_apn_disabled_flag(): [boolean, boolean];

    get_apn_name(): [boolean, string];

    get_authentication(): [boolean, WdsAuthentication];

    get_gprs_minimum_qos(): [boolean, number, number, number, number, number];

    get_gprs_requested_qos(): [boolean, number, number, number, number, number];

    get_imcn_flag(): [boolean, boolean];

    get_ipv4_address_preference(): [boolean, number];

    get_ipv6_address_preference(): [boolean, number[]];

    get_ipv6_primary_dns_address_preference(): [boolean, number[]];

    get_ipv6_secondary_dns_address_preference(): [boolean, number[]];

    get_lte_qos_parameters(): [boolean, WdsQosClassIdentifier, number, number, number, number];

    get_password(): [boolean, string];

    get_pcscf_address_using_dhcp(): [boolean, boolean];

    get_pcscf_address_using_pco(): [boolean, boolean];

    get_pdp_context_number(): [boolean, number];

    get_pdp_context_primary_id(): [boolean, number];

    get_pdp_context_secondary_flag(): [boolean, boolean];

    get_pdp_data_compression_type(): [boolean, WdsPdpDataCompressionType];

    get_pdp_header_compression_type(): [boolean, WdsPdpHeaderCompressionType];

    get_pdp_type(): [boolean, WdsPdpType];

    get_primary_ipv4_dns_address(): [boolean, number];

    get_profile_identifier(): [boolean, WdsProfileType, number];

    get_profile_name(): [boolean, string];

    get_roaming_disallowed_flag(): [boolean, boolean];

    get_secondary_ipv4_dns_address(): [boolean, number];

    get_umts_minimum_qos(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number
    ];

    get_umts_minimum_qos_with_signaling_indication_flag(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number,
        number
    ];

    get_umts_requested_qos(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number
    ];

    get_umts_requested_qos_with_signaling_indication_flag(): [
        boolean,
        WdsTrafficClass,
        number,
        number,
        number,
        number,
        WdsDeliveryOrder,
        number,
        WdsSduErrorRatio,
        WdsSduResidualBitErrorRatio,
        WdsSduErroneousDelivery,
        number,
        number,
        number
    ];

    get_username(): [boolean, string];

    ref(): MessageWdsModifyProfileInput;

    set_apn_disabled_flag(value_apn_disabled_flag: boolean): boolean;

    set_apn_name(value_apn_name: string): boolean;

    set_authentication(value_authentication: WdsAuthentication): boolean;

    set_gprs_minimum_qos(
        value_gprs_minimum_qos_precedence_class: number,
        value_gprs_minimum_qos_delay_class: number,
        value_gprs_minimum_qos_reliability_class: number,
        value_gprs_minimum_qos_peak_throughput_class: number,
        value_gprs_minimum_qos_mean_throughput_class: number
    ): boolean;

    set_gprs_requested_qos(
        value_gprs_requested_qos_precedence_class: number,
        value_gprs_requested_qos_delay_class: number,
        value_gprs_requested_qos_reliability_class: number,
        value_gprs_requested_qos_peak_throughput_class: number,
        value_gprs_requested_qos_mean_throughput_class: number
    ): boolean;

    set_imcn_flag(value_imcn_flag: boolean): boolean;

    set_ipv4_address_preference(value_ipv4_address_preference: number): boolean;

    set_ipv6_address_preference(value_ipv6_address_preference_address: number[]): boolean;

    set_ipv6_primary_dns_address_preference(value_ipv6_primary_dns_address_preference: number[]): boolean;

    set_ipv6_secondary_dns_address_preference(value_ipv6_secondary_dns_address_preference: number[]): boolean;

    set_lte_qos_parameters(
        value_lte_qos_parameters_qos_class_identifier: WdsQosClassIdentifier,
        value_lte_qos_parameters_guaranteed_downlink_bitrate: number,
        value_lte_qos_parameters_max_downlink_bitrate: number,
        value_lte_qos_parameters_guaranteed_uplink_bitrate: number,
        value_lte_qos_parameters_max_uplink_bitrate: number
    ): boolean;

    set_password(value_password: string): boolean;

    set_pcscf_address_using_dhcp(value_pcscf_address_using_dhcp: boolean): boolean;

    set_pcscf_address_using_pco(value_pcscf_address_using_pco: boolean): boolean;

    set_pdp_context_number(value_pdp_context_number: number): boolean;

    set_pdp_context_primary_id(value_pdp_context_primary_id: number): boolean;

    set_pdp_context_secondary_flag(value_pdp_context_secondary_flag: boolean): boolean;

    set_pdp_data_compression_type(value_pdp_data_compression_type: WdsPdpDataCompressionType): boolean;

    set_pdp_header_compression_type(value_pdp_header_compression_type: WdsPdpHeaderCompressionType): boolean;

    set_pdp_type(value_pdp_type: WdsPdpType): boolean;

    set_primary_ipv4_dns_address(value_primary_ipv4_dns_address: number): boolean;

    set_profile_identifier(
        value_profile_identifier_profile_type: WdsProfileType,
        value_profile_identifier_profile_index: number
    ): boolean;

    set_profile_name(value_profile_name: string): boolean;

    set_roaming_disallowed_flag(value_roaming_disallowed_flag: boolean): boolean;

    set_secondary_ipv4_dns_address(value_secondary_ipv4_dns_address: number): boolean;

    set_umts_minimum_qos(
        value_umts_minimum_qos_traffic_class: WdsTrafficClass,
        value_umts_minimum_qos_max_uplink_bitrate: number,
        value_umts_minimum_qos_max_downlink_bitrate: number,
        value_umts_minimum_qos_guaranteed_uplink_bitrate: number,
        value_umts_minimum_qos_guaranteed_downlink_bitrate: number,
        value_umts_minimum_qos_qos_delivery_order: WdsDeliveryOrder,
        value_umts_minimum_qos_maximum_sdu_size: number,
        value_umts_minimum_qos_sdu_error_ratio: WdsSduErrorRatio,
        value_umts_minimum_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio,
        value_umts_minimum_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery,
        value_umts_minimum_qos_transfer_delay: number,
        value_umts_minimum_qos_traffic_handling_priority: number
    ): boolean;

    set_umts_minimum_qos_with_signaling_indication_flag(
        value_umts_minimum_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass,
        value_umts_minimum_qos_with_signaling_indication_flag_max_uplink_bitrate: number,
        value_umts_minimum_qos_with_signaling_indication_flag_max_downlink_bitrate: number,
        value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number,
        value_umts_minimum_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number,
        value_umts_minimum_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder,
        value_umts_minimum_qos_with_signaling_indication_flag_maximum_sdu_size: number,
        value_umts_minimum_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio,
        value_umts_minimum_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio,
        value_umts_minimum_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery,
        value_umts_minimum_qos_with_signaling_indication_flag_transfer_delay: number,
        value_umts_minimum_qos_with_signaling_indication_flag_traffic_handling_priority: number,
        value_umts_minimum_qos_with_signaling_indication_flag_signaling_indication: number
    ): boolean;

    set_umts_requested_qos(
        value_umts_requested_qos_traffic_class: WdsTrafficClass,
        value_umts_requested_qos_max_uplink_bitrate: number,
        value_umts_requested_qos_max_downlink_bitrate: number,
        value_umts_requested_qos_guaranteed_uplink_bitrate: number,
        value_umts_requested_qos_guaranteed_downlink_bitrate: number,
        value_umts_requested_qos_qos_delivery_order: WdsDeliveryOrder,
        value_umts_requested_qos_maximum_sdu_size: number,
        value_umts_requested_qos_sdu_error_ratio: WdsSduErrorRatio,
        value_umts_requested_qos_residual_bit_error_ratio: WdsSduResidualBitErrorRatio,
        value_umts_requested_qos_delivery_erroneous_sdu: WdsSduErroneousDelivery,
        value_umts_requested_qos_transfer_delay: number,
        value_umts_requested_qos_traffic_handling_priority: number
    ): boolean;

    set_umts_requested_qos_with_signaling_indication_flag(
        value_umts_requested_qos_with_signaling_indication_flag_traffic_class: WdsTrafficClass,
        value_umts_requested_qos_with_signaling_indication_flag_max_uplink_bitrate: number,
        value_umts_requested_qos_with_signaling_indication_flag_max_downlink_bitrate: number,
        value_umts_requested_qos_with_signaling_indication_flag_guaranteed_uplink_bitrate: number,
        value_umts_requested_qos_with_signaling_indication_flag_guaranteed_downlink_bitrate: number,
        value_umts_requested_qos_with_signaling_indication_flag_qos_delivery_order: WdsDeliveryOrder,
        value_umts_requested_qos_with_signaling_indication_flag_maximum_sdu_size: number,
        value_umts_requested_qos_with_signaling_indication_flag_sdu_error_ratio: WdsSduErrorRatio,
        value_umts_requested_qos_with_signaling_indication_flag_residual_bit_error_ratio: WdsSduResidualBitErrorRatio,
        value_umts_requested_qos_with_signaling_indication_flag_delivery_erroneous_sdu: WdsSduErroneousDelivery,
        value_umts_requested_qos_with_signaling_indication_flag_transfer_delay: number,
        value_umts_requested_qos_with_signaling_indication_flag_traffic_handling_priority: number,
        value_umts_requested_qos_with_signaling_indication_flag_signaling_indication: number
    ): boolean;

    set_username(value_username: string): boolean;

    unref(): void;
}

export class MessageWdsModifyProfileOutput {
    static $gtype: GObject.GType<MessageWdsModifyProfileOutput>;

    constructor(copy: MessageWdsModifyProfileOutput);

    // Members
    get_extended_error_code(): [boolean, WdsDsProfileError];

    get_result(): boolean;

    ref(): MessageWdsModifyProfileOutput;

    unref(): void;
}

export class MessageWdsResetOutput {
    static $gtype: GObject.GType<MessageWdsResetOutput>;

    constructor(copy: MessageWdsResetOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWdsResetOutput;

    unref(): void;
}

export class MessageWdsSetAutoconnectSettingsInput {
    static $gtype: GObject.GType<MessageWdsSetAutoconnectSettingsInput>;

    constructor();
    constructor(copy: MessageWdsSetAutoconnectSettingsInput);

    // Constructors
    static ["new"](): MessageWdsSetAutoconnectSettingsInput;

    // Members
    get_roaming(): [boolean, WdsAutoconnectSettingRoaming];

    get_status(): [boolean, WdsAutoconnectSetting];

    ref(): MessageWdsSetAutoconnectSettingsInput;

    set_roaming(value_roaming: WdsAutoconnectSettingRoaming): boolean;

    set_status(value_status: WdsAutoconnectSetting): boolean;

    unref(): void;
}

export class MessageWdsSetAutoconnectSettingsOutput {
    static $gtype: GObject.GType<MessageWdsSetAutoconnectSettingsOutput>;

    constructor(copy: MessageWdsSetAutoconnectSettingsOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWdsSetAutoconnectSettingsOutput;

    unref(): void;
}

export class MessageWdsSetDefaultProfileNumInput {
    static $gtype: GObject.GType<MessageWdsSetDefaultProfileNumInput>;

    constructor();
    constructor(copy: MessageWdsSetDefaultProfileNumInput);

    // Constructors
    static ["new"](): MessageWdsSetDefaultProfileNumInput;

    // Members
    get_profile_identifier(): [boolean, WdsProfileType, WdsProfileFamily, number];

    ref(): MessageWdsSetDefaultProfileNumInput;

    set_profile_identifier(
        value_profile_identifier_profile_type: WdsProfileType,
        value_profile_identifier_profile_family: WdsProfileFamily,
        value_profile_identifier_profile_index: number
    ): boolean;

    unref(): void;
}

export class MessageWdsSetDefaultProfileNumOutput {
    static $gtype: GObject.GType<MessageWdsSetDefaultProfileNumOutput>;

    constructor(copy: MessageWdsSetDefaultProfileNumOutput);

    // Members
    get_extended_error_code(): [boolean, WdsDsProfileError];

    get_result(): boolean;

    ref(): MessageWdsSetDefaultProfileNumOutput;

    unref(): void;
}

export class MessageWdsSetEventReportInput {
    static $gtype: GObject.GType<MessageWdsSetEventReportInput>;

    constructor();
    constructor(copy: MessageWdsSetEventReportInput);

    // Constructors
    static ["new"](): MessageWdsSetEventReportInput;

    // Members
    get_channel_rate(): [boolean, boolean];

    get_current_data_bearer_technology(): [boolean, boolean];

    get_data_bearer_technology(): [boolean, boolean];

    get_data_call_status(): [boolean, boolean];

    get_data_systems(): [boolean, boolean];

    get_dormancy_status(): [boolean, boolean];

    get_evdo_pm_change(): [boolean, boolean];

    get_extended_data_bearer_technology(): [boolean, boolean];

    get_limited_data_system_status(): [boolean, boolean];

    get_mip_status(): [boolean, number];

    get_pdn_filter_removals(): [boolean, boolean];

    get_preferred_data_system(): [boolean, boolean];

    get_transfer_statistics(): [boolean, number, WdsSetEventReportTransferStatistics];

    get_uplink_flow_control(): [boolean, boolean];

    ref(): MessageWdsSetEventReportInput;

    set_channel_rate(value_channel_rate: boolean): boolean;

    set_current_data_bearer_technology(value_current_data_bearer_technology: boolean): boolean;

    set_data_bearer_technology(value_data_bearer_technology: boolean): boolean;

    set_data_call_status(value_data_call_status: boolean): boolean;

    set_data_systems(value_data_systems: boolean): boolean;

    set_dormancy_status(value_dormancy_status: boolean): boolean;

    set_evdo_pm_change(value_evdo_pm_change: boolean): boolean;

    set_extended_data_bearer_technology(value_extended_data_bearer_technology: boolean): boolean;

    set_limited_data_system_status(value_limited_data_system_status: boolean): boolean;

    set_mip_status(value_mip_status: number): boolean;

    set_pdn_filter_removals(value_pdn_filter_removals: boolean): boolean;

    set_preferred_data_system(value_preferred_data_system: boolean): boolean;

    set_transfer_statistics(
        value_transfer_statistics_interval_seconds: number,
        value_transfer_statistics_indicators: WdsSetEventReportTransferStatistics
    ): boolean;

    set_uplink_flow_control(value_uplink_flow_control: boolean): boolean;

    unref(): void;
}

export class MessageWdsSetEventReportOutput {
    static $gtype: GObject.GType<MessageWdsSetEventReportOutput>;

    constructor(copy: MessageWdsSetEventReportOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWdsSetEventReportOutput;

    unref(): void;
}

export class MessageWdsSetIpFamilyInput {
    static $gtype: GObject.GType<MessageWdsSetIpFamilyInput>;

    constructor();
    constructor(copy: MessageWdsSetIpFamilyInput);

    // Constructors
    static ["new"](): MessageWdsSetIpFamilyInput;

    // Members
    get_preference(): [boolean, WdsIpFamily];

    ref(): MessageWdsSetIpFamilyInput;

    set_preference(value_preference: WdsIpFamily): boolean;

    unref(): void;
}

export class MessageWdsSetIpFamilyOutput {
    static $gtype: GObject.GType<MessageWdsSetIpFamilyOutput>;

    constructor(copy: MessageWdsSetIpFamilyOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWdsSetIpFamilyOutput;

    unref(): void;
}

export class MessageWdsStartNetworkInput {
    static $gtype: GObject.GType<MessageWdsStartNetworkInput>;

    constructor();
    constructor(copy: MessageWdsStartNetworkInput);

    // Constructors
    static ["new"](): MessageWdsStartNetworkInput;

    // Members
    get_apn(): [boolean, string];

    get_authentication_preference(): [boolean, WdsAuthentication];

    get_call_type(): [boolean, WdsCallType];

    get_enable_autoconnect(): [boolean, boolean];

    get_extended_technology_preference(): [boolean, WdsExtendedTechnologyPreference];

    get_ip_family_preference(): [boolean, WdsIpFamily];

    get_ipv4_address_preference(): [boolean, number];

    get_password(): [boolean, string];

    get_primary_dns_address_preference(): [boolean, number];

    get_primary_nbns_address_preference(): [boolean, number];

    get_profile_index_3gpp(): [boolean, number];

    get_profile_index_3gpp2(): [boolean, number];

    get_secondary_dns_address_preference(): [boolean, number];

    get_secondary_nbns_address_preference(): [boolean, number];

    get_technology_preference(): [boolean, WdsTechnologyPreference];

    get_username(): [boolean, string];

    ref(): MessageWdsStartNetworkInput;

    set_apn(value_apn: string): boolean;

    set_authentication_preference(value_authentication_preference: WdsAuthentication): boolean;

    set_call_type(value_call_type: WdsCallType): boolean;

    set_enable_autoconnect(value_enable_autoconnect: boolean): boolean;

    set_extended_technology_preference(value_extended_technology_preference: WdsExtendedTechnologyPreference): boolean;

    set_ip_family_preference(value_ip_family_preference: WdsIpFamily): boolean;

    set_ipv4_address_preference(value_ipv4_address_preference: number): boolean;

    set_password(value_password: string): boolean;

    set_primary_dns_address_preference(value_primary_dns_address_preference: number): boolean;

    set_primary_nbns_address_preference(value_primary_nbns_address_preference: number): boolean;

    set_profile_index_3gpp(value_profile_index_3gpp: number): boolean;

    set_profile_index_3gpp2(value_profile_index_3gpp2: number): boolean;

    set_secondary_dns_address_preference(value_secondary_dns_address_preference: number): boolean;

    set_secondary_nbns_address_preference(value_secondary_nbns_address_preference: number): boolean;

    set_technology_preference(value_technology_preference: WdsTechnologyPreference): boolean;

    set_username(value_username: string): boolean;

    unref(): void;
}

export class MessageWdsStartNetworkOutput {
    static $gtype: GObject.GType<MessageWdsStartNetworkOutput>;

    constructor(copy: MessageWdsStartNetworkOutput);

    // Members
    get_call_end_reason(): [boolean, WdsCallEndReason];

    get_packet_data_handle(): [boolean, number];

    get_result(): boolean;

    get_verbose_call_end_reason(): [boolean, WdsVerboseCallEndReasonType, number];

    ref(): MessageWdsStartNetworkOutput;

    unref(): void;
}

export class MessageWdsStopNetworkInput {
    static $gtype: GObject.GType<MessageWdsStopNetworkInput>;

    constructor();
    constructor(copy: MessageWdsStopNetworkInput);

    // Constructors
    static ["new"](): MessageWdsStopNetworkInput;

    // Members
    get_disable_autoconnect(): [boolean, boolean];

    get_packet_data_handle(): [boolean, number];

    ref(): MessageWdsStopNetworkInput;

    set_disable_autoconnect(value_disable_autoconnect: boolean): boolean;

    set_packet_data_handle(value_packet_data_handle: number): boolean;

    unref(): void;
}

export class MessageWdsStopNetworkOutput {
    static $gtype: GObject.GType<MessageWdsStopNetworkOutput>;

    constructor(copy: MessageWdsStopNetworkOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWdsStopNetworkOutput;

    unref(): void;
}

export class MessageWdsSwiCreateProfileIndexedInput {
    static $gtype: GObject.GType<MessageWdsSwiCreateProfileIndexedInput>;

    constructor();
    constructor(copy: MessageWdsSwiCreateProfileIndexedInput);

    // Constructors
    static ["new"](): MessageWdsSwiCreateProfileIndexedInput;

    // Members
    get_apn_disabled_flag(): [boolean, boolean];

    get_apn_name(): [boolean, string];

    get_authentication(): [boolean, WdsAuthentication];

    get_ipv4_address_preference(): [boolean, number];

    get_password(): [boolean, string];

    get_pdp_context_number(): [boolean, number];

    get_pdp_type(): [boolean, WdsPdpType];

    get_primary_ipv4_dns_address(): [boolean, number];

    get_profile_identifier(): [boolean, WdsProfileType, number];

    get_profile_name(): [boolean, string];

    get_roaming_disallowed_flag(): [boolean, boolean];

    get_secondary_ipv4_dns_address(): [boolean, number];

    get_username(): [boolean, string];

    ref(): MessageWdsSwiCreateProfileIndexedInput;

    set_apn_disabled_flag(value_apn_disabled_flag: boolean): boolean;

    set_apn_name(value_apn_name: string): boolean;

    set_authentication(value_authentication: WdsAuthentication): boolean;

    set_ipv4_address_preference(value_ipv4_address_preference: number): boolean;

    set_password(value_password: string): boolean;

    set_pdp_context_number(value_pdp_context_number: number): boolean;

    set_pdp_type(value_pdp_type: WdsPdpType): boolean;

    set_primary_ipv4_dns_address(value_primary_ipv4_dns_address: number): boolean;

    set_profile_identifier(
        value_profile_identifier_profile_type: WdsProfileType,
        value_profile_identifier_profile_index: number
    ): boolean;

    set_profile_name(value_profile_name: string): boolean;

    set_roaming_disallowed_flag(value_roaming_disallowed_flag: boolean): boolean;

    set_secondary_ipv4_dns_address(value_secondary_ipv4_dns_address: number): boolean;

    set_username(value_username: string): boolean;

    unref(): void;
}

export class MessageWdsSwiCreateProfileIndexedOutput {
    static $gtype: GObject.GType<MessageWdsSwiCreateProfileIndexedOutput>;

    constructor(copy: MessageWdsSwiCreateProfileIndexedOutput);

    // Members
    get_profile_identifier(): [boolean, WdsProfileType, number];

    get_result(): boolean;

    ref(): MessageWdsSwiCreateProfileIndexedOutput;

    unref(): void;
}

export class MessageWmsDeleteInput {
    static $gtype: GObject.GType<MessageWmsDeleteInput>;

    constructor();
    constructor(copy: MessageWmsDeleteInput);

    // Constructors
    static ["new"](): MessageWmsDeleteInput;

    // Members
    get_memory_index(): [boolean, number];

    get_memory_storage(): [boolean, WmsStorageType];

    get_message_mode(): [boolean, WmsMessageMode];

    get_message_tag(): [boolean, WmsMessageTagType];

    ref(): MessageWmsDeleteInput;

    set_memory_index(value_memory_index: number): boolean;

    set_memory_storage(value_memory_storage: WmsStorageType): boolean;

    set_message_mode(value_message_mode: WmsMessageMode): boolean;

    set_message_tag(value_message_tag: WmsMessageTagType): boolean;

    unref(): void;
}

export class MessageWmsDeleteOutput {
    static $gtype: GObject.GType<MessageWmsDeleteOutput>;

    constructor(copy: MessageWmsDeleteOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWmsDeleteOutput;

    unref(): void;
}

export class MessageWmsGetMessageProtocolOutput {
    static $gtype: GObject.GType<MessageWmsGetMessageProtocolOutput>;

    constructor(copy: MessageWmsGetMessageProtocolOutput);

    // Members
    get_message_protocol(): [boolean, WmsMessageProtocol];

    get_result(): boolean;

    ref(): MessageWmsGetMessageProtocolOutput;

    unref(): void;
}

export class MessageWmsGetRoutesOutput {
    static $gtype: GObject.GType<MessageWmsGetRoutesOutput>;

    constructor(copy: MessageWmsGetRoutesOutput);

    // Members
    get_result(): boolean;

    get_route_list(): [boolean, MessageWmsGetRoutesOutputRouteListElement[]];

    get_transfer_status_report(): [boolean, WmsTransferIndication];

    ref(): MessageWmsGetRoutesOutput;

    unref(): void;
}

export class MessageWmsGetRoutesOutputRouteListElement {
    static $gtype: GObject.GType<MessageWmsGetRoutesOutputRouteListElement>;

    constructor(copy: MessageWmsGetRoutesOutputRouteListElement);

    // Fields
    message_type: WmsMessageType;
    message_class: WmsMessageClass;
    storage: WmsStorageType;
    receipt_action: WmsReceiptAction;
}

export class MessageWmsGetSupportedMessagesOutput {
    static $gtype: GObject.GType<MessageWmsGetSupportedMessagesOutput>;

    constructor(copy: MessageWmsGetSupportedMessagesOutput);

    // Members
    get_list(): [boolean, Uint8Array];

    get_result(): boolean;

    ref(): MessageWmsGetSupportedMessagesOutput;

    unref(): void;
}

export class MessageWmsListMessagesInput {
    static $gtype: GObject.GType<MessageWmsListMessagesInput>;

    constructor();
    constructor(copy: MessageWmsListMessagesInput);

    // Constructors
    static ["new"](): MessageWmsListMessagesInput;

    // Members
    get_message_mode(): [boolean, WmsMessageMode];

    get_message_tag(): [boolean, WmsMessageTagType];

    get_storage_type(): [boolean, WmsStorageType];

    ref(): MessageWmsListMessagesInput;

    set_message_mode(value_message_mode: WmsMessageMode): boolean;

    set_message_tag(value_message_tag: WmsMessageTagType): boolean;

    set_storage_type(value_storage_type: WmsStorageType): boolean;

    unref(): void;
}

export class MessageWmsListMessagesOutput {
    static $gtype: GObject.GType<MessageWmsListMessagesOutput>;

    constructor(copy: MessageWmsListMessagesOutput);

    // Members
    get_message_list(): [boolean, MessageWmsListMessagesOutputMessageListElement[]];

    get_result(): boolean;

    ref(): MessageWmsListMessagesOutput;

    unref(): void;
}

export class MessageWmsListMessagesOutputMessageListElement {
    static $gtype: GObject.GType<MessageWmsListMessagesOutputMessageListElement>;

    constructor(copy: MessageWmsListMessagesOutputMessageListElement);

    // Fields
    memory_index: number;
    message_tag: WmsMessageTagType;
}

export class MessageWmsModifyTagInput {
    static $gtype: GObject.GType<MessageWmsModifyTagInput>;

    constructor();
    constructor(copy: MessageWmsModifyTagInput);

    // Constructors
    static ["new"](): MessageWmsModifyTagInput;

    // Members
    get_message_mode(): [boolean, WmsMessageMode];

    get_message_tag(): [boolean, WmsStorageType, number, WmsMessageTagType];

    ref(): MessageWmsModifyTagInput;

    set_message_mode(value_message_mode: WmsMessageMode): boolean;

    set_message_tag(
        value_message_tag_storage_type: WmsStorageType,
        value_message_tag_memory_index: number,
        value_message_tag_message_tag: WmsMessageTagType
    ): boolean;

    unref(): void;
}

export class MessageWmsModifyTagOutput {
    static $gtype: GObject.GType<MessageWmsModifyTagOutput>;

    constructor(copy: MessageWmsModifyTagOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWmsModifyTagOutput;

    unref(): void;
}

export class MessageWmsRawReadInput {
    static $gtype: GObject.GType<MessageWmsRawReadInput>;

    constructor();
    constructor(copy: MessageWmsRawReadInput);

    // Constructors
    static ["new"](): MessageWmsRawReadInput;

    // Members
    get_message_memory_storage_id(): [boolean, WmsStorageType, number];

    get_message_mode(): [boolean, WmsMessageMode];

    get_sms_on_ims(): [boolean, boolean];

    ref(): MessageWmsRawReadInput;

    set_message_memory_storage_id(
        value_message_memory_storage_id_storage_type: WmsStorageType,
        value_message_memory_storage_id_memory_index: number
    ): boolean;

    set_message_mode(value_message_mode: WmsMessageMode): boolean;

    set_sms_on_ims(value_sms_on_ims: boolean): boolean;

    unref(): void;
}

export class MessageWmsRawReadOutput {
    static $gtype: GObject.GType<MessageWmsRawReadOutput>;

    constructor(copy: MessageWmsRawReadOutput);

    // Members
    get_raw_message_data(): [boolean, WmsMessageTagType, WmsMessageFormat, Uint8Array];

    get_result(): boolean;

    ref(): MessageWmsRawReadOutput;

    unref(): void;
}

export class MessageWmsRawSendInput {
    static $gtype: GObject.GType<MessageWmsRawSendInput>;

    constructor();
    constructor(copy: MessageWmsRawSendInput);

    // Constructors
    static ["new"](): MessageWmsRawSendInput;

    // Members
    get_cdma_follow_on_dc(): [boolean, boolean];

    get_cdma_force_on_dc(): [boolean, boolean, WmsCdmaServiceOption];

    get_gsm_wcdma_link_timer(): [boolean, number];

    get_raw_message_data(): [boolean, WmsMessageFormat, Uint8Array];

    get_sms_on_ims(): [boolean, boolean];

    ref(): MessageWmsRawSendInput;

    set_cdma_follow_on_dc(value_cdma_follow_on_dc_follow: boolean): boolean;

    set_cdma_force_on_dc(
        value_cdma_force_on_dc_force: boolean,
        value_cdma_force_on_dc_service_option: WmsCdmaServiceOption
    ): boolean;

    set_gsm_wcdma_link_timer(value_gsm_wcdma_link_timer: number): boolean;

    set_raw_message_data(
        value_raw_message_data_format: WmsMessageFormat,
        value_raw_message_data_raw_data: Uint8Array | string
    ): boolean;

    set_sms_on_ims(value_sms_on_ims: boolean): boolean;

    unref(): void;
}

export class MessageWmsRawSendOutput {
    static $gtype: GObject.GType<MessageWmsRawSendOutput>;

    constructor(copy: MessageWmsRawSendOutput);

    // Members
    get_cdma_cause_code(): [boolean, WmsCdmaCauseCode];

    get_cdma_error_class(): [boolean, WmsCdmaErrorClass];

    get_gsm_wcdma_cause_info(): [boolean, WmsGsmUmtsRpCause, WmsGsmUmtsTpCause];

    get_message_delivery_failure_type(): [boolean, WmsMessageDeliveryFailureType];

    get_message_id(): [boolean, number];

    get_result(): boolean;

    ref(): MessageWmsRawSendOutput;

    unref(): void;
}

export class MessageWmsRawWriteInput {
    static $gtype: GObject.GType<MessageWmsRawWriteInput>;

    constructor();
    constructor(copy: MessageWmsRawWriteInput);

    // Constructors
    static ["new"](): MessageWmsRawWriteInput;

    // Members
    get_raw_message_data(): [boolean, WmsStorageType, WmsMessageFormat, Uint8Array];

    ref(): MessageWmsRawWriteInput;

    set_raw_message_data(
        value_raw_message_data_storage_type: WmsStorageType,
        value_raw_message_data_format: WmsMessageFormat,
        value_raw_message_data_raw_data: Uint8Array | string
    ): boolean;

    unref(): void;
}

export class MessageWmsRawWriteOutput {
    static $gtype: GObject.GType<MessageWmsRawWriteOutput>;

    constructor(copy: MessageWmsRawWriteOutput);

    // Members
    get_memory_index(): [boolean, number];

    get_result(): boolean;

    ref(): MessageWmsRawWriteOutput;

    unref(): void;
}

export class MessageWmsResetOutput {
    static $gtype: GObject.GType<MessageWmsResetOutput>;

    constructor(copy: MessageWmsResetOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWmsResetOutput;

    unref(): void;
}

export class MessageWmsSendFromMemoryStorageInput {
    static $gtype: GObject.GType<MessageWmsSendFromMemoryStorageInput>;

    constructor();
    constructor(copy: MessageWmsSendFromMemoryStorageInput);

    // Constructors
    static ["new"](): MessageWmsSendFromMemoryStorageInput;

    // Members
    get_information(): [boolean, WmsStorageType, number, WmsMessageMode];

    get_sms_on_ims(): [boolean, boolean];

    ref(): MessageWmsSendFromMemoryStorageInput;

    set_information(
        value_information_storage_type: WmsStorageType,
        value_information_memory_index: number,
        value_information_message_mode: WmsMessageMode
    ): boolean;

    set_sms_on_ims(value_sms_on_ims: boolean): boolean;

    unref(): void;
}

export class MessageWmsSendFromMemoryStorageOutput {
    static $gtype: GObject.GType<MessageWmsSendFromMemoryStorageOutput>;

    constructor(copy: MessageWmsSendFromMemoryStorageOutput);

    // Members
    get_cdma_cause_code(): [boolean, WmsCdmaCauseCode];

    get_cdma_error_class(): [boolean, WmsCdmaErrorClass];

    get_gsm_wcdma_cause_info(): [boolean, WmsGsmUmtsRpCause, WmsGsmUmtsTpCause];

    get_message_delivery_failure_type(): [boolean, WmsMessageDeliveryFailureType];

    get_message_id(): [boolean, number];

    get_result(): boolean;

    ref(): MessageWmsSendFromMemoryStorageOutput;

    unref(): void;
}

export class MessageWmsSetEventReportInput {
    static $gtype: GObject.GType<MessageWmsSetEventReportInput>;

    constructor();
    constructor(copy: MessageWmsSetEventReportInput);

    // Constructors
    static ["new"](): MessageWmsSetEventReportInput;

    // Members
    get_new_mt_message_indicator(): [boolean, boolean];

    ref(): MessageWmsSetEventReportInput;

    set_new_mt_message_indicator(value_new_mt_message_indicator_report: boolean): boolean;

    unref(): void;
}

export class MessageWmsSetEventReportOutput {
    static $gtype: GObject.GType<MessageWmsSetEventReportOutput>;

    constructor(copy: MessageWmsSetEventReportOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWmsSetEventReportOutput;

    unref(): void;
}

export class MessageWmsSetRoutesInput {
    static $gtype: GObject.GType<MessageWmsSetRoutesInput>;

    constructor();
    constructor(copy: MessageWmsSetRoutesInput);

    // Constructors
    static ["new"](): MessageWmsSetRoutesInput;

    // Members
    get_route_list(): [boolean, MessageWmsSetRoutesInputRouteListElement[]];

    get_transfer_status_report(): [boolean, WmsTransferIndication];

    ref(): MessageWmsSetRoutesInput;

    set_route_list(value_route_list: MessageWmsSetRoutesInputRouteListElement[]): boolean;

    set_transfer_status_report(value_transfer_status_report: WmsTransferIndication): boolean;

    unref(): void;
}

export class MessageWmsSetRoutesInputRouteListElement {
    static $gtype: GObject.GType<MessageWmsSetRoutesInputRouteListElement>;

    constructor(copy: MessageWmsSetRoutesInputRouteListElement);

    // Fields
    message_type: WmsMessageType;
    message_class: WmsMessageClass;
    storage: WmsStorageType;
    receipt_action: WmsReceiptAction;
}

export class MessageWmsSetRoutesOutput {
    static $gtype: GObject.GType<MessageWmsSetRoutesOutput>;

    constructor(copy: MessageWmsSetRoutesOutput);

    // Members
    get_result(): boolean;

    ref(): MessageWmsSetRoutesOutput;

    unref(): void;
}

export class PhysicalSlotInformationSlot {
    static $gtype: GObject.GType<PhysicalSlotInformationSlot>;

    constructor(copy: PhysicalSlotInformationSlot);

    // Fields
    card_protocol: UimCardProtocol;
    valid_applications: number;
    atr_value: any[];
    is_euicc: boolean;
}

export class PhysicalSlotStatusSlot {
    static $gtype: GObject.GType<PhysicalSlotStatusSlot>;

    constructor(copy: PhysicalSlotStatusSlot);

    // Fields
    physical_card_status: UimPhysicalCardState;
    physical_slot_status: UimSlotState;
    logical_slot: number;
    iccid: any[];
}

export class ProxyPrivate {
    static $gtype: GObject.GType<ProxyPrivate>;

    constructor(copy: ProxyPrivate);
}

export type DeprecatedNasSimRejectState = number;
export type DeprecatedProtocolError = number;
export type DeprecatedWdsCdmaCauseCode = number;
export type DeprecatedWdsVerboseCallEndReasonCm = number;
export type Message = GLib.ByteArray;
export type MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoCellElement = MessageNasGetCellLocationInfoOutputIntrafrequencyLteInfoV2CellElement;
export type MessageNasGetCellLocationInfoOutputUmtsInfoCellElement = MessageNasGetCellLocationInfoOutputUmtsInfoV2CellElement;
export type MessageNasGetCellLocationInfoOutputUmtsInfoNeighboringGeranElement = MessageNasGetCellLocationInfoOutputUmtsInfoV2NeighboringGeranElement;
