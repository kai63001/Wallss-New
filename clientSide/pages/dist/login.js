"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var dynamic_1 = require("next/dynamic");
var Layout = dynamic_1["default"](Promise.resolve().then(function () { return require("@/components/Layout"); }));
var Input = dynamic_1["default"](Promise.resolve().then(function () { return require("@/components/core/Input"); }));
var react_1 = require("react");
var link_1 = require("next/link");
var Login = function () {
    var _a = react_1.useState({}), errors = _a[0], setErrors = _a[1];
    var _b = react_1.useState(false), loading = _b[0], setLoading = _b[1];
    var onHanndleChangeValidate = function (e) {
        var _a;
        var name = e.target.name;
        setErrors(__assign(__assign({}, errors), (_a = {}, _a[name] = "", _a)));
    };
    var inputValidate = function (body) {
        var errorTag = {};
        var isValid = true;
        if (!body.username) {
            isValid = false;
            errorTag["username"] = "Username is required";
        }
        if (!body.password) {
            isValid = false;
            errorTag["password"] = "Password is required";
        }
        setErrors(errorTag);
        return isValid;
    };
    var loginSystem = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var body;
        return __generator(this, function (_a) {
            e.preventDefault();
            body = {
                username: e.target.username.value,
                password: e.target.password.value
            };
            if (!inputValidate(body))
                return [2 /*return*/];
            return [2 /*return*/];
        });
    }); };
    return (React.createElement(Layout, null,
        React.createElement("div", { className: "max-w-2xl mx-auto mt-14 px-2 sm:px-0" },
            React.createElement("div", { className: "bg-white sm:p-11 p-5 shadow-md" },
                React.createElement("h1", { className: "text-3xl font-romeo2" }, "Sign In"),
                React.createElement("span", { className: "text-lg mt-1 block" }, "Welcome back to the community"),
                React.createElement("br", null),
                React.createElement("form", { onSubmit: loginSystem },
                    React.createElement(Input, { name: "username", label: "Your email or username", placeholder: "jose@singh.com", error: errors["username"], onChange: onHanndleChangeValidate }),
                    React.createElement(Input, { name: "password", label: "Password", placeholder: "password", error: errors["password"], onChange: onHanndleChangeValidate, password: true }),
                    React.createElement("button", { className: "flex bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 text-white py-2 px-5 cursor-pointer", type: "submit", disabled: loading },
                        loading && (React.createElement("svg", { className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" },
                            React.createElement("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                            React.createElement("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }))),
                        React.createElement("span", null, "Sign in"))),
                React.createElement("br", null),
                React.createElement("div", { className: "flex justify-between" },
                    React.createElement(link_1["default"], { href: "/forgotpwd" },
                        React.createElement("a", { className: "text-purple-600" }, "Forgot password?")),
                    React.createElement(link_1["default"], { href: "/register" },
                        React.createElement("a", { className: "text-purple-600" }, "Create account")))))));
};
exports["default"] = Login;
