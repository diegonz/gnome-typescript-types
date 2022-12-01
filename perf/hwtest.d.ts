declare function waitAndDraw(milliseconds: any): (callback: any) => any;
declare function waitSignal(object: any, signal: any): (callback: any) => any;
declare function extractBootTimestamp(): number;
declare function run(): Promise<void>;
declare function run(): Promise<void>;
declare function run(): Promise<void>;
declare function script_desktopShown(time: any): void;
declare function script_overviewShowStart(time: any): void;
declare function script_overviewShowStart(time: any): void;
declare function script_overviewShowDone(): void;
declare function script_overviewShowDone(_time: any): void;
declare function script_overviewShowDone(time: any): void;
declare function script_applicationsShowStart(time: any): void;
declare function script_applicationsShowStart(time: any): void;
declare function script_applicationsShowDone(): void;
declare function script_applicationsShowDone(time: any): void;
declare function script_applicationsShowDone(time: any): void;
declare function script_mainViewDrawStart(_time: any): void;
declare function script_mainViewDrawDone(_time: any): void;
declare function script_overviewDrawStart(_time: any): void;
declare function script_overviewDrawDone(_time: any): void;
declare function script_redrawTestStart(_time: any): void;
declare function script_redrawTestDone(_time: any): void;
declare function script_collectTimings(_time: any): void;
declare function script_geditLaunch(time: any): void;
declare function script_geditFirstFrame(time: any): void;
declare function clutter_stagePaintStart(time: any): void;
declare function clutter_paintCompletedTimestamp(time: any): void;
declare const Clutter: any;
declare const Gio: any;
declare const Shell: any;
declare const Main: any;
declare const Scripting: any;
declare namespace METRICS {
    namespace timeToDesktop {
        const description: string;
        const units: string;
    }
    namespace overviewShowTime {
        const description_1: string;
        export { description_1 as description };
        const units_1: string;
        export { units_1 as units };
    }
    namespace applicationsShowTime {
        const description_2: string;
        export { description_2 as description };
        const units_2: string;
        export { units_2 as units };
    }
    namespace mainViewRedrawTime {
        const description_3: string;
        export { description_3 as description };
        const units_3: string;
        export { units_3 as units };
    }
    namespace overviewRedrawTime {
        const description_4: string;
        export { description_4 as description };
        const units_4: string;
        export { units_4 as units };
    }
    namespace applicationRedrawTime {
        const description_5: string;
        export { description_5 as description };
        const units_5: string;
        export { units_5 as units };
    }
    namespace geditStartTime {
        const description_6: string;
        export { description_6 as description };
        const units_6: string;
        export { units_6 as units };
    }
}
declare let overviewShowStart: any;
declare let applicationsShowStart: any;
declare let stagePaintStart: any;
declare let redrawTiming: any;
declare let redrawTimes: {};
declare let geditLaunchTime: any;
//# sourceMappingURL=hwtest.d.ts.map