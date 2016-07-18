"use strict";
var Fruit = (function () {
    function Fruit(plant) {
        this.plant = plant;
    }
    Fruit.prototype.getPlantType = function () {
        return this.plant;
    };
    return Fruit;
}());
exports.Fruit = Fruit;
//# sourceMappingURL=fruit.js.map