"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractValue = void 0;
const WHITESPACE_REGEX = /^[\t\r\f\n ]*(.+?)[\t\r\f\n ]*$/;
const DOUBLE_QUOTE_REGEX = /^"(.*)"$/;
const SINGLE_QUOTE_REGEX = /^'(.*)'$/;
function trimCSSWhitespace(str) {
    return str.replace(WHITESPACE_REGEX, "$1");
}
;
function unquoteString(quotedStr) {
    if (DOUBLE_QUOTE_REGEX.test(quotedStr)) {
        return quotedStr.replace(DOUBLE_QUOTE_REGEX, "$1");
    }
    if (SINGLE_QUOTE_REGEX.test(quotedStr)) {
        return quotedStr.replace(SINGLE_QUOTE_REGEX, "$1");
    }
    return quotedStr;
}
;
function extractValue(value) {
    return unquoteString(trimCSSWhitespace(value));
}
exports.extractValue = extractValue;
;
