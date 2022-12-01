/**
 * @param {string} uuid - extension uuid
 * @param {Gio.DBusMethodInvocation} invocation - the caller
 * @returns {void}
 */
declare function installExtension(uuid: string, invocation: Gio.DBusMethodInvocation): void;
declare function uninstallExtension(uuid: any): boolean;
/**
 * Check return status of reponse
 *
 * @param {Soup.Message} message - an http response
 * @returns {void}
 * @throws
 */
declare function checkResponse(message: Soup.Message): void;
/**
 * @param {GLib.Bytes} bytes - archive data
 * @param {Gio.File} dir - target directory
 * @returns {void}
 */
declare function extractExtensionArchive(bytes: GLib.Bytes, dir: Gio.File): void;
/**
 * @param {string} uuid - extension uuid
 * @returns {void}
 */
declare function downloadExtensionUpdate(uuid: string): void;
/**
 * Check extensions.gnome.org for updates
 *
 * @returns {void}
 */
declare function checkForUpdates(): void;
declare function init(): void;
declare function init(): void;
declare function init(): void;
declare const Clutter: any;
declare const Gio: any;
declare const GLib: any;
declare const GObject: any;
declare const Soup: any;
declare const Config: any;
declare const Dialog: any;
declare const ExtensionUtils: any;
declare const FileUtils: any;
declare const Main: any;
declare const ModalDialog: any;
declare var REPOSITORY_URL_DOWNLOAD: string;
declare var REPOSITORY_URL_INFO: string;
declare var REPOSITORY_URL_UPDATE: string;
declare let _httpSession: any;
declare var InstallExtensionDialog: any;
//# sourceMappingURL=extensionDownloader.d.ts.map