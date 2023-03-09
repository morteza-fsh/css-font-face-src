"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.serialize = exports.parse = exports.SyntaxError = void 0;
const grammar = __importStar(require("./grammar/index"));
class SyntaxError extends Error {
    constructor(message, location) {
        super(message);
        this.name = SyntaxError.name;
        this.location = location;
    }
}
exports.SyntaxError = SyntaxError;
function parse(fontFaceSourceValue) {
    try {
        return grammar.parse(fontFaceSourceValue);
    }
    catch (e) {
        const error = e;
        throw new SyntaxError(error.message, error.location);
    }
}
exports.parse = parse;
function serialize(parsedFontFaceSources) {
    return parsedFontFaceSources.map(item => {
        let itemStr;
        if (item.url) {
            itemStr = `url("${item.url}")`;
            if (item.format) {
                itemStr = `${itemStr} format("${item.format}")`;
            }
        }
        else {
            itemStr = `local("${item.local}")`;
        }
        return itemStr;
    }).join(', ');
}
exports.serialize = serialize;
