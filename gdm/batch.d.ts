declare const GObject: any;
declare const Signals: any;
declare var Task: {
    new (scope: any, handler: any): {
        scope: any;
        handler: any;
        run(): any;
    };
};
declare var Hold: {
    new (): {
        _acquisitions: number;
        acquire(): void;
        acquireUntilAfter(hold: any): void;
        release(): void;
        isAcquired(): boolean;
        scope: any;
        handler: any;
        run(): any;
    };
};
declare var Batch: {
    new (scope: any, tasks: any): {
        tasks: any[];
        process(): void;
        runTask(): any;
        _finish(): void;
        nextTask(): void;
        _start(): void;
        hold: {
            _acquisitions: number;
            acquire(): void;
            acquireUntilAfter(hold: any): void;
            release(): void;
            isAcquired(): boolean;
            scope: any;
            handler: any;
            run(): any;
        };
        _currentTaskIndex: number;
        run(): {
            _acquisitions: number;
            acquire(): void;
            acquireUntilAfter(hold: any): void;
            release(): void;
            isAcquired(): boolean;
            scope: any;
            handler: any;
            run(): any;
        };
        cancel(): void;
        scope: any;
        handler: any;
    };
};
declare var ConcurrentBatch: {
    new (): {
        process(): void;
    };
};
declare var ConsecutiveBatch: {
    new (): {
        process(): void;
    };
};
//# sourceMappingURL=batch.d.ts.map