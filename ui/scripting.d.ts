/**
 * sleep:
 * @param {number} milliseconds - number of milliseconds to wait
 * @returns {Promise} that resolves after @milliseconds ms
 *
 * Used within an automation script to pause the the execution of the
 * current script for the specified amount of time. Use as
 * 'yield Scripting.sleep(500);'
 */
declare function sleep(milliseconds: number): Promise<any>;
/**
 * waitLeisure:
 * @returns {Promise} that resolves when the shell is idle
 *
 * Used within an automation script to pause the the execution of the
 * current script until the shell is completely idle. Use as
 * 'yield Scripting.waitLeisure();'
 */
declare function waitLeisure(): Promise<any>;
declare function PerfHelper(): any;
declare function _getPerfHelper(): any;
declare function _spawnPerfHelper(): void;
/**
 * createTestWindow:
 * @param {Object} params: options for window creation.
 *   {number} [params.width=640] - width of window, in pixels
 *   {number} [params.height=480] - height of window, in pixels
 *   {bool} [params.alpha=false] - whether the window should have an alpha channel
 *   {bool} [params.maximized=false] - whether the window should be created maximized
 *   {bool} [params.redraws=false] - whether the window should continually redraw itself
 * @returns {Promise}
 *
 * Creates a window using gnome-shell-perf-helper for testing purposes.
 * While this function can be used with yield in an automation
 * script to pause until the D-Bus call to the helper process returns,
 * because of the normal X asynchronous mapping process, to actually wait
 * until the window has been mapped and exposed, use waitTestWindows().
 */
declare function createTestWindow(params: any): Promise<any>;
/**
 * waitTestWindows:
 * @returns {Promise}
 *
 * Used within an automation script to pause until all windows previously
 * created with createTestWindow have been mapped and exposed.
 */
declare function waitTestWindows(): Promise<any>;
/**
 * destroyTestWindows:
 * @returns {Promise}
 *
 * Destroys all windows previously created with createTestWindow().
 * While this function can be used with yield in an automation
 * script to pause until the D-Bus call to the helper process returns,
 * this doesn't guarantee that Mutter has actually finished the destroy
 * process because of normal X asynchronicity.
 */
declare function destroyTestWindows(): Promise<any>;
/**
 * defineScriptEvent
 * @param {string} name: The event will be called script.<name>
 * @param {string} description: Short human-readable description of the event
 *
 * Convenience function to define a zero-argument performance event
 * within the 'script' namespace that is reserved for events defined locally
 * within a performance automation script
 */
declare function defineScriptEvent(name: string, description: string): void;
/**
 * scriptEvent
 * @param {string} name: Name registered with defineScriptEvent()
 *
 * Convenience function to record a script-local performance event
 * previously defined with defineScriptEvent
 */
declare function scriptEvent(name: string): void;
/**
 * collectStatistics
 *
 * Convenience function to trigger statistics collection
 */
declare function collectStatistics(): void;
declare function _collect(scriptModule: any, outputFile: any): void;
declare function _runPerfScript(scriptModule: any, outputFile: any): Promise<void>;
/**
 * runPerfScript
 * @param {Object} scriptModule: module object with run and finish
 *    functions and event handlers
 * @param {string} outputFile: path to write output to
 *
 * Runs a script for automated collection of performance data. The
 * script is defined as a Javascript module with specified contents.
 *
 * First the run() function within the module will be called as a
 * generator to automate a series of actions. These actions will
 * trigger performance events and the script can also record its
 * own performance events.
 *
 * Then the recorded event log is replayed using handler functions
 * within the module. The handler for the event 'foo.bar' is called
 * foo_bar().
 *
 * Finally if the module has a function called finish(), that will
 * be called.
 *
 * The event handler and finish functions are expected to fill in
 * metrics to an object within the module called METRICS. Each
 * property of this object represents an individual metric. The
 * name of the property is the name of the metric, the value
 * of the property is an object with the following properties:
 *
 *  description: human readable description of the metric
 *  units: a string representing the units of the metric. It has
 *   the form '<unit> <unit> ... / <unit> / <unit> ...'. Certain
 *   unit values are recognized: s, ms, us, B, KiB, MiB. Other
 *   values can appear but are uninterpreted. Examples 's',
 *   '/ s', 'frames', 'frames / s', 'MiB / s / frame'
 *  value: computed value of the metric
 *
 * The resulting metrics will be written to @outputFile as JSON, or,
 * if @outputFile is not provided, logged.
 *
 * After running the script and collecting statistics from the
 * event log, GNOME Shell will exit.
 **/
declare function runPerfScript(scriptModule: any, outputFile: string): void;
declare const Gio: any;
declare const GLib: any;
declare const Meta: any;
declare const Shell: any;
declare const Config: any;
declare const Main: any;
declare const Params: any;
declare const Util: any;
declare const loadInterfaceXML: any;
declare const PerfHelperIface: any;
declare var PerfHelperProxy: any;
declare let _perfHelper: any;
//# sourceMappingURL=scripting.d.ts.map