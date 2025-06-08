"use strict";
(self["webpackChunkresume"] = self["webpackChunkresume"] || []).push([["main"],{

/***/ "./src/App.style.scss":
/*!****************************!*\
  !*** ./src/App.style.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   App: () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var _App_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.style.scss */ "./src/App.style.scss");
/* harmony import */ var docx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! docx */ "./node_modules/docx/dist/index.mjs");
/* harmony import */ var _components_ReadonlyPre__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ReadonlyPre */ "./src/components/ReadonlyPre/index.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var _highlight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./highlight */ "./src/highlight.ts");






function App() {
    var rawText = "export const me = {\n      firstName: 'Mihail',\n      lastName: 'Yakimenko',\n      age: ".concat(Math.floor((Date.now() - new Date(2000, 10, 12).getTime()) / 31557600000), ",\n      sex: 'male',\n      address: 'Russia, Novorossiysk',\n    \n      languages: {\n        russian: 'native',  \n        english: 'B1'\n      },\n    \n      technicalSkills: [\n        'JavaScript', 'TypeScript',\n        'Kotlin', 'C++', 'Go',\n        'HTML', 'CSS', 'CSS preprocessors',\n        'React', 'Vue', 'Svelte',\n        'Webpack', 'Node.js', 'Git'\n      ],\n    \n      familiarWith: [\n        'C#', 'Python', 'Zig',\n        'APL', 'SQL',\n        'Vulkan', 'Figma'\n      ],\n    \n      workExperience: [\n        {\n          company: '7 Winds',\n          duration: '").concat(((Date.now() - new Date(2021, 6, 7).getTime()) / 31557600000).toFixed(1), " years',\n          position: [\n            'Frontend Developer (React)',\n            'Fullstack Developer (React, Kotlin)'\n          ]\n        }\n      ],\n    \n      desiredPositions: [\n        'Frontend Developer (React, Vue, Svelte, Vanilla)',\n        'Backend Developer (Kotlin, JavaScript, TypeScript, C#, Go)',\n        'Fullstack Developer'\n      ],\n    \n      discord: 'rikzun',\n      mail: '[rik.zunqq@gmail.com](mailto:rik.zunqq@gmail.com)',\n      github: '[https://github.com/rikzun](https://github.com/rikzun)'\n    }");
    var downloadPDF = function(tokens) {
        var colors = {
            'string': '#CE9178',
            'numeric': '#B5CEA8',
            'reserved': '#569CD6',
            'reserved2': '#C586C0',
            'variable': '#4FC1FF',
            'object-key': '#9CDCFE'
        };
        var file = new docx__WEBPACK_IMPORTED_MODULE_2__.Document({
            sections: [
                {
                    children: tokens.map(function(line) {
                        return new docx__WEBPACK_IMPORTED_MODULE_2__.Paragraph({
                            children: line.map(function(token) {
                                var color = token.type ? colors[token.type] : undefined;
                                if (token.link) {
                                    var textMark = new docx__WEBPACK_IMPORTED_MODULE_2__.TextRun({
                                        text: '\'',
                                        color: color
                                    });
                                    var text = new docx__WEBPACK_IMPORTED_MODULE_2__.TextRun({
                                        text: token.content.substring(1, token.content.length - 1),
                                        font: 'Courier New',
                                        noProof: true,
                                        underline: {
                                            color: color,
                                            type: 'single'
                                        },
                                        color: color
                                    });
                                    return new docx__WEBPACK_IMPORTED_MODULE_2__.ExternalHyperlink({
                                        children: [
                                            textMark,
                                            text,
                                            textMark
                                        ],
                                        link: token.link
                                    });
                                }
                                return new docx__WEBPACK_IMPORTED_MODULE_2__.TextRun({
                                    text: token.content,
                                    font: 'Courier New',
                                    noProof: true,
                                    color: color
                                });
                            })
                        });
                    })
                }
            ],
            background: {
                color: '#1e1e1e'
            }
        });
        docx__WEBPACK_IMPORTED_MODULE_2__.Packer.toBlob(file).then(function(blob) {
            return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_4__.saveBlob)(blob, 'resume.docx');
        });
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ReadonlyPre__WEBPACK_IMPORTED_MODULE_3__.ReadonlyPre, {
        value: _highlight__WEBPACK_IMPORTED_MODULE_5__.HightlightTools.textToTokens(rawText),
        exportClick: downloadPDF
    }, void 0, false, {
        fileName: "/home/runner/work/rikzun.github.io/rikzun.github.io/src/App.tsx",
        lineNumber: 108,
        columnNumber: 9
    }, this);
}


