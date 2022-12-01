declare function getCompletions(text: any, commandHeader: any, globalCompletionList: any): any[];
declare function isStopChar(c: any): boolean;
declare function findMatchingQuote(expr: any, offset: any): number;
declare function findMatchingSlash(expr: any, offset: any): number;
declare function findMatchingBrace(expr: any, offset: any): any;
declare function findTheBrace(expr: any, offset: any, ...braces: any[]): any;
declare function getExpressionOffset(expr: any, offset: any): any;
declare function isValidPropertyName(w: any): boolean;
declare function getAllProps(obj: any): any;
declare function getPropertyNamesFromExpression(expr: any, commandHeader?: string): string[];
declare function getCommonPrefix(words: any): any;
declare function removeLiterals(str: any): any;
declare function isUnsafeExpression(str: any): boolean;
declare function getDeclaredConstants(str: any): any[];
//# sourceMappingURL=jsParse.d.ts.map