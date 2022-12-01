/* eslint-disable jsdoc/check-param-names,jsdoc/require-param-description,jsdoc/require-param-type,jsdoc/check-tag-names,@typescript-eslint/no-unused-vars */
// noinspection JSUnusedGlobalSymbols,ES6UnusedImports,SpellCheckingInspection

import * as Clutter from '../../@types/clutter';
import * as Gio from '../../@types/gio';
import * as GLib from '../../@types/glib';
import * as GObject from '../../@types/gobject';
import * as Meta from '../../@types/meta';
import * as Shell from '../../@types/shell';
import * as St from '../../@types/st';

/* eslint-disable @typescript-eslint/no-explicit-any */
export function _sessionUpdated(): void;
/**
 * @param {any...} args a list of values to log
 */
export function _loggingFunc(...args: any[]): void;
export function start(): void;
export function _initializeUI(): void;
export function _handleShowWelcomeScreen(): void;
export function _handleLockScreenWarning(): Promise<void>;
export function _getStylesheet(name: any): any;
export function _getDefaultStylesheet(): any;
export function _loadDefaultStylesheet(): void;
/**
 * getThemeStylesheet:
 *
 * Get the theme CSS file that the shell will load
 *
 * @returns {?Gio.File}: A #GFile that contains the theme CSS,
 *          null if using the default
 */
export function getThemeStylesheet(): Gio.File;
/**
 * setThemeStylesheet:
 *
 * @param {string=} cssStylesheet: A file path that contains the theme CSS,
 *     set it to null to use the default
 *
 * Set the theme CSS file that the shell will load
 * @param cssStylesheet
 */
export function setThemeStylesheet(cssStylesheet?: string | undefined): void;
export function reloadThemeResource(): void;
/** @private */
export function _loadIcons(): void;
export function _loadOskLayouts(): void;
/**
 * loadTheme:
 *
 * Reloads the theme CSS file
 */
export function loadTheme(): void;
/**
 * notify:
 *
 * @param {string} msg: A message
 * @param {string} details: Additional information
 * @param msg
 * @param details
 */
export function notify(msg: string, details?: string): void;
/**
 * notifyError:
 *
 * @param {string} msg: An error message
 * @param {string} details: Additional information
 *
 * See shell_global_notify_problem().
 * @param msg
 * @param details
 */
export function notifyError(msg: string, details?: string): void;
/**
 * _findModal:
 *
 * @param {Clutter.Grab} grab - grab
 *
 * Private function.
 *
 */
export function _findModal(grab: Clutter.Grab): number;
/**
 * pushModal:
 *
 * @param {Clutter.Actor} actor: actor which will be given keyboard focus
 * @param {object=} params: optional parameters
 *
 * Ensure we are in a mode where all keyboard and mouse input goes to
 * the stage, and focus @actor. Multiple calls to this function act in
 * a stacking fashion; the effect will be undone when an equal number
 * of popModal() invocations have been made.
 *
 * Next, record the current Clutter keyboard focus on a stack. If the
 * modal stack returns to this actor, reset the focus to the actor
 * which was focused at the time pushModal() was invoked.
 *
 * @param actor
 * @param params
 * @params may be used to provide the following parameters:
 *  - timestamp: used to associate the call with a specific user initiated
 *               event. If not provided then the value of
 *               global.get_current_time() is assumed.
 *
 *  - options: Meta.ModalOptions flags to indicate that the pointer is
 *             already grabbed
 *
 *  - actionMode: used to set the current Shell.ActionMode to filter
 *                global keybindings; the default of NONE will filter
 *                out all keybindings
 *
 * @returns {Clutter.Grab}: the grab handle created
 */
export function pushModal(actor: Clutter.Actor, params?: any | undefined): Clutter.Grab;
/**
 * popModal:
 *
 * @param {Clutter.Grab} grab - the grab given by pushModal()
 * @param {number=} timestamp - optional timestamp
 *
 * Reverse the effect of pushModal(). If this invocation is undoing
 * the topmost invocation, then the focus will be restored to the
 * previous focus at the time when pushModal() was invoked.
 *
 * @timestamp is optionally used to associate the call with a specific user
 * initiated event. If not provided then the value of
 * global.get_current_time() is assumed.
 */
export function popModal(grab: Clutter.Grab, timestamp?: number | undefined): void;
export function createLookingGlass(): any;
export function openRunDialog(): void;
export function openWelcomeDialog(): void;
/**
 * activateWindow:
 *
 * @param {Meta.Window} window: the window to activate
 * @param {number=} time: current event time
 * @param {number=} workspaceNum:  window's workspace number
 *
 * Activates @window, switching to its workspace first if necessary,
 * and switching out of the overview if it's currently active
 * @param window
 * @param time
 * @param workspaceNum
 */
export function activateWindow(window: Meta.Window, time?: number | undefined, workspaceNum?: number | undefined): void;
/**
 * Move @window to the specified monitor and workspace.
 *
 * @param {Meta.Window} window - the window to move
 * @param {number} monitorIndex - the requested monitor
 * @param {number} workspaceIndex - the requested workspace
 * @param {boolean} append - create workspace if it doesn't exist
 */