/***/ }),

/***/ "./src/components/ReadonlyPre/ReadonlyPre.styles.scss":
/*!************************************************************!*\
  !*** ./src/components/ReadonlyPre/ReadonlyPre.styles.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/ReadonlyPre/ReadonlyPre.tsx":
/*!****************************************************!*\
  !*** ./src/components/ReadonlyPre/ReadonlyPre.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadonlyPre: () => (/* binding */ ReadonlyPre)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var _ReadonlyPre_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReadonlyPre.styles.scss */ "./src/components/ReadonlyPre/ReadonlyPre.styles.scss");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/utils */ "./src/utils/utils.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}




var acceptableKeyCodes = [
    'Tab',
    'ShiftLeft',
    'ShiftRight',
    'Home',
    'End',
    'PageUp',
    'PageDown',
    'ArrowUp',
    'ArrowLeft',
    'ArrowDown',
    'ArrowRight'
].concat(_to_consumable_array((0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.array)(12).map(function(v) {
    return 'F' + (v + 1);
})));
var unacceptableCtrlKeyCodes = [
    'KeyX',
    'KeyV'
];
function ReadonlyPre(props) {
    var _this = this;
    var _Math;
    var _useState = _sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(crypto.randomUUID()), 3), key = _useState[0], setKey = _useState[1], tmp = _useState[2], updateKey = tmp === void 0 ? function() {
        return setKey(crypto.randomUUID());
    } : tmp;
    var onKeyDown = function(e) {
        if (e.ctrlKey) {
            if (!unacceptableCtrlKeyCodes.includes(e.code)) return;
            return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.eventCancel)(e);
        } else if (!acceptableKeyCodes.includes(e.code)) return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.eventCancel)(e);
    };
    var onInput = function(e) {
        if (e.cancelable) return (0,_utils_utils__WEBPACK_IMPORTED_MODULE_2__.eventCancel)(e);
        updateKey(); // for android and firefox
    };
    var maxLineLendth = (_Math = Math).max.apply(_Math, _to_consumable_array(props.value.map(function(line) {
        return line.reduce(function(acc, token) {
            return acc + token.content.length;
        }, 0);
    }))) + 1;
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
        className: "container",
        spellCheck: false,
        onCut: _utils_utils__WEBPACK_IMPORTED_MODULE_2__.eventCancel,
        onPaste: _utils_utils__WEBPACK_IMPORTED_MODULE_2__.eventCancel,
        onBeforeInput: _utils_utils__WEBPACK_IMPORTED_MODULE_2__.eventCancel,
        onInput: onInput,
        onKeyDown: onKeyDown,
        contentEditable: true,
        suppressContentEditableWarning: true,
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "code",
            style: {
                maxWidth: "".concat(maxLineLendth, "ch")
            },
            children: props.value.map(function(line, lineIndex) {
                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
                    children: [
                        line.map(function(token, tokenIndex) {
                            var key = lineIndex + token.content + tokenIndex;
                            var className = [
                                token.type,
                                token.type === 'reserved' ? token.type + '__' + token.content : null
                            ].filter(Boolean).join(' ');
                            if (token.link) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                className: className,
                                children: [
                                    "'",
                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                                        href: token.link,
                                        className: className,
                                        target: token.link.startsWith('mailto:') ? undefined : '_blank',
                                        contentEditable: false,
                                        children: token.content.substring(1, token.content.length - 1)
                                    }, void 0, false, {
                                        fileName: "/home/runner/work/rikzun.github.io/rikzun.github.io/src/components/ReadonlyPre/ReadonlyPre.tsx",
                                        lineNumber: 79,
                                        columnNumber: 37
                                    }, _this),
                                    "'"
                                ]
                            }, key, true, {
                                fileName: "/home/runner/work/rikzun.github.io/rikzun.github.io/src/components/ReadonlyPre/ReadonlyPre.tsx",
                                lineNumber: 77,
                                columnNumber: 33
                            }, _this);
                            var exportClick = token.type === 'reserved2' && token.content === 'export' ? function() {
                                return props.exportClick(props.value);
                            } : undefined;
                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                                className: className,
                                onClick: exportClick,
                                children: token.content
                            }, key, false, {
                                fileName: "/home/runner/work/rikzun.github.io/rikzun.github.io/src/components/ReadonlyPre/ReadonlyPre.tsx",
                                lineNumber: 96,
                                columnNumber: 33
                            }, _this);
                        }),
                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                            fileName: "/home/runner/work/rikzun.github.io/rikzun.github.io/src/components/ReadonlyPre/ReadonlyPre.tsx",
                            lineNumber: 101,
                            columnNumber: 25
                        }, _this)
                    ]
                }, lineIndex, true, {
                    fileName: "/home/runner/work/rikzun.github.io/rikzun.github.io/src/components/ReadonlyPre/ReadonlyPre.tsx",
                    lineNumber: 69,
                    columnNumber: 21
                }, _this);
            })
        }, void 0, false, {
            fileName: "/home/runner/work/rikzun.github.io/rikzun.github.io/src/components/ReadonlyPre/ReadonlyPre.tsx",
            lineNumber: 67,
            columnNumber: 13
        }, this)
    }, key, false, {
        fileName: "/home/runner/work/rikzun.github.io/rikzun.github.io/src/components/ReadonlyPre/ReadonlyPre.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, this);
}


