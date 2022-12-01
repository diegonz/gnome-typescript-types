declare function run(): Promise<void>;
declare function run(): Promise<void>;
declare function run(): Promise<void>;
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
declare function script_afterShowHide(_time: any): void;
declare function malloc_usedSize(time: any, bytes: any): void;
declare function _frameDone(time: any): void;
declare function glx_swapComplete(time: any, swapTime: any): void;
declare function clutter_stagePaintDone(time: any): void;
declare const System: any;
declare const Main: any;
declare const Scripting: any;
declare namespace METRICS {
    namespace overviewLatencyFirst {
        const description: string;
        const units: string;
    }
    namespace overviewFpsFirst {
        const description_1: string;
        export { description_1 as description };
        const units_1: string;
        export { units_1 as units };
    }
    namespace overviewLatencySubsequent {
        const description_2: string;
        export { description_2 as description };
        const units_2: string;
        export { units_2 as units };
    }
    namespace overviewFpsSubsequent {
        const description_3: string;
        export { description_3 as description };
        const units_3: string;
        export { units_3 as units };
    }
    namespace overviewFps5Windows {
        const description_4: string;
        export { description_4 as description };
        const units_4: string;
        export { units_4 as units };
    }
    namespace overviewFps10Windows {
        const description_5: string;
        export { description_5 as description };
        const units_5: string;
        export { units_5 as units };
    }
    namespace overviewFps5Maximized {
        const description_6: string;
        export { description_6 as description };
        const units_6: string;
        export { units_6 as units };
    }
    namespace overviewFps10Maximized {
        const description_7: string;
        export { description_7 as description };
        const units_7: string;
        export { units_7 as units };
    }
    namespace overviewFps5Alpha {
        const description_8: string;
        export { description_8 as description };
        const units_8: string;
        export { units_8 as units };
    }
    namespace overviewFps10Alpha {
        const description_9: string;
        export { description_9 as description };
        const units_9: string;
        export { units_9 as units };
    }
    namespace usedAfterOverview {
        const description_10: string;
        export { description_10 as description };
        const units_10: string;
        export { units_10 as units };
    }
    namespace leakedAfterOverview {
        const description_11: string;
        export { description_11 as description };
        const units_11: string;
        export { units_11 as units };
    }
    namespace applicationsShowTimeFirst {
        const description_12: string;
        export { description_12 as description };
        const units_12: string;
        export { units_12 as units };
    }
    namespace applicationsShowTimeSubsequent {
        const description_13: string;
        export { description_13 as description };
        const units_13: string;
        export { units_13 as units };
    }
}
declare const WINDOW_CONFIGS: {
    width: number;
    height: number;
    alpha: boolean;
    maximized: boolean;
    count: number;
    metric: string;
}[];
declare let showingOverview: boolean;
declare let finishedShowingOverview: boolean;
declare let overviewShowStart: any;
declare let overviewFrames: any;
declare let overviewLatency: any;
declare let mallocUsedSize: number;
declare let overviewShowCount: number;
declare let haveSwapComplete: boolean;
declare let applicationsShowStart: any;
declare let applicationsShowCount: number;
//# sourceMappingURL=core.d.ts.map