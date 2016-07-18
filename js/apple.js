"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fruit_1 = require('./fruit');
var Apple = (function (_super) {
    __extends(Apple, _super);
    function Apple(color, size, plant) {
        _super.call(this, plant);
        this.color = color;
        this.size = size;
    }
    return Apple;
}(fruit_1.Fruit));
exports.Apple = Apple;
//# sourceMappingURL=apple.js.map