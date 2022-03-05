"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Melonlemonmelon = exports.Airmelon = exports.Earthmelon = exports.Firemelon = exports.Watermelon = void 0;
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this._elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Watermelon.prototype.toString = function () {
        return "Element: Water\n        Sort: ".concat(this.melonSort, "\n        Element Index: ").concat(this._elementIndex);
    };
    return Watermelon;
}(Melon));
exports.Watermelon = Watermelon;
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this._elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Firemelon.prototype.toString = function () {
        return "Element: Fire\n        Sort: ".concat(this.melonSort, "\n        Element Index: ").concat(this._elementIndex);
    };
    return Firemelon;
}(Melon));
exports.Firemelon = Firemelon;
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this._elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Earthmelon.prototype.toString = function () {
        return "Element: Earth\n        Sort: ".concat(this.melonSort, "\n        Element Index: ").concat(this._elementIndex);
    };
    return Earthmelon;
}(Melon));
exports.Earthmelon = Earthmelon;
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this._elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Airmelon.prototype.toString = function () {
        return "Element: Air\n        Sort: ".concat(this.melonSort, "\n        Element Index: ").concat(this._elementIndex);
    };
    return Airmelon;
}(Melon));
exports.Airmelon = Airmelon;
var Melonlemonmelon = /** @class */ (function (_super) {
    __extends(Melonlemonmelon, _super);
    function Melonlemonmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elements = ['Water', 'Fire', 'Earth', 'Air'];
        _this._elementIndex = _this.weight * _this.melonSort.length;
        return _this;
    }
    Melonlemonmelon.prototype.morph = function () {
        var currElement = this.elements.shift();
        this.elements.push(currElement);
        return currElement;
    };
    Melonlemonmelon.prototype.toString = function () {
        return "Element: ".concat(this.morph(), "\n        Sort: ").concat(this.melonSort, "\n        Element Index: ").concat(this._elementIndex);
    };
    return Melonlemonmelon;
}(Watermelon));
exports.Melonlemonmelon = Melonlemonmelon;
var lemonmelon = new Melonlemonmelon(10, 'red');
console.log(lemonmelon.toString());
console.log(lemonmelon.toString());
