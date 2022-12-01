/**
 * Stores a PNG-encoded screenshot into the clipboard and a file, and shows a
 * notification.
 *
 * @param {GLib.Bytes} bytes - The PNG-encoded screenshot.
 * @param {GdkPixbuf.Pixbuf} pixbuf - The Pixbuf with the screenshot.
 */
declare function _storeScreenshot(bytes: GLib.Bytes, pixbuf: GdkPixbuf.Pixbuf): void;
/**
 * Captures a screenshot from a texture, given a region, scale and optional
 * cursor data.
 *
 * @param {Cogl.Texture} texture - The texture to take the screenshot from.
 * @param {number[4]} [geometry] - The region to use: x, y, width and height.
 * @param {number} scale - The texture scale.
 * @param {Object} [cursor] - Cursor data to include in the screenshot.
 * @param {Cogl.Texture} cursor.texture - The cursor texture.
 * @param {number} cursor.x - The cursor x coordinate.
 * @param {number} cursor.y - The cursor y coordinate.
 * @param {number} cursor.scale - The cursor texture scale.
 */
declare function captureScreenshot(texture: Cogl.Texture, geometry?: any, scale: number, cursor?: {
    texture: Cogl.Texture;
    x: number;
    y: number;
    scale: number;
}): Promise<void>;
/**
 * Shows the screenshot UI.
 */
declare function showScreenshotUI(): void;
/**
 * Shows the screen recording UI.
 */
declare function showScreenRecordingUI(): void;
declare const Clutter: any;
declare const Cogl: any;
declare const Gio: any;
declare const GObject: any;
declare const GLib: any;
declare const Graphene: any;
declare const Gtk: any;
declare const Meta: any;
declare const Shell: any;
declare const St: any;
declare const GrabHelper: any;
declare const Layout: any;
declare const Lightbox: any;
declare const Main: any;
declare const MessageTray: any;
declare const Workspace: any;
declare const loadInterfaceXML: any;
declare const DBusSenderChecker: any;
declare const ScreenshotIface: any;
declare const ScreencastIface: any;
declare const ScreencastProxy: any;
declare var IconLabelButton: any;
declare var Tooltip: any;
declare var UIAreaIndicator: any;
declare var UIAreaSelector: any;
declare var UIWindowSelectorLayout: any;
declare var UIWindowSelectorWindow: any;
declare var UIWindowSelector: any;
declare namespace UIMode {
    const SCREENSHOT: number;
    const SCREENCAST: number;
}
declare var ScreenshotUI: any;
declare var ScreenshotService: {
    new (): {
        _dbusImpl: any;
        _screenShooter: Map<any, any>;
        _senderChecker: any;
        _lockdownSettings: any;
        _createScreenshot(invocation: any, needsDisk?: boolean, restrictCallers?: boolean): Promise<any>;
        _onNameVanished(connection: any, name: any): void;
        _removeShooterForSender(sender: any): void;
        _checkArea(x: any, y: any, width: any, height: any): boolean;
        _resolveRelativeFilename(filename: any): Generator<any, any, unknown>;
        _createStream(filename: any, invocation: any): any[];
        _flashAsync(shooter: any): Promise<any>;
        _onScreenshotComplete(stream: any, file: any, invocation: any): void;
        _scaleArea(x: any, y: any, width: any, height: any): any[];
        _unscaleArea(x: any, y: any, width: any, height: any): any[];
        ScreenshotAreaAsync(params: any, invocation: any): Promise<void>;
        ScreenshotWindowAsync(params: any, invocation: any): Promise<void>;
        ScreenshotAsync(params: any, invocation: any): Promise<void>;
        SelectAreaAsync(params: any, invocation: any): Promise<void>;
        FlashAreaAsync(params: any, invocation: any): Promise<void>;
        PickColorAsync(params: any, invocation: any): Promise<void>;
    };
};
declare var SelectArea: any;
declare var RecolorEffect: any;
declare var PickPixel: any;
declare var FLASHSPOT_ANIMATION_OUT_TIME: number;
declare var Flashspot: any;
//# sourceMappingURL=screenshot.d.ts.map