/***/ }),

/***/ "./src/components/ReadonlyPre/index.ts":
/*!*********************************************!*\
  !*** ./src/components/ReadonlyPre/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReadonlyPre: () => (/* reexport safe */ _ReadonlyPre__WEBPACK_IMPORTED_MODULE_0__.ReadonlyPre)
/* harmony export */ });
/* harmony import */ var _ReadonlyPre__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReadonlyPre */ "./src/components/ReadonlyPre/ReadonlyPre.tsx");



/***/ }),

/***/ "./src/highlight.ts":
/*!**************************!*\
  !*** ./src/highlight.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HightlightTools: () => (/* binding */ HightlightTools),
/* harmony export */   Token: () => (/* binding */ Token),
/* harmony export */   TokenList: () => (/* binding */ TokenList)
/* harmony export */ });
/* harmony import */ var _utils_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/range */ "./src/utils/range.ts");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/utils */ "./src/utils/utils.ts");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _sliced_to_array(arr, i) {
    return _array_with_holes(arr) || _iterable_to_array_limit(arr, i) || _unsupported_iterable_to_array(arr, i) || _non_iterable_rest();
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}


var Token = function Token(content) {
    "use strict";
    var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, link = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
    _class_call_check(this, Token);
    _define_property(this, "content", void 0);
    _define_property(this, "type", void 0);
    _define_property(this, "link", void 0);
    this.content = content;
    this.type = type;
    this.link = link;
};
var TokenList = /*#__PURE__*/ function() {
    "use strict";
    function TokenList() {
        _class_call_check(this, TokenList);
        _define_property(this, "data", void 0);
        this.data = new Map();
    }
    _create_class(TokenList, [
        {
            key: "collect",
            value: function collect(range, token) {
                this.data.set(range, token);
            }
        },
        {
            key: "getEntries",
            value: function getEntries() {
                return _to_consumable_array(this.data.entries());
            }
        },
        {
            key: "getRanges",
            value: function getRanges() {
                return _to_consumable_array(this.data.keys());
            }
        },
        {
            key: "getRangeByEntry",
            value: function getRangeByEntry(number) {
                var _this_getRanges_find;
                return (_this_getRanges_find = this.getRanges().find(function(v) {
                    return v.contains(number);
                })) !== null && _this_getRanges_find !== void 0 ? _this_getRanges_find : null;
            }
        },
        {
            key: "getSortedTokens",
            value: function getSortedTokens() {
                return this.getEntries().sort(function(a, b) {
                    return a[0].start > b[0].start ? 1 : -1;
                }).map(function(param) {
                    var _param = _sliced_to_array(param, 2), _ = _param[0], token = _param[1];
                    return token;
                });
            }
        }
    ]);
    return TokenList;
}();
var HightlightTools = /*#__PURE__*/ function() {
    "use strict";
    function HightlightTools() {
        _class_call_check(this, HightlightTools);
    }
    _create_class(HightlightTools, null, [
        {
            key: "matchTokens",
            value: function matchTokens(text, regexp) {
                return _to_consumable_array(text.matchAll(regexp)).map(function(param) {
                    var string = param[1], index = param.index;
                    return [
                        new _utils_range__WEBPACK_IMPORTED_MODULE_0__.Range(index, index + string.length - 1),
                        string
                    ];
                });
            }
        },
        {
            key: "matchNewTokens",
            value: function matchNewTokens(text, regexp, ranges) {
                return this.matchTokens(text, regexp).filter(function(param) {
                    var _param = _sliced_to_array(param, 2), range = _param[0], _ = _param[1];
                    return !ranges.some(function(v) {
                        return v.containsRange(range);
                    });
                });
            }
        },
        {
            key: "testLinkString",
            value: function testLinkString(text) {
                return this.regex.stringLink.test(text);
            }
        },
        {
            key: "takeLinkFromString",
            value: /** @returns [newTitle, link] */ function takeLinkFromString(text) {
                var matchTitle = text.match(this.regex.stringLink);
                if (!matchTitle) return [
                    text,
                    null
                ];
                return [
                    matchTitle[1],
                    matchTitle[2]
                ];
            }
        },
        {
            key: "takeVariable",
            value: /** @returns [range, variable] */ function takeVariable(text, range) {
                var match = (' '.repeat(range.end + 1) + text.substring(range.end + 1)).match(/\w+/);
                return match ? [
                    new _utils_range__WEBPACK_IMPORTED_MODULE_0__.Range(match.index, match.index + match[0].length - 1),
                    match[0]
                ] : [];
            }
        },
        {
            key: "textToTokens",
            value: function textToTokens(rawText) {
                var _this = this;
                var tokens = rawText.split('\n').map(function(rawLine) {
                    var line = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__.trimStart)(rawLine, 4);
                    var tokenList = new TokenList();
                    _this.matchTokens(line, _this.regex.string).forEach(function(param) {
                        var _param = _sliced_to_array(param, 2), range = _param[0], content = _param[1];
                        return tokenList.collect(range, new Token(content, 'string'));
                    });
                    _this.matchNewTokens(line, _this.regex.numeric, tokenList.getRanges()).forEach(function(param) {
                        var _param = _sliced_to_array(param, 2), range = _param[0], content = _param[1];
                        return tokenList.collect(range, new Token(content, 'numeric'));
                    });
                    _this.matchNewTokens(line, _this.regex.objectKey, tokenList.getRanges()).forEach(function(param) {
                        var _param = _sliced_to_array(param, 2), range = _param[0], content = _param[1];
                        return tokenList.collect(range, new Token(content, 'object-key'));
                    });
                    _this.matchNewTokens(line, _this.regex.reserved, tokenList.getRanges()).forEach(function(param) {
                        var _param = _sliced_to_array(param, 2), range = _param[0], content = _param[1];
                        var type = content === 'export' ? 'reserved2' : 'reserved';
                        tokenList.collect(range, new Token(content, type));
                        if (content === 'const') {
                            var _this_takeVariable = _sliced_to_array(_this.takeVariable(line, range), 2), varRange = _this_takeVariable[0], varContent = _this_takeVariable[1];
                            if (varRange && varContent) tokenList.collect(varRange, new Token(varContent, 'variable'));
                        }
                    });
                    // collect unexpected tokens
                    line.split('').forEach(function(ch, index) {
                        if (tokenList.getRangeByEntry(index)) return;
                        tokenList.collect(new _utils_range__WEBPACK_IMPORTED_MODULE_0__.Range(index, index), new Token(ch));
                    });
                    tokenList.getEntries().filter(function(param) {
                        var _param = _sliced_to_array(param, 2), range = _param[0], token = _param[1];
                        return token.type === 'string' && _this.testLinkString(token.content);
                    }).forEach(function(param) {
                        var _param = _sliced_to_array(param, 2), range = _param[0], token = _param[1];
                        var _this_takeLinkFromString = _sliced_to_array(_this.takeLinkFromString(token.content), 2), content = _this_takeLinkFromString[0], link = _this_takeLinkFromString[1];
                        token.content = "'".concat(content, "'");
                        token.link = link;
                        range.end = range.start + token.content.length - 1;
                    });
                    return tokenList.getSortedTokens();
                });
                return tokens;
            }
        }
    ]);
    return HightlightTools;
}();
_define_property(HightlightTools, "regex", {
    string: /('(?:[^'\\]|\\.)*')/g,
    numeric: /(\d+)/g,
    objectKey: /(\w+\s*:)/g,
    reserved: /(const|export)/g,
    stringLink: /\[(.*)\]\((.*)\)/
});


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.tsx");



