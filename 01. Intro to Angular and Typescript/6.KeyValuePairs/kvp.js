"use strict";
exports.__esModule = true;
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair() {
    }
    KeyValuePair.prototype.setKeyValue = function (key, value) {
        this.key = key;
        this.value = value;
    };
    KeyValuePair.prototype.display = function () {
        return console.log("key = ".concat(this.key, ", value = ").concat(this.value));
    };
    return KeyValuePair;
}());
exports["default"] = KeyValuePair;
var kvp = new KeyValuePair();
kvp.setKeyValue(1, "Steve");
kvp.display();
