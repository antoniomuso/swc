//// [src/a.ts]
define([
    "require",
    "exports",
    "@swc/helpers/src/_interop_require_default.mjs",
    "./b"
], function(require, exports, _interop_require_default, _b) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), Object.defineProperty(exports, "default", {
        enumerable: !0,
        get: ()=>Foo
    }), _b = (_interop_require_default = _interop_require_default.default)(_b);
    class Foo {
    }
    (0, _b.default)();
});
//// [src/b.ts]
define([
    "require",
    "exports",
    "@swc/helpers/src/_interop_require_default.mjs",
    "@swc/helpers/src/_interop_require_wildcard.mjs",
    "./a"
], function(require, exports, _interop_require_default, _interop_require_wildcard, _a) {
    "use strict";
    function foo() {
        new _a.default();
    }
    Object.defineProperty(exports, "__esModule", {
        value: !0
    }), Object.defineProperty(exports, "default", {
        enumerable: !0,
        get: ()=>foo
    }), _interop_require_default = _interop_require_default.default, _interop_require_wildcard = _interop_require_wildcard.default, _a = _interop_require_default(_a), new Promise((resolve, reject)=>require([
            "./a"
        ], (m)=>resolve(_interop_require_wildcard(m)), reject));
});
