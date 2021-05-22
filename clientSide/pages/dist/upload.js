"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.getServerSideProps = void 0;
var react_1 = require("react");
var dynamic_1 = require("next/dynamic");
var Layout = dynamic_1["default"](Promise.resolve().then(function () { return require("@/components/Layout"); }));
var Input = dynamic_1["default"](Promise.resolve().then(function () { return require("@/components/core/Input"); }));
var InputCategory = dynamic_1["default"](Promise.resolve().then(function () { return require("@/components/core/InputCategory"); }));
var auth_1 = require("@/lib/auth");
var UploadPage = function (props) {
    var _a = react_1.useState(0), type = _a[0], setType = _a[1];
    var _b = react_1.useState(false), hasAuthor = _b[0], setHasAuthor = _b[1];
    var _c = react_1.useState([]), listCategory = _c[0], setListCategory = _c[1];
    var _d = react_1.useState([]), listTags = _d[0], setListTags = _d[1];
    // console.log(props.romeo)
    return (React.createElement(Layout, null,
        React.createElement("div", { className: "max-w-2xl mx-auto mt-14 px-2 sm:px-0" },
            React.createElement("div", { className: "" },
                React.createElement("div", { className: "bg-purple-500 px-5 py-2 text-white" }, "Wall Title"),
                React.createElement("div", { className: "bg-white p-5" },
                    React.createElement("input", { type: "text", className: " focus:ring-1  focus:outline-none w-full text-black placeholder-gray-500 border " + (false
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                            : "border-gray-200 focus:border-purple-500 focus:ring-purple-500") + " py-1 pl-3", placeholder: "What is your wall called" }))),
            React.createElement("div", { className: "border-dashed border-4 border-purple-300 mt-4 p-3" },
                React.createElement("div", { className: "flex flex-row mb-2 space-x-4" },
                    React.createElement("div", { onClick: function () { return setType(0); }, className: "w-32 h-32 " + (type == 0 ? "bg-purple-700 text-white" : "bg-white text-black") + "  flex items-center justify-center flex-col cursor-pointer" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 " + (type == 0 ? "text-white" : "text-purple-700"), fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" })),
                        React.createElement("div", null, "Desktop"),
                        React.createElement("div", { className: "text-sm text-gray-400 -mt-1" }, "JPG,PNG,GIF")),
                    React.createElement("div", { onClick: function () { return setType(1); }, className: "w-32 h-32 " + (type == 1 ? "bg-purple-700 text-white" : "bg-white text-black") + " flex items-center justify-center flex-col cursor-pointer" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6 " + (type == 1 ? "text-white" : "text-purple-700"), fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" })),
                        React.createElement("div", null, "Mobile"),
                        React.createElement("div", { className: "text-sm text-gray-400 -mt-1" }, "JPG,PNG,GIF"))),
                React.createElement("hr", null),
                React.createElement("div", { className: "flex items-center justify-center h-64" },
                    React.createElement("button", { className: "flex justify-start bg-purple-700 text-white px-6 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-400" },
                        React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" })),
                        React.createElement("span", null, "Upload")))),
            React.createElement("div", { className: "my-5" },
                React.createElement("div", { className: "bg-purple-500 px-5 py-2 text-white" }, "Wall Details"),
                React.createElement("div", { className: "bg-white p-5" },
                    React.createElement("div", { className: "" },
                        React.createElement("span", { className: "text-lg" }, "Author"),
                        React.createElement("label", { className: "block cursor-pointer select-none text-gray-700" },
                            React.createElement("input", { onClick: function () { return setHasAuthor(!hasAuthor); }, type: "checkbox", name: "author", className: "mr-2 form-checkbox border-purple-700 text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600", id: "author" }),
                            "Has an author"),
                        hasAuthor && (React.createElement("input", { type: "text", className: " mt-1 focus:ring-1  focus:outline-none w-full text-black placeholder-gray-500 border-gray-200 focus:border-purple-500 focus:ring-purple-500 py-1 pl-3", placeholder: "Author name" }))),
                    React.createElement("div", { className: "mt-2" },
                        React.createElement("span", { className: "text-lg" }, "Category"),
                        React.createElement("div", { className: "text-sm text-gray-600 -mt-2" }, "What walls category"),
                        React.createElement(InputCategory, { list: listCategory, setList: setListCategory, placeholder: "E.g.Anime Gundam (Enter to add)" })),
                    React.createElement("div", { className: "mt-2" },
                        React.createElement("span", { className: "text-lg" }, "Tags"),
                        React.createElement("div", { className: "text-sm text-gray-600 -mt-2" }, "Use tags to add more detailed"),
                        React.createElement(InputCategory, { type: "tags", list: listTags, setList: setListTags, placeholder: "E.g.Space Wing Star Flighter (Enter to add)" })))),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("br", null))));
};
function getServerSideProps(_a) {
    var req = _a.req, res = _a.res;
    return __awaiter(this, void 0, void 0, function () {
        var cookie, token;
        return __generator(this, function (_b) {
            cookie = req ? req.headers.cookie : undefined;
            if (cookie == undefined) {
                return [2 /*return*/, {
                        redirect: {
                            permanent: false,
                            destination: "/login"
                        },
                        props: {}
                    }];
            }
            token = cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            if (!auth_1.isAuth(token)) {
                return [2 /*return*/, {
                        redirect: {
                            permanent: false,
                            destination: "/login"
                        },
                        props: {}
                    }];
            }
            return [2 /*return*/, {
                    props: {
                        token: token
                        // romeo: ctx.req ? { cookie: ctx.req.headers.cookie } : undefined
                    }
                }];
        });
    });
}
exports.getServerSideProps = getServerSideProps;
exports["default"] = UploadPage;