var container = document.getElementById('root');
var root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_App__WEBPACK_IMPORTED_MODULE_2__.App, {}, void 0, false, {
    fileName: "/home/runner/work/rikzun.github.io/rikzun.github.io/src/index.tsx",
    lineNumber: 7,
    columnNumber: 13
}, undefined));


/***/ }),

/***/ "./src/utils/range.ts":
/*!****************************!*\
  !*** ./src/utils/range.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Range: () => (/* binding */ Range)
/* harmony export */ });
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var Range = /*#__PURE__*/ function() {
    "use strict";
    function Range(start, end) {
        _class_call_check(this, Range);
        _define_property(this, "start", void 0);
        _define_property(this, "end", void 0);
        this.start = start;
        this.end = end;
    }
    _create_class(Range, [
        {
            key: "contains",
            value: function contains(value) {
                return this.start <= value && value <= this.end;
            }
        },
        {
            key: "containsRange",
            value: function containsRange(other) {
                return this.start <= other.start && other.end <= this.end;
            }
        }
    ]);
    return Range;
}();


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   array: () => (/* binding */ array),
/* harmony export */   eventCancel: () => (/* binding */ eventCancel),
/* harmony export */   saveBlob: () => (/* binding */ saveBlob),
/* harmony export */   trimStart: () => (/* binding */ trimStart)
/* harmony export */ });
function array(length) {
    return Array.from(Array(length).keys());
}
function saveBlob(blob) {
    var fileName = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'undefined';
    var url = window.URL.createObjectURL(blob);
    var element = document.createElement('a');
    element.style.display = 'none';
    element.href = url;
    element.download = fileName;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    window.URL.revokeObjectURL(url);
}
function trimStart(str, length) {
    var index = 0;
    while(index < str.length && index < length && str[index] === ' ')index++;
    return str.slice(index);
}
function eventCancel(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors"], () => (__webpack_exec__("./src/index.tsx")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.797ab37c.js.map