export function moveWindowToMonitorAndWorkspace(window: Meta.Window, monitorIndex: number, workspaceIndex: number, append?: boolean): void;
export function _runDeferredWork(workId: any): void;
export function _runAllDeferredWork(): void;
export function _runBeforeRedrawQueue(): void;
export function _queueBeforeRedraw(workId: any): void;
/**
 * initializeDeferredWork:
 *
 * @param {Clutter.Actor} actor: an actor
 * @param {callback} callback: Function to invoke to perform work
 *
 * This function sets up a callback to be invoked when either the
 * given actor is mapped, or after some period of time when the machine
 * is idle. This is useful if your actor isn't always visible on the
 * screen (for example, all actors in the overview), and you don't want
 * to consume resources updating if the actor isn't actually going to be
 * displaying to the user.
 *
 * Note that queueDeferredWork is called by default immediately on
 * initialization as well, under the assumption that new actors
 * will need it.
 *
 * @param actor
 * @param callback
 * @returns {string}: A string work identifier
 */
export function initializeDeferredWork(actor: Clutter.Actor, callback: any): string;
/**
 * queueDeferredWork:
 *
 * @param {string} workId: work identifier
 *
 * Ensure that the work identified by @workId will be
 * run on map or timeout. You should call this function
 * for example when data being displayed by the actor has
 * changed.
 * @param workId
 */
export function queueDeferredWork(workId: string): void;
export function showRestartMessage(message: any): void;
// declare const Clutter: any;
// declare const Gio: any;
// declare const GLib: any;
// declare const GObject: any;
// declare const Meta: any;
// declare const Shell: any;
// declare const St: any;
declare const AccessDialog: any;
declare const AudioDeviceSelection: any;
declare const Components: any;
declare const CtrlAltTab: any;
declare const EndSessionDialog: any;
declare const ExtensionSystem: any;
declare const ExtensionDownloader: any;
declare const InputMethod: any;
declare const Introspect: any;
declare const Keyboard: any;
declare const MessageTray: any;
declare const ModalDialog: any;
declare const OsdWindow: any;
declare const OsdMonitorLabeler: any;
declare const Overview: any;
declare const PadOsd: any;
declare const Panel: any;
declare const Params: any;
declare const RunDialog: any;
declare const WelcomeDialog: any;
declare const Layout: any;
declare const LoginManager: any;
declare const LookingGlass: any;
declare const NotificationDaemon: any;
declare const WindowAttentionHandler: any;
declare const Screenshot: any;
declare const ScreenShield: any;
declare const Scripting: any;
declare const SessionMode: any;
declare const ShellDBus: any;
declare const ShellMountOperation: any;
declare const WindowManager: any;
declare const Magnifier: any;
declare const XdndHandler: any;
declare const KbdA11yDialog: any;
declare const LocatePointer: any;
declare const PointerA11yTimeout: any;
declare const ParentalControlsManager: any;
declare const Config: any;
declare const Util: any;
export const WELCOME_DIALOG_LAST_SHOWN_VERSION: 'welcome-dialog-last-shown-version';
export const WELCOME_DIALOG_LAST_TOUR_CHANGE: '40.beta';
export const LOG_DOMAIN: 'GNOME Shell';
export const GNOMESHELL_STARTED_MESSAGE_ID: 'f3ea493c22934e26811cd62abe8e203a';
export const componentManager: any;
export const extensionManager: any;
export const panel: any;
export const overview: any;
export const runDialog: any;
export const lookingGlass: any;
export const welcomeDialog: any;
export const wm: any;
export const messageTray: any;
export const screenShield: any;
export const notificationDaemon: any;
export const windowAttentionHandler: any;
export const ctrlAltTabManager: any;
export const padOsdService: any;
export const osdWindowManager: any;
export const osdMonitorLabeler: any;
export const sessionMode: any;
export const screenshotUI: any;
export const shellAccessDialogDBusService: any;
export const shellAudioSelectionDBusService: any;
export const shellDBusService: any;
export const shellMountOpDBusService: any;
export const screenSaverDBus: any;
export const modalCount: number;
export const actionMode: any;
export const modalActorFocusStack: any[];
export const uiGroup: any;
export const magnifier: any;
export const xdndHandler: any;
export const keyboard: any;
export const layoutManager: any;
export const kbdA11yDialog: any;
export const inputMethod: any;
export const introspectService: any;
export const locatePointer: any;
declare let _startDate: any;
declare let _defaultCssStylesheet: any;
declare let _cssStylesheet: any;
declare let _themeResource: any;
declare let _oskResource: any;
declare let _iconResource: any;
declare let _remoteAccessInhibited: boolean;
export const DEFERRED_TIMEOUT_SECONDS: number;
declare let _deferredWorkData: unknown;
declare let _deferredWorkQueue: any[];
declare let _beforeRedrawQueue: any[];
declare let _deferredWorkSequence: number;
declare let _deferredTimeoutId: number;
export const RestartMessage: any;
export const AnimationsSettings: {
    new (): {
        _handles: Set<any>;
        _onRemoteAccessHandleStopped(handle: any): void;
        _onNewRemoteAccessHandle(handle: any): void;
    };
};
// # sourceMappingURL=main.d.ts.map
