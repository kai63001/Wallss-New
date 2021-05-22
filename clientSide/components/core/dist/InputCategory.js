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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var axios_1 = require("@/lib/axios");
var react_1 = require("react");
var InputCategory = function (props) {
    // const [list, setList] = useState([]);
    var _a = react_1.useState(""), input = _a[0], setInput = _a[1];
    var _b = react_1.useState([]), listSearch = _b[0], setListSearch = _b[1];
    var _c = react_1.useState([]), rawlistSearch = _c[0], setRawListSearch = _c[1];
    var onSearchCategory = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(e.target.value.length >= 3)) return [3 /*break*/, 3];
                    if (!(e.target.value.length == 3)) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios_1["default"].get(process.env.HOST + "/upload/category?name=" + e.target.value)];
                case 1:
                    data = _a.sent();
                    // console.log(data.data)
                    setRawListSearch(__spreadArrays(data.data));
                    setListSearch(__spreadArrays(data.data));
                    _a.label = 2;
                case 2:
                    if (e.target.value.length > 3) {
                        data = listSearch.filter(function (data, i) {
                            return data.name.search(new RegExp(e.target.value, "i")) > -1;
                        });
                        // console.log("data:",data);
                        // console.log("input:",e.target.value);
                        setListSearch(__spreadArrays(data));
                    }
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var onInputListChange = function (e) {
        if (e.keyCode == 13 && e.target.value) {
            // console.log("enterrr");
            if (!(props.list.indexOf(e.target.value) >= 0)) {
                props.setList(__spreadArrays(props.list, [e.target.value]));
            }
            e.target.value = "";
            setInput("");
        }
        if (e.keyCode == 8 && !e.target.value) {
            var data = props.list;
            data.pop();
            props.setList(__spreadArrays(data));
            setInput("");
        }
        if (e.keyCode == 8 && e.target.value) {
            setListSearch(__spreadArrays(rawlistSearch));
        }
    };
    var selectCategory = function (name) {
        // console.log(name)
        if (!(props.list.indexOf(name) >= 0)) {
            props.setList(__spreadArrays(props.list, [name]));
        }
        setInput("");
    };
    var addCategory = function () { return __awaiter(void 0, void 0, void 0, function () {
        var data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!(props.list.indexOf(input) >= 0)) return [3 /*break*/, 2];
                    return [4 /*yield*/, axios_1["default"].post(process.env.HOST + "/upload/category", {
                            name: input
                        })];
                case 1:
                    data = _a.sent();
                    console.log(data);
                    props.setList(__spreadArrays(props.list, [input]));
                    _a.label = 2;
                case 2:
                    setInput("");
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("div", { className: "relative" },
        React.createElement("div", { className: "flex overflow-auto items-center relative pl-1 focus-within:ring-1 focus-within:outline-none w-full text-black placeholder-gray-500 border border-gray-200 focus-within:border-purple-500 focus-within:ring-purple-500 p-0" },
            props.list.map(function (data, i) { return (React.createElement("div", { key: i, className: "bg-purple-600 text-white text-sm px-2 mr-1 whitespace-nowrap uppercase select-none cursor-pointer" }, data)); }),
            React.createElement("input", { type: "text", placeholder: props.placeholder || 'placeholder', className: "focus:outline-none w-full border-none focus:border-none outline-none focus:ring-0 py-1 pl-3", onKeyDown: onInputListChange, value: input, onChange: function (e) {
                    setInput(e.target.value);
                    onSearchCategory(e);
                } })),
        input.length >= 3 && props.type != 'tags' ? (React.createElement("div", { className: "bg-white shadow absolute top-10 w-full p-3 flex flex-wrap z-10" },
            listSearch.map(function (data, i) {
                return (React.createElement("div", { onClick: function () { return selectCategory(data.name); }, key: i, className: "bg-purple-600 text-white text-sm mb-2 px-2 mr-1 whitespace-nowrap uppercase select-none cursor-pointer" }, data.name));
            }),
            React.createElement("div", { className: "block w-full" },
                React.createElement("hr", null),
                React.createElement("div", { className: "flex mt-2.5" },
                    React.createElement("div", { className: "border-purple-700 ring-2 ring-purple-700 px-2 ml-0.5 text-sm whitespace-nowrap uppercase select-none cursor-pointer hover:bg-purple-200 delay-75", onClick: addCategory },
                        "ADD ",
                        React.createElement("span", { className: "text-purple-700" }, input),
                        " TO CATEGORY"))))) : ('')));
};
exports["default"] = InputCategory;
