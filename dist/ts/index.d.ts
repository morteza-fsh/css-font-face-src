export declare class SyntaxError extends Error {
    readonly name: string;
    location: unknown;
    constructor(message: string, location?: unknown);
}
export type FontFaceSrcItem = {
    local: string;
    url: never;
    format: never;
} | {
    local: never;
    url: string;
    format?: string;
};
export declare function parse(fontFaceSourceValue: string): FontFaceSrcItem[];
export declare function serialize(parsedFontFaceSources: FontFaceSrcItem[]): string;
