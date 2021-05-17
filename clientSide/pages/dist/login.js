"use strict";
exports.__esModule = true;
var dynamic_1 = require("next/dynamic");
var Layout = dynamic_1["default"](Promise.resolve().then(function () { return require("@/components/Layout"); }));
var Input = dynamic_1["default"](Promise.resolve().then(function () { return require("@/components/core/Input"); }));
var react_1 = require("react");
var link_1 = require("next/link");
var Login = function () {
    var _a = react_1.useState(false), loading = _a[0], setLoading = _a[1];
    var loginSystem = function (e) {
        e.preventDefault();
    };
    return (React.createElement(Layout, null,
        React.createElement("div", { className: "max-w-2xl mx-auto mt-14 px-2 sm:px-0" },
            React.createElement("div", { className: "bg-white sm:p-11 p-5 shadow-md" },
                React.createElement("h1", { className: "text-3xl font-romeo2" }, "Sign In"),
                React.createElement("span", { className: "text-lg mt-1 block" }, "Welcome back to the community"),
                React.createElement("br", null),
                React.createElement("form", { onSubmit: loginSystem },
                    React.createElement(Input, { name: "username ", label: "Your email or username", placeholder: "jose@singh.com" }),
                    React.createElement(Input, { name: "password", label: "Password", placeholder: "password", password: true }),
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
