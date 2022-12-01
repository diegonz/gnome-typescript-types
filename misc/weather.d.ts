declare const Geoclue: any;
declare const Gio: any;
declare const GLib: any;
declare const GWeather: any;
declare const Shell: any;
declare const Signals: any;
declare const PermissionStore: any;
declare const loadInterfaceXML: any;
declare const WeatherIntegrationIface: any;
declare const WEATHER_BUS_NAME: "org.gnome.Weather";
declare const WEATHER_OBJECT_PATH: "/org/gnome/Weather";
declare const WEATHER_INTEGRATION_IFACE: "org.gnome.Shell.WeatherIntegration";
declare const WEATHER_APP_ID: "org.gnome.Weather.desktop";
declare var UPDATE_THRESHOLD: number;
declare var WeatherClient: {
    new (): {
        _loading: boolean;
        _locationValid: boolean;
        _lastUpdate: any;
        _autoLocationRequested: boolean;
        _mostRecentLocation: any;
        _gclueService: any;
        _gclueStarted: boolean;
        _gclueStarting: boolean;
        _gclueLocationChangedId: number;
        _needsAuth: boolean;
        _weatherAuthorized: boolean;
        _permStore: any;
        _locationSettings: any;
        _world: any;
        _weatherInfo: any;
        _weatherApp: any;
        _weatherProxy: any;
        _settings: any;
        _appSystem: any;
        readonly available: boolean;
        readonly loading: boolean;
        readonly hasLocation: boolean;
        readonly info: any;
        activateApp(): void;
        update(): void;
        readonly _useAutoLocation: boolean;
        _createWeatherProxy(): Promise<void>;
        _onWeatherPropertiesChanged(): void;
        _onInstalledChanged(): void;
        _loadInfo(): void;
        _locationsEqual(loc1: any, loc2: any): any;
        _setLocation(location: any): void;
        _updateLocationMonitoring(): void;
        _startGClueService(): Promise<void>;
        _onGClueLocationChanged(): void;
        _onAutomaticLocationChanged(): void;
        _updateAutoLocation(): void;
        _onLocationsChanged(): void;
        _onPermStoreChanged(proxy: any, sender: any, params: any): void;
    };
};
//# sourceMappingURL=weather.d.ts.map